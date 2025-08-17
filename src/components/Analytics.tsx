'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  if (!gtmId) return null

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      
      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// Helper function to track events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

// Tourism-specific tracking events
export const tourismEvents = {
  searchDestination: (destination: string) => {
    trackEvent('search_destination', {
      destination,
      category: 'tourism',
    })
  },
  
  viewExperience: (experienceId: string, experienceName: string) => {
    trackEvent('view_experience', {
      experience_id: experienceId,
      experience_name: experienceName,
      category: 'tourism',
    })
  },
  
  startBooking: (experienceId: string, experienceName: string, value: number) => {
    trackEvent('begin_checkout', {
      currency: 'EUR',
      value,
      items: [{
        item_id: experienceId,
        item_name: experienceName,
        category: 'tourism_experience',
        quantity: 1,
        price: value,
      }]
    })
  },
  
  completeBooking: (experienceId: string, experienceName: string, value: number) => {
    trackEvent('purchase', {
      transaction_id: `booking_${Date.now()}`,
      currency: 'EUR',
      value,
      items: [{
        item_id: experienceId,
        item_name: experienceName,
        category: 'tourism_experience',
        quantity: 1,
        price: value,
      }]
    })
  },
  
  newsletterSignup: (source: string) => {
    trackEvent('newsletter_signup', {
      source,
      category: 'engagement',
    })
  },
  
  guideView: (guideTitle: string, guideCategory: string) => {
    trackEvent('guide_view', {
      guide_title: guideTitle,
      guide_category: guideCategory,
      category: 'content',
    })
  }
}