export const contact = {
  heading: { lead: 'Have something', accent: 'interesting in mind?' },
  body: 'Ideas, projects, opportunities or a good question. My inbox is open.',
  email: 'avaneeshmdethan@gmail.com',
  /** Leave a URL empty to hide that link. */
  links: [
    { label: 'GitHub', href: 'https://github.com/Avaneesh-M-Dethan' },
    { label: 'LinkedIn', href: '' },
    { label: 'Quoin', href: 'https://quoin-tau.vercel.app' },
  ],
  todo: ['Your LinkedIn profile URL (content/social.ts)'],
  footer: 'Thiruvananthapuram · Bengaluru',
};

export const chapters = [
  { id: 'intro', number: '01', label: 'Introduction', nav: false },
  { id: 'about', number: '02', label: 'About', nav: true },
  { id: 'leadership', number: '03', label: 'Leadership', nav: true },
  { id: 'built', number: '04', label: 'Built', nav: true },
  { id: 'academic', number: '05', label: 'Academic', nav: true },
  { id: 'beyond', number: '06', label: 'Beyond', nav: true },
  { id: 'next', number: '07', label: 'Next chapter', nav: false },
  { id: 'connect', number: '08', label: 'Connect', nav: true },
] as const;
