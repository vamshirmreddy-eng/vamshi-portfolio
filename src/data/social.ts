import type { ContactInfo, PortfolioConfig, SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vamshi-m25/',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:vamshirmreddy@gmail.com',
    label: 'Send an email',
  },
  {
    name: 'Resume',
    url: '/Vamshi_Reddy_Resume.pdf',
    label: 'Download Resume',
  },
]

export const contactInfo: ContactInfo = {
  email: 'vamshirmreddy@gmail.com',
  phone: '+1 (214) 937-9916',
  linkedin: 'https://www.linkedin.com/in/vamshi-m25/',
  resume: '/Vamshi_Reddy_Resume.pdf',
}

export const portfolioConfig: PortfolioConfig = {
  name: 'Vamshi Reddy',
  title: 'Full Stack Engineer',
  description:
    'Building scalable cloud-based SaaS applications with Next.js, React, TypeScript, Java, Go, and AWS. Experienced in designing customer-facing features, microservices, and integrating OpenAI APIs for intelligent automation.',
  bio: 'Full Stack Engineer with 6+ years of experience developing cloud-based SaaS applications. Passionate about building scalable systems, optimizing performance, and integrating AI into production workflows. Currently at SailPoint, previously at Chargebee.',
  longBio:
    'At SailPoint, I own delivery of customer-facing product capabilities end to end: designing scalable Java and Go microservices, integrating OpenAI APIs for intelligent automation, and keeping distributed cloud workloads at 99.9% availability. Before that, at Chargebee, I built the subscription and billing systems customers relied on daily, improving onboarding efficiency by 33% without sacrificing that same reliability bar.',
  positioningStatement:
    'Building scalable SaaS products, distributed backend systems, and AI-powered workflows from frontend to production infrastructure.',
  socials: socialLinks,
  contact: contactInfo,
  featured: {
    projectIds: ['floweval', 'paywalllab'],
    experienceIds: ['sailpoint', 'chargebee'],
  },
}
