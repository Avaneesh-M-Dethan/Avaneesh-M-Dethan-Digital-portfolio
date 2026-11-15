import type { ImageRef } from './types';

export const profile = {
  name: 'Avaneesh M Dethan',
  nameLines: ['Avaneesh', 'M Dethan'],
  tagline: 'Curious by nature. Driven to build.',
  subTagline: 'Exploring the intersection of business, technology, creativity and entrepreneurship.',
  heroIntro:
    'BBA student at T A Pai Management Institute, Bengaluru. From Thiruvananthapuram, Kerala. I like finding out how ideas become real products, businesses and experiences, usually by building one.',
  heroMeta: [
    { label: 'Studying', value: 'BBA, TAPMI Bengaluru' },
    { label: 'From', value: 'Thiruvananthapuram' },
    { label: 'Building', value: 'Quoin, Angadi, Jarvis' },
  ],
  /** Add an editorial portrait: drop it in assets-src/personal/, run `npm run images`, then set the key here. */
  portrait: null as ImageRef | null,

  siteTitle: 'Avaneesh M Dethan — Student, builder, curious by nature',
  siteDescription:
    'The portfolio of Avaneesh M Dethan, a BBA student at TAPMI Bengaluru: leadership, the things he has built, academic projects and what he is exploring next.',
  siteUrl: 'https://avaneesh-portfolio.netlify.app',
  location: 'Bengaluru, India',
};

export const about = {
  heading: { lead: 'More than a designation.', accent: 'A work in progress.' },
  paragraphs: [
    "I grew up in Thiruvananthapuram, Kerala, and I'm now studying for a BBA at TAPMI Bengaluru. Most of what pulls my attention sits where business meets technology: how an idea becomes a product, a company or an experience that people actually use.",
    "I learn by building. That has meant starting a marketing studio before it had a single client, writing an AI assistant that runs on my own laptop, and putting a small Telegram bot to work on my college timetable. Not all of it is finished. All of it taught me something.",
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
