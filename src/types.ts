export type ProjectCategory = 'All' | 'Full-Stack' | 'Frontend' | 'Backend & Cloud' | 'AI & Tools';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend & Cloud' | 'AI & Tools';
  description: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
  };
  metrics: ProjectMetric[];
  accentColor: string; // e.g. 'blue', 'yellow', 'emerald', 'purple', 'rose'
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. 'Advanced', 'Proficient', 'Experienced'
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  color: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-Time' | 'Contract' | 'Education' | 'Milestone';
  description: string;
  achievements: string[];
  skills: string[];
  current?: boolean;
}

export interface ProfileInfo {
  name: string;
  role: string;
  heroHeadline: string;
  heroSubtitle: string;
  bioShort: string;
  bioLong: string[];
  location: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  stats: {
    yearsExp: string;
    completedProjects: string;
    satisfactionRate: string;
    codeCommits: string;
  };
}
