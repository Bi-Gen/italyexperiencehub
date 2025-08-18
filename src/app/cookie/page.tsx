import { Metadata } from 'next'
import { Cookie, Shield } from 'lucide-react'
import CookieSettingsButton from '@/components/CookieSettingsButton'

export const metadata: Metadata = {
  title: 'Cookie Policy - Italy Experience Hub',
  description: 'Informazioni sui cookie utilizzati da Italy Experience Hub. Scopri come gestiamo i cookie e le tue preferenze privacy.',
  keywords: ['cookie policy', 'privacy cookie', 'gestione cookie'],
}

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20">
        <div className="container-custom text-center">
          <Cookie className="h-16 w-16 mx-auto mb-6 text-amber-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Trasparenza completa su come utilizziamo i cookie per migliorare la tua esperienza
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Cookie Settings Button */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">
                    Gestisci le tue Preferenze Cookie
                  </h3>
                  <p className="text-primary-700">
                    Puoi modificare le tue preferenze sui cookie in qualsiasi momento
                  </p>
                </div>
                <CookieSettingsButton />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              
              <h2>Che cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
                Ci aiutano a fornire un'esperienza migliore e personalizzata.
              </p>

              <h2>Tipi di Cookie che Utilizziamo</h2>
              
              <h3>🔧 Cookie Necessari</h3>
              <p>
                Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati. 
                Includono cookie per la sicurezza e le preferenze di base.
              </p>

              <h3>📊 Cookie di Analisi</h3>
              <p>
                Utilizziamo Google Analytics per comprendere come i visitatori interagiscono con il nostro sito. 
                Questi dati ci aiutano a migliorare continuamente l'esperienza utente.
              </p>

              <h3>📢 Cookie di Marketing</h3>
              <p>
                Utilizziamo Google AdSense per mostrare pubblicità pertinenti. Questi cookie vengono attivati 
                solo con il tuo consenso esplicito.
              </p>

              <h3>🎨 Cookie di Personalizzazione</h3>
              <p>
                Questi cookie ci permettono di ricordare le tue preferenze (come la lingua) 
                per offrirti un'esperienza personalizzata.
              </p>

              <h2>Gestione dei Cookie</h2>
              <p>
                Puoi gestire le tue preferenze sui cookie utilizzando il banner che appare al primo accesso 
                o cliccando il pulsante "Modifica Preferenze" in questa pagina.
              </p>

              <h2>Disabilitazione dei Cookie</h2>
              <p>
                Puoi disabilitare i cookie dalle impostazioni del tuo browser, ma questo potrebbe influire 
                sulla funzionalità del sito web.
              </p>

              <h2>Contatti</h2>
              <p>
                Per domande sulla nostra cookie policy: <a href="mailto:privacy@italyexperiencehub.com">privacy@italyexperiencehub.com</a>
              </p>

              {/* GDPR Compliance Notice */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Conformità GDPR</strong><br />
                      Il nostro utilizzo dei cookie è completamente conforme al Regolamento Generale 
                      sulla Protezione dei Dati (GDPR) e alle normative italiane sulla privacy.
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