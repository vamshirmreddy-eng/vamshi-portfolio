'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn('py-16 sm:py-20 lg:py-[120px]', className)}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({ children, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className="mb-4">
      {eyebrow && (
        <p className="font-mono text-sm text-primary mb-2">{`// ${eyebrow}`}</p>
      )}
      <h2
        className={cn('font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text', className)}
        style={{ letterSpacing: '-0.035em' }}
      >
        {children}
      </h2>
    </div>
  );
}

interface SectionSubtitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <p className={cn(
      'text-lg sm:text-xl text-secondary-text mb-8 sm:mb-12',
      className
    )}>
      {children}
    </p>
  );
}
