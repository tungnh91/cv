export type ProfileLinkIcon = 'profile' | 'doc' | 'code';

export type ProfileLink = {
  title: string;
  link: string;
  icon: ProfileLinkIcon;
};

export type ExperienceVisualization =
  | 'zillow'
  | 'redoak'
  | 'rivian'
  | 'facebook'
  | 'mercedes'
  | 'apple'
  | 'noblehouse';

export type ExperienceItem = {
  company: string;
  role: string;
  years: string;
  summary: string;
  tags: readonly string[];
  visualization: ExperienceVisualization;
};

export const profileLinks: readonly ProfileLink[] = [
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/timothytungnguyen',
    icon: 'profile'
  },
  {
    title: 'Résumé',
    link: 'https://docs.google.com/document/d/1uAT9FdEBqnd4Eil6w2MVxv2NrF6hjOeYRSZEO6y6Tw0/edit?usp=sharing',
    icon: 'doc'
  }
];

export const experienceRows: readonly ExperienceItem[] = [
  {
    company: 'Zillow',
    role: 'Principal SWE',
    years: '2024—now',
    summary: 'Leading AI tooling, observability, and backend modernization.',
    tags: ['AI/ML', 'Observability', 'Data Pipelines', 'Mentorship'],
    visualization: 'zillow'
  },
  {
    company: 'Red Oak AI',
    role: 'Cofounder & CTO',
    years: '2024',
    summary:
      'Built a council-of-models system to cross-check facts and reduce hallucinations.',
    tags: ['Multi-Agent', 'LLM', 'Adversarial AI', 'Founder'],
    visualization: 'redoak'
  },
  {
    company: 'Rivian',
    role: 'Staff SWE',
    years: '2020—2024',
    summary:
      'Led ML infra and shipped a vehicle guide that cut support lookup from ~10 min to 5 sec.',
    tags: ['RAG', 'ML Infra', 'Kafka', 'Spark', 'AWS'],
    visualization: 'rivian'
  },
  {
    company: 'Facebook',
    role: 'Sr. SWE',
    years: '2018—2020',
    summary:
      'Built data-center systems and ML signals for component longevity at scale.',
    tags: ['ML', 'Data Center', 'ETL', 'Predictive Infra'],
    visualization: 'facebook'
  },
  {
    company: 'Mercedes-Benz R&D',
    role: 'Software Engineer',
    years: '2017—2018',
    summary:
      'Shipped NLP voice backends for production cars and improved response latency.',
    tags: ['NLP', 'Voice UI', 'Go', 'Node.js', 'GCP'],
    visualization: 'mercedes'
  },
  {
    company: 'Apple',
    role: 'Technical Staff',
    years: '2014—2016',
    summary:
      'Worked across Apple platforms, kernel analysis, hardware diagnosis, and repair.',
    tags: ['iOS', 'macOS', 'Kernel', 'Hardware', 'Firmware'],
    visualization: 'apple'
  },
  {
    company: 'Noble House',
    role: 'SEO Intern',
    years: '2014—2015',
    summary:
      'Improved search performance through testing, analytics, and CTR optimization.',
    tags: ['SEO', 'A/B Testing', 'Analytics', 'CTR Optimization'],
    visualization: 'noblehouse'
  }
];
