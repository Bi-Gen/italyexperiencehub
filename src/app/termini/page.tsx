import { Metadata } from 'next'
import { FileText, Scale } from 'lucide-react'
import ClientDate from '@/components/ClientDate'

export const metadata: Metadata = {
  title: 'Termini di Servizio - Italy Experience Hub',
  description: 'Termini e condizioni d\'uso dei servizi di Italy Experience Hub. Leggi i nostri termini di servizio per prenotazioni e tour.',
  keywords: ['termini servizio', 'condizioni uso', 'contratto tour'],
}

export default function TerminiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-800 text-white py-20">
        <div className="container-custom text-center">
          <Scale className="h-16 w-16 mx-auto mb-6 text-gray-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Termini di Servizio
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Termini e condizioni che regolano l'uso dei nostri servizi
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Last Updated */}
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">
                <strong>Ultimo aggiornamento:</strong> <ClientDate format="long" />
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              
              {/* Content Notice */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FileText className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-amber-700">
                      <strong>Documento in Preparazione</strong><br />
                      I nostri termini di servizio completi sono in fase di finalizzazione da parte del nostro team legale. 
                      Nel frattempo, per qualsiasi domanda contractuale, contatta il nostro servizio clienti.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Introduzione</h2>
              <p>
                Benvenuto in Italy Experience Hub. Utilizzando i nostri servizi, accetti i seguenti termini e condizioni.
              </p>

              <h2>Servizi Offerti</h2>
              <p>
                Italy Experience Hub fornisce servizi di prenotazione per esperienze turistiche in Italia, 
                inclusi tour guidati, esperienze gastronomiche e attività culturali.
              </p>

              <h2>Prenotazioni e Pagamenti</h2>
              <ul>
                <li>Le prenotazioni sono soggette a disponibilità</li>
                <li>Il pagamento deve essere completato per confermare la prenotazione</li>
                <li>Accettiamo le principali carte di credito e PayPal</li>
              </ul>

              <h2>Cancellazioni e Rimborsi</h2>
              <ul>
                <li>Cancellazione gratuita fino a 24 ore prima dell'esperienza (salvo diversa indicazione)</li>
                <li>I rimborsi vengono elaborati entro 5-10 giorni lavorativi</li>
                <li>Condizioni speciali possono applicarsi per alcuni tour</li>
              </ul>

              <h2>Responsabilità</h2>
              <p>
                Italy Experience Hub agisce come intermediario tra clienti e fornitori di servizi. 
                I partecipanti sono responsabili della propria sicurezza durante le attività.
              </p>

              <h2>Contatti</h2>
              <p>
                Per domande sui termini di servizio: <a href="mailto:info@italyexperiencehub.com">info@italyexperiencehub.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}