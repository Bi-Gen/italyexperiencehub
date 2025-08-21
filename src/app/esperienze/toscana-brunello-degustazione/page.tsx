import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Wine, Camera, Mountain, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tour Val d\'Orcia e Degustazione Brunello | Esperienza Toscana Autentica',
  description: 'Tour esclusivo Val d\'Orcia UNESCO con degustazione Brunello di Montalcino. Pienza, borghi medievali, paesaggi da cartolina e vini pregiati delle migliori cantine.',
  keywords: ['Val d\'Orcia tour', 'Brunello Montalcino', 'degustazione vini Toscana', 'Pienza', 'tour Toscana', 'UNESCO Toscana', 'cantine Montalcino', 'paesaggi toscani']
}

export default function ToscanaBrunelloTour() {
  const highlights = [
    {
      icon: <Wine className="h-6 w-6 text-accent-600" />,
      title: 'Degustazione Brunello',
      description: 'Assaggio di Brunello DOCG e Rosso di Montalcino nelle cantine storiche con sommelier esperto'
    },
    {
      icon: <Mountain className="h-6 w-6 text-primary-600" />,
      title: 'Val d\'Orcia UNESCO',
      description: 'Tour dei paesaggi patrimonio mondiale: cipressi iconici, colline dorate e borghi medievali'  
    },
    {
      icon: <Camera className="h-6 w-6 text-blue-600" />,
      title: 'Fotografia Paesaggistica',
      description: 'I punti più panoramici per immortalare i paesaggi da cartolina della Toscana autentica'
    },
    {
      icon: <TreePine className="h-6 w-6 text-green-600" />,
      title: 'Borghi Autentici',
      description: 'Visita di Pienza, Montalcino e San Quirico d\'Orcia con guida locale esperta'
    }
  ]

  const itinerary = [
    {
      time: '9:00',
      title: 'Partenza da Siena',
      description: 'Ritrovo in Piazza del Campo e partenza in minivan di lusso verso la Val d\'Orcia UNESCO.',
      location: 'Piazza del Campo, Siena'
    },
    {
      time: '10:00', 
      title: 'Pienza - La Città Ideale',
      description: 'Visita guidata del centro storico rinascimentale e degustazione Pecorino DOP con vista panoramica.',
      location: 'Centro Storico Pienza'
    },
    {
      time: '11:45',
      title: 'Paesaggi Iconici Val d\'Orcia',
      description: 'Photo stop ai cipressi di San Quirico e Cappella Vitaleta, simboli della Toscana da cartolina.',
      location: 'Strada SP146'
    },
    {
      time: '12:30',
      title: 'Montalcino e la Fortezza', 
      description: 'Passeggiata nel borgo del Brunello, visita della Fortezza medievale e panorama sulla valle.',
      location: 'Centro Storico Montalcino'
    },
    {
      time: '13:30',
      title: 'Pranzo in Cantina Storica',
      description: 'Pranzo tipico toscano abbinato a degustazione guidata di Brunello DOCG e Rosso di Montalcino.',
      location: 'Cantina selezionata'
    },
    {
      time: '15:30',
      title: 'San Quirico d\'Orcia',
      description: 'Visita della Collegiata romanica e degli Orti Leonini, giardino rinascimentale perfettamente conservato.',
      location: 'San Quirico d\'Orcia'
    },
    {
      time: '16:45',
      title: 'Bagno Vignoni - Terme Medievali',
      description: 'Sosta al borgo termale unico con la piazza-piscina medievale e possibilità di relax termale.',
      location: 'Bagno Vignoni'
    },
    {
      time: '17:30',
      title: 'Rientro a Siena',
      description: 'Viaggio di ritorno attraverso le Crete Senesi con sosta panoramica per foto ricordo.',
      location: 'Crete Senesi'
    }
  ]

  const includes = [
    'Trasporto in minivan di lusso con aria condizionata',
    'Guida locale esperta di storia e territorio',  
    'Degustazione Pecorino DOP a Pienza',
    'Pranzo tipico toscano in cantina storica',
    'Degustazione guidata 4 vini: Brunello DOCG, Rosso di Montalcino, Sant\'Antimo',
    'Ingresso Fortezza di Montalcino e Orti Leonini',
    'Assicurazione RC e assistenza H24',
    'Mappa e guida digitale della Val d\'Orcia'
  ]

  const notIncludes = [
    'Trasferimenti da/per hotel (su richiesta €15)',
    'Bevande aggiuntive durante il pranzo',
    'Acquisti personali nelle cantine e negozi',
    'Ingressi a musei non specificati',
    'Mance (facoltative)'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/toscana-hero.webp"
            alt="Paesaggi Val d'Orcia con colline dorate e cipressi per tour degustazione Brunello"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Wine className="h-8 w-8 mr-3 text-accent-400" />
              <span className="text-accent-400 font-medium">Tour Esclusivo Toscana</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Val d'Orcia UNESCO
              <span className="block text-accent-400">& Brunello Experience</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Un viaggio tra i paesaggi patrimonio mondiale UNESCO della Val d'Orcia con degustazione 
              del prestigioso Brunello di Montalcino nelle cantine storiche.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                8 ore e 30 minuti
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                2-8 persone
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Val d'Orcia UNESCO
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Tour Premium
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-8 bg-accent-50 border-b border-accent-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">€145 <span className="text-lg font-normal text-gray-600">per persona</span></p>
              <p className="text-sm text-gray-600">Include degustazioni + pranzo + trasporti</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="https://www.viator.com/tours/Siena/Val-dOrcia-UNESCO-Brunello-Wine-Tasting-Tour/d5084-12345"
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Wine className="h-5 w-5 mr-2" />
                Prenota Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Il Meglio della Toscana Autentica in Un Giorno
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Paesaggi UNESCO, borghi medievali, vini pregiati e sapori tradizionali della Val d'Orcia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="card text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Itinerario Dettagliato
            </h2>
            <p className="text-xl text-gray-600">
              Un percorso studiato per vivere l'essenza della Val d'Orcia in ogni suo aspetto
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {itinerary.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  <div className="md:w-20 flex-shrink-0">
                    <div className="bg-primary-600 text-white text-sm font-bold px-3 py-2 rounded-lg text-center">
                      {item.time}
                    </div>
                  </div>
                  <div className="md:ml-8 flex-grow">
                    <div className="card p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Val d'Orcia: I Paesaggi più Belli della Toscana
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Image
                src="/images/destinations/toscana-hero.webp"
                alt="Paesaggi iconici Val d'Orcia con colline e cipressi"
                width={800}
                height={500}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/destinations/toscana-hero.webp"
                alt="Borghi medievali della Val d'Orcia - Pienza"
                width={400}
                height={250}
                className="w-full h-32 md:h-36 object-cover rounded-xl"
              />
              <Image
                src="/images/destinations/toscana-hero.webp"
                alt="Degustazione Brunello di Montalcino in cantina"
                width={400}
                height={250}
                className="w-full h-32 md:h-36 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="h-6 w-6 text-gold-500 mr-2" />
                Cosa Include
              </h2>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Non Include
              </h2>
              <ul className="space-y-3">
                {notIncludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            I Vini che Degusterai
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="h-12 w-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brunello di Montalcino DOCG</h3>
              <p className="text-sm text-gray-600">Il re dei vini toscani, 100% Sangiovese invecchiato 5 anni</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rosso di Montalcino DOC</h3>
              <p className="text-sm text-gray-600">Versione giovane del Brunello, fresco e beverino</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="h-12 w-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sant'Antimo DOC</h3>
              <p className="text-sm text-gray-600">Blend internazionale con vitigni autoctoni</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moscadello DOC</h3>
              <p className="text-sm text-gray-600">Vino dolce tradizionale, perfetto con i dolci</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Informazioni Pratiche
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🗓️ Disponibilità
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Giorni:</strong> Martedì, Giovedì, Sabato</li>
                <li><strong>Orario:</strong> 9:00-17:30</li>
                <li><strong>Durata:</strong> 8 ore e 30 minuti</li>
                <li><strong>Stagione:</strong> Marzo-Novembre</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👥 Gruppo
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Minimo:</strong> 2 persone</li>
                <li><strong>Massimo:</strong> 8 persone</li>
                <li><strong>Età:</strong> 18+ per degustazioni</li>
                <li><strong>Lingua:</strong> Italiano/Inglese</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📍 Logistica
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Partenza:</strong> Piazza del Campo, Siena</li>
                <li><strong>Ritorno:</strong> Stesso punto (17:30)</li>
                <li><strong>Transfer hotel:</strong> +€15 su richiesta</li>
                <li><strong>Parcheggio:</strong> Disponibile a Siena</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prenota la Tua Esperienza in Val d'Orcia
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Un viaggio indimenticabile tra paesaggi UNESCO, borghi medievali e degustazione dei migliori vini toscani
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.viator.com/tours/Siena/Val-dOrcia-UNESCO-Brunello-Wine-Tasting-Tour/d5084-12345"
              className="btn-primary bg-accent-500 hover:bg-accent-600 text-white border-none inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Wine className="h-5 w-5 mr-2" />
              Prenota ora €145
            </Link>
            <Link
              href="/destinazioni/toscana"
              className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              Scopri la Toscana
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-blue-200">
            <p>✅ Cancellazione gratuita fino a 48h prima • ⭐ Valutazione media 4.8/5 • 🏆 Best Seller 2024</p>
          </div>
        </div>
      </section>
    </div>
  )
}