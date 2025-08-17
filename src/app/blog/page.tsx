import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog di Viaggio | Storie e Consigli dall\'Italia',
  description: 'Blog di viaggio con storie, consigli e curiosità sull\'Italia. Scopri luoghi nascosti, tradizioni locali e segreti dei viaggiatori esperti.',
  keywords: ['blog viaggio Italia', 'storie viaggio', 'consigli viaggio', 'turismo Italia', 'luoghi nascosti Italia']
}

const blogPosts = [
  {
    slug: 'luoghi-nascosti-roma',
    title: 'I 10 Luoghi Nascosti di Roma che Solo i Locali Conoscono',
    excerpt: 'Scopri la Roma segreta lontana dalle folle turistiche: giardini nascosti, chiese poco conosciute e angoli magici della Città Eterna.',
    author: 'Marco Rossi',
    publishedAt: '2024-08-15',
    readTime: 8,
    category: 'Luoghi Nascosti',
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=400&fit=crop',
    tags: ['Roma', 'Luoghi nascosti', 'Local tips'],
    featured: true
  },
  {
    slug: 'cucina-regionale-italiana',
    title: 'Viaggio Gastronomico: Le 20 Regioni Italiane a Tavola',
    excerpt: 'Un viaggio culinario attraverso l\'Italia: dai tortellini dell\'Emilia-Romagna agli arancini siciliani, scopri i sapori autentici di ogni regione.',
    author: 'Giulia Bianchi',
    publishedAt: '2024-08-12',
    readTime: 15,
    category: 'Gastronomia',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
    tags: ['Cucina italiana', 'Tradizioni', 'Food'],
    featured: true
  },
  {
    slug: 'sostenibilita-turismo-italia',
    title: 'Turismo Sostenibile in Italia: Come Viaggiare Rispettando l\'Ambiente',
    excerpt: 'Consigli pratici per un turismo responsabile: trasporti eco-friendly, strutture sostenibili e attività a basso impatto ambientale.',
    author: 'Andrea Verdi',
    publishedAt: '2024-08-10',
    readTime: 12,
    category: 'Sostenibilità',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
    tags: ['Sostenibilità', 'Eco-tourism', 'Ambiente'],
    featured: false
  }
]

const categories = [
  { name: 'Luoghi Nascosti', count: 23, color: 'bg-primary-100 text-primary-700' },
  { name: 'Gastronomia', count: 18, color: 'bg-accent-100 text-accent-700' },
  { name: 'Storia & Cultura', count: 31, color: 'bg-gold-100 text-gold-700' },
  { name: 'Sostenibilità', count: 12, color: 'bg-green-100 text-green-700' },
  { name: 'Tradizioni', count: 15, color: 'bg-purple-100 text-purple-700' },
  { name: 'Local Tips', count: 27, color: 'bg-blue-100 text-blue-700' }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-italy text-white py-16 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Blog di Viaggio
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Storie, consigli e segreti dell'Italia raccontati da chi la vive ogni giorno
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">Categorie</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog?category=${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:shadow-md ${category.color}`}
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Articoli in Evidenza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le storie più lette e i consigli più apprezzati dalla nostra community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        In Evidenza
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString('it-IT')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime} min
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                    Leggi l'articolo completo →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Non Perdere i Nostri Articoli
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Iscriviti alla newsletter per ricevere i migliori consigli di viaggio direttamente nella tua casella email
          </p>
          
          <form className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Iscriviti
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            Oltre 15.000 viaggiatori leggono i nostri consigli ogni settimana
          </p>
        </div>
      </section>
    </div>
  )
}