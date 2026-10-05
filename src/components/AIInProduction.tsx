import { Container } from '@/components/Container';
import { Section, SectionHeading } from '@/components/Section';
import { MarkerUnderline } from '@/components/MarkerUnderline';
import { Bot, Search, Lightbulb, Workflow, MessageSquareText, Brain } from 'lucide-react';

// One capability among many, not the whole identity — kept small and factual, sourced from the
// same OpenAI API achievement already in experience.ts (see the SailPoint case study above).
const AI_CAPABILITIES = [
  { label: 'OpenAI API', Icon: Bot },
  { label: 'Contextual Search', Icon: Search },
  { label: 'Intelligent Recommendations', Icon: Lightbulb },
  { label: 'Workflow Automation', Icon: Workflow },
  { label: 'Prompt Engineering', Icon: MessageSquareText },
  { label: 'LLM Integration', Icon: Brain },
];

export function AIInProduction() {
  return (
    <Section className="bg-light-bg/5">
      <Container>
        <SectionHeading eyebrow="ai">
          AI in{' '}
          <span className="relative inline-block">
            Production
            <MarkerUnderline />
          </span>
        </SectionHeading>
        <p className="text-secondary-text max-w-2xl mb-8">
          One capability inside a broader full-stack and backend engineering background, not the whole story.
        </p>
        <div className="flex flex-wrap gap-3">
          {AI_CAPABILITIES.map(({ label, Icon }) => (
            <span key={label} className="tech-pill inline-flex items-center gap-2 text-sm font-medium">
              <Icon size={16} />
              {label}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
