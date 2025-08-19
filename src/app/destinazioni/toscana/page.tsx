import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users, Star, Wine, Mountain, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Toscana - Guida Completa | Italy Experience Hub',
  description: 'Scopri la Toscana con la nostra guida completa: Firenze, Siena, Chianti, Val d\'Orcia. Itinerari, vini e paesaggi indimenticabili.',
  keywords: ['Toscana turismo', 'Firenze', 'Siena', 'Chianti', 'Val d\'Orcia', 'vini toscani'],
}

export default function ToscanaPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/toscana-hero.webp"
            alt="Toscana - Paesaggi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Toscana - Bellezza Senza Tempo
            </h1>
            <p className="text-xl lg:text-2xl text-yellow-100 mb-6">
              Arte rinascimentale, vini pregiati e paesaggi da cartolina
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Centro Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wine className="h-4 w-4" />
                <span>Capitale del Vino</span>
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
              <Wine className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vini d'Eccellenza</h3>
              <p className="text-gray-600">Chianti, Brunello di Montalcino e degustazioni nelle cantine storiche</p>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Paesaggi Iconici</h3>
              <p className="text-gray-600">Colline ondulate, cipressi e borghi medievali da favola</p>
            </div>
            <div className="flex flex-col items-center">
              <Mountain className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Arte & Cultura</h3>
              <p className="text-gray-600">Firenze, Siena e i tesori del Rinascimento italiano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenuti in Sviluppo</h2>
            <p className="text-gray-700 mb-6">
              Stiamo preparando guide dettagliate per la Toscana con itinerari, 
              consigli sui migliori vini e le città d'arte più belle.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/destinazioni" className="btn-secondary">
                Altre Destinazioni
              </Link>
              <Link href="/esperienze" className="btn-primary">
                Esperienze Disponibili
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}