export type OfferCategory =
  | 'Cloud'
  | 'Developer Tools'
  | 'AI & Machine Learning'
  | 'Learning'
  | 'Infrastructure & APIs'
  | 'Security & Analytics'
  | 'Design'
  | 'Productivity'
  | 'Domains'
  | 'Mobile'
  | 'IoT'
  | 'Marketing'
  | 'Personal Portfolio'
  | 'Virtual Events';



export interface StudentPackOffer {
  id: string; // URL slug e.g. "mongodb"
  name: string;
  category: OfferCategory;
  description: string; // One-line summary
  benefit: string; // e.g. "$50 MongoDB Atlas credits + MongoDB Compass + Free Certification"
  duration: string; // e.g. "While enrolled as a student" or "1 year"
  eligibility: string; // e.g. "Verified GitHub Student Developer Pack members (13+)"
  officialUrl: string;
  githubOfferUrl: string;
  whatItDoes: string;
  whyStudentsShouldCare: string;
  whatYouCanBuild: string[];
  exampleUseCases: string[];
  howToClaim: string[];
  requirements: string[];
  limitations: string[];
  relatedOffers: string[]; // ids of offers to pair with
  lastVerified: string;
  sourceUrls: string[];

  // Student guidance flags
  tags?: string[];
  recommendedAudience?: string; // e.g. "Best for: Full-stack applications"
  requiresCreditCard: boolean;
  requiresGithubAuthFirst: boolean;
  isTimeSensitive?: boolean;
  expirationNote?: string;
  bestForBeginners?: boolean;
  bestForBuilding?: boolean;
  bestForLearning?: boolean;
  bestForStartups?: boolean;
  worthClaimingFirst?: boolean;
  communityPriorityCategory?:
    | 'start_here'
    | 'build_apps'
    | 'learn'
    | 'testing_monitoring'
    | 'design'
    | 'security_infrastructure';
  verificationStatus: 'verified' | 'partially_verified' | 'needs_update';
}

export interface TechStackTemplate {
  id: string;
  name: string;
  description: string;
  tagline: string;
  category: string;
  offers: {
    role: string;
    offerId: string;
    notes: string;
  }[];
}

export interface LearningPathItem {
  id: string;
  title: string;
  roleDescription: string;
  recommendedOffers: {
    offerId: string;
    step: string;
    why: string;
  }[];
}


