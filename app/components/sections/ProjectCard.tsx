"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ButtonArrow } from "@/app/components/ButtonArrow";
import { useTranslations } from 'next-intl';

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({ title, category, description, technologies }: ProjectCardProps) {
  const t = useTranslations();

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center bg-[var(--card)] dark:bg-[var(--card)] rounded-2xl p-8 border border-[var(--stroke)]">
      <div className="relative h-64 rounded-xl overflow-hidden bg-[var(--gray-100)] dark:bg-[var(--card)]">
        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-800 dark:to-purple-600 flex items-center justify-center">
          <span className="text-6xl">🖥️</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Badge className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none w-fit">
          {category}
        </Badge>
        <h3 className="text-3xl font-semibold text-[var(--text-title)] dark:text-white">
          {title}
        </h3>
        <p className="text-lg text-[var(--text-subtitle)] dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 my-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="bg-[var(--chips-bg)] text-[var(--chips-text)] border-none"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <Button className="bg-[var(--primary-button)] text-[var(--text-button-primary)] hover:bg-[var(--primary-button)]/90 rounded-full">
            {t('portfolio.viewProject')}
            <ButtonArrow color="#ffffff" />
          </Button>
          <Button variant="outline" className="border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white rounded-full">
            {t('portfolio.liveDemo')}
            <ButtonArrow color="#7e22ce" />
          </Button>
        </div>
      </div>
    </div>
  );
}

