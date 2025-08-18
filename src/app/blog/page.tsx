import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Clock, Tag, TrendingUp } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog di Viaggio | Storie e Consigli dall\'Italia',
  description: 'Blog di viaggio con storie, consigli e curiosità sull\'Italia. Scopri luoghi nascosti, tradizioni locali e segreti dei viaggiatori esperti.',
  keywords: ['blog viaggio Italia', 'storie viaggio', 'consigli viaggio', 'turismo Italia', 'luoghi nascosti Italia']
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  
  // Raggruppa per categoria per il conteggio
  const categories = blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const categoryList = Object.entries(categories).map(([name, count], index) => ({
    name,
    count,
    color: [
      'bg-primary-100 text-primary-700',
      'bg-accent-100 text-accent-700', 
      'bg-gold-100 text-gold-700',
      'bg-green-100 text-green-700',
      'bg-purple-100 text-purple-700',
      'bg-blue-100 text-blue-700'
    ][index % 6]
  }))
  
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
          <div className="text-blue-200">
            <span className="font-semibold">{blogPosts.length}</span> articoli pubblicati
          </div>
        </div>
      </section>

      {/* Categories */}
      {categoryList.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-center mb-8">Categorie</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categoryList.map((category, index) => (
                <Link
                  key={index}
                  href={`/blog?category=${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:shadow-md ${category.color}`}
                >
                  {category.name} ({category.count})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tutti gli Articoli
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scopri storie, consigli e guide pratiche per viaggiare in Italia
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
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <TrendingUp className="h-12 w-12 text-primary-500" />
                    </div>
                  )}
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
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
                      {post.readingTime || 0} min
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
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