import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Firenze - Guida Completa | Italy Experience Hub',
  description: 'Scopri Firenze con la nostra guida completa: Duomo, Uffizi, Ponte Vecchio. Itinerari, consigli pratici e attrazioni della culla del Rinascimento.',
  keywords: ['Firenze turismo', 'Duomo Firenze', 'Uffizi', 'Ponte Vecchio', 'guida Firenze', 'Rinascimento']
}

export default function FirenzePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Firenze - Culla del Rinascimento
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6">
              Arte, storia e bellezza nel cuore della Toscana
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Toscana, Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>380K abitanti</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">Guide Disponibili per Firenze</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/guide/firenze-3-giorni"
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Firenze in 3 Giorni
                </h3>
                <p className="text-gray-600 mb-4">
                  Itinerario completo tra arte, cultura e sapori toscani
                </p>
                <span className="text-primary-600 font-medium">Leggi la guida →</span>
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
              Stiamo preparando guide specializzate per Firenze. Presto disponibili:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Musei di Firenze</h3>
                <p className="text-gray-600">Uffizi, Accademia e collezioni private</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Oltrarno Autentico</h3>
                <p className="text-gray-600">Botteghe artigiane e vita locale</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Cucina Toscana</h3>
                <p className="text-gray-600">Bistecca, ribollita e vini del territorio</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Dintorni di Firenze</h3>
                <p className="text-gray-600">Fiesole, Chianti e ville medicee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}