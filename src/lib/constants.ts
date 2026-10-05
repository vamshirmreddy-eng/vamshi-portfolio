// Portfolio Configuration
export const SITE_NAME = 'Vamshi Reddy'
export const SITE_TITLE = 'Full Stack Engineer | SailPoint'
export const SITE_DESCRIPTION =
  'Full Stack Engineer with 6+ years of experience building scalable cloud-based SaaS applications with Next.js, React, TypeScript, Java, Go, and AWS.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vamshi.dev'
export const TWITTER_HANDLE = ''
export const GITHUB_URL = ''
export const LINKEDIN_URL = 'https://www.linkedin.com/in/vamshi-m25/'

// Navigation
export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Stack', href: '#tech-stack' },
  { name: 'Contact', href: '#contact' },
]

// Sections
export const SECTIONS = {
  HERO: 'hero',
  ABOUT: 'about',
  TECH_STACK: 'tech-stack',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  CONTACT: 'contact',
}

// Animation timings (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 300,
  NORMAL: 500,
  SLOW: 800,
}

// Color palette
export const COLORS = {
  PRIMARY: '#5b7aff',
  PRIMARY_DARK: '#4a63e6',
  SECONDARY: '#00d4ff',
  SECONDARY_DARK: '#00b8d4',
  DARK_BG: '#0a0e27',
  DARK_BG_LIGHT: '#15192f',
  TEXT_PRIMARY: '#e8eaef',
  TEXT_SECONDARY: '#a0aac0',
}

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 1024,
  DESKTOP: 1280,
}

// SEO
export const SEO_CONFIG = {
  locale: 'en_US',
  type: 'website',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
}

// Skills per section display
export const SKILLS_DISPLAY_COUNT = {
  HERO: 8,
  TECH_STACK: 30,
}

// Project showcase
export const FEATURED_PROJECTS_COUNT = 2

// Timeline
export const CURRENT_YEAR = new Date().getFullYear()
export const YEARS_OF_EXPERIENCE = 6

// Metadata
export const SOCIAL_MEDIA = {
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
  twitter: TWITTER_HANDLE,
}
