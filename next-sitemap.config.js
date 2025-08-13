/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

const SITE = process.env.SITE_URL || 'https://italyexperiencehub.com';

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,

  // Aggiunge tutte le pagine blog generate dagli .mdx
  additionalPaths: async (config) => {
    const postsDir = path.join(process.cwd(), 'posts');
    const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];

    return Promise.all(
      files
        .filter((f) => f.endsWith('.mdx'))
        .map((f) =>
          config.transform(config, `/blog/${f.replace(/\.mdx$/, '')}`, {
            lastmod: new Date().toISOString(),
          })
        )
    );
  },
};
