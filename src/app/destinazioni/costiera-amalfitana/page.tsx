import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users, Star, Ship, Mountain, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Costiera Amalfitana - Guida Completa | Italy Experience Hub',
  description: 'Scopri la Costiera Amalfitana: Positano, Amalfi, Ravello. Costa UNESCO con panorami mozzafiato, limoncello e tradizioni marinare.',
  keywords: ['Costiera Amalfitana', 'Positano', 'Amalfi', 'Ravello', 'costa UNESCO'],
}

export default function CostieraAmalfitanaPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/costiera-amalfitana-hero.webp"
            alt="Costiera Amalfitana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Costiera Amalfitana
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6">
              La costa più bella del mondo, Patrimonio UNESCO
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Campania, Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ship className="h-4 w-4" />
                <span>50km di Costa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Patrimonio UNESCO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Ship className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vita di Mare</h3>
              <p className="text-gray-600">Borghi a picco sul mare, barche colorate e tradizioni marinare</p>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Panorami Unici</h3>
              <p className="text-gray-600">Terrazze di limoni, ville storiche e scorci mozzafiato</p>
            </div>
            <div className="flex flex-col items-center">
              <Mountain className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sentieri & Trekking</h3>
              <p className="text-gray-600">Sentiero degli Dei e antichi percorsi tra mare e montagna</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenuti in Sviluppo</h2>
            <p className="text-gray-700 mb-6">
              Stiamo preparando guide dettagliate per la Costiera Amalfitana con 
              itinerari via mare, trekking panoramici e i borghi più suggestivi.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/destinazioni" className="btn-secondary">
                Altre Destinazioni
              </Link>
              <Link href="/esperienze/boat-rental" className="btn-primary">
                Tour in Barca
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}