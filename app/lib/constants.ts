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
  { name: "LinkedIn", url: "https://www.linkedin.com/in/hazim-alsaqqaf/" },
  { name: "GitHub", url: "https://github.com/HazimAdel101" },
  { name: "X", url: "https://x.com/HazimAlsaqqaf" },
  { name: "Instagram", url: "https://www.instagram.com/hazim_alsaqqaf" },
] as const;

export const CONTACT_INFO = {
  email: "hello@coder4u.com",
  phone: "+967 780 172 130",
  location: "Sana'a, Yemen",
} as const;

export const QUICK_LINKS = [
  { href: "#hero", key: "home" },
  { href: "#services", key: "services" },
  { href: "#projects", key: "portfolio" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
] as const;

