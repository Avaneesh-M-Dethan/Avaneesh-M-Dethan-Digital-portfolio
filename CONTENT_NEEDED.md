# What I still need from you

The site is complete and looks finished without any of this. Every item below is something only you know or have. Nothing has been invented to fill the gaps.

**How to see these on the page:** run `npm run dev` and open http://localhost:3010. Every missing item shows as an orange "TO ADD" tag in the exact spot it belongs. The tags never appear on the public site.

---

## 1. Quick facts (5 minutes)

| What | Where it goes | File to edit |
|---|---|---|
| Your school's name and years | About → Education timeline | `content/education.ts` |
| Year you were Blue House Captain | Education timeline + Leadership | `content/education.ts`, `content/leadership.ts` |
| Start year of your BBA | Education timeline | `content/education.ts` |
| MUN conferences where you won Best Delegate (names, years) | Leadership → MUN | `content/leadership.ts` |
| Committees and countries you represented at MUN | Leadership → MUN | `content/leadership.ts` |
| TMUN edition(s) and year | Leadership → TMUN | `content/leadership.ts` |
| Confirm the TMUN 2 registration flow was used as shown | Leadership → TMUN | `content/leadership.ts` |
| Full name of GLC and your role in it (only if you want it shown) | Leadership → Placement committee | `content/leadership.ts` |
| Your LinkedIn URL | Connect | `content/social.ts` |
| The final website address, once you have one | SEO and share previews | `content/profile.ts` (`siteUrl`) |

## 2. Academic projects

| Project | What I need | Why |
|---|---|---|
| Rhetorical Analysis | Was it individual or group work? | The site must say which. |
| Rhetorical Analysis | The deck saved as PDF, named `llr-rhetorical-analysis.pdf`, in `public/files/` | Switches on the "View the deck" button automatically. |
| Generative AI in Finance | Your individual contribution within Group 3 | Group work is shown, but no personal contribution is claimed until you tell me. |
| Generative AI in Finance | The deck saved as PDF **without the team-photo slide (slide 3)**, named `tlm-genai-in-finance.pdf`, in `public/files/` | Switches on "View the deck". Removes your classmates' photos. |
| AI Marketing Automation (Angadi) | How you want your role worded. Currently "Built the working app", based on the repository history. | Accuracy. |
| Rebranding Falguni Nayar | The presentation, your contribution, group or individual | Currently a one-line row. |
| Political and Economic Influence on Health in India | The report or deck, research question, findings, your contribution | Currently a one-line row. |
| AI and Art | The visuals, concept, your contribution | Designed to become a visual-first case study. |
| The War for AI Chips | The deck or report, research question, findings, your contribution | Currently a one-line row. |

I searched your Documents, Desktop, Downloads and OneDrive. The four projects in the last rows have no files on this laptop. They may be in Google Drive, Canva or email.

## 3. Photographs (optional, but they lift the site)

Only your real, best photos. The site is designed to look complete without them, and nothing is ever replaced with stock imagery.

- **An editorial portrait** for the hero. Not a passport photo: natural light, a plain background.
- **MUN and TMUN**: conference photos, certificates, and the stage photo with the organising group (once you confirm its context).
- **Beyond the work**: up to four photos (sports, travel).

**How to add them:** put the files in `assets-src/personal/`, run `npm run images`, then send me the filenames and I'll place them.

## 4. Things to check and approve

- **Quoin, "What it taught me"**: I wrote this from your project history (you removed placeholder case studies before launch). Rewrite it in your own words if you like.
- **Scale SaaS**: it does not exist on this laptop. It is hidden in `content/projects.ts`. Send screenshots and the features that work, and I'll switch it on.
- **Suminagashi**: it has no live link yet. Drag the `dragon web` folder onto https://app.netlify.com/drop and send me the link.
- **Angadi** and **Jarvis**: their repositories are private or local, so they have no public links. If you publish either, send me the link.
