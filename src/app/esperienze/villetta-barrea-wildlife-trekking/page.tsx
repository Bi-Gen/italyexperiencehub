import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Binoculars, Camera, Mountain, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wildlife Safari Villetta Barrea: Trekking e Avvistamento Orso Bruno | Parco Nazionale Abruzzo',
  description: 'Safari fotografico esclusivo nel Parco Nazionale d\'Abruzzo: trekking guidato per avvistare orso bruno marsicano, lupi, cervi. Esperienza natura incontaminata con guida esperta.',
  keywords: ['orso bruno marsicano', 'wildlife safari Abruzzo', 'trekking Parco Nazionale Abruzzo', 'Villetta Barrea', 'avvistamento fauna', 'lupo appenninico', 'fotografia naturalistica']
}

export default function VillettaBarreaWildlifeTour() {
  const highlights = [
    {
      icon: <Binoculars className="h-6 w-6 text-accent-600" />,
      title: 'Safari Orso Bruno Marsicano',
      description: 'Trekking guidato con possibilità di avvistare l\'orso più raro al mondo in libertà nel suo habitat naturale'
    },
    {
      icon: <Mountain className="h-6 w-6 text-primary-600" />,
      title: 'Val di Rose Wilderness',
      description: 'Escursione nella valle più selvaggia del parco, habitat ideale per orsi, lupi e ungulati'  
    },
    {
      icon: <Camera className="h-6 w-6 text-blue-600" />,
      title: 'Fotografia Naturalistica',
      description: 'Workshop fotografico con guida esperta per immortalare fauna selvatica e paesaggi alpini'
    },
    {
      icon: <TreePine className="h-6 w-6 text-green-600" />,
      title: 'Natura Incontaminata',
      description: 'Immersione completa nell\'ecosistema del parco più antico d\'Italia con fauna endemica'
    }
  ]

  const itinerary = [
    {
      time: '6:30',
      title: 'Ritrovo Alba a Villetta Barrea',
      description: 'Incontro all\'alba con la guida naturalistica esperta e briefing sulla fauna del parco. Colazione energetica inclusa.',
      location: 'Centro Visita Villetta Barrea'
    },
    {
      time: '7:00', 
      title: 'Inizio Trekking Val di Rose',
      description: 'Partenza per la Val di Rose, valle selvaggia dove la densità di orsi è più alta. Cammino silenzioso in fila indiana.',
      location: 'Sentiero Val di Rose'
    },
    {
      time: '8:30',
      title: 'Prima Sosta Avvistamento',
      description: 'Pausa strategica in area frequentata dall\'orso bruno. Osservazione tracce, impronte e segni di presenza.',
      location: 'Radure Val di Rose'
    },
    {
      time: '10:00',
      title: 'Faggeta Monumentale', 
      description: 'Attraversamento della faggeta primaria secolare. Spiegazioni su ecosistema e catena alimentare del parco.',
      location: 'Bosco di faggi secolari'
    },
    {
      time: '11:30',
      title: 'Workshop Fotografia Natura',
      description: 'Tecniche di fotografia naturalistica, uso del teleobiettivo, composizione paesaggistica con guida fotografo.',
      location: 'Belvedere panoramico'
    },
    {
      time: '12:30',
      title: 'Pranzo al Sacco in Natura',
      description: 'Pranzo con prodotti tipici locali in area panoramica. Degustazione formaggi e miele di montagna.',
      location: 'Area picnic attrezzata'
    },
    {
      time: '14:00',
      title: 'Lago di Barrea Wildlife',
      description: 'Discesa verso il lago per avvistamento uccelli acquatici e ungulati che vengono ad abbeverarsi.',
      location: 'Sponde Lago di Barrea'
    },
    {
      time: '15:30',
      title: 'Castello e Belvedere',
      description: 'Salita ai ruderi del castello medievale per panorama a 360° e possibili avvistamenti di rapaci.',
      location: 'Castello Villetta Barrea'
    },
    {
      time: '16:30',
      title: 'Conclusione e Sharing',
      description: 'Condivisione foto scattate, identificazione specie avvistate e consegna certificato safari.',
      location: 'Centro Villetta Barrea'
    }
  ]

  const includes = [
    'Guida naturalistica certificata Parco Nazionale Abruzzo',
    'Binocolo professionale 10x42 per tutta la durata',
    'Colazione energetica prima del trekking',
    'Pranzo al sacco con prodotti tipici locali',
    'Degustazione formaggi e miele di montagna',
    'Workshop fotografia naturalistica (2 ore)',
    'Mappa sentieri e guida fauna del parco',
    'Certificato "Wildlife Safari" personalizzato'
  ]

  const notIncludes = [
    'Trasporti per raggiungere Villetta Barrea',
    'Attrezzatura fotografica (teleobiettivi disponibili a noleggio €15)',
    'Assicurazione infortuni montagna (consigliata)',
    'Pernottamento e cene',
    'Acquisti nel negozio natura del centro visita'
  ]

  const animalInfo = [
    {
      name: 'Orso Bruno Marsicano',
      probability: 'Media-Alta (30%)',
      description: 'Solo 60 esemplari al mondo. Sottospecie endemica più piccola dell\'orso europeo.',
      bestTime: 'Alba e tramonto',
      signs: 'Impronte, graffi su alberi, escrementi'
    },
    {
      name: 'Lupo Appenninico', 
      probability: 'Media (20%)',
      description: 'Predatore simbolo dell\'Appennino. Avvistamenti più probabili in branco.',
      bestTime: 'Mattino presto',
      signs: 'Ululati notturni, tracce, resti di prede'
    },
    {
      name: 'Cervo Nobile',
      probability: 'Alta (80%)',
      description: 'Magnifico ungulato, spettacolare durante il bramito autunnale.',
      bestTime: 'Alba e sera',
      signs: 'Sentieri battuti, bramiti, palchi caduti'
    },
    {
      name: 'Camoscio d\'Abruzzo',
      probability: 'Media (40%)',
      description: 'Sottospecie endemica che vive sulle pareti rocciose più impervie.',
      bestTime: 'Mattino',
      signs: 'Tracce su roccia, sentieri di cresta'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/abruzzo/villetta-barrea-lago-hero.avif"
            alt="Villetta Barrea nel Parco Nazionale d'Abruzzo per wildlife safari e avvistamento orso bruno"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <Binoculars className="h-8 w-8 mr-3 text-accent-400" />
              <span className="text-accent-400 font-medium">Wildlife Safari Esclusivo</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Orso Bruno Safari
              <span className="block text-accent-400">Parco Nazionale Abruzzo</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Trekking guidato nella natura più selvaggia d'Italia per avvistare l'orso bruno marsicano, 
              lupi appenninici e fauna endemica nel loro habitat naturale.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                10 ore (6:30-16:30)
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                2-6 persone
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Val di Rose - Lago Barrea
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Safari Professionale
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
              <p className="text-2xl font-bold text-gray-900">€95 <span className="text-lg font-normal text-gray-600">per persona</span></p>
              <p className="text-sm text-gray-600">Include guida, attrezzatura, pasti e workshop</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="mailto:info@italyexperiencehub.com?subject=Prenotazione Wildlife Safari Villetta Barrea"
                className="btn-primary inline-flex items-center"
              >
                <Binoculars className="h-5 w-5 mr-2" />
                Prenota Safari
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
              Safari nella Natura più Selvaggia d'Italia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un'esperienza unica per avvistare l'orso bruno marsicano e la fauna endemica del parco più antico d'Italia
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

      {/* Animal Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fauna che Potresti Avvistare
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {animalInfo.map((animal, index) => (
              <div key={index} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {animal.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    animal.probability.includes('Alta') ? 'bg-green-100 text-green-700' :
                    animal.probability.includes('Media') ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {animal.probability}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {animal.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div><strong>Momento migliore:</strong> {animal.bestTime}</div>
                  <div><strong>Segni di presenza:</strong> {animal.signs}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Programma Wildlife Safari
            </h2>
            <p className="text-xl text-gray-600">
              10 ore di immersione totale nella natura selvaggia del Parco Nazionale d'Abruzzo
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Natura Selvaggia del Parco Nazionale d'Abruzzo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-parco-nazionale-abruzzo.jpg"
                alt="Natura selvaggia Parco Nazionale Abruzzo con fauna"
                width={800}
                height={500}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-sentieri-trekking.jpg"
                alt="Sentieri trekking Val di Rose per avvistamento orso"
                width={400}
                height={250}
                className="w-full h-32 md:h-36 object-cover rounded-xl"
              />
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-castello-medievale.jpg"
                alt="Belvedere castello Villetta Barrea panorama"
                width={400}
                height={250}
                className="w-full h-32 md:h-36 object-cover rounded-xl"
              />
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

      {/* Conservation Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="card p-8 bg-green-50 border-green-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🐻 Turismo Responsabile e Conservazione
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Solo 60 Orsi al Mondo</h3>
                <p className="text-sm text-gray-600">
                  L'orso bruno marsicano è una sottospecie endemica in via di estinzione. 
                  Ogni avvistamento contribuisce al monitoraggio scientifico.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gruppi Piccoli</h3>
                <p className="text-sm text-gray-600">
                  Massimo 6 persone per minimizzare disturbo alla fauna e garantire 
                  un'esperienza autentica e rispettosa.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Guide Certificate</h3>
                <p className="text-sm text-gray-600">
                  Guide naturalistiche con formazione specifica sulla fauna del parco 
                  e tecniche di avvistamento non invasive.
                </p>
              </div>
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
                <li><strong>Periodo:</strong> Aprile-Ottobre</li>
                <li><strong>Giorni:</strong> Su prenotazione</li>
                <li><strong>Orario:</strong> 6:30-16:30</li>
                <li><strong>Stagione migliore:</strong> Maggio-Giugno, Settembre</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👥 Requisiti
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Età minima:</strong> 12 anni</li>
                <li><strong>Forma fisica:</strong> Buona (8 km trekking)</li>
                <li><strong>Abbigliamento:</strong> Montagna, silenzioso</li>
                <li><strong>Calzature:</strong> Scarponi trekking obbligatori</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📍 Logistica
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Ritrovo:</strong> Centro Visita Villetta Barrea</li>
                <li><strong>Parcheggio:</strong> Gratuito disponibile</li>
                <li><strong>Prenotazione:</strong> 7 giorni anticipo minimo</li>
                <li><strong>Meteo:</strong> Tour rimandato se pioggia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prenota il Tuo Wildlife Safari
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Un'esperienza unica per avvistare l'orso bruno marsicano nel Parco Nazionale d'Abruzzo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:info@italyexperiencehub.com?subject=Prenotazione Wildlife Safari Villetta Barrea&body=Buongiorno, vorrei prenotare il Wildlife Safari a Villetta Barrea. Grazie!"
              className="btn-primary bg-accent-500 hover:bg-accent-600 text-white border-none inline-flex items-center justify-center"
            >
              <Binoculars className="h-5 w-5 mr-2" />
              Prenota Safari €95
            </Link>
            <Link
              href="/destinazioni/villetta-barrea"
              className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              Scopri Villetta Barrea
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-blue-200">
            <p>✅ Esperienza sostenibile certificata • 🐻 Contributo alla conservazione • 📸 Foto professionali incluse</p>
          </div>
        </div>
      </section>
    </div>
  )
}