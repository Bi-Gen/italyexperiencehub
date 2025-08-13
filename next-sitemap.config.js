/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

const SITE = process.env.SITE_URL || 'https://italyexperiencehub.com';

// Rotte statiche dell’App Router che vuoi indicizzare
const STATIC_ROUTES = [
  '/',           // home
  '/about',
  '/privacy',
  '/terms',
  '/faq',
  '/contatti',
  '/blog',
];

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,

  // evita l'index vuoto e genera direttamente /sitemap.xml con le URL
  generateIndexSitemap: false,
  sitemapSize: 5000,

  additionalPaths: async (config) => {
    const out = [];

    // 1) Pagine statiche
    for (const route of STATIC_ROUTES) {
      out.push(config.transform(config, route, { lastmod: new Date().toISOString() }));
    }

    // 2) Pagine blog da /posts/*.mdx
    const postsDir = path.join(process.cwd(), 'posts');
    if (fs.existsSync(postsDir)) {
      const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
      for (const f of files) {
        const slug = f.replace(/\.mdx$/, '');
        out.push(config.transform(config, `/blog/${slug}`, { lastmod: new Date().toISOString() }));
      }
    }

    // 3) Ritorna tutte le promesse
    return Promise.all(out);
  },
};
