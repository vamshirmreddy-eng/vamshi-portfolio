'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { MapPin, ArrowRight } from 'lucide-react';

const INTERESTED_IN = [
  'Senior Full-Stack Engineer',
  'Backend Engineer',
  'Software Engineer',
  'Platform Engineer',
  'AI Product Engineer',
];

// Click/hover reveals what roles + location, so "open to opportunities" isn't just a vague
// signal. `id="status-badge"` is a real DOM hook other components measure against (see
// ProfileAvatar's scroll-linked travel target).
export function AvailabilityBadge() {
  const [badgeOpen, setBadgeOpen] = useState(false);
  const currentLocation = experience[0]?.location;

  return (
    <div
      className="fixed top-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setBadgeOpen(true)}
      onMouseLeave={() => setBadgeOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setBadgeOpen(false);
      }}
    >
      <button
        type="button"
        id="status-badge"
        onClick={() => setBadgeOpen((v) => !v)}
        aria-expanded={badgeOpen}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border-2 border-dashed border-green-500/40 bg-green-50 dark:bg-green-500/10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="hidden sm:inline text-[13px] font-semibold text-green-600 dark:text-green-400">
          Open to Full-Stack / Backend Opportunities
        </span>
      </button>

      <AnimatePresence>
        {badgeOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="mt-2 w-64 p-4 rounded-2xl border border-border bg-dark-bg/95 backdrop-blur-md shadow-lg text-left"
          >
            <p className="text-xs font-semibold text-secondary-text uppercase tracking-wide mb-2">Interested in</p>
            <ul className="space-y-1 mb-3">
              {INTERESTED_IN.map((role) => (
                <li key={role} className="text-sm text-text">
                  {role}
                </li>
              ))}
            </ul>
            {currentLocation && (
              <div className="flex items-start gap-1.5 text-sm text-secondary-text mb-1">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>{currentLocation}</span>
              </div>
            )}
            <p className="text-xs text-secondary-text mb-3">Open to discussing remote/hybrid opportunities.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Contact <ArrowRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
