import { Calendar, Clock, User, MapPin, Award } from 'lucide-react'

interface AuthorBylineProps {
  author: string
  publishedAt: string
  updatedAt?: string
  readingTime?: number
  category?: string
  className?: string
}

const authorProfiles: Record<string, {
  name: string
  bio: string
  credentials: string
  expertise: string[]
  avatar?: string
}> = {
  'Italy Experience Hub': {
    name: 'Italy Experience Hub',
    bio: 'Team di esperti italiani',
    credentials: 'Redazione specializzata in turismo italiano dal 2020',
    expertise: ['Turismo Italia', 'Guide Locali', 'Cultura Italiana', 'Food & Wine'],
    avatar: '/images/team/logo-author.png'
  },
  'Marco Rossi': {
    name: 'Marco Rossi',
    bio: 'Editor in Chief & Fondatore',
    credentials: 'Giornalista di viaggio, 15 anni esperienza Condé Nast Traveller',
    expertise: ['Roma', 'Lazio', 'Turismo Culturale', 'Storia Italiana'],
    avatar: '/images/team/marco-rossi.jpg'
  },
  'Giulia Bianchi': {
    name: 'Giulia Bianchi',
    bio: 'Travel Content Manager',
    credentials: 'Laureata Lettere Moderne Firenze, esperta Arte Italiana',
    expertise: ['Firenze', 'Toscana', 'Arte', 'Musei'],
    avatar: '/images/team/giulia-bianchi.jpg'
  },
  'Alessandro Conti': {
    name: 'Alessandro Conti',
    bio: 'Food & Culture Expert',
    credentials: 'Chef professionista, collaboratore Gambero Rosso',
    expertise: ['Cucina Italiana', 'Food Tours', 'Tradizioni Culinarie'],
    avatar: '/images/team/alessandro-conti.jpg'
  }
}

export default function AuthorByline({ 
  author, 
  publishedAt, 
  updatedAt, 
  readingTime, 
  category,
  className = '' 
}: AuthorBylineProps) {
  const authorProfile = authorProfiles[author] || authorProfiles['Italy Experience Hub']
  
  const publishedDate = new Date(publishedAt).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  const updatedDate = updatedAt ? new Date(updatedAt).toLocaleDateString('it-IT', {
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  }) : null
  
  return (
    <div className={`border-b border-gray-200 pb-8 mb-8 ${className}`}>
      {/* Author Info */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-primary-600" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {authorProfile.name}
          </h3>
          <p className="text-sm text-primary-600 font-medium mb-2">
            {authorProfile.bio}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            {authorProfile.credentials}
          </p>
          
          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2">
            {authorProfile.expertise.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <Award className="h-6 w-6 text-gold-500" title="Esperto Verificato" />
        </div>
      </div>
      
      {/* Article Meta */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
          <span>
            Pubblicato il {publishedDate}
          </span>
        </div>
        
        {updatedDate && (
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span>
              Aggiornato il {updatedDate}
            </span>
          </div>
        )}
        
        {readingTime && (
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span>{readingTime} min di lettura</span>
          </div>
        )}
        
        {category && (
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium">
              {category}
            </span>
          </div>
        )}
      </div>
      
      {/* Trust Indicators */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-blue-800 font-medium mb-1">Contenuto Verificato</p>
            <p className="text-blue-700">
              Questo articolo è stato scritto e verificato dal nostro team di esperti locali. 
              Tutte le informazioni sono aggiornate e testate personalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}