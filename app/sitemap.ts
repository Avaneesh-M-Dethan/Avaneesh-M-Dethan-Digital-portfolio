import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { visibleProjects } from '@/content/projects';
import { academicPages } from '@/content/academic';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const work = visibleProjects.filter((p) => p.tier === 'featured').map((p) => `/work/${p.slug}/`);
  const academic = academicPages.map((p) => `/academic/${p.slug}/`);
  return ['/', ...work, ...academic].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
