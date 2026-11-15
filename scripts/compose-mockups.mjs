// Composes presentation images (browser frame + phone) from raw captures.
// Usage: node scripts/compose-mockups.mjs <captureDir> <outDir>
// Inputs expected in captureDir: home-hero.png, home-900.png, services.png, mobile-hero.png (Quoin captures).
import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const [inDir = 'scratch/quoin', outDir = 'assets-src/projects/quoin'] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
const uri = (f) => `data:image/png;base64,${readFileSync(path.join(inDir, f)).toString('base64')}`;

const css = `
  *{margin:0;box-sizing:border-box}
  body{background:#141413;font-family:system-ui,sans-serif;overflow:hidden;position:relative}
  .glow{position:absolute;inset:0;background:radial-gradient(60% 55% at 30% 35%,rgba(185,161,106,.10),transparent 70%)}
  .grain{position:absolute;inset:0;opacity:.07;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
  .browser{position:absolute;border-radius:14px;overflow:hidden;background:#0b0b0b;box-shadow:0 0 0 1px rgba(234,231,223,.10),0 40px 120px rgba(0,0,0,.55)}
  .bar{height:44px;display:flex;align-items:center;gap:9px;padding:0 18px;background:#1c1c1b;border-bottom:1px solid rgba(234,231,223,.07)}
  .dot{width:11px;height:11px;border-radius:50%;background:#3a3a38}
  .url{margin-left:18px;flex:1;max-width:420px;height:26px;border-radius:7px;background:#121211;color:rgba(234,231,223,.55);font-size:13px;display:flex;align-items:center;padding:0 12px;letter-spacing:.02em}
  .browser img{display:block;width:100%}
  .phone{position:absolute;border-radius:54px;padding:14px;background:#0d0d0c;box-shadow:0 0 0 1.5px rgba(234,231,223,.16),0 50px 120px rgba(0,0,0,.7)}
  .phone .screen{border-radius:42px;overflow:hidden;height:100%}
  .phone img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
`;
const browser = (img, style) => `<div class="browser" style="${style}"><div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="url">quoin-tau.vercel.app</span></div><img src="${img}"></div>`;
const phone = (img, style) => `<div class="phone" style="${style}"><div class="screen"><img src="${img}"></div></div>`;

const scenes = [
  {
    name: 'quoin-cover',
    w: 2400, h: 1500,
    body: browser(uri('home-hero.png'), 'left:150px;top:170px;width:1760px') + phone(uri('mobile-hero.png'), 'right:150px;top:330px;width:470px;height:1000px'),
  },
  {
    name: 'quoin-identity',
    w: 2400, h: 1560,
    body: browser(uri('home-900.png'), 'left:200px;top:150px;width:2000px'),
  },
  {
    name: 'quoin-services',
    w: 2400, h: 1560,
    body: browser(uri('services.png'), 'left:200px;top:150px;width:2000px'),
  },
];

const b = await chromium.launch({ channel: 'chrome' });
for (const s of scenes) {
  const p = await b.newPage({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: 1 });
  await p.setContent(`<!doctype html><html><head><style>${css}</style></head><body style="width:${s.w}px;height:${s.h}px"><div class="glow"></div><div class="grain"></div>${s.body}</body></html>`, { waitUntil: 'load' });
  await p.waitForTimeout(300);
  await p.screenshot({ path: path.join(outDir, `${s.name}.png`) });
  console.log('wrote', s.name);
  await p.close();
}
await b.close();
