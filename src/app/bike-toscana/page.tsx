import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Bike, Clock, Users, Star, MapPin, Heart, Camera, Wine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bike Tour Toscana | Chianti, Val d\'Orcia, Colline Senesi 2025',
  description: 'Bike Tour Toscana: Chianti, Val d\'Orcia, Montalcino. Bici elettriche, degustazioni vino, paesaggi UNESCO. Esperienza ciclistica autentica nelle colline toscane.',
  keywords: ['bike tour Toscana', 'ciclismo Chianti', 'bici elettriche Toscana', 'Val d\'Orcia bicicletta', 'tour bici vino', 'Montalcino bike tour', 'cicloturismo Toscana', 'e-bike Siena'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://italyexperiencehub.com/bike-toscana',
  },
}

export default function BikeToscanaPage() {
  const bikeRoutes = [
    {
      id: 'chianti-classico',
      title: 'Chianti Classico Wine Route',
      location: 'Greve - Castellina - Radda',
      distance: '45 km',
      difficulty: 'Intermedio',
      duration: '6 ore',
      price: 120,
      originalPrice: 150,
      rating: 4.9,
      reviews: 156,
      highlights: [
        'Strada del Chianti panoramica',
        '3 cantine DOCG storiche',
        'Borgo medievale Castellina',
        'Pranzo vista vigneti'
      ],
      badge: 'Più Venduto'
    },
    {
      id: 'val-dorcia-unesco',
      title: 'Val d\'Orcia UNESCO Heritage',
      location: 'Pienza - Montalcino - San Quirico',
      distance: '38 km',
      difficulty: 'Facile',
      duration: '5.5 ore',
      price: 110,
      originalPrice: 140,
      rating: 5.0,
      reviews: 98,
      highlights: [
        'Paesaggi UNESCO patrimonio umanità',
        'Pienza città del Pecorino',
        'Brunello di Montalcino DOCG',
        'Cipressi iconici Toscana'
      ],
      badge: 'UNESCO'
    },
    {
      id: 'colline-senesi',
      title: 'Colline Senesi & Crete',
      location: 'Siena - Asciano - Montepulciano',
      distance: '52 km',
      difficulty: 'Avanzato',
      duration: '7 ore',
      price: 135,
      originalPrice: 170,
      rating: 4.8,
      reviews: 73,
      highlights: [
        'Crete Senesi paesaggio lunare',
        'Abbazia di Monte Oliveto',
        'Montepulciano Vino Nobile',
        'Siena centro storico UNESCO'
      ],
      badge: 'Avventura'
    }
  ]

  const bikeFeatures = [
    {
      feature: 'E-Bike Premium',
      description: 'Biciclette elettriche Trek, Specialized o Giant con batterie long-range',
      included: ['Casco professionale', 'Kit riparazione', 'Borracce termiche', 'GPS Garmin']
    },
    {
      feature: 'Guide Certificate',
      description: 'Guide ciclistiche locali certificate, sommelier AIS per degustazioni',
      included: ['Esperto territorio', 'Primo soccorso', 'Meccanica bici', 'Storia locale']
    },
    {
      feature: 'Supporto Van',
      description: 'Veicolo di supporto sempre presente per sicurezza e bagagli',
      included: ['Trasporto bagagli', 'Ricambi bici', 'Acqua fresca', 'Pick-up emergenza']
    }
  ]

  const wineriesProgram = [
    {
      cantina: 'Castello di Verrazzano',
      zona: 'Chianti Classico',
      storia: 'Famiglia dal 1150, 230 ettari vitati',
      degustazione: 'Chianti Classico, Riserva, IGT Super Tuscan',
      prezzo: 'Incluso nel tour',
      highlight: 'Castello medievale autentico, vista panoramica 360°'
    },
    {
      cantina: 'Tenuta San Guido',
      zona: 'Bolgheri',
      storia: 'Casa del Sassicaia, eccellenza mondiale',
      degustazione: 'Sassicaia, Le Difese, Guidalberto',
      prezzo: 'Supplemento €25',
      highlight: 'Uno dei vini italiani più prestigiosi al mondo'
    },
    {
      cantina: 'Fattoria dei Barbi',
      zona: 'Montalcino',
      storia: 'Famiglia Colombini, Brunello dal 1885',
      degustazione: 'Brunello DOCG, Rosso di Montalcino',
      prezzo: 'Incluso nel tour',
      highlight: 'Cantina storica nel cuore di Montalcino'
    }
  ]

  const routeItinerary = [
    {
      tappa: 'Partenza da Greve in Chianti',
      orario: '09:00',
      attivita: 'Briefing e test bici',
      descrizione: 'Preparazione e-bike, controllo sicurezza, spiegazione percorso'
    },
    {
      tappa: 'Strada del Chianti SR222',
      orario: '09:30',
      attivita: 'Pedalata panoramica',
      descrizione: '15 km tra vigneti storici, soste fotografiche panoramiche'
    },
    {
      tappa: 'Castello di Verrazzano',
      orario: '11:00',
      attivita: 'Visita e degustazione',
      descrizione: 'Tour cantina medievale, degustazione 4 vini con tagliere toscano'
    },
    {
      tappa: 'Castellina in Chianti',
      orario: '12:30',
      attivita: 'Pranzo tipico',
      descrizione: 'Pici all\'aglione, bistecca chianina, vista sulle colline'
    },
    {
      tappa: 'Via del Termine - Radda',
      orario: '14:30',
      attivita: 'Pedalata collinare',
      descrizione: '20 km tra borghi medievali, cipressi secolari, oliveti'
    },
    {
      tappa: 'Rientro Greve in Chianti',
      orario: '16:30',
      attivita: 'Aperitivo finale',
      descrizione: 'Spritz con olive ascolane, salumi locali, debrief esperienza'
    }
  ]

  const technicalInfo = [
    {
      categoria: 'Difficoltà Percorsi',
      dettagli: [
        'Facile: 0-300m dislivello, 25-35 km, strade asfaltate',
        'Intermedio: 300-600m dislivello, 35-50 km, sterrato 20%',
        'Avanzato: 600-1000m dislivello, 50+ km, single track 30%'
      ]
    },
    {
      categoria: 'Equipaggiamento Incluso',
      dettagli: [
        'E-bike premium (Trek, Specialized, Giant)',
        'Casco omologato CE, guanti imbottiti',
        'Kit riparazione, pompa, camera d\'aria',
        'GPS Garmin con tracce precaricate'
      ]
    },
    {
      categoria: 'Cosa Portare',
      dettagli: [
        'Abbigliamento sportivo traspirante',
        'Scarpe da trekking o ciclismo',
        'Giacca antipioggia (marzo-maggio)',
        'Crema solare SPF 50+, occhiali da sole'
      ]
    }
  ]

  const seasonalGuide = [
    {
      periodo: 'Primavera (Mar-Mag)',
      condizioni: 'Temperatura 15-22°C, fioritura colza',
      highlights: 'Paesaggi verdi, meno turisti, clima perfetto',
      abbigliamento: 'Giacca leggera, pantaloni lunghi'
    },
    {
      periodo: 'Estate (Giu-Ago)',
      condizioni: 'Temperatura 25-35°C, secco',
      highlights: 'Vendemmia agosto, sagre paesane',
      abbigliamento: 'Maglietta tecnica, pantaloncini, cappello'
    },
    {
      periodo: 'Autunno (Set-Nov)',
      condizioni: 'Temperatura 18-25°C, vendemmia',
      highlights: 'Colori autunnali, sagre del vino, tartufi',
      abbigliamento: 'Strati, giacca media, scarpe impermeabili'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/bike-tours-hero.webp"
            alt="Bike Tour Toscana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-green-900/60"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Bike Tour
              <span className="block text-green-300">Toscana</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              Pedala tra i vigneti del Chianti e le colline UNESCO della Val d'Orcia. 
              E-bike premium, degustazioni in cantina, guide certificate per scoprire la Toscana autentica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tours" className="btn-primary bg-green-600 hover:bg-green-700">
                Scopri i Percorsi
              </Link>
              <Link href="/contatti" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
                Tour Su Misura
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
              <Bike className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-Bike Premium</h3>
              <p className="text-gray-600">Trek e Specialized, batterie long-range, supporto tecnico</p>
            </div>
            <div className="flex flex-col items-center">
              <Wine className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cantine DOCG</h3>
              <p className="text-gray-600">Chianti Classico, Brunello, Vino Nobile con sommelier</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Paesaggi UNESCO</h3>
              <p className="text-gray-600">Val d'Orcia patrimonio dell'umanità, cipressi iconici</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Percorsi Bike Tour Toscana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tre itinerari unici per scoprire la Toscana in bicicletta, dalle dolci colline del Chianti ai paesaggi UNESCO
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {bikeRoutes.map((route) => (
              <div key={route.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/bike-tours-hero.webp"
                    alt={route.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      route.badge === 'Più Venduto' ? 'bg-green-500' :
                      route.badge === 'UNESCO' ? 'bg-blue-500' :
                      'bg-orange-500'
                    }`}>
                      {route.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-lg">
                    <span className="text-sm font-bold text-gray-900">€{route.price}</span>
                    {route.originalPrice && (
                      <span className="text-xs text-gray-500 line-through ml-1">€{route.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{route.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {route.title}
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {route.duration}
                    </span>
                    <span className="text-center">{route.distance}</span>
                    <span className="text-right">{route.difficulty}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {route.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">{route.rating}</span>
                      <span className="text-sm text-gray-500">({route.reviews})</span>
                    </div>
                    <Link href="/contatti" className="btn-primary text-sm px-4 py-2 bg-green-600 hover:bg-green-700">
                      Prenota
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Itinerary */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Itinerario Chianti Classico
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 ore tra vigneti storici, cantine medievali e borghi autentici
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {routeItinerary.map((stop, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{stop.tappa}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{stop.orario}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{stop.attivita}</span>
                    </div>
                    <p className="text-gray-600">{stop.descrizione}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wineries Program */}
      <section className="py-16 bg-amber-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cantine Partner DOCG
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Degustazioni esclusive nelle cantine storiche più prestigiose della Toscana
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {wineriesProgram.map((cantina, index) => (
              <div key={index} className="card p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cantina.cantina}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{cantina.zona}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-amber-700">Storia: </span>{cantina.storia}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-amber-700">Degustazione: </span>{cantina.degustazione}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-amber-700">Prezzo: </span>{cantina.prezzo}
                  </div>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <div className="text-xs text-amber-800">
                    <span className="font-bold">Highlight: </span>{cantina.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Informazioni Tecniche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutto quello che devi sapere per prepararti al bike tour
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technicalInfo.map((info, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{info.categoria}</h3>
                <div className="space-y-3">
                  {info.dettagli.map((dettaglio, idx) => (
                    <div key={idx} className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                      {dettaglio}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16 bg-green-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Guida Stagionale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quando andare in bici in Toscana: clima, paesaggi e abbigliamento consigliato
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {seasonalGuide.map((stagione, index) => (
              <div key={index} className="card p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{stagione.periodo}</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium text-green-700">Condizioni: </span>
                    <span className="text-gray-600">{stagione.condizioni}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-green-700">Highlights: </span>
                    <span className="text-gray-600">{stagione.highlights}</span>
                  </div>
                  <div className="text-sm bg-green-100 p-2 rounded">
                    <span className="font-medium text-green-800">Abbigliamento: </span>
                    <span className="text-green-700">{stagione.abbigliamento}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pedala nella Toscana Autentica
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Scopri paesaggi da cartolina, degusta vini DOCG nelle cantine storiche 
            e vivi la Toscana come un locale. E-bike premium e guide certificate per un'esperienza indimenticabile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary bg-amber-500 hover:bg-amber-600 text-gray-900">
              Prenota Bike Tour
            </Link>
            <Link href="/destinazioni/toscana" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Guida Toscana Completa
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}