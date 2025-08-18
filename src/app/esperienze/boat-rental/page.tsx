import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Noleggio Barche - Coming Soon | Italy Experience Hub',
  description: 'Noleggio barche in Italia. Esperienze nautiche in sviluppo.',
}

export default function BoatRentalPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Noleggio Barche</h1>
          <p className="text-xl text-gray-600 mb-8">Esperienze nautiche in sviluppo - Disponibili presto</p>
          <a href="/esperienze" className="btn-primary">Torna alle Esperienze</a>
        </div>
      </section>
    </div>
  )
}
