/**
 * Navigation configuration
 * Centralized navigation links for better maintainability
 */

import type { NavLink } from '@/app/types';

export const NAVIGATION_LINKS: Omit<NavLink, 'title'>[] = [
  { href: '/', key: 'home' },
  { href: '#projects', key: 'projects' },
  { href: '#services', key: 'services' },
  { href: '#about', key: 'about' },
  { href: '#contact', key: 'contact' },
] as const;

