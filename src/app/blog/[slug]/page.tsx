import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { mdxComponents } from "../../../components/mdx";
import { InArticleAd } from "@/components/ads/AdSense";

type Frontmatter = {
  title: string;
  description?: string;
  date?: string;
  image?: string;
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
    };
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent) as {
    data: Frontmatter;
    content: string;
  };

  return {
    title: data.title || "Articolo",
    description: data.description || "",
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
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent) as {
    data: Frontmatter;
    content: string;
  };

  // Legge il consenso dai cookie lato client
  const consentGiven =
    typeof document !== "undefined" &&
    document.cookie.includes("consent-v1=accept");

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-neutral-500 mb-6">{data.date}</p>

      {/* Annuncio in-article solo se c'è consenso */}
      {consentGiven && <InArticleAd />}

      <article className="prose prose-neutral">
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </main>
  );
}
