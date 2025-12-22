import { ElementType } from 'react';

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  thumbnail: string;
  category: string;
  role: string;
  timeline: string;
  publishDate: string,
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

export interface Insight {
  id: string;
  title: string;
  category: string; // e.g., "需求釐清", "系統規劃"
  painPoint: string; // New field: "解決：需求發散"
  summary: string;
  targetAudience: string; // e.g., "第一次找工程師的創業者"
  publishDate: string;
  readTime: string;
  suitability: {
    for: string[]; // Who should read this / hire me
    notFor: string[]; // Who this is not for
  };
  content: {
    intro: string; // The "Real scenario" opening
    problem: string; // The confusion/pain point
    analysis: string; // How I organize/think
    outcome: string; // The result
    principle: string; // Abstracted principle
    trustFactor: string; // Now used as "Methodology Reference"
  };
}