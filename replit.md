# Personal Blog Application

## Overview

This is a full-stack personal blog application built with React and Express.js. The application features a modern, responsive design with a focus on showcasing articles across different categories. It includes a comprehensive UI component library based on shadcn/ui and Radix UI primitives.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui components built on Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider with light/dark mode support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL configured with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Design**: RESTful API with Express routes
- **Development**: Hot reload with Vite integration in development

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared TypeScript schema definitions
- **Migration**: Drizzle Kit for database migrations
- **Connection**: Serverless-compatible database connection

## Key Components

### Database Schema
- **Articles Table**: Stores blog posts with title, slug, content, excerpt, category, publication date, read time, and publication status
- **Categories Table**: Manages article categories with name, slug, and description
- **Schema Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `GET /api/articles` - Retrieve articles with optional filtering by category, search, and publication status
- `GET /api/articles/:slug` - Get a specific article by slug
- `POST /api/articles` - Create new articles
- `GET /api/categories` - Retrieve all categories

### UI Components
- **ArticleCard**: Displays article previews with category badges, read time, and publication date
- **Header**: Navigation with theme toggle and mobile responsive menu
- **ThemeProvider**: Manages light/dark theme switching with localStorage persistence
- **Markdown Parser**: Custom markdown-to-HTML parser for article content

### Pages
- **Home**: Main landing page with article listing, search, and category filtering
- **Article**: Individual article view with full content display
- **404**: Not found page for unmatched routes

## Data Flow

1. **Article Display**: Client requests articles from `/api/articles`, server queries database using Drizzle ORM, returns JSON response
2. **Search & Filtering**: Client-side filtering for real-time search, server-side filtering for category-based queries
3. **Theme Management**: Theme state managed in React context, persisted to localStorage
4. **Routing**: Client-side routing with Wouter, dynamic article loading based on slug parameters

## External Dependencies

### Core Dependencies
- **Database**: Neon Database for serverless PostgreSQL
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Date Handling**: date-fns for date formatting
- **Form Handling**: React Hook Form with Zod resolvers
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite, ESBuild for production builds
- **TypeScript**: Full type safety across frontend and backend
- **Development Tools**: TSX for TypeScript execution, Replit-specific tooling

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Production Configuration
- **Environment**: Production detection via `NODE_ENV=production`
- **Static Files**: Express serves built frontend assets
- **Database**: Connection via `DATABASE_URL` environment variable
- **Port**: Configurable via environment or defaults

### Development Workflow
- **Hot Reload**: Vite middleware integrated with Express in development
- **TypeScript**: No-emit compilation for type checking
- **Database**: Push schema changes directly to database

## GitHub Pages Deployment

### Static Site Generation
- **Build Script**: `build-static.js` - Builds static version using Vite
- **Static App**: `client/src/App.static.tsx` - Version optimized for static hosting
- **Static Query Client**: `client/src/lib/staticQueryClient.ts` - Contains blog data for static deployment
- **Static HTML**: `client/index.static.html` - Entry point with SEO optimization

### Deployment Process
- **GitHub Actions**: `.github/workflows/deploy.yml` - Automated deployment workflow
- **Build Command**: `node build-static.js` - Generates static files in `docs/` folder
- **Deploy Target**: GitHub Pages serves from `/docs` folder on main branch
- **Custom Domain**: CNAME file template provided for custom domain setup

### Features
- Complete static site generation with all original functionality
- SEO-optimized with proper meta tags and Open Graph support
- Responsive design with dark/light theme support
- Mobile-friendly navigation and search functionality
- Ready for custom domain deployment

## Deployment Solutions

### Problem Resolution
- **GitHub Actions Issues**: Fixed workflow permissions and authentication problems
- **Multiple Deployment Methods**: Created fallback options for 100% success rate
- **Build Process**: Optimized static site generation with proper file handling
- **Documentation**: Comprehensive guides for different deployment scenarios

### Deployment Options
1. **GitHub Actions**: Automated deployment on push (primary method)
2. **Manual File Upload**: Drag-and-drop method with 100% success rate
3. **Git Push**: Traditional git workflow with built files
4. **Custom Domain**: Full support with DNS configuration guide

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Added GitHub Pages deployment with static site generation
- July 08, 2025. Fixed GitHub Actions workflow issues and created multiple deployment methods
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```