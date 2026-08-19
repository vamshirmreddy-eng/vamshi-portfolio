'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Section, SectionHeading } from '@/components/Section';
import { MarkerUnderline } from '@/components/MarkerUnderline';
import { Pill } from '@/components/ui/Pill';
import { projects } from '@/data/projects';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const REVEAL = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 } as const,
};
const reveal = (i: number) => ({
  ...REVEAL,
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
});

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects" className="bg-light-bg/5">
      <Container className="max-w-[1220px]">
        <SectionHeading eyebrow="side projects">
          Side{' '}
          <span className="relative inline-block">
            Projects
            <MarkerUnderline color="#8b5cf6" />
          </span>{' '}
          <span className="text-secondary-text italic font-normal text-xl sm:text-2xl">
            ~ those late night grinds
          </span>
        </SectionHeading>

        <div className="mt-16">
          {featuredProjects.map((project, projectIndex) => {
            const hasTopActions = project.links.live || project.links.github;

            return (
              <article
                key={project.id}
                className={projectIndex > 0 ? 'mt-24 sm:mt-32 pt-24 sm:pt-32 border-t border-border' : ''}
              >
                {/* Eyebrow */}
                <motion.p
                  {...reveal(0)}
                  className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400 mb-3"
                >
                  Featured Project
                </motion.p>

                {/* Title + top actions */}
                <motion.div {...reveal(0)} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4 mb-4">
                  <h3 className="relative inline-block font-heading text-[clamp(2.5rem,4.5vw,4rem)] font-black text-text tracking-tight leading-[1.05]">
                    {project.title}
                    <MarkerUnderline color="#8b5cf6" />
                  </h3>
                  {hasTopActions && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-primary !px-4 !py-2 !text-sm inline-flex items-center gap-1.5"
                        >
                          View Project <ArrowUpRight size={16} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-secondary !px-4 !py-2 !text-sm inline-flex items-center gap-1.5"
                        >
                          GitHub <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>

                {/* Value proposition */}
                <motion.p
                  {...reveal(1)}
                  className="text-secondary-text leading-relaxed max-w-[620px] mb-10 sm:mb-12"
                >
                  {project.description}
                </motion.p>

                {/* Impact metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <motion.div
                    {...reveal(1)}
                    className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border mb-14 sm:mb-16"
                  >
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="py-4 sm:py-0 sm:px-6 first:pl-0 first:pt-0">
                        <p className="font-heading text-3xl sm:text-4xl font-black text-text">{metric.value}</p>
                        <p className="text-xs sm:text-sm text-secondary-text mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Screenshot, framed like a browser window */}
                <motion.div {...reveal(2)} className="mb-12 sm:mb-16">
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[18px] border border-border overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,23,42,0.25)]"
                  >
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-bg-light/90 border-b border-border">
                      <span className="w-2.5 h-2.5 rounded-full bg-[rgba(15,23,42,0.15)] dark:bg-white/15" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[rgba(15,23,42,0.15)] dark:bg-white/15" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[rgba(15,23,42,0.15)] dark:bg-white/15" />
                      <span className="ml-2 text-xs text-secondary-text font-mono">{project.title}</span>
                    </div>
                    <div className="relative w-full aspect-video bg-dark-bg-light">
                      <Image
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 1180px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Engineering story */}
                <motion.div
                  {...reveal(3)}
                  className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border mb-10 sm:mb-12"
                >
                  <div className="py-6 sm:py-0 sm:pr-6 first:pt-0">
                    <span className="font-mono text-xs text-violet-500">01</span>
                    <h4 className="font-bold text-text mt-1 mb-2">Problem</h4>
                    <p className="text-sm text-secondary-text leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="py-6 sm:py-0 sm:px-6">
                    <span className="font-mono text-xs text-violet-500">02</span>
                    <h4 className="font-bold text-text mt-1 mb-2">What I Built</h4>
                    <p className="text-sm text-secondary-text leading-relaxed mb-2">{project.whatIBuilt.summary}</p>
                    <ul className="space-y-1.5">
                      {project.whatIBuilt.bullets.slice(0, 3).map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-sm text-secondary-text leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-violet-500 mt-[7px] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="py-6 sm:py-0 sm:pl-6 last:pb-0">
                    <span className="font-mono text-xs text-violet-500">03</span>
                    <h4 className="font-bold text-text mt-1 mb-2">Impact</h4>
                    <p className="text-sm text-secondary-text leading-relaxed">{project.impact}</p>
                  </div>
                </motion.div>

                {/* Tech stack + footer CTA */}
                <motion.div {...reveal(3)} className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold text-secondary-text uppercase tracking-wide mb-2.5">
                      Built with
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Pill key={tech} color="violet">
                          {tech}
                        </Pill>
                      ))}
                    </div>
                  </div>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                    >
                      Explore Project
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </motion.div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
