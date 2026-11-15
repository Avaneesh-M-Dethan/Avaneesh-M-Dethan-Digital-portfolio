# Avaneesh M Dethan — Personal Portfolio

Inherits agency rules from `~/.claude/CLAUDE.md`. Project-specific overrides only.

## Project context
- **Client:** Avaneesh M Dethan (self). BBA student, TAPMI Bengaluru.
- **Type:** static personal portfolio, editorial storytelling, 8 chapters on a single page. Projects show what I did and learnt, with links to Drive, live sites or GitHub.
- **Stack:** Next.js 15 App Router, TypeScript strict, `output: 'export'`, Tailwind v4, GSAP + ScrollTrigger, Lenis.
- **Deployment target:** Netlify or Vercel (static `out/`). Not deployed until Avaneesh says go.
- **Status:** in-progress.

## Roles
- Main thread (Claude) is lead builder ("Lead Brush"). Agents are support only (reviewer audit).

## Content rules (from the brief, non-negotiable)
- All copy lives in `content/*.ts`. Components contain no copy.
- Never invent clients, revenue, results, awards (only two Best Delegate awards), grades, findings, or contributions.
- Angadi numbers are simulated. Quoin is pre-launch with no clients.
- PACE: never publish the GLC lead list (third-party PII).
- Missing info stays an explicit placeholder, listed in `CONTENT_NEEDED.md`.

## Multi-agent state
- Tasks: `./.claude/state/TASKS.md`
- Corrections: `./.claude/.learnings/CORRECTIONS.md`
