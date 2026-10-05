'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Generalized conceptual flow — deliberately not the real SailPoint architecture, just the
// shape of the pattern (event-driven, cached, cloud-deployed) described in the case study text.
const STEPS = [
  'Frontend',
  'API Layer',
  'Backend Services',
  'Event Bus / Queue',
  'Workers / Integrations',
  'PostgreSQL + Redis',
  'Cloud Infrastructure',
];

export function ArchitectureDiagram() {
  return (
    <div className="flex flex-col items-center py-4">
      {STEPS.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="px-5 py-2.5 rounded-xl border border-primary/30 bg-primary/5 text-sm font-semibold text-text whitespace-nowrap">
            {step}
          </div>
          {i < STEPS.length - 1 && <ArrowDown size={16} className="text-primary/50 my-1.5 shrink-0" />}
        </motion.div>
      ))}
    </div>
  );
}
