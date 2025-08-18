import { Metadata } from 'next'
import { Train, Car, Plane, Bus, Ship, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trasporti in Italia - Guida Completa',
  description: 'Guida completa ai trasporti in Italia: treni, autobus, auto a noleggio, voli interni. Come muoversi facilmente tra le città italiane.',
  keywords: ['trasporti Italia', 'treni Italia', 'autobus Italia', 'auto noleggio Italia'],
}

export default function TrasportiPage() {
  const transportModes = [
    {
      name: 'Treno',
      icon: Train,
      description: 'Il modo più comodo per spostarsi tra le città principali',
      pros: ['Veloce e puntuale', 'Collegamento city center', 'Panorami spettacolari'],
      companies: ['Trenitalia', 'Italo', 'Trenord']
    },
    {
      name: 'Auto a Noleggio',
      icon: Car,
      description: 'Massima libertà per esplorare borghi e campagne',
      pros: ['Flessibilità totale', 'Accesso a borghi', 'Viaggi in famiglia'],
      companies: ['Hertz', 'Avis', 'Europcar']
    },
    {
      name: 'Voli Interni',
      icon: Plane,
      description: 'Ideale per lunghe distanze Nord-Sud',
      pros: ['Veloce per lunghe tratte', 'Collegamento isole', 'Tariffe low-cost'],
      companies: ['Alitalia', 'Ryanair', 'EasyJet']
    },
    {
      name: 'Autobus',
      icon: Bus,
      description: 'Economico per collegamenti regionali',
      pros: ['Economico', 'Capillare', 'Bagagli inclusi'],
      companies: ['FlixBus', 'MarinoBus', 'Autostradale']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom text-center">
          <Train className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trasporti in Italia
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Guida completa per muoversi facilmente in tutta Italia con tutti i mezzi di trasporto
          </p>
        </div>
      </section>

      {/* Transport Modes */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {transportModes.map((mode) => {
              const IconComponent = mode.icon
              return (
                <div key={mode.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{mode.name}</h3>
                      <p className="text-sm text-gray-600">{mode.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Vantaggi:</h4>
                      <ul className="text-sm space-y-1">
                        {mode.pros.map((pro, idx) => (
                          <li key={idx} className="text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Principali Compagnie:</h4>
                      <div className="flex flex-wrap gap-2">
                        {mode.companies.map((company, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Detailed Guide */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Consigli per i Trasporti</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Contenuto in Sviluppo</strong><br />
                      Stiamo preparando una guida dettagliata con orari, prezzi, 
                      consigli di prenotazione e itinerari consigliati per ogni mezzo di trasporto.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Suggerimenti Generali</h3>
              <ul>
                <li><strong>Prenota in anticipo:</strong> Soprattutto in alta stagione per treni ad alta velocità</li>
                <li><strong>Carta fedeltà:</strong> Considera le carte sconto per viaggi frequenti</li>
                <li><strong>App utili:</strong> Scarica le app ufficiali per orari e prenotazioni</li>
                <li><strong>Bagagli:</strong> Controlla sempre le politiche bagagli</li>
              </ul>

              <h3>Collegamenti Principali</h3>
              <p>
                I collegamenti più frequenti sono: Milano-Roma, Roma-Napoli, Milano-Venezia, 
                Firenze-Roma. Per le isole, considera traghetti da Civitavecchia (Sardegna) 
                e Villa San Giovanni (Sicilia).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}