'use client'

import { ExternalLink } from 'lucide-react'

interface AffiliateLinkProps {
  href: string
  children: React.ReactNode
  platform?: 'getyourguide' | 'viator' | 'klook' | 'booking' | 'airbnb'
  className?: string
  variant?: 'primary' | 'secondary'
  showIcon?: boolean
}

export default function AffiliateLink({ 
  href, 
  children, 
  platform,
  className = '',
  variant = 'primary',
  showIcon = true
}: AffiliateLinkProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  
  // Qui in futuro aggiungeremo i parametri affiliate per ogni piattaforma
  const affiliateUrl = href // Per ora link diretto, poi aggiungeremo tracking
  
  const handleClick = () => {
    // Analytics tracking per affiliate clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        platform: platform || 'unknown',
        url: href
      })
    }
  }

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${baseClasses} ${className} inline-flex items-center`}
      onClick={handleClick}
    >
      {children}
      {showIcon && <ExternalLink className="ml-2 h-4 w-4" />}
    </a>
  )
}