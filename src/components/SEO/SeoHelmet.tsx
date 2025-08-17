import { Metadata } from 'next'

interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
}

export function generateSeoMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: SeoProps): Metadata {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://italyexperiencehub.com'
  
  const finalTitle = title ? `${title} | Italy Experience Hub` : 'Italy Experience Hub | Guide Turistiche e Esperienze Esclusive in Italia'
  const finalDescription = description || 'Scopri l\'Italia autentica con le nostre guide complete, esperienze esclusive e consigli da esperti locali. Il portale di riferimento per il turismo italiano.'
  const finalOgImage = ogImage || '/og-image.jpg'
  const finalCanonical = canonicalUrl || SITE_URL

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [
      'turismo Italia',
      'guide turistiche Italia',
      'esperienze Italia',
      'viaggi Italia',
      ...keywords,
    ],
    authors: author ? [{ name: author }] : [{ name: 'Italy Experience Hub' }],
    creator: 'Italy Experience Hub',
    publisher: 'Italy Experience Hub',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: finalCanonical,
    },
    openGraph: {
      type: ogType,
      locale: 'it_IT',
      url: finalCanonical,
      siteName: 'Italy Experience Hub',
      title: title || 'Italy Experience Hub | Guide Turistiche Italia',
      description: finalDescription,
      images: [
        {
          url: finalOgImage,
          width: 1200,
          height: 630,
          alt: title || 'Italy Experience Hub - Scopri l\'Italia Autentica',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [finalOgImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema({
  title,
  description,
  author,
  publishedTime,
  modifiedTime,
  image,
  url,
}: {
  title: string
  description: string
  author: string
  publishedTime: string
  modifiedTime?: string
  image: string
  url: string
}) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://italyexperiencehub.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [image],
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Italy Experience Hub',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}