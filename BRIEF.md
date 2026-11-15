# Avaneesh M Dethan — Portfolio Brief

## Project Overview

A personal portfolio for Avaneesh M Dethan, a BBA student at T A Pai Management Institute, Bengaluru. It is built as an editorial story in eight chapters rather than a résumé page. It aims to leave three impressions: he takes initiative and leads, he is genuinely interested in business and technology and builds things, and he has an identity beyond academics.

Every claim on the site is grounded in real material: project repositories, decks and documents found on his laptop. Anything not yet confirmed is held back and listed in `CONTENT_NEEDED.md`.

## Pages & Features

**Home, in eight chapters**
1. **Introduction**: oversized editorial name, tagline and a short intro.
2. **About**: a personal introduction, interests and an education timeline on a paper-toned panel.
3. **Leadership**: Blue House Captain, MUN (two Best Delegate awards, marked with gold seals), TMUN Secretary General with the TMUN 2 registration flow, and the Placement and Corporate Engagement Committee (ongoing).
4. **Built**: Quoin and Suminagashi as featured image cards, plus AI Automations, Jarvis and Registro Watcher as expandable rows.
5. **Academic**: eight projects in four course folios (LLR, DIR, TLM, Accounting). Each shows what we did and what I learnt, with a link to the work on Google Drive.
6. **Beyond the work**: sports, MUN as an interest, other interests.
7. **The next chapter**: an interactive "Currently exploring" panel, the skills he is developing, and work in progress.
8. **Connect**: email with copy-to-clipboard, GitHub and Quoin links.

**One page, no case studies:** every project shows "What I did" and "What I learnt" in place, with a link to the live site, GitHub or Google Drive.

**Signature detail:** a chapter rail on the right edge. A thin gold thread fills as you read and names the current chapter in italic serif. On phones it becomes a one-pixel progress line under the navigation.

**Quality**
- Lighthouse scores 98 to 100 on Performance, Accessibility, Best Practices and SEO, on both mobile and desktop.
- Fully keyboard accessible, with a skip link, visible focus and a focus-trapped mobile menu.
- Respects reduced-motion settings.
- Tested from 320 to 1920 pixels wide.

## Tech Stack (with why)

- **Framework:** Next.js 15 with TypeScript, exported as a static site. It is the same stack as his other projects, so he can read and edit it, and static output hosts free.
- **Styling:** Tailwind CSS v4 plus a small editorial stylesheet: fluid type, per-section colour tones and hairlines.
- **Motion:** Lenis smooth scrolling. Reveals use IntersectionObserver with CSS transitions, which is lighter than an animation library and kept Lighthouse at 98+ on mobile.
- **Type:** Cormorant Garamond (display), Manrope (body) and IBM Plex Mono (labels). The font files live in `app/fonts`, so builds never need the internet.
- **Images:** a build script turns originals into responsive WebP images with blur placeholders.
- **Hosting:** static `out/` folder, ready for Netlify or Vercel. Both config files are included. Costs nothing.
- **Content:** every word lives in `content/*.ts`, so copy is edited in one place, never inside components.

## Preview Locally

```bash
npm install
npm run dev
```

Open <http://localhost:3010>. In this mode, orange "TO ADD" tags show where your input is needed.

To preview the exact public build:

```bash
npm run build
npm start
```

Open <http://localhost:3011>.

## Timeline

- **Kickoff:** 15 November 2026
- **Build complete:** 15 November 2026
- **Launch:** when Avaneesh approves deployment
