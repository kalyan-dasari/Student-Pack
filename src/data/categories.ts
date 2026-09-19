import { OfferCategory } from '../types';

export interface CategoryMeta {
  id: OfferCategory | 'All';
  label: string;
  iconName: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'All',
    label: 'All Offers',
    iconName: 'LayoutGrid',
    description: 'Every verified tool in the GitHub Student Developer Pack',
  },
  {
    id: 'Cloud',
    label: 'Cloud',
    iconName: 'Cloud',
    description: 'Cloud hosting, compute instances, virtual machines, and PaaS',
  },
  {
    id: 'Developer Tools',
    label: 'Developer Tools',
    iconName: 'Wrench',
    description: 'IDEs, git clients, code completion, and local environment enhancers',
  },
  {
    id: 'AI & Machine Learning',
    label: 'AI & Machine Learning',
    iconName: 'Sparkles',
    description: 'Collaborative notebooks, AI code tools, and machine learning infrastructure',
  },
  {
    id: 'Learning',
    label: 'Learning',
    iconName: 'GraduationCap',
    description: 'Interactive coding courses, certifications, and technical tutorials',
  },
  {
    id: 'Infrastructure & APIs',
    label: 'Infrastructure & APIs',
    iconName: 'Server',
    description: 'Databases, Backend-as-a-Service, auth engines, and messaging APIs',
  },
  {
    id: 'Security & Analytics',
    label: 'Security & Analytics',
    iconName: 'ShieldCheck',
    description: 'Error tracking, secrets management, testing, and privacy analytics',
  },
  {
    id: 'Design',
    label: 'Design',
    iconName: 'Palette',
    description: 'Icons, illustrations, drag-and-drop web design, and presentations',
  },
  {
    id: 'Productivity',
    label: 'Productivity',
    iconName: 'CheckCircle2',
    description: 'Note taking, password management, team coordination, and organizers',
  },
  {
    id: 'Domains',
    label: 'Domains',
    iconName: 'Globe',
    description: 'Free top-level domains (.me, .tech, .live) with complimentary SSL',
  },
  {
    id: 'Mobile',
    label: 'Mobile',
    iconName: 'Smartphone',
    description: 'Cross-platform app development tools and mobile testing suites',
  },
  {
    id: 'IoT',
    label: 'IoT',
    iconName: 'Cpu',
    description: 'Embedded software and hardware prototyping tools',
  },
  {
    id: 'Marketing',
    label: 'Marketing',
    iconName: 'Megaphone',
    description: 'Email newsletters, web analytics, and audience growth tools',
  },
  {
    id: 'Personal Portfolio',
    label: 'Personal Portfolio',
    iconName: 'UserCheck',
    description: 'Tools specifically suited for publishing resumes and developer portfolios',
  },
  {
    id: 'Virtual Events',
    label: 'Virtual Events',
    iconName: 'Video',
    description: 'Community hackathon hosting and virtual developer gathering tools',
  },
];
