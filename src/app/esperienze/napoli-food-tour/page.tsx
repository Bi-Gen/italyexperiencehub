import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, Utensils, Wine, Camera, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Food Tour Napoli + Underground | Pizza, Street Food, Napoli Sotterranea 2025',
  description: 'Food Tour Napoli autentico + Napoli Sotterranea: Da Michele, cuoppo, sfogliatelle, catacombe San Gennaro con napoletani veri. Esperienza gastronomica unica.',
  keywords: ['food tour Napoli', 'tour gastronomico Napoli', 'pizza napoletana tour', 'Napoli sotterranea', 'catacombe San Gennaro', 'street food Napoli', 'Da Michele', 'guide napoletane'],
}

export default function NapoliFoodTourPage() {
  const featuredTours = [
    {
      id: 'napoli-food-underground',
      title: 'Food Tour + Napoli Sotterranea',
      location: 'Centro + Sanità + Underground',
      duration: '6 ore',
      groupSize: 'Max 8 persone',
      price: 120,
      originalPrice: 150,
      rating: 4.9,
      reviews: 267,
      type: 'Tour Completo',
      highlights: ['Pizza Da Michele autentica', 'Napoli Sotterranea guided', 'Cuoppo Quartieri Spagnoli', 'Sfogliatelle calde Attanasio'],
      badge: 'Bestseller'
    },
    {
      id: 'street-food-quartieri',
      title: 'Street Food & Quartieri Popolari',
      location: 'Quartieri Spagnoli + Sanità',
      duration: '4 ore',
      groupSize: 'Max 6 persone',
      price: 85,
      originalPrice: 110,
      rating: 5.0,
      reviews: 198,
      type: 'Street Food Tour',
      highlights: ['5 stop street food', 'Quartieri autentici', 'Guide napoletane doc', 'Ragù nonna experience'],
      badge: 'Autentico'
    },
    {
      id: 'pizza-making-class',
      title: 'Pizza Making Class + Degustazione',
      location: 'Centro Storico',
      duration: '3.5 ore',
      groupSize: 'Max 10 persone',
      price: 95,
      originalPrice: 125,
      rating: 4.8,
      reviews: 143,
      type: 'Cooking Class',
      highlights: ['Impasto pizza hands-on', 'Forno a legna tradizionale', 'Pizzaiolo napoletano maestro', 'Degustazione vini Campania'],
      badge: 'Hands-on'
    }
  ]

  const foodSpecialties = [
    {
      categoria: 'Pizza e Lievitati',
      descrizione: 'I simboli della panificazione napoletana patrimonio UNESCO',
      items: [
        { nome: 'Pizza Napoletana', prezzo: '€4-6', descrizione: 'Solo Margherita e Marinara tradizionali, forno a legna 485°C.', luogo: 'Da Michele, Sorbillo, Starita' },
        { nome: 'Pizza Fritta', prezzo: '€3-5', descrizione: 'Impasto fritto ripieno ricotta e salame. Invenzione dopoguerra.', luogo: 'Starita, Concettina ai Tre Santi' },
        { nome: 'Montanara', prezzo: '€5-7', descrizione: 'Pizza fritta poi passata al forno. Croccante e soffice.', luogo: 'Sorbillo, Pellone' },
        { nome: 'Calzone', prezzo: '€6-8', descrizione: 'Pizza chiusa a mezzaluna, ricotta e salame tradizionali.', luogo: 'Attilio, Di Matteo' }
      ]
    },
    {
      categoria: 'Street Food Storico',
      descrizione: 'I sapori di strada che raccontano la Napoli popolare da secoli',
      items: [
        { nome: 'Cuoppo Napoletano', prezzo: '€3-5', descrizione: 'Frittura mista in cartoccio: arancini, crocchè, baccalà.', luogo: 'Friggi e Mangia, Cuoppo Napoletano' },
        { nome: 'Panzarotto', prezzo: '€2-3', descrizione: 'Pasta pizza fritta ripiena mozzarella e pomodoro.', luogo: 'Polleria Caputo, Da Zia Esterina' },
        { nome: 'Arancino Napoletano', prezzo: '€2-4', descrizione: 'Riso al ragù, mozzarella, piselli. Più grande del siciliano.', luogo: 'Rosticceria Giuliano' },
        { nome: 'Graffa', prezzo: '€1-2', descrizione: 'Ciambella fritta zuccherata. Bombolone napoletano tradizionale.', luogo: 'Pasticceria Capparelli' }
      ]
    },
    {
      categoria: 'Dolci della Tradizione',
      descrizione: 'I capolavori della pasticceria partenopea tramandati dai monasteri',
      items: [
        { nome: 'Sfogliatella', prezzo: '€1.50-2', descrizione: 'Riccia o frolla, ripieno ricotta e canditi. 540 strati sfoglia.', luogo: 'Pintauro, Scaturchio, Attanasio' },
        { nome: 'Pastiera', prezzo: '€3-5', descrizione: 'Dolce pasquale grano cotto, ricotta, acqua fiori arancio.', luogo: 'Mary, Scaturchio, Bellavia' },
        { nome: 'Babà al Rum', prezzo: '€2-3', descrizione: 'Pasta lievitata imbevuta rum. Spugnoso e profumato.', luogo: 'Attanasio, Scaturchio' },
        { nome: 'Struffoli', prezzo: '€4-6/kg', descrizione: 'Palline fritte nel miele. Dolce natalizio immancabile.', luogo: 'Scaturchio, Gay-Odin' }
      ]
    }
  ]

  const undergroundSites = [
    {
      sito: 'Napoli Sotterranea',
      descrizione: 'Acquedotto greco-romano sotto Piazza San Gaetano',
      highlights: ['Percorso 40 metri sottoterra', 'Acquedotto del 400 a.C.', 'Rifugi II Guerra Mondiale', 'Teatro Romano nascosto'],
      durata: '1.5 ore',
      difficolta: 'Media - spazi stretti',
      prezzo: '€10 adulti'
    },
    {
      sito: 'Catacombe San Gennaro',
      descrizione: 'Il più importante sito paleocristiano del Sud Italia',  
      highlights: ['Basilica sotterranea IV secolo', 'Affreschi paleocristiani unici', 'Tomba San Gennaro originale', 'Mosaici bizantini'],
      durata: '1 ora',
      difficolta: 'Facile - ampi spazi',
      prezzo: '€9 adulti'
    },
    {
      sito: 'Tunnel Borbonico',
      descrizione: 'Galleria di fuga di Re Ferdinando II di Borbone',
      highlights: ['650 metri tunnel 1853', 'Auto e moto d\'epoca', 'Rifugio antiaereo', 'Via di fuga reale'],
      durata: '1.5 ore', 
      difficolta: 'Facile - percorso piano',
      prezzo: '€12 adulti'
    }
  ]

  const tourItinerary = [
    {
      tappa: '1. Sfogliatelle Attanasio',
      durata: '30min',
      attivita: 'Colazione napoletana',
      descrizione: 'Sfogliatelle appena sfornate vicino alla stazione, tradizione dal 1930'
    },
    {
      tappa: '2. Spaccanapoli Walking',
      durata: '45min', 
      attivita: 'Centro storico UNESCO',
      descrizione: 'Decumano inferiore, San Gregorio Armeno, storia della città greco-romana'
    },
    {
      tappa: '3. Pizza Da Michele',
      durata: '60min',
      attivita: 'Pizza experience',
      descrizione: 'La pizzeria più famosa al mondo, solo Margherita e Marinara dal 1870'
    },
    {
      tappa: '4. Napoli Sotterranea', 
      durata: '90min',
      attivita: 'Underground tour',
      descrizione: 'Acquedotto greco-romano, rifugi seconda guerra, teatro romano nascosto'
    },
    {
      tappa: '5. Cuoppo Quartieri Spagnoli',
      durata: '30min',
      attivita: 'Street food autentico',
      descrizione: 'Frittura napoletana in cartoccio tra i vicoli più colorati della città'
    },
    {
      tappa: '6. Caffè Sospeso + Limoncello',
      durata: '30min',
      attivita: 'Tradizioni napoletane',
      descrizione: 'Caffè della solidarietà e limoncello artigianale per chiudere in bellezza'
    }
  ]

  const localGuides = [
    {
      nome: 'Gennaro Esposito',
      specialita: 'Food + Storia',
      anni: '15 anni esperienza',
      quartiere: 'Nato Quartieri Spagnoli',
      lingue: 'Italiano, Inglese, Spagnolo',
      segreto: 'Conosce ogni vicolo e ogni storia delle pizzerie storiche'
    },
    {
      nome: 'Maria Russo',
      specialita: 'Dolci + Tradizioni',
      anni: '12 anni esperienza',  
      quartiere: 'Nata Sanità',
      lingue: 'Italiano, Inglese, Francese',
      segreto: 'Nipote di pasticciera, ha le chiavi dei forni storici'
    },
    {
      nome: 'Antonio Borrelli',
      specialita: 'Underground + Archeologia',
      anni: '20 anni esperienza',
      quartiere: 'Centro Storico',
      lingue: 'Italiano, Inglese, Tedesco',
      segreto: 'Archeologo, conosce ogni segreto della Napoli sotterranea'
    }
  ]

  const cookingClasses = [
    {
      nome: 'Pizza Napoletana Masterclass',
      durata: '4 ore',
      partecipanti: 'Max 8 persone',
      prezzo: '€95',
      include: 'Impasto, cottura, degustazione 3 pizze',
      maestro: 'Pizzaiolo 3° generazione famiglia storica',
      location: 'Forno a legna autentico Centro Storico'
    },
    {
      nome: 'Sfogliatelle & Dolci Workshop',
      durata: '3 ore',
      partecipanti: 'Max 6 persone',
      prezzo: '€85',
      include: 'Sfoglia 540 strati + ripieno + cottura',
      maestro: 'Pasticciera napoletana 4° generazione',
      location: 'Pasticceria storica con forno tradizionale'
    },
    {
      nome: 'Ragù Napoletano Experience',
      durata: '5 ore',
      partecipanti: 'Max 10 persone',
      prezzo: '€110',
      include: 'Ragù 6 ore + pasta fresca + vino',
      maestro: 'Nonna napoletana 78 anni, ricetta famiglia',
      location: 'Casa privata con terrazza vista Vesuvio'
    }
  ]

  const seasonalSpecialties = [
    {
      stagione: 'Inverno (Dic-Feb)',
      piatti: ['Struffoli di Natale', 'Capitone fritto', 'Castagne del Vesuvio', 'Vin Brulè speziato'],
      descrizione: 'Sapori caldi per scaldarsi dal freddo napoletano'
    },
    {
      stagione: 'Primavera (Mar-Mag)',
      piatti: ['Pastiera di Pasqua', 'Carciofi ripieni', 'Fave e cicorie', 'Fragoline di bosco'],
      descrizione: 'Rinascita primaverile con dolci pasquali e verdure fresche'
    },
    {
      stagione: 'Estate (Giu-Ago)',
      piatti: ['Delizia al limone', 'Pesce azzurro fritto', 'Granita di caffè', 'Parmigiana fredda'],
      descrizione: 'Freschezza estiva con limoni della costiera e pesce del golfo'
    },
    {
      stagione: 'Autunno (Set-Nov)',
      piatti: ['Castagne arrosto', 'Funghi porcini', 'Uva e vino novello', 'Mostaccioli'],
      descrizione: 'Sapori autunnali dalle colline vesuviane e irpine'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/napoli-sotterranea-catacombe-san-gennaro.avif"
            alt="Food Tour Napoli e Underground"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Food Tour Napoli
              <span className="block text-blue-300">+ Napoli Sotterranea</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              L'esperienza completa: pizza napoletana autentica, street food nei quartieri popolari 
              e i segreti 40 metri sottoterra. Con guide napoletane doc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tours" className="btn-primary bg-blue-600 hover:bg-blue-700">
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
              <Utensils className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guide Napoletane Doc</h3>
              <p className="text-gray-600">Napoletani veri che conoscono ogni segreto culinario e storico</p>
            </div>
            <div className="flex flex-col items-center">
              <Wine className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luoghi Autentici</h3>
              <p className="text-gray-600">Pizzerie storiche, street food di quartiere e underground nascosto</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tradizione Millenaria</h3>
              <p className="text-gray-600">2500 anni di storia culinaria da greci e romani a oggi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tour Gastronomici Napoletani
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esperienze uniche che combinano il meglio della cucina partenopea con i misteri sotterranei
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/napoli-ragu-napoletano-nonna.jpg"
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      tour.badge === 'Bestseller' ? 'bg-blue-500' :
                      tour.badge === 'Autentico' ? 'bg-red-600' :
                      'bg-green-600'
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
                    <span className="px-2 py-1 rounded text-xs font-medium text-white bg-blue-600">
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
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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
                    <Link href="/contatti" className="btn-primary text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700">
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
              Specialità Napoletane Autentiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I sapori iconici che assaggerai durante i nostri tour gastronomici partenopei
            </p>
          </div>

          <div className="space-y-12">
            {foodSpecialties.map((categoria, index) => (
              <div key={index} className="card p-8 bg-blue-50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{categoria.categoria}</h3>
                  <p className="text-gray-600">{categoria.descrizione}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoria.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{item.nome}</h4>
                        <span className="text-blue-600 font-bold text-sm">{item.prezzo}</span>
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

      {/* Underground Sites */}
      <section className="py-16 bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Napoli Sotterranea: 40 Metri di Storia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La città sotto la città: acquedotti greci, catacombe paleocristiane e rifugi segreti
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {undergroundSites.map((sito, index) => (
              <div key={index} className="card p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sito.sito}</h3>
                <p className="text-gray-600 mb-4 text-sm">{sito.descrizione}</p>
                
                <div className="space-y-2 mb-4">
                  {sito.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Durata:</span>
                    <span className="font-medium">{sito.durata}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficoltà:</span>
                    <span className="font-medium">{sito.difficolta}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prezzo:</span>
                    <span className="font-bold text-red-600">{sito.prezzo}</span>
                  </div>
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
              Itinerario Completo: Food + Underground
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 ore di esperienza autentica tra sapori napoletani e misteri sotterranei
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {tourItinerary.map((stop, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{stop.tappa}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{stop.durata}</span>
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

      {/* Local Guides */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le Nostre Guide Napoletane
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Napoletani doc che vivono la città e ne conoscono ogni segreto culinario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {localGuides.map((guida, index) => (
              <div key={index} className="card p-6 text-center bg-white">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{guida.nome.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{guida.nome}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div><span className="font-medium">Specialità:</span> {guida.specialita}</div>
                  <div><span className="font-medium">Esperienza:</span> {guida.anni}</div>
                  <div><span className="font-medium">Quartiere:</span> {guida.quartiere}</div>
                  <div><span className="font-medium">Lingue:</span> {guida.lingue}</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-xs text-blue-700">
                    <span className="font-bold">Il suo segreto: </span>{guida.segreto}
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
              Impara i segreti della cucina napoletana dai maestri pizzaioli e nonne doc
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cookingClasses.map((classe, index) => (
              <div key={index} className="card p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{classe.nome}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div><span className="font-medium">Durata:</span> {classe.durata}</div>
                  <div><span className="font-medium">Partecipanti:</span> {classe.partecipanti}</div>
                  <div><span className="font-medium">Include:</span> {classe.include}</div>
                </div>
                <div className="text-lg font-bold text-blue-600 mb-3">€{classe.prezzo}</div>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="mb-2"><span className="font-medium">Maestro:</span> {classe.maestro}</div>
                  <div><span className="font-medium">Location:</span> {classe.location}</div>
                </div>
                <Link href="/contatti" className="btn-primary bg-blue-600 hover:bg-blue-700 w-full">
                  Prenota Classe
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Specialties */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialità Stagionali Napoletane
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
                    <div key={idx} className="text-sm text-blue-700 bg-blue-100 px-2 py-1 rounded">
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
      <section className="py-16 bg-gradient-to-br from-blue-600 to-red-600 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">
            Vivi la Vera Napoli
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Non limitarti ai ristoranti turistici. Scopri dove mangiano davvero i napoletani: 
            dai vicoli storici ai segreti sotterranei, con guide nate e cresciute a Napoli.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Prenota Food Tour
            </Link>
            <Link href="/guide/napoli-3-giorni" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Guida Napoli Completa
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}