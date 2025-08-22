import Link from 'next/link'
import { CheckCircle, ArrowRight, Mail, Heart } from 'lucide-react'

export const metadata = {
  title: 'Grazie per l\'iscrizione! | Italy Experience Hub',
  description: 'Benvenuto nella community di Italy Experience Hub. Controlla la tua email per confermare l\'iscrizione alla newsletter.',
  robots: 'noindex, nofollow'
}

export default function GraziePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="bg-green-100 p-6 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-accent-500 p-2 rounded-full animate-bounce">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Benvenuto nella Community!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          🎉 <strong>Iscrizione completata con successo!</strong><br/>
          Controlla la tua casella email per confermare l'iscrizione e ricevere il tuo primo contenuto esclusivo.
        </p>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
            <Heart className="h-6 w-6 text-accent-500 mr-2" />
            Cosa riceverai:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                <span className="text-2xl">🗺️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Guide Esclusive</h3>
                <p className="text-gray-600 text-sm">Itinerari segreti e consigli da esperti locali</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Offerte Speciali</h3>
                <p className="text-gray-600 text-sm">Sconti esclusivi su esperienze selezionate</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Eventi Stagionali</h3>
                <p className="text-gray-600 text-sm">Calendario delle feste e sagre locali</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                <span className="text-2xl">🍝</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ricette Autentiche</h3>
                <p className="text-gray-600 text-sm">Cucina regionale dalle nonne italiane</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <p className="text-gray-600 mb-6">
            Nel frattempo, continua a esplorare l'Italia autentica:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/destinazioni"
              className="btn-primary inline-flex items-center justify-center"
            >
              Scopri le Destinazioni
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/blog"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Leggi il Blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-500">
            <strong>Non trovi l'email?</strong> Controlla la cartella spam o promozioni. 
            Puoi anche aggiungerci ai contatti per essere sicuro di ricevere tutto.
          </p>
        </div>
      </div>
    </div>
  )
}