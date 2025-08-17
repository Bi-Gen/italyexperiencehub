import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star, Clock, Users, Calendar, ArrowRight, TrendingUp, Award, Shield } from 'lucide-react'

export default function HomePage() {
  const featuredDestinations = [
    {
      id: 'roma',
      name: 'Roma',
      description: 'Capitale eterna ricca di storia, arte e cultura millenaria',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
      experiences: 156,
      avgRating: 4.8,
      topExperience: 'Tour Colosseo e Fori Imperiali',
      href: '/destinazioni/roma'
    },
    {
      id: 'toscana',
      name: 'Toscana',
      description: 'Paesaggi mozzafiato, arte rinascimentale e vini pregiati',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      experiences: 203,
      avgRating: 4.9,
      topExperience: 'Tour del Chianti con Degustazione',
      href: '/destinazioni/toscana'
    },
    {
      id: 'costiera-amalfitana',
      name: 'Costiera Amalfitana',
      description: 'Costa spettacolare patrimonio UNESCO con borghi incantevoli',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop',
      experiences: 89,
      avgRating: 4.7,
      topExperience: 'Tour in Barca Privata',
      href: '/destinazioni/costiera-amalfitana'
    }
  ]

  const featuredExperiences = [
    {
      id: 'food-rome',
      title: 'Food Tour Autentico a Trastevere',
      location: 'Roma',
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
      id: 'bike-tuscany',
      title: 'E-bike Tour delle Colline del Chianti',
      location: 'Toscana',
      duration: '6 ore',
      groupSize: 'Max 8 persone',
      price: 145,
      originalPrice: 180,
      rating: 4.8,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      highlights: ['E-bike premium', 'Cantina storica', 'Pranzo incluso'],
      badge: 'Eco-friendly',
      href: '/esperienze/ebike-chianti'
    },
    {
      id: 'boat-amalfi',
      title: 'Tour Privato in Barca Costiera Amalfitana',
      location: 'Costiera Amalfitana',
      duration: '8 ore',
      groupSize: 'Max 6 persone',
      price: 320,
      originalPrice: 450,
      rating: 5.0,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop',
      highlights: ['Skipper esperto', 'Pranzo a bordo', 'Grotte nascoste'],
      badge: 'Lusso',
      href: '/esperienze/boat-tour-amalfi'
    }
  ]

  const popularGuides = [
    {
      title: 'Come Visitare Roma in 3 Giorni: Itinerario Completo',
      category: 'Guide Destinazioni',
      readTime: '12 min',
      views: '156K',
      href: '/guide/roma-3-giorni',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop'
    },
    {
      title: 'Miglior Periodo per Visitare la Toscana: Guida Stagionale',
      category: 'Guide Pratiche',
      readTime: '8 min',
      views: '89K',
      href: '/guide/quando-visitare-toscana',
      image: 'https://images.unsplash.com/photo-1429554513779-906c3395a1a9?w=400&h=250&fit=crop'
    },
    {
      title: 'Trasporti in Italia: Come Muoversi Tra le Città',
      category: 'Guide Pratiche',
      readTime: '15 min',
      views: '234K',
      href: '/guide/trasporti-italia',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-6 w-6 text-gold-400" />
              <span className="text-gold-400 font-semibold">Il portale #1 per il turismo in Italia</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Scopri l'Italia
              <span className="block text-gold-400">come un Esperto</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              Guide complete, esperienze esclusive e consigli da esperti locali. 
              Il punto di riferimento per vivere l'Italia autentica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/destinazioni"
                className="btn-primary bg-accent-500 hover:bg-accent-600 text-white border-none"
              >
                Esplora Destinazioni
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/esperienze"
                className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                Vedi Esperienze
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">500+ Esperienze Verificate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gold-400" />
                <span className="text-sm">4.8/5 Rating Medio</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-300" />
                <span className="text-sm">50K+ Viaggiatori Soddisfatti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <section className="bg-white shadow-lg -mt-8 relative z-10 mx-4 lg:mx-8 rounded-2xl">
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dove vuoi andare?
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Roma, Toscana, Costiera Amalfitana..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quando
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full btn-primary">
                Cerca Esperienze
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Destinazioni più Amate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le mete imperdibili d'Italia con le nostre guide esperte e esperienze esclusive
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
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
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Star className="h-4 w-4 text-gold-400 mr-1" />
                        {destination.avgRating}
                      </span>
                      <span>{destination.experiences} esperienze</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-600 font-medium">
                      Top: {destination.topExperience}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="h-6 w-6 text-primary-600" />
              <span className="text-primary-600 font-semibold">Esperienze più Prenotate</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vivi l'Italia come un Locale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esperienze autentiche selezionate dai nostri esperti locali
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredExperiences.map((experience) => (
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
                      <span className="text-sm font-bold text-gray-900">
                        €{experience.price}
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
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
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
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-gold-400" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <span className="text-sm text-gray-500">({experience.reviews})</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/esperienze"
              className="btn-primary"
            >
              Vedi Tutte le Esperienze
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Guides - Stile Aranzulla */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Guide più Lette
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I nostri tutorial completi per viaggiare in Italia come un esperto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {popularGuides.map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="card group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {guide.category}
                    </span>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{guide.readTime} lettura</span>
                      <span>{guide.views} visualizzazioni</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/guide"
              className="btn-secondary"
            >
              Tutte le Guide Pratiche
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-gradient-italy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Non Perdere Nessun Consiglio
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere guide esclusive, 
            offerte speciali e i migliori consigli di viaggio
          </p>
          
          <form className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-accent-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Iscriviti
            </button>
          </form>
          
          <p className="text-sm text-blue-200 mt-4">
            Più di 25.000 viaggiatori si fidano dei nostri consigli
          </p>
        </div>
      </section>
    </div>
  )
}