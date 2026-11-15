// One-off preparation of supplied photos/screenshots: crops and privacy blurs, then saves into assets-src.
// Usage: node scripts/prepare-photos.mjs <sourceDir>
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const src = process.argv[2];
const out = 'assets-src';
const save = async (img, rel) => {
  mkdirSync(path.dirname(path.join(out, rel)), { recursive: true });
  await img.toFile(path.join(out, rel));
  console.log('wrote', rel);
};

// Blur rectangular regions (privacy) in place.
async function blurRegions(file, regions) {
  const base = sharp(file);
  const layers = [];
  for (const r of regions) {
    const piece = await sharp(file).extract(r).blur(14).toBuffer();
    layers.push({ input: piece, left: r.left, top: r.top });
  }
  return base.composite(layers);
}

// 1. Jarvis interface: trim the browser scrollbar on the right edge.
await save(sharp(path.join(src, '1.png')).extract({ left: 0, top: 0, width: 1900, height: 876 }), 'projects/jarvis/jarvis-interface.png');

// 2. Zapier: blur a third party's email (To) and the sender address (From).
const z = await blurRegions(path.join(src, '2.png'), [
  { left: 1436, top: 336, width: 360, height: 72 },
  { left: 1436, top: 632, width: 400, height: 44 },
]);
await save(z, 'projects/automations/zapier-form-autoreply.png');

// 3. Registro Watcher: the Telegram bot on a phone.
await save(sharp(path.join(src, '3.png')), 'projects/registro/registro-attendance.png');

// 4-6. Personal photographs.
await save(sharp(path.join(src, '4.png')).jpeg({ quality: 92 }), 'personal/best-delegate-sarvomun-2024.jpg');
await save(sharp(path.join(src, '5.png')).jpeg({ quality: 92 }), 'personal/portrait-lets-talk.jpg');
// Trim a near-black strip (and a stray speck) along the bottom edge.
await save(sharp(path.join(src, '6.png')).extract({ left: 0, top: 0, width: 608, height: 678 }).jpeg({ quality: 92 }), 'personal/speaking-mun.jpg');

// 7. Quoin live hero (supplied screenshot): trim the browser bar (8px) and scrollbar (10px).
await save(sharp(path.join(src, '7.png')).extract({ left: 0, top: 8, width: 1900, height: 865 }), 'projects/quoin/quoin-live-hero.png');

// 8. TMUN Secretary General announcement poster.
await save(sharp(path.join(src, '8.png')).jpeg({ quality: 90 }), 'personal/tmun-secretary-general.jpg');
// 9. On stage at GLC.
await save(sharp(path.join(src, '9.png')).jpeg({ quality: 90 }), 'personal/glc-stage.jpg');
