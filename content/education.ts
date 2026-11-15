import type { TimelineEntry } from './types';

/** Fill `period` and the school name when ready, then delete the matching `todo` lines. */
export const education: TimelineEntry[] = [
  {
    title: 'Schooling',
    place: 'Thiruvananthapuram, Kerala',
    body: 'School years in my home city, Thiruvananthapuram.',
    todo: ['School name', 'School years (e.g. 2014 to 2026)'],
  },
  {
    title: 'Blue House Captain',
    place: 'School',
    body: 'Captain of Blue House, leading the house through school events and activities.',
    todo: ['Year you were Blue House Captain'],
  },
  {
    period: 'Now',
    title: 'BBA, T A Pai Management Institute',
    place: 'Bengaluru',
    body: 'Studying for a BBA, building projects on the side, and serving on the Placement and Corporate Engagement Committee.',
    todo: ['Start year of your BBA'],
  },
];
