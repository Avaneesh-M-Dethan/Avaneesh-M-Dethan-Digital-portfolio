import type { Project } from './types';

export const builtIntro = {
  heading: { lead: 'Ideas are interesting.', accent: 'Building them is better.' },
  body: "Some of these are live, some are still being built, and a couple are just experiments. I've labelled each one for what it really is.",
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
      "My marketing studio for founder-led brands. Meta ads come first, and the brand, website and analytics are there to turn clicks into customers.",
    role: 'Founder. Positioning, brand, copy and the website.',
    authorship: 'Individual',
    tier: 'featured',
    cover: {
      key: 'projects/quoin/quoin-live-hero',
      alt: 'The Quoin homepage: "Stop the scroll. Start the scale." in white and gold serif capitals on black, above the line "Built for brands that refuse to be ignored" and a gold "Start your build" button.',
    },
    gallery: [
      {
        key: 'projects/quoin/quoin-cover',
        alt: 'The Quoin website shown in a laptop browser window and on a phone, side by side.',
        caption: 'Desktop and mobile.',
      },
      {
        key: 'projects/quoin/quoin-identity',
        alt: 'A Quoin page in a browser window with the statement "What we build is not just a brand. It’s your whole identity." set in large white, grey and gold serif capitals.',
        caption: 'Editorial type carries the brand.',
      },
      {
        key: 'projects/quoin/quoin-services',
        alt: 'The Quoin services page in a browser window, headed "Our services. Built for recall." above the first service cards.',
        caption: 'Four services, one system.',
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
    note: "Quoin hasn't launched yet and has no clients, so there are no case studies or results here. That's on purpose.",
    sections: [
      {
        heading: 'The idea',
        body: [
          "A lot of founder-led brands run ads that say one thing, a landing page that says another, and a brand that says something else again. Quoin is built around one person running the whole loop. Meta ads come first, and the site, the brand and the analytics all work towards the same click.",
          'The line on the site is “Stop the scroll. Start the scale.”',
        ],
      },
      {
        heading: 'What I built',
        points: [
          'The brand itself. Black and muted gold, editorial serif type, and a voice that sounds premium without trying too hard.',
          'The website, start to finish, in Next.js and TypeScript with scroll-driven motion. I designed it for phones first.',
          'Four service lines: brand, websites built to convert, paid creative, and media buying with analytics.',
          'Contact and enquiry flows, so a visit can turn into a conversation.',
        ],
      },
      {
        heading: 'Where AI fits',
        body: [
          "I'm also experimenting with AI automation, things like lead follow-ups and connected workflows. Quoin doesn't sell that as a service yet.",
        ],
      },
    ],
    todo: ['Quoin: the live site still shows client results and a testimonial; redeploy the current build, then add a lesson in your own words'],
  },
  {
    slug: 'ai-automations',
    index: '02',
    title: 'AI Automations',
    category: 'Artificial intelligence · Automation',
    status: { label: 'Experiments', tone: 'experiment' },
    year: '2026',
    summary: 'Small experiments in getting tools to talk to each other, so follow-ups happen without me.',
    role: 'Builder',
    tier: 'index',
    links: [],
    tools: ['Zapier', 'Gmail', 'Google Forms', 'Groq', 'Gemini', 'MCP'],
    cover: {
      key: 'projects/automations/zapier-form-autoreply',
      alt: 'A Zapier workflow with two steps, Google Forms "New Form Response" followed by Gmail "Send Email", with the email settings panel open. Email addresses are blurred.',
      caption: 'The Zapier flow: a new Google Form response triggers an automatic Gmail reply. Addresses blurred.',
    },
    sections: [
      {
        heading: 'What I have tried',
        points: [
          'A Zapier flow that replies automatically when someone fills in a Google Form. I built it for a TLM session on no-code agents.',
          'The intent routing in Jarvis, where a language model labels each request and plain code decides what’s allowed to run.',
          'Angadi’s agent loop, where the AI drafts everything and a person approves it before anything goes out.',
        ],
      },
      {
        heading: 'Next',
        body: ['I want to use this for lead management and follow-ups at Quoin, and add WhatsApp and calendar booking to the form flow.'],
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
    summary: 'A voice assistant that runs on my laptop and actually does things when I ask, instead of just answering.',
    role: 'Designed and built it',
    authorship: 'Individual',
    tier: 'index',
    links: [],
    tools: ['Python', 'FastAPI', 'Next.js', 'Three.js', 'Groq', 'ElevenLabs', 'Supabase'],
    cover: {
      key: 'projects/jarvis/jarvis-interface',
      alt: 'The Jarvis interface: a dark screen headed "Jarvis AI, your personal AI operating system", with a "standing by" status, an "Ask Jarvis anything" input with a microphone button, and a glowing wireframe orb.',
      caption: 'The Jarvis home screen, standing by.',
    },
    sections: [
      {
        heading: 'How it decides',
        body: [
          "Every request goes to a language model first, which labels what I'm asking for and how sure it is. If it isn't confident, nothing runs, and anything risky checks with me before it acts.",
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
          'The backend is FastAPI and the front end is Next.js, with a Three.js orb that reacts to the mic. If one model provider fails, chat falls back to the next of three. Voice comes in through the browser’s speech recognition and goes out through ElevenLabs.',
        ],
      },
    ],
    note: "It's a personal tool that runs locally, so there's no public demo.",
  },
  {
    slug: 'registro-watcher',
    index: '04',
    title: 'Registro Watcher',
    category: 'Automation · Telegram bot',
    status: { label: 'Live, in daily use', tone: 'live' },
    year: '2026',
    summary: 'A Telegram bot that watches my college timetable and tells me how many classes I can still miss.',
    role: 'Designed and built it',
    authorship: 'Individual',
    tier: 'index',
    links: [],
    tools: ['JavaScript', 'Cloudflare Workers', 'Telegram Bot API'],
    cover: {
      key: 'projects/registro/registro-attendance',
      alt: 'Registro Watcher in Telegram: an attendance summary listing each course with its percentage and how many more classes can be missed, with the bot command menu open.',
      caption: 'A real attendance summary, with the command menu open.',
    },
    sections: [
      {
        heading: 'The problem',
        body: ['TAPMI needs 75% attendance in every course, and the timetable can change at short notice.'],
      },
      {
        heading: 'What it does',
        points: [
          'Every morning it sends me the day’s timetable, and it pings me if a class gets cancelled, moved or added.',
          'After each class it asks whether I went, and keeps count.',
          'It works out, course by course, how many more I can miss and still stay above 75%.',
          'If a course drops below 80%, it warns me straight away.',
        ],
      },
      {
        heading: 'How it is built',
        body: [
          "It's plain JavaScript on a free Cloudflare Worker that checks on a schedule. There's no AI in it, on purpose. The job is mostly arithmetic and reliability, so it has around 150 automated tests instead.",
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
      'My take on suminagashi, the Japanese art of floating ink. You drag across the screen and the ink spreads, mixes and drifts over a dragon drawing.',
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
          'Suminagashi means “floating ink”. The idea was to make the screen behave like a tray of water, so every stroke spreads and fades and no two sessions end up looking the same.',
        ],
      },
      {
        heading: 'How it works',
        body: [
          'Under the hood it’s a GPU fluid simulation in Three.js. The inks mix the way real dye does, so where colours overlap they get deeper and darker instead of glowing.',
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
        body: ['A one-page concept I made alongside it, for a made-up ink studio, where your cursor paints brush strokes across the page.'],
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
