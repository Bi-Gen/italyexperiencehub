import { Metadata } from 'next'
import { HelpCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ - Domande Frequenti',
  description: 'Trova risposte alle domande più frequenti su prenotazioni, cancellazioni, tour e servizi di Italy Experience Hub.',
  keywords: ['FAQ Italia', 'domande frequenti tour', 'aiuto prenotazioni'],
}

export default function FAQPage() {
  const faqs = [
    {
      question: 'Come posso prenotare un\'esperienza?',
      answer: 'Puoi prenotare facilmente attraverso il nostro sito web. Seleziona l\'esperienza desiderata, scegli data e numero di partecipanti, e procedi con il pagamento sicuro.'
    },
    {
      question: 'Posso cancellare gratuitamente?',
      answer: 'Sì, offriamo cancellazione gratuita fino a 24 ore prima dell\'inizio dell\'esperienza per la maggior parte dei nostri tour.'
    },
    {
      question: 'I tour si svolgono in caso di pioggia?',
      answer: 'La maggior parte dei nostri tour si svolge anche in caso di pioggia leggera. In caso di maltempo estremo, ti contatteremo per riprogrammare o rimborsare.'
    },
    {
      question: 'Sono inclusi i trasporti?',
      answer: 'Dipende dal tipo di esperienza. Ogni descrizione specifica cosa è incluso. Molti tour includono trasporti o punti di incontro facilmente raggiungibili.'
    },
    {
      question: 'Posso prenotare per gruppi numerosi?',
      answer: 'Certamente! Offriamo esperienze per gruppi di tutte le dimensioni. Contattaci per tariffe speciali per gruppi superiori a 10 persone.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Domande Frequenti
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Trova rapidamente le risposte alle domande più comuni sui nostri servizi e tour.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* FAQ List */}
            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                    <HelpCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Content Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Contenuto in Espansione</strong><br />
                    Stiamo continuamente aggiornando le nostre FAQ in base alle domande dei clienti. 
                    Non trovi la risposta che cerchi? Contattaci direttamente!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Non hai trovato quello che cercavi?
              </h3>
              <p className="text-gray-600 mb-6">
                Il nostro team di assistenza clienti è sempre pronto ad aiutarti
              </p>
              <a
                href="/contatti"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contattaci Ora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}