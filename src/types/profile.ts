export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email' | 'Twitter';
  url: string;
  label: string;
}

export interface ProfileInfo {
  fullName: string;
  roleTitle: string;
  tagline: string;
  valueProposition: string;
  avatarUrl: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface CoreStrength {
  title: string;
  description: string;
  iconName: string;
}

export interface AboutInfo {
  shortIntro: string;
  coreStrengths: CoreStrength[];
  techFocus: string[];
  currentGoals: string[];
}

export interface CompanyProduct {
  name: string;
  type: string;
  timeRange?: string;
  description: string;
  features: string[];
  techStack: string[];
}

export interface CompanyExperience {
  id: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  timeRange: string;
  isCurrentRole?: boolean;
  responsibilities: string[];
  companyProducts?: CompanyProduct[];
  impact: string[];
  techStack: string[];
}

export interface PersonalProject {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string;
  category: 'Fullstack' | 'Frontend' | 'Mobile' | 'Tools';
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: SkillItem[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
}
