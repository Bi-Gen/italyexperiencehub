import { Metadata } from 'next'
import { Sun, Cloud, Snowflake, Flower, Users, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quando Visitare l\'Italia - Guida Stagionale',
  description: 'Scopri il periodo migliore per visitare l\'Italia. Clima, stagioni, eventi e consigli per ogni mese dell\'anno.',
  keywords: ['quando visitare Italia', 'clima Italia', 'stagioni Italia', 'periodo migliore Italia'],
}

export default function QuandoVisitarePage() {
  const seasons = [
    {
      name: 'Primavera',
      months: 'Marzo - Maggio',
      icon: Flower,
      color: 'text-green-600',
      bg: 'bg-green-50',
      pros: ['Temperature miti', 'Fioritura spettacolare', 'Meno turisti'],
      cons: ['Piogge occasionali']
    },
    {
      name: 'Estate',
      months: 'Giugno - Agosto',
      icon: Sun,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      pros: ['Sole garantito', 'Mare perfetto', 'Festival estivi'],
      cons: ['Molto affollato', 'Caldo intenso']
    },
    {
      name: 'Autunno',
      months: 'Settembre - Novembre',
      icon: Cloud,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      pros: ['Clima ideale', 'Vendemmia', 'Colori autunnali'],
      cons: ['Piogge più frequenti']
    },
    {
      name: 'Inverno',
      months: 'Dicembre - Febbraio',
      icon: Snowflake,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      pros: ['Mercatini di Natale', 'Meno folla', 'Prezzi bassi'],
      cons: ['Freddo al nord', 'Giorni più corti']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quando Visitare l'Italia
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Scopri il periodo perfetto per il tuo viaggio in base al clima, eventi e preferenze personali.
          </p>
        </div>
      </section>

      {/* Seasons Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {seasons.map((season) => {
              const IconComponent = season.icon
              return (
                <div key={season.name} className={`${season.bg} rounded-xl p-6`}>
                  <div className="text-center mb-4">
                    <IconComponent className={`h-12 w-12 ${season.color} mx-auto mb-2`} />
                    <h3 className="text-xl font-bold text-gray-900">{season.name}</h3>
                    <p className="text-sm text-gray-600">{season.months}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-1">Pro:</h4>
                      <ul className="text-sm space-y-1">
                        {season.pros.map((pro, idx) => (
                          <li key={idx} className="text-gray-600">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-1">Contro:</h4>
                      <ul className="text-sm space-y-1">
                        {season.cons.map((con, idx) => (
                          <li key={idx} className="text-gray-600">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Detailed Guide */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Guida Dettagliata per Mese</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Contenuto in Sviluppo</strong><br />
                      Stiamo preparando una guida dettagliata mese per mese con temperature, 
                      eventi specifici e consigli personalizzati per ogni regione italiana.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Consigli Generali</h3>
              <ul>
                <li><strong>Alta Stagione:</strong> Luglio-Agosto (prezzi alti, molto affollato)</li>
                <li><strong>Media Stagione:</strong> Aprile-Giugno, Settembre-Ottobre (ideale)</li>
                <li><strong>Bassa Stagione:</strong> Novembre-Marzo (prezzi bassi, clima variabile)</li>
              </ul>

              <h3>Raccomandazioni per Regione</h3>
              <p>Ogni regione italiana ha le sue specificità climatiche e i periodi migliori per la visita.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}