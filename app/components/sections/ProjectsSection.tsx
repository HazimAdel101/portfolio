"use client";

import { Button } from "@/components/ui/button";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { useProjectsData, usePortfolioTranslations } from "@/app/hooks";

export function ProjectsSection() {
  const projects = useProjectsData();
  const translations = usePortfolioTranslations();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={translations.title}
          titleHighlight={translations.titleHighlight}
          subtitle={translations.subtitle}
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full px-8 py-6 h-auto">
            {translations.viewAll}
            <ButtonArrow color="#ffffff" />
          </Button>
        </div>
      </div>
    </section>
  );
}

