// src/app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter, { type GrayMatterFile } from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { InArticleAd } from "@/components/ads/AdSense";

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  image?: string;
  keywords?: string[];
};

export default function BlogPage() {
  const SITE =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://italyexperiencehub.com";

  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];

  const posts = files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");

      // parsing sicuro
      const parsed = matter(raw) as GrayMatterFile<string>;
      const data = (parsed.data || {}) as Partial<Frontmatter>;

      const title = data.title ?? slug;
      const description = data.description ?? "";
      const date = data.date ?? "";
      const image =
        data.image ||
        `https://picsum.photos/seed/${encodeURIComponent(slug)}/800/450`;

      return { slug, title, description, date, image };
    })
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });

  // JSON-LD Blog Schema
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${SITE}/blog`,
    name: "Italy Experience Hub Blog",
    description: "Articoli, itinerari e guide per scoprire l’Italia.",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.date || "",
      image: [p.image],
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
        />
      </Head>

      <h1 className="text-3xl font-bold mb-8">Ultimi articoli</h1>

      {posts.length === 0 ? (
        <p className="text-neutral-600">Nessun articolo pubblicato (ancora!).</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <>
              <article
                key={post.slug}
                className="rounded-xl overflow-hidden border hover:shadow-sm transition"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Leggi l'articolo: ${post.title}`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="w-full h-44 object-cover"
                    priority={index === 0}
                    unoptimized
                  />
                  <div className="p-4 space-y-2">
                    <h2 className="text-lg font-semibold line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-neutral-600 line-clamp-3">
                      {post.description}
                    </p>
                    {post.date && (
                      <p className="text-xs text-neutral-500">{post.date}</p>
                    )}
                  </div>
                </Link>
              </article>

              {/* Inseriamo un blocco AdSense dopo la 3a card */}
              {index === 2 && (
                <div className="sm:col-span-2 lg:col-span-3">
                  <InArticleAd />
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </main>
  );
}
