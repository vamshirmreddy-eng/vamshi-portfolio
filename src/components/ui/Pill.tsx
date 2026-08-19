import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Complete class strings per color, not constructed from a template — Tailwind's JIT compiler
// only picks up classes it can see as literal strings at build time.
const PILL_COLORS = {
  primary: 'border-primary/30 bg-primary/5 text-primary',
  green: 'border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400',
  violet: 'border-violet-500/40 bg-violet-500/10 text-violet-600 dark:text-violet-400',
} as const;

export type PillColor = keyof typeof PILL_COLORS;

export function Pill({ color = 'primary', children }: { color?: PillColor; children: ReactNode }) {
  return (
    <span className={cn('px-3 py-1 text-xs rounded-full border font-medium', PILL_COLORS[color])}>{children}</span>
  );
}
