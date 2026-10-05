import { Container } from '@/components/Container';
import { Section, SectionHeading } from '@/components/Section';
import { MarkerUnderline } from '@/components/MarkerUnderline';
import { Pill } from '@/components/ui/Pill';
import { experience } from '@/data/experience';
import { formatDate } from '@/lib/utils';
import { Globe } from 'lucide-react';

// Picks the 2 most representative achievements per role instead of dumping the full resume-length list.
const HIGHLIGHTS: Record<string, number[]> = {
  sailpoint: [2, 9],
  chargebee: [2, 4],
};

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading eyebrow="work">
          My{' '}
          <span className="relative inline-block">
            Experience
            <MarkerUnderline />
          </span>{' '}
          <span className="text-secondary-text italic font-normal text-xl sm:text-2xl">
            ~ things that shaped me
          </span>
        </SectionHeading>

        <div className="relative mt-10">
          {/* Vertical timeline line */}
          <div className="absolute left-[165px] sm:left-[193px] top-2 bottom-2 w-1 bg-green-500 rounded-full hidden sm:block" />

          <div className="space-y-14">
            {experience.map((exp) => {
              const isCurrent = exp.endDate === null;
              const highlights = (HIGHLIGHTS[exp.id] ?? []).map((i) => exp.achievements[i]).filter(Boolean);

              return (
                <div key={exp.id} className="grid grid-cols-1 sm:grid-cols-[168px_56px_1fr] gap-3 sm:gap-0">
                  {/* Left meta column */}
                  <div className="sm:text-right sm:pr-4">
                    <p className="text-sm text-secondary-text">
                      {formatDate(exp.startDate)} – {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </p>
                    <p className="font-bold text-text mt-1">{exp.company}</p>
                    {exp.companyLink && (
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex sm:justify-end items-center gap-1.5 text-secondary-text hover:text-green-600 transition-colors mt-2"
                        aria-label={`${exp.company} website`}
                      >
                        <Globe size={16} />
                      </a>
                    )}
                    {exp.location && <p className="text-sm text-secondary-text mt-2">{exp.location}</p>}
                    <p className="text-sm text-secondary-text">
                      {exp.type === 'full-time' ? 'Full-time' : 'Freelance'}
                    </p>
                    {isCurrent && (
                      <span
                        className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: '#ecfdf3', color: '#067647' }}
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                        </span>
                        Current
                      </span>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden sm:flex justify-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 mt-1.5 ring-2 ring-dark-bg" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-3">{exp.position}</h3>

                    <div className="space-y-3 text-secondary-text leading-relaxed">
                      <p>{exp.description}</p>
                      {highlights.map((achievement, idx) => (
                        <p key={idx}>{achievement}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.technologies.map((tech) => (
                        <Pill key={tech} color="green">
                          {tech}
                        </Pill>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
