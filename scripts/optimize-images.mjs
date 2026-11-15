// Image pipeline: assets-src/** -> public/images/** as WebP at several widths,
// plus content/images.manifest.json with intrinsic size and a tiny blur placeholder.
// Add a photo: drop it in assets-src/<folder>/, run `npm run images`,
// then reference "<folder>/<name>" (no extension) in content/*.ts.
import sharp from 'sharp';
import { readdir, mkdir, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets-src';
const OUT = 'public/images';
const WIDTHS = [640, 1080, 1600];
// Optional crops (left, top, width, height in source pixels), keyed by "<folder>/<name>".
// Source files kept on disk but not published.
const IGNORE = new Set(['projects/suminagashi/suminagashi-untouched']);
const CROPS = {
  'projects/angadi/angadi-owner-home': { left: 0, top: 0, width: 1082, height: 1870 },
  'projects/angadi/angadi-approval-guardrail': { left: 0, top: 0, width: 1082, height: 1960 },
};

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(png|jpe?g|webp|tiff?)$/i.test(e.name)) out.push(p);
  }
  return out;
}

// public/images is generated output: rebuild it from scratch each run.
await rm(OUT, { recursive: true, force: true });
const manifest = {};
for (const file of (await walk(SRC)).sort()) {
  const rel = path.relative(SRC, file).replace(/\\/g, '/');
  const key = rel.replace(/\.[^.]+$/, '');
  if (IGNORE.has(key)) continue;
  const outDir = path.join(OUT, path.dirname(rel));
  await mkdir(outDir, { recursive: true });
  let base = sharp(file).rotate();
  if (CROPS[key]) base = base.extract(CROPS[key]);
  const buf = await base.toBuffer();
  const meta = await sharp(buf).metadata();
  const widths = [...new Set(WIDTHS.filter((w) => w < meta.width).concat(Math.min(meta.width, 2000)))];
  const sources = [];
  for (const w of widths) {
    const name = `${path.basename(key)}-${w}.webp`;
    await sharp(buf).resize({ width: w }).webp({ quality: 80 }).toFile(path.join(outDir, name));
    sources.push({ w, src: `/images/${path.dirname(rel)}/${name}` });
  }
  const blur = await sharp(buf).resize({ width: 16 }).webp({ quality: 40 }).toBuffer();
  manifest[key] = {
    width: meta.width,
    height: meta.height,
    src: sources[sources.length - 1].src,
    srcSet: sources.map((s) => `${s.src} ${s.w}w`).join(', '),
    blur: `data:image/webp;base64,${blur.toString('base64')}`,
  };
  console.log(`${key}  ${meta.width}x${meta.height}  -> ${sources.length} sizes`);
}
await mkdir('content', { recursive: true });
await writeFile('content/images.manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`manifest: ${Object.keys(manifest).length} images`);
