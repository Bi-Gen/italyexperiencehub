import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, Bike, Mountain, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tour in Bicicletta e E-bike | Italy Experience Hub',
  description: 'Scopri l\'Italia in bicicletta con i nostri tour ciclistici. E-bike tours, percorsi panoramici e cicloturismo per tutti i livelli.',
  keywords: ['bike tour Italia', 'e-bike tour', 'cicloturismo', 'bicicletta Italia', 'tour ciclistici'],
}

export default function BikeToursPage() {
  const featuredTours = [
    {
      id: 'ebike-chianti',
      title: 'E-bike Tour delle Colline del Chianti',
      location: 'Toscana',
      duration: '6 ore',
      groupSize: 'Max 8 persone',
      price: 145,
      originalPrice: 180,
      rating: 4.8,
      reviews: 456,
      difficulty: 'Facile',
      highlights: ['E-bike premium', 'Cantina storica', 'Pranzo incluso', 'Guida esperta'],
      badge: 'Eco-friendly'
    },
    {
      id: 'bike-cinque-terre',
      title: 'Bike Tour Cinque Terre',
      location: 'Liguria',
      duration: '8 ore',
      groupSize: 'Max 10 persone', 
      price: 125,
      originalPrice: 165,
      rating: 4.7,
      reviews: 332,
      difficulty: 'Medio',
      highlights: ['Panorami mozzafiato', 'Borghi caratteristici', 'Transfer inclusi', 'Degustazione locale'],
      badge: 'Panoramico'
    },
    {
      id: 'ebike-roma-campagna',
      title: 'E-bike nella Campagna Romana',
      location: 'Roma',
      duration: '5 ore',
      groupSize: 'Max 12 persone',
      price: 95,
      originalPrice: 130,
      rating: 4.9,
      reviews: 578,
      difficulty: 'Facile',
      highlights: ['Via Appia Antica', 'Acquedotti romani', 'Picnic gourmet', 'Storia millenaria'],
      badge: 'Culturale'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/bike-tours-hero.webp"
            alt="Tour in Bicicletta Italia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Tour in Bicicletta
              <span className="block text-primary-300">& E-bike Experience</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Esplora l'Italia su due ruote. Dalle colline toscane alle strade romane, 
              scopri paesaggi indimenticabili pedalando nella natura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tours" className="btn-primary">
                Esplora i Tour
              </Link>
              <Link href="/contatti" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
                Richiedi Info
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
              <Leaf className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Sostenibile</h3>
              <p className="text-gray-600">Rispetta l'ambiente scoprendo l'Italia in modo green</p>
            </div>
            <div className="flex flex-col items-center">
              <Mountain className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tutti i Livelli</h3>
              <p className="text-gray-600">Percorsi per principianti ed esperti, con e-bike disponibili</p>
            </div>
            <div className="flex flex-col items-center">
              <Bike className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Attrezzatura Inclusa</h3>
              <p className="text-gray-600">Biciclette premium, caschi e tutto l'equipaggiamento necessario</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Tour più Amati
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Percorsi selezionati per offrirti il meglio del cicloturismo italiano
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/bike-tours-hero.webp"
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      tour.badge === 'Eco-friendly' ? 'bg-primary-500' :
                      tour.badge === 'Panoramico' ? 'bg-blue-500' :
                      'bg-accent-500'
                    }`}>
                      {tour.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-lg">
                    <span className="text-sm font-bold text-gray-900">€{tour.price}</span>
                    {tour.originalPrice && (
                      <span className="text-xs text-gray-500 line-through ml-1">€{tour.originalPrice}</span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium text-white ${
                      tour.difficulty === 'Facile' ? 'bg-green-500' :
                      tour.difficulty === 'Medio' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}>
                      {tour.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{tour.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tour.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {tour.groupSize}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-gold-400" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                      <span className="text-sm text-gray-500">({tour.reviews})</span>
                    </div>
                    <Link href="/contatti" className="btn-primary text-sm px-4 py-2">
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
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <Bike className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pedala verso la Tua Avventura
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Scopri l'Italia su due ruote con guide esperte e attrezzature di prima qualità.
          </p>
          <Link href="/contatti" className="btn-primary bg-accent-500 hover:bg-accent-600">
            Prenota il Tuo Tour
          </Link>
        </div>
      </section>
    </div>
  )
}