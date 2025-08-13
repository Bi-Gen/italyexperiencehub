/** @type {import('next-sitemap').IConfig} */
const fs = require("fs");
const path = require("path");

module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,

  additionalPaths: async (config) => {
    const base = process.env.SITE_URL || "http://localhost:3000";
    const postsDir = path.join(process.cwd(), "posts");
    const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];
    const entries = files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => ({
        loc: `${base}/blog/${f.replace(/\.mdx$/, "")}`,
        lastmod: new Date().toISOString(),
      }));
    return entries.map((e) => config.transform(config, e.loc));
  },
};
