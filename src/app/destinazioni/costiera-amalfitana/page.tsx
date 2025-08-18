import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Costiera Amalfitana - Coming Soon | Italy Experience Hub',
  description: 'Contenuti in arrivo per Costiera Amalfitana. Guide dettagliate e consigli pratici disponibili presto.',
}

export default function CostieraAmalfitanaPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-6">Costiera Amalfitana</h1>
          <p className="text-xl text-gray-600 mb-8">Contenuti in sviluppo - Disponibili presto</p>
          <a href="/destinazioni" className="btn-primary">Torna alle Destinazioni</a>
        </div>
      </section>
    </div>
  )
}