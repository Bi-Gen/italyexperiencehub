import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roma - Guida Completa | Italy Experience Hub',
  description: 'Scopri Roma con la nostra guida completa: Colosseo, Vaticano, Fontana di Trevi. Itinerari, consigli pratici e attrazioni imperdibili della Città Eterna.',
  keywords: ['Roma turismo', 'Colosseo', 'Vaticano', 'Fontana di Trevi', 'guida Roma', 'cosa vedere Roma']
}

export default function RomaPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/roma-hero.webp"
            alt="Roma - Colosseo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Roma - La Città Eterna
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6">
              Scopri 2000 anni di storia nel cuore dell'Italia
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lazio, Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>2.8M abitanti</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Patrimonio UNESCO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Available */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Guide Disponibili per Roma</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/guide/roma-3-giorni"
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Roma in 3 Giorni
                </h3>
                <p className="text-gray-600 mb-4">
                  Itinerario completo per scoprire i luoghi iconici della Capitale
                </p>
                <span className="text-accent-600 font-medium">Leggi la guida →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contenuti in Arrivo
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stiamo preparando guide dettagliate, itinerari tematici e consigli pratici per Roma. Presto disponibili:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Roma Sotterranea</h3>
                <p className="text-gray-600">Catacombe, basiliche e segreti nascosti</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Roma Food Tour</h3>
                <p className="text-gray-600">I migliori ristoranti e street food</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Roma con Bambini</h3>
                <p className="text-gray-600">Attività family-friendly</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Roma Economica</h3>
                <p className="text-gray-600">Come visitare Roma con budget limitato</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}