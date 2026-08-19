import {
  Hero,
  ImpactStrip,
  CaseStudies,
  Experience,
  TechStack,
  Projects,
  AIInProduction,
  HowIEngineer,
  About,
  Contact,
} from '@/components'

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <About />
      <CaseStudies />
      <Experience />
      <TechStack />
      <Projects />
      <AIInProduction />
      <HowIEngineer />
      <Contact />
    </>
  )
}
