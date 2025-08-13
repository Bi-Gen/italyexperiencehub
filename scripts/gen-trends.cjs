// scripts/gen-trends.cjs  (CommonJS)
// Genera 3-4 post MDX puliti da feed Tech (Google News → fallback).

const fs = require("fs");
const path = require("path");
const https = require("https");
const zlib = require("zlib");

const FEEDS = [
  "https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=it&gl=IT&ceid=IT:it",
  "https://news.google.com/rss?hl=it&gl=IT&ceid=IT:it",
  "https://techcrunch.com/category/apps/feed/",
];

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

function fetchUrl(url, depth = 0) {
  return new Promise((resolve, reject) => {
    if (depth > 5) return reject(new Error("Troppi redirect"));
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent": UA,
          "Accept": "application/rss+xml, application/xml, text/xml;q=0.9,*/*;q=0.8",
          "Accept-Encoding": "gzip, deflate, br",
        },
      },
      (res) => {
        // Segui redirect
        if ([301, 302, 307, 308].includes(res.statusCode)) {
          const nextUrl = new URL(res.headers.location, url).toString();
          res.resume();
          return resolve(fetchUrl(nextUrl, depth + 1));
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} su ${url}`));
        }

        // Decompressione
        const enc = (res.headers["content-encoding"] || "").toLowerCase();
        let stream = res;
        if (enc.includes("br")) stream = res.pipe(zlib.createBrotliDecompress());
        else if (enc.includes("gzip")) stream = res.pipe(zlib.createGunzip());
        else if (enc.includes("deflate")) stream = res.pipe(zlib.createInflate());

        let data = "";
        stream.on("data", (c) => (data += c.toString("utf8")));
        stream.on("end", () => resolve(data));
        stream.on("error", reject);
      }
    );
    req.on("error", reject);
  });
}

const stripHtml = (html) =>
  String(html).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const decodeEntities = (s) =>
  s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");

const sanitize = (s) => decodeEntities(stripHtml(s || ""));

// taglio soft a ~180 caratteri (perfetto per meta description)
const truncate = (s, n = 180) =>
  s.length <= n ? s : s.slice(0, n).replace(/\s+\S*$/, "") + "…";

function slugify(str) {
  return String(str)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// parsing basilare RSS
function parseRss(xml) {
  return Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)).map((m) => {
    const block = m[1];
    const pick = (tag) => {
      const mm = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
      return mm ? mm[1] : "";
    };
    const title = sanitize(pick("title"));
    const link = sanitize(pick("link"));
    const desc = sanitize(pick("description"));
    const pubDate =
      sanitize(pick("pubDate")) || sanitize(pick("updated")) || sanitize(pick("dc:date"));
    let image = "";
    const media =
      block.match(/<media:content[^>]*url="([^"]+)"/i) ||
      block.match(/<enclosure[^>]*url="([^"]+)"/i);
    if (media) image = media[1];
    return { title, link, desc, pubDate, image };
  });
}

(async () => {
  try {
    let items = [];
    let usedFeed = "";

    for (const feed of FEEDS) {
      try {
        const xml = await fetchUrl(feed);
        const parsed = parseRss(xml).filter((x) => x.title && x.link);
        if (parsed.length) {
          items = parsed;
          usedFeed = feed;
          break;
        }
      } catch {
        // prova il prossimo feed
      }
    }

    if (!items.length) throw new Error("Nessun item RSS trovato.");

    const picks = items.slice(0, 4); // quanti post generare
    const postsDir = path.join(process.cwd(), "posts");
    fs.mkdirSync(postsDir, { recursive: true });

    let created = 0;
    for (const it of picks) {
      const title = sanitize(it.title);
      const link = sanitize(it.link);
      const description = truncate(sanitize(it.desc || "Aggiornamenti dal mondo tech e AI."), 180);
      const slug = slugify(title).slice(0, 80);
      const file = path.join(postsDir, `${slug}.mdx`);
      if (fs.existsSync(file)) continue;

      const dateISO = new Date(it.pubDate || Date.now()).toISOString().slice(0, 10);
      const image =
        it.image || `https://picsum.photos/seed/${encodeURIComponent(slug)}/1200/630`;

      const mdx = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
date: "${dateISO}"
source: "${link}"
image: "${image}"
---

> **Fonte originale**: <a href="${link}" target="_blank" rel="nofollow noopener">leggi la notizia</a>

## Cosa è successo

${description}

## Perché è rilevante
- Tendenza nel settore tecnologia/AI.
- Impatto su utenti, aziende o mercato.

<AlertButton message="Vuoi aggiornamenti su temi simili?">Segui gli aggiornamenti</AlertButton>
`;

      fs.writeFileSync(file, mdx, "utf8");
      console.log("✅ Creato:", `posts/${slug}.mdx`);
      created++;
    }

    console.log(
      created
        ? `\nFatto: ${created} nuovi post. Feed usato: ${usedFeed}\n`
        : "Nessun nuovo post (forse esistono già)."
    );
  } catch (e) {
    console.error("Errore:", e.message);
    process.exit(1);
  }
})();
