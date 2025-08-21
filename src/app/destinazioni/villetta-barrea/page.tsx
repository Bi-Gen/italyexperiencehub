import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Camera, Mountain, TreePine, Fish, Snowflake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Villetta Barrea: Borgo Incantevole nel Parco Nazionale d\'Abruzzo | Italy Experience Hub',
  description: 'Scopri Villetta Barrea, perla del Parco Nazionale d\'Abruzzo. Lago cristallino, castello medievale, natura incontaminata e tradizioni autentiche. Guida completa 2025.',
  keywords: ['Villetta Barrea', 'Parco Nazionale Abruzzo', 'Lago di Barrea', 'borghi Abruzzo', 'turismo natura', 'castello medievale', 'trekking Abruzzo'],
}

export default function VillettaBarreaPage() {
  const highlights = [
    {
      icon: <Mountain className="h-6 w-6 text-primary-600" />,
      title: 'Parco Nazionale d\'Abruzzo',
      description: 'Nel cuore del parco più antico d\'Italia, tra natura incontaminata e fauna selvatica'
    },
    {
      icon: <Fish className="h-6 w-6 text-blue-600" />,
      title: 'Lago di Barrea',
      description: 'Specchio d\'acqua cristallino perfetto per kayak, pesca e fotografia naturalistica'
    },
    {
      icon: <Camera className="h-6 w-6 text-gold-600" />,
      title: 'Castello Medievale',
      description: 'Resti storici con panorami mozzafiato sulla valle e il borgo sottostante'
    },
    {
      icon: <TreePine className="h-6 w-6 text-green-600" />,
      title: 'Sentieri Naturalistici',
      description: 'Rete di percorsi per tutti i livelli, dall\'easy walking al trekking avanzato'
    }
  ]

  const activities = [
    {
      title: 'Trekking e Natura',
      duration: '2-6 ore',
      difficulty: 'Facile-Media',
      description: 'Sentieri del parco, avvistamento fauna, fotografia naturalistica',
      bestTime: 'Aprile-Ottobre'
    },
    {
      title: 'Attività Lacustri',
      duration: '1-4 ore', 
      difficulty: 'Facile',
      description: 'Kayak, canoa, pesca sportiva, giri in pedalò',
      bestTime: 'Maggio-Settembre'
    },
    {
      title: 'Tour Storico-Culturale',
      duration: '2-3 ore',
      difficulty: 'Facile',
      description: 'Centro storico, castello, tradizioni locali, artigianato',
      bestTime: 'Tutto l\'anno'
    },
    {
      title: 'Esperienza Invernale',
      duration: '1-3 ore',
      difficulty: 'Facile',
      description: 'Borgo innevato, ciaspolate, atmosfere fiabesche',
      bestTime: 'Dicembre-Marzo'
    }
  ]

  const practicalInfo = [
    {
      title: 'Come Arrivare',
      content: 'Auto: A25 uscita Pescasseroli, poi SS83 (1h da L\'Aquila). Treno: Avezzano + bus ARPA. Aereo: Roma Fiumicino (2.5h auto).'
    },
    {
      title: 'Dove Alloggiare',
      content: 'Hotel diffuso, B&B caratteristici, case vacanze. Prenotare in anticipo ad agosto e per eventi speciali.'
    },
    {
      title: 'Cucina Tipica',
      content: 'Arrosticini, agnello alla griglia, formaggi locali, miele di montagna, liquori alle erbe. Ristoranti tipici nel centro.'
    },
    {
      title: 'Cosa Portare',
      content: 'Scarpe da trekking, giacca impermeabile, fotocamera, binocolo per fauna. D\'inverno: abbigliamento termico.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/abruzzo/villetta-barrea-lago-hero.avif"
            alt="Villetta Barrea sul Lago di Barrea nel Parco Nazionale d'Abruzzo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container-custom text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Villetta Barrea
              <span className="block text-gold-400">Perla del Parco Nazionale</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Un borgo incantevole affacciato sul lago cristallino, nel cuore del Parco Nazionale d'Abruzzo. 
              Natura incontaminata, storia medievale e tradizioni autentiche.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Parco Nazionale d'Abruzzo, Lazio e Molise
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Borgo di 300 abitanti
              </div>
              <div className="flex items-center">
                <Mountain className="h-4 w-4 mr-2" />
                1.066m altitudine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perché Visitare Villetta Barrea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un'esperienza unica tra natura selvaggia e patrimonio culturale nel parco più antico d'Italia
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

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Villetta Barrea in Immagini
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2 lg:col-span-2">
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-centro-storico.jpg"
                alt="Centro storico di Villetta Barrea con case in pietra"
                width={800}
                height={500}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-castello-medievale.jpg"
                alt="Castello medievale di Villetta Barrea"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-lago-attività.jpg"
                alt="Attività sul Lago di Barrea - kayak e canoa"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-parco-nazionale-abruzzo.jpg"
                alt="Natura del Parco Nazionale d'Abruzzo"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-inverno-neve.jpeg"
                alt="Villetta Barrea in inverno con la neve"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cosa Fare a Villetta Barrea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Attività per ogni stagione e interesse, dalla natura all'arte, dal relax all'avventura
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {activity.title}
                  </h3>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                    {activity.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {activity.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center">
                    <Snowflake className="h-4 w-4 mr-1" />
                    {activity.bestTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Images */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Villetta Barrea in Ogni Stagione
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-sentieri-trekking.jpg"
                alt="Sentieri di trekking intorno a Villetta Barrea"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Primavera-Estate: Natura Rigogliosa
                </h3>
                <p className="text-gray-600">
                  I mesi caldi sono perfetti per trekking, attività lacustri e avvistamento fauna. 
                  Temperature miti e natura al massimo splendore.
                </p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-eventi-tradizioni.jpg"
                alt="Eventi e tradizioni di Villetta Barrea"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Autunno-Inverno: Atmosfere Magiche
                </h3>
                <p className="text-gray-600">
                  Colori autunnali spettacolari e inverni fiabeschi con neve. 
                  Stagione ideale per relax, cultura e sapori autentici.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Informazioni Pratiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutto quello che serve sapere per organizzare la tua visita a Villetta Barrea
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practicalInfo.map((info, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Sapori Autentici d'Abruzzo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/destinations/abruzzo/villetta-barrea-cucina-tipica.jpg"
                alt="Cucina tipica abruzzese di Villetta Barrea"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Tradizioni Gastronomiche di Montagna
              </h3>
              <p className="text-gray-600 mb-4">
                La cucina di Villetta Barrea riflette le tradizioni pastorali abruzzesi: 
                arrosticini alla brace, formaggi di malga, agnello locale e miele di montagna.
              </p>
              <p className="text-gray-600">
                Non perdere i ristoranti familiari nel centro storico, dove ancora si preparano 
                ricette tramandate da generazioni con ingredienti del territorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="card p-8 bg-primary-50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dove Soggiornare
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/images/destinations/abruzzo/villetta-barrea-alloggi-tipici.jpg"
                  alt="Alloggi tipici e B&B di Villetta Barrea"
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ospitalità Autentica
                </h3>
                <p className="text-gray-600 mb-4">
                  Villetta Barrea offre un'ospitalità genuina in B&B familiari, case vacanze 
                  e piccoli hotel diffusi che preservano l'atmosfera del borgo.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-gold-500 mr-2" />
                    B&B con vista lago e montagne
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-gold-500 mr-2" />
                    Case vacanze nel centro storico
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-gold-500 mr-2" />
                    Agriturismi nei dintorni
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Scopri Altri Borghi d'Abruzzo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            L'Abruzzo è ricco di borghi autentici immersi nella natura. Continua la tua esplorazione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/destinazioni"
              className="btn-primary bg-accent-500 hover:bg-accent-600 text-white border-none"
            >
              Tutte le Destinazioni
            </Link>
            <Link 
              href="/guide"
              className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              Guide di Viaggio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}