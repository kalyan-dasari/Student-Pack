import { LearningPathItem } from '../types';

export const LEARNING_PATHS: LearningPathItem[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    roleDescription: 'Master modern web interfaces, CSS architecture, JavaScript/TypeScript, and interactive user experiences.',
    recommendedOffers: [
      {
        offerId: 'scrimba',
        step: 'Step 1: Visual Foundations',
        why: 'Learn HTML, CSS, and basic JavaScript in an interactive player where you can pause the lecture and edit code directly.'
      },
      {
        offerId: 'frontend-masters',
        step: 'Step 2: Advanced JavaScript & TypeScript',
        why: 'Deepen your knowledge with masterclasses on React, TypeScript, state management, and web performance taught by senior staff engineers.'
      },
      {
        offerId: 'icons8',
        step: 'Step 3: Visual Polish & Assets',
        why: 'Level up UI quality with matching vector icons, UI illustrations, and design assets.'
      },
      {
        offerId: 'browserstack',
        step: 'Step 4: Cross-Browser & Device QA',
        why: 'Test Safari layout engines and real mobile phones to guarantee responsive design across any device.'
      },
      {
        offerId: 'github-pages',
        step: 'Step 5: Publish Your Portfolio',
        why: 'Deploy your interactive React or Vite applications for free on GitHub Pages.'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    roleDescription: 'Engineer resilient APIs, microservices, databases, and server-side business logic.',
    recommendedOffers: [
      {
        offerId: 'bootdev',
        step: 'Step 1: Backend Fundamentals',
        why: 'Learn Python, Go, memory models, and SQL data structures in an interactive backend-only curriculum.'
      },
      {
        offerId: 'jetbrains',
        step: 'Step 2: Professional Development Environment',
        why: 'Use IntelliJ IDEA Ultimate, PyCharm Pro, or GoLand with built-in database inspection and profiling tools.'
      },
      {
        offerId: 'mongodb',
        step: 'Step 3: Database Engineering',
        why: 'Design document schemas, queries, and aggregations using MongoDB Atlas cloud databases.'
      },
      {
        offerId: 'doppler',
        step: 'Step 4: Secret Management',
        why: 'Prevent compromised credentials by injecting environment secrets into microservices securely.'
      },
      {
        offerId: 'sentry',
        step: 'Step 5: Crash Telemetry & Tracing',
        why: 'Catch uncaught 500 errors, database bottlenecks, and slow API endpoints in real-time.'
      }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    roleDescription: 'Bridge client interfaces and cloud backends to build complete, functional web applications.',
    recommendedOffers: [
      {
        offerId: 'frontend-masters',
        step: 'Step 1: Full-Stack Architecture',
        why: 'Study end-to-end full-stack development with Next.js, Node.js, and modern TypeScript.'
      },
      {
        offerId: 'clerk',
        step: 'Step 2: User Authentication',
        why: 'Implement secure login, session cookies, and user profiles in minutes without backend auth debt.'
      },
      {
        offerId: 'mongodb',
        step: 'Step 3: Cloud Database',
        why: 'Store dynamic application records and user data in managed cloud clusters.'
      },
      {
        offerId: 'heroku',
        step: 'Step 4: Effortless Deployment',
        why: 'Push code straight to production with 24 months of monthly credits covering your dynos and database.'
      },
      {
        offerId: 'sentry',
        step: 'Step 5: Production Monitoring',
        why: 'Track both frontend errors and backend server exceptions in one unified observability dashboard.'
      }
    ]
  },
  {
    id: 'aiml',
    title: 'AI / Machine Learning Developer',
    roleDescription: 'Explore data science, machine learning models, neural networks, and AI agent architectures.',
    recommendedOffers: [
      {
        offerId: 'datacamp',
        step: 'Step 1: Python, NumPy & PyTorch Foundations',
        why: 'Complete hands-on interactive courses covering data manipulation, statistics, and machine learning.'
      },
      {
        offerId: 'deepnote',
        step: 'Step 2: Cloud Data Science & Collaborative Notebooks',
        why: 'Run Jupyter notebooks in the cloud with teammates, with hardware acceleration and live SQL queries.'
      },
      {
        offerId: 'mongodb',
        step: 'Step 3: Vector Search & Embeddings',
        why: 'Store high-dimensional vector embeddings for Retrieval Augmented Generation (RAG) and semantic search.'
      },
      {
        offerId: 'jetbrains',
        step: 'Step 4: PyCharm Pro Data Tooling',
        why: 'Debug complex Python training scripts, inspect tensors, and manage virtual environments with ease.'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Engineer',
    roleDescription: 'Automate deployments, orchestrate containers, enforce security, and manage cloud infrastructure.',
    recommendedOffers: [
      {
        offerId: 'digitalocean',
        step: 'Step 1: Linux & Virtual Private Servers',
        why: 'Gain real hands-on terminal experience configuring Ubuntu servers, Nginx proxies, and Docker.'
      },
      {
        offerId: 'termius',
        step: 'Step 2: Encrypted Multi-Device SSH',
        why: 'Manage remote server connections and SFTP transfers across laptop and mobile with end-to-end encryption.'
      },
      {
        offerId: 'github-pro',
        step: 'Step 3: CI/CD GitHub Actions',
        why: 'Automate build, test, and container deployment pipelines on every git push using 3,000 monthly Actions minutes.'
      },
      {
        offerId: 'datadog',
        step: 'Step 4: Cloud Infrastructure Observability',
        why: 'Monitor CPU, memory, and disk usage across servers with Datadog Pro monitoring for up to 10 hosts.'
      },
      {
        offerId: 'doppler',
        step: 'Step 5: Production Secret Orchestration',
        why: 'Sync API keys and server certificates into CI/CD and production containers without disk storage.'
      }
    ]
  },
  {
    id: 'datascience',
    title: 'Data Science & Analytics',
    roleDescription: 'Extract actionable insights, build predictive statistical models, and communicate findings through data visualization.',
    recommendedOffers: [
      {
        offerId: 'datacamp',
        step: 'Step 1: SQL, R, and Pandas Fundamentals',
        why: 'Earn certified skill badges in SQL query optimization and Python data analytics.'
      },
      {
        offerId: 'deepnote',
        step: 'Step 2: Exploratory Data Analysis (EDA)',
        why: 'Explore datasets collaboratively with built-in chart generators, reactive cells, and SQL execution.'
      },
      {
        offerId: 'visme',
        step: 'Step 3: Data Storytelling & Infographics',
        why: 'Transform raw charts into compelling, executive-ready presentations and infographics for stakeholders.'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Developer',
    roleDescription: 'Build native and cross-platform mobile apps for iOS and Android devices.',
    recommendedOffers: [
      {
        offerId: 'appwrite',
        step: 'Step 1: Mobile Backend-as-a-Service',
        why: 'Connect user authentication, real-time database queries, and avatar file storage using Flutter or React Native SDKs.'
      },
      {
        offerId: 'iconscout',
        step: 'Step 2: Mobile UI & Lottie Animations',
        why: 'Incorporate lightweight vector icons and smooth onboarding animations directly into your mobile views.'
      },
      {
        offerId: 'browserstack',
        step: 'Step 3: Physical Device Testing',
        why: 'Test native mobile APKs and IPAs on real physical iPhone and Android hardware without buying hardware.'
      },
      {
        offerId: 'sentry',
        step: 'Step 4: Mobile Crash Analytics',
        why: 'Track native and JavaScript bridge crash stack traces in real time.'
      }
    ]
  },
  {
    id: 'opensource',
    title: 'Open Source Contributor & Maintainer',
    roleDescription: 'Maintain healthy public repositories, collaborate transparently, and automate quality assurance.',
    recommendedOffers: [
      {
        offerId: 'github-pro',
        step: 'Step 1: Repository Governance',
        why: 'Set up branch protections, automated CI workflows, and code owners on your repositories.'
      },
      {
        offerId: 'codecov',
        step: 'Step 2: Automated Test Coverage',
        why: 'Enforce code quality standards by requiring pull requests to maintain or increase test coverage.'
      },
      {
        offerId: 'codescene',
        step: 'Step 3: Technical Debt Detection',
        why: 'Identify architectural hotspots and complex files that need refactoring before bugs happen.'
      },
      {
        offerId: 'github-pages',
        step: 'Step 4: Project Documentation',
        why: 'Host interactive API docs, tutorials, and change logs for free on GitHub Pages.'
      }
    ]
  },
  {
    id: 'startup',
    title: 'Startup & Indie Builder',
    roleDescription: 'Take an idea from zero to a live launched product with paying customers and brand presence.',
    recommendedOffers: [
      {
        offerId: 'notion',
        step: 'Step 1: Product Specs & Sprint Planning',
        why: 'Map out customer interviews, product roadmaps, and sprint tasks in a collaborative workspace.'
      },
      {
        offerId: 'tech-domain',
        step: 'Step 2: Launch Brand & Custom Domain',
        why: 'Claim your startup web address on a professional `.tech` top-level domain.'
      },
      {
        offerId: 'clerk',
        step: 'Step 3: User Authentication & Onboarding',
        why: 'Enable frictionless signups with social login and multi-tenant organization support.'
      },
      {
        offerId: 'mongodb',
        step: 'Step 4: Flexible Cloud Database',
        why: 'Iterate rapidly on features without rigid SQL schema migrations using MongoDB Atlas.'
      },
      {
        offerId: 'simpleanalytics',
        step: 'Step 5: Privacy-Friendly Launch Analytics',
        why: 'Track pageviews and signups from Product Hunt and Hacker News without annoying cookie banners.'
      }
    ]
  }
];
