export const contact = {
  heading: { lead: 'Have something', accent: 'interesting in mind?' },
  body: 'Got an idea, a project, an opportunity or just a good question? Send it my way.',
  email: 'avaneeshmdethan@gmail.com',
  /** Leave a URL empty to hide that link. */
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avaneesh-m-dethan-b5879b2b6/' },
    { label: 'Quoin', href: 'https://quoin-tau.vercel.app' },
  ],
  footer: 'Thiruvananthapuram · Bengaluru',
  photo: {
    key: 'personal/portrait-lets-talk',
    alt: 'Avaneesh sitting under a warm neon sign that reads "Let\u2019s Drink, Let\u2019s Eat, Let\u2019s Talk", smiling as he looks up from his phone.',
  },
};

export const chapters = [
  { id: 'intro', number: '01', label: 'Introduction', nav: false },
  { id: 'about', number: '02', label: 'About', nav: true },
  { id: 'leadership', number: '03', label: 'Leadership', nav: true },
  { id: 'academic', number: '04', label: 'Academic', nav: true },
  { id: 'built', number: '05', label: 'Built', nav: true },
  { id: 'beyond', number: '06', label: 'Beyond', nav: true },
  { id: 'next', number: '07', label: 'Next chapter', nav: false },
  { id: 'connect', number: '08', label: 'Connect', nav: true },
] as const;
