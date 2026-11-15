import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { profile } from '@/content/profile';
import { contact } from '@/content/social';
import { siteUrl } from '@/lib/site';
import { Nav } from '@/components/layout/Nav';
import { ChapterRail } from '@/components/layout/ChapterRail';
import { Footer } from '@/components/layout/Footer';
import { MotionProvider } from '@/components/motion/MotionProvider';

// Fonts are self-hosted from app/fonts (Latin subset), so builds never depend on a network download.
const display = localFont({
  src: [
    { path: './fonts/cormorant-garamond-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-300-italic.woff2', weight: '300', style: 'italic' },
    { path: './fonts/cormorant-garamond-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/cormorant-garamond-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-500-italic.woff2', weight: '500', style: 'italic' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});
const sans = localFont({
  src: './fonts/manrope-latin-wght-normal.woff2',
  weight: '200 800',
  variable: '--font-manrope',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});
const mono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-plex-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
});

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
