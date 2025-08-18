import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tour Gastronomici - Coming Soon | Italy Experience Hub',
  description: 'Tour gastronomici e degustazioni vini in Italia. Esperienze culinarie autentiche in sviluppo.',
}

export default function FoodWinePage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Tour Gastronomici</h1>
          <p className="text-xl text-gray-600 mb-8">Esperienze culinarie in sviluppo - Disponibili presto</p>
          <a href="/esperienze" className="btn-primary">Torna alle Esperienze</a>
        </div>
      </section>
    </div>
  )
}