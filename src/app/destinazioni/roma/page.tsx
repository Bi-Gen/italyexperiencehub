import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Train, Plane, Car, Church, Utensils, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roma: Guida Turismo 2025 | Visitare Città Eterna, Metro, Aeroporti',
  description: 'Roma guida completa 2025: Colosseo, Vaticano, trasporti, quartieri, quando andare. Come visitare la Città Eterna, metro, aeroporti, dove alloggiare.',
  keywords: ['Roma turismo', 'visitare Roma', 'Roma guida', 'Città Eterna', 'Roma 2025', 'Colosseo', 'Vaticano', 'Fontana di Trevi', 'metro Roma', 'aeroporti Roma', 'quartieri Roma', 'trasporti Roma']
}

export default function RomaPage() {
  const quickFacts = [
    { label: 'Popolazione', value: '2.8M abitanti', icon: Users },
    { label: 'Aeroporti', value: 'Fiumicino, Ciampino', icon: Plane },
    { label: 'Metro Linee', value: '3 linee A/B/C', icon: Train },
    { label: 'Periodo Migliore', value: 'Apr-Giu, Set-Ott', icon: Star }
  ]

  const quartieri = [
    {
      nome: 'Centro Storico',
      highlights: 'Pantheon, Fontana Trevi, Piazza Navona',
      descrizione: 'Cuore antico con monumenti iconici',
      metro: 'Linea A: Barberini, Spagna'
    },
    {
      nome: 'Vaticano',
      highlights: 'San Pietro, Musei Vaticani, Castel Sant\'Angelo',
      descrizione: 'Stato della Città del Vaticano',
      metro: 'Linea A: Ottaviano, Cipro'
    },
    {
      nome: 'Colosseo/Fori',
      highlights: 'Colosseo, Foro Romano, Palatino',
      descrizione: 'Roma Imperiale e archeologica',
      metro: 'Linea B: Colosseo'
    },
    {
      nome: 'Trastevere',
      highlights: 'Santa Maria, Vita notturna, Ristoranti',
      descrizione: 'Quartiere bohémien e autentico',
      metro: 'Tram 8 da Largo Argentina'
    },
    {
      nome: 'Testaccio',
      highlights: 'Mercato, Street food, Vita locale',
      descrizione: 'Il vero quartiere gastronomico',
      metro: 'Linea B: Piramide'
    },
    {
      nome: 'Monti',
      highlights: 'Via del Boschetto, Boutique, Aperitivi',
      descrizione: 'Trendy e alternativo',
      metro: 'Linea B: Cavour'
    }
  ]

  const highlights = [
    {
      titolo: 'Monumenti Antichi',
      descrizione: 'L\'Impero Romano rivive nelle pietre millenarie',
      image: '/images/destinations/roma-pantheon-interno.webp',
      features: ['Pantheon 128 d.C.', 'Colosseo anfiteatro', 'Fori Imperiali', 'Terme di Caracalla']
    },
    {
      titolo: 'Città del Vaticano',
      descrizione: 'Il più piccolo stato del mondo, tesoro d\'arte',
      image: '/images/destinations/roma-vaticano-san-pietro.webp',
      features: ['Cappella Sistina', 'Musei Vaticani', 'San Pietro Basilica', 'Giardini Vaticani']
    },
    {
      titolo: 'Quartieri Autentici',
      descrizione: 'Dove vive la Roma vera, lontana dalle folle',
      image: '/images/destinations/roma-quartieri-trastevere.webp',
      features: ['Trastevere sera', 'Testaccio mercato', 'Monti vintage', 'Pigneto alternativo']
    }
  ]

  const practicalInfo = [
    {
      titolo: 'Come Arrivare',
      icon: Plane,
      items: [
        'Fiumicino: Leonardo Express 32min (€14)',
        'Ciampino: Bus Terravision 45min (€6)',
        'Treno: Termini hub centrale collegamenti',
        'Auto: GRA anello, ZTL centro storico'
      ]
    },
    {
      titolo: 'Muoversi a Roma',
      icon: Train,
      items: [
        'Metro: 3 linee A/B/C, biglietto €1,50 (100min)',
        'Bus: Rete capillare, stesso biglietto metro',
        'Tram: Linee 8,19 per Trastevere e periferia',
        'A piedi: Centro storico percorribile (2km)'
      ]
    },
    {
      titolo: 'Quando Visitare',
      icon: Star,
      items: [
        'Primavera (Apr-Giu): clima perfetto, fiori',
        'Estate (Lug-Ago): caldo intenso, agosto vuoto',
        'Autunno (Set-Ott): ideale, colori bellissimi',
        'Inverno (Nov-Mar): mite, meno turisti, musei'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/roma-pantheon-interno.webp"
            alt="Roma - Pantheon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Roma - La Città Eterna
            </h1>
            <p className="text-xl lg:text-2xl text-yellow-100 mb-6">
              2775 anni di storia, arte e cultura nel cuore dell'Italia
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lazio, Centro Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Church className="h-4 w-4" />
                <span>Capitale Cattolica</span>
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
                <div key={index} className="text-center p-4 bg-red-50 rounded-xl">
                  <IconComponent className="h-8 w-8 text-red-600 mx-auto mb-2" />
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
              I Tesori della Capitale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dall'Impero Romano al Rinascimento: ogni pietra racconta 28 secoli di storia
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
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
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
              I Quartieri di Roma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni rione ha la sua personalità: dall'antica Roma imperiale alla movida contemporanea
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quartieri.map((quartiere, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{quartiere.nome}</h3>
                <p className="text-red-600 font-medium mb-3">{quartiere.highlights}</p>
                <p className="text-gray-600 text-sm mb-3">{quartiere.descrizione}</p>
                <div className="bg-red-50 p-2 rounded">
                  <div className="flex items-center text-xs text-red-700">
                    <Train className="h-3 w-3 mr-1" />
                    <span>{quartiere.metro}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Informazioni Pratiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutto quello che serve per organizzare il viaggio perfetto nella Capitale
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {practicalInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="card p-6 bg-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{info.titolo}</h3>
                  </div>
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
      <section className="py-16 bg-red-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              La Nostra Guida Dettagliata
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Itinerario completo di 3 giorni per scoprire tutti i tesori della Città Eterna
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link href="/guide/roma-3-giorni" className="card group overflow-hidden hover:shadow-xl transition-all duration-300 p-0 bg-white">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src="/images/destinations/roma-hero.webp"
                    alt="Roma in 3 Giorni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 text-gray-900">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-gold-400" />
                    <span className="text-gold-600 font-medium">Guida Più Completa</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                    Come Visitare Roma in 3 Giorni
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Itinerario dettagliato giorno per giorno: Colosseo, Vaticano, Centro Storico, 
                    Trastevere e tutti i segreti della Capitale eterna.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        20 min lettura
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        45K+ visualizzazioni
                      </span>
                    </div>
                    <span className="text-red-600 font-medium group-hover:text-red-700">
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
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-red-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pronto per la Magia di Roma?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Dal Colosseo al Vaticano, da Trastevere al Pantheon: Roma ti aspetta con 28 secoli di meraviglie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/roma-3-giorni" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Inizia l'Itinerario
            </Link>
            <Link href="/esperienze/roma-food-tour" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Esperienze Roma
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}