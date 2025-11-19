/**
 * Custom hook for managing section data
 * Centralizes data fetching logic for sections
 */

import { useTranslations } from 'next-intl';
import type { Project, Service, Testimonial, Stat, PersonalSkill, SkillCategory } from '@/app/types';

export function useHeroData() {
  const t = useTranslations();

  const stats: Stat[] = [
    { value: `2+ ${t('hero.stats.experience')}`, label: t('hero.stats.experienceLabel') },
    { value: '3+', label: t('hero.stats.projects') },
    { value: '3+', label: t('hero.stats.clients') },
  ];

  return {
    greeting: t('hero.greeting'),
    title: t('hero.title'),
    titleHighlight: t('hero.titleHighlight'),
    titleEnd: t('hero.titleEnd'),
    ctaPrimary: t('hero.ctaPrimary'),
    ctaSecondary: t('hero.ctaSecondary'),
    stats,
  };
}

export function useProjectsData(): Project[] {
  const t = useTranslations();

  return [
    {
      title: t('projects.mountainEscapade.title'),
      category: t('portfolio.webDesign'),
      description: t('projects.mountainEscapade.description'),
      technologies: t.raw('projects.mountainEscapade.tech') as string[],
    },
    {
      title: t('projects.ecommerce.title'),
      category: t('portfolio.webApp'),
      description: t('projects.ecommerce.description'),
      technologies: t.raw('projects.ecommerce.tech') as string[],
    },
    {
      title: t('projects.portfolio.title'),
      category: t('portfolio.webDesign'),
      description: t('projects.portfolio.description'),
      technologies: t.raw('projects.portfolio.tech') as string[],
    },
  ];
}

export function useServicesData(): Service[] {
  const t = useTranslations();

  return [
    {
      title: t('services.webDevelopment'),
      icon: '💻',
      description: t('services.webDevelopmentDesc'),
      variant: 'featured',
    },
    {
      title: t('services.responsiveDesign'),
      icon: '📱',
      description: t('services.serviceDesc'),
    },
    {
      title: t('services.uiUxDesign'),
      icon: '🎨',
      description: t('services.serviceDesc'),
    },
    {
      title: t('services.webApplication'),
      icon: '⚡',
      description: t('services.serviceDesc'),
    },
    {
      title: t('services.ecommerce'),
      icon: '🛒',
      description: t('services.serviceDesc'),
    },
  ];
}

export function useTestimonialsData(): Testimonial[] {
  const t = useTranslations();

  return [
    {
      name: t('testimonialsList.sara.name'),
      role: t('testimonialsList.sara.role'),
      review: t('testimonialsList.sara.review'),
      rating: 5,
    },
    {
      name: t('testimonialsList.alex.name'),
      role: t('testimonialsList.alex.role'),
      review: t('testimonialsList.alex.review'),
      rating: 5,
    },
  ];
}

export function useSkillsData(): SkillCategory[] {
  const t = useTranslations();

  return [
    {
      title: t('skills.otherSkills'),
      skills: [
        t('skillsList.teamwork'),
        t('skillsList.creativity'),
        t('skillsList.problemSolving'),
        t('skillsList.adaptability'),
      ],
    },
    {
      title: t('skills.toolsWorkflow'),
      skills: [
        t('toolsList.figma'),
        t('toolsList.vscode'),
        t('toolsList.git'),
        t('toolsList.jira'),
      ],
    },
  ];
}

export function usePersonalSkillsData(): PersonalSkill[] {
  const t = useTranslations();

  return [
    { name: t('skillsList.teamwork'), category: 'soft' },
    { name: t('skillsList.creativity'), category: 'soft' },
    { name: t('skillsList.problemSolving'), category: 'soft' },
    { name: t('skillsList.adaptability'), category: 'soft' },
  ];
}

