import { Container } from '@/components/Container';
import { Section, SectionHeading } from '@/components/Section';
import { MarkerUnderline } from '@/components/MarkerUnderline';
import { Card } from '@/components/ui/Card';
import { Target, LineChart, GitBranch, Users } from 'lucide-react';

const PRINCIPLES = [
  {
    title: 'Design for production',
    body: 'I think about scalability, reliability, observability, and maintainability before deployment.',
    Icon: Target,
  },
  {
    title: 'Optimize with evidence',
    body: 'Profile APIs, databases, caching behavior, and production workloads before optimizing.',
    Icon: LineChart,
  },
  {
    title: 'Own the full lifecycle',
    body: 'Technical design → implementation → testing → deployment → production support.',
    Icon: GitBranch,
  },
  {
    title: 'Build with product context',
    body: 'Engineering decisions should solve user and business problems, not merely introduce new technology.',
    Icon: Users,
  },
];

export function HowIEngineer() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="approach">
          How I{' '}
          <span className="relative inline-block">
            Engineer
            <MarkerUnderline />
          </span>
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {PRINCIPLES.map(({ title, body, Icon }) => (
            <Card key={title} className="p-6">
              <Icon size={22} className="text-primary mb-3" />
              <h3 className="font-bold text-text mb-1.5">{title}</h3>
              <p className="text-sm text-secondary-text leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
