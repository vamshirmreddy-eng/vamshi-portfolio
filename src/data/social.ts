import type { ContactInfo, PortfolioConfig, SocialLink } from '@/types';

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
    url: '/Vamshi_M_FullStack_Resume_2026.pdf',
    label: 'Download Resume',
  },
];

export const contactInfo: ContactInfo = {
  email: 'vamshirmreddy@gmail.com',
  phone: '+1 (214) 937-9916',
  linkedin: 'https://www.linkedin.com/in/vamshi-m25/',
  resume: '/Vamshi_M_FullStack_Resume_2026.pdf',
};

export const portfolioConfig: PortfolioConfig = {
  name: 'Vamshi M',
  title: 'Full Stack Engineer',
  description:
    'Building enterprise React and Node.js applications on AWS, with experience across event-driven microservices, high-volume REST APIs, secure identity workflows, subscription billing, and production AI features.',
  bio: 'Full Stack Engineer with 5+ years of experience building enterprise React and Node.js applications on AWS. Currently at SailPoint, previously at Chargebee.',
  longBio:
    'At SailPoint, I design customer-facing React and Next.js features and own distributed Node.js services for authentication, provisioning, and authorization workflows. At Chargebee, I built Node.js and Express billing services and React applications supporting 10M+ monthly billing cycles at 99.9% uptime.',
  positioningStatement:
    'Building scalable SaaS products, distributed backend systems, and AI-powered workflows from frontend to production infrastructure.',
  socials: socialLinks,
  contact: contactInfo,
  featured: {
    projectIds: [],
    experienceIds: ['sailpoint', 'chargebee'],
  },
};
