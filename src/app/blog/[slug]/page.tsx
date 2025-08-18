import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content'
import { Clock, Calendar, User, Tag, TrendingUp } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Articolo non trovato - Italy Experience Hub',
      description: 'L\'articolo richiesto non è stato trovato.',
    }
  }

  const seoTitle = post.seo?.title || post.title
  const seoDescription = post.seo?.description || post.description
  const seoKeywords = post.seo?.keywords || post.tags

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords?.join(', '),
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const updatedDate = post.updatedAt ? new Date(post.updatedAt).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  }) : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </span>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              {post.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">
              {post.description}
            </p>
            
            {/* Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min di lettura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Info */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informazioni Articolo</h3>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <span>Categoria: <strong>{post.category}</strong></span>
                  <span>Tempo di lettura: <strong>{post.readingTime} minuti</strong></span>
                </div>
              </div>
              
              {updatedDate && (
                <div className="text-sm text-gray-500">
                  Aggiornato il {updatedDate}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <article className="bg-white rounded-xl p-8 shadow-sm">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700">
              <ReactMarkdown
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-gray-200 pb-2">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>,
                  h4: ({children}) => <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{children}</h4>,
                  ul: ({children}) => <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside space-y-2 my-4">{children}</ol>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-6 bg-primary-50 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({children}) => (
                    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({children}) => (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                      {children}
                    </pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="bg-white rounded-xl p-6 mt-8 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-5 w-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Tag</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              href="/blog"
              className="btn-secondary"
            >
              ← Tutti gli Articoli
            </Link>
            
            <div className="flex space-x-4">
              <Link
                href="/guide"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Guide di Viaggio
              </Link>
              <Link
                href="/destinazioni"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Destinazioni
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}