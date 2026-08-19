'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_NAME } from '@/lib/constants';
import { contactInfo } from '@/data/social';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { AvailabilityBadge } from '@/components/AvailabilityBadge';
import { FloatingDock } from '@/components/FloatingDock';
import { BottomBlur } from '@/components/BottomBlur';
import { Mail, Link2, Linkedin, X as CloseIcon } from 'lucide-react';

// z-index layering convention used across Header/ProfileAvatar/ImpactStrip (Tailwind's default
// scale, not arbitrary numbers): 10 local content (e.g. a section's own background decoration),
// 20 tooltips/popovers scoped to one element, 40 secondary fixed chrome (email rail, social
// toggle, bottom blur, the scroll-linked avatar), 50 primary fixed chrome (wordmark, badge, dock)
// — always on top since it's the persistent navigation layer.
export function Header() {
  const [socialsOpen, setSocialsOpen] = useState(false);
  const initials = SITE_NAME.split(' ');

  return (
    <>
      {/* Top-left wordmark */}
      <a
        href="#home"
        className="fixed top-6 left-6 z-50 font-heading text-[26px] font-extrabold uppercase leading-none tracking-tight hover:opacity-80 transition-opacity"
      >
        {initials.map((word, i) => (
          <span key={i}>
            <span className="text-primary">{word[0]}</span>
            <span className="text-text">{word.slice(1)}</span>
          </span>
        ))}
        <span className="text-primary">.</span>
      </a>

      <AvailabilityBadge />

      {/* Vertical email, left edge */}
      <a
        href={`mailto:${contactInfo.email}`}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block text-xs font-mono tracking-widest text-secondary-text hover:text-primary transition-colors"
        style={{ writingMode: 'vertical-rl' }}
      >
        {contactInfo.email}
      </a>

      {/* Floating social-links toggle, right edge */}
      <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center">
        <AnimatePresence mode="wait">
          {socialsOpen ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-1 p-2 rounded-full border border-border bg-dark-bg/90 backdrop-blur-md shadow-lg"
            >
              <SocialIcon
                href={contactInfo.linkedin}
                icon={Linkedin}
                label="LinkedIn"
                external
                className="p-2 rounded-full text-secondary-text hover:text-primary hover:bg-primary/10"
              />
              <SocialIcon
                href={`mailto:${contactInfo.email}`}
                icon={Mail}
                label="Email"
                className="p-2 rounded-full text-secondary-text hover:text-primary hover:bg-primary/10"
              />
              <button
                type="button"
                onClick={() => setSocialsOpen(false)}
                aria-label="Close social links"
                className="p-2 rounded-full text-secondary-text hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <CloseIcon size={16} />
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="collapsed"
              type="button"
              onClick={() => setSocialsOpen(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              aria-label="Show social links"
              className="w-11 h-11 rounded-full border border-border bg-dark-bg/80 backdrop-blur-md shadow-lg flex items-center justify-center text-secondary-text hover:text-primary transition-colors"
            >
              <Link2 size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <BottomBlur />
      <FloatingDock />
    </>
  );
}
