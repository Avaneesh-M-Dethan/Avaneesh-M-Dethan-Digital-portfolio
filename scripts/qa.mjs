// QA: serves nothing itself. Point it at a running static server (npm start -> http://localhost:3011).
// Usage: node scripts/qa.mjs [baseUrl] [widths=1440,390] [pages=/,/work/quoin/]
// Writes full-page screenshots to qa-shots/ and reports console errors, failed requests and broken internal links.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const base = process.argv[2] || 'http://localhost:3011';
const widths = (process.argv[3] || '1440,390').split(',').map(Number);
const pages = (process.argv[4] || '/').split(',');
const reduced = process.env.REDUCED === '1';
await mkdir('qa-shots', { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const problems = [];
const internalLinks = new Set();

for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 600 ? 844 : 900 }, deviceScaleFactor: 1, reducedMotion: reduced ? 'reduce' : 'no-preference' });
  for (const p of pages) {
    const page = await ctx.newPage();
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problems.push(`[${w}] ${p} console.${m.type()}: ${m.text()}`); });
    page.on('pageerror', (e) => problems.push(`[${w}] ${p} pageerror: ${e.message}`));
    page.on('requestfailed', (r) => problems.push(`[${w}] ${p} requestfailed: ${r.url()}`));
    page.on('response', (r) => { if (r.status() >= 400) problems.push(`[${w}] ${p} HTTP ${r.status()}: ${r.url()}`); });
    await page.goto(base + p, { waitUntil: 'networkidle' });
    // Scroll through to trigger reveals.
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += 500) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(120);
    }
    await page.waitForTimeout(1600);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) problems.push(`[${w}] ${p} horizontal overflow: ${overflow}px`);
    const hidden = await page.evaluate(() => [...document.querySelectorAll('[data-reveal]')].filter((el) => !el.hasAttribute('data-shown') && getComputedStyle(el).display !== 'none').length);
    if (hidden && !reduced) problems.push(`[${w}] ${p} ${hidden} reveal element(s) never revealed`);
    (await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')))).forEach((href) => {
      if (href && (href.startsWith('/') || href.startsWith('#'))) internalLinks.add(href.startsWith('#') ? p + href : href);
    });
    const name = `${p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_|_$/g, '')}-${w}${reduced ? '-reduced' : ''}`;
    await page.screenshot({ path: `qa-shots/${name}.png`, fullPage: true });
    console.log('shot', name, `${h}px`);
    await page.close();
  }
  await ctx.close();
}

// Internal link check: every path resolves, every #hash exists on its page.
const ctx = await browser.newContext();
const page = await ctx.newPage();
for (const href of internalLinks) {
  const [path, hash] = href.split('#');
  const res = await page.goto(base + (path || '/'), { waitUntil: 'domcontentloaded' });
  if (!res || res.status() >= 400) { problems.push(`broken link: ${href} (HTTP ${res?.status()})`); continue; }
  if (hash && !(await page.$(`[id="${hash}"]`))) problems.push(`missing anchor: ${href}`);
}
console.log(`checked ${internalLinks.size} internal links`);
await browser.close();

console.log(problems.length ? `\nPROBLEMS (${problems.length}):\n` + [...new Set(problems)].join('\n') : '\nNo problems found.');
