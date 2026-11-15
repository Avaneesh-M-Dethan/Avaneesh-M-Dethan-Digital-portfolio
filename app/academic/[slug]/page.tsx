import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { academicPages } from '@/content/academic';
import { CaseStudy } from '@/components/case-study/CaseStudy';
import { getImage } from '@/lib/images';

const featured = academicPages;

export const dynamicParams = false;
export function generateStaticParams() {
  return featured.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = featured.find((x) => x.slug === slug);
  if (!p) return {};
  const img = p.cover ? getImage(p.cover.key) : null;
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/academic/${p.slug}/` },
    openGraph: { title: p.title, description: p.summary, url: `/academic/${p.slug}/`, ...(img ? { images: [{ url: img.src, width: img.width, height: img.height, alt: p.cover!.alt }] } : {}) },
  };
}

export default async function AcademicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = featured.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = featured[i];
  const n = featured[(i + 1) % featured.length];
  return (
    <CaseStudy
      project={p}
      back={{ href: '/#academic', label: 'Back to the story' }}
      next={n && n.slug !== p.slug ? { href: `/academic/${n.slug}/`, title: n.title, category: n.category } : undefined}
    />
  );
}
