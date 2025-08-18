import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sicilia - Coming Soon | Italy Experience Hub',
  description: 'Contenuti in arrivo per Sicilia. Guide dettagliate e consigli pratici disponibili presto.',
}

export default function SiciliaPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Sicilia</h1>
          <p className="text-xl text-gray-600 mb-8">Contenuti in sviluppo - Disponibili presto</p>
          <a href="/destinazioni" className="btn-primary">Torna alle Destinazioni</a>
        </div>
      </section>
    </div>
  )
}