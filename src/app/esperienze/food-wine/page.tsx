import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, Wine, UtensilsCrossed, ChefHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tour Gastronomici e Food & Wine | Italy Experience Hub',
  description: 'Scopri i migliori tour gastronomici d\'Italia. Degustazioni vini, cooking class e esperienze culinarie autentiche con chef locali.',
  keywords: ['tour gastronomici Italia', 'food tour', 'degustazione vini', 'cooking class', 'cucina italiana'],
}

export default function FoodWinePage() {
  const featuredExperiences = [
    {
      id: 'food-tour-roma',
      title: 'Food Tour Autentico a Trastevere',
      location: 'Roma',
      duration: '3.5 ore',
      groupSize: 'Max 12 persone',
      price: 85,
      originalPrice: 120,
      rating: 4.9,
      reviews: 847,
      highlights: ['6 degustazioni autentiche', 'Guida esperta locale', 'Gruppi piccoli', 'Storia e cultura'],
      badge: 'Bestseller'
    },
    {
      id: 'wine-tour-chianti',
      title: 'Tour Degustazione Vini Chianti',
      location: 'Toscana',
      duration: '7 ore',
      groupSize: 'Max 8 persone',
      price: 165,
      originalPrice: 210,
      rating: 4.8,
      reviews: 456,
      highlights: ['3 cantine storiche', 'Pranzo tipico toscano', 'Trasferimenti inclusi', 'Sommelier esperto'],
      badge: 'Premium'
    },
    {
      id: 'cooking-class-milano',
      title: 'Cooking Class Cucina Lombarda',
      location: 'Milano',
      duration: '4 ore',
      groupSize: 'Max 10 persone',
      price: 135,
      originalPrice: 180,
      rating: 5.0,
      reviews: 234,
      highlights: ['Ricette tradizionali', 'Ingredienti freschi', 'Chef professionista', 'Cena inclusa'],
      badge: 'Esclusivo'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/food-wine-hero.webp"
            alt="Tour Gastronomici Italia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Tour Gastronomici
              <span className="block text-accent-400">& Food Experience</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Scopri i sapori autentici d'Italia con le nostre esperienze culinarie esclusive. 
              Dalle tavernas romane alle cantine toscane.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#experiences" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Scopri le Esperienze
              </Link>
              <Link href="/contatti" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
                Prenota Consulenza
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">250+</div>
              <div className="text-gray-600">Esperienze Culinarie</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">45+</div>
              <div className="text-gray-600">Chef Partner</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
              <div className="text-gray-600">Rating Medio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">15K+</div>
              <div className="text-gray-600">Foodie Soddisfatti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section id="experiences" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Esperienze Gastronomiche Top
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selezionate dai nostri esperti locali per offrirti il meglio della cucina italiana
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredExperiences.map((experience) => (
              <div key={experience.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/food-wine-hero.webp"
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      experience.badge === 'Bestseller' ? 'bg-accent-500' :
                      experience.badge === 'Premium' ? 'bg-gold-500' :
                      'bg-primary-500'
                    }`}>
                      {experience.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-lg">
                    <span className="text-sm font-bold text-gray-900">€{experience.price}</span>
                    {experience.originalPrice && (
                      <span className="text-xs text-gray-500 line-through ml-1">€{experience.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{experience.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {experience.groupSize}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {experience.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-gold-400" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <span className="text-sm text-gray-500">({experience.reviews})</span>
                    </div>
                    <Link href="/contatti" className="btn-primary text-sm px-4 py-2">
                      Prenota Ora
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
          <UtensilsCrossed className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h2 className="text-3xl font-bold mb-4">
            Prenota la Tua Esperienza Culinaria
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I nostri tour gastronomici sono molto richiesti. Prenota ora per garantirti il posto.
          </p>
          <Link href="/contatti" className="btn-primary bg-accent-500 hover:bg-accent-600">
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  )
}