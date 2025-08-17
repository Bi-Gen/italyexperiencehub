interface OrganizationProps {
  name: string
  url: string
  logo?: string
  description?: string
  sameAs?: string[]
}

interface LocalBusinessProps {
  name: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  telephone?: string
  url: string
  priceRange?: string
  openingHours?: string[]
}

interface TourProps {
  name: string
  description: string
  provider: string
  duration: string
  price: {
    currency: string
    amount: number
  }
  location: string
  image?: string
  rating?: {
    ratingValue: number
    reviewCount: number
  }
}

interface BreadcrumbProps {
  items: {
    name: string
    url: string
  }[]
}

export function OrganizationStructuredData({ name, url, logo, description, sameAs }: OrganizationProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    ...(logo && { logo }),
    ...(description && { description }),
    ...(sameAs && { sameAs }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function LocalBusinessStructuredData({ name, address, telephone, url, priceRange, openingHours }: LocalBusinessProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    ...(telephone && { telephone }),
    url,
    ...(priceRange && { priceRange }),
    ...(openingHours && { openingHoursSpecification: openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      opens: hours.split('-')[0],
      closes: hours.split('-')[1],
    })) }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function TourStructuredData({ name, description, provider, duration, price, location, image, rating }: TourProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    duration,
    offers: {
      '@type': 'Offer',
      price: price.amount,
      priceCurrency: price.currency,
    },
    touristType: 'Leisure',
    ...(location && { 
      itinerary: {
        '@type': 'Place',
        name: location,
      }
    }),
    ...(image && { image }),
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount,
      }
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: BreadcrumbProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData({ url, name, description }: { url: string; name: string; description: string }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}