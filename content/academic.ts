import type { Course, Project } from './types';

export const academicIntro = {
  heading: { lead: 'Exploring ideas', accent: 'beyond the classroom.' },
  body: "Eight projects across four courses, all with my working group. For each one, here's what we did, what I learnt, and a link to the work on Google Drive.",
  folder: { label: 'All project files on Google Drive', href: 'https://drive.google.com/drive/folders/1c2tW-soLI_EIWcQe6QoFctKzgAXXtS5u' },
};

/** The subjects I'm studying. Courses with projects link to them further down the page. */
export const curriculum = {
  label: 'Curriculum',
  note: "The subjects I'm studying",
  courses: [
    { code: 'TLM', name: 'Technology Literacy for Managers', href: '#course-TLM' },
    { code: 'ACC', name: 'Basics of Accounting', href: '#course-ACC' },
    { code: 'LLR', name: 'Language, Literature and Rhetoric', href: '#course-LLR' },
    { name: 'Mathematics' },
    { name: 'Excel and Power BI' },
    { code: 'DIR', name: 'Diversity, Inclusivity and Rootedness', href: '#course-DIR' },
  ] as { code?: string; name: string; href?: string }[],
};

const done = { label: 'Completed', tone: 'done' } as const;
const drive = (id: string, label = 'View the deck on Google Drive') => ({ label, href: `https://drive.google.com/file/d/${id}/view` });

/** Every deck lists the same five members. */
export const workingGroup = 'Working Group 1: Anushka Rajgor, Krishna Moorari, Prragyaa Mishra, Rishima Agrawal and me';

const rhetoricalAnalysis: Project = {
  slug: 'rhetorical-analysis',
  index: 'LLR · 01',
  title: 'Rhetorical Analysis',
  subtitle: 'Brand the Persona: Falguni Nayar and Nykaa',
  category: 'Language, Literature and Rhetoric',
  status: done,
  summary: 'How a business leader builds a personal brand through the way she speaks, using Falguni Nayar and Nykaa.',
  authorship: 'Group project',
  tier: 'index',
  did: [
    'Analysed Falguni Nayar’s speeches, interviews and Nykaa’s ads for ethos, pathos, logos and kairos.',
    'Broke down her IIM Ahmedabad convocation address with SOAPS and the rhetorical triangle.',
    'Found that ethos was her strongest appeal: her own career backs up her advice.',
  ],
  learnt: [
    'How to use SOAPS and the rhetorical triangle on a real speech.',
    'How leaders build a personal brand through the way they speak.',
    'How to spot devices like allusion, anecdote and antithesis.',
  ],
  links: [drive('1-L50DT3pDdz4cJ_hEBvGKQzSKMozZqrf')],
};

const rebrandingNayar: Project = {
  slug: 'rebranding-falguni-nayar',
  index: 'LLR · 02',
  title: 'Rebranding Falguni Nayar',
  subtitle: 'From celebrated founder to “The Reinvention Mentor”',
  category: 'Language, Literature and Rhetoric',
  status: done,
  summary: 'A concept for repositioning Falguni Nayar’s public story, and a refreshed Nykaa brand built around “Beauty that belongs to you.”',
  authorship: 'Group project',
  tier: 'index',
  did: [
    'Proposed repositioning her as “The Reinvention Mentor”.',
    'Came up with content ideas like Founder’s Field Notes and Ask Falguni.',
    'Sketched a refreshed Nykaa brand and in-store experience around “Beauty that belongs to you”.',
  ],
  learnt: [
    'How to turn a rhetorical analysis into a brand strategy.',
    'How a brand promise has to show up in the product and the experience, not just the tagline.',
  ],
  links: [drive('1MB_d-DSY-wJRExFCbO8-_lipPNC-3icZ')],
  note: 'A concept made for a class project, not a claim about her current brand or Nykaa’s plans.',
};

const healthIndia: Project = {
  slug: 'political-economic-influence-on-health',
  index: 'DIR · 01',
  title: 'Political and Economic Influence on Health in India',
  subtitle: 'Health is political: who gets to be well?',
  category: 'Diversity, Inclusivity and Rootedness',
  status: done,
  summary: 'An anthropological look at how money, policy and social position shape who stays healthy in India.',
  authorship: 'Group project',
  tier: 'index',
  did: [
    'Looked at how money, policy and social position shape health in India.',
    'Compared who pays for healthcare: households paid 64.2% of health spending in 2013–14 and 43.4% in 2022–23.',
    'Studied Haat Bazaar mobile clinics, Ayushman Arogya Mandirs and PM-JAY.',
  ],
  learnt: [
    'What the social determinants of health are.',
    'Why insurance on its own does not fix access to care.',
    'How to read public health data through an anthropological lens.',
  ],
  links: [drive('1x8f4EiAj2dj6cZUnvfmJwcezu04TPd6g')],
};

const aiAndArt: Project = {
  slug: 'ai-and-art',
  index: 'DIR · 02',
  title: 'AI and Art',
  subtitle: 'A short documentary: the people behind the ink',
  category: 'Diversity, Inclusivity and Rootedness',
  status: done,
  summary: 'A short documentary where we asked tattoo artists how AI is changing their craft, and whether it could ever replace them.',
  authorship: 'Group project',
  tier: 'index',
  did: [
    'Made a short documentary interviewing tattoo artists in their studios.',
    'Asked how they use AI, what it saves them, and what it might take away.',
  ],
  learnt: [
    'How to tell a story through interviews on film.',
    'How working artists actually use AI: for quick references and saving time, not for the tattoo itself.',
  ],
  links: [drive('1ld7C7AgaYxsryI6_hZ8O2EY61q9lWdoL', 'Watch the documentary on Google Drive')],
};

const aiChips: Project = {
  slug: 'the-war-for-ai-chips',
  index: 'TLM · 01',
  title: 'The War for AI Chips',
  subtitle: 'How the US–China rivalry is reshaping who can build AI',
  category: 'Technology Literacy for Managers',
  status: done,
  summary: 'The April 2025 export rule on Nvidia’s H20 chip, and what it means for companies, managers and India.',
  authorship: 'Group project',
  tier: 'index',
  did: [
    'Studied the April 2025 US export rule on Nvidia’s H20 chip and its $4.5B charge.',
    'Traced the knock-on effects from the chipmaker to cloud providers, AI companies and customers.',
    'Wrote recommendations for an Indian company building AI products.',
  ],
  learnt: [
    'Why access to computing power is a strategic business risk.',
    'How a single government decision can reshape a market.',
    'How to read company filings like Nvidia’s Form 8-K.',
  ],
  links: [drive('1qQoh44Q3QBR7A7-BXIZ-47XqI9ZArinH')],
};

const genAiFinance: Project = {
  slug: 'generative-ai-in-finance',
  index: 'TLM · 02',
  title: 'Generative AI in Finance',
  subtitle: 'Morgan Stanley: GenAI in the advisor workflow',
  category: 'Technology Literacy for Managers',
  status: done,
  summary: 'How Morgan Stanley Wealth Management uses GenAI before and after client meetings, and whether that is sustaining or disruptive.',
  authorship: 'Group project',
  tier: 'index',
  did: [
    'Studied how Morgan Stanley’s advisors use GenAI before and after client meetings.',
    'Sized the value at about 500,000 advisor hours a year.',
    'Classified it as sustaining innovation and wrote three recommendations for the CEO.',
  ],
  learnt: [
    'The difference between sustaining and disruptive innovation.',
    'How to size the business value of an AI tool.',
    'Why finance keeps a person approving everything the AI drafts.',
  ],
  links: [drive('1wjifEH8CDuGHfDZYxXLRrjs0YJ-Xhk3n')],
};

const angadi: Project = {
  slug: 'ai-marketing-automation',
  index: 'TLM · 03',
  title: 'AI Marketing Automation',
  subtitle: 'Angadi: a festival marketing agent for kirana stores',
  category: 'Technology Literacy for Managers',
  status: { label: 'Working prototype', tone: 'ongoing' },
  summary: 'An AI agent that plans festival offers for a neighbourhood kirana store, designs bilingual WhatsApp posters, and sends nothing without the owner’s approval.',
  authorship: 'Group project',
  tier: 'index',
  cover: {
    key: 'projects/angadi/angadi-approval-guardrail',
    alt: 'Angadi approval screen on a phone: a "Needs your decision" card explaining that a Kaju Katli offer failed the margin check, with a safer suggested offer. A Demo data badge is visible.',
    caption: 'An offer blocked by the margin check. All figures are simulated.',
  },
  did: [
    'Built the working app: an AI agent that plans festival offers for a kirana store.',
    'Added 13 guardrail checks, Kannada and English posters, and an owner approval step.',
    'Tested it with 216 unit and integration tests, 32 agent evaluations and 23 end-to-end tests.',
  ],
  learnt: [
    'How retrieval (RAG) and the Model Context Protocol (MCP) fit together in a real app.',
    'How to design AI that cannot act without a person’s approval.',
    'How to build for people who work in Kannada.',
  ],
  links: [],
  note: 'Runs on a synthetic store. Every number in the app is simulated and labelled “Demo data”.',
  todo: ['Angadi: add a link (upload the course film to Drive, make the repo public, or deploy a demo)'],
};

const eternal: Project = {
  slug: 'eternal-limited-accounting',
  index: 'ACC · 01',
  title: 'Eternal Limited: the Accounting Cycle',
  subtitle: 'From opening balances to the balance sheet',
  category: 'Basics of Accounting',
  status: done,
  summary: 'The full accounting cycle for Eternal Limited (formerly Zomato), from journal entries and ledgers to trial balances and financial statements.',
  authorship: 'Group project',
  tier: 'index',
  did: [
    'Worked through the full accounting cycle for Eternal Limited, using 30 transactions.',
    'Presented the statement of changes in equity, the balance sheet and the final checks.',
    'Confirmed the accounting equation: ₹35,852.06 crore of assets against equity plus liabilities.',
  ],
  learnt: [
    'Double-entry bookkeeping, from journal entries all the way to a balance sheet.',
    'How year-end adjustments change the final numbers.',
    'Why a balanced trial balance still does not prove there are no errors.',
  ],
  links: [drive('1fom36t7g8dJ0fF0nP94sjVapzmVzjm6I', 'View the report and balance sheet on Google Drive')],
  note: 'An academic simulation built on Eternal’s opening balances, not the company’s actual results.',
};

export const courses: Course[] = [
  { code: 'LLR', name: 'Language, Literature and Rhetoric', intro: 'How language persuades, and how people and brands present themselves.', projects: [rhetoricalAnalysis, rebrandingNayar] },
  { code: 'DIR', name: 'Diversity, Inclusivity and Rootedness', intro: 'A closer look at society, policy and culture.', projects: [healthIndia, aiAndArt] },
  { code: 'TLM', name: 'Technology Literacy for Managers', intro: 'Technology from a manager’s point of view. What it changes, and what it doesn’t.', projects: [aiChips, genAiFinance, angadi] },
  { code: 'ACC', name: 'Basics of Accounting', intro: 'The full accounting cycle, worked through on a real company’s books.', projects: [eternal] },
];

export const academicProjects = courses.flatMap((c) => c.projects);
