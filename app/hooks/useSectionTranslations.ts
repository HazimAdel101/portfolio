/**
 * Custom hook for section-specific translations
 * Provides type-safe translation access for sections
 */

import { useTranslations } from 'next-intl';

export function useSectionTranslations(section: string) {
  const t = useTranslations(section);

  return {
    t,
    title: (key: string = 'title') => t(key),
    titleHighlight: (key: string = 'titleHighlight') => t(key),
    subtitle: (key: string = 'subtitle') => t(key),
  };
}

export function useAboutTranslations() {
  const t = useTranslations('about');

  return {
    title: t('title'),
    titleHighlight: t('titleHighlight'),
    subtitle: t('subtitle'),
    heading: t('heading'),
    description: t('description'),
    personalSkills: t('personalSkills'),
    downloadCV: t('downloadCV'),
  };
}

export function useServicesTranslations() {
  const t = useTranslations('services');

  return {
    title: t('title'),
    titleHighlight: t('titleHighlight'),
    subtitle: t('subtitle'),
  };
}

export function useSkillsTranslations() {
  const t = useTranslations('skills');

  return {
    title: t('title'),
    subtitle: t('subtitle'),
    otherSkills: t('otherSkills'),
    toolsWorkflow: t('toolsWorkflow'),
    technologies: t('technologies'),
  };
}

export function usePortfolioTranslations() {
  const t = useTranslations('portfolio');

  return {
    title: t('title'),
    titleHighlight: t('titleHighlight'),
    subtitle: t('subtitle'),
    viewAll: t('viewAll'),
    viewProject: t('viewProject'),
    liveDemo: t('liveDemo'),
  };
}

export function useTestimonialsTranslations() {
  const t = useTranslations('testimonials');

  return {
    title: t('title'),
    titleHighlight: t('titleHighlight'),
    subtitle: t('subtitle'),
  };
}

export function useContactTranslations() {
  const t = useTranslations('contact');

  return {
    title: t('title'),
    subtitle: t('subtitle'),
  };
}

