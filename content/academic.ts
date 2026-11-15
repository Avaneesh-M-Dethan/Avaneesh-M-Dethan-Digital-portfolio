import type { Course, Project } from './types';

export const academicIntro = {
  heading: { lead: 'Exploring ideas', accent: 'beyond the classroom.' },
  body: 'Seven projects across three courses. Each is labelled as individual or group work, and the case studies quote the work itself.',
};

/** Shown on rows whose material has not been added yet. */
const awaiting = { label: 'Write-up to follow', tone: 'pending' } as const;

const rhetoricalAnalysis: Project = {
  slug: 'rhetorical-analysis',
  index: 'LLR · 01',
  title: 'Rhetorical Analysis',
  subtitle: 'Falguni Nayar at IIM Ahmedabad',
  category: 'Language, Literature and Rhetoric',
  status: { label: 'Completed', tone: 'done' },
  year: '2026',
  summary:
    'A SOAPS and rhetorical-triangle analysis of Falguni Nayar’s 2022 convocation address at IIM Ahmedabad.',
  tier: 'featured',
  coverType: { display: 'Ethos.', caption: 'Her own career is the proof behind her advice.' },
  links: [{ label: 'View the deck (PDF)', href: '/files/llr-rhetorical-analysis.pdf', requiresFile: true }],
  tools: ['SOAPS', 'Rhetorical triangle', 'Kairos', 'Close reading'],
  facts: [
    { label: 'Speech', value: '57th Convocation Address' },
    { label: 'Delivered', value: '13 April 2022, Ahmedabad' },
    { label: 'Speaker', value: 'Falguni Nayar, founder of Nykaa' },
  ],
  sections: [
    {
      heading: 'Context',
      body: [
        'In April 2022 Falguni Nayar returned to her alma mater as chief guest. A former banker who founded Nykaa at fifty, with no tech or beauty experience, she spoke to a graduating class about to enter a business world reshaped by digital disruption.',
        'For Nayar it was a personal return. She said the day had made life “officially come full circle.”',
      ],
    },
    {
      heading: 'SOAPS at a glance',
      itemStyle: 'grid',
      items: [
        { label: 'S', title: 'Subject', body: 'Pursuing your own dream, with commitment, risk, learning and integrity.' },
        { label: 'O', title: 'Occasion', body: 'IIM Ahmedabad’s 57th Convocation, 13 April 2022.' },
        { label: 'A', title: 'Audience', body: 'The graduating class of 2022, their families, faculty and the board.' },
        { label: 'P', title: 'Purpose', body: 'To inspire and advise graduates as they begin their careers.' },
        { label: 'S', title: 'Speaker', body: 'Falguni Nayar: IIMA alumna, former banker and founder of Nykaa.' },
      ],
    },
    {
      heading: 'The rhetorical triangle',
      body: ['Nayar balances all three appeals, leaning most on ethos: her own career is the proof behind her advice.'],
      itemStyle: 'grid',
      items: [
        { label: 'Ethos', title: 'Speaker · credibility', body: 'Student, then banker for over 20 years at Kotak, then founder at 50.' },
        { label: 'Pathos', title: 'Audience · emotion', body: 'Rhetorical questions and metaphors that speak to graduates under pressure to chase top jobs.' },
        { label: 'Logos', title: 'Message · reason', body: 'Anecdote and antithesis that make the case for learning over rewards.' },
      ],
    },
    {
      heading: 'Kairos: why the timing mattered',
      itemStyle: 'grid',
      items: [
        { label: 'A threshold moment', body: '“Your formal education may now be over, but you must inculcate the habit of lifelong learning.”' },
        { label: 'A changed business world', body: '“…a business environment that is very different from the one that existed before you started this journey.”' },
        { label: 'India’s startup era', body: '“…graduating at a time in India that was unimaginable maybe even a decade ago.”' },
      ],
    },
    {
      heading: 'Rhetorical devices',
      itemStyle: 'grid',
      items: [
        { label: 'Allusion', tag: 'Ethos · Pathos', body: 'Cavafy’s “Ithaca” and the Bhagavad Gita: “Karm karo, phal ki chinta mat karo.”' },
        { label: 'Anecdote', tag: 'Logos', body: 'Her batchmate Harsha Bhogle chose cricket over advertising.' },
        { label: 'Metaphor', tag: 'Pathos', body: 'The career “treadmill”, the “roller-coaster ride”, Nykaa as “a coordinated dance”.' },
        { label: 'Rhetorical question', tag: 'Pathos', body: '“Are you working towards a goal because that is the goal expected of you?”' },
        { label: 'Antithesis', tag: 'Logos', body: '“The highs should not make you arrogant and the lows should not get to you.”' },
      ],
    },
    {
      heading: 'Structure of the address',
      itemStyle: 'sequence',
      items: [
        { label: '01', title: 'Homecoming', body: 'Memories of campus and friends.' },
        { label: '02', title: 'Dream for yourself', body: 'Resisting expectation; the Nykaa story.' },
        { label: '03', title: 'Commit and risk', body: 'Ithaca, the Gita, learning over rewards.' },
        { label: '04', title: 'Agility and EQ', body: 'Lifelong learning, empathy, a message to women graduates.' },
        { label: '05', title: 'Integrity', body: '“Simply be good,” then congratulations.' },
      ],
    },
    {
      heading: 'Takeaway',
      quote: {
        text: 'Mapping the rhetorical triangle revealed ethos as her strongest appeal: her journey from banker to Nykaa founder at fifty is the proof behind every lesson.',
        source: 'From my summary of the analysis',
      },
    },
  ],
  todo: [
    'Rhetorical Analysis: confirm individual or group work (then set authorship)',
    'Rhetorical Analysis: save the deck as PDF to public/files/llr-rhetorical-analysis.pdf to switch on the "View the deck" link',
  ],
};

const rebrandingNayar: Project = {
  slug: 'rebranding-falguni-nayar',
  index: 'LLR · 02',
  title: 'Rebranding Falguni Nayar',
  category: 'Language, Literature and Rhetoric',
  status: awaiting,
  summary:
    'A branding project on Falguni Nayar: understanding the founder and her existing brand, then developing a rebranding concept and positioning.',
  tier: 'index',
  links: [],
  sections: [],
  todo: ['Rebranding Falguni Nayar: the presentation, your contribution, and whether it was group or individual work'],
};

const healthIndia: Project = {
  slug: 'political-economic-influence-on-health',
  index: 'DIR · 01',
  title: 'Political and Economic Influence on Health in India',
  category: 'Diversity, Inclusivity and Rootedness',
  status: awaiting,
  summary: 'Research into how political and economic factors shape healthcare in India.',
  tier: 'index',
  links: [],
  sections: [],
  todo: ['Political and Economic Influence on Health in India: the report or deck, research question, findings, your contribution'],
};

const aiAndArt: Project = {
  slug: 'ai-and-art',
  index: 'DIR · 02',
  title: 'AI and Art',
  category: 'Diversity, Inclusivity and Rootedness',
  status: awaiting,
  summary: 'An exploration of where artificial intelligence meets artistic expression.',
  tier: 'index',
  links: [],
  sections: [],
  todo: ['AI and Art: the visual outputs, concept, your contribution (this one is designed to become a visual-first case study)'],
};

const aiChips: Project = {
  slug: 'the-war-for-ai-chips',
  index: 'TLM · 01',
  title: 'The War for AI Chips',
  category: 'Technology Literacy for Managers',
  status: awaiting,
  summary: 'The competition over AI chips, and why semiconductor technology has become strategic.',
  tier: 'index',
  links: [],
  sections: [],
  todo: ['The War for AI Chips: the deck or report, research question, findings, your contribution'],
};

const genAiFinance: Project = {
  slug: 'generative-ai-in-finance',
  index: 'TLM · 02',
  title: 'Generative AI in Finance',
  subtitle: 'Morgan Stanley: GenAI in the advisor workflow',
  category: 'Technology Literacy for Managers',
  status: { label: 'Completed', tone: 'done' },
  year: '2026',
  summary:
    'How Morgan Stanley Wealth Management uses GenAI before and after client meetings, and whether that is sustaining or disruptive.',
  authorship: 'Group project',
  tier: 'featured',
  coverType: { display: 'AI drafts. The advisor decides.', caption: 'A case study in sustaining innovation.' },
  links: [{ label: 'View the deck (PDF)', href: '/files/tlm-genai-in-finance.pdf', requiresFile: true }],
  tools: ['Disruption theory', 'Value sizing', 'Public filings', 'Industry research'],
  facts: [
    { label: 'Team', value: 'TLM Group 3' },
    { label: 'Company', value: 'Morgan Stanley Wealth Management' },
    { label: 'Verdict', value: 'Sustaining' },
  ],
  sections: [
    {
      heading: 'The question',
      body: [
        'Morgan Stanley gives its financial advisors back the half hour after each client meeting. We looked at the work around a meeting, from finding the firm’s research beforehand to writing notes and follow-ups afterwards, and asked what GenAI changed and whether it disrupts the business.',
      ],
      itemStyle: 'figures',
      items: [
        { label: '$31.8B', body: 'Wealth Management net revenue, 2025' },
        { label: '$7.4T', body: 'Client assets in Wealth Management, end of 2025' },
        { label: '~15,000', body: 'Financial advisors' },
      ],
    },
    {
      heading: 'Before GenAI',
      body: ['Every advisor was also the note-taker and the librarian.'],
      itemStyle: 'figures',
      items: [
        { label: '1M', body: 'Client Zoom calls a year' },
        { label: '30 min', body: 'Of write-up after each one-hour meeting' },
        { label: '7,000', body: 'Fixed questions the old research bot could answer' },
      ],
    },
    {
      heading: 'The solution: AI drafts, the advisor decides',
      itemStyle: 'sequence',
      items: [
        { label: 'Debrief', title: 'After the meeting', body: 'With client consent, the call is transcribed and summarised into notes, action items and a draft follow-up email. The advisor edits and decides what is sent.' },
        { label: 'Assistant', title: 'Before the meeting', body: 'The advisor asks a question in plain English and gets an answer built from about 100,000 of the firm’s own reports, then judges whether it fits the client.' },
      ],
      body: ['Assistant, not agent: nothing reaches a client without the advisor’s approval.'],
    },
    {
      heading: 'Sustaining, not disruptive',
      body: [
        'GenAI was layered onto tools advisors already use, for the same wealthy clients at unchanged fees, built by the incumbent to defend its advisors.',
      ],
      quote: { text: 'Verdict: sustaining. Same clients, same pricing, same advisor; each meeting simply costs less time.' },
    },
    {
      heading: 'Value and people',
      itemStyle: 'figures',
      items: [
        { label: '500,000', body: 'Advisor hours freed a year (1M calls × 0.5 hours)' },
        { label: '$130M–$530M', body: 'A year of revenue capacity, if 25% to 100% of freed time becomes client work' },
        { label: '0.4%–1.7%', body: 'Of Wealth Management revenue' },
      ],
      body: [
        'Our sizing assumed 2,000 working hours a year and treats the result as an upper bound. The one essential human job stays the advisor’s: owning the client’s trust and approving every word that leaves the firm.',
      ],
    },
    {
      heading: 'Recommendation',
      itemStyle: 'sequence',
      items: [
        { label: '01', title: 'Scale', body: 'Take Debrief beyond Zoom into in-person and phone meetings.' },
        { label: '02', title: 'Prove', body: 'Judge it on meetings and net new assets per advisor, not on adoption.' },
        { label: '03', title: 'Watch', body: 'AI-first, flat-fee challengers such as Range, and low-cost advice from Robinhood.' },
      ],
    },
    {
      heading: 'Method',
      body: [
        'Ten sources, including Morgan Stanley’s proxy statement, CNBC, Celent, Fortune and the Christensen Institute, plus TLM Sessions 15 and 17. Our AI use was declared in the deck: Claude was used to verify facts and figures and to lay out the slides.',
      ],
    },
  ],
  todo: [
    'Generative AI in Finance: your individual contribution within Group 3',
    'Generative AI in Finance: export the deck as PDF without the team-photo slide to public/files/tlm-genai-in-finance.pdf',
  ],
};

const angadi: Project = {
  slug: 'ai-marketing-automation',
  index: 'TLM · 03',
  title: 'AI Marketing Automation',
  subtitle: 'Angadi: a festival marketing agent for kirana stores',
  category: 'Technology Literacy for Managers',
  status: { label: 'Working prototype', tone: 'ongoing' },
  year: '2026',
  summary:
    'An AI agent that plans festival offers for a neighbourhood kirana store, designs bilingual WhatsApp posters, and sends nothing without the owner’s approval.',
  role: 'Built the working app',
  authorship: 'Group project',
  tier: 'featured',
  cover: {
    key: 'projects/angadi/angadi-approval-guardrail',
    alt: 'Angadi approval screen on a phone: a "Needs your decision" card explaining that a Kaju Katli offer failed the margin check, with a safer suggested offer and a poster preview. A Demo data badge is visible.',
  },
  gallery: [
    {
      key: 'projects/angadi/angadi-owner-home',
      alt: 'Angadi owner home screen titled "Namaskara, Ramesh", showing Deepavali in 14 days, one offer waiting for approval and last year’s festival sales, with a Demo data badge.',
      caption: 'The owner’s home screen. All figures are simulated.',
    },
    {
      key: 'projects/angadi/angadi-festival-poster',
      alt: 'A red Deepavali WhatsApp poster in Kannada and English for Ramesh Provision Stores offering 250 g free on 2 kg of Kaju Katli, marked Demo data.',
      caption: 'A bilingual poster, with every word and price drawn from the shop’s records.',
    },
  ],
  links: [],
  tools: ['Next.js', 'TypeScript', 'Postgres + pgvector', 'RAG', 'MCP', 'Gemini'],
  facts: [
    { label: 'Course brief', value: 'TLM “AI Studio Cinema”' },
    { label: 'Team', value: 'Group 1, Marketing' },
    { label: 'Languages', value: 'Kannada and English' },
    { label: 'Data', value: 'Synthetic demo store' },
  ],
  note: 'Angadi runs on a synthetic store. Every number in these screenshots is simulated, and the app labels them “Demo data”.',
  sections: [
    {
      heading: 'The brief',
      body: [
        'Our group’s brief centred on Ramesh, a kirana owner in Jayanagar, and his festival marketing. The course asked for a short film showing an AI system that uses retrieval (RAG), the Model Context Protocol (MCP) and responsible AI in practice. Rather than mock it up, the app was built to work for real.',
      ],
    },
    {
      heading: 'How the agent works',
      itemStyle: 'sequence',
      items: [
        { label: '01', title: 'Perceive', body: 'Reads stock, past festival sales and the calendar.' },
        { label: '02', title: 'Plan', body: 'Scores offers with a deterministic offer engine.' },
        { label: '03', title: 'Create', body: 'Writes the message and designs Kannada and English posters.' },
        { label: '04', title: 'Check', body: 'Runs every guardrail on the draft.' },
        { label: '05', title: 'Ask', body: 'Sends the owner an approval card.' },
        { label: '06', title: 'Act', body: 'Only after approval: schedules messages and issues codes.' },
      ],
    },
    {
      heading: 'Responsible by design',
      points: [
        '13 guardrail checks run on every draft, from profit margin against the latest supplier invoice to stock levels and expiry.',
        'Money figures must match the offer engine, not the AI model, and every Kannada message is translated back and checked.',
        'There is no “approve” tool, so the agent cannot approve its own work.',
        'Every claim on the approval card cites its source in the shop’s own records.',
      ],
    },
    {
      heading: 'Under the hood',
      body: [
        'A Next.js app with Postgres and pgvector for retrieval over 41 shop documents, an MCP server exposing 15 tools, and Gemini on its free tier. It is covered by 216 unit and integration tests, 32 agent evaluation scenarios and 23 end-to-end tests.',
      ],
    },
    {
      heading: 'Status',
      body: ['The full festival cycle works end to end on the simulated store. The film and the remaining course deliverables are in progress.'],
    },
  ],
  todo: [
    'Angadi: confirm how you want your role described (repository history shows you wrote the app)',
    'Angadi: add a public link if you make the repository public or deploy a demo',
  ],
};

export const courses: Course[] = [
  {
    code: 'LLR',
    name: 'Language, Literature and Rhetoric',
    intro: 'How language persuades, and how people and brands are presented.',
    projects: [rhetoricalAnalysis, rebrandingNayar],
  },
  {
    code: 'DIR',
    name: 'Diversity, Inclusivity and Rootedness',
    intro: 'Society, policy and culture, examined closely.',
    projects: [healthIndia, aiAndArt],
  },
  {
    code: 'TLM',
    name: 'Technology Literacy for Managers',
    intro: 'Technology seen through a manager’s eyes: what it changes, and what it does not.',
    projects: [aiChips, genAiFinance, angadi],
  },
];

export const academicProjects = courses.flatMap((c) => c.projects);
