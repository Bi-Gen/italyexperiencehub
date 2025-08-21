import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Waves, Camera, Mountain, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tour Costiera Amalfitana: Borghi UNESCO e Degustazione Limoncello',
  description: 'Tour esclusivo Costiera Amalfitana UNESCO: Positano, Amalfi, Ravello con degustazione limoncello, ceramiche Vietri e panorami mozzafiato. Esperienza autentica.',
  keywords: ['Costiera Amalfitana tour', 'Positano Amalfi Ravello', 'degustazione limoncello', 'borghi UNESCO', 'tour Campania', 'ceramiche Vietri', 'Sentiero degli Dei']
}

export default function CostieraAmalfitanaTour() {
  const highlights = [
    {
      icon: <Waves className="h-6 w-6 text-accent-600" />,
      title: 'Borghi UNESCO sul Mare',
      description: 'Visita di Positano, Amalfi e Ravello con guida esperta e tempo libero per scoprire ogni borgo'
    },
    {
      icon: <TreePine className="h-6 w-6 text-primary-600" />,
      title: 'Degustazione Limoncello',
      description: 'Assaggio del vero limoncello artigianale con limoni IGP Costiera d\'Amalfi in limoneto storico'  
    },
    {
      icon: <Camera className="h-6 w-6 text-blue-600" />,
      title: 'Panorami da Cartolina',
      description: 'I punti più spettacolari per foto indimenticabili dalla Terrazza dell\'Infinito ai belvedere nascosti'
    },
    {
      icon: <Mountain className="h-6 w-6 text-green-600" />,
      title: 'Ceramiche di Vietri',
      description: 'Visita del laboratorio ceramico tradizionale e shopping nell\'antica tradizione vietrese'
    }
  ]

  const itinerary = [
    {
      time: '8:30',
      title: 'Partenza da Napoli/Sorrento',
      description: 'Pick-up dal tuo hotel e partenza in minivan di lusso lungo la spettacolare strada costiera SS163.',
      location: 'Hotel o punto concordato'
    },
    {
      time: '9:30', 
      title: 'Vietri sul Mare - Ceramiche',
      description: 'Visita del laboratorio ceramico storico e shopping nella capitale mondiale della ceramica artistica.',
      location: 'Centro Storico Vietri'
    },
    {
      time: '10:30',
      title: 'Ravello - Villa Rufolo',
      description: 'Salita a Ravello, visita di Villa Rufolo con i giardini che ispirarono Wagner e panorama infinito.',
      location: 'Villa Rufolo, Ravello'
    },
    {
      time: '12:00',
      title: 'Terrazza dell\'Infinito', 
      description: 'Villa Cimbrone e la terrazza più famosa al mondo con vista che spazia fino alle isole.',
      location: 'Villa Cimbrone, Ravello'
    },
    {
      time: '13:00',
      title: 'Pranzo Vista Mare',
      description: 'Pranzo tipico amalfitano in ristorante panoramico con specialità marinare e limoncello.',
      location: 'Ristorante selezionato Ravello'
    },
    {
      time: '14:30',
      title: 'Amalfi - Repubblica Marinara',
      description: 'Visita del centro storico, Duomo di Sant\'Andrea e antico arsenale della Repubblica Marinara.',
      location: 'Centro Storico Amalfi'
    },
    {
      time: '15:45',
      title: 'Degustazione Limoncello',
      description: 'Esperienza autentica in limoneto storico con degustazione limoncello e prodotti tipici.',
      location: 'Limoneto tradizionale'
    },
    {
      time: '16:30',
      title: 'Positano - Borgo Verticale',
      description: 'Discesa a Positano, tempo libero nel borgo più fotografato al mondo e shopping moda resort.',
      location: 'Centro Storico Positano'
    },
    {
      time: '18:00',
      title: 'Rientro Panoramico',
      description: 'Ritorno con soste fotografiche ai punti panoramici più spettacolari della costiera.',
      location: 'SS163 Amalfitana'
    }
  ]

  const includes = [
    'Trasporto in minivan di lusso con aria condizionata',
    'Guida locale esperta certificata della Costiera',  
    'Ingressi a Villa Rufolo e Villa Cimbrone',
    'Pranzo tipico amalfitano con vista mare',
    'Degustazione limoncello e prodotti tipici in limoneto',
    'Visita laboratorio ceramiche di Vietri con dimostrazione',
    'Assicurazione RC e assistenza H24',
    'Mappa e audioguida digitale multilingue'
  ]

  const notIncludes = [
    'Pick-up da hotel fuori zona concordata (+€20)',
    'Bevande extra durante il pranzo',
    'Acquisti personali nei negozi e laboratori',
    'Ingressi opzionali (Museo della Carta €4, Grotta Smeraldo €5)',
    'Mance per guida e autista (facoltative)'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/costiera-amalfitana-hero.webp"
            alt="Costiera Amalfitana con borghi Positano Amalfi Ravello per tour UNESCO"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Waves className="h-8 w-8 mr-3 text-accent-400" />
              <span className="text-accent-400 font-medium">Tour Esclusivo UNESCO</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Costiera Amalfitana
              <span className="block text-accent-400">Borghi & Limoncello</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Un viaggio tra i borghi più belli del mondo patrimonio UNESCO: Positano, Amalfi, Ravello 
              con degustazione limoncello e ceramiche di Vietri.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                9 ore e 30 minuti
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                2-8 persone
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Costiera Amalfitana
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Tour Premium UNESCO
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
              <p className="text-2xl font-bold text-gray-900">€125 <span className="text-lg font-normal text-gray-600">per persona</span></p>
              <p className="text-sm text-gray-600">Include pranzo + degustazioni + ingressi</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="https://www.getyourguide.it/costiera-amalfitana-l1119/positano-amalfi-ravello-limoncello-tour-t67890"
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Waves className="h-5 w-5 mr-2" />
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
              I Tesori UNESCO della Costiera Amalfitana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un viaggio completo tra i borghi più belli al mondo con tradizioni autentiche e panorami mozzafiato
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
              Itinerario Completo della Giornata
            </h2>
            <p className="text-xl text-gray-600">
              9 ore e 30 minuti per scoprire tutti i tesori della Costiera Amalfitana UNESCO
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
            Costiera Amalfitana: Paesaggi da Sogno
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Image
                src="/images/destinations/costiera-amalfitana-hero.webp"
                alt="Vista panoramica Costiera Amalfitana con borghi sul mare"
                width={800}
                height={500}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/destinations/costiera-amalfitana-hero.webp"
                alt="Positano case colorate a picco sul mare"
                width={400}
                height={250}
                className="w-full h-32 md:h-36 object-cover rounded-xl"
              />
              <Image
                src="/images/destinations/costiera-amalfitana-hero.webp"
                alt="Degustazione limoncello con limoni IGP Amalfi"
                width={400}
                height={250}
                className="w-full h-32 md:h-36 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Villages Details */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            I Borghi che Visiterai
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <Image
                src="/images/destinations/costiera-amalfitana-hero.webp"
                alt="Positano borgo verticale con case colorate"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Positano - La Perla Verticale
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Il borgo più fotografato al mondo con case color pastello che scendono verso il mare. 
                  Shopping di moda resort e atmosfera glamour internazionale.
                </p>
                <div className="flex items-center text-sm text-primary-600">
                  <Camera className="h-4 w-4 mr-2" />
                  Tempo libero: 1h 30min
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <Image
                src="/images/destinations/costiera-amalfitana-hero.webp"
                alt="Amalfi Repubblica Marinara Duomo"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Amalfi - Repubblica Marinara
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Il cuore storico della Costiera con il magnifico Duomo arabo-normanno 
                  e l'antico arsenale della potente Repubblica Marinara.
                </p>
                <div className="flex items-center text-sm text-primary-600">
                  <Mountain className="h-4 w-4 mr-2" />
                  Visita guidata: 1h 15min
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <Image
                src="/images/destinations/costiera-amalfitana-hero.webp"
                alt="Ravello Terrazza dell'Infinito Villa Cimbrone"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ravello - Balcone del Mondo
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  La città della musica sospesa a 365m sul mare. Villa Rufolo, Villa Cimbrone 
                  e la famosa "Terrazza dell'Infinito" con vista che toglie il fiato.
                </p>
                <div className="flex items-center text-sm text-primary-600">
                  <Waves className="h-4 w-4 mr-2" />
                  Panorami infiniti
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
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

      {/* Experiences Details */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Esperienze Autentiche Incluse
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <TreePine className="h-8 w-8 text-accent-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Degustazione Limoncello</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Esperienza autentica in un limoneto storico con degustazione del vero limoncello artigianale 
                fatto con Limoni Costa d'Amalfi IGP. Include assaggio di delizie al limone e caramelle tradizionali.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Limoncello artigianale da 3 produttori diversi</li>
                <li>• Spiegazione del processo di produzione</li>
                <li>• Degustazione delizie al limone</li>
                <li>• Shopping prodotti tipici</li>
              </ul>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Mountain className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Ceramiche di Vietri</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Visita di un laboratorio ceramico storico dove maestri artigiani creano le famose ceramiche 
                vietresi dal XIV secolo. Dimostrazione dal vivo delle tecniche tradizionali.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dimostrazione tornio e decorazione</li>
                <li>• Storia delle ceramiche vietresi</li>
                <li>• Laboratorio con maestri artigiani</li>
                <li>• Shopping pezzi unici autentici</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 bg-white">
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
                <li><strong>Giorni:</strong> Tutti i giorni</li>
                <li><strong>Orario:</strong> 8:30-18:00</li>
                <li><strong>Durata:</strong> 9 ore e 30 minuti</li>
                <li><strong>Stagione:</strong> Aprile-Ottobre</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👥 Gruppo
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Minimo:</strong> 2 persone</li>
                <li><strong>Massimo:</strong> 8 persone</li>
                <li><strong>Età:</strong> Adatto a tutte le età</li>
                <li><strong>Lingua:</strong> Italiano/Inglese</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📍 Logistica
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Partenza:</strong> Napoli/Sorrento</li>
                <li><strong>Pick-up:</strong> Hotel incluso</li>
                <li><strong>Mezzo:</strong> Minivan 8 posti luxury</li>
                <li><strong>Abbigliamento:</strong> Comodo, scarpe da passeggio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prenota il Tuo Tour della Costiera Amalfitana
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Un viaggio indimenticabile tra i borghi UNESCO più belli al mondo con degustazioni autentiche e panorami mozzafiato
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.getyourguide.it/costiera-amalfitana-l1119/positano-amalfi-ravello-limoncello-tour-t67890"
              className="btn-primary bg-accent-500 hover:bg-accent-600 text-white border-none inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Waves className="h-5 w-5 mr-2" />
              Prenota ora €125
            </Link>
            <Link
              href="/destinazioni/costiera-amalfitana"
              className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              Scopri la Costiera
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-blue-200">
            <p>✅ Cancellazione gratuita fino a 24h prima • ⭐ Valutazione media 4.9/5 • 🏆 UNESCO Experience</p>
          </div>
        </div>
      </section>
    </div>
  )
}