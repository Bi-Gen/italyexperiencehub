import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour in Bicicletta - Coming Soon | Italy Experience Hub',
  description: 'Tour in bicicletta in Italia. Cicloturismo e esperienze outdoor in sviluppo.',
}

export default function BikeToursPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Tour in Bicicletta</h1>
          <p className="text-xl text-gray-600 mb-8">Cicloturismo in sviluppo - Disponibile presto</p>
          <a href="/esperienze" className="btn-primary">Torna alle Esperienze</a>
        </div>
      </section>
    </div>
  )
}
