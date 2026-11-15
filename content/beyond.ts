import type { ImageRef } from './types';

export const beyond = {
  heading: { lead: 'There’s more to me', accent: 'than what I build.' },
  body: 'Courts, pools, committee rooms and whatever I happen to be curious about that month.',
  mun: {
    title: 'Model United Nations',
    body: 'Away from the organising desk, MUN is also something I simply enjoy. I have debated as a delegate at conferences and won Best Delegate twice.',
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
    { name: 'Technology and AI', note: 'Reading about it, then trying it.' },
    { name: 'Entrepreneurship', note: 'How small ideas become companies.' },
    { name: 'Travel and exploration', note: 'Seeing how other places live and work.' },
    { name: 'Creative experimentation', note: 'Code as a creative medium.' },
  ],
  /**
   * Personal photographs. Only your best, real photos belong here; the section looks
   * complete without any. Drop images in assets-src/personal/, run `npm run images`,
   * then add entries like { key: 'personal/badminton', alt: '...', caption: '...' }.
   */
  photos: [] as ImageRef[],
  todo: ['Beyond the work: up to four personal photographs (sports, MUN, travel)'],
};
