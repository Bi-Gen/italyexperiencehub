import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Train, Plane, Car, Pizza, Utensils, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Napoli: Guida Turismo 2025 | Visitare Città del Sole, Pizza, Vesuvio',
  description: 'Napoli guida completa 2025: Spaccanapoli, pizza napoletana, Vesuvio, quartieri, trasporti. Come visitare la Città del Sole, street food, mare, Napoli sotterranea.',
  keywords: ['Napoli turismo', 'visitare Napoli', 'Napoli guida', 'Città del Sole', 'Napoli 2025', 'pizza napoletana', 'Spaccanapoli', 'Vesuvio', 'quartieri Napoli', 'street food Napoli', 'trasporti Napoli']
}

export default function NapoliPage() {
  const quickFacts = [
    { label: 'Popolazione', value: '950K abitanti', icon: Users },
    { label: 'Aeroporto', value: 'Capodichino (NAP)', icon: Plane },
    { label: 'Metro', value: '3 linee + funicolare', icon: Train },
    { label: 'Periodo Migliore', value: 'Apr-Giu, Set-Ott', icon: Star }
  ]

  const quartieri = [
    {
      nome: 'Centro Storico',
      highlights: 'Spaccanapoli, San Gregorio Armeno, Duomo',
      descrizione: 'Patrimonio UNESCO, cuore greco-romano',
      trasporti: 'Metro L1 Dante, L2 Montesanto, bus'
    },
    {
      nome: 'Quartieri Spagnoli',
      highlights: 'Murales Maradona, Via Toledo, Vita popolare',
      descrizione: 'Napoli autentica, colorata e vibrante',
      trasporti: 'Metro L1 Toledo (stazione arte), pedonale'
    },
    {
      nome: 'Sanità',
      highlights: 'Catacombe San Gennaro, Street art, Palazzo Sanfelice',
      descrizione: 'Rinascita urbana, arte contemporanea',
      trasporti: 'Metro L2 Cavour, L1 Museo'
    },
    {
      nome: 'Chiaia',
      highlights: 'Via Chiaia, Villa Comunale, Mergellina',
      descrizione: 'Shopping elegante, lungomare chic',
      trasporti: 'Metro L2 Amedeo, funicolare Chiaia'
    },
    {
      nome: 'Vomero',
      highlights: 'Castel Sant\'Elmo, Certosa San Martino, Panorama',
      descrizione: 'Quartiere alto, vista mozzafiato',
      trasporti: 'Funicolare Centrale, Montesanto, Chiaia'
    },
    {
      nome: 'Posillipo',
      highlights: 'Palazzo Donn\'Anna, Parco Virgiliano, Mare',
      descrizione: 'Costa panoramica, ville storiche',
      trasporti: 'Bus 140, C5 da Mergellina'
    }
  ]

  const highlights = [
    {
      titolo: 'Centro Storico UNESCO',
      descrizione: 'Il più grande centro antico d\'Europa, 2500 anni di storia',
      image: '/images/destinations/napoli-spaccanapoli-centro-storico.jpg',
      features: ['Spaccanapoli strada romana', 'San Gregorio Armeno presepi', 'Duomo San Gennaro', 'Cristo Velato Cappella Sansevero']
    },
    {
      titolo: 'Golfo e Vesuvio',
      descrizione: 'Uno dei panorami più belli al mondo tra mare e vulcano',
      image: '/images/destinations/napoli-golfo-vesuvio-panorama.webp',
      features: ['Vesuvio cratere attivo', 'Golfo di Napoli vista', 'Castel dell\'Ovo mare', 'Lungomare Caracciolo']
    },
    {
      titolo: 'Cultura e Tradizioni',
      descrizione: 'Pizza, caffè, musica: Napoli ha inventato lo stile di vita italiano',
      image: '/images/destinations/napoli-quartieri-spagnoli-colori.jpg',
      features: ['Pizza napoletana UNESCO', 'Caffè sospeso tradizione', 'Teatro San Carlo', 'Murales street art']
    }
  ]

  const practicalInfo = [
    {
      titolo: 'Come Arrivare',
      icon: Plane,
      items: [
        'Aeroporto Capodichino: Alibus centro 20min (€5)',
        'Treno: Stazione Centrale collegata tutta Italia',
        'Auto: Tangenziale + ZTL centro storico',
        'Nave: Porto per Capri, Ischia, Procida, Sicilia'
      ]
    },
    {
      titolo: 'Muoversi a Napoli',
      icon: Train,
      items: [
        'Metro: L1 arte, L2 collina, biglietto €1,10 (90min)',
        'Funicolari: 4 linee per Vomero/Posillipo',
        'Bus ANM: rete capillare, stesso biglietto metro',
        'A piedi: centro storico tutto percorribile'
      ]
    },
    {
      titolo: 'Quando Visitare',
      icon: Star,
      items: [
        'Primavera (Apr-Giu): perfetta, mare, 20-25°C',
        'Estate (Lug-Ago): molto caldo, mare splendido',
        'Autunno (Set-Ott): ideale, meno turisti',
        'Inverno (Nov-Mar): mite, pizza calda, musei'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/napoli-golfo-vesuvio-panorama.webp"
            alt="Napoli - Golfo e Vesuvio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Napoli - La Città del Sole
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-6">
              Dove è nata la pizza e l'arte di vivere tra Vesuvio e mare
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Campania, Sud Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Pizza className="h-4 w-4" />
                <span>Capitale Pizza</span>
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
              I Tesori della Città del Sole
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dalla pizza patrimonio UNESCO ai tesori greco-romani: Napoli ti conquista con autenticità e passione
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
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
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

      {/* Quartieri Guide */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              I Quartieri di Napoli
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni rione racconta una Napoli diversa: dal centro antico ai quartieri panoramici sul golfo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quartieri.map((quartiere, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{quartiere.nome}</h3>
                <p className="text-blue-600 font-medium mb-3">{quartiere.highlights}</p>
                <p className="text-gray-600 text-sm mb-3">{quartiere.descrizione}</p>
                <div className="bg-blue-50 p-2 rounded">
                  <div className="flex items-center text-xs text-blue-700">
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
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Informazioni Pratiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutto quello che serve per organizzare il viaggio perfetto nella Città del Sole
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
                    <h3 className="text-xl font-bold text-gray-900">{info.titolo}</h3>
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
      <section className="py-16 bg-yellow-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              La Nostra Guida Dettagliata
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Itinerario completo di 3 giorni per scoprire tutti i segreti della Città del Sole
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link href="/guide/napoli-3-giorni" className="card group overflow-hidden hover:shadow-xl transition-all duration-300 p-0 bg-white">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src="/images/destinations/napoli-castel-dell-ovo-mare.jpg"
                    alt="Napoli in 3 Giorni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 text-gray-900">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-gold-400" />
                    <span className="text-gold-600 font-medium">Guida Più Completa</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    Come Visitare Napoli in 3 Giorni
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Itinerario dettagliato giorno per giorno: Spaccanapoli, Vesuvio, quartieri autentici, 
                    pizza napoletana e tutti i segreti della Città del Sole.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        20 min lettura
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        28K+ visualizzazioni
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
      <section className="py-16 bg-gradient-to-br from-blue-600 to-red-600 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pronto per l'Energia Napoletana?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dal Vesuvio che domina il golfo alla pizza che ha conquistato il mondo: Napoli ti aspetta con tutto il suo calore mediterraneo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/napoli-3-giorni" className="btn-primary bg-gold-500 hover:bg-gold-600 text-gray-900">
              Inizia l'Itinerario
            </Link>
            <Link href="/esperienze/napoli-food-tour" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Esperienze Napoli
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}