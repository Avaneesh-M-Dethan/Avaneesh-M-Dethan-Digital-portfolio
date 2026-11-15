// Slices full-page QA screenshots into viewport-height frames for review.
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
const [pattern = '', frameH = '900'] = process.argv.slice(2);
await mkdir('qa-shots/frames', { recursive: true });
for (const f of (await readdir('qa-shots')).filter((f) => f.endsWith('.png') && f.includes(pattern))) {
  const img = sharp(`qa-shots/${f}`);
  const { width, height } = await img.metadata();
  const h = Number(frameH);
  let n = 0;
  for (let top = 0; top < height; top += h, n++) {
    await sharp(`qa-shots/${f}`).extract({ left: 0, top, width, height: Math.min(h, height - top) }).toFile(`qa-shots/frames/${f.replace('.png', '')}-${String(n).padStart(2, '0')}.png`);
  }
  console.log(f, n, 'frames');
}
