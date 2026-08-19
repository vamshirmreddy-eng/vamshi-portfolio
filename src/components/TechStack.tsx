'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { Container } from '@/components/Container';
import { Section, SectionHeading } from '@/components/Section';
import { MarkerUnderline } from '@/components/MarkerUnderline';
import { CARD_CLASS } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { Code2, Layers, Database, Network, Cloud, Bot, Brain, MessageSquareText, ChevronDown } from 'lucide-react';

// A shared shape both react-icons and lucide-react icon components satisfy.
type AnyIcon = ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
import {
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiGo,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiApachekafka,
  SiRabbitmq,
  SiGithubcopilot,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

interface TechBadge {
  name: string;
  Icon: AnyIcon;
  color?: string; // omitted for brand marks that are monochrome (inherits theme text color)
  core?: boolean; // shown in the curated default view, not just behind "Explore full stack"
}

interface TechCategory {
  label: string;
  Icon: AnyIcon;
  badges: TechBadge[];
}

// Curated to communicate depth of real production usage, not a keyword dump — per category,
// not a giant flat list. GitHub Copilot is workflow tooling, not core stack, so it's a small
// mention rather than a headline pill (see the note below the grid).
const CATEGORIES: TechCategory[] = [
  {
    label: 'Languages',
    Icon: Code2,
    badges: [
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', core: true },
      { name: 'Java', Icon: SiOpenjdk, color: '#F58219', core: true },
      { name: 'Go', Icon: SiGo, color: '#00ADD8', core: true },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', Icon: Database, color: '#2f80ff' },
    ],
  },
  {
    label: 'Frontend',
    Icon: Layers,
    badges: [
      { name: 'React', Icon: SiReact, color: '#61DAFB', core: true },
      { name: 'Next.js', Icon: SiNextdotjs, core: true },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend',
    Icon: Layers,
    badges: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', core: true },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Express', Icon: SiExpress },
      { name: 'REST APIs', Icon: Network, color: '#2f80ff' },
      { name: 'Microservices', Icon: Layers, color: '#2f80ff' },
    ],
  },
  {
    label: 'Data',
    Icon: Database,
    badges: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', core: true },
      { name: 'Redis', Icon: SiRedis, color: '#DC382D', core: true },
    ],
  },
  {
    label: 'Distributed Systems',
    Icon: Network,
    badges: [
      { name: 'Kafka', Icon: SiApachekafka, core: true },
      { name: 'RabbitMQ', Icon: SiRabbitmq, color: '#FF6600' },
      { name: 'AWS SQS', Icon: Cloud, color: '#FF9900' },
      { name: 'Webhooks', Icon: Network, color: '#2f80ff' },
      { name: 'Event-Driven Architecture', Icon: Network, color: '#2f80ff' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    Icon: Cloud,
    badges: [
      { name: 'AWS', Icon: FaAws, color: '#FF9900', core: true },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED', core: true },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE6' },
      { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
      { name: 'CI/CD', Icon: Cloud, color: '#2f80ff' },
    ],
  },
  {
    label: 'AI',
    Icon: Bot,
    badges: [
      { name: 'OpenAI API', Icon: Bot, color: '#2f80ff', core: true },
      { name: 'LLM Integration', Icon: Brain, color: '#2f80ff' },
      { name: 'Prompt Engineering', Icon: MessageSquareText, color: '#2f80ff' },
    ],
  },
];

const CORE_STACK = CATEGORIES.flatMap((c) => c.badges.filter((b) => b.core));

export function TechStack() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="tech-stack" className="bg-light-bg/5">
      <Container>
        <SectionHeading eyebrow="stack">
          Core{' '}
          <span className="relative inline-block">
            Engineering Stack
            <MarkerUnderline />
          </span>{' '}
          <span className="text-secondary-text italic font-normal text-xl sm:text-2xl">
            ~ what I actually ship with
          </span>
        </SectionHeading>

        {!expanded ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8"
          >
            <div className="flex flex-wrap gap-3">
              {CORE_STACK.map((badge) => (
                <div
                  key={badge.name}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-white/55 dark:bg-dark-bg-light/50 text-sm font-medium text-text hover:-translate-y-[3px] transition-transform"
                >
                  <badge.Icon
                    size={16}
                    className="shrink-0 transition-transform group-hover:scale-105"
                    style={badge.color ? { color: badge.color } : undefined}
                  />
                  {badge.name}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-1.5 mt-6 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
            >
              Explore full stack <ChevronDown size={16} />
            </button>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {CATEGORIES.map((category, i) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(CARD_CLASS, 'p-6')}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <category.Icon size={20} className="text-primary" />
                    <h3 className="text-lg font-bold text-text">{category.label}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.badges.map((badge) => (
                      <div
                        key={badge.name}
                        className="group flex items-center gap-2 p-3 rounded-xl border border-border bg-white/40 dark:bg-dark-bg/40 text-sm font-medium text-text hover:-translate-y-[3px] transition-transform"
                      >
                        <badge.Icon
                          size={16}
                          className="shrink-0 transition-transform group-hover:scale-105"
                          style={badge.color ? { color: badge.color } : undefined}
                        />
                        <span className="truncate">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm text-secondary-text flex items-center gap-1.5">
              <SiGithubcopilot size={14} /> Also part of my day-to-day workflow: GitHub Copilot and Claude Code for
              AI-assisted development.
            </p>

            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-1.5 mt-4 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
            >
              Show core stack <ChevronDown size={16} className="rotate-180" />
            </button>
          </>
        )}
      </Container>
    </Section>
  );
}
