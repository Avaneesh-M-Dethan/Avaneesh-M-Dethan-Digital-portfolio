// Exports shareable versions of the portfolio into deliverables/:
//   - Avaneesh-M-Dethan-Portfolio.pdf  one tall page that looks like the site, with working links
//   - portfolio-copy.txt               all visible text, for pasting into an AI-text checker
// Usage: npm run build && npm start (serves out/ on 3011), then: node scripts/export-share.mjs [baseUrl]
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:3011';
mkdirSync('deliverables', { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
await page.goto(base + '/', { waitUntil: 'networkidle' });

// Load every lazy image before printing.
await page.evaluate(async () => {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => img.setAttribute('loading', 'eager'));
  await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; }))));
});
await page.waitForTimeout(800);

// Plain text, in reading order, without menu and footer chrome.
const text = await page.evaluate(() => {
  const main = document.querySelector('main');
  return main.innerText.replace(/\n{3,}/g, '\n\n').trim();
});
writeFileSync('deliverables/portfolio-copy.txt', text + '\n');
console.log(`wrote deliverables/portfolio-copy.txt (${text.split(/\s+/).length} words)`);

// One continuous page, so the design is not chopped up by page breaks.
await page.emulateMedia({ media: 'print' });
const height = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight));
await page.pdf({
  path: 'deliverables/Avaneesh-M-Dethan-Portfolio.pdf',
  width: '1280px',
  height: `${height + 2}px`,
  printBackground: true,
  pageRanges: '1',
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});
console.log(`wrote deliverables/Avaneesh-M-Dethan-Portfolio.pdf (1280 x ${height}px)`);
await browser.close();
