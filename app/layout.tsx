import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/content/profile';
import { contact } from '@/content/social';
import { siteUrl } from '@/lib/site';
import { Nav } from '@/components/layout/Nav';
import { ChapterRail } from '@/components/layout/ChapterRail';
import { Footer } from '@/components/layout/Footer';
import { MotionProvider } from '@/components/motion/MotionProvider';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});
const sans = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: profile.siteTitle, template: `%s — ${profile.name}` },
  description: profile.siteDescription,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: profile.name,
    title: profile.siteTitle,
    description: profile.siteDescription,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: `${profile.name}: ${profile.tagline}` }],
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: profile.siteTitle, description: profile.siteDescription, images: ['/og.jpg'] },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#101010',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  description: profile.siteDescription,
  homeLocation: { '@type': 'Place', name: 'Thiruvananthapuram, Kerala, India' },
  affiliation: { '@type': 'CollegeOrUniversity', name: 'T A Pai Management Institute, Bengaluru' },
  sameAs: contact.links.filter((l) => l.href && l.href.includes('github')).map((l) => l.href),
};

// Runs before first paint: enables scroll reveals only when motion is allowed,
// and a failsafe that shows everything if the reveal controller never starts.
const motionBoot = `(function(){try{var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-motion');setTimeout(function(){d.classList.add('motion-failsafe')},4500)}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <Nav />
        <ChapterRail />
        <MotionProvider />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
