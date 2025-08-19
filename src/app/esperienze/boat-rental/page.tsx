import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, Anchor, Ship, Waves } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Noleggio Barche e Tour Nautici | Italy Experience Hub',
  description: 'Noleggio barche di lusso in Italia. Charter privati, tour nautici e crociere esclusive lungo le coste più belle.',
  keywords: ['noleggio barche Italia', 'charter privato', 'tour nautici', 'crociere Italia', 'boat rental'],
}

export default function BoatRentalPage() {
  const featuredCharters = [
    {
      id: 'yacht-costiera',
      title: 'Yacht Privato Costiera Amalfitana',
      location: 'Costiera Amalfitana',
      duration: '8 ore',
      groupSize: 'Max 6 persone',
      price: 890,
      originalPrice: 1200,
      rating: 5.0,
      reviews: 234,
      type: 'Yacht 45ft',
      highlights: ['Skipper professionista', 'Pranzo gourmet', 'Grotte marine', 'Snorkeling'],
      badge: 'Lusso'
    },
    {
      id: 'barca-cinque-terre',
      title: 'Tour in Barca Cinque Terre',
      location: 'Liguria',
      duration: '6 ore',
      groupSize: 'Max 10 persone',
      price: 165,
      originalPrice: 220,
      rating: 4.8,
      reviews: 456,
      type: 'Motoscafo',
      highlights: ['Borghi dal mare', 'Bagni esclusivi', 'Aperitivo a bordo', 'Guida locale'],
      badge: 'Panoramico'
    },
    {
      id: 'catamarano-sicilia',
      title: 'Catamarano Isole Eolie',
      location: 'Sicilia',
      duration: '12 ore',
      groupSize: 'Max 8 persone',
      price: 450,
      originalPrice: 600,
      rating: 4.9,
      reviews: 189,
      type: 'Catamarano',
      highlights: ['Vulcani attivi', 'Acque cristalline', 'Cena a bordo', 'Sunset cruise'],
      badge: 'Avventura'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/boat-rental-hero.webp"
            alt="Noleggio Barche Italia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Noleggio Barche
              <span className="block text-blue-300">& Charter di Lusso</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Esplora le coste italiane a bordo delle nostre imbarcazioni di lusso. 
              Charter privati e tour nautici indimenticabili.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#charters" className="btn-primary bg-blue-600 hover:bg-blue-700">
                Esplora i Charter
              </Link>
              <Link href="/contatti" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
                Richiedi Preventivo
              </Link>
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
              <h3 className="text-xl font-semibold mb-2">Flotta Premium</h3>
              <p className="text-gray-600">Yacht e barche di lusso mantenute ai massimi standard</p>
            </div>
            <div className="flex flex-col items-center">
              <Anchor className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skipper Esperti</h3>
              <p className="text-gray-600">Capitani professionisti che conoscono ogni segreto del mare</p>
            </div>
            <div className="flex flex-col items-center">
              <Waves className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Esperienza Completa</h3>
              <p className="text-gray-600">Tutto incluso: equipaggio, pasti gourmet e attrezzature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Charters */}
      <section id="charters" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Charter più Esclusivi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Imbarcazioni selezionate per offrirti il meglio del lusso nautico italiano
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredCharters.map((charter) => (
              <div key={charter.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/boat-rental-hero.webp"
                    alt={charter.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      charter.badge === 'Lusso' ? 'bg-gold-500' :
                      charter.badge === 'Panoramico' ? 'bg-blue-500' :
                      'bg-green-600'
                    }`}>
                      {charter.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-lg">
                    <span className="text-sm font-bold text-gray-900">€{charter.price}</span>
                    {charter.originalPrice && (
                      <span className="text-xs text-gray-500 line-through ml-1">€{charter.originalPrice}</span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 rounded text-xs font-medium text-white bg-blue-600">
                      {charter.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{charter.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {charter.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {charter.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {charter.groupSize}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {charter.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-gold-400" />
                      <span className="text-sm font-medium">{charter.rating}</span>
                      <span className="text-sm text-gray-500">({charter.reviews})</span>
                    </div>
                    <Link href="/contatti" className="btn-primary text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700">
                      Prenota
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <Ship className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">
            Vivi il Mare come un VIP
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Charter privati con servizio 5 stelle per scoprire le coste più esclusive d'Italia.
          </p>
          <Link href="/contatti" className="btn-primary bg-gold-500 hover:bg-gold-600">
            Richiedi Preventivo Personalizzato
          </Link>
        </div>
      </section>
    </div>
  )
}
