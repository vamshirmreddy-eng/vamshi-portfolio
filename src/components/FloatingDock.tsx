'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION_LINKS } from '@/lib/constants';
import { Home, User, Code2, Briefcase, History, Mail, Moon, Sun } from 'lucide-react';

const NAV_ICONS: Record<string, typeof Home> = {
  '#home': Home,
  '#work': Briefcase,
  '#experience': History,
  '#tech-stack': Code2,
  '#about': User,
  '#contact': Mail,
};

export function FloatingDock() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  // Scroll-spy: highlight the dock icon for whichever section is currently in view.
  useEffect(() => {
    const sections = NAVIGATION_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    if (!mounted) return;

    const html = document.documentElement;
    const newDarkMode = !isDarkMode;

    if (newDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    setIsDarkMode(newDarkMode);
  };

  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center px-4">
      <div className="relative">
        {/* Mascot — sits BEHIND the dock (lower z-index) and slides up from under it, so the
            dock's own opaque/blurred background genuinely masks its lower half while hidden. */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-8 bottom-full z-0 text-2xl leading-none"
          animate={{ y: ['100%', '100%', '5%', '10%', '5%', '5%', '100%', '100%'] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.34, 1.56, 0.64, 1],
            times: [0, 0.2, 0.3, 0.38, 0.45, 0.7, 0.82, 1],
          }}
        >
          🐱
        </motion.div>

        <nav
          className="relative z-10 flex items-center gap-1 px-3 py-2 rounded-[18px] border border-border bg-dark-bg/75 backdrop-blur-[28px]"
          style={{ boxShadow: '0 8px 30px rgba(15,23,42,0.08)' }}
        >
          {NAVIGATION_LINKS.map((link) => {
            const Icon = NAV_ICONS[link.href] ?? Home;
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.name}
                className={`group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-all hover:-translate-y-0.5 ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-secondary-text hover:text-primary'
                }`}
              >
                <Icon size={19} />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-dark-bg px-2 py-1 text-xs text-text opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 border border-border">
                  {link.name}
                </span>
              </a>
            );
          })}

          <span className="w-px h-6 bg-[rgba(15,23,42,0.1)] mx-1" />

          <button
            type="button"
            onClick={toggleDarkMode}
            className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-secondary-text hover:text-primary hover:-translate-y-0.5 transition-all"
            aria-label="Toggle dark mode"
          >
            {mounted && isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-dark-bg px-2 py-1 text-xs text-text opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 border border-border">
              Theme
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
