import type { TimelineEntry } from './types';

export const timelineIntro = { label: 'Timeline', note: 'The journey so far' };

/**
 * The About timeline. Every entry links to where it is told in full.
 * Fill `period` and names when ready, then delete the matching `todo` lines.
 */
export const education: TimelineEntry[] = [
  {
    title: 'Schooling',
    place: 'Thiruvananthapuram, Kerala',
    body: 'Where I did my schooling, in my home city.',
    href: '#house-captain',
    linkLabel: 'Leadership at school',
    todo: ['School name', 'School years (e.g. 2014 to 2026)'],
  },
  {
    title: 'Blue House Captain',
    place: 'School',
    body: 'Captained Blue House through school events and activities.',
    href: '#house-captain',
    linkLabel: 'Read more',
    todo: ['Year you were Blue House Captain'],
  },
  {
    title: 'Secretary General, TMUN',
    place: 'Trivandrum Model United Nations',
    body: 'Ran the organising side of the conference, from the planning to the day itself.',
    href: '#tmun',
    linkLabel: 'Read more',
    todo: ['TMUN year'],
  },
  {
    period: '2026',
    title: 'Founded Quoin',
    place: 'Marketing studio',
    body: 'Started a Meta ads studio for founder-led brands and built its brand and website.',
    href: '/work/quoin/',
    linkLabel: 'See the case study',
  },
  {
    period: 'Now',
    title: 'BBA, T A Pai Management Institute',
    place: 'Bengaluru',
    body: "Doing my BBA, and I'm on the Placement and Corporate Engagement Committee.",
    href: '#academic',
    linkLabel: 'See my coursework',
    todo: ['Start year of your BBA'],
  },
];
