import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, UtensilsCrossed, ChefHat, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Street Food Sicilia: Tour Gastronomici e Food Experience | Italy Experience Hub',
  description: 'Scopri il miglior street food della Sicilia: arancini, pannelle, cannoli. Tour gastronomici a Palermo, Catania e mercati storici con guide locali.',
  keywords: ['street food Sicilia', 'food tour Sicilia', 'arancini', 'cannoli', 'Palermo gastronomia', 'Catania cibo strada', 'cucina siciliana', 'mercati storici'],
}

export default function SiciliaStreetFoodPage() {
  const featuredTours = [
    {
      id: 'street-food-palermo',
      title: 'Street Food Tour Palermo Autentico',
      location: 'Palermo',
      duration: '4 ore',
      groupSize: 'Max 8 persone',
      price: 65,
      originalPrice: 85,
      rating: 4.9,
      reviews: 384,
      type: 'Walking Tour',
      highlights: ['Mercato Ballarò', 'Pane ca\' meusa', 'Arancini storici', 'Cannoli freschi'],
      badge: 'Bestseller'
    },
    {
      id: 'food-tour-catania',
      title: 'Catania Food Experience & Mercato del Pesce',
      location: 'Catania',
      duration: '3.5 ore',
      groupSize: 'Max 10 persone',
      price: 55,
      originalPrice: 75,
      rating: 4.8,
      reviews: 267,
      type: 'Market Tour',
      highlights: ['Mercato del pesce', 'Arancini Savia', 'Granita siciliana', 'Pasta alla Norma'],
      badge: 'Autentico'
    },
    {
      id: 'cooking-class-sicilia',
      title: 'Cooking Class Siciliana + Market Tour',
      location: 'Taormina',
      duration: '6 ore',
      groupSize: 'Max 6 persone',
      price: 145,
      originalPrice: 180,
      rating: 5.0,
      reviews: 156,
      type: 'Cooking Class',
      highlights: ['Mercato locale', 'Cannoli fatti in casa', 'Ricette tradizionali', 'Cena inclusa'],
      badge: 'Esclusivo'
    }
  ]

  const streetFoodSpecialties = [
    {
      name: 'Arancini',
      description: 'Palle di riso fritte ripiene, ogni città ha la sua versione',
      price: '€2-4',
      image: '/images/experiences/sicilia-street-food-hero.webp',
      regions: ['Palermo: al burro', 'Catania: alla carne', 'Messina: al prosciutto'],
      funFact: 'Esistono oltre 30 varianti diverse in Sicilia!'
    },
    {
      name: 'Pane ca\' Meusa',
      description: 'Panino con milza e polmone, il re dello street food palermitano',
      price: '€3-5',
      image: '/images/experiences/sicilia-street-food-hero.webp',
      regions: ['Solo Palermo', 'Ricetta medievale', 'Con o senza "maritata"'],
      funFact: 'Tradizione del ghetto ebraico medievale'
    },
    {
      name: 'Pannelle e Crocchè',
      description: 'Frittelle di farina di ceci e crocchette di patate',
      price: '€1-3',
      image: '/images/experiences/sicilia-street-food-hero.webp',
      regions: ['Palermo classico', 'In tutto il pane', 'Aperitivo della sera'],
      funFact: 'Si mangiano nel pane come un hamburger siciliano'
    },
    {
      name: 'Cannoli Siciliani',
      description: 'Cialda fritta ripiena di ricotta dolce, il dolce più famoso',
      price: '€2-6',
      image: '/images/experiences/sicilia-street-food-hero.webp',
      regions: ['Ovunque in Sicilia', 'Migliori: pasticcerie', 'Sempre freschi'],
      funFact: 'La ricotta deve essere del giorno, mai in anticipo!'
    }
  ]

  const mercatiStorici = [
    {
      nome: 'Ballarò',
      citta: 'Palermo',
      descrizione: 'Il mercato più colorato e autentico di Palermo',
      specialita: ['Frutta esotica', 'Pesce fresco', 'Street food', 'Spezie orientali'],
      orari: 'Lun-Sab 8:00-20:00',
      atmosfera: 'Caos organizzato, grida dei venditori, profumi intensi'
    },
    {
      nome: 'La Vucciria',
      citta: 'Palermo', 
      descrizione: 'Storico mercato diurno, movida notturna',
      specialita: ['Pesce spada', 'Polpo bollito', 'Panelle fresche', 'Vino sfuso'],
      orari: 'Mattino: mercato, Sera: taverne',
      atmosfera: 'Tradizione e modernità che si incontrano'
    },
    {
      nome: 'Mercato del Pesce',
      citta: 'Catania',
      descrizione: 'Spettacolo folcloristico all\'alba',
      specialita: ['Pesce dell\'Etna', 'Ricci di mare', 'Pesce spada', 'Tonno fresco'],
      orari: 'Mar-Dom 6:00-13:00',
      atmosfera: 'Grida, contrattazioni, vita autentica siciliana'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/sicilia-street-food-hero.webp"
            alt="Street Food Sicilia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Street Food Sicilia
              <span className="block text-yellow-300">Experience Autentica</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Scopri i sapori più autentici della Sicilia nei mercati storici e con i maestri dello street food. 
              Dai famosi arancini ai cannoli freschi, un viaggio nel gusto che non dimenticherai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tours" className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                Scopri i Tour
              </Link>
              <Link href="/contatti" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
                Personalizza Tour
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
              <UtensilsCrossed className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guide Locali Esperte</h3>
              <p className="text-gray-600">Maestri del food che conoscono ogni segreto dei mercati storici</p>
            </div>
            <div className="flex flex-col items-center">
              <ChefHat className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ricette Tradizionali</h3>
              <p className="text-gray-600">Specialità tramandate da generazioni nelle famiglie siciliane</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Esperienza Autentica</h3>
              <p className="text-gray-600">Vivi la Sicilia come un locale, lontano dai turistici</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Food Tour più Amati
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esperienze culinarie autentiche per scoprire i sapori veri della Sicilia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/sicilia-street-food-hero.webp"
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      tour.badge === 'Bestseller' ? 'bg-orange-500' :
                      tour.badge === 'Autentico' ? 'bg-green-600' :
                      'bg-purple-600'
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
                    <span className="px-2 py-1 rounded text-xs font-medium text-white bg-orange-600">
                      {tour.type}
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
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
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
                    <Link href="/contatti" className="btn-primary text-sm px-4 py-2 bg-orange-600 hover:bg-orange-700">
                      Prenota Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Street Food Specialties */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le Specialità da Non Perdere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I pilastri dello street food siciliano che ogni foodie deve assolutamente provare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {streetFoodSpecialties.map((specialty, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{specialty.name}</h3>
                      <span className="text-orange-600 font-bold">{specialty.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{specialty.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {specialty.regions.map((region, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                          {region}
                        </div>
                      ))}
                    </div>

                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-orange-700 font-medium">💡 {specialty.funFact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Markets */}
      <section className="py-16 bg-yellow-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I Mercati Storici da Visitare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dove il cibo incontra la cultura: i mercati più autentici della Sicilia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mercatiStorici.map((mercato, index) => (
              <div key={index} className="card p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{mercato.nome}</h3>
                    <p className="text-orange-600 font-medium">{mercato.citta}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{mercato.descrizione}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialità:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {mercato.specialita.map((specialita, idx) => (
                        <span key={idx} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                          {specialita}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Orari:</h4>
                    <p className="text-sm text-gray-600">{mercato.orari}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 italic">"{mercato.atmosfera}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container-custom text-center">
          <UtensilsCrossed className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h2 className="text-3xl font-bold mb-4">
            Assapora la Vera Sicilia
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Dai mercati storici alle tavole delle famiglie: scopri i sapori autentici 
            che hanno reso famosa la cucina siciliana nel mondo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              Prenota Food Tour
            </Link>
            <Link href="/guide/sicilia-7-giorni" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Guida Completa Sicilia
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}