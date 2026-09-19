import { TechStackTemplate } from '../types';

export const TECH_STACKS: TechStackTemplate[] = [
  {
    id: 'saas',
    name: 'Build a Modern SaaS',
    tagline: 'Production-ready full-stack software-as-a-service application',
    description:
      'A complete, battle-tested modern SaaS architecture combining managed auth, document database, hosting, error tracking, and secret management.',
    category: 'Full Stack',
    offers: [
      {
        role: 'Frontend & Version Control',
        offerId: 'github-pro',
        notes: 'Host source code with branch protections, CI/CD automated test workflows, and team access.',
      },
      {
        role: 'Authentication & Users',
        offerId: 'clerk',
        notes: 'Pre-built sign in/up, MFA, session management, and organization multi-tenancy up to 50k MAUs.',
      },
      {
        role: 'Database & Storage',
        offerId: 'mongodb',
        notes: '$50 cloud database credits with scalable document collections and vector search.',
      },
      {
        role: 'Hosting & Deployment',
        offerId: 'digitalocean',
        notes: 'Reliable cloud virtual server or App Platform container to run your backend API services.',
      },
      {
        role: 'Error Monitoring',
        offerId: 'sentry',
        notes: 'Real-time crash reports and performance monitoring with 50,000 monthly events.',
      },
      {
        role: 'Secrets Management',
        offerId: 'doppler',
        notes: 'Secure centralized team vault to inject API keys into local dev and production servers.',
      },
      {
        role: 'Cross-Device Testing',
        offerId: 'browserstack',
        notes: 'Verify Safari, Chrome, and mobile screen responsiveness on 3,000+ real hardware devices.',
      },
    ],
  },
  {
    id: 'portfolio',
    name: 'Build a Developer Portfolio',
    tagline: 'Custom-branded professional showcase with zero hosting fees',
    description:
      'Publish a custom portfolio that impresses recruiters, featuring your own personalized domain name, pixel-perfect icons, and privacy-respecting traffic stats.',
    category: 'Frontend',
    offers: [
      {
        role: 'Hosting & Deployment',
        offerId: 'github-pages',
        notes: '100% free static site hosting directly connected to your Git repository with automated deploys.',
      },
      {
        role: 'Custom Domain & SSL',
        offerId: 'namecheap',
        notes: '1 year of your own personal `.me` domain name (e.g. `yourname.me`) with full HTTPS certificate.',
      },
      {
        role: 'UI Assets & Icons',
        offerId: 'icons8',
        notes: '3 months of consistent SVG icons, transparent PNG illustrations, and UI graphics.',
      },
      {
        role: 'Privacy-First Analytics',
        offerId: 'simpleanalytics',
        notes: 'See which companies and cities visit your resume without annoying cookie banners.',
      },
    ],
  },
  {
    id: 'ai-application',
    name: 'Build an AI Application',
    tagline: 'Collaborative data pipelines and scalable backend for AI prototypes',
    description:
      'Train, test, and serve AI-powered applications with collaborative cloud notebooks, vector-capable document databases, and serverless backends.',
    category: 'AI & Data',
    offers: [
      {
        role: 'Data Science & Notebooks',
        offerId: 'deepnote',
        notes: 'Real-time collaborative cloud Jupyter notebooks with GPU support and Python execution.',
      },
      {
        role: 'Database & Vector Search',
        offerId: 'mongodb',
        notes: 'Store embeddings, prompts, and application state in MongoDB Atlas with Atlas Vector Search.',
      },
      {
        role: 'Backend & Serverless Functions',
        offerId: 'appwrite',
        notes: 'Trigger serverless Python/Node background tasks on user prompt creation.',
      },
      {
        role: 'Hosting & Containers',
        offerId: 'digitalocean',
        notes: 'Deploy Docker containers hosting FastAPIs or model inference wrappers.',
      },
      {
        role: 'Observability & Monitoring',
        offerId: 'sentry',
        notes: 'Catch LLM timeout exceptions, token limit errors, and backend network drops.',
      },
    ],
  },
  {
    id: 'production-web-app',
    name: 'Build a Production Web App',
    tagline: 'Robust web application with professional developer tooling and QA',
    description:
      'Develop with enterprise-grade IDEs, seamless auth, managed Git deployments, and full-spectrum automated testing suites.',
    category: 'Full Stack',
    offers: [
      {
        role: 'Integrated Development (IDE)',
        offerId: 'jetbrains',
        notes: 'Write clean code using IntelliJ IDEA Ultimate, WebStorm, or PyCharm Pro.',
      },
      {
        role: 'Authentication',
        offerId: 'clerk',
        notes: 'Drop-in user registration and social authentication.',
      },
      {
        role: 'Database',
        offerId: 'mongodb',
        notes: 'High-availability document database cluster.',
      },
      {
        role: 'PaaS Deployment',
        offerId: 'heroku',
        notes: 'Zero-config git push deployment powered by 24 months of monthly platform credits.',
      },
      {
        role: 'Crash Reporting',
        offerId: 'sentry',
        notes: 'Instant telemetry and stack traces on unhandled runtime errors.',
      },
      {
        role: 'QA & Automated Testing',
        offerId: 'browserstack',
        notes: 'Execute automated Cypress and Playwright tests across browser versions.',
      },
    ],
  },
  {
    id: 'mobile-app',
    name: 'Build a Mobile Application',
    tagline: 'Cross-platform Flutter or React Native app with cloud backend',
    description:
      'Everything needed to build, power, and test iOS and Android applications with real backend APIs and hardware testing.',
    category: 'Mobile',
    offers: [
      {
        role: 'Backend as a Service (BaaS)',
        offerId: 'appwrite',
        notes: 'Real-time database, auth, and S3-compatible file storage with native Flutter and React Native SDKs.',
      },
      {
        role: 'Mobile Crash Analytics',
        offerId: 'sentry',
        notes: 'Real-time crash reporting for iOS and Android native code and JavaScript bridges.',
      },
      {
        role: 'Real Device Testing',
        offerId: 'browserstack',
        notes: 'Test your mobile build on physical iPhone and Android hardware via cloud streaming.',
      },
      {
        role: 'Animated UI & Graphics',
        offerId: 'iconscout',
        notes: 'Lottie animations and 3D icons to bring your mobile user onboarding to life.',
      },
    ],
  },
  {
    id: 'api-service',
    name: 'Build a High-Performance API',
    tagline: 'Microservice or REST/GraphQL API with automated testing and secrets',
    description:
      'Develop, mock, document, and deploy resilient API services with professional tooling and automated coverage.',
    category: 'Backend',
    offers: [
      {
        role: 'IDE & Debugging',
        offerId: 'jetbrains',
        notes: 'Deep refactoring and integrated HTTP client inside PyCharm or GoLand.',
      },
      {
        role: 'API Interception & Mocking',
        offerId: 'requestly',
        notes: 'Simulate edge-case HTTP responses, latency spikes, and payload schemas.',
      },
      {
        role: 'Secrets Management',
        offerId: 'doppler',
        notes: 'Safely inject database connection strings into Docker containers without `.env` files.',
      },
      {
        role: 'Hosting & Compute',
        offerId: 'digitalocean',
        notes: 'Fast Ubuntu virtual server or container runtime behind an Nginx reverse proxy.',
      },
      {
        role: 'Test Coverage Gates',
        offerId: 'codecov',
        notes: 'Enforce unit test coverage thresholds before merging API route changes.',
      },
    ],
  },
  {
    id: 'student-community',
    name: 'Build a Student Community / Club Hub',
    tagline: 'Collaborative club portal, event page, and communication center',
    description:
      'Organize your university engineering club, hackathon, or student team with branded landing pages and shared workspaces.',
    category: 'Community',
    offers: [
      {
        role: 'Team Knowledge & Planning',
        offerId: 'notion',
        notes: 'Shared club wiki, meeting agendas, sprint backlogs, and application databases.',
      },
      {
        role: 'Club Project Domain',
        offerId: 'tech-domain',
        notes: 'Free branded `.tech` domain name for the club or hackathon team.',
      },
      {
        role: 'Landing Page & Hosting',
        offerId: 'github-pages',
        notes: 'Free static website hosting for member signups and event announcements.',
      },
      {
        role: 'Visual Design & Slides',
        offerId: 'visme',
        notes: 'Create polished sponsor pitch decks, club flyers, and event infographics.',
      },
    ],
  },
  {
    id: 'open-source-project',
    name: 'Build an Open Source Project',
    tagline: 'Well-tested, secure, and documented open-source repository',
    description:
      'Equip your public GitHub repository with enterprise-grade quality gates, visual health metrics, and automated tests.',
    category: 'Open Source',
    offers: [
      {
        role: 'Repository & CI Automation',
        offerId: 'github-pro',
        notes: 'Advanced GitHub Actions minutes, branch protections, and PR reviews.',
      },
      {
        role: 'Documentation Hosting',
        offerId: 'github-pages',
        notes: 'Publish beautiful markdown documentation sites with zero infrastructure.',
      },
      {
        role: 'Automated Test Coverage',
        offerId: 'codecov',
        notes: 'Display live test coverage badges on your README and PR comments.',
      },
      {
        role: 'Code Health & Hotspot Analysis',
        offerId: 'codescene',
        notes: 'Detect technical debt hotspots and architectural decay in pull requests.',
      },
      {
        role: 'Commit Signing & Security',
        offerId: '1password',
        notes: 'Cryptographically sign all Git commits using hardware-backed SSH keys.',
      },
    ],
  },
];
