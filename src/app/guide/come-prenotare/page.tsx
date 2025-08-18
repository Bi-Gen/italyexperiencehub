import { Metadata } from 'next'
import { Calendar, Clock, CreditCard, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Come Prenotare - Guida Completa',
  description: 'Scopri come prenotare facilmente le tue esperienze in Italia con Italy Experience Hub. Processo semplice e sicuro in pochi clic.',
  keywords: ['prenotazione Italia', 'come prenotare tour', 'booking Italia'],
}

export default function ComePrenotarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Come Prenotare
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Prenotare le tue esperienze in Italia è facile e sicuro. Segui i nostri semplici passaggi.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Scegli</h3>
                <p className="text-gray-600">Seleziona l'esperienza che preferisci</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Prenota</h3>
                <p className="text-gray-600">Seleziona data e numero partecipanti</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">3. Paga</h3>
                <p className="text-gray-600">Pagamento sicuro online</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">4. Conferma</h3>
                <p className="text-gray-600">Ricevi conferma immediata</p>
              </div>
            </div>

            {/* Detailed Guide */}
            <div className="prose prose-lg max-w-none">
              <h2>Guida Dettagliata alla Prenotazione</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Contenuto in Sviluppo</strong><br />
                      Stiamo creando una guida completa per aiutarti a prenotare al meglio. 
                      Nel frattempo, contatta il nostro team per assistenza personalizzata.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Perché Scegliere Italy Experience Hub</h3>
              <ul>
                <li>✅ Prenotazione immediata e sicura</li>
                <li>✅ Cancellazione gratuita fino a 24h prima</li>
                <li>✅ Guide esperte e certificate</li>
                <li>✅ Supporto clienti 24/7</li>
                <li>✅ Miglior prezzo garantito</li>
              </ul>

              <h3>Metodi di Pagamento</h3>
              <p>Accettiamo tutte le principali carte di credito e debito, PayPal e bonifico bancario per gruppi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}