import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, Utensils, Wine, Camera, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Food Tour Firenze Autentico | Bistecca, Chianti, Mercato Centrale 2025',
  description: 'Food Tour Firenze autentico: Mercato Centrale, bistecca fiorentina, Chianti, ribollita con fiorentini veri. Esperienza gastronomica toscana unica.',
  keywords: ['food tour Firenze', 'tour gastronomico Firenze', 'cucina toscana autentica', 'bistecca fiorentina', 'Chianti degustazione', 'Mercato Centrale Firenze', 'ribollita toscana', 'guide locali Firenze'],
}

export default function FirenzeFoodTourPage() {
  const featuredTours = [
    {
      id: 'mercato-centrale-experience',
      title: 'Mercato Centrale & Cucina Toscana',
      location: 'San Lorenzo + Centro',
      duration: '4.5 ore',
      groupSize: 'Max 8 persone',
      price: 95,
      originalPrice: 125,
      rating: 4.9,
      reviews: 298,
      type: 'Mercato + Degustazioni',
      highlights: ['Mercato storico 1874', 'Bistecca fiorentina autentica', 'Chianti in cantina', 'Cooking class ribollita'],
      badge: 'Bestseller'
    },
    {
      id: 'oltrarno-wine-experience',
      title: 'Oltrarno Wine & Food Walking',
      location: 'Oltrarno + Santo Spirito',
      duration: '3 ore',
      groupSize: 'Max 6 persone',
      price: 75,
      originalPrice: 95,
      rating: 5.0,
      reviews: 187,
      type: 'Wine + Artigiani',
      highlights: ['5 wine bar autentici', 'Botteghe artigiane attive', 'Aperitivo vista Arno', 'Formaggi pecorini DOP'],
      badge: 'Autentico'
    },
    {
      id: 'chianti-countryside-tour',
      title: 'Chianti Classico & Villa Medicea',
      location: 'Campagna Toscana',
      duration: '6 ore',
      groupSize: 'Max 12 persone',
      price: 150,
      originalPrice: 190,
      rating: 4.8,
      reviews: 156,
      type: 'Day Trip + Degustazioni',
      highlights: ['2 cantine storiche', 'Pranzo in villa', 'Greve in Chianti borgo', 'Olio extravergine DOP'],
      badge: 'Premium'
    }
  ]

  const foodSpecialties = [
    {
      categoria: 'Primi Piatti Toscani',
      descrizione: 'I pilastri della cucina fiorentina che non trovate altrove',
      items: [
        { nome: 'Ribollita', prezzo: '€8-12', descrizione: 'Zuppa di cavolo nero, fagioli, pane toscano. Due volte cotta.', luogo: 'Trattoria Mario, Osteria Santo Spirito' },
        { nome: 'Pappa al Pomodoro', prezzo: '€7-11', descrizione: 'Pane toscano, pomodoro, basilico. Semplicità perfetta.', luogo: 'Il Latini, Sostanza' },
        { nome: 'Pici Cacio e Pepe Toscani', prezzo: '€10-14', descrizione: 'Pasta fatta a mano, pecorino di Pienza, pepe nero.', luogo: 'Osteria di Giovanni, All\'Antico Ristoro' },
        { nome: 'Acquacotta Maremmana', prezzo: '€9-13', descrizione: 'Zuppa di verdure con uovo pochè e pecorino.', luogo: 'Trattoria 13 Gobbi, Da Rocco' }
      ]
    },
    {
      categoria: 'Carni e Secondi Storici',
      descrizione: 'La tradizione della macelleria toscana che ha fatto storia',
      items: [
        { nome: 'Bistecca alla Fiorentina', prezzo: '€45-60/kg', descrizione: 'Chianina IGP, 3cm spessore, cottura al sangue. Solo sale.', luogo: 'Buca Lapi, Il Latini, Sostanza' },
        { nome: 'Peposo all\'Impruneta', prezzo: '€16-22', descrizione: 'Spezzatino di manzo al Chianti con pepe nero. Ricetta fornaciai.', luogo: 'Trattoria Mario, Osteria Santo Spirito' },
        { nome: 'Arista di Maiale al Latte', prezzo: '€14-18', descrizione: 'Lonza di maiale cotta nel latte con rosmarino.', luogo: 'Il Latini, Trattoria 13 Gobbi' },
        { nome: 'Lampredotto', prezzo: '€4-6', descrizione: 'Trippa di vitello in panino con salsa verde. Street food storico.', luogo: 'Nerbone (Mercato), Da Vincenzo' }
      ]
    },
    {
      categoria: 'Dolci e Tradizioni',
      descrizione: 'I sapori dolci che accompagnano la vita fiorentina da secoli',
      items: [
        { nome: 'Schiacciata alla Fiorentina', prezzo: '€3-5', descrizione: 'Dolce di Carnevale con ricotta, zucchero a velo, giglio.', luogo: 'Pasticceria Robiglio, Dolci & Dolcezze' },
        { nome: 'Cantucci e Vin Santo', prezzo: '€6-9', descrizione: 'Biscotti alle mandorle + vino dolce. Rituale toscano.', luogo: 'Cantinetta Antinori, Procacci' },
        { nome: 'Gelato Artigianale', prezzo: '€2.50-4', descrizione: 'Vivoli dal 1930, crema fiorentina con tuorli d\'uovo.', luogo: 'Vivoli, La Carraia, Gelateria dei Neri' },
        { nome: 'Zuccotto', prezzo: '€5-7', descrizione: 'Semifreddo a cupola con pan di Spagna, ricotta, cioccolato.', luogo: 'Pasticceria Robiglio' }
      ]
    }
  ]

  const wineRegions = [
    {
      zona: 'Chianti Classico DOCG',
      caratteristiche: 'Il re dei vini toscani dal Gallo Nero',
      vini: [
        { nome: 'Chianti Classico', carattere: 'Sangiovese puro, tannini eleganti', abbinamento: 'Bistecca fiorentina, peposo', prezzo: '€15-35' },
        { nome: 'Chianti Classico Riserva', carattere: '24 mesi invecchiamento, complesso', abbinamento: 'Arista al latte, formaggi stagionati', prezzo: '€25-60' }
      ]
    },
    {
      zona: 'Brunello di Montalcino',
      caratteristiche: 'Il vino italiano più prestigioso al mondo',
      vini: [
        { nome: 'Rosso di Montalcino', carattere: 'Sangiovese giovane, fruttato', abbinamento: 'Pasta al cinghiale, salumi', prezzo: '€18-30' },
        { nome: 'Brunello di Montalcino', carattere: '5 anni invecchiamento, leggendario', abbinamento: 'Carni rosse importanti, tartufo', prezzo: '€40-200' }
      ]
    },
    {
      zona: 'Vernaccia di San Gimignano',
      caratteristiche: 'Il primo vino DOC d\'Italia (1966), bianco storico',
      vini: [
        { nome: 'Vernaccia Classica', carattere: 'Bianco secco, minerale, sapido', abbinamento: 'Antipasti toscani, pesce', prezzo: '€12-20' },
        { nome: 'Vernaccia Riserva', carattere: 'Più struttura, note di miele', abbinamento: 'Formaggi freschi, verdure', prezzo: '€16-28' }
      ]
    }
  ]

  const tourItinerary = [
    {
      tappa: '1. Mercato Centrale',
      durata: '75min',
      attivita: 'Esplorazione storica',
      descrizione: 'Tour del mercato del 1874, degustazione salumi, formaggi, olio EVO con produttori diretti'
    },
    {
      tappa: '2. Nerbone 1872',
      durata: '30min', 
      attivita: 'Lampredotto experience',
      descrizione: 'Il panino più antico di Firenze, trippa di vitella con salsa verde, tradizione operaia'
    },
    {
      tappa: '3. Cantinetta Antinori',
      durata: '60min',
      attivita: 'Degustazione Chianti',
      descrizione: 'Famiglia Antinori da 26 generazioni, Chianti Classico con tagliere toscano'
    },
    {
      tappa: '4. Trattoria Mario', 
      durata: '90min',
      attivita: 'Pranzo tradizionale',
      descrizione: 'Ribollita, bistecca fiorentina (condivisa), peposo all\'Impruneta con contorni'
    },
    {
      tappa: '5. Bottega Artigiana',
      durata: '20min',
      attivita: 'Pelletteria Oltrarno',
      descrizione: 'Visita bottega famiglia Scuola del Cuoio, lavorazione a mano tradizionale'
    },
    {
      tappa: '6. Ponte Vecchio Aperitivo',
      durata: '45min',
      attivita: 'Sunset con vista',
      descrizione: 'Aperitivo vista Arno con Vernaccia San Gimignano e cicchetti toscani'
    }
  ]

  const localMarkets = [
    {
      nome: 'Mercato Centrale',
      zona: 'San Lorenzo',
      specialita: 'Food hall + mercato tradizionale',
      orari: 'Piano terra: 7-14, Piano primo: 10-24',
      highlights: 'Nerbone 1872, Perini salumi, Da Rocco trippaio',
      segreto: 'Vai alle 7:30 per vedere l\'apertura con i commercianti'
    },
    {
      nome: 'Mercato di Sant\'Ambrogio',
      zona: 'Santa Croce',
      specialita: 'Mercato di quartiere autentico',
      orari: 'Lun-Sab 7-14',
      highlights: 'Frutta locale, verdure stagionali, anziani del quartiere',
      segreto: 'Sabato: il miglior pesce fresco di Firenze da Viareggio'
    },
    {
      nome: 'Mercato delle Pulci',
      zona: 'Piazza dei Ciompi',
      specialita: 'Antiquariato e vintage',
      orari: 'Tutti i giorni 9-19',
      highlights: 'Oggetti d\'epoca, libri antichi, curiosità',
      segreto: 'Lunedì mattina: nuovi arrivi dai commercianti'
    },
    {
      nome: 'Mercato di Santo Spirito',
      zona: 'Oltrarno',
      specialita: 'Biologico e artigianato',
      orari: 'Seconda domenica del mese',
      highlights: 'Prodotti bio locali, artigianato contemporaneo',
      segreto: 'L\'unico mercato bio genuino della città'
    }
  ]

  const seasonalSpecialties = [
    {
      stagione: 'Primavera (Mar-Mag)',
      piatti: ['Carciofi alla Giudia', 'Fave fresche e Pecorino', 'Pici con Asparagi', 'Fragole di Tortona'],
      descrizione: 'Verdure primaverili e primi prodotti dell\'orto toscano'
    },
    {
      stagione: 'Estate (Giu-Ago)',
      piatti: ['Panzanella', 'Pomodori del Piennolo', 'Gelato Artigianale', 'Prosciutto e Melone'],
      descrizione: 'Piatti freschi per combattere il caldo fiorentino'
    },
    {
      stagione: 'Autunno (Set-Nov)',
      piatti: ['Castagne del Mugello', 'Funghi Porcini', 'Vino Novello', 'Cacciagione'],
      descrizione: 'Sapori del bosco toscano e vendemmia in tavola'
    },
    {
      stagione: 'Inverno (Dic-Feb)',
      piatti: ['Ribollita caldissima', 'Peposo all\'Impruneta', 'Vin Brulè', 'Zuccotto Natalizio'],
      descrizione: 'Comfort food toscano per scaldarsi dal freddo'
    }
  ]

  const cookingClasses = [
    {
      nome: 'Cooking Class Tradizionale',
      durata: '4 ore',
      partecipanti: 'Max 8 persone',
      prezzo: '€89',
      include: 'Ribollita + Pici fatti a mano + Cantucci',
      location: 'Cucina privata Oltrarno',
      segreto: 'Ricette di Nonna Giulia, 87 anni, vera fiorentina'
    },
    {
      nome: 'Pasta & Wine Experience',
      durata: '3 ore',
      partecipanti: 'Max 6 persone',  
      prezzo: '€75',
      include: 'Pici + Ravioli ricotta e spinaci + 3 vini',
      location: 'Cantina storica centro',
      segreto: 'Abbinamenti vino-pasta spiegati da sommelier AIS'
    },
    {
      nome: 'Meat & Grill Master',
      durata: '5 ore',
      partecipanti: 'Max 10 persone',
      prezzo: '€125',
      include: 'Bistecca + Salsicce + Verdure grigliate',
      location: 'Giardino privato colline',
      segreto: 'Macellai di 4° generazione insegnano i tagli'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/firenze-mercato-centrale-food.webp"
            alt="Food Tour Firenze Mercato"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Food Tour Firenze
              <span className="block text-orange-300">Sapori Toscani</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Scopri la vera cucina fiorentina con guide locali: dal Mercato Centrale alle 
              trattorie storiche. Bistecca, Chianti e tradizioni che solo i fiorentini conoscono.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tours" className="btn-primary bg-orange-600 hover:bg-orange-700">
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
              <Utensils className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guide Fiorentine Doc</h3>
              <p className="text-gray-600">Fiorentini veri che conoscono ogni segreto culinario della città</p>
            </div>
            <div className="flex flex-col items-center">
              <Wine className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luoghi Autentici</h3>
              <p className="text-gray-600">Mercati storici, trattorie familiari e cantine nascoste</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tradizione Medicea</h3>
              <p className="text-gray-600">Ricette che risalgono al Rinascimento e alla corte dei Medici</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tour Gastronomici Fiorentini
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esperienze culinarie uniche per scoprire la vera anima gastronomica toscana
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/firenze-mercato-centrale-food.webp"
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

      {/* Food Specialties */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialità Fiorentine Autentiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I piatti iconici che assaggerai durante i nostri tour gastronomici toscani
            </p>
          </div>

          <div className="space-y-12">
            {foodSpecialties.map((categoria, index) => (
              <div key={index} className="card p-8 bg-orange-50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{categoria.categoria}</h3>
                  <p className="text-gray-600">{categoria.descrizione}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoria.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{item.nome}</h4>
                        <span className="text-orange-600 font-bold text-sm">{item.prezzo}</span>
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

      {/* Wine Regions */}
      <section className="py-16 bg-purple-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vini Toscani e Abbinamenti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I vini delle colline toscane che accompagnano perfettamente la cucina fiorentina
            </p>
          </div>

          <div className="space-y-8">
            {wineRegions.map((regione, index) => (
              <div key={index} className="card p-6 bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{regione.zona}</h3>
                  <p className="text-gray-600">{regione.caratteristiche}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {regione.vini.map((vino, idx) => (
                    <div key={idx} className="border-l-4 border-purple-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{vino.nome}</h4>
                        <span className="text-orange-600 font-bold text-sm">{vino.prezzo}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{vino.carattere}</p>
                      <div className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded">
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
              Esempio di Itinerario: Mercato & Tradizioni
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4.5 ore di pura esperienza gastronomica nel cuore della Firenze autentica
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {tourItinerary.map((stop, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{stop.tappa}</h3>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">{stop.durata}</span>
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

      {/* Local Markets */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mercati Storici di Firenze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I mercati autentici dove fanno la spesa i fiorentini veri
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {localMarkets.map((mercato, index) => (
              <div key={index} className="card p-6 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{mercato.nome}</h3>
                  <span className="text-orange-600 font-bold text-sm">{mercato.zona}</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-orange-700">Specialità: </span>{mercato.specialita}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-orange-700">Orari: </span>{mercato.orari}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-orange-700">Highlights: </span>{mercato.highlights}
                  </div>
                </div>
                <div className="bg-gold-50 p-3 rounded-lg">
                  <div className="text-xs text-gold-700">
                    <span className="font-bold">Segreto local: </span>{mercato.segreto}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooking Classes */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cooking Classes Autentiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Impara i segreti della cucina toscana dalle nonne fiorentine
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cookingClasses.map((classe, index) => (
              <div key={index} className="card p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{classe.nome}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div><span className="font-medium">Durata:</span> {classe.durata}</div>
                  <div><span className="font-medium">Partecipanti:</span> {classe.partecipanti}</div>
                  <div><span className="font-medium">Location:</span> {classe.location}</div>
                </div>
                <div className="text-lg font-bold text-orange-600 mb-3">€{classe.prezzo}</div>
                <div className="text-sm text-gray-600 mb-4">{classe.include}</div>
                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <div className="text-xs text-purple-700">
                    <span className="font-bold">Segreto: </span>{classe.segreto}
                  </div>
                </div>
                <Link href="/contatti" className="btn-primary bg-orange-600 hover:bg-orange-700 w-full">
                  Prenota Classe
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Specialties */}
      <section className="py-16 bg-orange-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialità Stagionali Toscane
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I sapori che cambiano con le stagioni: quando venire per assaggiare cosa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalSpecialties.map((stagione, index) => (
              <div key={index} className="card p-6 text-center bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{stagione.stagione}</h3>
                <div className="space-y-2 mb-4">
                  {stagione.piatti.map((piatto, idx) => (
                    <div key={idx} className="text-sm text-orange-700 bg-orange-100 px-2 py-1 rounded">
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
      <section className="py-16 bg-gradient-to-br from-orange-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h2 className="text-3xl font-bold mb-4">
            Assaggia la Vera Toscana
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Non limitarti ai ristoranti turistici. Scopri dove mangiano davvero i fiorentini: 
            dai mercati storici alle trattorie di famiglia tramandate da generazioni medicee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Prenota Food Tour
            </Link>
            <Link href="/guide/firenze-3-giorni" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Guida Firenze Completa
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}