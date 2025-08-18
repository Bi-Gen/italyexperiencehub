import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Venezia - Guida Completa | Italy Experience Hub',
  description: 'Scopri Venezia con la nostra guida completa: San Marco, Canal Grande, gondole. Itinerari, consigli pratici e attrazioni della Serenissima.',
  keywords: ['Venezia turismo', 'San Marco', 'Canal Grande', 'gondole', 'guida Venezia', 'Serenissima']
}

export default function VeneziaPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Venezia - La Serenissima
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6">
              Magia e romance tra canali e palazzi storici
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Guide Disponibili per Venezia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/guide/venezia-4-giorni" className="card group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Venezia in 4 Giorni</h3>
                <p className="text-gray-600 mb-4">Itinerario completo tra storia, arte e tradizioni</p>
                <span className="text-blue-600 font-medium">Leggi la guida →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contenuti in Arrivo</h2>
          <p className="text-xl text-gray-600 mb-8">Guide specializzate per Venezia in sviluppo</p>
        </div>
      </section>
    </div>
  )
}