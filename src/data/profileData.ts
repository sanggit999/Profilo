import { ProfileInfo, AboutInfo, CompanyExperience, PersonalProject, SkillCategory, ContactInfo } from '@/types/profile';

export const profileInfoData: ProfileInfo = {
  fullName: 'Nguyen Van Sang',
  roleTitle: 'Fullstack Developer',
  tagline: 'Build. Ship. Grow.',
  valueProposition: 'Building high-performance, secure, and scalable Web & Mobile applications with React.js, React Native, and Python/Django REST Framework.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  resumeUrl: '#',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/sanggit999', label: 'github.com/sanggit999' },
    { platform: 'Email', url: 'mailto:sangnguyen1892k3@gmail.com', label: 'sangnguyen1892k3@gmail.com' },
  ],
};

export const aboutData: AboutInfo = {
  shortIntro: 'Graduated from FPT Polytechnic (2022 - 2025) in Computer Programming. Currently a Fullstack Developer aiming to become a specialized senior engineer, building high-quality products with React.js, React Native, and Python/Django REST Framework. Proactively leveraging AI tools to enhance software development efficiency while continuously optimizing performance, security, and user experience.',
  coreStrengths: [
    {
      title: 'Frontend & Mobile Engineering',
      description: 'Proficient in JavaScript (ES6+), TypeScript, React.js, React Native, HTML5, CSS3, and Tailwind CSS to craft responsive web & mobile user interfaces.',
      iconName: 'Layout',
    },
    {
      title: 'Backend & API Architecture',
      description: 'Specializing in Python, Django, and Django REST Framework (DRF) to design robust RESTful APIs, JWT authentication, and database schemas.',
      iconName: 'Layers',
    },
    {
      title: 'Database, Caching & DevOps',
      description: 'Hands-on experience with PostgreSQL, Redis, Celery, Nginx, Docker, Docker Compose, Git, GitHub, and GitHub Actions CI/CD workflows.',
      iconName: 'Zap',
    },
    {
      title: 'Problem Solving & AI Integration',
      description: 'Strong analytical mindset, teamwork, communication, time management, adaptability, and active application of AI tools to accelerate software delivery.',
      iconName: 'ShieldCheck',
    },
  ],
  techFocus: [
    'JavaScript (ES6+) & TypeScript',
    'React.js & React Native',
    'Python, Django & Django REST Framework (DRF)',
    'PostgreSQL, Redis, Celery & Nginx',
    'Docker, Docker Compose & GitHub Actions',
  ],
  currentGoals: [
    'Becoming a specialized Senior Fullstack Developer',
    'Building high-quality products with React, React Native, and Django',
    'Applying AI to continuously enhance development efficiency, performance, security, and UX',
  ],
};

export const companyExperiencesData: CompanyExperience[] = [
  {
    id: 'exp-trunganh',
    companyName: 'Trung Anh Group',
    jobTitle: 'Fullstack Developer',
    timeRange: '03/2025 — 07/2026',
    isCurrentRole: false,
    responsibilities: [
      'Developed & maintained enterprise software products (Web Systems & Cross-Platform Mobile Apps) following decoupled Frontend - Backend architecture.',
      'Designed PostgreSQL database schemas, built RESTful APIs with Python Django REST Framework (DRF), and implemented JWT Role-Based Access Control (RBAC).',
      'Collaborated with BAs, UI/UX Designers, and QAs to analyze business requirements, test, optimize performance, and deploy applications.',
      'Standardized development environments across Dev and Prod using Docker, Docker Compose, PostgreSQL, and Redis Caching.',
    ],
    companyProducts: [
      {
        name: 'HRM System',
        type: 'Web Platform',
        timeRange: '04/2025 — 07/2026',
        description: 'Comprehensive HR management platform built with decoupled React.js Frontend and Python DRF Backend.',
        features: [
          'Real-time HR analytics dashboard',
          'Employee profiles, department & position management',
          'Automated timekeeping & leave request approvals',
          'JWT authentication & Role-Based Access Control (RBAC)',
        ],
        techStack: ['React.js', 'Tailwind CSS', 'Python', 'Django DRF', 'PostgreSQL', 'Redis', 'Docker'],
      },
      {
        name: 'BeautyCare App',
        type: 'Mobile App',
        timeRange: '04/2025 — 07/2026',
        description: 'Cross-platform React Native mobile app integrated with Python DRF backend, real-time push notifications, dynamic feature flags via Firebase Remote Config, and published directly to App Store & Google Play.',
        features: [
          'Customer profiles, appointment booking & service management',
          'GPS location-based employee timekeeping',
          'Real-time push notifications powered by OneSignal',
          'Dynamic app configuration & feature flags via Firebase Remote Config',
          'Multi-language localization (Vietnamese / English)',
          'App building, code signing & deployment via App Store Connect (TestFlight) & Google Play',
        ],
        techStack: ['React Native', 'Python', 'Django DRF', 'PostgreSQL', 'Redis', 'Firebase Remote Config', 'OneSignal', 'App Store Connect'],
      },
    ],
    impact: [
      'Successfully published the BeautyCare mobile application to Google Play & Apple App Store Connect.',
      'Automated corporate HR workflows and optimized RESTful API query performance.',
    ],
    techStack: ['React.js', 'React Native', 'Python', 'Django DRF', 'PostgreSQL', 'Redis', 'Docker', 'Firebase Remote Config', 'OneSignal', 'App Store Connect'],
  },
];

export const personalProjectsData: PersonalProject[] = [
  {
    id: 'proj-snapspot',
    title: 'SnapSpot — Photo Location Sharing Platform',
    description: 'Full-stack cross-platform mobile application featuring a Flutter client designed with Clear Architecture, backed by Django REST Framework (DRF) APIs, PostgreSQL, Redis caching, and Nginx reverse proxy.',
    problemSolved: 'Enforces strict layer separation (Domain, Data, Presentation) to optimize geospatial location feeds and high-concurrency API performance.',
    techStack: ['Flutter (Clear Architecture)', 'Django DRF', 'PostgreSQL', 'Redis', 'Nginx', 'Dart'],
    githubUrl: 'https://github.com/sanggit999/snapspot',
    category: 'Mobile',
    featured: true,
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    categoryName: 'Frontend & Mobile',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Flutter' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    categoryName: 'Backend & Databases',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'DRF' },
      { name: 'RESTful API' },
      { name: 'PostgreSQL' },
      { name: 'Redis' },
      { name: 'Celery' },
      { name: 'JWT' },
      { name: 'API Security' },
    ],
  },
  {
    categoryName: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker' },
      { name: 'Docker Compose' },
      { name: 'Nginx' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitHub Actions' },
    ],
  },
  {
    categoryName: 'Cloud & Mobile Services',
    skills: [
      { name: 'Firebase Remote Config' },
      { name: 'OneSignal' },
      { name: 'Google Play Console' },
      { name: 'App Store Connect' },
    ],
  },
];

export const contactInfoData: ContactInfo = {
  email: 'sangnguyen1892k3@gmail.com',
  github: 'https://github.com/sanggit999',
  linkedin: 'https://github.com/sanggit999',
  location: 'Hanoi, Vietnam',
  availability: 'Fullstack Developer at Trung Anh Group',
};
