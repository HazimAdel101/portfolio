/**
 * Application-wide constants
 * Centralized location for all static data and configuration
 */

import type { SocialLink } from '@/app/types';

export const TECHNOLOGIES = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "SQL",
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: "LinkedIn", url: "#" },
  { name: "GitHub", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Dribbble", url: "#" },
] as const;

export const CONTACT_INFO = {
  email: "contact@example.com",
  phone: "+1 234 567 890",
  location: "Your City, Country",
} as const;

export const QUICK_LINKS = [
  { href: "#hero", key: "home" },
  { href: "#services", key: "services" },
  { href: "#projects", key: "portfolio" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
] as const;

