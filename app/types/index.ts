/**
 * Centralized type definitions for the application
 */

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  title: string;
  icon: string;
  description?: string;
  variant?: 'default' | 'featured';
}

export interface Testimonial {
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface SectionConfig {
  id: string;
  enabled: boolean;
  order: number;
}

export interface NavLink {
  href: string;
  key: string;
  title: string;
}

export interface PersonalSkill {
  name: string;
  category?: 'soft' | 'technical';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

