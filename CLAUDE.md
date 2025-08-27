# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the production application 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy using custom deploy script (`scripts/deploy.js`)
- `npm run quick-deploy` - Quick deploy with default commit message

## Architecture Overview

This is a **Next.js 15** travel website for Italy Experience Hub, built with **TypeScript** and **Tailwind CSS**.

### Key Technologies
- **Next.js 15** with App Router and React 19
- **TypeScript** with strict mode
- **Tailwind CSS** with Typography plugin for styling
- **Supabase** for database operations (newsletter subscriptions)
- **Gray Matter** for markdown content parsing  
- **React Markdown** for content rendering
- **Lucide React** for icons
- **Resend** for email services
- **clsx** for conditional CSS classes

### Project Structure

#### Content Management
- `/content/` - Markdown files organized by type:
  - `/blog/` - Blog posts about Italian destinations and experiences
  - `/guides/` - Travel guides for different Italian cities
  - `/destinations/` - Destination-specific content
  - `/experiences/` - Tour and experience descriptions

#### Source Organization
- `/src/app/` - Next.js App Router pages and API routes
- `/src/components/` - Reusable React components
- `/src/lib/` - Utility libraries and configuration
- `/src/styles/` - Global CSS styles

#### Content Management System
The site uses a **file-based CMS** with TypeScript interfaces defined in `src/lib/content.ts`:
- `GuidePost` - Blog posts and guides
- `DestinationGuide` - Comprehensive destination information
- `ExperiencePost` - Tour and experience details

#### Database Integration
- **Supabase** integration for newsletter subscriptions and content management
- Dual client setup: anonymous client (`supabase`) for reads, service role (`supabaseAdmin`) for writes
- Database schema includes `Subscriber` interface with email, source, status, and timestamps
- Located in `src/lib/supabase.ts`

### Important Configuration Details

- **Image Optimization**: Disabled (`unoptimized: true`) in `next.config.js`
- **External Image Domains**: Configured for `picsum.photos` and `images.unsplash.com`
- **Build Settings**: ESLint and TypeScript errors are ignored during builds (`ignoreDuringBuilds: true`)
- **Path Aliases**: `@/*` maps to `./src/*` in `tsconfig.json`
- **Italian Language**: Default locale is `it_IT`
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap, and robots.txt
- **URL Redirects**: Configured in `next.config.js` for legacy URL compatibility

### Content Types

When working with content, use the established interfaces:
- Blog posts require: title, description, content, author, publishedAt, category, tags
- Destinations include: budget information, transportation options, attractions, restaurants
- Experiences contain: pricing, duration, includes/excludes, provider details

The content parsing functions in `src/lib/content.ts` handle reading markdown files and extracting frontmatter automatically.

### API Routes and Server Actions

- `/api/newsletter/` - Newsletter subscription endpoint (POST)
- `/api/unsubscribe/` - Newsletter unsubscription endpoint (GET/POST)
- `/api/test-supabase/` - Database connection testing endpoint
- All API routes use Supabase service role client for write operations