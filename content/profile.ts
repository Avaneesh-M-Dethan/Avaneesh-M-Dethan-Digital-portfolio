import type { ImageRef } from './types';

export const profile = {
  name: 'Avaneesh M Dethan',
  nameLines: ['Avaneesh', 'M Dethan'],
  tagline: 'Curious by nature. Driven to build.',
  subTagline: 'Exploring the intersection of business, technology, creativity and entrepreneurship.',
  heroIntro:
    "I'm doing my BBA at T A Pai Management Institute in Bengaluru, and I'm from Thiruvananthapuram. When I'm not in class I'm usually building something. It's the way I figure out how an idea turns into a real product or business.",
  heroMeta: [
    { label: 'Studying', value: 'BBA, TAPMI Bengaluru' },
    { label: 'From', value: 'Thiruvananthapuram' },
    { label: 'Building', value: 'Quoin, Angadi, Jarvis' },
  ],
  /** Add an editorial portrait: drop it in assets-src/personal/, run `npm run images`, then set the key here. */
  portrait: null as ImageRef | null,

  siteTitle: 'Avaneesh M Dethan | Student, builder, curious by nature',
  siteDescription:
    'The portfolio of Avaneesh M Dethan, a BBA student at TAPMI Bengaluru. Leadership, the things he has built, academic projects and what he is exploring next.',
  siteUrl: 'https://avaneesh-m-dethan.vercel.app',
  location: 'Bengaluru, India',
};

export const about = {
  heading: { lead: 'More than a designation.', accent: 'A work in progress.' },
  paragraphs: [
    "I grew up in Thiruvananthapuram and moved to Bengaluru for my BBA at TAPMI. The part of business I find most interesting is where it runs into technology. I want to know how an idea actually becomes something people use, and what it takes to make that work as a business.",
    "Most of what I know, I picked up by building things. I started a marketing studio before it had a single client. I wrote an AI assistant that runs on my laptop. I set up a Telegram bot so I'd stop losing track of my attendance. Some of it is finished and some of it isn't yet.",
  ],
  interests: [
    'Business',
    'Entrepreneurship',
    'Technology',
    'Artificial intelligence',
    'Marketing',
    'Creative experimentation',
  ],
  interestsLabel: 'What I keep coming back to',
  photo: {
    key: 'personal/speaking-mun',
    alt: 'Avaneesh in a dark suit and tie, holding a microphone and looking down at it as he prepares to speak.',
  } as ImageRef,
};
