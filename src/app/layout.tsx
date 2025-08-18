import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://italyexperiencehub.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#2d8659',
}

export const metadata: Metadata = {
  title: {
    default: 'Italy Experience Hub | Guide Turistiche e Esperienze Esclusive in Italia',
    template: '%s | Italy Experience Hub'
  },
  description: 'Scopri l\'Italia autentica con le nostre guide complete, esperienze esclusive e consigli da esperti locali. Tour privati, food tour, bike tour e molto altro. Il portale di riferimento per il turismo italiano con oltre 500 esperienze verificate.',
  keywords: [
    'turismo Italia',
    'guide turistiche Italia', 
    'esperienze Italia',
    'viaggi Italia',
    'destinazioni Italia',
    'tour Italia',
    'vacanze Italia',
    'cosa vedere Italia',
    'Italia autentica',
    'tour privati Italia',
    'esperti locali Italia',
    'cucina italiana',
    'arte Italia',
    'cultura Italia',
    'Roma tour',
    'Toscana tour',
    'Venezia tour',
    'Firenze tour',
    'Costiera Amalfitana',
    'Sicilia tour',
    'Milano tour',
    'Napoli tour',
    'food tour Italia',
    'bike tour Italia',
    'boat tour Italia',
    'storia Italia',
    'patrimonio UNESCO Italia'
  ],
  authors: [{ name: 'Italy Experience Hub' }],
  creator: 'Italy Experience Hub',
  publisher: 'Italy Experience Hub',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: SITE_URL,
    siteName: 'Italy Experience Hub',
    title: 'Italy Experience Hub | Guide Turistiche e Esperienze in Italia',
    description: 'Il portale di riferimento per scoprire l\'Italia autentica. Guide complete, esperienze esclusive e consigli da esperti.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Italy Experience Hub - Scopri l\'Italia Autentica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italy Experience Hub | Guide Turistiche Italia',
    description: 'Scopri l\'Italia autentica con guide complete ed esperienze esclusive',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '4718945941038682',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        
        {/* AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <>
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
              crossOrigin="anonymous"
            />
            {/* Google Funding Choices (GDPR Consent) */}
            <script
              async
              src={`https://fundingchoicesmessages.google.com/i/${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}?ers=1`}
              nonce="undefined"
            />
            <script nonce="undefined">
              {`(function(){function signalGooglefcPresent(){if(!window.frames['googlefcPresent']){if(document.body){const iframe=document.createElement('iframe');iframe.style='width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;';iframe.style.display='none';iframe.name='googlefcPresent';document.body.appendChild(iframe);}else{setTimeout(signalGooglefcPresent,0);}}}signalGooglefcPresent();})();`}
            </script>
          </>
        )}
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Italy Experience Hub',
                url: SITE_URL,
                logo: `${SITE_URL}/logo.png`,
                description: 'Il portale di riferimento per il turismo in Italia con guide complete ed esperienze esclusive',
                foundingDate: '2024',
                founder: {
                  '@type': 'Person',
                  name: 'Italy Experience Hub Team'
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'Italy'
                },
                serviceType: ['Tourism', 'Travel Guides', 'Tour Services'],
                sameAs: [
                  'https://www.facebook.com/italyexperiencehub',
                  'https://www.instagram.com/italyexperiencehub',
                  'https://www.twitter.com/italyexphub'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: SITE_URL,
                name: 'Italy Experience Hub',
                description: 'Scopri l\'Italia autentica con guide complete ed esperienze esclusive',
                inLanguage: 'it-IT',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${SITE_URL}/search?q={search_term_string}`
                  },
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'TravelAgency',
                name: 'Italy Experience Hub',
                url: SITE_URL,
                description: 'Agenzia di viaggi specializzata in esperienze autentiche in Italia',
                areaServed: {
                  '@type': 'Country',
                  name: 'Italy'
                },
                serviceType: [
                  'Tour guidati',
                  'Esperienze gastronomiche', 
                  'Tour in bicicletta',
                  'Tour in barca',
                  'Guide turistiche'
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  )
}