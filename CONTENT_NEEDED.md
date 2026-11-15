# What I still need from you

The site is complete and looks finished without any of this. Every item below is something only you know or have. Nothing has been invented to fill the gaps.

**How to see these on the page:** run `npm run dev` and open http://localhost:3010. Every missing item shows as an orange "TO ADD" tag in the exact spot it belongs. The tags never appear on the public site.

---

## 1. Urgent: the live Quoin site

**quoin-tau.vercel.app still shows client results and a testimonial.** The portfolio links there, and it also says Quoin has no clients yet, so a recruiter who clicks through sees a contradiction. The unverified items are:

- "3.4× pipeline velocity" with a quote from a "B2B SaaS cofounder"
- a "seven figure monthly revenue" case study with "4.2× LTV to CAC" and "₹5.4L monthly revenue"

The current Quoin code on your laptop has already removed all of these. Redeploying it to that Vercel address fixes the problem. Say the word and I'll walk you through it, or do it with your go-ahead.

## 2. Quick facts (5 minutes)

| What | Where it goes | File to edit |
|---|---|---|
| Your school's name and years | Timeline | `content/education.ts` |
| Year you were Blue House Captain | Timeline + Leadership | `content/education.ts`, `content/leadership.ts` |
| TMUN year | Timeline + Leadership | `content/education.ts`, `content/leadership.ts` |
| Start year of your BBA | Timeline | `content/education.ts` |
| MUN conferences where you won Best Delegate (names, years) | Leadership → MUN | `content/leadership.ts` |
| Committees and countries you represented at MUN | Leadership → MUN | `content/leadership.ts` |
| Full name of GLC and your role in it (only if you want it shown) | Leadership → Placement committee | `content/leadership.ts` |
| Your LinkedIn URL | Connect | `content/social.ts` |
| The final website address, once you have one | SEO and share previews | `content/profile.ts` (`siteUrl`) |
| The real name of the course behind the Eternal Limited project | Academic → "Accounting" folio | `content/academic.ts` |

## 3. Links still missing

Every activity links somewhere except these, which have no public home yet.

| Activity | What would work |
|---|---|
| AI and Art (DIR) | Add its deck to the Drive folder. It's the only academic deck missing. |
| Angadi | Upload the course film to Drive, make the repo public, or deploy a demo. |
| Jarvis | A short screen recording on Drive, or a public GitHub repo. |
| Registro Watcher | A public GitHub repo (with your credentials removed). |
| AI Automations | Screenshots or a recording of a workflow, on Drive. |
| MUN, TMUN, house captain, placement committee | Certificates, event photos or a TMUN page or Instagram link. |
| Suminagashi live demo | Drag the `dragon web` folder onto https://app.netlify.com/drop. GitHub is already linked. |

## 4. Your part in group projects (optional, but strong)

Every academic deck credits Working Group 1. The site says "Group project" and claims no individual contribution, except Eternal Limited, where the report itself lists you as presenter of the final sections. If you tell me which part was yours in the others, I'll add it.

## 5. Photographs (optional)

Only your real, best photos. The site looks complete without them.

- **An editorial portrait** for the hero. Not a passport photo.
- **MUN and TMUN**: conference photos and certificates.
- **Beyond the work**: up to four photos (sports, travel).

Put them in `assets-src/personal/`, run `npm run images`, and send me the filenames.
