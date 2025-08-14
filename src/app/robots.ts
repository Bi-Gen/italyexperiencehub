// src/app/robots.ts
import type { MetadataRoute } from 'next';

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://italyexperiencehub.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',         // API non indicizzabili
          '/_next/',       // assets interni di Next.js
          '/draft/',       // eventuali contenuti in bozza
          '/preview/',     // anteprime
        ],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
