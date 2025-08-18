import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getGuideBySlug, getAllGuides } from '@/lib/content'
import { Clock, MapPin, Calendar, User, Tag } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'
import { ContentAd, SidebarAd } from '@/components/AdSense/AdUnit'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const guides = getAllGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  
  if (!guide) {
    return {
      title: 'Guida non trovata - Italy Experience Hub',
      description: 'La guida richiesta non è stata trovata.',
    }
  }

  const seoTitle = guide.seo?.title || guide.title
  const seoDescription = guide.seo?.description || guide.description
  const seoKeywords = guide.seo?.keywords || guide.tags

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords?.join(', '),
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author],
      tags: guide.tags,
      images: guide.image ? [
        {
          url: guide.image,
          width: 1200,
          height: 630,
          alt: guide.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: guide.image ? [guide.image] : undefined,
    },
  }
}

export default function GuidePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    notFound()
  }

  const publishedDate = new Date(guide.publishedAt).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const updatedDate = guide.updatedAt ? new Date(guide.updatedAt).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  }) : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        {guide.image && (
          <Image
            src={guide.image}
            alt={guide.title}
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
                {guide.category}
              </span>
              {guide.featured && (
                <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  In Evidenza
                </span>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              {guide.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-6 max-w-3xl">
              {guide.description}
            </p>
            
            {/* Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{guide.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{guide.readingTime} min di lettura</span>
              </div>
              {guide.destination && (
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{guide.destination}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Article Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guide.difficulty && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Difficoltà</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    guide.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                    guide.difficulty === 'Medio' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
              )}
              
              {guide.duration && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Durata</h3>
                  <p className="text-gray-600">{guide.duration}</p>
                </div>
              )}
              
              {guide.bestTime && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Periodo Migliore</h3>
                  <p className="text-gray-600">{guide.bestTime}</p>
                </div>
              )}
            </div>
            
            {updatedDate && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Ultimo aggiornamento: {updatedDate}
                </p>
              </div>
            )}
          </div>

          {/* Main Content */}
          <article className="bg-white rounded-xl p-8 shadow-sm">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-strong:text-gray-900">
              <ReactMarkdown>{guide.content}</ReactMarkdown>
            </div>
          </article>

          {/* Tags */}
          {guide.tags && guide.tags.length > 0 && (
            <div className="bg-white rounded-xl p-6 mt-8 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-5 w-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Tag</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to Guides */}
          <div className="mt-12 text-center">
            <Link
              href="/guide"
              className="btn-secondary"
            >
              ← Torna alle Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}