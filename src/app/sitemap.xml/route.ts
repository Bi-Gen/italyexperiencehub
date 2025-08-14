// src/app/sitemap.xml/route.ts
import fs from 'fs';
import path from 'path';

const RAW_SITE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://italyexperiencehub.com';

// normalizza senza trailing slash
const SITE = RAW_SITE.replace(/\/+$/, '');

type Entry = {
  loc: string;
  lastmod: string; // ISO
  changefreq: 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number; // 0.0 - 1.0
};

export async function GET() {
  const nowISO = new Date().toISOString();

  // 1) Pagine statiche con priorità/frequenza dedicate
  const staticPages: Entry[] = [
    { loc: `${SITE}/`,            lastmod: nowISO, changefreq: 'daily',   priority: 1.0 },
    { loc: `${SITE}/blog`,        lastmod: nowISO, changefreq: 'daily',   priority: 0.9 },
    { loc: `${SITE}/about`,       lastmod: nowISO, changefreq: 'yearly',  priority: 0.3 },
    { loc: `${SITE}/contatti`,    lastmod: nowISO, changefreq: 'yearly',  priority: 0.3 },
    { loc: `${SITE}/faq`,         lastmod: nowISO, changefreq: 'yearly',  priority: 0.2 },
    { loc: `${SITE}/privacy`,     lastmod: nowISO, changefreq: 'yearly',  priority: 0.1 },
    { loc: `${SITE}/terms`,       lastmod: nowISO, changefreq: 'yearly',  priority: 0.1 },
  ];

  // 2) Post MDX: lastmod = mtime reale del file
  const postsDir = path.join(process.cwd(), 'posts');
  let postEntries: Entry[] = [];

  if (fs.existsSync(postsDir)) {
    const mdxFiles = fs
      .readdirSync(postsDir)
      .filter((f) => f.toLowerCase().endsWith('.mdx'))
      .sort((a, b) => a.localeCompare(b, 'it', { sensitivity: 'base' }));

    postEntries = mdxFiles.map((file) => {
      const slug = file.replace(/\.mdx$/i, '');
      let lastISO = nowISO;
      try {
        const stat = fs.statSync(path.join(postsDir, file));
        lastISO = stat.mtime.toISOString();
      } catch {
        // se fallisce, fallback a nowISO
      }
      return {
        loc: `${SITE}/blog/${encodeURIComponent(slug)}`,
        lastmod: lastISO,
        changefreq: 'daily',
        priority: 0.7,
      };
    });
  }

  // 3) Unisci (statiche prima) e serializza in XML
  const allEntries: Entry[] = [...staticPages, ...postEntries];

  const urlsXml = allEntries
    .map(
      (e) => `
  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`.trim()
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // cache lato edge/browser con SWR per 10 min
      'Cache-Control': 'public, max-age=300, s-maxage=600, stale-while-revalidate=600',
    },
  });
}
