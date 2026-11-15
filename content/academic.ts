import type { Course, Project } from './types';

export const academicIntro = {
  heading: { lead: 'Exploring ideas', accent: 'beyond the classroom.' },
  body: 'Eight projects across four courses, all with my working group. Each case study is pulled from the actual deck, report or film, and links straight to it.',
  folder: { label: 'All project files on Google Drive', href: 'https://drive.google.com/drive/folders/1c2tW-soLI_EIWcQe6QoFctKzgAXXtS5u' },
};

const done = { label: 'Completed', tone: 'done' } as const;

/** Every deck lists the same five members. */
const team = 'Working Group 1: Anushka Rajgor, Krishna Moorari, Prragyaa Mishra, Rishima Agrawal and me';
const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const deckLink = (id: string) => ({ label: 'View the deck on Google Drive', href: drive(id) });

const rhetoricalAnalysis: Project = {
  slug: 'rhetorical-analysis',
  index: 'LLR · 01',
  title: 'Rhetorical Analysis',
  subtitle: 'Brand the Persona: Falguni Nayar and Nykaa',
  category: 'Language, Literature and Rhetoric',
  status: done,
  year: '2026',
  summary:
    'How a business leader uses rhetoric to build a personal brand: ethos, pathos, logos and kairos in Falguni Nayar’s speeches, interviews and Nykaa’s ads.',
  authorship: 'Group project',
  tier: 'featured',
  coverType: { display: 'Ethos.', caption: 'Her own career is the proof behind her advice.' },
  links: [deckLink('1-L50DT3pDdz4cJ_hEBvGKQzSKMozZqrf')],
  tools: ['Ethos, pathos, logos, kairos', 'SOAPS', 'Rhetorical triangle', 'Close reading'],
  facts: [
    { label: 'Team', value: team },
    { label: 'Subject', value: 'Falguni Nayar, founder of Nykaa' },
    { label: 'Material', value: 'Speeches, interviews, ads and social media' },
  ],
  sections: [
    {
      heading: 'Why Nykaa',
      body: [
        'Women are still under-represented in business leadership, so their stories are heard less often. We deliberately chose a woman entrepreneur: Falguni Nayar left investment banking in 2012 to build Nykaa from scratch, and her interviews, speeches and ads give rich material to analyse.',
        'The project had three parts: analyse how she persuades, redesign her public image, and present the findings. The redesign is the companion project, Rebranding Falguni Nayar.',
      ],
    },
    {
      heading: 'How she persuades',
      itemStyle: 'grid',
      items: [
        { label: 'Ethos', title: 'Credibility', body: 'Over 20 years at Kotak, an IIM Ahmedabad alumna, and the 2012 decision to leave banking and build Nykaa.' },
        { label: 'Pathos', title: 'Emotion', body: 'A hopeful message urging women to put their own dreams first; Nykaa’s mother–daughter ad builds warmth and nostalgia.' },
        { label: 'Logos', title: 'Logic', body: 'Cause and effect: “Once you invest enough in yourself, the rewards will follow on their own.”' },
        { label: 'Kairos', title: 'Timing', body: 'The right advice at the right moment: graduates choosing their careers.' },
      ],
    },
    {
      heading: 'Logos in an ad',
      body: [
        'Nykaa’s “Pop this, not this” ad builds its argument in four steps: a clear contrast (pop bubble wrap, not pimples), a promise (clear skin), a fact-based solution (salicylic acid) and a call to action (“Search Salicylic Acid on Nykaa”). The audience moves from problem, to reason, to action.',
      ],
    },
    {
      heading: 'The convocation address: SOAPS',
      body: ['Her 57th Convocation Address at IIM Ahmedabad, 13 April 2022, examined with the SOAPS framework.'],
      itemStyle: 'grid',
      items: [
        { label: 'S', title: 'Subject', body: 'Pursuing your own dream, with commitment, risk, learning and integrity.' },
        { label: 'O', title: 'Occasion', body: 'IIM Ahmedabad’s 57th Convocation, a homecoming that made life “officially come full circle.”' },
        { label: 'A', title: 'Audience', body: 'The class of 2022, with a direct message to the women graduates; families, faculty and the board.' },
        { label: 'P', title: 'Purpose', body: 'Inspire, advise from three careers, and reframe success toward learning, people and integrity.' },
        { label: 'S', title: 'Speaker', body: 'Falguni Nayar: IIMA alumna, former banker and founder of Nykaa.' },
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
      heading: 'Takeaway',
      quote: {
        text: 'Mapping the rhetorical triangle revealed ethos as her strongest appeal: her journey from banker to Nykaa founder at fifty is the proof behind every lesson.',
        source: 'From my summary of the analysis',
      },
    },
  ],
  todo: ['Rhetorical Analysis: which part of the group work was yours (optional)'],
};

const rebrandingNayar: Project = {
  slug: 'rebranding-falguni-nayar',
  index: 'LLR · 02',
  title: 'Rebranding Falguni Nayar',
  subtitle: 'From celebrated founder to “The Reinvention Mentor”',
  category: 'Language, Literature and Rhetoric',
  status: done,
  year: '2026',
  summary: 'A proposed repositioning of Falguni Nayar’s public story, and a brand and experience concept for Nykaa built around “Beauty that belongs to you.”',
  authorship: 'Group project',
  tier: 'index',
  coverType: { display: 'The Reinvention Mentor.', caption: 'A concept for a class project.' },
  links: [deckLink('1MB_d-DSY-wJRExFCbO8-_lipPNC-3icZ')],
  tools: ['Brand positioning', 'Content strategy', 'Visual identity', 'Rhetorical appeals'],
  facts: [
    { label: 'Team', value: team },
    { label: 'Builds on', value: 'Rhetorical Analysis (LLR · 01)' },
  ],
  note: 'This is a proposed concept developed for a class project, not a claim about her current personal brand or Nykaa’s plans.',
  sections: [
    {
      heading: 'The repositioning',
      body: [
        'The current story: a respected entrepreneur who moved from investment banking to building Nykaa. The proposed story: a leader who makes reinvention feel possible, practical and relevant at every career stage.',
        'The line that carries it: “Experience is valuable when it helps someone else take their next step.”',
      ],
    },
    {
      heading: 'The Reinvention Series',
      itemStyle: 'grid',
      items: [
        { label: '01', title: 'Founder’s Field Notes', body: 'Short posts on one real decision: the context, options, risks and lesson.' },
        { label: '02', title: 'Ask Falguni', body: 'A monthly Q&A with students, first-time founders and people considering a career shift.' },
        { label: '03', title: 'Behind the Decision', body: 'Video conversations on customer insight, discipline, team-building and setbacks.' },
        { label: '04', title: 'The Next Chapter', body: 'Spotlights on founders at different ages and stages.' },
      ],
    },
    {
      heading: 'Make it visible through actions',
      itemStyle: 'sequence',
      items: [
        { label: '01', title: 'Speak with clarity', body: 'Plain-language interviews with specific examples, trade-offs and lessons.' },
        { label: '02', title: 'Show accountability', body: 'Share what worked, what did not and what changed afterwards.' },
        { label: '03', title: 'Open the door', body: 'Mentorship sessions, founder roundtables and student conversations.' },
      ],
    },
    {
      heading: 'Nykaa, your way',
      body: ['A proposed brand platform that moves Nykaa from product discovery to personalised beauty and self-expression: “Beauty that belongs to you.” The name stays; the visual system softens into ivory, rose, sage and deep green.'],
      points: [
        'My Beauty Blueprint: an optional profile for concerns, preferences and budget that explains why products are recommended.',
        'Nykaa Beauty Studio: in-store shade matching, quick consultations and beginner workshops.',
        'The Nykaa Circle: creator tutorials, expert Q&As, regional-language guides and balanced reviews.',
      ],
    },
  ],
  todo: ['Rebranding Falguni Nayar: which part was yours (optional)'],
};

const healthIndia: Project = {
  slug: 'political-economic-influence-on-health',
  index: 'DIR · 01',
  title: 'Political and Economic Influence on Health in India',
  subtitle: 'Health is political: who gets to be well?',
  category: 'Diversity, Inclusivity and Rootedness',
  status: done,
  year: '2026',
  summary: 'An anthropological look at how money, policy and social position shape who stays healthy in India.',
  authorship: 'Group project',
  tier: 'index',
  coverType: { display: 'Who gets to be well?', caption: 'Power, inequality and public health in India.' },
  links: [deckLink('1x8f4EiAj2dj6cZUnvfmJwcezu04TPd6g')],
  tools: ['Anthropological lens', 'Social determinants of health', 'Public data', 'Case studies'],
  facts: [{ label: 'Team', value: team }],
  sections: [
    {
      heading: 'The central idea',
      body: ['Health is shaped not only by biology, but by who has money, services, rights and political attention.'],
      itemStyle: 'grid',
      items: [
        { label: 'Economic', title: 'Power', body: 'Income affects food, housing, transport, time off work and the ability to pay for treatment.' },
        { label: 'Political', title: 'Power', body: 'Policies decide where hospitals are built, what is funded and who qualifies for support.' },
        { label: 'Social', title: 'Power', body: 'Caste, gender, disability, language and location shape whose needs are heard.' },
      ],
    },
    {
      heading: 'Who pays when people get sick?',
      body: ['The government’s share of India’s health spending rose over the decade, but families still paid 43.4% themselves in 2022–23.'],
      itemStyle: 'figures',
      items: [
        { label: '64.2%', body: 'Paid out of pocket by households, 2013–14' },
        { label: '43.4%', body: 'Paid out of pocket by households, 2022–23' },
        { label: '43.7%', body: 'Government share, 2022–23 (up from 28.6%)' },
      ],
    },
    {
      heading: 'Bringing care closer',
      points: [
        'Haat Bazaar clinics in Chhattisgarh take mobile clinics to weekly markets people already visit, covering 18 million people.',
        'Ayushman Arogya Mandirs aim to provide primary healthcare, screening and teleconsultation closer to home.',
        'PM-JAY offers ₹5 lakh of annual hospital cover per eligible family, but insurance alone is not enough without nearby primary care.',
        'ASHA workers connect policy to everyday life through maternal and child health, immunisation and referrals.',
      ],
    },
    {
      heading: 'The takeaway',
      quote: { text: 'Ask who gets access, who pays, and who is heard.' },
    },
    {
      heading: 'Sources and method',
      body: [
        'National Health Accounts Estimates 2022–23 (Ministry of Health and Family Welfare), WHO India, the Ayushman Arogya Mandir portal and the National Health Authority. The deck declares that brainstorming and slide drafting were assisted by ChatGPT.',
      ],
    },
  ],
  todo: ['Health in India: which part was yours (optional)'],
};

const aiAndArt: Project = {
  slug: 'ai-and-art',
  index: 'DIR · 02',
  title: 'AI and Art',
  subtitle: 'A short documentary: the people behind the ink',
  category: 'Diversity, Inclusivity and Rootedness',
  status: done,
  year: '2026',
  summary: 'A short documentary in which we asked tattoo artists how AI is changing their craft, and whether it could ever replace them.',
  authorship: 'Group project',
  tier: 'index',
  coverType: { display: 'The people behind the ink.', caption: 'A documentary on AI and tattoo art.' },
  links: [{ label: 'Watch the documentary on Google Drive', href: drive('1ld7C7AgaYxsryI6_hZ8O2EY61q9lWdoL') }],
  tools: ['Documentary', 'Field interviews', 'Video editing'],
  facts: [
    { label: 'Team', value: team },
    { label: 'Format', value: 'Short documentary film' },
    { label: 'Interviewees', value: 'Tattoo artists in their studios' },
  ],
  sections: [
    {
      heading: 'The question',
      body: [
        'Art has always reflected human creativity, skill and imagination. With AI entering almost every creative field, we asked what happens to an artist when technology starts creating art of its own, and went to tattoo studios to find out.',
      ],
    },
    {
      heading: 'What the artists told us',
      itemStyle: 'grid',
      items: [
        { label: 'Seeing the idea', body: 'Clients arrive with a design in their head. Artists use AI to turn it into reference images quickly, then refine them in Photoshop.' },
        { label: 'Saving time', body: 'Design and stencil work that used to take hours can now take a fraction of the time.' },
        { label: 'Losing something', body: 'One artist put it plainly: the time saved is the positive; the creativity being lost is the negative.' },
        { label: 'The human hand', body: 'AI can offer a reference, but not the tattoo itself. A person knows when to stop because the client is in pain.' },
      ],
    },
    {
      heading: 'In their words',
      quote: { text: 'Machines can do anything but not like a human. It\u2019s a handmade thing.', source: 'A tattoo artist interviewed for the film' },
    },
    {
      heading: 'Takeaway',
      body: ['In the studios we visited, AI is changing how designs are sketched, not who holds the needle.'],
    },
  ],
  todo: ['AI and Art: which part of the film was yours (filming, interviews, editing)'],
};

const aiChips: Project = {
  slug: 'the-war-for-ai-chips',
  index: 'TLM · 01',
  title: 'The War for AI Chips',
  subtitle: 'How the US–China rivalry is reshaping who can build AI',
  category: 'Technology Literacy for Managers',
  status: done,
  year: '2026',
  summary: 'The April 2025 export rule on Nvidia’s H20 chip, and what it means for companies, managers and India.',
  authorship: 'Group project',
  tier: 'index',
  coverType: { display: 'Who controls the compute?', caption: 'The Nvidia H20 case, April 2025.' },
  links: [deckLink('1qQoh44Q3QBR7A7-BXIZ-47XqI9ZArinH')],
  tools: ['Case analysis', 'Company filings', 'Supply-chain thinking', 'Managerial recommendation'],
  facts: [
    { label: 'Team', value: team },
    { label: 'Case', value: 'Nvidia H20, April 2025' },
  ],
  sections: [
    {
      heading: 'What happened',
      body: ['In April 2025 the US required a licence for Nvidia’s H20 exports to China, and said the requirement would last indefinitely.'],
      itemStyle: 'sequence',
      items: [
        { label: '2022', title: 'A100 / H100', body: 'The US restricts sales of leading AI chips to China.' },
        { label: '2023', title: 'A800 / H800', body: 'Rules tighten; Nvidia adapts chip designs for China.' },
        { label: '9 Apr 2025', title: 'H20 licence', body: 'Nvidia is told a licence is required for H20 exports.' },
        { label: '14 Apr 2025', title: 'Indefinite', body: 'The licence requirement will remain in effect indefinitely.' },
      ],
    },
    {
      heading: 'The financial hit',
      itemStyle: 'figures',
      items: [
        { label: '$5.5B', body: 'Initial expected charge, 15 April 2025' },
        { label: '$4.5B', body: 'Charge Nvidia finally reported, after reusing some materials' },
        { label: '4', body: 'Links in the ripple: chipmaker, cloud provider, AI company, customer' },
      ],
    },
    {
      heading: 'Why one chip became geopolitical',
      body: ['AI capability depends on access to chips, not only on talented engineers or good software. That makes chips both a business input and national infrastructure.'],
    },
    {
      heading: 'A manager’s view',
      itemStyle: 'sequence',
      items: [
        { label: '01', title: 'Sourcing', body: 'Do not rely on a single chip, cloud provider or supplier.' },
        { label: '02', title: 'Cost structure', body: 'Estimate cost per AI task, cloud bills, delays and switching costs.' },
        { label: '03', title: 'Tech roadmap', body: 'Build flexible systems: efficient models, portable software, backup infrastructure.' },
      ],
    },
    {
      heading: 'Conclusion',
      quote: { text: 'Compute is no longer just an IT purchase. It is a strategic business dependency.' },
      body: ['For managers: build flexibility. For India: build resilience. Sources: NPR (16 April 2025), Nvidia’s Form 8-K (15 April 2025) and its Q1 FY2026 filing.'],
    },
  ],
  todo: ['The War for AI Chips: which part was yours (optional)'],
};

const genAiFinance: Project = {
  slug: 'generative-ai-in-finance',
  index: 'TLM · 02',
  title: 'Generative AI in Finance',
  subtitle: 'Morgan Stanley: GenAI in the advisor workflow',
  category: 'Technology Literacy for Managers',
  status: done,
  year: '2026',
  summary:
    'How Morgan Stanley Wealth Management uses GenAI before and after client meetings, and whether that is sustaining or disruptive.',
  authorship: 'Group project',
  tier: 'featured',
  coverType: { display: 'AI drafts. The advisor decides.', caption: 'A case study in sustaining innovation.' },
  links: [deckLink('1wjifEH8CDuGHfDZYxXLRrjs0YJ-Xhk3n')],
  tools: ['Disruption theory', 'Value sizing', 'Public filings', 'Industry research'],
  facts: [
    { label: 'Team', value: team },
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
      body: ['GenAI was layered onto tools advisors already use, for the same wealthy clients at unchanged fees, built by the incumbent to defend its advisors.'],
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
  todo: ['Generative AI in Finance: which part was yours (optional)'],
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
    { label: 'Team', value: team },
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
    'Angadi: add a public link (deploy a demo, make the repository public, or upload the film to Drive)',
  ],
};

const eternal: Project = {
  slug: 'eternal-limited-accounting',
  index: 'ACC · 01',
  title: 'Eternal Limited: the Accounting Cycle',
  subtitle: 'From opening balances to financial statements',
  category: 'Accounting',
  status: done,
  year: '2026',
  summary: 'The full accounting cycle for Eternal Limited (formerly Zomato), from journal entries and ledgers to trial balances and financial statements.',
  role: 'Presented the statement of changes in equity, the balance sheet, and the verification and conclusion',
  authorship: 'Group project',
  tier: 'index',
  coverType: { display: 'Assets = Equity + Liabilities.', caption: 'Confirmed at ₹35,852.06 crore.' },
  links: [{ label: 'View the report on Google Drive', href: drive('1fom36t7g8dJ0fF0nP94sjVapzmVzjm6I') }],
  tools: ['Double-entry bookkeeping', 'Ledger posting', 'Trial balance', 'Accrual adjustments', 'Financial statements'],
  facts: [
    { label: 'Team', value: team },
    { label: 'Company', value: 'Eternal Limited (formerly Zomato)' },
  ],
  note: 'An academic simulation built on Eternal’s opening standalone balances with 30 hypothetical transactions. These are not the company’s actual FY 2025–26 results.',
  sections: [
    {
      heading: 'The cycle',
      itemStyle: 'sequence',
      items: [
        { label: '01', title: 'Opening balances', body: 'Sourced from standalone financials at 31 March 2025.' },
        { label: '02', title: 'Journal entries', body: '30 hypothetical FY 2025–26 transactions, each with its dual effect.' },
        { label: '03', title: 'Ledger posting', body: 'Chronological entries reorganised into account-wise balances.' },
        { label: '04', title: 'Trial balances', body: 'Unadjusted, then adjusted for depreciation and prepaid insurance.' },
        { label: '05', title: 'Financial statements', body: 'Profit and loss, changes in equity, and the balance sheet.' },
      ],
    },
    {
      heading: 'Key figures',
      itemStyle: 'figures',
      items: [
        { label: '₹35,851 cr', body: 'Opening balances, debit equals credit' },
        { label: '₹35,856.13 cr', body: 'Adjusted trial balance' },
        { label: '₹1.14 cr', body: 'Simulated loss, absorbed by other equity' },
      ],
    },
    {
      heading: 'My part',
      body: [
        'I presented the final three sections. The statement of changes in equity shows the simulated ₹1.14 crore loss reducing other equity while share capital stays at ₹907 crore. The balance sheet confirms the accounting equation: ₹35,852.06 crore of assets equals ₹34,113.86 crore of equity plus ₹1,738.20 crore of liabilities. The conclusion verifies that both trial balances agree.',
      ],
    },
    {
      heading: 'Limitations we stated',
      points: ['GST ignored, and tax not computed for lack of information.', 'Cash flow and EPS excluded.', 'No unsupported estimates introduced.', 'Opening balances from standalone financials only.'],
    },
  ],
};

export const courses: Course[] = [
  {
    code: 'LLR',
    name: 'Language, Literature and Rhetoric',
    intro: 'How language persuades, and how people and brands present themselves.',
    projects: [rhetoricalAnalysis, rebrandingNayar],
  },
  {
    code: 'DIR',
    name: 'Diversity, Inclusivity and Rootedness',
    intro: 'A closer look at society, policy and culture.',
    projects: [healthIndia, aiAndArt],
  },
  {
    code: 'TLM',
    name: 'Technology Literacy for Managers',
    intro: 'Technology from a manager’s point of view. What it changes, and what it doesn’t.',
    projects: [aiChips, genAiFinance, angadi],
  },
  {
    code: 'ACC',
    name: 'Accounting',
    intro: 'The full accounting cycle, worked through on a real company’s books.',
    projects: [eternal],
  },
];

export const academicProjects = courses.flatMap((c) => c.projects);

/** Projects with enough material for their own page. */
export const academicPages = academicProjects.filter((p) => p.sections.length > 0);
