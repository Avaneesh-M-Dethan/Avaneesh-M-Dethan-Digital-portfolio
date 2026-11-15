import { profile } from '@/content/profile';

/** Set NEXT_PUBLIC_SITE_URL on your host (Netlify or Vercel) once you have a domain. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl).replace(/\/$/, '');

export const showTodos = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SHOW_TODOS === '1';
