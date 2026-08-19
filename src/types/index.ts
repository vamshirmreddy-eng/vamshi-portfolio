// Experience Interface
export interface Experience {
  id: string
  company: string
  companyLink?: string
  position: string
  type: 'full-time' | 'intern' | 'freelance' | 'open-source' | 'contract'
  startDate: string // "2024-01" format
  endDate: string | null // null for current role
  description: string
  achievements: string[]
  technologies: string[] // Keys from skills.ts
  location?: string // "Remote" or optional
}

// Project Interface
export interface Project {
  id: string
  title: string
  tagline: string // short one-line hook shown right under the title
  description: string
  longDescription?: string
  problem: string
  whatIBuilt: { summary: string; bullets: string[] } // bullets capped at 3 in the UI
  impact: string
  features?: string[]
  technologies: string[] // Keys from skills.ts
  imageUrl: string
  imageAlt: string
  featured: boolean
  links: {
    github?: string
    live?: string
    caseStudy?: string
    demo?: string
  }
  metrics?: {
    label: string
    value: string
  }[]
  startDate?: string
  endDate?: string
}

// Skill/Tech Interface
export interface Skill {
  id: string
  name: string
  icon?: string // Path to icon file
  category:
    | 'language'
    | 'framework'
    | 'database'
    | 'tool'
    | 'cloud'
    | 'other'
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
}

// Case Study Interface — engineering-work highlights derived from real Experience achievements
export interface CaseStudy {
  id: string
  title: string
  company: string
  companyLink?: string
  blurb: string
  problem: string
  approach: string
  impact: string
  technologies: string[]
  metrics: { label: string; value: string }[]
  concepts: string[]
  hasArchitectureDiagram?: boolean
}

// Education Interface
export interface Education {
  id: string
  degree: string
  institution: string
  institutionLink?: string
  year: string
}

// Social Link Interface
export interface SocialLink {
  name: string
  url: string
  icon?: string
  label: string
}

// Contact Information
export interface ContactInfo {
  email: string
  phone?: string
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
  resume?: string
}

// Portfolio Config
export interface PortfolioConfig {
  name: string
  title: string
  description: string
  bio: string
  longBio: string
  positioningStatement: string
  avatar?: string
  socials: SocialLink[]
  contact: ContactInfo
  featured: {
    projectIds: string[]
    experienceIds: string[]
  }
}
