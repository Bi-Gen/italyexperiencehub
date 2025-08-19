import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Plane, Car, Ship, Mountain, Waves, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sicilia: Guida Turismo 2025 | Vacanze, Cosa Vedere, Itinerari',
  description: 'Sicilia guida completa 2025: Etna, Taormina, Palermo, spiagge, borghi. Itinerari, quando andare, come arrivare. La guida definitiva per le vacanze in Sicilia.',
  keywords: ['Sicilia turismo', 'vacanze Sicilia', 'Sicilia cosa vedere', 'Sicilia guida', 'Sicilia 2025', 'Etna', 'Taormina', 'Palermo', 'spiagge Sicilia', 'borghi Sicilia', 'quando andare Sicilia']
}

export default function SiciliaPage() {
  const quickFacts = [
    { label: 'Superficie', value: '25.711 km²', icon: MapPin },
    { label: 'Abitanti', value: '4.8M abitanti', icon: Users },
    { label: 'Aeroporti', value: 'Catania, Palermo', icon: Plane },
    { label: 'Periodo Migliore', value: 'Mag-Ott, Mar-Apr', icon: Star }
  ]

  const highlights = [
    {
      title: 'Vulcano Etna',
      description: 'Il vulcano attivo più alto d\'Europa',
      location: 'Catania',
      image: '/images/destinations/sicilia-etna-panorama.webp',
      features: ['3.350m altezza', 'Patrimonio UNESCO', 'Escursioni guidate']
    },
    {
      title: 'Taormina',
      description: 'Perla del Mediterraneo con teatro greco',
      location: 'Messina',
      image: '/images/blog/sicilia-borghi-medievali-2025.webp',
      features: ['Teatro antico', 'Vista mozzafiato', 'Corso Umberto']
    },
    {
      title: 'Spiagge Paradise',
      description: 'Acque cristalline e spiagge da sogno',
      location: 'Tutta l\'isola',
      image: '/images/experiences/sicilia-spiagge-cristalline.webp',
      features: ['San Vito Lo Capo', 'Scala dei Turchi', 'Isole Egadi']
    }
  ]

  const regions = [
    {
      name: 'Sicilia Orientale',
      cities: 'Catania, Taormina, Siracusa',
      highlights: 'Etna, Teatro Greco, Ortigia',
      bestFor: 'Storia antica e vulcano',
      days: '3-4 giorni'
    },
    {
      name: 'Sicilia Occidentale', 
      cities: 'Palermo, Cefalù, Trapani',
      highlights: 'Cappella Palatina, Duomo, Saline',
      bestFor: 'Arte araba e spiagge',
      days: '3-4 giorni'
    },
    {
      name: 'Sicilia Centrale',
      cities: 'Agrigento, Enna, Piazza Armerina',
      highlights: 'Valle dei Templi, Villa Romana',
      bestFor: 'Archeologia e tradizioni',
      days: '2-3 giorni'
    }
  ]

  const practicalInfo = [
    {
      title: 'Come Arrivare',
      icon: Plane,
      items: [
        'Aereo: Catania-Fontanarossa (più collegamenti)',
        'Aereo: Palermo-Falcone Borsellino (ovest isola)', 
        'Traghetto: da Villa San Giovanni (3h auto)',
        'Auto: A3 Salerno-Reggio Calabria + traghetto'
      ]
    },
    {
      title: 'Muoversi in Sicilia',
      icon: Car,
      items: [
        'Auto a noleggio: indispensabile per libertà',
        'Treni: Circumetnea per tour Etna panoramico',
        'Autobus AST: collegamenti città principali',
        'Taxi/transfer: costosi ma comodi per aeroporti'
      ]
    },
    {
      title: 'Quando Visitare',
      icon: Sun,
      items: [
        'Primavera (Mar-Mag): fioritura, clima perfetto',
        'Estate (Giu-Ago): mare ideale, molto caldo interno',
        'Autunno (Set-Nov): harvest time, meno affollato', 
        'Inverno (Dic-Feb): mite costa, Etna innevato'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/sicilia-hero.webp"
            alt="Sicilia - Etna e Mare"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Sicilia - Isola dei Tesori
            </h1>
            <p className="text-xl lg:text-2xl text-yellow-100 mb-6">
              Vulcani, templi greci, spiagge da sogno e la migliore cucina di strada d'Italia
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Isola del Sud Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mountain className="h-4 w-4" />
                <span>Etna 3.350m</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>7 Siti UNESCO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => {
              const IconComponent = fact.icon
              return (
                <div key={index} className="text-center p-4 bg-orange-50 rounded-xl">
                  <IconComponent className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{fact.value}</div>
                  <div className="text-sm text-gray-600">{fact.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Le Meraviglie della Sicilia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dall'Etna fumante alle spiagge caraibiche, ogni angolo racconta una storia millenaria
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {highlight.location}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                  <div className="space-y-2">
                    {highlight.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Guide */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Come Organizzare il Viaggio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La Sicilia si divide in tre macro-aree, ognuna con caratteristiche uniche
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{region.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-orange-600">Città principali:</span>
                    <p className="text-gray-600">{region.cities}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">Da non perdere:</span>
                    <p className="text-gray-600">{region.highlights}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-600">Ideale per:</span>
                    <p className="text-gray-600">{region.bestFor}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center text-orange-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-medium">{region.days}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-orange-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Informazioni Pratiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutto quello che serve per organizzare il viaggio perfetto in Sicilia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {practicalInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="card p-6 bg-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container-custom text-center">
          <Mountain className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pronto per l'Avventura Siciliana?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Dall'Etna in eruzione ai templi di Agrigento, dalle spiagge di San Vito agli arancini palermitani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/sicilia-7-giorni" className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              Itinerario 7 Giorni
            </Link>
            <Link href="/esperienze/sicilia-street-food" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Street Food Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}