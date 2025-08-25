import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, Utensils, Wine, Camera, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Food Tour Roma Autentico | Trastevere, Campo de Fiori, Testaccio 2025',
  description: 'Food Tour Roma autentico: Trastevere, Testaccio, Campo de Fiori con romani veri. Carbonara, maritozzo, supplì, vino. Esperienza gastronomica romana unica.',
  keywords: ['food tour Roma', 'tour gastronomico Roma', 'cucina romana autentica', 'Trastevere food tour', 'Testaccio mercato', 'carbonara Roma', 'supplì romano', 'maritozzo', 'aperitivo romano', 'guide locali Roma'],
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
    canonical: 'https://italyexperiencehub.com/esperienze/roma-food-tour',
  },
}

export default function RomaFoodTourPage() {
  const featuredTours = [
    {
      id: 'testaccio-market-street',
      title: 'Testaccio Market & Street Food',
      location: 'Testaccio + Aventino',
      duration: '4 ore',
      groupSize: 'Max 8 persone',
      price: 85,
      originalPrice: 110,
      rating: 4.9,
      reviews: 342,
      type: 'Mercato + Degustazioni',
      highlights: ['Mercato Testaccio autentico', 'Quinto quarto tradizionale', 'Supplì migliori di Roma', 'Maritozzo con panna storico'],
      badge: 'Autentico'
    },
    {
      id: 'trastevere-by-night',
      title: 'Trastevere Food & Wine Night',
      location: 'Trastevere + Gianicolo',
      duration: '3.5 ore',
      groupSize: 'Max 6 persone',
      price: 95,
      originalPrice: 125,
      rating: 5.0,
      reviews: 278,
      type: 'Serale + Vini',
      highlights: ['Carbonara leggendaria', 'Cacio e pepe perfetta', 'Vini Castelli Romani', 'Vista panoramica Roma'],
      badge: 'Romantico'
    },
    {
      id: 'centro-storico-gourmet',
      title: 'Centro Storico Gourmet Experience',
      location: 'Campo de Fiori + Ghetto',
      duration: '5 ore',
      groupSize: 'Max 4 persone',
      price: 150,
      originalPrice: 200,
      rating: 4.8,
      reviews: 189,
      type: 'Premium + Chef',
      highlights: ['Chef-guide esperto', 'Carciofi alla giudia', 'Formaggi DOP Lazio', 'Cannolo siciliano d\'autore'],
      badge: 'Premium'
    }
  ]

  const foodSpecialties = [
    {
      categoria: 'Primi Piatti Iconici',
      descrizione: 'I 4 monumenti della cucina romana che dovete assolutamente provare',
      items: [
        { nome: 'Carbonara Autentica', prezzo: '€12-16', descrizione: 'Guanciale, pecorino, uova, pepe. SENZA panna!', luogo: 'Da Enzo al 29, Armando al Pantheon' },
        { nome: 'Cacio e Pepe', prezzo: '€10-14', descrizione: 'Solo pecorino romano, pepe nero, pasta. Tecnica perfetta.', luogo: 'Il Sorpasso, Checchino dal 1887' },
        { nome: 'Amatriciana Vera', prezzo: '€11-15', descrizione: 'Guanciale, pomodoro San Marzano, pecorino. Origine Amatrice.', luogo: 'Da Valentino, Flavio al Velavevodetto' },
        { nome: 'Gricia Storica', prezzo: '€10-13', descrizione: 'L\'antenata della carbonara: guanciale e pecorino.', luogo: 'Checchino, Armando' }
      ]
    },
    {
      categoria: 'Street Food Romano',
      descrizione: 'I sapori di strada che raccontano la Roma popolare',
      items: [
        { nome: 'Supplì al Telefono', prezzo: '€2-3', descrizione: 'Riso, sugo, mozzarella che fila. Croccante fuori.', luogo: 'Supplizio, I Supplì' },
        { nome: 'Maritozzo con Panna', prezzo: '€3-5', descrizione: 'Dolce storico romano, colazione degli antichi.', luogo: 'Regoli dal 1916, Il Maritozzaro' },
        { nome: 'Pizza al Taglio', prezzo: '€3-4', descrizione: 'Croccante, condimenti freschi. Venduta a peso.', luogo: 'Pizzarium, Da Remo' },
        { nome: 'Trapizzino', prezzo: '€3-4', descrizione: 'Invenzione moderna: pizza a triangolo ripiena.', luogo: 'Trapizzino original, 00100' }
      ]
    },
    {
      categoria: 'Quinto Quarto Tradizionale',
      descrizione: 'La cucina povera diventata alta gastronomia',
      items: [
        { nome: 'Coda alla Vaccinara', prezzo: '€16-22', descrizione: 'Coda di bue stufata con sedano, pomodoro, pinoli.', luogo: 'Checchino dal 1887, Da Oio' },
        { nome: 'Trippa alla Romana', prezzo: '€14-18', descrizione: 'Trippa con sugo, mentuccia, pecorino. Sabato classico.', luogo: 'Da Valentino, Armando' },
        { nome: 'Coratella d\'Agnello', prezzo: '€15-20', descrizione: 'Interiora d\'agnello con carciofi e vino bianco.', luogo: 'Flavio al Velavevodetto' },
        { nome: 'Pajata', prezzo: '€16-25', descrizione: 'Intestino di vitello da latte con sugo. Rarità.', luogo: 'Solo pochi ristoranti tradizionali' }
      ]
    }
  ]

  const wineSelection = [
    {
      zona: 'Castelli Romani',
      vini: [
        { nome: 'Frascati Superiore DOCG', carattere: 'Bianco fresco, minerale', abbinamento: 'Carbonara, cacio e pepe', prezzo: '€15-25' },
        { nome: 'Marino DOC', carattere: 'Bianco aromatico, floreale', abbinamento: 'Pesce, verdure', prezzo: '€12-18' }
      ]
    },
    {
      zona: 'Lazio DOC',
      vini: [
        { nome: 'Cesanese del Piglio', carattere: 'Rosso elegante, speziato', abbinamento: 'Amatriciana, coda alla vaccinara', prezzo: '€18-28' },
        { nome: 'Malvasia Puntinata', carattere: 'Bianco strutturato, sapido', abbinamento: 'Carciofi, formaggi', prezzo: '€16-24' }
      ]
    }
  ]

  const tourItinerary = [
    {
      tappa: '1. Mercato Testaccio',
      durata: '60min',
      attivita: 'Esplorazione mercato',
      descrizione: 'Tour guidato del mercato più autentico di Roma, assaggi di formaggi, salumi, olive'
    },
    {
      tappa: '2. Mordi e Vai',
      durata: '30min', 
      attivita: 'Panino quinto quarto',
      descrizione: 'Il panino con la milza più famoso di Roma, esperienza street food autentica'
    },
    {
      tappa: '3. Da Checchino',
      durata: '45min',
      attivita: 'Pranzo tradizionale',
      descrizione: 'Ristorante storico 1887: coda alla vaccinara, trippa, vini dei Castelli'
    },
    {
      tappa: '4. Volpetti Più', 
      durata: '30min',
      attivita: 'Degustazione formaggi',
      descrizione: 'Selezione formaggi del Lazio DOP, pecorini stagionati, ricotte fresche'
    },
    {
      tappa: '5. Supplizio',
      durata: '20min',
      attivita: 'Supplì gourmet',
      descrizione: 'I migliori supplì di Roma: classico, cacio e pepe, amatriciana'
    },
    {
      tappa: '6. Gianicolo Sunset',
      durata: '30min',
      attivita: 'Aperitivo panorama',
      descrizione: 'Vista su tutta Roma al tramonto con spritz e olive ascolane'
    }
  ]

  const localRestaurants = [
    {
      nome: 'Da Enzo al 29',
      zona: 'Trastevere',
      specialita: 'Carbonara, Amatriciana',
      atmosfera: 'Trattoria autentica, 12 tavoli',
      prezzo: '€25-35',
      prenotazione: 'Impossibile, solo coda',
      segreto: 'Apre 19:30, arriva 19:00 per non aspettare 2 ore'
    },
    {
      nome: 'Checchino dal 1887',
      zona: 'Testaccio',
      specialita: 'Quinto quarto, Coda alla vaccinara',
      atmosfera: 'Storico, elegante, famiglia Mariani',
      prezzo: '€40-60',
      prenotazione: 'Obbligatoria, anche 1 settimana prima',
      segreto: 'Chiedi il menù degustazione quinto quarto (€55)'
    },
    {
      nome: 'Armando al Pantheon',
      zona: 'Centro Storico',
      specialita: 'Cucina romana classica',
      atmosfera: '1961, famiglia Gargioli, vista Pantheon',
      prezzo: '€35-50',
      prenotazione: 'Sempre necessaria',
      segreto: 'Tavolo 7: vista laterale Pantheon perfetta per foto'
    },
    {
      nome: 'Il Sorpasso',
      zona: 'Prati',
      specialita: 'Cacio e pepe, Aperitivi gourmet',
      atmosfera: 'Moderno ma autentico, wine bar',
      prezzo: '€20-35',
      prenotazione: 'Consigliata sera',
      segreto: 'Happy hour 18-20: spritz €5 con buffet incluso'
    }
  ]

  const seasonalSpecialties = [
    {
      stagione: 'Inverno (Dic-Feb)',
      piatti: ['Coda alla Vaccinara', 'Trippa alla Romana', 'Broccoli e Salsicce', 'Carciofi alla Giudia'],
      descrizione: 'I piatti caldi del quinto quarto e i carciofi del Ghetto al massimo sapore'
    },
    {
      stagione: 'Primavera (Mar-Mag)',
      piatti: ['Carciofi Sant\'Erasmo', 'Fave e Pecorino', 'Agnello con Carciofi', 'Maritozzo Stagionale'],
      descrizione: 'Verdure primaverili e agnello pasquale, dolci della tradizione'
    },
    {
      stagione: 'Estate (Giu-Ago)',
      piatti: ['Pasta Fredda', 'Supplì alla Gricia', 'Gelato Artigianale', 'Granita al Caffè'],
      descrizione: 'Piatti freschi e gelati artigianali per combattere il caldo romano'
    },
    {
      stagione: 'Autunno (Set-Nov)',
      piatti: ['Gnocchi di Zucca', 'Castagne Arrosto', 'Vino Novello', 'Baccalà in Guazzetto'],
      descrizione: 'Sapori autunnali e la tradizione del vino novello dei Castelli'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/roma-food-tour-mercato.webp"
            alt="Food Tour Roma Mercato"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Food Tour Roma
              <span className="block text-red-300">Sapori Autentici</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Scopri la vera cucina romana con guide locali: dal mercato di Testaccio alle 
              trattorie storiche di Trastevere. Carbonara, supplì e vini che solo i romani conoscono.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tours" className="btn-primary bg-red-600 hover:bg-red-700">
                Scopri i Tour
              </Link>
              <Link href="/contatti" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
                Tour Personalizzato
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
              <Utensils className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guide Romane Vere</h3>
              <p className="text-gray-600">Romani doc che conoscono ogni angolo gastronomico della città</p>
            </div>
            <div className="flex flex-col items-center">
              <Wine className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luoghi Autentici</h3>
              <p className="text-gray-600">Mercati storici, trattorie familiari e osterie nascoste</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tradizione Centenaria</h3>
              <p className="text-gray-600">Ricette tramandate da generazioni di famiglie romane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tour Gastronomici Autentici
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esperienze culinarie uniche per scoprire la vera anima gastronomica di Roma
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/roma-food-tour-mercato.webp"
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      tour.badge === 'Autentico' ? 'bg-red-500' :
                      tour.badge === 'Romantico' ? 'bg-pink-500' :
                      'bg-gold-600'
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
                    <span className="px-2 py-1 rounded text-xs font-medium text-white bg-red-600">
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
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
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
                    <Link href="/contatti" className="btn-primary text-sm px-4 py-2 bg-red-600 hover:bg-red-700">
                      Prenota Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Specialties */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialità Romane Autentiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I piatti iconici che assaggerai durante i nostri tour gastronomici
            </p>
          </div>

          <div className="space-y-12">
            {foodSpecialties.map((categoria, index) => (
              <div key={index} className="card p-8 bg-red-50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{categoria.categoria}</h3>
                  <p className="text-gray-600">{categoria.descrizione}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoria.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{item.nome}</h4>
                        <span className="text-red-600 font-bold text-sm">{item.prezzo}</span>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm">{item.descrizione}</p>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        <span className="font-medium">Dove: </span>{item.luogo}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="py-16 bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vini del Lazio e Abbinamenti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I vini locali che accompagnano perfettamente la cucina romana tradizionale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {wineSelection.map((zona, index) => (
              <div key={index} className="card p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{zona.zona}</h3>
                <div className="space-y-6">
                  {zona.vini.map((vino, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{vino.nome}</h4>
                        <span className="text-red-600 font-bold text-sm">{vino.prezzo}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{vino.carattere}</p>
                      <div className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded">
                        <span className="font-medium">Abbinamento: </span>{vino.abbinamento}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Esempio di Itinerario: Testaccio Food Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 ore di pura esperienza gastronomica nel quartiere più autentico di Roma
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {tourItinerary.map((stop, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{stop.tappa}</h3>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">{stop.durata}</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{stop.attivita}</span>
                    </div>
                    <p className="text-gray-600">{stop.descrizione}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Restaurants Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ristoranti Autentici Consigliati
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I locali che visitiamo nei tour e dove mangiano davvero i romani
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {localRestaurants.map((ristorante, index) => (
              <div key={index} className="card p-6 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{ristorante.nome}</h3>
                  <span className="text-red-600 font-bold text-sm">{ristorante.prezzo}</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{ristorante.zona}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-red-700">Specialità: </span>{ristorante.specialita}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-red-700">Atmosfera: </span>{ristorante.atmosfera}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-red-700">Prenotazione: </span>{ristorante.prenotazione}
                  </div>
                </div>
                <div className="bg-gold-50 p-3 rounded-lg">
                  <div className="text-xs text-gold-700">
                    <span className="font-bold">Segreto del local: </span>{ristorante.segreto}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Specialties */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialità Stagionali Romane
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I sapori che cambiano con le stagioni: quando venire per assaggiare cosa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalSpecialties.map((stagione, index) => (
              <div key={index} className="card p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{stagione.stagione}</h3>
                <div className="space-y-2 mb-4">
                  {stagione.piatti.map((piatto, idx) => (
                    <div key={idx} className="text-sm text-red-700 bg-red-100 px-2 py-1 rounded">
                      {piatto}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600">{stagione.descrizione}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-3xl font-bold mb-4">
            Assaggia la Vera Roma
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Non limitarti ai ristoranti turistici. Scopri dove mangiano davvero i romani: 
            dai mercati storici alle trattorie di famiglia tramandate da generazioni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Prenota Food Tour
            </Link>
            <Link href="/guide/roma-3-giorni" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Guida Roma Completa
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}