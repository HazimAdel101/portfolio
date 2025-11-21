"use client";

import {
  HeroSection,
  PortfolioThumbnailsSection,
  AboutSection,
  ServicesSection,
  SkillsSection,
  ProjectsSection,
  TestimonialsSection,
  ContactSection,
  Footer,
} from "@/app/components/sections";
import { getEnabledSections } from "@/app/config/sections";

const SECTION_COMPONENTS = {
  hero: HeroSection,
  portfolioThumbnails: PortfolioThumbnailsSection,
  about: AboutSection,
  services: ServicesSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  testimonials: TestimonialsSection,
  contact: ContactSection,
  footer: Footer,
} as const;

export default function Home() {
  const enabledSections = getEnabledSections();

  return (
    <main className="w-full">
      {enabledSections.map((section) => {
        const SectionComponent = SECTION_COMPONENTS[section.id as keyof typeof SECTION_COMPONENTS];
        if (!SectionComponent) return null;
        
        return <SectionComponent key={section.id} />;
      })}
    </main>
  );
}

