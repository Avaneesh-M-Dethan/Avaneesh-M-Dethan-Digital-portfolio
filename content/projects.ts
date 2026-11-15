import type { Project } from './types';

export const builtIntro = {
  heading: { lead: 'Ideas are interesting.', accent: 'Building them is better.' },
  body: 'A studio, an assistant, a bot, an art piece and a set of automation experiments. Each one is labelled for what it is: live, in progress or an experiment.',
};

export const projects: Project[] = [
  {
    slug: 'quoin',
    index: '01',
    title: 'Quoin',
    subtitle: 'A Meta ads studio for founder-led brands',
    category: 'Marketing studio · Entrepreneurship',
    status: { label: 'Pre-launch', tone: 'ongoing' },
    year: '2026',
    summary:
      'A performance-marketing studio I am building for founder-led brands. Meta ads lead; the brand, website and analytics are built to convert the click.',
    role: 'Founder. Positioning, brand, copy and the website.',
    authorship: 'Individual',
    tier: 'featured',
    cover: {
      key: 'projects/quoin/quoin-hero-desktop',
      alt: 'Quoin homepage hero: the headline "Stop the scroll. Start the scale." in white and gold serif type on a near-black background, with two call-to-action buttons.',
    },
    gallery: [
      {
        key: 'projects/quoin/quoin-services-desktop',
        alt: 'Quoin services section listing four disciplines: Meta Ads, Performance Marketing, Website Development and Brand Design, each with a one-line description.',
        caption: 'Four service lines, one through line.',
      },
      {
        key: 'projects/quoin/quoin-hero-mobile',
        alt: 'Quoin homepage on a phone, with the headline stacked above two full-width buttons.',
        caption: 'Designed mobile first.',
      },
    ],
    links: [{ label: 'Visit quoin-tau.vercel.app', href: 'https://quoin-tau.vercel.app' }],
    tools: ['Next.js', 'TypeScript', 'GSAP', 'Lenis', 'Meta Ads', 'Brand design'],
    facts: [
      { label: 'Stage', value: 'Pre-launch' },
      { label: 'Started', value: '2026' },
      { label: 'Service lines', value: 'Four' },
      { label: 'Clients', value: 'None yet' },
    ],
    note: 'Quoin is pre-launch and has no clients yet, so there are no case studies or results here. That is deliberate.',
    sections: [
      {
        heading: 'The idea',
        body: [
          'Founder-led brands often have their ads, their landing page and their brand saying three different things. Quoin is built around one operator running the full loop: Meta ads in the lead, with the site, brand and analytics designed to turn the click into revenue.',
          'The studio’s line is “Stop the scroll. Start the scale.”',
        ],
      },
      {
        heading: 'What I built',
        points: [
          'Positioning and brand identity: black and muted gold, editorial serif type and a premium, plain-spoken voice.',
          'The website, end to end: Next.js and TypeScript with GSAP motion, service pages, public ad teardowns of well-known brands and written notes.',
          'Four service lines: Meta Ads, Performance Marketing, Website Development and Brand Design.',
          'A lead-generation path built around a free ad-account teardown, so the first conversation starts with useful work, not a pitch.',
        ],
      },
      {
        heading: 'Where AI fits',
        body: [
          'AI automation, such as lead follow-ups and connected workflows, is a capability I am exploring alongside the studio. It is not a service Quoin sells today.',
        ],
      },
      {
        heading: 'What it taught me',
        body: [
          'Credibility cannot be borrowed. Early drafts of the site had placeholder case studies; I removed them before launch rather than show proof I did not have. The site now says it plainly: “New studio, no logo wall yet.”',
        ],
      },
    ],
    todo: ['Quoin: review the "What it taught me" lesson and rewrite it in your own words if you like'],
  },
  {
    slug: 'ai-automations',
    index: '02',
    title: 'AI Automations',
    category: 'Artificial intelligence · Automation',
    status: { label: 'Experiments', tone: 'experiment' },
    year: '2026',
    summary: 'Small working experiments in connecting tools so that routine follow-ups happen on their own.',
    role: 'Builder',
    tier: 'index',
    links: [],
    tools: ['Zapier', 'Gmail', 'Google Forms', 'Groq', 'Gemini', 'MCP'],
    sections: [
      {
        heading: 'What I have tried',
        points: [
          'A Zapier flow that sends an automatic reply whenever someone fills in a Google Form, built for a TLM session on no-code agents.',
          'Intent routing in Jarvis: a language model labels each request, and plain code decides what is allowed to run.',
          'The approval-gated agent loop in Angadi, where the AI drafts and a person approves before anything is sent.',
        ],
      },
      {
        heading: 'Next',
        body: ['Lead management and automated follow-ups for Quoin, and adding WhatsApp and calendar booking to the form flow.'],
      },
    ],
    note: 'These are experiments, not production systems.',
    todo: ['AI Automations: add any n8n or other workflow screenshots you want shown'],
  },
  {
    slug: 'jarvis',
    index: '03',
    title: 'Jarvis',
    category: 'Personal AI assistant',
    status: { label: 'Personal build', tone: 'live' },
    year: '2026',
    summary: 'A voice-enabled assistant that runs on my laptop and acts on what I ask, not just answers it.',
    role: 'Designed and built it',
    authorship: 'Individual',
    tier: 'index',
    links: [],
    tools: ['Python', 'FastAPI', 'Next.js', 'Three.js', 'Groq', 'ElevenLabs', 'Supabase'],
    sections: [
      {
        heading: 'How it decides',
        body: [
          'Every request is first classified by a language model into an intent with a confidence score. Only confident requests run, and anything risky asks before acting.',
        ],
      },
      {
        heading: 'What it can do',
        points: [
          'Play and control music on Spotify and YouTube.',
          'Open apps, folders and websites; lock the screen; take screenshots.',
          'Save and search notes in Obsidian; read and write Notion pages.',
          'Keep track of clients, projects and tasks for my studio.',
          'Set reminders that survive restarts and are spoken aloud.',
          'Fetch news headlines and the local weather.',
        ],
      },
      {
        heading: 'Under the hood',
        body: [
          'A FastAPI backend and a Next.js front end with a Three.js orb that reacts to the microphone. Chat falls back across three model providers if one fails. Voice comes in through the browser’s speech recognition and goes out through ElevenLabs.',
        ],
      },
    ],
    note: 'Jarvis is a personal tool that runs locally, so there is no public demo.',
  },
  {
    slug: 'registro-watcher',
    index: '04',
    title: 'Registro Watcher',
    category: 'Automation · Telegram bot',
    status: { label: 'Live, in daily use', tone: 'live' },
    year: '2026',
    summary: 'A Telegram bot that watches my college timetable and tells me how many more classes I can miss.',
    role: 'Designed and built it',
    authorship: 'Individual',
    tier: 'index',
    links: [],
    tools: ['JavaScript', 'Cloudflare Workers', 'Telegram Bot API'],
    sections: [
      {
        heading: 'The problem',
        body: ['TAPMI expects 75% attendance in every course, and timetable changes can arrive at short notice.'],
      },
      {
        heading: 'What it does',
        points: [
          'Sends the day’s timetable every morning, and alerts me when a class is cancelled, moved or added.',
          'Asks after each class whether I attended, and keeps count.',
          'Works out, course by course, how many more classes I can miss and still stay above 75%.',
          'Warns me the moment a course drops below 80%.',
        ],
      },
      {
        heading: 'How it is built',
        body: [
          'Plain JavaScript on a free Cloudflare Worker with scheduled checks. No AI, on purpose: the job is arithmetic and reliability, so it is covered by around 150 automated tests instead.',
        ],
      },
    ],
  },
  {
    slug: 'suminagashi',
    index: '05',
    title: 'Suminagashi',
    subtitle: 'Floating ink, in a browser',
    category: 'Creative technology · Interactive art',
    status: { label: 'Complete', tone: 'done' },
    year: '2026',
    summary:
      'An interactive take on suminagashi, the Japanese art of floating ink. Drag across the screen and ink blooms, mixes and drifts over a dragon illustration.',
    role: 'Concept, design and code',
    authorship: 'Individual',
    tier: 'featured',
    cover: {
      key: 'projects/suminagashi/suminagashi-ink-desktop',
      alt: 'Indigo and black ink spreading in soft clouds over a detailed line drawing of a Chinese dragon, with the Japanese characters for suminagashi set vertically on the left.',
    },
    gallery: [
      {
        key: 'projects/suminagashi/suminagashi-ink-detail',
        alt: 'The same piece after more strokes: deep indigo ink fills the right side while a faint green bloom drifts at the top left.',
        caption: 'Every session leaves a different pattern.',
      },
      {
        key: 'projects/suminagashi/studio-sumi-concept',
        alt: 'Studio Sumi concept page: the line "Every stroke happens once." in serif type beside a red torii gate and the kanji for ink.',
        caption: 'Studio Sumi, a companion concept page for a fictional ink studio.',
      },
    ],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Avaneesh-M-Dethan/colourmix' }],
    tools: ['Three.js', 'WebGL', 'GLSL', 'JavaScript'],
    facts: [
      { label: 'Medium', value: 'Browser, mouse or touch' },
      { label: 'Engine', value: 'GPU fluid simulation' },
      { label: 'Inks', value: 'Four, plus multicolour' },
    ],
    sections: [
      {
        heading: 'The concept',
        body: [
          'Suminagashi means “floating ink”. The piece treats the screen like a tray of water: every stroke spreads, mixes and fades, so no two sessions ever look the same.',
        ],
      },
      {
        heading: 'How it works',
        body: [
          'A GPU fluid simulation built with Three.js. The inks mix the way dye does, so colours deepen and darken where they overlap instead of glowing like light.',
        ],
        points: [
          'Four inks: Sumi black, Indigo, Vermillion and Pine green, plus a random multicolour mode.',
          'Auto-animate and Wash controls.',
          'Works with touch. Phones start on a lighter simulation, and quality steps down further if a device struggles.',
          'The dragon is a public-domain illustration from Wikimedia Commons.',
        ],
      },
      {
        heading: 'Studio Sumi',
        body: ['A companion one-screen concept page for a fictional ink studio, where the cursor paints brush strokes across the page.'],
      },
    ],
    todo: ['Suminagashi: deploy it (e.g. Netlify Drop) and add the live link next to the GitHub link'],
  },
  {
    slug: 'scale-saas',
    index: '06',
    title: 'Scale',
    category: 'SaaS · Product experimentation',
    status: { label: 'Concept', tone: 'pending' },
    summary: 'A SaaS product concept.',
    tier: 'index',
    links: [],
    sections: [],
    hidden: true,
    todo: ['Scale SaaS: prototype screenshots and the features that actually work, then set hidden: false'],
  },
];

export const visibleProjects = projects.filter((p) => !p.hidden);
