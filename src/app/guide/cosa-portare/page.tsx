import { Metadata } from 'next'
import { Backpack, Sun, Umbrella, Camera, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosa Portare in Viaggio in Italia',
  description: 'Lista completa di cosa mettere in valigia per il tuo viaggio in Italia. Abbigliamento, documenti e accessori essenziali.',
  keywords: ['cosa portare Italia', 'valigia Italia', 'abbigliamento viaggio Italia'],
}

export default function CosaPortarePage() {
  const categories = [
    {
      name: 'Documenti Essenziali',
      icon: Heart,
      items: ['Passaporto o Carta d\'Identità', 'Tessera Sanitaria/EHIC', 'Assicurazione viaggio', 'Prenotazioni hotel e voli', 'Patente (se noleggi auto)']
    },
    {
      name: 'Abbigliamento Base',
      icon: Sun,
      items: ['Scarpe comode da camminata', 'Abbigliamento a strati', 'Giacca impermeabile', 'Cappello e occhiali da sole', 'Costume da bagno (estate)']
    },
    {
      name: 'Tech & Accessori',
      icon: Camera,
      items: ['Caricabatterie e power bank', 'Adattatore prese EU', 'Fotocamera/smartphone', 'Cuffie', 'App offline mappe']
    },
    {
      name: 'Per il Maltempo',
      icon: Umbrella,
      items: ['Ombrello compatto', 'Giacca antipioggia', 'Scarpe impermeabili', 'Borsa impermeabile', 'Asciugamano veloce']
    }
  ]

  const seasonalTips = [
    {
      season: 'Primavera (Mar-Mag)',
      temp: '15-20°C',
      clothing: ['Giacca leggera', 'Magliette a maniche lunghe', 'Jeans o pantaloni'],
      extra: ['Ombrello per piogge primaverili']
    },
    {
      season: 'Estate (Giu-Ago)',
      temp: '25-35°C',
      clothing: ['T-shirt e canotte', 'Shorts e vestiti leggeri', 'Sandali e scarpe traspiranti'],
      extra: ['Crema solare SPF 50+', 'Cappello a tesa larga']
    },
    {
      season: 'Autunno (Set-Nov)',
      temp: '10-20°C',
      clothing: ['Maglioni leggeri', 'Giacca media', 'Pantaloni lunghi'],
      extra: ['Strati facilmente removibili']
    },
    {
      season: 'Inverno (Dic-Feb)',
      temp: '5-15°C',
      clothing: ['Cappotto pesante', 'Maglioni', 'Sciarpa e guanti'],
      extra: ['Scarpe chiuse e calde']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container-custom text-center">
          <Backpack className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cosa Portare in Italia
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Guida completa per preparare la valigia perfetta per il tuo viaggio italiano
          </p>
        </div>
      </section>

      {/* Essential Categories */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Essenziali per Ogni Viaggio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="text-center mb-4">
                    <IconComponent className="h-10 w-10 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Seasonal Guide */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Guida Stagionale
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {seasonalTips.map((season, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{season.season}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {season.temp}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Abbigliamento:</h4>
                      <ul className="text-sm space-y-1">
                        {season.clothing.map((item, idx) => (
                          <li key={idx} className="text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Extra:</h4>
                      <ul className="text-sm space-y-1">
                        {season.extra.map((item, idx) => (
                          <li key={idx} className="text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Notice */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Backpack className="h-5 w-5 text-amber-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>Lista Personalizzata in Arrivo</strong><br />
                    Stiamo sviluppando uno strumento per creare liste personalizzate 
                    in base alla tua destinazione, stagione e tipo di viaggio.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consigli Rapidi</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="text-gray-600">✈️ Porta sempre un cambio nel bagaglio a mano</li>
                  <li className="text-gray-600">🚶‍♀️ Scarpe comode sono essenziali per camminare</li>
                  <li className="text-gray-600">📱 Scarica mappe offline prima di partire</li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-gray-600">💰 Porta contanti per piccoli acquisti</li>
                  <li className="text-gray-600">🔌 Adattatore EU necessario per dispositivi</li>
                  <li className="text-gray-600">📄 Fai copie digitali dei documenti</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}