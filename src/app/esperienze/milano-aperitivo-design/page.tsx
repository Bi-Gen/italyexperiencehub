import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Wine, Camera, Palette, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Milano Aperitivo e Design Tour: Grattacieli e Cocktail | Italy Experience Hub',
  description: 'Esperienza esclusiva Milano: aperitivo con vista skyline, tour quartieri moderni, Bosco Verticale e rooftop panoramici. Design, architettura e cocktail d\'autore.',
  keywords: ['Milano aperitivo', 'aperitivo Milano', 'rooftop Milano', 'Bosco Verticale', 'Porta Nuova', 'cocktail Milano', 'design tour Milano', 'skyline Milano']
}

export default function MilanoAperitivo() {
  const highlights = [
    {
      icon: <Wine className="h-6 w-6 text-accent-600" />,
      title: 'Aperitivo d\'Autore',
      description: 'Cocktail signature nei migliori rooftop con vista skyline e degustazione fingerfood gourmet'
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary-600" />,
      title: 'Tour Architettonico',
      description: 'Bosco Verticale, Porta Nuova e CityLife con guida esperta di design e architettura contemporanea'  
    },
    {
      icon: <Camera className="h-6 w-6 text-blue-600" />,
      title: 'Fotografia Urbana',
      description: 'Shooting professionale nei punti più Instagram dei quartieri moderni milanesi'
    },
    {
      icon: <Palette className="h-6 w-6 text-gold-600" />,
      title: 'Design Experience',
      description: 'Visita showroom esclusivi e concept store durante la Milano Design Week'
    }
  ]

  const itinerary = [
    {
      time: '18:00',
      title: 'Ritrovo Porta Garibaldi',
      description: 'Meet point alla stazione Porta Garibaldi. Accoglienza con welcome drink e briefing sul tour.',
      location: 'Stazione Porta Garibaldi'
    },
    {
      time: '18:30', 
      title: 'Bosco Verticale Walking Tour',
      description: 'Passeggiata guidata intorno al Bosco Verticale con spiegazioni di architettura sostenibile e fotografia.',
      location: 'Piazza Gae Aulenti'
    },
    {
      time: '19:15',
      title: 'Primo Aperitivo Rooftop',
      description: 'Cocktail signature con vista Torre Unicredit. Spritz milanese e finger food gourmet.',
      location: 'Ceresio 7 o alternativa'
    },
    {
      time: '20:00',
      title: 'CityLife Skyline Tour', 
      description: 'Spostamento verso CityLife per ammirare le Tre Torri e il nuovo skyline milanese al tramonto.',
      location: 'CityLife District'
    },
    {
      time: '20:45',
      title: 'Secondo Aperitivo Panoramico',
      description: 'Gran finale con cocktail d\'autore e vista 360° sulla Milano moderna. Networking e socializing.',
      location: 'Radio Rooftop Milano'
    }
  ]

  const includes = [
    'Guida esperta di architettura e design milanese',
    '2 aperitivi completi con cocktail signature',  
    'Finger food gourmet e stuzzichini milanesi',
    'Walking tour Porta Nuova e CityLife',
    'Accesso esclusivo ai migliori rooftop',
    'Fotografie ricordo professionali',
    'Mappa e guida digitale quartieri moderni'
  ]

  const notIncludes = [
    'Trasporti per raggiungere il punto di ritrovo',
    'Cena (solo finger food durante aperitivi)',
    'Acquisti personali nei concept store',
    'Assicurazione viaggio',
    'Eventuali ingressi a musei o mostre'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/milano-skyline-hero.webp"
            alt="Skyline di Milano con grattacieli moderni per aperitivo design tour"
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
              <span className="text-accent-400 font-medium">Esperienza Esclusiva Milano</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Aperitivo & Design Tour
              <span className="block text-accent-400">Skyline Milano</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Un viaggio tra i grattacieli moderni di Milano con aperitivo d'autore nei rooftop panoramici. 
              Bosco Verticale, cocktail signature e architettura contemporanea.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                3 ore (18:00-21:00)
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                2-12 persone
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Porta Nuova - CityLife
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Esperienza Premium
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
              <p className="text-2xl font-bold text-gray-900">€89 <span className="text-lg font-normal text-gray-600">per persona</span></p>
              <p className="text-sm text-gray-600">Include 2 aperitivi + tour guidato</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="https://www.getyourguide.it/milano-l152/aperitivo-design-tour-t12345"
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Wine className="h-5 w-5 mr-2" />
                Prenota Esperienza
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
              Un'Esperienza Unica nel Cuore Moderno di Milano
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scopri la Milano contemporanea con aperitivo d'autore, architettura all'avanguardia e vista skyline mozzafiato
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
              Programma della Serata
            </h2>
            <p className="text-xl text-gray-600">
              3 ore di puro design, architettura e aperitivo milanese d'eccellenza
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
            Aperitivo Milano: Momenti Indimenticabili
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Image
                src="/images/destinations/milano-skyline-hero.webp"
                alt="Vista panoramica skyline Milano con grattacieli moderni"
                width={800}
                height={500}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/destinations/milano-skyline-hero.webp"
                alt="Bosco Verticale Porta Nuova Milano"
                width={400}
                height={250}
                className="w-full h-32 md:h-36 object-cover rounded-xl"
              />
              <Image
                src="/images/destinations/milano-skyline-hero.webp"
                alt="Rooftop aperitivo Milano con cocktail"
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
                <li><strong>Giorni:</strong> Giovedì-Sabato</li>
                <li><strong>Orario:</strong> 18:00-21:00</li>
                <li><strong>Durata:</strong> 3 ore</li>
                <li><strong>Stagione:</strong> Tutto l'anno</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👥 Gruppo
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Minimo:</strong> 2 persone</li>
                <li><strong>Massimo:</strong> 12 persone</li>
                <li><strong>Età:</strong> 18+ (verifiche ID)</li>
                <li><strong>Lingua:</strong> Italiano/Inglese</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📍 Logistica
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Ritrovo:</strong> Porta Garibaldi FS</li>
                <li><strong>Fine:</strong> CityLife o centro</li>
                <li><strong>Trasporti:</strong> Metro + walking</li>
                <li><strong>Dress code:</strong> Smart casual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prenota il Tuo Aperitivo Design Tour
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Un'esperienza esclusiva tra i grattacieli di Milano con cocktail d'autore e architettura contemporanea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.getyourguide.it/milano-l152/aperitivo-design-tour-t12345"
              className="btn-primary bg-accent-500 hover:bg-accent-600 text-white border-none inline-flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Wine className="h-5 w-5 mr-2" />
              Prenota ora €89
            </Link>
            <Link
              href="/destinazioni/milano"
              className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              Scopri Milano
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-blue-200">
            <p>✅ Cancellazione gratuita fino a 24h prima • ⭐ Valutazione media 4.9/5</p>
          </div>
        </div>
      </section>
    </div>
  )
}