# Your portfolio: how to look after it

Plain-English instructions. You don't need to know how to code.

## Edit text

All the words on the site live in the `content` folder, one file per part of the site:

| To change… | Open |
|---|---|
| Your name, tagline, intro, About text | `content/profile.ts` |
| Education timeline | `content/education.ts` |
| Leadership roles | `content/leadership.ts` |
| Things you've built | `content/projects.ts` |
| Academic projects | `content/academic.ts` |
| Sports and interests | `content/beyond.ts` |
| "Currently exploring", skills, in progress | `content/next.ts` |
| Email, links, footer | `content/social.ts` |

Change only the words between quote marks. Keep the quote marks and commas exactly where they are. If you need an apostrophe inside a phrase, use a curly one (’), not a straight one (').

**To see your change:** run `npm run dev` and open http://localhost:3010. The page updates as soon as you save.

**Handy switches:**
- Hide a project: add `hidden: true,` to it in `content/projects.ts`.
- Leave a link empty (`href: ''`) and the button disappears.
- To finish a placeholder, fill in the missing detail, then delete its `todo:` line.

## Add or change images

1. Put the original photo or screenshot in the right folder inside `assets-src`, e.g. `assets-src/personal/badminton.jpg`.
2. Run `npm run images`. This creates fast, web-ready versions automatically.
3. Point to it from a content file using the folder and name, without the extension. For example: `{ key: 'personal/badminton', alt: 'Playing badminton at…', caption: '…' }`.

Always write a real description in `alt`. Screen readers read it aloud, and search engines use it.

## Add a deck PDF

Save the deck as a PDF into `public/files/` with the exact name listed in `CONTENT_NEEDED.md`. Its "View the deck" button appears on the next build. Remove slides with classmates' photos first.

## Deploy (put it online)

**Netlify** (free; recommended):
1. Push this folder to a GitHub repository.
2. On netlify.com, choose "Add new site", then "Import from Git", and pick the repository.
3. Netlify reads `netlify.toml` automatically. The build command is `npm run build` and the publish folder is `out`.
4. Once you have your address, set `siteUrl` in `content/profile.ts`, or add the setting `NEXT_PUBLIC_SITE_URL` in Netlify. Share previews and search results then use the right address.

**Vercel** works the same way, using `vercel.json`.

After the first setup, every change you push to GitHub goes live automatically within about a minute.

## Check quality before publishing

```bash
npm run build      # must finish without errors
npm run lint       # must show no problems
```

## Contact for changes

For anything beyond text, images or links, such as a new section, a layout change or a new case study, open this folder in Claude Code and describe the change in plain words. `CLAUDE.md` in this folder holds the project rules, including the no-fabrication rule, so every session starts with the right context.
