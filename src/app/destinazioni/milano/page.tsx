import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star, Train, Plane, Car, Utensils, ShoppingBag, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Milano: Guida Turismo 2025 | Cosa Vedere, Dove Andare',
  description: 'Milano guida completa 2025: Duomo, Navigli, shopping, aeroporti, metro, eventi. Tutto per visitare la capitale della moda italiana.',
  keywords: ['Milano turismo', 'visitare Milano', 'Milano cosa vedere', 'Milano guida', 'Milano 2025', 'Duomo Milano', 'Navigli Milano', 'shopping Milano', 'Milano aeroporto', 'metro Milano']
}

export default function MilanoPage() {
  const quickFacts = [
    { label: 'Popolazione', value: '1.4M abitanti', icon: Users },
    { label: 'Aeroporti', value: 'Malpensa, Linate', icon: Plane },
    { label: 'Metro Linee', value: '4 linee (M1-M5)', icon: Train },
    { label: 'Periodo Migliore', value: 'Apr-Giu, Set-Ott', icon: Star }
  ]

  const districts = [
    {
      name: 'Centro Storico',
      highlights: 'Duomo, Scala, Galleria',
      description: 'Il cuore pulsante con i monumenti iconici',
      transport: 'M1/M3 Duomo'
    },
    {
      name: 'Quadrilatero Moda',
      highlights: 'Montenapoleone, Spiga',
      description: 'Shopping di lusso nelle vie più esclusive',
      transport: 'M3 Montenapoleone'
    },
    {
      name: 'Navigli',
      highlights: 'Aperitivi, Vita Notturna',
      description: 'Canali storici e movida milanese',
      transport: 'M2 Porta Genova'
    },
    {
      name: 'Brera',
      highlights: 'Arte, Pinacoteca, Design',
      description: 'Quartiere bohémien dell\'arte',
      transport: 'M2 Lanza'
    },
    {
      name: 'Porta Nuova',
      highlights: 'Grattacieli, Bosco Verticale',
      description: 'Milano moderna e innovativa',
      transport: 'M2/M5 Garibaldi'
    },
    {
      name: 'Porta Ticinese',
      highlights: 'Colonne San Lorenzo',
      description: 'Storia romana e vita universitaria',
      transport: 'M3 Missori'
    }
  ]

  const practicalInfo = [
    {
      title: 'Come Arrivare',
      icon: Plane,
      items: [
        'Aeroporto Malpensa: Malpensa Express (50 min)',
        'Aeroporto Linate: Bus 73 + M1 (45 min)',
        'Stazione Centrale: Collegamenti internazionali',
        'Auto: ZTL attiva in centro, parcheggi a pagamento'
      ]
    },
    {
      title: 'Muoversi in Città',
      icon: Train,
      items: [
        'Metropolitana: 4 linee, biglietto €2 (90 min)',
        'Tram storici: Linee 1, 2, 3 per il centro',
        'BikeMi: Bike sharing, €6/giorno',
        'Taxi/Uber: Disponibili, corse da €10-15'
      ]
    },
    {
      title: 'Quando Visitare',
      icon: Star,
      items: [
        'Primavera (Apr-Giu): Clima ideale, Fuorisalone',
        'Estate (Lug-Ago): Caldo, molti locali chiusi',
        'Autunno (Set-Ott): Perfetto, Settimana della Moda',
        'Inverno (Nov-Mar): Freddo, periodo teatro/mostre'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/milano-skyline-hero.webp"
            alt="Milano Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Milano - Capitale della Moda
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-6">
              Design, business e aperitivi nel cuore economico d'Italia
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lombardia, Nord Italia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>1.4M abitanti</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Capitale Economica</span>
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
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <IconComponent className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{fact.value}</div>
                  <div className="text-sm text-gray-600">{fact.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Districts Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quartieri di Milano
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni quartiere racconta una Milano diversa: dalla storia al design, dalla moda alla movida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districts.map((district, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{district.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{district.highlights}</p>
                <p className="text-gray-600 text-sm mb-4">{district.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Train className="h-3 w-3 mr-1" />
                  {district.transport}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Informazioni Pratiche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutto quello che serve per organizzare il viaggio perfetto a Milano
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {practicalInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
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
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              La Nostra Guida Completa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Itinerario dettagliato con mappe, orari e consigli insider
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link href="/guide/milano-3-giorni" className="card group overflow-hidden hover:shadow-xl transition-all duration-300 p-0">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <Image
                    src="/images/guides/duomo-facciata.jpg"
                    alt="Milano in 3 Giorni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-gold-400" />
                    <span className="text-gold-600 font-medium">Guida Più Letta</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    Come Visitare Milano in 3 Giorni
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Itinerario completo giorno per giorno: Duomo, Scala, Navigli, shopping e cucina milanese. 
                    Con mappe interattive, orari aggiornati e consigli degli esperti locali.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        15 min lettura
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        25K+ visualizzazioni
                      </span>
                    </div>
                    <span className="text-primary-600 font-medium group-hover:text-primary-700">
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
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h2 className="text-3xl font-bold mb-4">
            Pronto per Scoprire Milano?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Dalle terrazze del Duomo agli aperitivi sui Navigli: Milano ti aspetta con le sue mille sfaccettature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/milano-3-giorni" className="btn-primary bg-accent-500 hover:bg-accent-600">
              Inizia la Visita
            </Link>
            <Link href="/esperienze" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30">
              Esperienze Milano
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}