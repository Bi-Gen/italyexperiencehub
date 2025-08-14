import fs from "fs";
import path from "path";
import matter, { type GrayMatterFile } from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { mdxComponents } from "../../../components/mdx";
import { InArticleAd } from "@/components/ads/AdSense";
import Head from "next/head";

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  image?: string;
  keywords?: string[];
  author?: string;
};

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts");
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return {
      title: "Articolo non trovato",
      description: "Il contenuto che cerchi non esiste.",
      alternates: { canonical: `/blog/${params.slug}` },
    };
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(raw) as GrayMatterFile<string>;
  const data = (parsed.data || {}) as Partial<Frontmatter>;

  return {
    title: data.title || "Articolo",
    description: data.description || "",
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: data.title || "",
      description: data.description || "",
      type: "article",
      publishedTime: data.date || "",
      authors: data.author ? [data.author] : undefined,
      images: [
        {
          url:
            data.image ||
            `https://picsum.photos/seed/${encodeURIComponent(params.slug)}/1200/630`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const SITE =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://italyexperiencehub.com";

  const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(raw) as GrayMatterFile<string>;
  const data = (parsed.data || {}) as Partial<Frontmatter>;
  const content = parsed.content || "";

  // JSON-LD schema per articolo
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title || params.slug.replace(/-/g, " "),
    datePublished: data.date || "",
    author: data.author ? { "@type": "Person", name: data.author } : undefined,
    image:
      data.image ||
      `https://picsum.photos/seed/${encodeURIComponent(params.slug)}/1200/630`,
    url: `${SITE}/blog/${params.slug}`,
    description: data.description || "",
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
      </Head>

      <h1 className="text-4xl font-bold mb-2">
        {data.title || params.slug.replace(/-/g, " ")}
      </h1>

      {/* Info autore e data formattata */}
      {(data.date || data.author) && (
        <div className="text-neutral-500 mb-6 text-sm">
          {data.date && (
            <span>
              {new Date(data.date).toLocaleDateString("it-IT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
          {data.author && (
            <>
              {" "}•{" "}
              <span className="font-medium text-neutral-700">{data.author}</span>
            </>
          )}
        </div>
      )}

      {/* Annuncio in-article */}
      <InArticleAd />

      <article className="prose prose-neutral">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      {/* Lista keyword come tag */}
      {Array.isArray(data.keywords) && data.keywords.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-neutral-700 mb-2">Tag:</h3>
          <ul className="flex flex-wrap gap-2">
            {data.keywords.map((kw) => (
              <li
                key={kw}
                className="bg-neutral-200 text-neutral-700 text-xs px-2 py-1 rounded"
              >
                {kw}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
