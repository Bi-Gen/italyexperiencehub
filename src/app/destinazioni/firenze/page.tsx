import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Train, Plane, Car, Palette, Utensils, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Firenze: Guida Turismo 2025 | Visitare Culla Rinascimento, Uffizi, Duomo',
  description: 'Firenze guida completa 2025: Uffizi, Duomo, Ponte Vecchio, Oltrarno, trasporti. Come visitare la Culla del Rinascimento, musei, quartieri, dove mangiare.',
  keywords: ['Firenze turismo', 'visitare Firenze', 'Firenze guida', 'Culla Rinascimento', 'Firenze 2025', 'Uffizi', 'Duomo Firenze', 'Ponte Vecchio', 'Oltrarno', 'musei Firenze', 'trasporti Firenze']
}

export default function FirenzePage() {
  const quickFacts = [
    { label: 'Popolazione', value: '380K abitanti', icon: Users },
    { label: 'Aeroporto', value: 'Peretola (FLR)', icon: Plane },
    { label: 'Stazione', value: 'S.M. Novella', icon: Train },
    { label: 'Periodo Migliore', value: 'Apr-Giu, Set-Ott', icon: Star }
  ]

  const quartieri = [
    {
      nome: 'Centro Storico',
      highlights: 'Duomo, Uffizi, Ponte Vecchio, Palazzo Pitti',
      descrizione: 'Cuore del Rinascimento mondiale',
      trasporti: 'A piedi, ZTL (zona a traffico limitato)'
    },
    {
      nome: 'Oltrarno',
      highlights: 'Palazzo Pitti, Santo Spirito, Artigiani, Boboli',
      descrizione: 'La Firenze autentica e bohémien',
      trasporti: 'Tram T1, Bus C3, C4'
    },
    {
      nome: 'Santa Maria Novella',
      highlights: 'Stazione, Basilica, Mercato Centrale',
      descrizione: 'Hub trasporti e vita commerciale',
      trasporti: 'Tutti treni, bus urbani, navette aeroporto'
    },
    {
      nome: 'Santa Croce',
      highlights: 'Basilica Francescana, Mercato Pulci, Vita notturna',
      descrizione: 'Quartiere giovane e culturale',
      trasporti: 'Bus C1, C2, C3 da centro'
    },
    {
      nome: 'San Lorenzo',
      highlights: 'Mercato, Cappelle Medicee, Palazzo Medici',
      descrizione: 'Storia dei Medici e mercati tipici',
      trasporti: 'Bus C1 da stazione, a piedi da Duomo'
    },
    {
      nome: 'San Frediano',
      highlights: 'Botteghe artigiane, Bar trendy, Nightlife',
      descrizione: 'Il Brooklyn fiorentino',
      trasporti: 'Tram T1 fermata Alamanni, Bus D'
    }
  ]

  const highlights = [
    {
      titolo: 'Rinascimento e Arte',
      descrizione: 'La più grande concentrazione d\'arte rinascimentale al mondo',
      image: '/images/destinations/firenze-uffizi-galleria.webp',
      features: ['Uffizi: Botticelli, Michelangelo', 'Accademia: David originale', 'Palazzo Pitti: 8 musei', 'Duomo: Cupola Brunelleschi']
    },
    {
      titolo: 'Centro Storico UNESCO',
      descrizione: 'Un museo a cielo aperto patrimonio dell\'umanità',
      image: '/images/destinations/firenze-duomo-cupola-brunelleschi.webp',
      features: ['Duomo e Cupola', 'Ponte Vecchio storico', 'Palazzo Vecchio politico', 'Loggia della Signoria']
    },
    {
      titolo: 'Oltrarno Autentico',
      descrizione: 'La vera Firenze degli artigiani e della vita locale',
      image: '/images/destinations/firenze-oltrarno-artigiani.webp',
      features: ['Botteghe centenarie', 'Giardino di Boboli', 'Aperitivi locali', 'Santo Spirito piazza']
    }
  ]

  const practicalInfo = [
    {
      titolo: 'Come Arrivare',
      icon: Plane,
      items: [
        'Aeroporto Peretola: Bus Volainbus 25min (€6)',
        'Treno: Stazione S.M.Novella collegata a tutta Italia',
        'Auto: Parcheggi Sant\'Ambrogio, Parterre (€2/h)',
        'Bus: FlixBus da Roma 3h, Milano 4h'
      ]
    },
    {
      titolo: 'Muoversi a Firenze',
      icon: Train,
      items: [
        'A piedi: Centro 2km, tutto raggiungibile',
        'Tram T1: SMN-Scandicci, T2: Aeroporto-Piazza Unità',
        'Bus ATAF: Biglietto €1,50 (90min), giornaliero €5',
        'Bike sharing: Mobike, 200+ stazioni'
      ]
    },
    {
      titolo: 'Quando Visitare',
      icon: Star,
      items: [
        'Primavera (Apr-Giu): perfetta, fiori, 20-25°C',
        'Estate (Lug-Ago): molto caldo 35°C, affollata',
        'Autunno (Set-Ott): ideale, vendemmia, 15-22°C',
        'Inverno (Nov-Mar): pochi turisti, musei, 5-15°C'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/firenze-duomo-cupola-brunelleschi.webp"
            alt="Firenze - Duomo e Cupola del Brunelleschi"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Firenze - Culla del Rinascimento
            </h1>
            <p className="text-xl lg:text-2xl text-orange-100 mb-6">
              La città dove è nato l'arte moderna nel cuore della Toscana
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Toscana, Centro Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <span>Capitale Arte</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Centro UNESCO</span>
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
              I Tesori del Rinascimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Da Michelangelo a Botticelli: ogni angolo di Firenze custodisce capolavori che hanno cambiato la storia dell'arte
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={highlight.image}
                    alt={highlight.titolo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Imperdibile
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.titolo}</h3>
                  <p className="text-gray-600 mb-4">{highlight.descrizione}</p>
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

      {/* Quartieri Guide */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I Quartieri di Firenze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni rione racconta una storia diversa: dal centro rinascimentale all'Oltrarno bohémien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quartieri.map((quartiere, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{quartiere.nome}</h3>
                <p className="text-orange-600 font-medium mb-3">{quartiere.highlights}</p>
                <p className="text-gray-600 text-sm mb-3">{quartiere.descrizione}</p>
                <div className="bg-orange-50 p-2 rounded">
                  <div className="flex items-center text-xs text-orange-700">
                    <Train className="h-3 w-3 mr-1" />
                    <span>{quartiere.trasporti}</span>
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
              Tutto quello che serve per organizzare il viaggio perfetto nella Culla del Rinascimento
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
                    <h3 className="text-xl font-bold text-gray-900">{info.titolo}</h3>
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

      {/* Featured Guide */}
      <section className="py-16 bg-purple-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              La Nostra Guida Dettagliata
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Itinerario completo di 3 giorni per scoprire tutti i tesori della Culla del Rinascimento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link href="/guide/firenze-3-giorni" className="card group overflow-hidden hover:shadow-xl transition-all duration-300 p-0 bg-white">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src="/images/destinations/firenze-ponte-vecchio-tramonto.webp"
                    alt="Firenze in 3 Giorni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 text-gray-900">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-gold-400" />
                    <span className="text-gold-600 font-medium">Guida Più Completa</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                    Come Visitare Firenze in 3 Giorni
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Itinerario dettagliato giorno per giorno: Uffizi, Duomo, Oltrarno, 
                    Ponte Vecchio e tutti i segreti della Culla del Rinascimento.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        18 min lettura
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        35K+ visualizzazioni
                      </span>
                    </div>
                    <span className="text-orange-600 font-medium group-hover:text-orange-700">
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
      <section className="py-16 bg-gradient-to-br from-purple-600 to-orange-600 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-purple-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pronto per il Rinascimento?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Dal David di Michelangelo alla Venere di Botticelli: Firenze ti aspetta con 5 secoli di capolavori assoluti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/firenze-3-giorni" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Inizia l'Itinerario
            </Link>
            <Link href="/esperienze/firenze-food-tour" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Esperienze Firenze
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}