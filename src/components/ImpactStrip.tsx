'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '@/components/Container';
import { YEARS_OF_EXPERIENCE } from '@/lib/constants';

interface ImpactMetric {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  detail: string;
}

// 4 metrics, all quoted directly from experience.ts achievements — not every number on the
// résumé, just the strongest, most scannable ones (per spec: "don't overwhelm the interface").
const METRICS: ImpactMetric[] = [
  {
    value: YEARS_OF_EXPERIENCE,
    suffix: '+ Years',
    label: 'Production Engineering',
    detail: 'Shipping production SaaS systems across full-stack, backend, and cloud engineering since 2019.',
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Application Availability',
    detail: 'Maintained across distributed cloud environments at both SailPoint and Chargebee.',
  },
  {
    value: 48,
    suffix: '% ↓',
    label: 'Manual Effort Reduced',
    detail:
      'By integrating OpenAI APIs for contextual search, intelligent recommendations, and workflow automation at SailPoint.',
  },
  {
    value: 42,
    suffix: '% ↑',
    label: 'Provisioning Throughput',
    detail: 'Increased by engineering asynchronous, event-driven services with Kafka, Redis, and AWS SQS.',
  },
];

function CountUpValue({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 900;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(value * progress);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return <span ref={ref}>{display.toFixed(decimals)}</span>;
}

export function ImpactStrip() {
  return (
    <section className="py-10 sm:py-12 border-y border-border bg-white/40 dark:bg-dark-bg-light/30">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => (
            <div key={metric.label} className="group relative text-center px-2">
              <p className="font-heading text-3xl sm:text-4xl font-black text-primary tabular-nums">
                <CountUpValue value={metric.value} decimals={metric.decimals} />
                {metric.suffix}
              </p>
              <p className="text-sm font-semibold text-text mt-1">{metric.label}</p>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 max-w-[80vw] p-3 rounded-xl bg-dark-bg text-text text-xs leading-relaxed border border-border shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all z-20">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
