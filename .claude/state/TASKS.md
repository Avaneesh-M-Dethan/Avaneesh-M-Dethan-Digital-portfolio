# Tasks — Avaneesh M Dethan Portfolio

Live task table. Main thread (Claude) is lead builder; agents support only.

Status values: `pending` | `in-progress` | `blocked` | `review` | `done` | `cancelled`

| ID | Task | Agent | Files | Depends on | Status | Started | Finished | Outcome |
|----|------|-------|-------|------------|--------|---------|----------|---------|
| T-001 | Audit disk for assets and source material | Explore x3 | — | — | done | 2026-11-15 | 2026-11-15 | Quoin, Angadi, Jarvis, Registro, Suminagashi, 2 decks found; 4 academic projects + all personal photos missing |
| T-002 | Bootstrap Next.js 15 static scaffold + git | main | package.json, configs | T-001 | done | 2026-11-15 | 2026-11-15 | Baseline build verified before any code |
| T-003 | Curate assets + WebP pipeline | main | assets-src, scripts/optimize-images.mjs | T-002 | done | 2026-11-15 | 2026-11-15 | 9 images, 1.6 MB; Suminagashi captured live via Playwright |
| T-004 | Content layer (single source of truth) | main | content/* | T-001 | done | 2026-11-15 | 2026-11-15 | All copy grounded in repos/decks; dev-only TODO markers |
| T-005 | Design system + 8 chapters + case-study routes | main | app/*, components/* | T-004 | done | 2026-11-15 | 2026-11-15 | 5 featured case studies, typographic index rows |
| T-006 | Responsive + a11y + reduced-motion QA | main | scripts/qa.mjs | T-005 | done | 2026-11-15 | 2026-11-15 | 320–1920px fit, keyboard, focus trap, no console errors |
| T-007 | Performance pass | main | MotionProvider, globals.css | T-006 | done | 2026-11-15 | 2026-11-15 | GSAP replaced by IO + CSS; Lighthouse 96–100 mobile, 100 desktop |
| T-008 | Reviewer audit | reviewer | read-only | T-007 | blocked | 2026-11-15 | 2026-11-15 | Codex plugin model "gpt-5.4" unsupported on ChatGPT account; self-audit done instead (3 copy overstatements fixed) |
| T-009 | Deliverables | main | BRIEF.md, HANDOFF.md, CONTENT_NEEDED.md | T-005 | done | 2026-11-15 | 2026-11-15 | — |
| T-010 | Deploy | main | — | Avaneesh go | pending | — | — | Outward-facing: waiting for approval |

---

## Notes

- One row per task. Do not delete completed rows.
