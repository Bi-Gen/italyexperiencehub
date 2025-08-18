'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Shield, Settings } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
        
        // Initialize scripts based on saved preferences
        if (saved.analytics) {
          loadGoogleAnalytics()
        }
        if (saved.marketing) {
          loadAdSense()
        }
      } catch (e) {
        console.error('Error parsing cookie consent:', e)
      }
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
    
    // Load scripts
    loadGoogleAnalytics()
    loadAdSense()
    
    // Reload page to apply changes
    window.location.reload()
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    }
    setPreferences(onlyNecessary)
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
    
    // Load scripts based on preferences
    if (preferences.analytics) {
      loadGoogleAnalytics()
    }
    if (preferences.marketing) {
      loadAdSense()
    }
    
    // Reload page to apply changes
    window.location.reload()
  }

  const loadGoogleAnalytics = () => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID
    if (gtmId && typeof window !== 'undefined') {
      // Load Google Analytics
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`
      document.head.appendChild(script)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtmId}');
      `
      document.head.appendChild(script2)
    }
  }

  const loadAdSense = () => {
    const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
    if (adsenseClient && typeof window !== 'undefined') {
      // Load AdSense
      const script = document.createElement('script')
      script.async = true
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
  }

  if (!showBanner) {
    return null
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="container-custom py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Utilizziamo i cookie per migliorare la tua esperienza
                </h3>
                <p className="text-sm text-gray-600">
                  Utilizziamo cookie essenziali per il funzionamento del sito e cookie opzionali per analisi e pubblicità personalizzata. 
                  Puoi accettare tutti i cookie o personalizzare le tue preferenze.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 lg:ml-4">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span>Personalizza</span>
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Rifiuta tutto
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Accetta tutto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary-600" />
                <h2 className="text-xl font-bold text-gray-900">Preferenze Cookie</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Cookie Necessari</h3>
                  <p className="text-sm text-gray-600">
                    Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-gray-300 rounded-full w-12 h-6 flex items-center">
                    <div className="bg-primary-600 w-5 h-5 rounded-full ml-1 transform translate-x-6"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Cookie di Analisi</h3>
                  <p className="text-sm text-gray-600">
                    Ci aiutano a capire come i visitatori interagiscono con il nostro sito raccogliendo informazioni anonime.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={`rounded-full w-12 h-6 flex items-center transition-colors ${
                      preferences.analytics ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.analytics ? 'translate-x-6 ml-1' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Cookie di Marketing</h3>
                  <p className="text-sm text-gray-600">
                    Utilizzati per fornire pubblicità più rilevante per te e i tuoi interessi attraverso Google AdSense.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                    className={`rounded-full w-12 h-6 flex items-center transition-colors ${
                      preferences.marketing ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.marketing ? 'translate-x-6 ml-1' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Personalization Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Cookie di Personalizzazione</h3>
                  <p className="text-sm text-gray-600">
                    Permettono al sito di ricordare le tue scelte per fornirti funzionalità migliorate e personalizzate.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, personalization: !prev.personalization }))}
                    className={`rounded-full w-12 h-6 flex items-center transition-colors ${
                      preferences.personalization ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.personalization ? 'translate-x-6 ml-1' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Annulla
              </button>
              <button
                onClick={savePreferences}
                className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Salva Preferenze
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}