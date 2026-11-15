// Runs Lighthouse (mobile + desktop) against a running static server and saves JSON reports.
// Usage: npm start (in another terminal), then: node scripts/lighthouse.mjs [baseUrl] [paths]
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:3011';
const paths = (process.argv[3] || '/,/work/quoin/,/academic/ai-marketing-automation/').split(',');
mkdirSync('.claude/lighthouse', { recursive: true });

const rows = [];
for (const p of paths) {
  for (const preset of ['mobile', 'desktop']) {
    const name = `${p === '/' ? 'home' : p.replace(/\//g, '_').replace(/^_|_$/g, '')}-${preset}`;
    const out = `.claude/lighthouse/${name}.json`;
    const args = [
      'lighthouse', base + p, '--output=json', `--output-path=${out}`,
      '--chrome-flags=--headless=new --disable-dev-shm-usage --no-sandbox',
      '--only-categories=performance,accessibility,best-practices,seo',
    ];
    if (preset === 'desktop') args.push('--preset=desktop');
    try {
      execFileSync('npx', args, { stdio: 'pipe', shell: true });
    } catch (e) {
      // Lighthouse on Windows can exit non-zero on temp-dir cleanup (EPERM) after writing the report.
    }
    const r = JSON.parse(readFileSync(out, 'utf8'));
    const s = Object.fromEntries(Object.entries(r.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
    rows.push({ page: p, preset, ...s, LCP: r.audits['largest-contentful-paint'].displayValue, CLS: r.audits['cumulative-layout-shift'].displayValue, TBT: r.audits['total-blocking-time'].displayValue });
  }
}
console.table(rows);
