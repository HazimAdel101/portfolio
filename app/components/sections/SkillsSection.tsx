"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { TECHNOLOGIES } from "@/app/lib/constants";
import { useSkillsData, useSkillsTranslations } from "@/app/hooks";

export function SkillsSection() {
  const skillCategories = useSkillsData();
  const translations = useSkillsTranslations();

  return (
    <section id="skills" className="py-20 bg-[var(--hero-section)] dark:bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={translations.title}
          subtitle={translations.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none px-4 py-2 text-base"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[var(--text-title)] dark:text-white">
            {translations.technologies}
          </h3>
          <div className="flex flex-wrap gap-3">
            {TECHNOLOGIES.map((tech) => (
              <Badge
                key={tech}
                className="bg-[var(--card)] dark:bg-[var(--card)] text-[var(--text-title)] dark:text-white border border-[var(--stroke)] px-4 py-2 text-base"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

