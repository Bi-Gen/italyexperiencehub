'use client'

import { Suspense } from 'react'
import { Download, CheckCircle, ArrowLeft, MapPin, Coffee, Camera } from 'lucide-react'
import Link from 'next/link'

function DownloadContent() {
  // Simulated PDF download - in production, this would serve an actual PDF
  const handleDownload = () => {
    // Create a blob from the HTML content and trigger download
    // In production, you'd serve a real PDF file
    const pdfUrl = '/milano-insider-guide-2025.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Milano-Insider-Guide-2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-green-50">
      {/* Header */}
      <div className="container-custom py-8">
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Torna alla Homepage
        </Link>
      </div>

      {/* Main Content */}
      <div className="container-custom pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-green-100 p-6 rounded-full">
                  <CheckCircle className="h-16 w-16 text-green-600" />
                </div>
                <div className="absolute -top-2 -right-2 bg-primary-600 p-2 rounded-full animate-bounce">
                  <Download className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              🏛️ Milano Insider Guide 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La tua guida esclusiva è pronta per il download!
            </p>
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-12">
            <div className="text-center mb-8">
              <div className="bg-gradient-italy p-6 rounded-xl inline-block mb-6">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                25+ Luoghi Segreti Ti Aspettano
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-primary-100 p-4 rounded-lg inline-block mb-3">
                    <Coffee className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ristoranti Autentici</h3>
                  <p className="text-sm text-gray-600">Trattorie frequentate solo dai milanesi</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent-100 p-4 rounded-lg inline-block mb-3">
                    <Camera className="h-8 w-8 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Musei Nascosti</h3>
                  <p className="text-sm text-gray-600">Arte e cultura lontano dalle folle</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg inline-block mb-3">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consigli da Locals</h3>
                  <p className="text-sm text-gray-600">Segreti che solo i milanesi conoscono</p>
                </div>
              </div>
              
              <button
                onClick={handleDownload}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 transform hover:scale-105 transition-transform"
              >
                <Download className="h-6 w-6" />
                Scarica la Guida PDF (Gratis)
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                📄 Formato PDF • 📱 Ottimizzato per mobile • 🔒 100% Gratuito
              </p>
            </div>
          </div>

          {/* What's Inside */}
          <div className="bg-gradient-to-r from-primary-50 to-green-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📖 Cosa troverai nella guida:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍝</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ristoranti Autentici</h3>
                    <p className="text-gray-600 text-sm">Trattoria del Nuovo Macello, Osteria del Borgo, Ratanà</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Musei Segreti</h3>
                    <p className="text-gray-600 text-sm">Casa Boschi Di Stefano, Palazzo Morando, Fondazione Prada</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛍️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Shopping Locale</h3>
                    <p className="text-gray-600 text-sm">Mercati storici e botteghe artigiane</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Luoghi Nascosti</h3>
                    <p className="text-gray-600 text-sm">Giardini della Guastalla, cortili storici, rooftop segreti</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍷</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Aperitivo Milanese</h3>
                    <p className="text-gray-600 text-sm">Bar Basso (inventore del Negroni Sbagliato) e altri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Consigli Pratici</h3>
                    <p className="text-gray-600 text-sm">Trasporti, orari, app essenziali, Milano gratis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🚀 Pronto per esplorare Milano?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/destinazioni/milano"
                className="btn-primary inline-flex items-center justify-center"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Scopri di più su Milano
              </Link>
              
              <Link 
                href="/blog"
                className="btn-secondary inline-flex items-center justify-center"
              >
                📝 Leggi altri consigli di viaggio
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
            <p className="text-sm text-gray-600">
              <strong>📧 Controlla la tua email!</strong><br/>
              Riceverai presto la prima newsletter con altre guide esclusive e offerte speciali per le tue prossime avventure in Italia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ScaricaMilanoGuidePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento...</p>
        </div>
      </div>
    }>
      <DownloadContent />
    </Suspense>
  )
}