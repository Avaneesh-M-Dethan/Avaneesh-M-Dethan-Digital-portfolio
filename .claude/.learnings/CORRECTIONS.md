# Corrections — Avaneesh M Dethan Portfolio

Project-specific corrections. Cross-project lessons live in `~/.claude/.learnings/CORRECTIONS.md`.

---

<!-- entries below, newest first -->

## 2026-11-15 — main thread
- WRONG: Footer said "Designed and built by Avaneesh M Dethan".
- RIGHT: Never put an authorship claim on a site the client did not build; use a neutral line.
- WHY: The no-fabrication rule covers framing copy, not just project claims.
---

## 2026-11-15 — main thread
- WRONG: Framing lines like "Each is labelled as individual or group work" and "long-running interest" slipped past while project copy was audited.
- RIGHT: Grep every content file for absolute or duration claims after drafting; intros and headings overstate most.
- WHY: Attention went to project facts, and summary copy was written for rhythm.
---

## 2026-11-15 — main thread
- WRONG: Unlayered `.mask > .mask-inner { display:block }` silently overrode Tailwind's `flex` utility (hero gap had no effect).
- RIGHT: Put custom component CSS inside `@layer components` in Tailwind v4 so utilities win.
- WHY: Unlayered CSS beats every cascade layer regardless of specificity.
---

## 2026-11-15 — main thread
- WRONG: Clip-path reveal on the observed element; IntersectionObserver never fired on mobile.
- RIGHT: Clip the inner `<img>` and observe the unclipped wrapper.
- WHY: Chrome applies the target's own clip-path to the intersection rect, so a fully clipped target never intersects.
---
