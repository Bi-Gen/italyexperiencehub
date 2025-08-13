// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://italyexperiencehub.com';

// Rotte statiche che vuoi sempre indicizzare
const STATIC_ROUTES = [
  '/',
  '/about',
  '/privacy',
  '/terms',
  '/faq',
  '/contatti',
  '/blog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((url) => ({
    url: `${SITE}${url}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  // Post MDX in /posts
  const postsDir = path.join(process.cwd(), 'posts');
  const mdxEntries: MetadataRoute.Sitemap = fs.existsSync(postsDir)
    ? fs
        .readdirSync(postsDir)
        .filter((f) => f.endsWith('.mdx'))
        .map((f) => {
          const slug = f.replace(/\.mdx$/, '');
          return {
            url: `${SITE}/blog/${slug}`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.7,
          };
        })
    : [];

  return [...staticEntries, ...mdxEntries];
}
