import { Metadata } from 'next'
import { FileText, CreditCard, Shield, Plane, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documenti per Viaggiare in Italia',
  description: 'Guida completa sui documenti necessari per viaggiare in Italia: passaporto, visto, assicurazione e documenti di viaggio.',
  keywords: ['documenti Italia', 'passaporto Italia', 'visto Italia', 'documenti viaggio'],
}

export default function DocumentiPage() {
  const euCitizens = [
    'Germania', 'Francia', 'Spagna', 'Paesi Bassi', 'Belgio', 'Austria', 
    'Portogallo', 'Grecia', 'Polonia', 'Danimarca', 'Svezia', 'Finlandia',
    'Irlanda', 'Estonia', 'Lettonia', 'Lituania', 'Slovenia', 'Slovacchia',
    'Repubblica Ceca', 'Ungheria', 'Romania', 'Bulgaria', 'Croazia', 'Malta', 'Cipro'
  ]

  const documentTypes = [
    {
      title: 'Cittadini UE',
      icon: CreditCard,
      color: 'text-green-600',
      bg: 'bg-green-50',
      requirements: [
        'Carta d\'identità valida per l\'espatrio',
        'Passaporto (non scaduto)',
        'Patente UE per noleggio auto',
        'Tessera Sanitaria Europea (EHIC)'
      ],
      note: 'Non serve visto per soggiorni turistici'
    },
    {
      title: 'Cittadini Extra-UE',
      icon: Plane,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      requirements: [
        'Passaporto valido (min. 6 mesi)',
        'Visto (se necessario per il paese)',
        'Patente internazionale',
        'Assicurazione sanitaria obbligatoria'
      ],
      note: 'Verifica sempre i requisiti visto per il tuo paese'
    },
    {
      title: 'Minori',
      icon: Shield,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      requirements: [
        'Carta d\'identità o passaporto proprio',
        'Autorizzazione genitori (se viaggia solo)',
        'Carta d\'identità dei genitori',
        'Documento del tutore (se applicabile)'
      ],
      note: 'Regole speciali per minori non accompagnati'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container-custom text-center">
          <FileText className="h-16 w-16 mx-auto mb-6 text-indigo-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Documenti per l'Italia
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Guida completa sui documenti necessari per il tuo viaggio in Italia
          </p>
        </div>
      </section>

      {/* Document Requirements */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {documentTypes.map((type) => {
              const IconComponent = type.icon
              return (
                <div key={type.title} className={`${type.bg} rounded-xl p-6 border border-gray-200`}>
                  <div className="text-center mb-6">
                    <IconComponent className={`h-12 w-12 ${type.color} mx-auto mb-3`} />
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Documenti Richiesti:</h4>
                      <ul className="space-y-2">
                        {type.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="w-1.5 h-1.5 bg-current rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-600 italic">{type.note}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Important Notice */}
              <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-red-800 mb-2">Importante</h3>
                    <p className="text-sm text-red-700">
                      Verifica sempre i requisiti aggiornati sul sito ufficiale del Ministero degli Esteri 
                      o del consolato italiano nel tuo paese, poiché le normative possono cambiare.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Paesi UE (senza visto)</h2>
              <div className="bg-green-50 rounded-lg p-4 my-4">
                <p className="text-sm text-green-800 mb-2"><strong>Cittadini di questi paesi NON necessitano di visto:</strong></p>
                <div className="text-xs text-green-700 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                  {euCitizens.map((country, idx) => (
                    <span key={idx}>• {country}</span>
                  ))}
                </div>
              </div>

              <h2>Documenti Aggiuntivi Consigliati</h2>
              <ul>
                <li><strong>Assicurazione di Viaggio:</strong> Altamente consigliata per tutti</li>
                <li><strong>Copia Digitale:</strong> Scansioni di tutti i documenti</li>
                <li><strong>Foto Tessera:</strong> Sempre utili per documenti sostitutivi</li>
                <li><strong>Prenotazioni:</strong> Hotel, voli e tour prenotati</li>
              </ul>

              <h2>Emergenze e Documenti Smarriti</h2>
              <p>
                In caso di furto o smarrimento documenti, contatta immediatamente:
              </p>
              <ul>
                <li>Polizia locale (113) per denuncia di furto</li>
                <li>Consolato del tuo paese in Italia</li>
                <li>Ambasciata per documenti sostitutivi</li>
              </ul>

              {/* Content Development Notice */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Guida in Espansione</strong><br />
                      Stiamo aggiungendo informazioni specifiche per ogni paese e 
                      procedure dettagliate per situazioni particolari.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}