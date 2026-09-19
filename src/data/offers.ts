import { StudentPackOffer } from '../types';

export const OFFERS_DATA: StudentPackOffer[] = [
  {
    id: 'github-pro',
    name: 'GitHub Pro & Codespaces',
    category: 'Developer Tools',
    description: 'Advanced Git tooling, unlimited private repos, CI/CD minutes, and cloud development environments.',
    benefit: 'Free GitHub Pro while you are a student + GitHub Codespaces cloud dev environment allocation.',
    duration: 'While enrolled in school / college (renews annually)',
    eligibility: 'All verified students aged 13+ with an academic email or official student ID.',
    officialUrl: 'https://github.com',
    githubOfferUrl: 'https://education.github.com/pack',
    whatItDoes: 'GitHub Pro grants private repository insights, branch protection rules, code owners, 3,000 GitHub Actions CI/CD minutes per month, 2GB GitHub Packages storage, and the coveted "Pro" profile badge. Coupled with GitHub Codespaces, you get instant cloud-hosted development environments accessible from any browser.',
    whyStudentsShouldCare: 'It is the single foundation of the entire Student Pack. It turns your GitHub account into a professional engineering portfolio and gives you free compute minutes to automate test suites on every git push.',
    whatYouCanBuild: [
      'Automated CI/CD test and deployment pipelines',
      'Multi-contributor collaborative open source repositories',
      'Cloud development workspaces that spin up on Chromebooks or iPads'
    ],
    exampleUseCases: [
      'Automating unit testing with GitHub Actions before merging PRs',
      'Running full-stack Node.js + Python dev containers inside browser-based Codespaces',
      'Collaborating on capstone team projects with branch protection rules'
    ],
    howToClaim: [
      'Navigate to education.github.com/discount_requests/student',
      'Submit proof of student enrollment (university email or student ID document)',
      'Once approved, your standard GitHub account automatically upgrades to GitHub Pro',
      'Your GitHub Pro status can be verified under Account Settings > Billing & Plans'
    ],
    requirements: [
      'Active student status at an accredited high school, college, or bootcamp',
      'GitHub account with Two-Factor Authentication (2FA) enabled',
      'School email (.edu or campus domain) or valid physical student ID card with date'
    ],
    limitations: [
      'Actions minutes are capped at 3,000 monthly minutes',
      'Codespaces free allowance is bound by monthly core-hour limits',
      'Must re-verify academic status once per year'
    ],
    relatedOffers: ['github-pages', 'jetbrains', 'sentry', 'codecov'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://education.github.com/pack',
      'https://docs.github.com/en/education/explore-the-benefits-of-github-education'
    ],
    recommendedAudience: 'Best for: Every developer starting out',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'start_here',
    verificationStatus: 'verified'
  },
  {
    id: 'github-pages',
    name: 'GitHub Pages',
    category: 'Personal Portfolio',
    description: 'Free static website hosting directly from your Git repositories with custom domain and SSL support.',
    benefit: 'Host unlimited static sites directly from public and private GitHub repositories with automatic HTTPS.',
    duration: 'Free indefinitely while using GitHub',
    eligibility: 'Available to all GitHub users; GitHub Pro allows hosting from private repositories without exposing source code.',
    officialUrl: 'https://pages.github.com',
    githubOfferUrl: 'https://education.github.com/pack',
    whatItDoes: 'GitHub Pages takes HTML, CSS, and compiled JavaScript files straight from a repository branch or `/docs` folder and publishes them to the web with an official URL or your custom domain name.',
    whyStudentsShouldCare: 'You never have to pay for web hosting to show off your portfolio, homework projects, or open-source documentation. Combined with custom domain offers from the Pack, your portfolio looks 100% professional.',
    whatYouCanBuild: [
      'Personal resume and developer portfolio website',
      'Documentation sites using VitePress, Docusaurus, or MkDocs',
      'Client-side web games, tools, and calculators'
    ],
    exampleUseCases: [
      'Deploying a React or Vite single-page portfolio with zero server configuration',
      'Creating interactive lab assignments that professors can grade via public link',
      'Attaching a free .me or .tech domain name to a personal website'
    ],
    howToClaim: [
      'Create a GitHub repository named <your-username>.github.io',
      'Push an index.html file or build output to the main branch',
      'Open Repository Settings > Pages',
      'Select the deployment branch and save; your site goes live within 60 seconds'
    ],
    requirements: [
      'GitHub account with verified email'
    ],
    limitations: [
      'Static assets only (no server-side PHP, Python, or Node.js runtime)',
      '1GB repository size limit and 100GB monthly bandwidth soft cap',
      'Cannot be used for high-frequency trading or intensive commercial e-commerce'
    ],
    relatedOffers: ['github-pro', 'namecheap', 'tech-domain', 'icons8'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://pages.github.com',
      'https://docs.github.com/en/pages'
    ],
    recommendedAudience: 'Best for: Portfolios and documentation',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: true,
    communityPriorityCategory: 'start_here',
    verificationStatus: 'verified'
  },
  {
    id: 'mongodb',
    name: 'MongoDB Atlas',
    category: 'Infrastructure & APIs',
    description: 'Modern, multi-cloud document database with built-in search, aggregation, and serverless scaling.',
    benefit: '$50 MongoDB Atlas cloud database credits + MongoDB Compass GUI + Free Certification Exam voucher.',
    duration: 'Credits valid while enrolled; certification vouchers subject to promotion windows',
    eligibility: 'Verified GitHub Student Developer Pack students.',
    officialUrl: 'https://www.mongodb.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#mongodb',
    whatItDoes: 'MongoDB is the industry-standard NoSQL document database. MongoDB Atlas provides fully managed clusters hosted on AWS, Google Cloud, or Azure, removing the headache of database server maintenance.',
    whyStudentsShouldCare: 'Relational SQL tables can be rigid for prototypes. MongoDB lets you store flexible JSON documents, making it effortless to iterate on full-stack web applications without complicated migration scripts.',
    whatYouCanBuild: [
      'Full-stack MERN (MongoDB, Express, React, Node.js) web apps',
      'E-commerce catalogs and inventory tracking systems',
      'Mobile backend databases with vector search for AI embeddings'
    ],
    exampleUseCases: [
      'Building a student hackathon directory with geospatial search',
      'Storing conversational memory logs for generative AI chatbots',
      'Passing official MongoDB Certified Developer exams at zero cost'
    ],
    howToClaim: [
      'Visit the GitHub Education Pack benefits page and locate MongoDB',
      'Click "Claim Offer" to be redirected to the MongoDB Student Hub',
      'Sign up or log in using your GitHub student account via OAuth',
      'Apply the redemption promo code into MongoDB Atlas Organization Settings > Billing'
    ],
    requirements: [
      'Active GitHub Student Developer Pack verification',
      'MongoDB Atlas account'
    ],
    limitations: [
      '$50 credits must be applied to dedicated clusters (shared M0 clusters are always free anyway)',
      'Certification vouchers must be scheduled before specific cohort deadlines'
    ],
    relatedOffers: ['clerk', 'digitalocean', 'heroku', 'appwrite', 'sentry'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.mongodb.com/students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Full-stack applications & NoSQL',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'build_apps',
    verificationStatus: 'verified'
  },
  {
    id: 'clerk',
    name: 'Clerk',
    category: 'Infrastructure & APIs',
    description: 'Complete user authentication, session management, and authorization platform built for modern web stacks.',
    benefit: 'Free Clerk Pro tier (valued at $240/yr) with up to 50,000 monthly active users (MAUs).',
    duration: 'Full duration of your verified GitHub student tenure',
    eligibility: 'Students with an active GitHub Student Developer Pack.',
    officialUrl: 'https://clerk.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#clerk',
    whatItDoes: 'Clerk provides pre-built, beautifully designed sign-in, sign-up, user profile, and organization switcher components for React, Next.js, Remix, Astro, and JavaScript.',
    whyStudentsShouldCare: 'Rolling your own authentication from scratch is tedious and dangerous. Clerk gives you passwordless auth, Google/GitHub social login, and MFA in less than 5 minutes with zero security risk.',
    whatYouCanBuild: [
      'SaaS platforms with multi-tenant team accounts and permissions',
      'Protected membership portals and student job boards',
      'Modern web apps requiring OAuth login with GitHub or Google'
    ],
    exampleUseCases: [
      'Adding instant login buttons to a Next.js side project with <SignInButton />',
      'Allowing students to sign in with their university Google Workspace or personal GitHub accounts',
      'Removing Clerk branding for clean production launches'
    ],
    howToClaim: [
      'Click through to Clerk from the GitHub Education Pack portal',
      'Sign in to Clerk with your GitHub student account',
      'Create a new project or select an existing project',
      'Navigate to Plans & Upgrades; your Student Pro status applies automatically with $0 billing'
    ],
    requirements: [
      'Verified GitHub Student Developer Pack account',
      'Clerk developer account'
    ],
    limitations: [
      'SMS authentication is excluded from the free student tier to prevent spam abuse',
      'Applies to one production application per student'
    ],
    relatedOffers: ['mongodb', 'digitalocean', 'appwrite', 'sentry'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://clerk.com/pricing',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Next.js & modern web auth',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'build_apps',
    verificationStatus: 'verified'
  },
  {
    id: 'appwrite',
    name: 'Appwrite',
    category: 'Infrastructure & APIs',
    description: 'Open-source backend-as-a-service providing auth, databases, serverless functions, and storage.',
    benefit: 'Free Appwrite Education tier (Pro equivalent, $15-$40/mo value) with 300GB bandwidth and 150GB storage.',
    duration: 'Valid throughout your active studies',
    eligibility: 'All students verified under GitHub Education.',
    officialUrl: 'https://appwrite.io',
    githubOfferUrl: 'https://education.github.com/pack/offers#appwrite',
    whatItDoes: 'Appwrite gives you an instant backend suite: JSON document databases, user authentication with 30+ OAuth providers, file storage buckets with image transforms, and serverless functions in Node, Python, Ruby, and PHP.',
    whyStudentsShouldCare: 'It is a self-hostable or cloud-managed alternative to Firebase and Supabase. You can spin up complete backends for web, Flutter, Android, and iOS apps without writing repetitive boilerplate.',
    whatYouCanBuild: [
      'Mobile apps in Flutter or React Native with real-time sync',
      'Collaborative document editing apps with file attachments',
      'Serverless microservice backends running Python scheduled tasks'
    ],
    exampleUseCases: [
      'Storing user avatars and resumes in secure S3-compatible cloud buckets',
      'Setting up real-time websocket chat rooms in under 30 lines of code',
      'Running background Python AI scripts triggered by database document creation'
    ],
    howToClaim: [
      'Access the Appwrite GitHub Education redemption page',
      'Sign in with your verified GitHub account',
      'Connect your organization or create your student project',
      'Activate the Education Pro plan benefit directly on your organization dashboard'
    ],
    requirements: [
      'GitHub Student Pack verified account'
    ],
    limitations: [
      'Generous limits (300GB bandwidth, 3.5M function executions) but monitored against commercial enterprise resale'
    ],
    relatedOffers: ['mongodb', 'clerk', 'sentry', 'doppler'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://appwrite.io/blog/post/github-education-partnership',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Mobile & full-stack backends',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'build_apps',
    verificationStatus: 'verified'
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    category: 'Cloud',
    description: 'Developer-friendly cloud platform providing virtual private servers (Droplets), Kubernetes, and managed databases.',
    benefit: 'Platform cloud credits (traditionally $100-$200). Note: Sunset policy applies for new student claims in 2026.',
    duration: '1 year from activation or until promotional credit expiry (valid through mid-2026)',
    eligibility: 'New DigitalOcean student accounts with verified GitHub Student Pack.',
    officialUrl: 'https://www.digitalocean.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#digitalocean',
    whatItDoes: 'DigitalOcean provides Linux virtual servers (Droplets), App Platform (PaaS), managed PostgreSQL/MySQL/Redis, S3-compatible Spaces object storage, and load balancers.',
    whyStudentsShouldCare: 'It teaches you real Linux systems administration, SSH key management, Nginx reverse proxying, and Docker container deployment in production.',
    whatYouCanBuild: [
      'Custom Linux server running Docker containers and cron jobs',
      'Self-hosted Discord bots, Minecraft servers, or Matrix chat servers',
      'Production Node.js, Go, or Python web APIs behind custom domain names'
    ],
    exampleUseCases: [
      'Running an Ubuntu Droplet with PM2 running your Express or FastAPI backend',
      'Hosting personal VPN or Git remote mirrors',
      'Deploying a containerized web app on DigitalOcean App Platform'
    ],
    howToClaim: [
      'Navigate to the DigitalOcean offer on education.github.com/pack',
      'Click the unique referral link to DigitalOcean',
      'Create a brand new DigitalOcean account (cannot be an existing account with prior credits)',
      'Complete identity verification (may require small temporary authorization charge or PayPal verification)',
      'The promotional credit is added to your Billing balance'
    ],
    requirements: [
      'New DigitalOcean account',
      'Valid payment method or identity verification (credit card or PayPal) to deter bot spam'
    ],
    limitations: [
      'Requires payment method verification even though credits cover the balance',
      'Credit has an expiration date; unused credit expires after 12 months',
      'Sunset advisory: DigitalOcean student program transition scheduled for 2026'
    ],
    relatedOffers: ['heroku', 'mongodb', 'doppler', 'sentry'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.digitalocean.com',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Cloud servers & Linux learning',
    requiresCreditCard: true,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Offer undergoing sunset in 2026; existing claimed credits valid through expiry.',
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'build_apps',
    verificationStatus: 'verified'
  },
  {
    id: 'heroku',
    name: 'Heroku',
    category: 'Cloud',
    description: 'Pioneer platform-as-a-service for deploying web applications directly from git repository pushes.',
    benefit: 'Monthly platform credit of $13/month for 24 months (covering 1 Eco dyno and 1 mini Heroku Postgres database).',
    duration: '24 months (2 years) of continuous monthly credits',
    eligibility: 'Verified GitHub Student Developer Pack members.',
    officialUrl: 'https://www.heroku.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#heroku',
    whatItDoes: 'Heroku simplifies application deployment: git push heroku main automatically builds your code using buildpacks, provisions runtime containers (Dynos), and sets up SSL routing automatically.',
    whyStudentsShouldCare: 'Zero server configuration. You do not need to configure Linux, Nginx, or SSL certificates manually. It is the quickest way to put a Python Flask/Django, Rails, or Node app on the live internet.',
    whatYouCanBuild: [
      'REST APIs built in Express, Flask, Django, or FastAPI',
      'Slack and Discord bots that stay awake 24/7',
      'Full-stack apps backed by managed Heroku Postgres'
    ],
    exampleUseCases: [
      'Hosting semester capstone demos that professors can test without downtime',
      'Deploying scheduled worker dynos to fetch campus dining menus daily',
      'Connecting GitHub pull requests to automatic Heroku review apps'
    ],
    howToClaim: [
      'Click the Heroku link in the GitHub Student Developer Pack',
      'Log into or create your Heroku account',
      'Authorize GitHub Education access',
      'Link your billing profile to receive the $13/mo Eco credit waiver for 2 years'
    ],
    requirements: [
      'Verified GitHub Student status',
      'Heroku account with payment verification (to prevent cryptocurrency mining abuse)'
    ],
    limitations: [
      'Credits do not roll over from month to month',
      'Exceeding the monthly Eco dyno quota will incur standard charges if not monitored',
      'Must manage dyno sleep hours if running multiple apps simultaneously'
    ],
    relatedOffers: ['digitalocean', 'mongodb', 'sentry', 'doppler'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://blog.heroku.com/github-student-pack',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Effortless Git-based web deployment',
    requiresCreditCard: true,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: true,
    communityPriorityCategory: 'build_apps',
    verificationStatus: 'verified'
  },
  {
    id: 'jetbrains',
    name: 'JetBrains Professional IDEs',
    category: 'Developer Tools',
    description: 'The gold-standard collection of professional integrated development environments for software engineers.',
    benefit: 'Free annual educational license to the complete JetBrains All Products Pack (IntelliJ IDEA Ultimate, PyCharm Pro, WebStorm, CLion, GoLand, Rider, DataGrip, etc.).',
    duration: '1 year, renewable annually as long as you maintain verified student status',
    eligibility: 'Enrolled students at university, college, or high school.',
    officialUrl: 'https://www.jetbrains.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#jetbrains',
    whatItDoes: 'JetBrains produces top-tier IDEs with intelligent code completion, deep semantic refactoring, integrated visual debuggers, database schema tools, and built-in profilers.',
    whyStudentsShouldCare: 'Professional engineering teams worldwide run JetBrains tools. You get access to the paid "Ultimate" and "Professional" editions that commercial companies pay hundreds of dollars per seat for.',
    whatYouCanBuild: [
      'Large-scale Java / Kotlin Spring Boot backends with IntelliJ IDEA Ultimate',
      'Machine learning and data science pipelines in PyCharm Pro',
      'Game development in Unity / Unreal Engine using JetBrains Rider',
      'Systems programming in C++ and Rust using CLion'
    ],
    exampleUseCases: [
      'Navigating multi-million line codebases with instant symbol search',
      'Directly editing SQL tables and executing complex joins inside DataGrip',
      'Remote debugging applications inside Docker containers directly from your IDE'
    ],
    howToClaim: [
      'Go to the JetBrains Student portal or click from GitHub Pack',
      'Select "Apply with GitHub" button to verify using your student pack credentials',
      'Log into your JetBrains Account',
      'Download JetBrains Toolbox App and log in to activate any IDE with one click'
    ],
    requirements: [
      'GitHub Student Pack or student email (.edu)',
      'JetBrains account'
    ],
    limitations: [
      'Educational licenses are strictly non-commercial (academic and personal open-source only)',
      'Must be renewed every 365 days via re-verification'
    ],
    relatedOffers: ['github-pro', 'github-codespaces', 'requestly', 'codecov'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.jetbrains.com/community/education/#students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Professional coding in Java, Python, C++, Go',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: true,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'frontend-masters',
    name: 'Frontend Masters',
    category: 'Learning',
    description: 'Premium, in-depth video courses taught by senior engineers from leading technology companies.',
    benefit: '6 months of completely free, unrestricted access to the entire Frontend Masters course catalog.',
    duration: '6 months from redemption date',
    eligibility: 'Students with active GitHub Student Developer Pack verification.',
    officialUrl: 'https://frontendmasters.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#frontendmasters',
    whatItDoes: 'Frontend Masters hosts masterclasses on JavaScript, TypeScript, React, Vue, Node.js, CSS architecture, web performance, algorithms, and system design recorded live with world-class practitioners.',
    whyStudentsShouldCare: 'Unlike random YouTube tutorials that scratch the surface, these courses delve deep into the JavaScript runtime, compilation steps, ASTs, and production-grade architectures.',
    whatYouCanBuild: [
      'Enterprise-grade TypeScript applications',
      'Custom state managers and virtual DOM engines',
      'Production design systems with CSS layout algorithms'
    ],
    exampleUseCases: [
      'Mastering Data Structures and Algorithms with ThePrimeagen',
      'Learning advanced TypeScript fundamentals with Mike North',
      'Building performant web applications with Kyle Simpson and Kent C. Dodds'
    ],
    howToClaim: [
      'Visit education.github.com/pack and click Frontend Masters',
      'Authenticate with your verified GitHub student credentials',
      'Your Frontend Masters account is credited with 6 months of VIP subscription access'
    ],
    requirements: [
      'GitHub Student Developer Pack membership'
    ],
    limitations: [
      'One-time 6-month entitlement per student',
      'Does not automatically renew for free after 6 months; plan your course schedule in advance'
    ],
    relatedOffers: ['scrimba', 'educative', 'bootdev', 'codedex'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://frontendmasters.com/welcome/github-student-developers/',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Mastering modern JavaScript & Frontend',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: '6-month clock starts immediately upon activation. Activate when you have time to study!',
    bestForBeginners: false,
    bestForBuilding: false,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: true,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'educative',
    name: 'Educative',
    category: 'Learning',
    description: 'Interactive, text-based software engineering courses with in-browser coding terminals.',
    benefit: '6 months of free access to 60+ popular courses, followed by a 30% discount on subscriptions.',
    duration: '6 months free access',
    eligibility: 'Verified GitHub Student Developer Pack holders.',
    officialUrl: 'https://www.educative.io',
    githubOfferUrl: 'https://education.github.com/pack/offers#educative',
    whatItDoes: 'Educative provides rich, interactive courses on System Design, coding interview prep, Cloud certifications, and full-stack frameworks with live coding environments right in the browser.',
    whyStudentsShouldCare: 'No video buffering or scrub lag. You read concise, diagrammed technical explanations and execute code immediately in sandbox terminals to lock in comprehension.',
    whatYouCanBuild: [
      'Scalable distributed system architectures',
      'LeetCode algorithmic solutions in Python, C++, or Java',
      'Microservices with Docker and Kubernetes'
    ],
    exampleUseCases: [
      'Prepping for FAANG technical interviews using "Grokking the Coding Interview"',
      'Studying how high-traffic apps like Netflix, Uber, and Twitter are architected',
      'Learning Rust or Go without installing compilers locally'
    ],
    howToClaim: [
      'Go to the Educative GitHub student portal from the Pack page',
      'Sign in via GitHub OAuth',
      'Claim the 6-month student scholarship package on your account dashboard'
    ],
    requirements: [
      'Verified GitHub student account'
    ],
    limitations: [
      'Includes 60+ selected core foundational courses rather than the entire unlimited catalog',
      'Time-limited 6-month access window'
    ],
    relatedOffers: ['frontend-masters', 'datacamp', 'bootdev'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.educative.io/github-students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Technical interview prep & System Design',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Valid for 6 months from redemption.',
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: true,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'bootdev',
    name: 'Boot.dev',
    category: 'Learning',
    description: 'Gamified backend development learning platform focused on Python, Go, TypeScript, and computer science fundamentals.',
    benefit: '3 months of free access to Boot.dev complete membership (courses, tracks, and discord community).',
    duration: '3 months from redemption',
    eligibility: 'Verified GitHub Student Developer Pack students.',
    officialUrl: 'https://www.boot.dev',
    githubOfferUrl: 'https://education.github.com/pack/offers#bootdev',
    whatItDoes: 'Boot.dev is an RPG-themed backend curriculum teaching terminal skills, algorithms, data structures, databases, functional programming, and web servers with immediate automated grading.',
    whyStudentsShouldCare: 'Most online resources teach frontend only. Boot.dev focuses 100% on what happens on the server: writing fast Golang microservices, SQL queries, memory management, and HTTP protocols.',
    whatYouCanBuild: [
      'High-performance HTTP web servers in Go',
      'Command-line CLI utilities in Python',
      'Relational database schemas with raw SQL and indexing'
    ],
    exampleUseCases: [
      'Learning Go from scratch by building a real chirper microservice',
      'Understanding memory allocation and pointers',
      'Earning XP and achievements while building a portfolio of GitHub projects'
    ],
    howToClaim: [
      'Click through to Boot.dev from education.github.com/pack',
      'Sign in with your GitHub account',
      'Your student pass automatically activates 3 months of premium membership access'
    ],
    requirements: [
      'Active GitHub Education verification'
    ],
    limitations: [
      '3-month timer starts upon activation'
    ],
    relatedOffers: ['frontend-masters', 'educative', 'codedex'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.boot.dev/pricing',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Aspiring Backend Engineers & Go/Python',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Active for 3 months from day of redemption.',
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'datacamp',
    name: 'DataCamp',
    category: 'Learning',
    description: 'Interactive data science, machine learning, and AI learning platform.',
    benefit: '3 months of free access to DataCamp (all courses, projects, and skill assessments).',
    duration: '3 months of unrestricted access',
    eligibility: 'Enrolled students verified via GitHub Education.',
    officialUrl: 'https://www.datacamp.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#datacamp',
    whatItDoes: 'DataCamp offers hands-on exercises covering Python for data science, R, SQL, Power BI, Tableau, PyTorch, and machine learning with browser-based Jupyter sandboxes.',
    whyStudentsShouldCare: 'You can earn industry-recognized certifications in Data Analytics and Data Science to prove your quantitative skills on LinkedIn and resumes.',
    whatYouCanBuild: [
      'Data analysis notebooks exploring real-world public datasets',
      'Predictive machine learning models with Scikit-learn',
      'Complex SQL queries for business intelligence'
    ],
    exampleUseCases: [
      'Analyzing COVID-19 or climate trends using pandas and seaborn',
      'Building natural language processing classifiers in Python',
      'Passing DataCamp Certified Data Analyst assessments'
    ],
    howToClaim: [
      'Click DataCamp from the GitHub Pack directory',
      'Authenticate with GitHub Student account',
      'Claim the 3-month student access pass'
    ],
    requirements: [
      'GitHub Student Developer Pack verified'
    ],
    limitations: [
      '3-month window from the day of redemption',
      'Cannot be combined with existing enterprise team accounts'
    ],
    relatedOffers: ['deepnote', 'educative', 'frontend-masters'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.datacamp.com',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Data Science, SQL & Machine Learning',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: '3-month duration from date of activation.',
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'scrimba',
    name: 'Scrimba',
    category: 'Learning',
    description: 'Unique interactive screencast platform where you can pause the teacher and edit code directly in the video.',
    benefit: '1 month of free Scrimba Pro access to career paths and projects.',
    duration: '1 month from redemption',
    eligibility: 'Verified GitHub Student Developer Pack members.',
    officialUrl: 'https://scrimba.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#scrimba',
    whatItDoes: 'Scrimba reinvented video tutorials: instead of watching a passive video recording, the video is a live IDE stream where you can pause, edit files, and test your code right inside the lecture player.',
    whyStudentsShouldCare: 'The absolute fastest way for beginners to get the muscle memory of writing HTML, CSS, React, and JavaScript without context switching between YouTube and VS Code.',
    whatYouCanBuild: [
      'Interactive React single page applications',
      'CSS Grid and Flexbox responsive layouts',
      'JavaScript browser games like Blackjack or Snake'
    ],
    exampleUseCases: [
      'Completing the Frontend Developer Career Path',
      'Tinkering with code samples midway through teacher explanations',
      'Building portfolio mini-apps step-by-step'
    ],
    howToClaim: [
      'Select Scrimba in GitHub Education Pack',
      'Log into Scrimba using GitHub OAuth',
      'Activate the 1-month Pro pass on your billing settings page'
    ],
    requirements: [
      'GitHub Student Pack'
    ],
    limitations: [
      '1 month duration only'
    ],
    relatedOffers: ['frontend-masters', 'codedex', 'bootstrap-studio'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://scrimba.com/pricing',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Hands-on visual beginners in React/CSS',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: '1 month duration; redeem when you have a 4-week study sprint.',
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'codedex',
    name: 'Codédex',
    category: 'Learning',
    description: 'Gamified retro pixel-art programming journey designed for the next generation of coders.',
    benefit: '6 months of free Codédex Club membership (access to all courses, projects, and seasonal hackathons).',
    duration: '6 months from activation',
    eligibility: 'Verified GitHub Student Developer Pack members.',
    officialUrl: 'https://www.codedex.io',
    githubOfferUrl: 'https://education.github.com/pack/offers#codedex',
    whatItDoes: 'Codédex guides students through beginner friendly programming realms (Python, HTML/CSS, JavaScript, Command Line, Git) styled as an expansive 16-bit fantasy adventure.',
    whyStudentsShouldCare: 'If traditional documentation feels dry or overwhelming, Codédex turns learning syntax and algorithmic loops into an engaging quest with friendly community support.',
    whatYouCanBuild: [
      'Beginner Python games and automation scripts',
      'Personal web landing pages with pixel art styling',
      'Command-line interactive fiction stories'
    ],
    exampleUseCases: [
      'Completing your very first Python course from zero programming background',
      'Earning community badges and submitting hackathon projects',
      'Learning terminal command fundamentals with friendly visual guides'
    ],
    howToClaim: [
      'Visit Codédex through the GitHub Student Developer Pack link',
      'Sign in with your verified student GitHub account',
      'The 6 months of Codédex Club unlocks instantly on your profile'
    ],
    requirements: [
      'Verified GitHub student status'
    ],
    limitations: [
      '6 month membership term'
    ],
    relatedOffers: ['bootdev', 'scrimba', 'jetbrains'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.codedex.io',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Absolute beginners starting from scratch',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: '6 months active from day of redemption.',
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'sentry',
    name: 'Sentry',
    category: 'Security & Analytics',
    description: 'Real-time application performance monitoring and error tracking platform used by top tech companies.',
    benefit: '50,000 error events + 5GB logs + unlimited projects and members free for 1 year.',
    duration: '1 year from activation',
    eligibility: 'Verified GitHub Student Developer Pack students.',
    officialUrl: 'https://sentry.io',
    githubOfferUrl: 'https://education.github.com/pack/offers#sentry',
    whatItDoes: 'Sentry automatically captures unhandled exceptions, runtime crashes, slow database queries, and broken API calls across JavaScript, Python, Java, Go, mobile apps, and servers.',
    whyStudentsShouldCare: 'When your demo breaks during a hackathon presentation or a recruiter visits your portfolio, Sentry gives you the exact stack trace, line number, user browser, and commit hash so you can fix it immediately.',
    whatYouCanBuild: [
      'Production-grade reliability tracking for full-stack apps',
      'Crash analytics for React Native or Flutter mobile apps',
      'API performance monitoring measuring P95 database query speeds'
    ],
    exampleUseCases: [
      'Capturing frontend JavaScript errors before users complain on Twitter/Discord',
      'Pinpointing slow API response times in Express or Django backends',
      'Linking crash traces directly to GitHub commit history'
    ],
    howToClaim: [
      'Access the Sentry offer page via GitHub Education',
      'Log into Sentry via GitHub OAuth',
      'Create an organization and enter the promo code provided by GitHub',
      'The 50,000 monthly event capacity is credited for 12 months'
    ],
    requirements: [
      'GitHub Student Pack verified account'
    ],
    limitations: [
      '50,000 events per month quota; excessive spam loops can exhaust quota early',
      'Requires renewing or switching to free Developer plan after 1 year'
    ],
    relatedOffers: ['mongodb', 'clerk', 'digitalocean', 'heroku'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://sentry.io/for/education/',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Real-time bug & performance monitoring',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'testing_monitoring',
    verificationStatus: 'verified'
  },
  {
    id: 'browserstack',
    name: 'BrowserStack',
    category: 'Security & Analytics',
    description: 'Instant access to 3,000+ real desktop browsers and mobile devices for testing web apps.',
    benefit: '1 year of free BrowserStack Automate Mobile and Live testing (1 parallel test, 1 user).',
    duration: '1 year from activation date',
    eligibility: 'Verified students in GitHub Student Developer Pack.',
    officialUrl: 'https://www.browserstack.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#browserstack',
    whatItDoes: 'BrowserStack lets you run your website or mobile app on real physical iPhones, iPads, Samsung Galaxy phones, and desktop Safari/Chrome/Edge instances in the cloud.',
    whyStudentsShouldCare: 'You do not need to buy an iPhone or Mac to test how your web app looks on iOS Safari. You can test cross-browser CSS quirks on real hardware directly from a Windows or Linux laptop.',
    whatYouCanBuild: [
      'Cross-browser automated test suites using Playwright, Cypress, or Selenium',
      'Pixel-perfect responsive web designs tested across 20+ screen resolutions',
      'Native Android and iOS app testing setups'
    ],
    exampleUseCases: [
      'Debugging an annoying Safari-only CSS bug without owning an Apple computer',
      'Running automated end-to-end Cypress tests on every pull request',
      'Testing responsive mobile navigation on small Android screens'
    ],
    howToClaim: [
      'Click BrowserStack on the GitHub Pack portal',
      'Sign in with your student GitHub account',
      'Complete the student verification step to unlock 1 year of free Live and Automate access'
    ],
    requirements: [
      'Active GitHub Education verification'
    ],
    limitations: [
      '1 parallel test thread at a time',
      'Strictly non-commercial academic and personal testing use'
    ],
    relatedOffers: ['lambdatest', 'sentry', 'github-pro'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.browserstack.com/students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Real mobile & Safari cross-browser testing',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Valid for 1 year from redemption.',
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'testing_monitoring',
    verificationStatus: 'verified'
  },
  {
    id: 'lambdatest',
    name: 'LambdaTest',
    category: 'Security & Analytics',
    description: 'Cloud-based cross-browser testing platform with automated Selenium, Cypress, and Playwright execution.',
    benefit: '1 year of free access to Live interactive cross-browser testing and screenshot testing.',
    duration: '1 year from redemption',
    eligibility: 'GitHub Student Developer Pack verified students.',
    officialUrl: 'https://www.lambdatest.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#lambdatest',
    whatItDoes: 'Provides scalable cloud testing infrastructure to perform manual and automated web testing across 3,000+ different browser environments and operating systems.',
    whyStudentsShouldCare: 'An alternative or companion to BrowserStack, offering fast screenshot comparisons and visual regression testing to make sure code changes do not break page styling.',
    whatYouCanBuild: [
      'Automated visual regression pipelines',
      'Cross-platform accessibility and compliance audits',
      'Responsive design automated screenshot matrices'
    ],
    exampleUseCases: [
      'Generating 25 device screenshots simultaneously with one click',
      'Testing geolocation-restricted website functionality from different global IP addresses',
      'Verifying legacy enterprise browser compatibility'
    ],
    howToClaim: [
      'Navigate to LambdaTest from GitHub Education Pack',
      'Authenticate with your student GitHub account',
      'The student plan activates automatically in your team dashboard'
    ],
    requirements: [
      'Verified GitHub student status'
    ],
    limitations: [
      '1 concurrent real-time session; 100 screenshot tests per month limit on student tier'
    ],
    relatedOffers: ['browserstack', 'sentry', 'codecov'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.lambdatest.com/github-student-pack',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Automated visual regression & cross-browser testing',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Valid for 1 year.',
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'testing_monitoring',
    verificationStatus: 'verified'
  },
  {
    id: 'datadog',
    name: 'Datadog',
    category: 'Security & Analytics',
    description: 'Enterprise observability, server metrics, synthetic monitoring, and log management platform.',
    benefit: 'Pro tier monitoring service for up to 10 servers free for 2 years.',
    duration: '2 years (24 months) of service',
    eligibility: 'Verified GitHub Student Developer Pack accounts.',
    officialUrl: 'https://www.datadoghq.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#datadog',
    whatItDoes: 'Datadog aggregates metrics, traces, and logs from cloud servers, containers, databases, and microservices into unified real-time dashboards and alert monitors.',
    whyStudentsShouldCare: 'Experience with Datadog is directly transferable to Site Reliability Engineering (SRE) and DevOps roles at high-scale tech firms.',
    whatYouCanBuild: [
      'Server health dashboards tracking CPU, RAM, disk I/O, and network bandwidth',
      'Synthetic test monitors that ping endpoints every minute from worldwide locations',
      'Distributed tracing graphs showing exact database latency'
    ],
    exampleUseCases: [
      'Monitoring a fleet of DigitalOcean Droplets or AWS EC2 instances on a dashboard',
      'Setting up automated Slack/Discord alerts when server CPU surpasses 85%',
      'Visualizing API response percentiles for student research papers'
    ],
    howToClaim: [
      'Navigate to Datadog from the GitHub Education portal',
      'Sign up using your GitHub student identity and verify academic email',
      'Install the Datadog Agent on your Linux or Docker host to start streaming metrics'
    ],
    requirements: [
      'GitHub Student Pack verification',
      'At least one server or cloud virtual machine to monitor'
    ],
    limitations: [
      'Maximum of 10 host servers monitored concurrently'
    ],
    relatedOffers: ['digitalocean', 'heroku', 'sentry', 'new-relic'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.datadoghq.com',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: DevOps & Site Reliability Engineering (SRE)',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'testing_monitoring',
    verificationStatus: 'verified'
  },
  {
    id: 'new-relic',
    name: 'New Relic',
    category: 'Security & Analytics',
    description: 'All-in-one observability platform for full-stack telemetry, APM, and distributed tracing.',
    benefit: 'Free access to New Relic Student Edition with 100GB/month of free data ingest and 3 full-platform users.',
    duration: 'While enrolled as a student',
    eligibility: 'Students verified with GitHub Student Developer Pack.',
    officialUrl: 'https://newrelic.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#newrelic',
    whatItDoes: 'New Relic monitors application performance, frontend user sessions, backend service microservices, database slow-queries, and cloud infrastructure.',
    whyStudentsShouldCare: '100GB/month of telemetry is massive for student projects. You can instrument full-stack web apps and see live flame graphs of server code execution.',
    whatYouCanBuild: [
      'Full Application Performance Monitoring (APM) for Node, Python, and Java',
      'Real-user monitoring (RUM) tracking Core Web Vitals across page loads',
      'Kubernetes cluster observability maps'
    ],
    exampleUseCases: [
      'Finding the exact slow SQL query causing a 2-second delay on page load',
      'Analyzing real-world page rendering speeds for mobile visitors',
      'Building operational dashboards for university club infrastructure'
    ],
    howToClaim: [
      'Access New Relic student sign up via GitHub Education Pack',
      'Authenticate with GitHub OAuth',
      'Follow the on-screen guided install to add the New Relic agent to your code'
    ],
    requirements: [
      'Verified GitHub student status'
    ],
    limitations: [
      '100GB monthly data ingest limit (sufficient for multiple side projects)'
    ],
    relatedOffers: ['datadog', 'sentry', 'digitalocean'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://newrelic.com/students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Application performance monitoring (APM)',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'testing_monitoring',
    verificationStatus: 'verified'
  },
  {
    id: 'doppler',
    name: 'Doppler',
    category: 'Security & Analytics',
    description: 'Universal secrets management platform to securely store and sync API keys and environment variables.',
    benefit: 'Free Doppler Team subscription while you are a student (unlimited projects, team members, and environments).',
    duration: 'While enrolled as a student',
    eligibility: 'Verified GitHub Student Developer Pack students.',
    officialUrl: 'https://www.doppler.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#doppler',
    whatItDoes: 'Doppler replaces messy `.env` files. It securely stores your Stripe, MongoDB, and AWS secrets in an encrypted cloud vault and syncs them automatically to your terminal, Docker, GitHub Actions, and production servers.',
    whyStudentsShouldCare: 'Accidentally pushing `.env` files with API keys to public GitHub repos is the #1 mistake junior developers make. Doppler eliminates leaked keys permanently.',
    whatYouCanBuild: [
      'Secure multi-environment secret pipelines (Dev, Staging, Production)',
      'Automated secret rotation flows for team hackathons',
      'Zero-leak CI/CD pipelines injecting keys at runtime'
    ],
    exampleUseCases: [
      'Running `doppler run -- npm start` to safely inject environment variables without saving files on disk',
      'Syncing API keys automatically with team members on a hackathon project',
      'Injecting secret tokens into GitHub Actions without manual copy-pasting'
    ],
    howToClaim: [
      'Follow the Doppler link on education.github.com/pack',
      'Sign in via GitHub OAuth',
      'Claim the Team tier promotion on your Doppler workplace settings'
    ],
    requirements: [
      'Verified GitHub Student account'
    ],
    limitations: [
      'Personal and academic educational usage only'
    ],
    relatedOffers: ['mongodb', 'clerk', 'digitalocean', 'github-pro'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.doppler.com/github-students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Preventing API key leaks & team secret management',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'security_infrastructure',
    verificationStatus: 'verified'
  },
  {
    id: '1password',
    name: '1Password',
    category: 'Security & Analytics',
    description: 'Top-tier password and passkey manager with developer CLI, SSH key management, and biometric unlock.',
    benefit: '1 year of free 1Password individual membership + 1Password Developer Tools.',
    duration: '1 year from activation',
    eligibility: 'Verified GitHub Student Developer Pack accounts.',
    officialUrl: 'https://1password.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#1password',
    whatItDoes: 'Generates and stores strong unique passwords, manages passkeys, and integrates directly with Git to sign your commits using biometric fingerprint or Face ID via the 1Password SSH agent.',
    whyStudentsShouldCare: 'Secures your GitHub, university, and server passwords from credential stuffing attacks. Plus, you can sign every git commit with an SSH key stored safely inside your device Secure Enclave.',
    whatYouCanBuild: [
      'Cryptographically verified GitHub commits signed via SSH',
      'Automated CLI scripts fetching tokens via `op run`',
      'Secure storage vaults for student group accounts'
    ],
    exampleUseCases: [
      'Signing Git commits with Touch ID / Windows Hello through 1Password',
      'Storing server root passwords and database admin credentials safely',
      'Generating 32-character randomized passwords for every new developer account'
    ],
    howToClaim: [
      'Click 1Password in GitHub Education Pack',
      'Sign up for a new 1Password account through the student landing page',
      'Your account is credited with a 1-year free subscription waiver'
    ],
    requirements: [
      'New or eligible student 1Password account'
    ],
    limitations: [
      'Individual account tier; renewable terms depend on continued promotion policies'
    ],
    relatedOffers: ['doppler', 'github-pro'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://1password.com/students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Personal cybersecurity & SSH commit signing',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: '1 year duration from activation date.',
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: true,
    communityPriorityCategory: 'security_infrastructure',
    verificationStatus: 'verified'
  },
  {
    id: 'requestly',
    name: 'Requestly',
    category: 'Developer Tools',
    description: 'Developer tool to intercept, inspect, mock, and modify HTTP network requests and responses in browsers and apps.',
    benefit: '1 year free of Requestly Professional plan (valued at $270).',
    duration: '1 year from activation',
    eligibility: 'Students with verified GitHub Student Developer Pack.',
    officialUrl: 'https://requestly.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#requestly',
    whatItDoes: 'Requestly runs as a browser extension and desktop proxy to redirect URLs, mock API responses, inject custom CSS/JS scripts, and test how frontends behave with slow or failing backend endpoints.',
    whyStudentsShouldCare: 'You can test how your frontend responds to edge-case errors (like HTTP 500 or 403) or mock incomplete backend endpoints without waiting for your teammate to finish writing the API.',
    whatYouCanBuild: [
      'Mock API prototypes enabling frontend work before backend is ready',
      'Network delay simulations for testing loading spinners',
      'Custom debug injection rules for testing third-party websites'
    ],
    exampleUseCases: [
      'Mocking a Stripe payment response to test checkout UI locally',
      'Simulating a 3G network latency to check skeleton loading states',
      'Redirecting production CDN scripts to your localhost development bundle'
    ],
    howToClaim: [
      'Follow Requestly link on GitHub Pack',
      'Install Requestly extension or desktop app and sign in with GitHub',
      'The 1-year Professional license activates automatically on your profile'
    ],
    requirements: [
      'GitHub Student Pack verified account'
    ],
    limitations: [
      'Valid for 1 year from activation date'
    ],
    relatedOffers: ['jetbrains', 'sentry', 'clerk'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://requestly.com/pricing',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Mocking APIs & debugging HTTP requests',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Valid for 1 year from activation.',
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'security_infrastructure',
    verificationStatus: 'verified'
  },
  {
    id: 'codecov',
    name: 'Codecov',
    category: 'Developer Tools',
    description: 'Automated code coverage analysis tool integrating directly with GitHub pull requests.',
    benefit: 'Free access to Codecov for all public and private repositories while you are a student.',
    duration: 'While enrolled as a student',
    eligibility: 'GitHub Student Developer Pack verified users.',
    officialUrl: 'https://codecov.io',
    githubOfferUrl: 'https://education.github.com/pack/offers#codecov',
    whatItDoes: 'Codecov ingests unit test coverage reports and comments directly on your GitHub pull requests, highlighting exactly which lines of code were touched by tests and which were missed.',
    whyStudentsShouldCare: 'It trains you in professional test-driven development (TDD) discipline and prevents code regressions before you merge features.',
    whatYouCanBuild: [
      'Automated code quality gates on GitHub pull requests',
      'Coverage tracking badges for your open-source repo READMEs',
      'Comprehensive unit and integration test reports'
    ],
    exampleUseCases: [
      'Blocking pull requests that reduce test coverage below 80%',
      'Visualizing untested error handlers in Python or TypeScript files',
      'Adding dynamic SVG coverage badges to project repositories'
    ],
    howToClaim: [
      'Go to Codecov via GitHub Education',
      'Log in with your GitHub account and authorize repository access',
      'Add the Codecov Action or token to your GitHub Actions test workflow'
    ],
    requirements: [
      'GitHub Student Developer Pack'
    ],
    limitations: [
      'Requires unit tests to be configured in your CI pipeline to generate reports'
    ],
    relatedOffers: ['github-pro', 'codescene', 'sentry'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://codecov.io',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Automated unit test coverage & CI/CD',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'security_infrastructure',
    verificationStatus: 'verified'
  },
  {
    id: 'codescene',
    name: 'CodeScene',
    category: 'Developer Tools',
    description: 'Behavioral code analysis tool visualizing technical debt, code hotspots, and architectural bottlenecks.',
    benefit: 'Free CodeScene student account to analyze private and public GitHub repositories.',
    duration: 'While enrolled as a student',
    eligibility: 'Verified GitHub Student Developer Pack accounts.',
    officialUrl: 'https://codescene.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#codescene',
    whatItDoes: 'CodeScene analyzes git commit history, churn, and team collaboration patterns to predict where bugs are most likely to appear and identify complex code hotspots.',
    whyStudentsShouldCare: 'Static linters only check syntax rules. CodeScene analyzes how your team interacts with the codebase over time to identify risky spaghetti code before it causes outages.',
    whatYouCanBuild: [
      'Interactive visual code city heatmaps of your project architecture',
      'Automated code health metrics on GitHub pull requests',
      'Technical debt reduction roadmaps for capstone projects'
    ],
    exampleUseCases: [
      'Detecting developer knowledge silos in team course projects',
      'Spotting complex code hotspots that are changed frequently and cause bugs',
      'Generating visual software engineering reports for academic papers'
    ],
    howToClaim: [
      'Select CodeScene in the GitHub Student Developer Pack',
      'Authenticate with GitHub OAuth',
      'Connect the private or public repositories you want to analyze'
    ],
    requirements: [
      'GitHub Student status',
      'Git repository with commit history'
    ],
    limitations: [
      'Requires sufficient commit history to generate meaningful behavioral insights'
    ],
    relatedOffers: ['github-pro', 'codecov', 'jetbrains'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://codescene.com/pricing',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Code health, architectural metrics & technical debt',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: false,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'security_infrastructure',
    verificationStatus: 'verified'
  },
  {
    id: 'icons8',
    name: 'Icons8',
    category: 'Design',
    description: 'Extensive library of curated design assets including vector icons, illustrations, photos, and music.',
    benefit: '3 months of free access to Icons8 Complete subscription (icons, photos, illustrations, and music tracks).',
    duration: '3 months from redemption',
    eligibility: 'Verified GitHub Student Developer Pack members.',
    officialUrl: 'https://icons8.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#icons8',
    whatItDoes: 'Provides high-resolution PNG, SVG, and EPS icons across dozens of consistent design styles (iOS, Fluent, Material, 3D), plus royalty-free stock photos and background music.',
    whyStudentsShouldCare: 'An amateur project with mismatched icons looks sloppy. Icons8 gives your hackathon apps and portfolio a polished, unified aesthetic in minutes.',
    whatYouCanBuild: [
      'Pixel-consistent web navigation systems',
      'Sleek landing page graphics with custom vector illustrations',
      'Mobile app UI components in Figma or React Native'
    ],
    exampleUseCases: [
      'Downloading 50 matching SVG icons for a course project dashboard',
      'Grabbing transparent PNG illustrations for landing page empty states',
      'Adding royalty-free UI sound effects to a mobile game demo'
    ],
    howToClaim: [
      'Navigate to Icons8 on the GitHub Student Pack portal',
      'Sign in using GitHub OAuth',
      'The 3-month Complete subscription unlocks automatically on your Icons8 account'
    ],
    requirements: [
      'GitHub Student Developer Pack verified account'
    ],
    limitations: [
      '3-month subscription window',
      'Assets downloaded are subject to personal and educational licensing terms'
    ],
    relatedOffers: ['iconscout', 'bootstrap-studio', 'visme', 'github-pages'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://icons8.com',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Polished UI icons, illustrations & graphics',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Valid for 3 months from redemption date.',
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'design',
    verificationStatus: 'verified'
  },
  {
    id: 'iconscout',
    name: 'IconScout',
    category: 'Design',
    description: 'Design asset marketplace offering over 9 million vector icons, 3D assets, Lottie animations, and illustrations.',
    benefit: '1 year of free access to IconScout Student plan with 60 premium asset downloads per month.',
    duration: '1 year from activation',
    eligibility: 'Students verified with GitHub Student Developer Pack.',
    officialUrl: 'https://iconscout.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#iconscout',
    whatItDoes: 'Gives developers and designers ready-to-use vector icons, customizable 3D graphics, and interactive Lottie animations with plugins for Figma, React, and VS Code.',
    whyStudentsShouldCare: 'Lottie animations and 3D graphics make modern web apps feel alive. You can customize colors to match your brand directly in browser before downloading.',
    whatYouCanBuild: [
      'Interactive onboarding flows with animated Lottie illustrations',
      'Modern 3D landing page hero graphics',
      'Figma design systems with linked vector icon sets'
    ],
    exampleUseCases: [
      'Adding an animated checkmark or loading spinner using Lottie in React',
      'Exporting color-customized 3D tech illustrations for a pitch deck',
      'Downloading SVG icons directly into Figma with the IconScout plugin'
    ],
    howToClaim: [
      'Access IconScout from GitHub Education Pack',
      'Sign in using GitHub OAuth',
      'Your monthly 60-download student quota begins immediately for 1 year'
    ],
    requirements: [
      'GitHub Student Pack verified account'
    ],
    limitations: [
      '60 premium downloads per month limit (unused downloads do not roll over)',
      '1 year validity period'
    ],
    relatedOffers: ['icons8', 'bootstrap-studio', 'visme'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://iconscout.com/github-students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Lottie animations & 3D website assets',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Valid for 1 year from redemption.',
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'design',
    verificationStatus: 'verified'
  },
  {
    id: 'bootstrap-studio',
    name: 'Bootstrap Studio',
    category: 'Design',
    description: 'Powerful visual desktop application for designing and prototyping responsive websites using Bootstrap and Tailwind.',
    benefit: 'Free individual desktop license for Bootstrap Studio while you are a student.',
    duration: 'Free license while you maintain verified student status',
    eligibility: 'Students with an active GitHub Student Developer Pack.',
    officialUrl: 'https://bootstrapstudio.io',
    githubOfferUrl: 'https://education.github.com/pack/offers#bootstrapstudio',
    whatItDoes: 'Combines the speed of visual drag-and-drop website builders with complete code control, producing clean, production-ready semantic HTML, CSS, and JavaScript with no lock-in.',
    whyStudentsShouldCare: 'You can rapidly assemble a responsive landing page or portfolio in 30 minutes and export raw HTML/CSS to host on GitHub Pages.',
    whatYouCanBuild: [
      'Responsive landing pages and product showcases',
      'Portfolio websites and personal resumes',
      'Rapid prototype mockups for hackathon presentations'
    ],
    exampleUseCases: [
      'Designing a mobile-first responsive navigation bar visually',
      'Previewing layouts simultaneously on simulated phones, tablets, and desktops',
      'Exporting optimized HTML/CSS directly to a GitHub Pages repository'
    ],
    howToClaim: [
      'Click Bootstrap Studio from GitHub Pack',
      'Verify with your student GitHub credentials',
      'Receive a personal desktop license key via email',
      'Download the desktop app for Windows, macOS, or Linux and enter the license'
    ],
    requirements: [
      'Active GitHub Student Developer Pack'
    ],
    limitations: [
      'Desktop software installation required',
      'License is bound to individual student use'
    ],
    relatedOffers: ['github-pages', 'namecheap', 'icons8'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://bootstrapstudio.io/pages/student-license',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Visual responsive web design & rapid landing pages',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'design',
    verificationStatus: 'verified'
  },
  {
    id: 'visme',
    name: 'Visme',
    category: 'Design',
    description: 'All-in-one visual content creation platform for presentations, infographics, and technical diagrams.',
    benefit: '3 months of free access to Visme Starter plan.',
    duration: '3 months from redemption',
    eligibility: 'GitHub Student Developer Pack verified students.',
    officialUrl: 'https://www.visme.co',
    githubOfferUrl: 'https://education.github.com/pack/offers#visme',
    whatItDoes: 'Creates interactive presentations, animated charts, data infographics, and social graphics with professional typography and export to PDF, HTML5, or video.',
    whyStudentsShouldCare: 'When presenting your senior capstone project or hackathon pitch to judges, clean slides and infographics make your technical work stand out.',
    whatYouCanBuild: [
      'Hackathon demo slide decks and pitch presentations',
      'System architecture infographics and flow diagrams',
      'Social media promotional banners for student clubs'
    ],
    exampleUseCases: [
      'Designing an interactive slide deck for a final computer science presentation',
      'Visualizing complex survey data as an animated infographic',
      'Exporting high-resolution graphics for project documentation'
    ],
    howToClaim: [
      'Select Visme on the GitHub Education Pack directory',
      'Authenticate with your verified student GitHub account',
      'The 3-month Starter plan activates on your Visme workspace'
    ],
    requirements: [
      'GitHub Student Pack verified account'
    ],
    limitations: [
      '3-month validity period from activation'
    ],
    relatedOffers: ['icons8', 'iconscout', 'bootstrap-studio'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.visme.co',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Pitch decks, infographics & presentations',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Active for 3 months from redemption date.',
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'design',
    verificationStatus: 'verified'
  },
  {
    id: 'namecheap',
    name: 'Namecheap',
    category: 'Domains',
    description: 'Leading domain registrar and web services provider.',
    benefit: '1 year of a free .ME domain name registration + free PositiveSSL certificate for 1 year.',
    duration: '1 year free domain and SSL certificate',
    eligibility: 'Students verified through GitHub Student Developer Pack.',
    officialUrl: 'https://www.namecheap.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#namecheap',
    whatItDoes: 'Registers a personalized top-level `.me` domain name (e.g. `yourname.me`) and provisions an SSL certificate to ensure secure HTTPS connections.',
    whyStudentsShouldCare: 'A custom `.me` domain looks infinitely more professional on your resume than a generic sub-domain URL. You can link it directly to your GitHub Pages portfolio.',
    whatYouCanBuild: [
      'Custom personal portfolio URL (e.g. johnsmith.me)',
      'Professional branded email forwarders',
      'Live project showcases with valid SSL encryption'
    ],
    exampleUseCases: [
      'Pointing your personal `.me` domain to your GitHub Pages repository',
      'Printing your custom web URL on business cards or resume headers',
      'Securing custom web endpoints with free PositiveSSL'
    ],
    howToClaim: [
      'Click Namecheap in the GitHub Student Developer Pack',
      'Search for your desired available `.me` domain name',
      'Add the domain to cart ($0.00 with promo code applied)',
      'Check out and configure your DNS records to point to GitHub Pages'
    ],
    requirements: [
      'Verified GitHub student status',
      'Namecheap account'
    ],
    limitations: [
      'Free for first year only; standard renewal rates apply after 12 months',
      'Applies to `.me` extension only (premium domains excluded)'
    ],
    relatedOffers: ['github-pages', 'tech-domain', 'name-com', 'simpleanalytics'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://nc.me',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Personal portfolio domain name (.me)',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Free for 1 year. Set a calendar reminder before the 12-month mark to decide whether to renew.',
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: true,
    communityPriorityCategory: 'start_here',
    verificationStatus: 'verified'
  },
  {
    id: 'tech-domain',
    name: '.TECH Domains',
    category: 'Domains',
    description: 'Top-level domain (TLD) extension tailored specifically for tech startups, developers, and engineers.',
    benefit: '1 free .TECH domain registration for 1 year + free email forwarding and privacy protection.',
    duration: '1 year free domain registration',
    eligibility: 'GitHub Student Developer Pack verified students.',
    officialUrl: 'https://get.tech',
    githubOfferUrl: 'https://education.github.com/pack/offers#techdomain',
    whatItDoes: 'Gives you a distinctive `.tech` domain extension (e.g. `alexdev.tech` or `hackathonproject.tech`) with WHOIS privacy protection.',
    whyStudentsShouldCare: 'Perfect for naming side projects, developer tools, or hackathon apps that need a distinct tech-oriented web address.',
    whatYouCanBuild: [
      'Dedicated project website for an open-source tool',
      'Branded hackathon project URL',
      'Developer blog or tech tutorial publication'
    ],
    exampleUseCases: [
      'Launching an AI project on `smartassistant.tech`',
      'Hosting university robotics club homepage',
      'Setting up professional forwarding emails (e.g., `contact@mysite.tech`)'
    ],
    howToClaim: [
      'Click the .TECH link from GitHub Education Pack',
      'Search for an available standard `.tech` domain',
      'Apply the exclusive student promo voucher at checkout for $0 total'
    ],
    requirements: [
      'Active GitHub student verification'
    ],
    limitations: [
      'Free for 1 year; standard renewal fees apply in year 2',
      'Premium high-value single-word domains are excluded'
    ],
    relatedOffers: ['namecheap', 'name-com', 'github-pages'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://get.tech/students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Hackathon apps & tech startup project domains',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Free for 1st year.',
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'start_here',
    verificationStatus: 'verified'
  },
  {
    id: 'name-com',
    name: 'Name.com',
    category: 'Domains',
    description: 'ICANN-accredited domain registrar and cloud DNS provider.',
    benefit: '1 free domain registration (from a selection of 25+ domain extensions including .live, .news, .studio) + free SSL and Advanced DNS.',
    duration: '1 year free domain registration',
    eligibility: 'Verified GitHub Student Developer Pack members.',
    officialUrl: 'https://www.name.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#namecom',
    whatItDoes: 'Allows students to register alternative domain extensions (such as `.live`, `.social`, `.software`) for streaming, creative, or social projects.',
    whyStudentsShouldCare: 'Expands your domain options beyond standard extensions when your favorite name is already taken on `.me` or `.tech`.',
    whatYouCanBuild: [
      'Live streaming event website (.live)',
      'Creative portfolio showcase (.studio or .art)',
      'Community student publication'
    ],
    exampleUseCases: [
      'Launching a campus live stream showcase on `campusshow.live`',
      'Managing custom DNS records with TTL controls for rapid cloud migrations',
      'Creating subdomains for API endpoints and testing servers'
    ],
    howToClaim: [
      'Navigate to Name.com via GitHub Education',
      'Sign in via GitHub student authentication',
      'Select an eligible extension domain and checkout at zero charge'
    ],
    requirements: [
      'GitHub Student Pack verified status'
    ],
    limitations: [
      'Free for first year only',
      'Applies to designated eligible TLDs in the promotion'
    ],
    relatedOffers: ['namecheap', 'tech-domain', 'github-pages'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.name.com/partner/github-students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Creative domain extensions (.live, .studio)',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Free for 1 year.',
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'start_here',
    verificationStatus: 'verified'
  },
  {
    id: 'deepnote',
    name: 'Deepnote',
    category: 'AI & Machine Learning',
    description: 'Collaborative cloud Jupyter data notebook with AI co-pilot, SQL queries, and reactive execution.',
    benefit: 'Free Deepnote Team plan with unlimited team members, shared projects, and GPU/vCPU hardware tiers.',
    duration: 'While enrolled as a student',
    eligibility: 'Students verified with GitHub Student Developer Pack.',
    officialUrl: 'https://deepnote.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#deepnote',
    whatItDoes: 'Deepnote is Google Docs for data science: real-time collaborative Jupyter notebooks in the cloud where multiple students can code Python, execute SQL, and visualize plots together in real-time.',
    whyStudentsShouldCare: 'No local Python environment headaches. You and your lab partners can work in the exact same notebook simultaneously without git merge conflicts on `.ipynb` files.',
    whatYouCanBuild: [
      'Collaborative machine learning model training pipelines',
      'Interactive data exploration dashboards with published charts',
      'SQL query workflows connecting directly to databases'
    ],
    exampleUseCases: [
      'Pair programming on Python data analysis assignments with classmates',
      'Connecting directly to MongoDB Atlas or PostgreSQL to query live datasets',
      'Publishing interactive data articles and graphs with public sharing links'
    ],
    howToClaim: [
      'Access Deepnote via the GitHub Student Developer Pack directory',
      'Log in with your verified student GitHub credentials',
      'Your workspace is upgraded to the Deepnote Education Team tier with $0 billing'
    ],
    requirements: [
      'GitHub Student Pack verified account'
    ],
    limitations: [
      'Hardware usage on intensive GPU instances is subject to fair-use academic limits'
    ],
    relatedOffers: ['datacamp', 'mongodb', 'github-pro'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://deepnote.com/education',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Collaborative Python data science & AI notebooks',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'learn',
    verificationStatus: 'verified'
  },
  {
    id: 'simpleanalytics',
    name: 'Simple Analytics',
    category: 'Security & Analytics',
    description: 'Privacy-first, cookieless website analytics service without intrusive tracking or cookie banners.',
    benefit: '1 year of free Simple plan access (tracks up to 10 websites with 100,000 pageviews/month).',
    duration: '1 year free access',
    eligibility: 'GitHub Student Developer Pack verified students.',
    officialUrl: 'https://simpleanalytics.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#simpleanalytics',
    whatItDoes: 'Measures page views, referrers, top pages, and device types without collecting any personal data or IP addresses, fully complying with GDPR and CCPA out-of-the-box.',
    whyStudentsShouldCare: 'Google Analytics is complex, bloated, and legally requires annoying cookie consent popups. Simple Analytics is a clean, beautiful 1-page dashboard that loads in under 3KB.',
    whatYouCanBuild: [
      'Privacy-compliant portfolio traffic counters',
      'Referral traffic tracking for student startup launches',
      'Embeddable public pageview badges'
    ],
    exampleUseCases: [
      'Seeing which recruiters or company domains visited your personal portfolio',
      'Tracking conversion rates on hackathon landing pages without cookie banners',
      'Sharing transparent public analytics dashboards with open-source project users'
    ],
    howToClaim: [
      'Navigate to Simple Analytics from the GitHub Pack offer page',
      'Sign in with GitHub student OAuth',
      'Add your custom domain and insert the single `<script>` snippet into your `<head>` tag'
    ],
    requirements: [
      'Active GitHub Education account'
    ],
    limitations: [
      '100,000 page views per month cap (more than enough for personal portfolios)',
      '1 year duration'
    ],
    relatedOffers: ['github-pages', 'namecheap', 'tech-domain'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://simpleanalytics.com/students',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Privacy-friendly portfolio & blog analytics',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: 'Valid for 1 year from activation.',
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: false,
    communityPriorityCategory: 'testing_monitoring',
    verificationStatus: 'verified'
  },
  {
    id: 'termius',
    name: 'Termius',
    category: 'Developer Tools',
    description: 'Modern, cross-platform SSH client with encrypted key sync, port forwarding, and mobile terminal.',
    benefit: '2 years of free Termius Pro plan (SSH encrypted vault, multi-device sync, and SFTP file client).',
    duration: '2 years (24 months) free access',
    eligibility: 'Verified GitHub Student Developer Pack students.',
    officialUrl: 'https://termius.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#termius',
    whatItDoes: 'Termius makes managing remote Linux servers delightful: end-to-end encrypted sync of SSH keys, snippets, and connection configs across macOS, Windows, Linux, iOS, and Android.',
    whyStudentsShouldCare: 'You can SSH into your DigitalOcean or university lab server directly from your phone or tablet to reboot a crashed service while on the bus.',
    whatYouCanBuild: [
      'Centralized multi-server management dashboard',
      'Secure remote terminal setups with biometric unlock',
      'Automated terminal snippet library for rapid server provisioning'
    ],
    exampleUseCases: [
      'Reconnecting to a remote server session seamlessly when switching Wi-Fi networks',
      'Using the visual SFTP tab to upload files to a remote Linux Droplet',
      'Managing port tunnels and local port forwarding with a visual UI'
    ],
    howToClaim: [
      'Open Termius through the GitHub Education directory',
      'Sign in via your GitHub student account',
      'Termius Pro activates for 2 years across all logged-in devices'
    ],
    requirements: [
      'GitHub Student Pack verified account'
    ],
    limitations: [
      'Academic and personal non-commercial server administration only'
    ],
    relatedOffers: ['digitalocean', 'heroku', '1password'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://termius.com/education',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: SSH server management across laptop & phone',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: false,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'security_infrastructure',
    verificationStatus: 'verified'
  },
  {
    id: 'gitkraken',
    name: 'GitKraken',
    category: 'Developer Tools',
    description: 'Visual Git GUI client, terminal, and workspace manager for visualizing commit histories and resolving conflicts.',
    benefit: '6 months free of GitKraken Student plan, followed by an 80% student renewal discount.',
    duration: '6 months free + renewal discount while a student',
    eligibility: 'Verified GitHub Student Developer Pack students.',
    officialUrl: 'https://www.gitkraken.com',
    githubOfferUrl: 'https://education.github.com/pack/offers#gitkraken',
    whatItDoes: 'Provides an intuitive visual commit tree where you can drag and drop to rebase, visualize branching strategies, and resolve tricky merge conflicts visually side-by-side.',
    whyStudentsShouldCare: 'Git merge conflicts can be terrifying for students. GitKraken shows both conflicting files side-by-side with checkboxes to pick changes without corrupting your code.',
    whatYouCanBuild: [
      'Clean, readable git commit workflows',
      'Visual merge conflict resolution pipelines',
      'Integrated pull request reviews directly within your desktop Git client'
    ],
    exampleUseCases: [
      'Resolving a 50-line merge conflict safely with a visual 3-way diff tool',
      'Interactive rebasing to squash messy "fixed typo" commits before submitting homework',
      'Visualizing complex feature branch workflows across team projects'
    ],
    howToClaim: [
      'Click GitKraken in the GitHub Student Developer Pack',
      'Download GitKraken Client and sign in with GitHub OAuth',
      'The student license applies automatically to your profile'
    ],
    requirements: [
      'GitHub Student Developer Pack verified account'
    ],
    limitations: [
      '6 months of full free Pro access; requires paid renewal (with 80% student discount) afterward'
    ],
    relatedOffers: ['github-pro', 'jetbrains', 'termius'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.gitkraken.com/student-developer-pack',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Visual Git commit tree & easy merge conflict solving',
    requiresCreditCard: false,
    requiresGithubAuthFirst: true,
    isTimeSensitive: true,
    expirationNote: '6 months free, then 80% educational discount applies.',
    bestForBeginners: true,
    bestForBuilding: true,
    bestForLearning: true,
    bestForStartups: false,
    worthClaimingFirst: false,
    communityPriorityCategory: 'start_here',
    verificationStatus: 'verified'
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'Productivity',
    description: 'Connected collaborative workspace for notes, docs, task management, and personal knowledge wikis.',
    benefit: 'Free Notion Plus plan (with unlimited file uploads, version history, and unlimited page blocks) for students.',
    duration: 'While you have a valid school email address',
    eligibility: 'Any student or educator with an active educational institution email address.',
    officialUrl: 'https://www.notion.so',
    githubOfferUrl: 'https://education.github.com/pack/offers#notion',
    whatItDoes: 'Combines notes, kanban task boards, databases, calendar roadmaps, and wikis into a single, deeply customizable workspace.',
    whyStudentsShouldCare: 'The ultimate tool for organizing course notes, hackathon planning, job application trackers, and software engineering architecture docs.',
    whatYouCanBuild: [
      'Complete computer science study wiki with code snippets and LaTeX math formulas',
      'Interactive tech job and internship application tracker with interview stages',
      'Sprint backlog and Kanban board for student engineering teams'
    ],
    exampleUseCases: [
      'Organizing lecture notes with formatted code blocks and toggle lists',
      'Managing tasks for your capstone project team with assignee tags and deadlines',
      'Publishing a public Notion page as an instant live project roadmap or documentation site'
    ],
    howToClaim: [
      'Sign up at notion.so with your school (.edu or campus) email address',
      'Navigate to Settings & Members > Upgrade',
      'Click "Get free education plan" to upgrade your workspace to Notion Plus for $0'
    ],
    requirements: [
      'School-issued email address (.edu or university domain)'
    ],
    limitations: [
      'Notion AI add-on is billed separately; student plan covers standard Notion Plus workspace'
    ],
    relatedOffers: ['1password', 'github-pro'],
    lastVerified: '2026-03-01',
    sourceUrls: [
      'https://www.notion.so/product/notion-for-education',
      'https://education.github.com/pack'
    ],
    recommendedAudience: 'Best for: Course notes, sprint planning & internship trackers',
    requiresCreditCard: false,
    requiresGithubAuthFirst: false,
    bestForBeginners: true,
    bestForBuilding: false,
    bestForLearning: true,
    bestForStartups: true,
    worthClaimingFirst: true,
    communityPriorityCategory: 'start_here',
    verificationStatus: 'verified'
  }
];
