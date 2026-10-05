import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'floweval',
    title: 'FlowEval',
    tagline: 'Catch prompt regressions before they reach production.',
    problem:
      'Tweaking a prompt to fix one case can silently break another. Without automated checks, regressions like that only show up once they’ve already shipped.',
    whatIBuilt: {
      summary: 'A single-binary Go CLI and GitHub Action that runs prompt eval suites across multiple models.',
      bullets: [
        'Scores outputs via LLM-as-judge, exact match, latency, and cost',
        'Blocks the CI pipeline on a regression, same as a failing unit test',
        'Next.js results viewer with side-by-side prompt version comparisons',
      ],
    },
    impact:
      'Regression checks now run automatically in CI, catching bad prompt changes before they reach production, while cutting evaluation time by 65%.',
    description:
      'LLM prompt regression testing CLI and GitHub Action for CI/CD pipelines. Automatically tests prompt changes across multiple models and scores outputs using LLM-as-judge, exact match, latency, and cost metrics.',
    longDescription: `FlowEval is a single-binary Go CLI and GitHub Action that solves a critical problem every team building with LLMs faces: prompt regressions in production. When you tweak a prompt to fix one case, something else silently breaks — and there's no easy way to catch it in CI.

FlowEval runs your prompt eval suites against multiple models and scores the outputs using LLM-as-judge, exact match, latency, and cost metrics. If a prompt change causes a regression, it blocks the CI pipeline, the same way a failing unit test would.

The Next.js results viewer displays Postgres run history, enabling side-by-side prompt version comparisons and visualization of cost and latency trends across releases.`,
    features: [
      'Single-binary Go CLI and GitHub Action, drops straight into CI',
      'Scores prompt outputs via LLM-as-judge, exact match, latency, and cost',
      'Blocks the CI pipeline on a regression, same as a failing unit test',
      'Next.js results viewer backed by Postgres run history',
      'Side-by-side prompt version comparisons',
      'Cost and latency trend visualization across releases',
    ],
    technologies: ['Go', 'Next.js', 'PostgreSQL', 'GitHub Actions', 'OpenAI API', 'TypeScript'],
    imageUrl: '/projects/floweval.png',
    imageAlt:
      'FlowEval LLM evaluation dashboard showing prompt regression detection, model comparison, latency, cost, and release quality metrics.',
    featured: true,
    links: {
      caseStudy: '/projects/floweval',
    },
    metrics: [
      { label: 'Execution Time Reduction', value: '65%' },
      { label: 'Supported Models', value: '10+' },
      { label: 'Automated Regression Checks', value: 'CI Native' },
    ],
    startDate: '2024-01',
  },
  {
    id: 'paywalllab',
    title: 'PaywallLab',
    tagline: 'Test paywall variants without slowing down your page.',
    problem:
      'Teams want to experiment with their paywalls, but usually have no easy way to test what actually converts.',
    whatIBuilt: {
      summary:
        'A complete experimentation platform: a lightweight JS snippet, a Go API backed by PostgreSQL and Redis, and a Next.js dashboard for real-time results.',
      bullets: [
        'Go API assigns visitors to variants, backed by PostgreSQL and Redis',
        'OpenAI API auto-generates paywall copy and layout variants',
        'Load-tested to 5K req/s with tuned Redis caching for low p99 latency',
      ],
    },
    impact:
      'Teams can measure real conversion lift per variant in real time, with the serving layer proven at 5K requests/second and sub-100ms p99 latency.',
    description:
      'Open-source A/B testing platform for paywalls with real-time conversion tracking. Lightweight JavaScript snippet, Golang API, and Next.js dashboard with AI-powered paywall copy generation and automatic variant suggestions.',
    longDescription: `PaywallLab is a complete experimentation platform designed to solve a common problem from the SaaS world: teams wanting to experiment with their paywalls but having no easy way to test what actually converts.

The platform consists of:
- A lightweight JavaScript snippet you drop into any site
- A Golang API that assigns visitors to variants (backed by PostgreSQL and Redis)
- A webhook pipeline that captures conversion events
- A Next.js dashboard showing per-variant conversion lift in real time

The platform integrates the OpenAI API to auto-generate paywall copy and layout variants — so instead of writing test variations by hand, the system suggests them. The serving layer was load-tested to 5K requests/second with k6, and Redis caching was tuned to keep p99 latency low — because an A/B testing snippet that slows down your page defeats its own purpose.`,
    features: [
      'Lightweight JavaScript snippet drops into any site',
      'Go API assigns visitors to variants, backed by PostgreSQL and Redis',
      'Webhook pipeline captures conversion events',
      'Next.js dashboard shows per-variant conversion lift in real time',
      'OpenAI API auto-generates paywall copy and layout variants',
      'Load-tested to 5K req/s with k6, tuned Redis caching for low p99 latency',
    ],
    technologies: [
      'Go',
      'Node.js',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'JavaScript',
      'OpenAI API',
      'k6',
    ],
    imageUrl: '/projects/paywalllab.png',
    imageAlt:
      'PaywallLab A/B testing dashboard showing paywall variants, conversion metrics, traffic allocation, and experiment performance.',
    featured: true,
    links: {
      caseStudy: '/projects/paywalllab',
    },
    metrics: [
      { label: 'Load Capacity', value: '5K req/s' },
      { label: 'P99 Latency', value: '<100ms' },
      { label: 'A/B Tests Supported', value: 'Unlimited' },
    ],
    startDate: '2023-06',
  },
]
