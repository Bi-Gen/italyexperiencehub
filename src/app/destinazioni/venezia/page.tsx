import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Ship, Waves, Camera, AlertTriangle, Train, Plane } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Venezia: Guida Turismo 2025 | Visitare la Serenissima, Come Arrivare',
  description: 'Venezia guida completa 2025: San Marco, gondole, acqua alta, trasporti, bacari. Come visitare la Serenissima, quando andare, dove alloggiare.',
  keywords: ['Venezia turismo', 'visitare Venezia', 'Venezia guida', 'Serenissima', 'Venezia 2025', 'San Marco', 'Canal Grande', 'gondole Venezia', 'acqua alta Venezia', 'bacari Venezia', 'trasporti Venezia']
}

export default function VeneziaPage() {
  const quickFacts = [
    { label: 'Popolazione', value: '260K abitanti', icon: Users },
    { label: 'Isole', value: '118 isolette', icon: Ship },
    { label: 'Ponti', value: '400+ ponti', icon: Waves },
    { label: 'Acqua Alta', value: 'Nov-Mar picco', icon: AlertTriangle }
  ]

  const sestieri = [
    {
      name: 'San Marco',
      highlights: 'Basilica, Palazzo Ducale, Piazza',
      description: 'Il cuore politico e religioso della Serenissima',
      character: 'Monumentale e turistico'
    },
    {
      name: 'Castello',
      highlights: 'Arsenale, Biennale, Via Garibaldi',
      description: 'Il sestiere più grande, autentico e vivibile',
      character: 'Veneziano e genuino'
    },
    {
      name: 'Cannaregio',
      highlights: 'Ghetto, Lista di Spagna, Ca\' d\'Oro',
      description: 'Porta d\'ingresso con storia ebraica millenaria',
      character: 'Multiculturale e vibrante'
    },
    {
      name: 'Dorsoduro',
      highlights: 'Peggy Guggenheim, Accademia, Zattere',
      description: 'Arte contemporanea e vita studentesca',
      character: 'Bohémien e artistico'
    },
    {
      name: 'San Polo',
      highlights: 'Mercato di Rialto, Ponte di Rialto',
      description: 'Centro commerciale storico della Repubblica',
      character: 'Mercantile e tradizionale'
    },
    {
      name: 'Santa Croce',
      highlights: 'Piazzale Roma, Stazione, Ca\' Pesaro',
      description: 'Collegamento con la terraferma',
      character: 'Funzionale e di passaggio'
    }
  ]

  const practicalInfo = [
    {
      title: 'Come Arrivare',
      icon: Plane,
      items: [
        'Aereo: Marco Polo (12km) + Alilaguna (€15, 1h)',
        'Treno: Santa Lucia diretta in centro storico',
        'Auto: Piazzale Roma (€25-30/giorno)',
        'Bus: Mestre + treno (5min, più economico)'
      ]
    },
    {
      title: 'Muoversi in Città',
      icon: Ship,
      items: [
        'Vaporetto: biglietto 75min €7.50, 24h €20',
        'A piedi: il modo migliore, 30min attraversata',
        'Gondola: €80 diurno, €100 serale (6 persone max)',
        'Water taxi: €15 base + €2/min (lusso)'
      ]
    },
    {
      title: 'Quando Visitare',
      icon: Star,
      items: [
        'Primavera (Apr-Mag): clima ideale, meno folla',
        'Estate (Giu-Ago): caldo, affollato, acqua alta minima',
        'Autunno (Set-Ott): romantico, acqua alta inizia',
        'Inverno (Nov-Mar): magico, acqua alta frequente'
      ]
    }
  ]

  const highlights = [
    {
      title: 'Piazza San Marco',
      description: 'Il Salotto d\'Europa più elegante al mondo',
      image: '/images/destinations/venezia-piazza-san-marco.webp',
      features: ['Basilica bizantina', 'Palazzo Ducale', 'Campanile 99m', 'Caffè Florian']
    },
    {
      title: 'Canal Grande',
      description: 'La strada più bella del mondo',
      image: '/images/destinations/venezia-canal-grande-hero.webp',
      features: ['4km di palazzi', 'Ponte di Rialto', 'Ca\' Rezzonico', 'Fondaco dei Tedeschi']
    },
    {
      title: 'Isole della Laguna',
      description: 'Tesori colorati nella laguna veneziana',
      image: '/images/destinations/venezia-isole-murano-burano.webp',
      features: ['Murano vetro', 'Burano merletti', 'Torcello storia', 'San Giorgio panorama']
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/venezia-canal-grande-hero.webp"
            alt="Venezia Canal Grande"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Venezia - La Serenissima
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6">
              L\'unica città al mondo costruita interamente sull\'acqua
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Veneto, Nord-Est Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ship className="h-4 w-4" />
                <span>118 Isole</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Patrimonio UNESCO</span>
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
                <div key={index} className="text-center p-4 bg-blue-50 rounded-xl">
                  <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-2" />
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
              Le Meraviglie di Venezia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni angolo racconta mille anni di storia della Serenissima Repubblica
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
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Imperdibile
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                  <div className="space-y-2">
                    {highlight.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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

      {/* Sestieri Guide */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I 6 Sestieri di Venezia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni quartiere ha la sua personalità unica e i suoi tesori nascosti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sestieri.map((sestiere, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sestiere.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{sestiere.highlights}</p>
                <p className="text-gray-600 text-sm mb-3">{sestiere.description}</p>
                <div className="bg-blue-50 p-2 rounded">
                  <p className="text-xs text-blue-700 font-medium">Carattere: {sestiere.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Informazioni Pratiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutto quello che serve per organizzare il viaggio perfetto a Venezia
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {practicalInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="card p-6 bg-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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

      {/* Featured Guide */}
      <section className="py-16 bg-cyan-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              La Nostra Guida Dettagliata
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Itinerario completo di 4 giorni per scoprire ogni segreto della Serenissima
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link href="/guide/venezia-4-giorni" className="card group overflow-hidden hover:shadow-xl transition-all duration-300 p-0 bg-white">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src="/images/blog/venezia-gondole-hero.webp"
                    alt="Venezia in 4 Giorni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 text-gray-900">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-gold-400" />
                    <span className="text-gold-600 font-medium">Guida Completa</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    Come Visitare Venezia in 4 Giorni
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Itinerario dettagliato giorno per giorno: San Marco, Palazzo Ducale, isole della laguna, 
                    bacari autentici e tutti i segreti della Serenissima.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        18 min lettura
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        15K+ visualizzazioni
                      </span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:text-blue-700">
                      Leggi la guida completa →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-cyan-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pronto per la Magia Veneziana?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Dai palazzi dorati del Canal Grande ai bacari nascosti: Venezia ti aspetta con i suoi mille segreti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/venezia-4-giorni" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Inizia l\'Itinerario
            </Link>
            <Link href="/esperienze/venezia-gondole-bacari" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Tour Esperienziali
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}