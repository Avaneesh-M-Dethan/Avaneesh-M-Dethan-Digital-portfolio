// Captures the real Suminagashi (Dragon Web) piece after painting ink with simulated drags.
// Usage: node scripts/capture-suminagashi.mjs <url> <outDir>
import { chromium } from 'playwright';
const [url = 'http://localhost:3020', out = 'assets-src/projects/suminagashi'] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'chrome', args: ['--use-angle=d3d11', '--enable-gpu'] });
async function shoot(name, viewport, strokes, settle = 2500) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  for (const s of strokes) {
    await page.mouse.move(s[0][0] * viewport.width, s[0][1] * viewport.height);
    await page.mouse.down();
    for (const [x, y] of s.slice(1)) {
      await page.mouse.move(x * viewport.width, y * viewport.height, { steps: 25 });
    }
    await page.mouse.up();
    await page.waitForTimeout(400);
  }
  await page.waitForTimeout(settle);
  await page.screenshot({ path: `${out}/${name}.png` });
  console.log(name, errors.length ? 'errors: ' + errors.join(' | ') : 'ok');
  await page.close();
}
const swirl = [
  [[0.15, 0.55], [0.3, 0.4], [0.45, 0.6], [0.6, 0.42], [0.8, 0.58]],
  [[0.25, 0.3], [0.4, 0.5], [0.55, 0.3], [0.7, 0.5]],
  [[0.2, 0.75], [0.5, 0.65], [0.75, 0.8]],
];
await shoot('suminagashi-untouched', { width: 1440, height: 900 }, [], 500);
await shoot('suminagashi-ink-desktop', { width: 1440, height: 900 }, swirl);
await shoot('suminagashi-ink-detail', { width: 1440, height: 900 }, [...swirl, ...swirl.map(s => s.map(([x, y]) => [x, 1 - y]))], 4000);
await browser.close();
