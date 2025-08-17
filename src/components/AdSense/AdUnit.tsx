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
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  useEffect(() => {
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [])

  if (!adsenseClient) {
    return null
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
    <AdUnit
      adSlot="1234567890" // Replace with actual ad slot
      adFormat="auto"
      className={`w-full max-w-4xl mx-auto ${className}`}
      style={{ minHeight: '120px' }}
    />
  )
}

export function SidebarAd({ className = '' }: { className?: string }) {
  return (
    <AdUnit
      adSlot="2345678901" // Replace with actual ad slot
      adFormat="rectangle"
      className={`w-full max-w-sm ${className}`}
      style={{ minHeight: '300px' }}
    />
  )
}

export function ContentAd({ className = '' }: { className?: string }) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <AdUnit
        adSlot="3456789012" // Replace with actual ad slot
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