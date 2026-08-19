import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  href: string | undefined;
  icon: LucideIcon;
  label: string;
  external?: boolean;
  size?: number;
  showLabel?: boolean;
  className?: string;
}

// Shared by Header, Footer, and Contact — each themes it differently via `className`, so this
// only centralizes the actual structure (icon + optional label + correct external-link
// attributes), not the visual style, which genuinely differs per context (dark CTA band vs.
// muted chrome). Hero's copy-to-clipboard Mail button stays separate — it's a different
// interaction, not just a different look.
//
// `href` is optional because ContactInfo's fields (e.g. `linkedin`) are optional in the type —
// renders nothing rather than a broken link if a caller's data doesn't have it set.
export function SocialIcon({ href, icon: Icon, label, external = false, size = 18, showLabel = false, className }: SocialIconProps) {
  if (!href) return null;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={showLabel ? undefined : label}
      className={cn('inline-flex items-center gap-1.5 transition-colors', className)}
    >
      <Icon size={size} />
      {showLabel && label}
    </a>
  );
}
