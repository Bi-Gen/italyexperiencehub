import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Destinazioni Italia | Le Mete più Belle d\'Italia',
  description: 'Scopri le destinazioni più belle d\'Italia: Roma, Toscana, Costiera Amalfitana, Venezia e molto altro. Guide complete e consigli di viaggio.',
  keywords: ['destinazioni Italia', 'turismo Italia', 'città Italia', 'Roma', 'Toscana', 'Venezia', 'Costiera Amalfitana']
}

const destinations = [
  {
    id: 'roma',
    name: 'Roma',
    region: 'Lazio',
    description: 'La Città Eterna ricca di storia, arte e cultura millenaria',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
    experiences: 156,
    rating: 4.8,
    duration: '3-5 giorni',
    highlights: ['Colosseo', 'Vaticano', 'Fontana di Trevi'],
    href: '/destinazioni/roma'
  },
  {
    id: 'toscana',
    name: 'Toscana',
    region: 'Toscana',
    description: 'Paesaggi mozzafiato, arte rinascimentale e vini pregiati',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    experiences: 203,
    rating: 4.9,
    duration: '5-7 giorni',
    highlights: ['Firenze', 'Siena', 'Chianti'],
    href: '/destinazioni/toscana'
  },
  {
    id: 'venezia',
    name: 'Venezia',
    region: 'Veneto',
    description: 'La Serenissima unica al mondo con i suoi canali e palazzi',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop',
    experiences: 89,
    rating: 4.7,
    duration: '2-3 giorni',
    highlights: ['Piazza San Marco', 'Ponte di Rialto', 'Murano'],
    href: '/destinazioni/venezia'
  }
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-italy text-white py-16 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Destinazioni da Sogno
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Scopri le mete più belle d'Italia con le nostre guide esperte e esperienze esclusive
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={destination.href}
                className="card group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm text-blue-200">{destination.region}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {destination.experiences} esperienze
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-gold-400" />
                      {destination.rating}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {destination.region}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full btn-primary text-center">
                    Scopri di più
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}