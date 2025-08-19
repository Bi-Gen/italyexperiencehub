import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, MapPin, Ship, Wine, Camera, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tour Gondole e Bacari Venezia | Esperienza Autentica Serenissima',
  description: 'Scopri Venezia con tour gondole autentici e giro bacari con locals. Esperienza completa: navigazione canali, cicchetti, spritz e tradizioni veneziane vere.',
  keywords: ['tour gondole Venezia', 'bacari tour Venezia', 'gondola veneziana', 'cicchetti Venezia', 'spritz tour', 'esperienza autentica Venezia', 'giro bacari', 'tradizioni veneziane'],
}

export default function VeneziaGondoleBacariPage() {
  const featuredExperiences = [
    {
      id: 'gondola-bacari-sunset',
      title: 'Gondola + Bacari Tour al Tramonto',
      location: 'Centro Storico',
      duration: '5 ore',
      groupSize: 'Max 6 persone',
      price: 120,
      originalPrice: 160,
      rating: 4.9,
      reviews: 287,
      type: 'Tour Completo',
      highlights: ['Gondola privata 45min', '4 bacari autentici', 'Guida locale veneziana', 'Tramonto sui canali'],
      badge: 'Bestseller'
    },
    {
      id: 'bacari-hopping-locals',
      title: 'Bacari Hopping con Veneziani Doc',
      location: 'Castello + Cannaregio',
      duration: '3.5 ore',
      groupSize: 'Max 8 persone',
      price: 65,
      originalPrice: 85,
      rating: 5.0,
      reviews: 194,
      type: 'Food Tour',
      highlights: ['5 bacari nascosti', 'Cicchetti illimitati', 'Spritz e vini locali', 'Stories veneziane'],
      badge: 'Autentico'
    },
    {
      id: 'gondola-privata-serenata',
      title: 'Gondola Privata con Serenata',
      location: 'Canal Grande',
      duration: '1 ora',
      groupSize: 'Max 2 persone',
      price: 180,
      originalPrice: 220,
      rating: 4.8,
      reviews: 356,
      type: 'Romantico',
      highlights: ['Gondoliere cantante', 'Percorso romantico', 'Prosecco incluso', 'Foto professionale'],
      badge: 'Romance'
    }
  ]

  const gondolaFeatures = [
    {
      title: 'Storia Millenaria',
      description: 'Ogni gondola è un capolavoro artigianale di 500 anni di tradizione',
      details: ['11 metri di lunghezza', '280 pezzi di 8 legni diversi', '6 mesi di costruzione', 'Peso 700kg']
    },
    {
      title: 'Gondoliere Autentico',
      description: 'I nostri gondolieri sono eredi di una tradizione familiare centenaria',
      details: ['Licenza limitata (425 in tutta Venezia)', 'Addestramento di 2 anni', 'Conoscenza storia locale', 'Dialetto veneziano']
    },
    {
      title: 'Percorsi Esclusivi',
      description: 'Canali segreti che solo i veneziani conoscono',
      details: ['Rio segreti', 'Palazzi storici nascosti', 'Squeri attivi', 'Giardini privati']
    }
  ]

  const bacariSpecialties = [
    {
      categoria: 'Cicchetti Classici',
      items: [
        { nome: 'Baccalà Mantecato', prezzo: '€2', descrizione: 'Cremoso su polenta fritta' },
        { nome: 'Sarde in Saor', prezzo: '€2.50', descrizione: 'Marinate con cipolle e uvetta' },
        { nome: 'Polpette di Carne', prezzo: '€1.50', descrizione: 'Ricetta segreta centenaria' },
        { nome: 'Nervetti', prezzo: '€2', descrizione: 'Tendini in salsa verde' }
      ]
    },
    {
      categoria: 'Vini e Spritz',
      items: [
        { nome: 'Spritz Aperol', prezzo: '€3.50', descrizione: 'Il classico con olive' },
        { nome: 'Ombra Prosecco', prezzo: '€2.50', descrizione: 'Valdobbiadene DOCG' },
        { nome: 'Vino Bianco', prezzo: '€2-4', descrizione: 'Soave, Pinot Grigio del Veneto' },
        { nome: 'Vino Rosso', prezzo: '€3-5', descrizione: 'Valpolicella, Merlot' }
      ]
    },
    {
      categoria: 'Specialità Stagionali',
      items: [
        { nome: 'Moleche (Apr-Mag)', prezzo: '€8', descrizione: 'Granchi molli fritti unici' },
        { nome: 'Carciofi Sant\'Erasmo', prezzo: '€3', descrizione: 'Solo primavera, dalla laguna' },
        { nome: 'Baccalà (Ott-Mar)', prezzo: '€3', descrizione: 'Varie preparazioni invernali' },
        { nome: 'Sarde Fresche (Est)', prezzo: '€2.50', descrizione: 'Appena pescate Adriatico' }
      ]
    }
  ]

  const itineraryStops = [
    {
      tappa: '1. Squero San Trovaso',
      durata: '30min',
      attivita: 'Gondola tradizionale',
      descrizione: 'Inizio con vista sull\'ultimo squero attivo, dove nascono le gondole'
    },
    {
      tappa: '2. Canal Grande',
      durata: '45min', 
      attivita: 'Navigazione storica',
      descrizione: 'Palazzi dorati, Ponte di Rialto, Ca\' Rezzonico dal punto di vista privilegiato'
    },
    {
      tappa: '3. Bacaro Do Spade',
      durata: '30min',
      attivita: 'Aperitivo tradizionale',
      descrizione: 'Il bacaro più antico (1488), baccalà mantecato e prosecco'
    },
    {
      tappa: '4. Rio dei Mendicanti', 
      durata: '20min',
      attivita: 'Canali segreti',
      descrizione: 'Percorso nascosto lontano dai turisti, atmosfera autentica'
    },
    {
      tappa: '5. Bacaro All\'Arco',
      durata: '40min',
      attivita: 'Degustazione gourmet',
      descrizione: 'Cicchetti di alta qualità, frequentato dagli chef veneziani'
    },
    {
      tappa: '6. Tramonto sui canali',
      durata: '30min',
      attivita: 'Photo session',
      descrizione: 'Golden hour perfetto per foto ricordo con gondola e palazzi'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/experiences/venezia-gondole-experience.webp"
            alt="Gondole e Bacari Venezia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Gondole & Bacari
              <span className="block text-blue-300">Venezia Autentica</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Vivi la vera Venezia: naviga i canali segreti in gondola e scopri i bacari 
              dove bevono gli spritz i veneziani veri. Un'esperienza che tocca l'anima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#experiences" className="btn-primary bg-blue-600 hover:bg-blue-700">
                Scopri le Esperienze
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
              <Ship className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gondole Autentiche</h3>
              <p className="text-gray-600">Gondolieri con licenza storica e tradizione familiare centenaria</p>
            </div>
            <div className="flex flex-col items-center">
              <Wine className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bacari Nascosti</h3>
              <p className="text-gray-600">Osterie autentiche frequentate solo da veneziani doc</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guide Locali Vere</h3>
              <p className="text-gray-600">Veneziani nati in laguna che raccontano la loro città</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section id="experiences" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Esperienze Veneziane Autentiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinazioni uniche di tradizioni millenarie per vivere la Serenissima come un locale
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredExperiences.map((experience) => (
              <div key={experience.id} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/experiences/venezia-gondole-experience.webp"
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      experience.badge === 'Bestseller' ? 'bg-blue-500' :
                      experience.badge === 'Autentico' ? 'bg-green-600' :
                      'bg-pink-500'
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
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 rounded text-xs font-medium text-white bg-blue-600">
                      {experience.type}
                    </span>
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
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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

      {/* Gondola Features */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              La Magia delle Gondole Autentiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni gondola è un capolavoro artigianale che porta avanti 1000 anni di tradizione veneziana
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {gondolaFeatures.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <Ship className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bacari Specialties */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialità dei Bacari Autentici
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I cicchetti e i vini che assaggerai nei veri bacari veneziani, lontani dai tourist trap
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {bacariSpecialties.map((categoria, index) => (
              <div key={index} className="card p-6 bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{categoria.categoria}</h3>
                <div className="space-y-4">
                  {categoria.items.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{item.nome}</h4>
                        <span className="text-blue-600 font-bold">{item.prezzo}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.descrizione}</p>
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
              Esempio di Itinerario Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 ore di esperienza autentica tra gondole storiche e bacari nascosti
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {itineraryStops.map((stop, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">
            Vivi la Venezia dei Sogni
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Un'esperienza che unisce la magia delle gondole storiche all'autenticità 
            dei bacari veneziani. Ricordi che dureranno per sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Prenota Esperienza
            </Link>
            <Link href="/guide/venezia-4-giorni" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Guida Completa Venezia
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}