import { ElementType } from 'react';

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  thumbnail: string;
  category: string;
  role: string;
  timeline: string;
  heroHeadline: string;
  valueTags: string[]; 
  goal: string;
  outcome: string;
  background: string;
  insight: string;
  solutionStrategy: { title: string; desc: string }[]; 
  coreFeatures: { title: string; desc: string }[];
  screenshots: { 
    src: string; 
    label: string;
    title: string;
    desc: string;
    quote: string;
  }[]; 
  keyDecisions: { decision: string; alternatives: string; value: string }[];
  future: { title: string; desc: string }[];
  techStack: { name: string; category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  icon: ElementType;
  features: string[];
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
}