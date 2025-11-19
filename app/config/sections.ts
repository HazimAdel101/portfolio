/**
 * Section configuration for better controllability
 * Enable/disable and reorder sections from here
 */

import type { SectionConfig } from '@/app/types';

export const SECTION_CONFIG: Record<string, SectionConfig> = {
  hero: {
    id: 'hero',
    enabled: true,
    order: 1,
  },
  portfolioThumbnails: {
    id: 'portfolioThumbnails',
    enabled: true,
    order: 2,
  },
  about: {
    id: 'about',
    enabled: true,
    order: 3,
  },
  services: {
    id: 'services',
    enabled: true,
    order: 4,
  },
  skills: {
    id: 'skills',
    enabled: true,
    order: 5,
  },
  projects: {
    id: 'projects',
    enabled: true,
    order: 6,
  },
  testimonials: {
    id: 'testimonials',
    enabled: true,
    order: 7,
  },
  contact: {
    id: 'contact',
    enabled: true,
    order: 8,
  },
  footer: {
    id: 'footer',
    enabled: true,
    order: 9,
  },
} as const;

/**
 * Get enabled sections sorted by order
 */
export function getEnabledSections(): SectionConfig[] {
  return Object.values(SECTION_CONFIG)
    .filter((section) => section.enabled)
    .sort((a, b) => a.order - b.order);
}

/**
 * Check if a section is enabled
 */
export function isSectionEnabled(sectionId: string): boolean {
  return SECTION_CONFIG[sectionId]?.enabled ?? false;
}

