// src/app/blog/[slug]/page.tsx
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
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return {
      title: "Articolo non trovato",
      description: "Il contenuto che cerchi non esiste.",
      alternates: { canonical: `/blog/${params.slug}` },
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(fileContent) as GrayMatterFile<string>;
  const data = (parsed.data || {}) as Partial<Frontmatter>;

  return {
    title: data.title || "Articolo",
    description: data.description || "",
    keywords: data.keywords || [],
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: data.title || "",
      description: data.description || "",
      type: "article",
      publishedTime: data.date || "",
      images: data.image
        ? [{ url: data.image, width: 1200, height: 630 }]
        : undefined,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const SITE =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://italyexperiencehub.com";

  const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(fileContent) as GrayMatterFile<string>;
  const data = (parsed.data || {}) as Partial<Frontmatter>;
  const content = parsed.content || "";

  // JSON-LD Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title || "",
    description: data.description || "",
    image: data.image ? [data.image] : [],
    author: {
      "@type": "Person",
      name: data.author || "Italy Experience Hub",
    },
    publisher: {
      "@type": "Organization",
      name: "Italy Experience Hub",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo.png`,
      },
    },
    datePublished: data.date || "",
    dateModified: data.date || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}/blog/${params.slug}`,
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <h1 className="text-4xl font-bold mb-2">
        {data.title || params.slug.replace(/-/g, " ")}
      </h1>
      {data.date && <p className="text-neutral-500 mb-6">{data.date}</p>}

      {/* Annuncio in-article dopo il titolo */}
      <InArticleAd />

      <article className="prose prose-neutral">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      {/* Annuncio post-contenuto */}
      <InArticleAd />
    </main>
  );
}
