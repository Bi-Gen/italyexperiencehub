import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contatti | Italy Experience Hub - Pianifica il Tuo Viaggio',
  description: 'Contatta Italy Experience Hub per pianificare il tuo viaggio perfetto in Italia. Consulenza personalizzata, itinerari su misura e supporto completo.',
  keywords: ['contatti Italy Experience Hub', 'pianifica viaggio Italia', 'consulenza viaggi', 'itinerari personalizzati']
}

export default function ContattiPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-italy text-white py-16 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Pianifica il Tuo Viaggio
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ti aiutiamo a creare l'esperienza italiana perfetta con consulenza personalizzata
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-primary-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Servizio in Sviluppo
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Stiamo preparando un servizio di consulenza personalizzato per aiutarti a pianificare 
                il tuo viaggio perfetto in Italia. Presto potrai contattarci per ricevere:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Consulenza Personalizzata</h3>
                  <p className="text-gray-600">Itinerari su misura basati sui tuoi interessi e budget</p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Prenotazioni</h3>
                  <p className="text-gray-600">Assistenza per hotel, ristoranti e attrazioni</p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Guide Locali</h3>
                  <p className="text-gray-600">Connessioni con guide esperte certificate</p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Supporto 24/7</h3>
                  <p className="text-gray-600">Assistenza durante tutto il tuo viaggio</p>
                </div>
              </div>
            </div>
            
            {/* Temporary Contact Info */}
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nel frattempo, esplora le nostre guide gratuite
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/guide" className="btn-primary">
                  Guide Pratiche
                </a>
                <a href="/blog" className="btn-secondary">
                  Blog di Viaggio
                </a>
                <a href="/destinazioni" className="btn-secondary">
                  Destinazioni
                </a>
              </div>
              
              <p className="text-gray-600 mt-8">
                <strong>Lancio previsto:</strong> Marzo 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}