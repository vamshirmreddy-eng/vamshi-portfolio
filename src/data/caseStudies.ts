import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-workflows',
    title: 'AI-Powered Administrative Workflows',
    company: 'SailPoint',
    companyLink: 'https://www.sailpoint.com',
    blurb: 'Built semantic search and contextual recommendations for administrative workflows.',
    problem:
      'Administrative workflows needed faster access to relevant context and recommendations.',
    approach:
      'Used OpenAI APIs and a RAG pipeline with embeddings stored in PostgreSQL through pgvector, integrated with the existing Node.js services and customer-facing application.',
    impact: 'Reduced manual effort by 48%.',
    technologies: ['OpenAI API', 'RAG', 'PostgreSQL', 'pgvector', 'Node.js'],
    metrics: [{ label: 'Manual Effort', value: '48% ↓' }],
    concepts: ['Semantic search', 'Contextual recommendations', 'RAG', 'Vector search'],
  },
  {
    id: 'provisioning-platform',
    title: 'Event-Driven Provisioning',
    company: 'SailPoint',
    companyLink: 'https://www.sailpoint.com',
    blurb: 'Implemented reliable event-driven processing for identity provisioning workflows.',
    problem:
      'Provisioning workloads required resilient asynchronous processing and stronger throughput.',
    approach:
      'Built distributed Node.js services using Kafka, AWS SQS, and Lambda with idempotency, retries, and structured error handling, then optimized MongoDB and Redis access paths.',
    impact: 'Increased processing throughput by 42% and reduced API response latency by 39%.',
    technologies: ['Node.js', 'Kafka', 'AWS SQS', 'Lambda', 'MongoDB', 'Redis'],
    metrics: [
      { label: 'Processing Throughput', value: '42% ↑' },
      { label: 'API Response Latency', value: '39% ↓' },
    ],
    concepts: ['Event-driven architecture', 'Idempotency', 'Retries', 'Caching', 'API performance'],
    hasArchitectureDiagram: true,
  },
  {
    id: 'billing-platform',
    title: 'Subscription Billing Platform',
    company: 'Chargebee',
    companyLink: 'https://www.chargebee.com',
    blurb:
      'Built billing services and customer applications for subscription and payment operations.',
    problem:
      'High-volume billing, invoicing, and payment reconciliation had to remain fast and accurate.',
    approach:
      'Built Node.js and Express services, RabbitMQ workers, payment gateway integrations, webhook consumers, and React and Next.js customer-facing dashboards backed by PostgreSQL.',
    impact:
      'Supported 10M+ monthly billing cycles at 99.9% uptime and reduced invoice generation time by 41%.',
    technologies: ['Node.js', 'Express.js', 'RabbitMQ', 'React', 'Next.js', 'PostgreSQL'],
    metrics: [
      { label: 'Monthly Billing Cycles', value: '10M+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Invoice Generation Time', value: '41% ↓' },
    ],
    concepts: [
      'Subscription billing',
      'Payment reconciliation',
      'Webhooks',
      'Asynchronous processing',
    ],
  },
];
