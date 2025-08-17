import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Eye, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guide Pratiche | Consigli Esperti per Viaggiare in Italia',
  description: 'Guide pratiche e consigli di viaggio per l\'Italia. Itinerari, trasporti, cucina e tutto quello che devi sapere per un viaggio perfetto.',
  keywords: ['guide viaggio Italia', 'consigli viaggio', 'itinerari Italia', 'come visitare', 'guida turistica']
}

const guides = [
  {
    slug: 'roma-3-giorni',
    title: 'Come Visitare Roma in 3 Giorni: Itinerario Completo',
    description: 'Guida completa per visitare Roma in 3 giorni con itinerario dettagliato, attrazioni imperdibili e consigli pratici per la Città Eterna.',
    category: 'Guide Destinazioni',
    readTime: 12,
    views: '156K',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop',
    tags: ['Roma', 'Itinerario', '3 giorni'],
    featured: true
  },
  {
    slug: 'quando-visitare-toscana',
    title: 'Miglior Periodo per Visitare la Toscana: Guida Stagionale',
    description: 'Scopri quando visitare la Toscana: clima, eventi, prezzi e consigli per ogni stagione dell\'anno.',
    category: 'Guide Pratiche',
    readTime: 8,
    views: '89K',
    image: 'https://images.unsplash.com/photo-1429554513779-906c3395a1a9?w=400&h=250&fit=crop',
    tags: ['Toscana', 'Clima', 'Stagioni'],
    featured: true
  },
  {
    slug: 'trasporti-italia',
    title: 'Trasporti in Italia: Come Muoversi Tra le Città',
    description: 'Guida completa ai trasporti in Italia: treni, aerei, autobus e auto. Consigli per viaggiare comodi ed economici.',
    category: 'Guide Pratiche',
    readTime: 15,
    views: '234K',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop',
    tags: ['Trasporti', 'Treni', 'Viaggiare'],
    featured: true
  }
]

export default function GuidePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-italy text-white py-16 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Guide Pratiche
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Consigli di esperti e guide complete per viaggiare in Italia come un locale
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className="card group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {guide.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        In Evidenza
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {guide.category}
                    </span>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.readTime} min
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {guide.views}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {guide.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}