import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Milano - Guida Completa | Italy Experience Hub',
  description: 'Scopri Milano con la nostra guida completa: Duomo, Scala, Navigli. Itinerari, shopping e aperitivi nella capitale della moda.',
  keywords: ['Milano turismo', 'Duomo Milano', 'La Scala', 'Navigli', 'guida Milano', 'moda']
}

export default function MilanoPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-96 bg-gradient-to-r from-gray-600 to-gray-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Milano - Capitale della Moda
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6">
              Design, fashion e aperitivi nel cuore economico d'Italia
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Guide Disponibili per Milano</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/guide/milano-3-giorni" className="card group hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Milano in 3 Giorni</h3>
                <p className="text-gray-600 mb-4">Itinerario completo tra moda, design e tradizione</p>
                <span className="text-gray-600 font-medium">Leggi la guida →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contenuti in Arrivo</h2>
          <p className="text-xl text-gray-600 mb-8">Guide specializzate per Milano in sviluppo</p>
        </div>
      </section>
    </div>
  )
}