"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import { SectionHeader } from "./SectionHeader";
import { ProfileImage } from "./ProfileImage";
import { SocialLinks } from "./SocialLinks";
import { SOCIAL_LINKS } from "@/app/lib/constants";
import { useAboutTranslations, usePersonalSkillsData } from "@/app/hooks";

export function AboutSection() {
  const translations = useAboutTranslations();
  const personalSkills = usePersonalSkillsData();

  return (
    <section
      id="about"
      className="py-20 bg-[var(--hero-section)] dark:bg-[var(--background)]"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          title={translations.title}
          titleHighlight={translations.titleHighlight}
          subtitle={translations.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <ProfileImage />

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-semibold text-[var(--text-title)] dark:text-white">
              {translations.heading}
            </h3>
            <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 leading-relaxed">
              {translations.description}
            </p>

            {/* Social Links */}
            <SocialLinks links={SOCIAL_LINKS} className="mt-4" />

            {/* Personal Skills */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4 text-[var(--text-title)] dark:text-white">
                {translations.personalSkills}
              </h4>
              <div className="flex flex-wrap gap-3">
                {personalSkills.map((skill) => (
                  <Badge key={skill.name} className="px-4 py-2 text-base">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full px-8 py-6 h-auto w-fit mt-4">
              {translations.downloadCV}
              <ButtonArrow color="#ffffff" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
