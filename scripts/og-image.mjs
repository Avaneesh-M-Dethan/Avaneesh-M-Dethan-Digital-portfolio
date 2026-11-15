// Renders public/og.jpg (1200x630), the image shown when the site is shared on LinkedIn, WhatsApp, X, etc.
// Usage: node scripts/og-image.mjs
import { chromium } from 'playwright';

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,300&family=IBM+Plex+Mono&display=block" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#101010;color:#eae7df;font-family:'Cormorant Garamond',serif;position:relative;overflow:hidden}
  .wrap{position:absolute;inset:64px 72px;display:flex;flex-direction:column}
  .mono{font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:rgba(234,231,223,.6)}
  .top{display:flex;justify-content:space-between}
  .gold{color:#b9a16a}
  h1{margin-top:auto;font-weight:400;font-size:150px;line-height:.86;letter-spacing:-.025em;text-transform:uppercase}
  h1 em{font-weight:300;text-transform:none;color:#b9a16a;margin-right:.22em}
  .rule{height:1px;background:rgba(234,231,223,.16);margin:34px 0 26px}
  .bottom{display:flex;justify-content:space-between;align-items:baseline}
  .tag{font-style:italic;font-weight:300;font-size:40px}
  .grain{position:absolute;inset:0;opacity:.06;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
</style></head><body><div class="grain"></div><div class="wrap">
  <div class="top"><span class="mono"><span class="gold">01</span> &nbsp;A portfolio, in eight chapters</span><span class="mono">TAPMI Bengaluru</span></div>
  <h1>Avaneesh<br><em>M</em>Dethan</h1>
  <div class="rule"></div>
  <div class="bottom"><span class="tag">Curious by nature. Driven to build.</span><span class="mono">Leadership · Built · Academic</span></div>
</div></body></html>`;

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 88 });
await browser.close();
console.log('wrote public/og.jpg');
