export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBDa0IsWg9kETsQwRV2BOn_tScdL1Xq8PbOTM8L1GHfDqn_gWmHi9bntG7gblOHzKVWtAB-UiXGlugVpBFt3pFQ5tavcF06G6n8gQt2y6a_PUmK79MLzPs2oAjF574uetXpKMIpsj4j7rHTOdJm0Uk7WgQcdL7k_P0G0liTDigjjFrdm-yt2_DA1uG0huQDejzcrT8SE348bAbJ-qQfnfCQmyOiZCMNiTvaCfjG_dOp784Ih8AyE9tQ';

export const ABOUT_IMAGE_URL =
  '/assets/aistudio/WhatsApp_Image_2026-11-21_at_14.26.13_27793495.jpeg';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'Data Analysis' | 'Web & UI' | 'Systems';
  year: string;
  featured: boolean;
  previewType: 'analytics' | 'portfolio' | 'system' | 'energy' | 'archive' | 'design';
  role: string;
  tools: string[];
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  chartBars?: number[];
}

export interface SkillDetail {
  name: string;
  category: string;
  level: string;
  description: string;
  tools: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  category: string;
  description: string;
}

export const METRICS = [
  { value: '3+', label: 'Years\nExperience' },
  { value: '5+', label: 'Projects\nCompleted' },
  { value: '10+', label: 'Awards &\nAchievements' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'data-analytics-dashboard',
    index: '01',
    title: 'Data Analytics Dashboard',
    subtitle: 'Interactive data visualization with modern UI.',
    category: 'Data Analysis',
    year: '2026',
    featured: true,
    previewType: 'analytics',
    role: 'Data Analyst & UI Designer',
    tools: ['Google Sheets', 'Looker Studio', 'React', 'Data Cleaning'],
    summary:
      'Designed an executive analytical workspace to monitor operational KPIs, monthly throughput, and sustainable energy consumption trends with clear visual hierarchy.',
    highlights: [
      'Structured raw CSV datasets into normalized KPI tables with automated validation formulas.',
      'Built comparative bar and trend views to highlight peak utilization periods and anomalies.',
      'Reduced weekly manual reporting preparation time by 45% through reusable templates.',
    ],
    metrics: [
      { label: 'Data Accuracy', value: '99.2%' },
      { label: 'KPI Tracked', value: '18' },
      { label: 'Time Saved', value: '45%' },
    ],
    chartBars: [40, 65, 50, 90, 60, 80],
  },
  {
    id: 'portfolio-website',
    index: '02',
    title: 'Portfolio Website',
    subtitle: 'Personal portfolio with modern design.',
    category: 'Web & UI',
    year: '2026',
    featured: true,
    previewType: 'portfolio',
    role: 'UI/UX Designer & Frontend Developer',
    tools: ['Tailwind CSS', 'React', 'TypeScript', 'Typography Systems'],
    summary:
      'A personal editorial portfolio combining dark brutalist Swiss grid discipline with high-contrast crimson accents, Anton display typography, and responsive interactions.',
    highlights: [
      'Crafted a cohesive 3-font typographic scale pairing Anton, Plus Jakarta Sans, and Caveat.',
      'Implemented interactive case-study inspection, filterable project archives, and printable CV export.',
      'Engineered accessible keyboard navigation, reduced-motion support, and responsive mobile drawers.',
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Sections', value: '6' },
      { label: 'Responsive Breakpoints', value: '4' },
    ],
  },
  {
    id: 'web-based-system',
    index: '03',
    title: 'Web-Based System',
    subtitle: 'Information system for document management.',
    category: 'Systems',
    year: '2026',
    featured: true,
    previewType: 'system',
    role: 'Systems Analyst & Administration Lead',
    tools: ['Google Workspace', 'Document Indexing', 'Workflow Design', 'Audit Logs'],
    summary:
      'Structured web-based document control and administrative vault system built to streamline organizational archiving, retrieval, and verification workflows.',
    highlights: [
      'Standardized naming conventions, version tags, and folder permissions across organizational units.',
      'Implemented verification audit logs ensuring every outgoing letter and proposal is traceable.',
      'Cut average document lookup time from 12 minutes to under 30 seconds.',
    ],
    metrics: [
      { label: 'Docs Indexed', value: '420+' },
      { label: 'Lookup Speed', value: '<30s' },
      { label: 'Audit Compliance', value: '100%' },
    ],
  },
  {
    id: 'sustainable-energy-tracker',
    index: '04',
    title: 'Sustainable Energy Study',
    subtitle: 'Exploratory analysis on renewable power adoption.',
    category: 'Data Analysis',
    year: '2026',
    featured: false,
    previewType: 'energy',
    role: 'Researcher & Data Visualization',
    tools: ['Spreadsheet Modeling', 'Canva Infographics', 'Data Storytelling'],
    summary:
      'Exploratory research brief examining regional renewable energy capacity, solar adoption barriers, and student-level sustainability initiatives at Institut Teknologi PLN.',
    highlights: [
      'Synthesized public energy transition indicators into visual comparison decks.',
      'Mapped clean energy literacy metrics for campus community outreach programs.',
    ],
    metrics: [
      { label: 'Datasets Analyzed', value: '6' },
      { label: 'Visual Slides', value: '24' },
      { label: 'Focus Area', value: 'Clean Tech' },
    ],
  },
  {
    id: 'scouting-event-admin',
    index: '05',
    title: 'Event Admin & Archive Kit',
    subtitle: 'Digital secretariat toolkit for scouting competitions.',
    category: 'Systems',
    year: '2025',
    featured: false,
    previewType: 'archive',
    role: 'Secretary & Administrative Coordinator',
    tools: ['Google Forms', 'Google Docs', 'Mail Merge', 'Canva'],
    summary:
      'End-to-end administrative toolkit covering participant registration pipelines, automated certificate generation, and competition scoring sheets.',
    highlights: [
      'Managed registration and scoring records for multi-school scouting competitions.',
      'Automated participant verification sheets and digital certificate distribution.',
    ],
    metrics: [
      { label: 'Participants', value: '250+' },
      { label: 'Certificates', value: '300+' },
      { label: 'Error Rate', value: '0%' },
    ],
  },
  {
    id: 'visual-brand-posters',
    index: '06',
    title: 'Editorial Poster Series',
    subtitle: 'Graphic design campaigns for campus & art competitions.',
    category: 'Web & UI',
    year: '2025',
    featured: false,
    previewType: 'design',
    role: 'Graphic Designer',
    tools: ['Canva', 'Typography', 'Grid Systems', 'Visual Identity'],
    summary:
      'Collection of high-contrast editorial posters, event banners, and social media visual identities created for school organizations and design competitions.',
    highlights: [
      'Applied bold typographic hierarchy and disciplined color contrast to competition briefs.',
      'Delivered print-ready and social-first asset suites under tight event deadlines.',
    ],
    metrics: [
      { label: 'Campaigns', value: '12+' },
      { label: 'Assets Delivered', value: '60+' },
      { label: 'Recognition', value: '10+ Awards' },
    ],
  },
];

export const EDUCATION = [
  {
    institution: 'Institut Teknologi PLN',
    program: 'S1 Sistem Informasi | 2026 – Sekarang',
    focus: 'Information Systems, Data Analysis & Sustainable Energy Technology',
  },
  {
    institution: 'MAN 2 Kota Kediri',
    program: 'Saintek | 2023 – 2026',
    focus: 'Science & Technology Track, Active in Scouting, Design & Arts',
  },
];

export const SKILLS: SkillDetail[] = [
  {
    name: 'Administrasi',
    category: 'Operations & Governance',
    level: 'Advanced',
    description:
      'Structured document management, official correspondence, meeting minutes, archival indexing, and secretariat coordination.',
    tools: ['Document Vaults', 'SOP Drafting', 'Archival Indexing'],
  },
  {
    name: 'Google Workspace',
    category: 'Productivity Suite',
    level: 'Advanced',
    description:
      'Building collaborative databases in Sheets, automated intake pipelines with Forms, and standardized Docs & Slides templates.',
    tools: ['Sheets Formulas', 'Docs', 'Drive Organization', 'Forms'],
  },
  {
    name: 'Canva',
    category: 'Visual & Editorial Design',
    level: 'Advanced',
    description:
      'Designing posters, presentation decks, social campaigns, and editorial visual systems with strong layout discipline.',
    tools: ['Editorial Posters', 'Slide Decks', 'Brand Kits'],
  },
  {
    name: 'Data Analysis',
    category: 'Analytics & Insights',
    level: 'Growing Focus',
    description:
      'Cleaning datasets, identifying trends, summarizing KPIs, and translating raw tables into clear visual narratives.',
    tools: ['Spreadsheet Modeling', 'KPI Dashboards', 'Data Storytelling'],
  },
  {
    name: 'Problem Solving',
    category: 'Systems Thinking',
    level: 'Core Strength',
    description:
      'Breaking ambiguous administrative or technical challenges into structured, testable action steps.',
    tools: ['Root Cause Mapping', 'Process Simplification'],
  },
  {
    name: 'Teamwork',
    category: 'Leadership & Collaboration',
    level: 'Core Strength',
    description:
      'Cross-functional collaboration honed through active student organizations, scouting leadership, and art/design teams.',
    tools: ['Event Coordination', 'Cross-Team Comms', 'Mentoring'],
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Plan',
    description: 'Menentukan tujuan dan merencanakan langkah yang tepat.',
    detail:
      'Define clear objectives, map stakeholder needs, and structure timelines before touching tools or datasets.',
  },
  {
    number: '02',
    title: 'Learn',
    description: 'Mempelajari dan mengembangkan pengetahuan.',
    detail:
      'Research domain context, study reference systems, and sharpen analytical or design techniques required for the task.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Menerapkan ilmu dalam proyek nyata.',
    detail:
      'Deliver structured systems, clean visual layouts, and reliable documentation with consistent attention to detail.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Terus belajar dan meningkatkan kualitas.',
    detail:
      'Gather feedback, audit outcomes against initial goals, and iterate for stronger clarity and impact.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    year: '2026',
    title: 'Information Systems Cohort — Institut Teknologi PLN',
    category: 'Academic',
    description:
      'Pursuing S1 Sistem Informasi with a strong curiosity for data analytics and sustainable energy ecosystems.',
  },
  {
    year: '2023–2026',
    title: '10+ Competitions in Scouting, Graphic Design & Visual Arts',
    category: 'Competitions',
    description:
      'Actively competed and earned recognitions across scouting leadership challenges, poster design, and creative arts.',
  },
  {
    year: '2024–2025',
    title: 'Organizational Secretariat & Document Systems Lead',
    category: 'Leadership',
    description:
      'Led administrative workflows, digital document archiving, and visual communication assets for student organizations.',
  },
];

export const CONTACT_INFO = {
  email: 'fakhrurbelajar999@gmail.com',
  phoneDisplay: '+62 878 7486 6991',
  whatsappUrl: 'https://wa.me/6287874866991',
  linkedinLabel: 'linkedin.com/in/moch-fakhruddin-ar-rozi-b32222416',
  linkedinUrl: 'https://linkedin.com/in/moch-fakhruddin-ar-rozi-b32222416',
  githubLabel: 'github.com/parusirozi',
  githubUrl: 'https://github.com/parusirozi',
};
