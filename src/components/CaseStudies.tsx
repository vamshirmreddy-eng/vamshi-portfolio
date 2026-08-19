'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section, SectionHeading } from '@/components/Section';
import { MarkerUnderline } from '@/components/MarkerUnderline';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { CARD_CLASS } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { cn } from '@/lib/utils';
import { caseStudies } from '@/data/caseStudies';
import { ChevronDown, ExternalLink } from 'lucide-react';

export function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(caseStudies[0]?.id ?? null);

  return (
    <Section id="work">
      <Container>
        <SectionHeading eyebrow="work">
          Selected{' '}
          <span className="relative inline-block">
            Engineering Work
            <MarkerUnderline color="#8b5cf6" />
          </span>
        </SectionHeading>

        <div className="space-y-5 mt-10">
          {caseStudies.map((cs) => {
            const isOpen = openId === cs.id;
            return (
              <motion.div
                key={cs.id}
                layout
                className={cn(CARD_CLASS, 'overflow-hidden')}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : cs.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start sm:items-center justify-between gap-4 text-left p-6 sm:p-8"
                >
                  <div>
                    <p className="text-xs font-mono text-primary mb-1.5">
                      {cs.company}
                      {cs.metrics[0] && ` · ${cs.metrics[0].value}`}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-text">{cs.title}</h3>
                    <p className="text-secondary-text mt-2 max-w-2xl">{cs.blurb}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary whitespace-nowrap">
                    {isOpen ? 'Hide details' : 'View Case Study'}
                    <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-8 border-t border-[rgba(15,23,42,0.06)] pt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-secondary-text mb-1">
                              Problem
                            </p>
                            <p className="text-sm text-text leading-relaxed">{cs.problem}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-secondary-text mb-1">
                              Approach
                            </p>
                            <p className="text-sm text-text leading-relaxed">{cs.approach}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-secondary-text mb-1">
                              Impact
                            </p>
                            <p className="text-sm text-text leading-relaxed">{cs.impact}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                          {cs.metrics.map((m) => (
                            <div key={m.label} className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                              <span className="font-bold text-primary text-sm">{m.value}</span>{' '}
                              <span className="text-xs text-secondary-text">{m.label}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {cs.concepts.map((concept) => (
                            <span
                              key={concept}
                              className="px-2.5 py-1 text-xs rounded-full bg-[rgba(15,23,42,0.04)] dark:bg-white/5 text-secondary-text"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>

                        {cs.hasArchitectureDiagram && <ArchitectureDiagram />}

                        <div className="flex flex-wrap gap-2 mt-6">
                          {cs.technologies.map((tech) => (
                            <Pill key={tech}>{tech}</Pill>
                          ))}
                        </div>

                        {cs.companyLink && (
                          <a
                            href={cs.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                          >
                            {cs.company} <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
