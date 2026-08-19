'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section, SectionHeading } from '@/components/Section';
import { MarkerUnderline } from '@/components/MarkerUnderline';
import { portfolioConfig, contactInfo } from '@/data/social';
import { education } from '@/data/education';
import { GraduationCap } from 'lucide-react';

// Wraps exact substrings from the source text in <strong> — never rewrites the copy, only emphasizes it.
function withEmphasis(text: string, phrases: string[]) {
  if (phrases.length === 0) return text;
  const pattern = new RegExp(`(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return text.split(pattern).map((part, i) =>
    phrases.includes(part) ? (
      <strong key={i} className="text-text font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// None of these are photos of Vamshi himself — captions are mood/concept, not identity claims
// (same restraint as the old avatar-1/avatar-2 captions: "vibes", not "me").
type PhotoId = 'p1' | 'p2' | 'p3';

const STACK_PHOTOS: { id: PhotoId; src: string; alt: string; caption: string }[] = [
  {
    id: 'p3',
    src: '/images/p3.png',
    alt: 'Over-the-shoulder view of hands typing on a mechanical keyboard at a desk, with a laptop showing a code editor, a cup of coffee, and an open notebook',
    caption: 'Where I build',
  },
  {
    id: 'p2',
    src: '/images/p2.png',
    alt: 'Stylized "VR" monogram graphic with terminal and code iconography on a dark background',
    caption: 'Offline mode',
  },
  {
    id: 'p1',
    src: '/images/p1.png',
    alt: 'Illustrated diagram of a distributed backend architecture — API gateway, auth, user, payments, and notification services connected to a central data store',
    caption: 'Beyond the terminal',
  },
];

// Position purely by rank (0 = front, 1 = middle, 2 = back), not by fixed id — whichever photo
// is clicked animates into rank 0 from wherever it was. x/y are percentages of the card's own
// size (not the container), so the fan spacing scales down naturally on smaller cards/mobile.
// Every card shares this exact size — depth comes only from rotation/offset/z-index/shadow,
// never from scaling a card down, so the back cards never read as "mini" versions of the front.
const CARD_WIDTH = 'w-[clamp(200px,60%,380px)]';
const CAPTION_CLASS = 'text-xl sm:text-2xl';

const RANK_STYLE = [
  { x: 0, y: 0, rotate: 3, zIndex: 3 },
  { x: 45, y: -25, rotate: -5, zIndex: 2 },
  { x: -55, y: -35, rotate: 7, zIndex: 1 },
] as const;

// Extra separation applied on top of RANK_STYLE while the stack is hovered — the front card
// stays put, the two behind it fan out a little further so the stack visibly reads as stacked,
// separate cards rather than one flat photo.
const HOVER_SPREAD: Record<number, { x: number; y: number }> = {
  1: { x: 16, y: -4 },
  2: { x: -16, y: -4 },
};

function cardTransform(rank: number, hovered: boolean) {
  const base = RANK_STYLE[rank];
  if (!hovered || rank === 0) return base;
  const spread = HOVER_SPREAD[rank];
  return { ...base, x: base.x + spread.x, y: base.y + spread.y };
}

export function About() {
  const [order, setOrder] = useState<PhotoId[]>(['p3', 'p2', 'p1']);
  const [stackHovered, setStackHovered] = useState(false);

  const bringToFront = (id: PhotoId) => {
    setOrder((prev) => (prev[0] === id ? prev : [id, ...prev.filter((x) => x !== id)]));
  };

  return (
    <Section id="about" className="bg-light-bg/5">
      <Container>
        <SectionHeading eyebrow="about 👋">
          More{' '}
          <span className="relative inline-block">
            About me
            <MarkerUnderline />
          </span>{' '}
          <span className="text-secondary-text italic font-normal text-xl sm:text-2xl">
            ~ who&apos;s behind the terminal?
          </span>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">
          {/* Bio */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold italic text-primary mb-6">
              Hi! there, I&apos;m {portfolioConfig.name}
            </h3>

            <div className="space-y-5 text-secondary-text leading-relaxed">
              <p>
                {withEmphasis(portfolioConfig.longBio, [
                  '99.9% availability',
                  'SailPoint',
                  'Chargebee',
                  '33%',
                ])}
              </p>
              <p>
                {withEmphasis(portfolioConfig.description, [
                  'scalable cloud-based SaaS applications',
                  'customer-facing features',
                  'microservices',
                ])}
              </p>
            </div>

            {education.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-wide text-secondary-text mb-3">Education</p>
                <div className="space-y-3">
                  {education.map((ed) => (
                    <div key={ed.id} className="flex items-start gap-3">
                      <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-text text-sm">{ed.degree}</p>
                        <p className="text-sm text-secondary-text">{ed.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border-2 border-primary text-text font-semibold shadow-[0_10px_22px_-4px_rgba(47,128,255,0.45),0_20px_38px_-10px_rgba(47,128,255,0.28)] hover:bg-primary hover:text-white hover:shadow-[0_12px_26px_-4px_rgba(47,128,255,0.55),0_24px_44px_-10px_rgba(47,128,255,0.32)] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Follow My Journey
            </a>
          </div>

          {/* Interactive polaroid stack — click/tap or Enter/Space on any card behind the front
              one to bring it forward. Frame stays fixed light "paper" regardless of site theme,
              like a physical photo would. */}
          <div
            className="relative w-full lg:w-[min(720px,100%)] h-[380px] sm:h-[480px] lg:h-[620px] mx-auto lg:mx-0 overflow-hidden lg:overflow-visible"
            onMouseEnter={() => setStackHovered(true)}
            onMouseLeave={() => setStackHovered(false)}
          >
            {STACK_PHOTOS.map((photo) => {
              const rank = order.indexOf(photo.id);
              const isFront = rank === 0;
              const t = cardTransform(rank, stackHovered);

              return (
                <motion.div
                  key={photo.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Bring "${photo.caption}" photo to front`}
                  aria-current={isFront || undefined}
                  onClick={() => bringToFront(photo.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      bringToFront(photo.id);
                    }
                  }}
                  initial={false}
                  animate={{ x: t.x, y: t.y, rotate: t.rotate, zIndex: t.zIndex }}
                  transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.8 }}
                  className={`absolute inset-x-0 mx-auto top-[8%] sm:top-[6%] ${CARD_WIDTH} bg-[#f8f8f6] p-[18px] sm:p-[26px] pb-[14px] sm:pb-[18px] rounded-xl border border-black/5 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    isFront ? 'cursor-grab' : 'cursor-pointer'
                  }`}
                  style={{
                    boxShadow: isFront
                      ? '0 24px 48px rgba(15,23,42,0.2), 0 8px 18px rgba(15,23,42,0.1)'
                      : '0 20px 40px rgba(15,23,42,0.16), 0 6px 14px rgba(15,23,42,0.08)',
                  }}
                >
                  <div className="relative w-full aspect-[4/5] rounded-[3px] overflow-hidden pointer-events-none">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 380px, 60vw"
                      className="object-cover"
                    />
                  </div>
                  <AnimatePresence mode="wait">
                    {isFront && (
                      <motion.p
                        key={photo.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`text-center text-[#222] font-bold mt-3 sm:mt-4 ${CAPTION_CLASS}`}
                      >
                        {photo.caption}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
