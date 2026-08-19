'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig, contactInfo } from '@/data/social';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { copyToClipboard } from '@/lib/utils';
import { GITHUB_URL, YEARS_OF_EXPERIENCE } from '@/lib/constants';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { Linkedin, Mail, Github, Clock, Terminal, ArrowRight } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiTypescript,
  SiGo,
  SiOpenjdk,
  SiGithubcopilot,
} from 'react-icons/si';

const SKILL_ICONS: Record<string, { Icon: IconType; color?: string }> = {
  'Next.js': { Icon: SiNextdotjs },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'Go (Golang)': { Icon: SiGo, color: '#00ADD8' },
  Java: { Icon: SiOpenjdk, color: '#F58219' },
  'GitHub Copilot': { Icon: SiGithubcopilot },
};

const FEATURED_SKILL_NAMES = new Set(Object.keys(SKILL_ICONS));

// Staggered entrance — each hero block fades/slides in ~60ms after the previous one.
const ENTRANCE = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};
const stagger = (i: number) => ({ ...ENTRANCE, transition: { ...ENTRANCE.transition, delay: i * 0.06 } });

function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        `${new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'America/Los_Angeles',
        })} PT`
      );
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;
  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{time}</span>;
}

export function Hero() {
  const currentJob = experience[0];
  const previousJob = experience[1];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await copyToClipboard(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const featuredSkills = skills.filter((s) => FEATURED_SKILL_NAMES.has(s.name));
  const hasMoreSkills = skills.length > featuredSkills.length;

  return (
    <section id="home" className="relative pt-32 lg:pt-[30vh] pb-20">
      {/* md:max-w/lg:max-w cap the content width to whatever the vw-based left margin leaves
          behind (with a small gutter to absorb the scrollbar-width quirk in 100vw) — without
          them, margin + the fixed 760px width overflow the viewport in two real ranges:
          768–894px (md) and 1024–1070px (lg), including iPad portrait at exactly 768px. */}
      <div className="relative z-10 w-full max-w-[760px] px-4 sm:px-6 md:ml-[15vw] md:px-0 md:max-w-[min(760px,calc(100vw-15vw-2rem))] lg:ml-[29vw] lg:max-w-[min(760px,calc(100vw-29vw-2rem))]">
        {/* Avatar + Name */}
        <motion.div {...stagger(0)} className="flex items-center gap-5 mb-3">
          <ProfileAvatar />
          <div>
            <h1 className="font-heading text-[clamp(2.875rem,4vw,4rem)] font-black text-text leading-[0.95] tracking-[-0.045em]">
              {portfolioConfig.name}
            </h1>
            <p className="text-lg font-bold text-primary mt-1">{portfolioConfig.title}</p>
          </div>
        </motion.div>

        {/* Positioning statement — a single sentence, not a résumé paragraph */}
        <motion.p
          {...stagger(1)}
          className="text-[17px] leading-[1.6] text-[#444b55] dark:text-secondary-text mb-4 max-w-[620px]"
        >
          {portfolioConfig.positioningStatement}
        </motion.p>

        {/* Meta line: years · current company · previous company · location */}
        <motion.p {...stagger(2)} className="flex flex-wrap items-center gap-x-1.5 text-sm text-secondary-text mb-7">
          <span className="font-semibold text-text">{YEARS_OF_EXPERIENCE}+ years</span>
          <span>·</span>
          {currentJob.companyLink ? (
            <a
              href={currentJob.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              {currentJob.company}
            </a>
          ) : (
            <span className="font-semibold text-text">{currentJob.company}</span>
          )}
          {previousJob && (
            <>
              <span>·</span>
              <span>
                ex-
                {previousJob.companyLink ? (
                  <a
                    href={previousJob.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {previousJob.company}
                  </a>
                ) : (
                  previousJob.company
                )}
              </span>
            </>
          )}
          {currentJob.location && (
            <>
              <span>·</span>
              <span>{currentJob.location}</span>
            </>
          )}
        </motion.p>

        {/* Primary CTAs */}
        <motion.div {...stagger(3)} className="flex flex-wrap gap-4 mb-7">
          <a href="#work" className="button-primary inline-flex items-center gap-2">
            View Selected Work <ArrowRight size={18} />
          </a>
          <a
            href={contactInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
          >
            View Resume ↗
          </a>
        </motion.div>

        {/* Social + contact + clock */}
        <motion.div {...stagger(4)} className="flex flex-wrap items-center gap-4 mb-6 text-secondary-text text-sm">
          {GITHUB_URL && (
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary hover:-translate-y-0.5 transition-all"
            >
              <Github size={18} />
            </a>
          )}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary hover:-translate-y-0.5 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email"
            className="inline-flex items-center gap-1 hover:text-primary hover:-translate-y-0.5 transition-all"
          >
            <Mail size={18} />
          </button>
          <a href="#contact" className="font-medium text-primary hover:text-primary-dark transition-colors">
            Contact me{copied ? ' (email copied!)' : ''}
          </a>
          <span className="w-px h-4 bg-[rgba(15,23,42,0.14)]" />
          <span className="inline-flex items-center gap-1.5 font-mono">
            <Clock size={14} /> <LiveClock />
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div {...stagger(5)} className="border-t border-border mb-6" />

        {/* Tech stack line */}
        <motion.div {...stagger(6)} className="flex flex-wrap items-center gap-2 text-sm">
          <Terminal size={16} className="text-primary shrink-0" />
          <span className="text-text font-semibold">Building across the stack</span>
          <span className="text-secondary-text">·</span>
          {featuredSkills.map((skill, i) => {
            const { Icon, color } = SKILL_ICONS[skill.name];
            return (
              <span key={skill.id} className="inline-flex items-center gap-1.5">
                <span className="tech-pill inline-flex items-center gap-1.5 text-xs font-medium">
                  <Icon size={14} style={color ? { color } : undefined} />
                  {skill.name}
                </span>
                {i < featuredSkills.length - 1 && <span className="text-secondary-text">,</span>}
              </span>
            );
          })}
          {hasMoreSkills && (
            <a href="#tech-stack" className="text-primary hover:text-primary-dark font-medium transition-colors">
              Explore full stack →
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
