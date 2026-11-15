import type { LeadershipEntry } from './types';

export const leadershipIntro = {
  heading: { lead: 'Taking initiative.', accent: 'Making things happen.' },
  body: 'Four roles so far. Captain of a school house, a delegate at MUN, Secretary General of TMUN, and now a member of the placement committee at TAPMI.',
};

export const leadership: LeadershipEntry[] = [
  {
    id: 'house-captain',
    marker: 'A',
    role: 'House Captain',
    organisation: 'School, Thiruvananthapuram',
    body: [
      'I was a house captain at school. In practice that meant picking teams for events, getting people to actually sign up, and representing the house.',
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
      "I've been a delegate at more than one Model United Nations conference. You research your country's position, work out your arguments, and then spend the conference negotiating with delegates who want something else.",
    ],
    themes: ['Research', 'Public speaking', 'Negotiation', 'Diplomacy'],
    awards: { title: 'Best Delegate', count: 2, note: 'Two Best Delegate awards' },
    photos: [
      {
        key: 'personal/best-delegate-sarvomun-2024',
        alt: 'Avaneesh smiling and holding up a Best Delegate plaque from SarvoMUN 2K24 in one hand and a gold Best Delegate trophy in the other.',
        caption: 'Best Delegate, SarvoMUN 2K24',
      },
    ],
    todo: [
      'Name and year of your second Best Delegate conference (SarvoMUN 2K24 is shown on the trophy)',
      'Committees and countries you represented',
    ],
  },
  {
    id: 'tmun',
    marker: 'C',
    role: 'Secretary General',
    organisation: 'Trivandrum Model United Nations, TMUN',
    body: [
      'At TMUN I was Secretary General, so the organising side was on me. That meant planning the conference, working with the organising team, handing out responsibilities and making sure it all came together on the day.'
    ],
    themes: ['Conference organisation', 'Team leadership', 'Delegation', 'Event execution'],
    photos: [
      {
        key: 'personal/tmun-secretary-general',
        alt: 'A blue TMUN announcement card with a circular photo of Avaneesh holding a microphone, his name and the title "Secretary General" in yellow, and the conference emblem of a tea glass inside a laurel wreath.',
        caption: 'Announced as Secretary General, TMUN',
      },
    ],
    todo: ['TMUN edition(s) and year'],
  },
  {
    id: 'pcec',
    marker: 'D',
    role: 'Committee Member',
    organisation: 'Placement and Corporate Engagement Committee, TAPMI Bengaluru',
    status: { label: 'Ongoing', tone: 'ongoing' },
    body: [
      "I'm on TAPMI Bengaluru's Placement and Corporate Engagement Committee. I worked on GLC, mostly on the research and outreach side, and right now I'm part of the committee's placement work.",
      "I'll leave the placement details with the committee.",
    ],
    themes: ['Corporate outreach', 'Research', 'Event support', 'Placements (ongoing)'],
    photos: [
      {
        key: 'personal/glc-stage',
        alt: 'Avaneesh in a dark suit on stage with four others in front of a pink event backdrop and sponsor banner, holding a framed gift and a gift bag.',
        caption: 'On stage at GLC',
      },
    ],
    todo: ['Full name of GLC and your specific role in it, if you want it shown'],
  },
];
