import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arte & Cultura - Coming Soon | Italy Experience Hub',
  description: 'Esperienze culturali e artistiche in Italia in sviluppo.',
}

export default function ArteCulturaPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Arte & Cultura</h1>
          <p className="text-xl text-gray-600 mb-8">Esperienze culturali in sviluppo - Disponibili presto</p>
          <a href="/esperienze" className="btn-primary">Torna alle Esperienze</a>
        </div>
      </section>
    </div>
  )
}
