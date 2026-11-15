import type { ImageRef } from './types';

export const beyond = {
  heading: { lead: 'There’s more to me', accent: 'than what I build.' },
  body: 'Outside class and projects, this is where most of my time goes.',
  mun: {
    title: 'Model United Nations',
    body: "Organising aside, I just enjoy MUN. I've debated as a delegate at a few conferences and won Best Delegate twice.",
    awardCount: 2,
  },
  sportsLabel: 'Sports and training',
  sports: [
    { name: 'Badminton', tag: 'Court' },
    { name: 'Swimming', tag: 'Pool' },
    { name: 'Cricket', tag: 'Field' },
    { name: 'Strength training', tag: 'Gym' },
    { name: 'Running', tag: 'Road' },
  ],
  interestsLabel: 'Other interests',
  interests: [
    { name: 'Technology and AI', note: 'I read about it, then try it out.' },
    { name: 'Entrepreneurship', note: 'How small ideas turn into companies.' },
    { name: 'Travel and exploration', note: 'Seeing how other places live and work.' },
    { name: 'Creative experimentation', note: 'Using code to make things that look good.' },
  ],
  /**
   * Personal photographs. Only your best, real photos belong here; the section looks
   * complete without any. Drop images in assets-src/personal/, run `npm run images`,
   * then add entries like { key: 'personal/badminton', alt: '...', caption: '...' }.
   */
  photos: [] as ImageRef[],
  todo: ['Beyond the work: up to four personal photographs (sports, MUN, travel)'],
};
