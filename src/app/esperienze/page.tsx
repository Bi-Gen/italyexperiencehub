import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Clock, Users, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Esperienze Uniche in Italia | Guida Completa e Consigli',
  description: 'Scopri le migliori esperienze in Italia: food tour, bike tour, visite guidate. Guida completa con consigli, prezzi e come prenotare.',
  keywords: ['esperienze Italia', 'tour Italia', 'food tour', 'bike tour', 'visite guidate', 'attività Italia', 'consigli viaggio']
}

const experiences = [
  {
    id: 'food-tour-trastevere',
    title: 'Food Tour Autentico a Trastevere',
    location: 'Roma',
    category: 'Food & Wine',
    duration: '3.5 ore',
    groupSize: 'Max 12 persone',
    price: 85,
    originalPrice: 120,
    rating: 4.9,
    reviews: 847,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
    highlights: ['6 degustazioni autentiche', 'Guida esperta locale', 'Gruppi piccoli'],
    badge: 'Bestseller',
    href: '/esperienze/food-tour-trastevere'
  },
  {
    id: 'bike-chianti',
    title: 'E-bike Tour delle Colline del Chianti',
    location: 'Toscana',
    category: 'Outdoor',
    duration: '6 ore',
    groupSize: 'Max 8 persone',
    price: 145,
    originalPrice: 180,
    rating: 4.8,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
    highlights: ['E-bike premium', 'Cantina storica', 'Pranzo incluso'],
    badge: 'Eco-friendly',
    href: '/esperienze/bike-chianti'
  },
  {
    id: 'boat-amalfi',
    title: 'Tour Privato in Barca Costiera Amalfitana',
    location: 'Costiera Amalfitana',
    category: 'Mare & Relax',
    duration: '8 ore',
    groupSize: 'Max 6 persone',
    price: 320,
    originalPrice: 450,
    rating: 5.0,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop',
    highlights: ['Skipper esperto', 'Pranzo a bordo', 'Grotte nascoste'],
    badge: 'Lusso',
    href: '/esperienze/boat-amalfi'
  }
]

const categories = [
  { name: 'Food & Wine', count: 45, icon: '🍷' },
  { name: 'Arte & Cultura', count: 78, icon: '🎨' },
  { name: 'Outdoor', count: 34, icon: '🚴' },
  { name: 'Mare & Relax', count: 23, icon: '🏖️' },
  { name: 'Storia', count: 56, icon: '🏛️' },
  { name: 'Famiglia', count: 29, icon: '👨‍👩‍👧‍👦' }
]

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-italy text-white py-16 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Guida alle Esperienze
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Tutto quello che devi sapere per vivere l'Italia come un locale: consigli, prezzi e come prenotare
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Categorie di Esperienze</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/esperienze?category=${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{category.count} esperienze</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le Migliori Esperienze in Italia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guida completa alle esperienze più autentiche con consigli pratici per prenotare
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <Link
                key={experience.id}
                href={experience.href}
                className="card group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      experience.badge === 'Bestseller' ? 'bg-accent-500 text-white' :
                      experience.badge === 'Eco-friendly' ? 'bg-primary-500 text-white' :
                      'bg-gold-500 text-white'
                    }`}>
                      {experience.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 px-2 py-1 rounded-lg">
                      <span className="text-sm font-bold text-gray-900 flex items-center">
                        <Euro className="h-3 w-3 mr-1" />
                        {experience.price}
                      </span>
                      {experience.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-1">
                          €{experience.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{experience.location}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {experience.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {experience.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {experience.groupSize}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Incluso:</h4>
                    <div className="space-y-1">
                      {experience.highlights.map((highlight, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-gold-400" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <span className="text-sm text-gray-500">({experience.reviews})</span>
                    </div>
                    <Link href="https://www.getyourguide.com/s/?q=italia" target="_blank" className="btn-primary btn-sm">
                      Vedi Offerte
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Come Scegliere e Prenotare le Migliori Esperienze
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🍽️ Food & Wine Tours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prenota in anticipo per i tour più richiesti</li>
                  <li>• Scegli gruppi piccoli per un'esperienza autentica</li>
                  <li>• Verifica cosa è incluso nel prezzo</li>
                  <li>• Informa su allergie e intolleranze</li>
                </ul>
                <p className="mt-4 text-sm text-primary-600">
                  <strong>Prezzo medio:</strong> 60-150€ per persona
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚴 Tour in Bicicletta</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Controlla il livello di difficoltà</li>
                  <li>• E-bike disponibili per percorsi collinari</li>
                  <li>• Include casco e attrezzature</li>
                  <li>• Migliori nelle stagioni intermedie</li>
                </ul>
                <p className="mt-4 text-sm text-primary-600">
                  <strong>Prezzo medio:</strong> 45-120€ per persona
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎭 Arte & Cultura</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prenota con anticipo per musei famosi</li>
                  <li>• Tour privati per approfondimenti</li>
                  <li>• Audio guide spesso incluse</li>
                  <li>• Verifica giorni e orari di chiusura</li>
                </ul>
                <p className="mt-4 text-sm text-primary-600">
                  <strong>Prezzo medio:</strong> 25-80€ per persona
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⛵ Mare & Relax</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Controlla condizioni meteo marine</li>
                  <li>• Skipper incluso per maggiore sicurezza</li>
                  <li>• Pranzo a bordo spesso disponibile</li>
                  <li>• Migliori da maggio a settembre</li>
                </ul>
                <p className="mt-4 text-sm text-primary-600">
                  <strong>Prezzo medio:</strong> 80-350€ per persona
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-accent-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  📝 Suggerimento Pro
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Confronta sempre prezzi e recensioni su più piattaforme. Le migliori offerte si trovano spesso prenotando direttamente o con un po' di anticipo.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="https://www.getyourguide.com/s/?q=italia" target="_blank" className="btn-primary">
                    GetYourGuide
                  </Link>
                  <Link href="https://www.viator.com/Italy/d6" target="_blank" className="btn-secondary">
                    Viator
                  </Link>
                  <Link href="https://www.klook.com/country/25-italy/" target="_blank" className="btn-secondary">
                    Klook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}