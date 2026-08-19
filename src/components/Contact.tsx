'use client';

import { Section } from '@/components/Section';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { contactInfo } from '@/data/social';
import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" className="py-0">
      {/* Full-bleed dark CTA band — deliberately breaks from the page's light theme, a
          permanently-dark closing section regardless of light/dark mode. w-full (not w-screen +
          left-1/2) since <main> already has no side padding, so this stays correctly contained
          if it's ever reused inside a constrained container. */}
      <div className="relative w-full overflow-hidden bg-[#0a0e1a]">
        <div className="relative z-10 min-h-[560px] flex items-center justify-center px-6 py-24">
          <div className="max-w-2xl text-center">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white leading-tight tracking-[-0.02em]">
              Got An Idea?{' '}
              <span className="italic text-primary underline decoration-2 underline-offset-4">
                Let&apos;s Build It.
              </span>
            </h2>

            <a
              href={`mailto:${contactInfo.email}?subject=Let's connect!`}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-[#0a0e1a] font-semibold hover:scale-105 transition-transform"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a0e1a]" />
              Connect With Me
            </a>

            <p className="mt-10 text-sm sm:text-base text-white/70 leading-relaxed">
              I&apos;m open to{' '}
              <span className="underline decoration-wavy decoration-primary/70 underline-offset-4">
                full-time roles
              </span>{' '}
              in backend &amp; full-stack engineering.
            </p>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Building{' '}
              <span className="underline decoration-wavy decoration-primary/70 underline-offset-4">
                scalable systems
              </span>{' '}
              and{' '}
              <span className="underline decoration-wavy decoration-primary/70 underline-offset-4">
                AI-integrated products
              </span>
              . If that&apos;s what you&apos;re working on, let&apos;s talk.
            </p>

            <div className="flex items-center justify-center gap-6 mt-8 text-white/60 text-sm">
              <SocialIcon
                href={contactInfo.linkedin}
                icon={Linkedin}
                label="LinkedIn"
                external
                showLabel
                size={16}
                className="hover:text-white"
              />
              <span className="w-px h-4 bg-white/20" />
              <SocialIcon
                href={`mailto:${contactInfo.email}`}
                icon={Mail}
                label={contactInfo.email}
                showLabel
                size={16}
                className="hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
