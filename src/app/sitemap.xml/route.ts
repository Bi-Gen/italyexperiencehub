// src/app/sitemap.xml/route.ts
import fs from 'fs';
import path from 'path';

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://italyexperiencehub.com';

export async function GET() {
  const now = new Date().toISOString();

  // Pagine statiche
  const staticUrls = ['/', '/about', '/privacy', '/terms', '/faq', '/contatti', '/blog'];

  // Post MDX
  const postsDir = path.join(process.cwd(), 'posts');
  const mdxSlugs = fs.existsSync(postsDir)
    ? fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''))
    : [];

  // Costruzione XML
  const urlsXml = [
    ...staticUrls.map(
      (u) => `
    <url>
      <loc>${SITE}${u}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
    ),
    ...mdxSlugs.map(
      (slug) => `
    <url>
      <loc>${SITE}/blog/${slug}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
    ),
  ].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlsXml}
  </urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=600, stale-while-revalidate=600',
    },
  });
}
