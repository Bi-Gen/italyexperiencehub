'use client'

import { useState, useEffect } from 'react'
import { AdUnit } from './AdUnit'

interface AdPlaceholderProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  style?: React.CSSProperties
  className?: string
  responsive?: boolean
  showPlaceholder?: boolean
}

export default function AdPlaceholder({ 
  adSlot, 
  adFormat = 'auto', 
  style = {}, 
  className = '',
  responsive = true,
  showPlaceholder = true
}: AdPlaceholderProps) {
  const [adsEnabled, setAdsEnabled] = useState(false)

  useEffect(() => {
    // Check if ads should be enabled (environment variable or other condition)
    const shouldShowAds = process.env.NEXT_PUBLIC_ENABLE_ADSENSE === 'true'
    setAdsEnabled(shouldShowAds)
  }, [])

  if (adsEnabled) {
    return (
      <AdUnit
        adSlot={adSlot}
        adFormat={adFormat}
        style={style}
        className={className}
        responsive={responsive}
      />
    )
  }

  if (!showPlaceholder) {
    return null
  }

  // Placeholder professionale per quando gli ads sono disabilitati
  return (
    <div 
      className={`bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8 ${className}`}
      style={{ minHeight: '200px', ...style }}
    >
      <div className="text-center">
        <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4 mx-auto flex items-center justify-center">
          <span className="text-gray-500 text-xs font-bold">ADS</span>
        </div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Spazio Pubblicitario
        </h3>
        <p className="text-xs text-gray-500 text-center max-w-xs">
          Supporta Italy Experience Hub permettendo gli annunci. 
          I nostri partner selezionati offrono servizi di qualità per i viaggiatori.
        </p>
      </div>
    </div>
  )
}