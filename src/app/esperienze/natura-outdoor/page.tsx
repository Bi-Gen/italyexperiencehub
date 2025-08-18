import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Natura & Outdoor - Coming Soon | Italy Experience Hub',
  description: 'Esperienze outdoor e natura in Italia in sviluppo.',
}

export default function NaturaOutdoorPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Natura & Outdoor</h1>
          <p className="text-xl text-gray-600 mb-8">Esperienze outdoor in sviluppo - Disponibili presto</p>
          <a href="/esperienze" className="btn-primary">Torna alle Esperienze</a>
        </div>
      </section>
    </div>
  )
}
