import type { LeadershipEntry } from './types';

export const leadershipIntro = {
  heading: { lead: 'Taking initiative.', accent: 'Making things happen.' },
  body: 'Four roles, from a school house to a college committee. Each one asked me to organise people, not just show up.',
};

export const leadership: LeadershipEntry[] = [
  {
    id: 'house-captain',
    marker: 'A',
    role: 'Blue House Captain',
    organisation: 'School, Thiruvananthapuram',
    body: [
      'As captain of Blue House, I was responsible for a house of students across classes: putting teams together for school events, encouraging people to take part, and representing the house.',
    ],
    themes: ['Student leadership', 'Responsibility', 'Team coordination', 'School activities'],
    todo: ['Year you were captain', 'A photo from your house-captain year, if you have one'],
  },
  {
    id: 'mun',
    marker: 'B',
    role: 'Delegate',
    organisation: 'Model United Nations',
    body: [
      'I have taken part in Model United Nations conferences as a delegate: researching a country position, building arguments, and negotiating with other delegations in committee.',
    ],
    themes: ['Research', 'Public speaking', 'Negotiation', 'Diplomacy'],
    awards: { title: 'Best Delegate', count: 2, note: 'Two Best Delegate awards' },
    todo: [
      'Names and years of the conferences where you won Best Delegate',
      'Committees and countries you represented',
      'Conference photos and certificates',
    ],
  },
  {
    id: 'tmun',
    marker: 'C',
    role: 'Secretary General',
    organisation: 'Trivandrum Model United Nations (TMUN)',
    body: [
      'As Secretary General of TMUN, I led the organising side of the conference: planning it, working with the organising team, delegating responsibilities and seeing it through on the day.',
      'For TMUN 2, we worked out a registration and selection flow designed so that no money changes hands until a delegate has been selected.',
    ],
    themes: ['Conference organisation', 'Team leadership', 'Delegation', 'Event execution'],
    flow: {
      caption: 'Registration and selection flow drafted for TMUN 2',
      steps: [
        { title: 'Apply', detail: 'Free Google Form. Anyone can apply, no fee.' },
        { title: 'Review', detail: 'Organisers score reasoning, not just knowledge.', branch: { title: 'Not selected', detail: 'Informed. No money involved.' } },
        { title: 'Selected', detail: 'Pay a ₹200 deposit within 48 hours.', branch: { title: 'Misses the deadline', detail: 'Spot goes to the next applicant on the waitlist.' } },
        { title: 'Conference day', detail: 'Deposit refunded on entry.', branch: { title: 'No-show', detail: 'Deposit kept to cover costs.' } },
      ],
    },
    todo: [
      'TMUN edition(s) and year',
      'Event photographs (the stage photo with the organising group, once its context is confirmed)',
      'Confirm the TMUN 2 registration flow was used as described',
    ],
  },
  {
    id: 'pcec',
    marker: 'D',
    role: 'Committee Member',
    organisation: 'Placement and Corporate Engagement Committee, TAPMI Bengaluru',
    status: { label: 'Ongoing', tone: 'ongoing' },
    body: [
      "I'm a member of TAPMI Bengaluru's Placement and Corporate Engagement Committee. I worked on GLC, contributing to the research and outreach behind it, and I'm now involved in the committee's ongoing placement work.",
      'Placement details stay with the committee.',
    ],
    themes: ['Corporate outreach', 'Research', 'Event support', 'Placements (ongoing)'],
    todo: ['Full name of GLC and your specific role in it, if you want it shown'],
  },
];
