'use client';

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

// Neither of these is a real photo of Vamshi (a cat photo and a Shin-chan cartoon) — alt text
// says so honestly instead of claiming identity, same restraint as About.tsx's polaroid captions.
const AVATAR_IMAGES = [
  { src: '/images/avatar-1.jpeg', alt: 'A cat' },
  { src: '/images/avatar-2.jpeg', alt: 'Shin-chan cartoon character' },
];

function ShufflingAvatar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % AVATAR_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-[3px] rounded-full overflow-hidden shadow-lg shadow-primary/20">
      <AnimatePresence mode="wait">
        {/* Animate a plain wrapper div, not next/image itself — motion.create(Image) previously
            clobbered the inline styles next/image's `fill` mode needs to inject (position/inset),
            which made the avatar render at effectively zero size and disappear entirely. */}
        <motion.div
          key={AVATAR_IMAGES[index].src}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={AVATAR_IMAGES[index].src}
            alt={AVATAR_IMAGES[index].alt}
            fill
            sizes="112px"
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const AVATAR_FLOATING_SIZE = 44;
const BADGE_GAP = 10; // px between the floating avatar and the status badge

// One physical avatar that travels from its hero position to a small floating spot right
// beside the status badge as soon as the user starts scrolling — not a fade-swap between two
// separate images. The hero slot stays as an empty same-size placeholder so nothing shifts.
export function ProfileAvatar() {
  const slotRef = useRef<HTMLDivElement>(null);
  const [startRect, setStartRect] = useState<{ top: number; left: number; size: number } | null>(null);
  const [endRect, setEndRect] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const slotEl = slotRef.current;
      const badgeEl = document.getElementById('status-badge');
      if (slotEl) {
        const rect = slotEl.getBoundingClientRect();
        setStartRect({ top: rect.top, left: rect.left, size: rect.width });
      }
      if (badgeEl) {
        const badge = badgeEl.getBoundingClientRect();
        setEndRect({
          top: badge.top + (badge.height - AVATAR_FLOATING_SIZE) / 2,
          left: badge.left - AVATAR_FLOATING_SIZE - BADGE_GAP,
        });
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Raw window scroll pixels, not a target-relative fraction — guarantees progress is exactly
  // 0 at page load (avatar beside the name) with no ambiguity about the hero's scroll bounds.
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 80], [0, 1]);

  const springConfig = { stiffness: 180, damping: 24, mass: 0.7 };
  const x = useSpring(useTransform(progress, [0, 1], [startRect?.left ?? 0, endRect?.left ?? 0]), springConfig);
  const y = useSpring(useTransform(progress, [0, 1], [startRect?.top ?? 0, endRect?.top ?? 0]), springConfig);
  const scale = useSpring(
    useTransform(progress, [0, 1], [1, startRect ? AVATAR_FLOATING_SIZE / startRect.size : 1]),
    springConfig
  );

  return (
    <>
      {/* Placeholder — reserves the avatar's layout space in the hero so nothing shifts */}
      <div ref={slotRef} className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0" />

      {startRect &&
        endRect &&
        createPortal(
          // Portalled straight to <body> — a fixed-position element is only ever positioned
          // relative to the viewport if NO ancestor has a `transform` set, and the entrance
          // animation on the "Avatar + Name" wrapper leaves a transform on that ancestor even
          // after it finishes. Rendering here sidesteps that containing-block trap entirely.
          <motion.div
            className="fixed top-0 left-0 w-24 h-24 sm:w-28 sm:h-28 z-40 pointer-events-none"
            style={{ x, y, scale, transformOrigin: 'top left' }}
          >
            <div className="relative w-full h-full pointer-events-auto">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgb(var(--color-primary)), rgb(var(--color-secondary)), rgb(var(--color-primary)))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <ShufflingAvatar />
            </div>
          </motion.div>,
          document.body
        )}
    </>
  );
}
