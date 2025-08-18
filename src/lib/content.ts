import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface GuidePost {
  slug: string
  title: string
  description: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  image?: string
  readingTime: number
  featured?: boolean
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
  destination?: string
  difficulty?: 'Principiante' | 'Intermedio' | 'Avanzato'
  duration?: string
  bestTime?: string
}

export interface DestinationGuide {
  slug: string
  name: string
  description: string
  content: string
  region: string
  province: string
  image: string
  images: string[]
  highlights: string[]
  bestTime: string
  duration: string
  difficulty: 'Facile' | 'Moderato' | 'Impegnativo'
  budget: {
    low: number
    medium: number
    high: number
  }
  transportation: {
    plane?: string[]
    train?: string[]
    car?: string
    local?: string[]
  }
  accommodation: {
    budget: string[]
    midrange: string[]
    luxury: string[]
  }
  attractions: {
    name: string
    description: string
    price?: string
    hours?: string
    website?: string
  }[]
  restaurants: {
    name: string
    cuisine: string
    priceRange: '$' | '$$' | '$$$' | '$$$$'
    description: string
    mustTry: string[]
  }[]
  tips: string[]
  warnings?: string[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface ExperiencePost {
  slug: string
  title: string
  description: string
  content: string
  location: string
  category: string
  type: 'Tour Guidato' | 'Esperienza Autonoma' | 'Workshop' | 'Degustazione' | 'Attività Outdoor'
  duration: string
  groupSize: string
  price: {
    adult: number
    child?: number
    family?: number
  }
  includes: string[]
  excludes: string[]
  requirements: string[]
  cancellation: string
  image: string
  images: string[]
  difficulty: 'Facile' | 'Moderato' | 'Impegnativo'
  language: string[]
  rating: number
  reviews: {
    count: number
    average: number
  }
  availability: {
    seasons: string[]
    days: string[]
    times: string[]
  }
  provider: {
    name: string
    rating: number
    verified: boolean
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

// Helper functions
export function getAllGuides(): GuidePost[] {
  const guidesDirectory = path.join(contentDirectory, 'guides')
  
  if (!fs.existsSync(guidesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(guidesDirectory)
  const allGuides = fileNames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '')
      const fullPath = path.join(guidesDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...data,
        readingTime: Math.ceil(content.split(' ').length / 200), // Estimate reading time
      } as GuidePost
    })

  return allGuides.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getGuideBySlug(slug: string): GuidePost | null {
  try {
    const fullPath = path.join(contentDirectory, 'guides', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...data,
      readingTime: Math.ceil(content.split(' ').length / 200),
    } as GuidePost
  } catch {
    return null
  }
}

export function getGuidesByCategory(category: string): GuidePost[] {
  const allGuides = getAllGuides()
  return allGuides.filter(guide => guide.category === category)
}

export function getFeaturedGuides(): GuidePost[] {
  const allGuides = getAllGuides()
  return allGuides.filter(guide => guide.featured).slice(0, 6)
}

export function getAllDestinations(): DestinationGuide[] {
  const destinationsDirectory = path.join(contentDirectory, 'destinations')
  
  if (!fs.existsSync(destinationsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(destinationsDirectory)
  const allDestinations = fileNames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '')
      const fullPath = path.join(destinationsDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...data,
      } as DestinationGuide
    })

  return allDestinations.sort((a, b) => a.name.localeCompare(b.name))
}

export function getDestinationBySlug(slug: string): DestinationGuide | null {
  try {
    const fullPath = path.join(contentDirectory, 'destinations', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...data,
    } as DestinationGuide
  } catch {
    return null
  }
}

export function getAllExperiences(): ExperiencePost[] {
  const experiencesDirectory = path.join(contentDirectory, 'experiences')
  
  if (!fs.existsSync(experiencesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(experiencesDirectory)
  const allExperiences = fileNames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '')
      const fullPath = path.join(experiencesDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...data,
      } as ExperiencePost
    })

  return allExperiences.sort((a, b) => b.rating - a.rating)
}

export function getExperienceBySlug(slug: string): ExperiencePost | null {
  try {
    const fullPath = path.join(contentDirectory, 'experiences', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...data,
    } as ExperiencePost
  } catch {
    return null
  }
}

export function getExperiencesByLocation(location: string): ExperiencePost[] {
  const allExperiences = getAllExperiences()
  return allExperiences.filter(experience => 
    experience.location.toLowerCase().includes(location.toLowerCase())
  )
}

export function getExperiencesByCategory(category: string): ExperiencePost[] {
  const allExperiences = getAllExperiences()
  return allExperiences.filter(experience => experience.category === category)
}

// Blog post functions
export function getAllBlogPosts(): GuidePost[] {
  const blogDirectory = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const allPosts = fileNames
    .filter(name => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '')
      const fullPath = path.join(blogDirectory, name)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...data,
        readingTime: Math.ceil(content.split(' ').length / 200), // Estimate reading time
      } as GuidePost
    })

  return allPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostBySlug(slug: string): GuidePost | null {
  try {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...data,
      readingTime: Math.ceil(content.split(' ').length / 200),
    } as GuidePost
  } catch {
    return null
  }
}

export function getBlogPostsByCategory(category: string): GuidePost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.category === category)
}

export function getFeaturedBlogPosts(): GuidePost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.featured).slice(0, 6)
}

// Search functionality
export function searchContent(query: string) {
  const guides = getAllGuides()
  const blogPosts = getAllBlogPosts()
  const destinations = getAllDestinations()
  const experiences = getAllExperiences()
  
  const searchTerm = query.toLowerCase()
  
  const matchingGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(searchTerm) ||
    guide.description.toLowerCase().includes(searchTerm) ||
    guide.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
  
  const matchingBlogPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
  
  const matchingDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchTerm) ||
    destination.description.toLowerCase().includes(searchTerm) ||
    destination.region.toLowerCase().includes(searchTerm)
  )
  
  const matchingExperiences = experiences.filter(experience =>
    experience.title.toLowerCase().includes(searchTerm) ||
    experience.description.toLowerCase().includes(searchTerm) ||
    experience.location.toLowerCase().includes(searchTerm) ||
    experience.category.toLowerCase().includes(searchTerm)
  )
  
  return {
    guides: matchingGuides,
    blogPosts: matchingBlogPosts,
    destinations: matchingDestinations,
    experiences: matchingExperiences,
    total: matchingGuides.length + matchingBlogPosts.length + matchingDestinations.length + matchingExperiences.length
  }
}