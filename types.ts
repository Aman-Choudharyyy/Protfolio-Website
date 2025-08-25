
import type React from 'react';

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
    university: string;
    degree: string;
    period: string;
    gpa: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
}
