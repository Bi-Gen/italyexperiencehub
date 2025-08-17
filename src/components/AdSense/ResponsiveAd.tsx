'use client'

import { useEffect, useState } from 'react'

interface ResponsiveAdProps {
  adSlot: string
  className?: string
  minHeight?: number
}

export function ResponsiveAd({ adSlot, className = '', minHeight = 200 }: ResponsiveAdProps) {
  const [isClient, setIsClient] = useState(false)
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  useEffect(() => {
    setIsClient(true)
    
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [])

  if (!adsenseClient || !isClient) {
    // Show placeholder during SSR and when AdSense is not configured
    return (
      <div 
        className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${className}`}
        style={{ minHeight: `${minHeight}px` }}
      >
        <span className="text-gray-500 text-sm">Spazio Pubblicitario</span>
      </div>
    )
  }

  return (
    <div className={`adsense-responsive ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          minHeight: `${minHeight}px`
        }}
        data-ad-client={adsenseClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

// Specialized responsive ads for tourism content
export function TourismBannerAd({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="text-center mb-2">
        <span className="text-xs text-gray-500 uppercase tracking-wide">Pubblicità</span>
      </div>
      <ResponsiveAd 
        adSlot="7890123456" // Replace with actual ad slot
        minHeight={250}
        className="w-full"
      />
    </div>
  )
}

export function TourismSidebarAd({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="text-center mb-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">Offerte Speciali</h3>
          <span className="text-xs text-gray-500">Per i nostri lettori</span>
        </div>
        <ResponsiveAd 
          adSlot="8901234567" // Replace with actual ad slot
          minHeight={300}
          className="w-full"
        />
      </div>
    </div>
  )
}

export function InContentAd({ className = '' }: { className?: string }) {
  return (
    <div className={`my-8 ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">Pubblicità</span>
        </div>
        <ResponsiveAd 
          adSlot="9012345678" // Replace with actual ad slot
          minHeight={200}
          className="w-full"
        />
      </div>
    </div>
  )
}