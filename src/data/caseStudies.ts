import type { CaseStudy } from '@/types'

// Reformulated from real achievement text in experience.ts — every metric here is quoted
// from that file. Company names are real and already public elsewhere on this site
// (SailPoint/Chargebee), but internal product/feature names are kept generic since those
// are proprietary and were never disclosed to begin with.
export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-workflows',
    title: 'AI-Powered Enterprise Workflows',
    company: 'SailPoint',
    companyLink: 'https://www.sailpoint.com',
    blurb:
      'Built production AI capabilities using OpenAI APIs for contextual search, intelligent recommendations, and workflow automation.',
    problem:
      'Manual administrative workflows in an enterprise identity governance platform were slow and repetitive, adding friction to everyday operational tasks.',
    approach:
      'Integrated OpenAI APIs through careful prompt engineering to power contextual search, intelligent recommendations, and workflow automation. All of it wired into existing Java/Go backend services and a Next.js frontend, with production concerns (auth, observability, rate limits) treated as first-class from day one.',
    impact:
      'Reduced manual administrative effort by 48% while improving operational efficiency, without compromising the security and reliability expectations of an enterprise product.',
    technologies: ['OpenAI API', 'Java', 'Go', 'Next.js', 'PostgreSQL', 'Redis', 'AWS'],
    metrics: [{ label: 'Manual Administrative Effort', value: '48% ↓' }],
    concepts: [
      'Contextual search',
      'Intelligent recommendations',
      'Workflow automation',
      'Backend/API integration',
      'Production reliability',
      'Secure enterprise implementation',
    ],
  },
  {
    id: 'provisioning-platform',
    title: 'High-Throughput Provisioning Platform',
    company: 'SailPoint',
    companyLink: 'https://www.sailpoint.com',
    blurb:
      'Engineered asynchronous, event-driven services to move provisioning and authorization workloads reliably at scale.',
    problem:
      'Authentication, provisioning, and authorization workflows needed to handle growing production traffic without sacrificing availability or response latency.',
    approach:
      'Built asynchronous event-driven services with Kafka, Redis, and AWS SQS to decouple request handling from downstream processing, paired with PostgreSQL query optimization, Redis caching, and load testing to keep the whole path fast under real production load.',
    impact:
      'Increased provisioning throughput by 42%, cut average API response latency by 39%, and maintained 99.9% application availability across distributed cloud environments.',
    technologies: ['Kafka', 'Redis', 'AWS SQS', 'Java', 'Go', 'PostgreSQL'],
    metrics: [
      { label: 'Provisioning Throughput', value: '42% ↑' },
      { label: 'Application Availability', value: '99.9%' },
      { label: 'Average API Latency', value: '39% ↓' },
    ],
    concepts: [
      'Event-driven architecture',
      'Asynchronous processing',
      'Service boundaries',
      'Caching',
      'Database optimization',
      'Reliability',
      'Load testing',
      'API performance',
    ],
    hasArchitectureDiagram: true,
  },
  {
    id: 'billing-platform',
    title: 'Subscription & Billing Platform',
    company: 'Chargebee',
    companyLink: 'https://www.chargebee.com',
    blurb:
      'Developed and scaled the subscription, billing, and payment infrastructure behind a production SaaS platform.',
    problem:
      'Recurring billing execution, payment synchronization, and reporting all needed to stay fast and accurate as transaction volume and global customer accounts grew.',
    approach:
      'Implemented asynchronous billing pipelines with RabbitMQ, Redis, and scheduled workers, integrated third-party payment gateways through secure webhook frameworks, and optimized SQL queries/indexing behind the reporting dashboards, while improving frontend performance with server-side rendering, lazy loading, and code splitting.',
    impact:
      'Cut recurring billing execution time by 41%, improved payment synchronization accuracy by 38%, sped up page loads by 43% and report queries by 46%, while holding 99.9% production availability.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Webhooks'],
    metrics: [
      { label: 'Recurring Billing Execution', value: '41% ↓' },
      { label: 'Page Load Times', value: '43% ↓' },
      { label: 'Report Execution Time', value: '46% ↓' },
    ],
    concepts: [
      'Subscription lifecycle',
      'Billing workflows',
      'Payment integrations',
      'Asynchronous processing',
      'Webhooks',
      'Database optimization',
      'Frontend performance',
    ],
  },
]
