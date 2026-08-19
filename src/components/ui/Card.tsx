import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// The base card surface repeated ~16x across TechStack/HowIEngineer/CaseStudies. Exported as a
// className string (not just the component below) because a couple of call sites need it on a
// `motion.div` for whileInView/layout animation, which doesn't share plain div prop types.
export const CARD_CLASS = 'rounded-2xl border border-border bg-white/55 dark:bg-dark-bg-light/50';

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(CARD_CLASS, className)} {...props}>
      {children}
    </div>
  );
}
