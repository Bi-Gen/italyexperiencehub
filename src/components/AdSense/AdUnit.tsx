'use client'

import { useEffect } from 'react'

interface AdUnitProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  style?: React.CSSProperties
  className?: string
  responsive?: boolean
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export function AdUnit({ 
  adSlot, 
  adFormat = 'auto', 
  style = {}, 
  className = '',
  responsive = true 
}: AdUnitProps) {
  const adsenseClient = 'ca-pub-4718945941038682' // Client ID reale Google AdSense

  useEffect(() => {
    // Check if marketing cookies are accepted
    const cookieConsent = localStorage.getItem('cookie-consent')
    let marketingAccepted = false
    
    if (cookieConsent) {
      try {
        const preferences = JSON.parse(cookieConsent)
        marketingAccepted = preferences.marketing
      } catch (e) {
        console.error('Error parsing cookie consent:', e)
      }
    }

    // Only load AdSense if marketing cookies are accepted
    if (marketingAccepted && typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [])

  // Check cookie consent for marketing
  const cookieConsent = typeof window !== 'undefined' ? localStorage.getItem('cookie-consent') : null
  let showAds = false
  
  if (cookieConsent) {
    try {
      const preferences = JSON.parse(cookieConsent)
      showAds = preferences.marketing
    } catch (e) {
      showAds = false
    }
  }

  if (!showAds) {
    // Show GDPR compliant message
    return (
      <div 
        className={`bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-6 ${className}`}
        style={style}
      >
        <span className="text-gray-600 text-sm text-center mb-2">
          📢 Spazio Pubblicitario
        </span>
        <span className="text-gray-500 text-xs text-center">
          Abilita i cookie di marketing per visualizzare gli annunci
        </span>
      </div>
    )
  }

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          ...style 
        }}
        data-ad-client={adsenseClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

// Predefined ad components for common tourism layouts
export function HeroAdBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="text-center mb-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">Pubblicità</span>
      </div>
      <AdUnit
        adSlot="auto" // Usa AdSense automatico per ottimizzazione
        adFormat="auto"
        className="w-full"
        style={{ minHeight: '120px' }}
      />
    </div>
  )
}

export function SidebarAd({ className = '' }: { className?: string }) {
  return (
    <AdUnit
      adSlot="auto" // AdSense automatico
      adFormat="rectangle"
      className={`w-full max-w-sm ${className}`}
      style={{ minHeight: '300px' }}
    />
  )
}

export function ContentAd({ className = '' }: { className?: string }) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <div className="text-center mb-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">Pubblicità</span>
      </div>
      <AdUnit
        adSlot="auto" // AdSense automatico
        adFormat="auto"
        style={{ minHeight: '200px' }}
        className="w-full max-w-2xl"
      />
    </div>
  )
}

export function FooterAd({ className = '' }: { className?: string }) {
  return (
    <AdUnit
      adSlot="4567890123" // Replace with actual ad slot
      adFormat="horizontal"
      className={`w-full ${className}`}
      style={{ minHeight: '150px' }}
    />
  )
}

// Specialized tourism ads
export function DestinationAd({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-gray-50 rounded-xl p-6 ${className}`}>
      <h3 className="text-sm font-semibold text-gray-600 mb-4 text-center">
        Offerte Speciali per te
      </h3>
      <AdUnit
        adSlot="5678901234" // Replace with actual ad slot
        adFormat="rectangle"
        style={{ minHeight: '250px' }}
        className="w-full"
      />
    </div>
  )
}

export function ExperienceAd({ className = '' }: { className?: string }) {
  return (
    <div className={`border-2 border-dashed border-primary-200 rounded-xl p-6 bg-primary-50/30 ${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-sm font-semibold text-primary-700 mb-1">
          Esperienze Consigliate
        </h3>
        <p className="text-xs text-primary-600">
          Scopri offerte esclusive per te
        </p>
      </div>
      <AdUnit
        adSlot="6789012345" // Replace with actual ad slot
        adFormat="auto"
        style={{ minHeight: '200px' }}
        className="w-full"
      />
    </div>
  )
}