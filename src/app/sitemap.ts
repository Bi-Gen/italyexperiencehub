import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://italyexperiencehub.com'

// Function to get all blog posts
function getBlogPosts(): string[] {
  try {
    const blogDir = path.join(process.cwd(), 'content/blog')
    const files = fs.readdirSync(blogDir)
    return files.filter(file => file.endsWith('.md')).map(file => file.replace('.md', ''))
  } catch {
    return []
  }
}

// Function to get all guide posts
function getGuidePosts(): string[] {
  try {
    const guideDir = path.join(process.cwd(), 'content/guides')
    const files = fs.readdirSync(guideDir)
    return files.filter(file => file.endsWith('.md')).map(file => file.replace('.md', ''))
  } catch {
    return []
  }
}

// Function to scan app directory for pages
function getAppRoutes(): string[] {
  const routes: string[] = []
  
  try {
    const scanDirectory = (dir: string, basePath: string = '') => {
      const fullPath = path.join(process.cwd(), 'src/app', dir)
      if (!fs.existsSync(fullPath)) return
      
      const items = fs.readdirSync(fullPath)
      
      for (const item of items) {
        const itemPath = path.join(fullPath, item)
        const routePath = basePath + '/' + item
        
        if (fs.statSync(itemPath).isDirectory()) {
          // Skip dynamic routes and special Next.js folders
          if (!item.startsWith('[') && !item.startsWith('(') && item !== 'api') {
            scanDirectory(dir + '/' + item, routePath)
          }
        } else if (item === 'page.tsx') {
          // Add route if it has a page.tsx
          if (basePath) {
            routes.push(basePath)
          }
        }
      }
    }
    
    scanDirectory('')
    return routes
  } catch {
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  const blogPosts = getBlogPosts()
  const guidePosts = getGuidePosts()
  const appRoutes = getAppRoutes()
  
  const sitemapEntries: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]
  
  // Function to determine priority based on route
  const getPriority = (route: string): number => {
    if (route === '') return 1.0  // Homepage
    if (route.includes('/destinazioni') && !route.includes('/destinazioni/')) return 0.9
    if (route.includes('/esperienze') && !route.includes('/esperienze/')) return 0.9
    if (route.includes('/guide') && !route.includes('/guide/')) return 0.8
    if (route.includes('/blog') && !route.includes('/blog/')) return 0.8
    if (route.includes('/destinazioni/')) return 0.8
    if (route.includes('/esperienze/')) return 0.7
    if (route.includes('/blog/')) return 0.7
    if (route.includes('/guide/') && guidePosts.some(guide => route.includes(guide))) return 0.7
    if (route.includes('/contatti')) return 0.5
    if (route.includes('/faq')) return 0.4
    return 0.3
  }
  
  // Function to determine change frequency
  const getChangeFrequency = (route: string): 'daily' | 'weekly' | 'monthly' | 'yearly' => {
    if (route === '' || (route.includes('/blog') && !route.includes('/blog/'))) return 'daily'
    if (route.includes('/destinazioni') || route.includes('/esperienze')) return 'weekly'
    if (route.includes('/blog/') || route.includes('/guide/')) return 'monthly'
    if (route.includes('/privacy') || route.includes('/termini') || route.includes('/cookie')) return 'yearly'
    return 'monthly'
  }
  
  // Add specific missing routes that were causing 404s
  const specificRoutes = [
    '/bike-toscana',
  ]
  
  specificRoutes.forEach(route => {
    sitemapEntries.push({
      url: `${SITE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add all app routes automatically
  appRoutes.forEach(route => {
    sitemapEntries.push({
      url: `${SITE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    })
  })
  
  // Add dynamic blog posts
  blogPosts.forEach(slug => {
    sitemapEntries.push({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })
  
  // Add dynamic guide posts  
  guidePosts.forEach(slug => {
    sitemapEntries.push({
      url: `${SITE_URL}/guide/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })
  
  return sitemapEntries.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}