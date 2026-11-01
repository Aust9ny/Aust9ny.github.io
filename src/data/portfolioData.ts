import { Project, SkillCategory, ExperienceItem, ProfileInfo } from '../types';

export const portfolioProfile: ProfileInfo = {
  name: 'Sippakorn',
  role: 'Full-Stack Developer & Software Engineer',
  heroHeadline: 'Building High-Performance Web Applications & Scalable Digital Systems.',
  heroSubtitle:
    'Passionate software engineer specializing in modern React ecosystems, Node.js distributed backends, clean architecture, and intuitive user experiences that deliver measurable impact.',
  bioShort:
    'Experienced Full-Stack Developer with a track record of architecting end-to-end web platforms, REST/GraphQL APIs, and responsive frontends with a focus on speed, reliability, and maintainability.',
  bioLong: [
    'I build web platforms where engineering rigor meets thoughtful human-centric design. Over the past 4+ years, I have architected and deployed production web applications handling thousands of daily active users.',
    'My primary toolkit centers around TypeScript, React, Next.js, Node.js, Express, PostgreSQL, Redis, and modern cloud deployment pipelines. I thrive in fast-paced environments where ownership, problem-solving, and clean, readable code matter.',
    'When not coding, I enjoy exploring emerging AI developer tooling, contributing to open-source software, and crafting high-utility digital products.'
  ],
  location: 'Bangkok, Thailand (Available Worldwide / Remote)',
  availability: 'Available for Full-time Roles & High-Impact Contracts',
  email: 'sippakorn.kan1@gmail.com',
  github: 'https://github.com/Aust9ny',
  linkedin: 'https://linkedin.com/in/sippakorn',
  stats: {
    yearsExp: '3+ Years',
    completedProjects: '10+ Projects',
    satisfactionRate: '99.8%',
    codeCommits: '1.2K+'
  }
};

export const portfolioProjects: Project[] = [
  {
    id: 'moneymind',
    title: 'MoneyMind Financial Management',
    tagline: 'Personal financial intelligence platform for tracking income, expenses, and investment portfolios',
    category: 'Full-Stack',
    featured: true,
    year: '2025',
    accentColor: 'emerald',
    description:
      'A software engineering financial management application designed to give users clear visibility into spending patterns, budget limits, and financial goals with real-time analytics.',
    challenge:
      'Structuring relational data models for multi-currency transactions, recurring payments, and categorization while maintaining snappy sub-100ms dashboard queries.',
    solution:
      'Designed optimized PostgreSQL schemas, decoupled transactional ingestion from aggregations, and built an intuitive, responsive frontend with interactive visual charts.',
    keyFeatures: [
      'Automated transaction categorization and monthly budgeting limits',
      'Interactive cashflow charts and net worth progression metrics',
      'Multi-currency balance tracking with automatic exchange rate conversions',
      'Encrypted data storage and strict user data privacy standards'
    ],
    techStack: {
      frontend: ['TypeScript', 'React', 'Tailwind CSS', 'Chart.js'],
      backend: ['Node.js', 'Express', 'REST API'],
      database: ['PostgreSQL', 'Prisma ORM'],
      devops: ['Docker', 'GitHub Actions']
    },
    metrics: [
      { label: 'GitHub Stars', value: '⭐ 2 Stars' },
      { label: 'Primary Stack', value: 'TypeScript & Node' },
      { label: 'Status', value: 'Production Ready' }
    ],
    githubUrl: 'https://github.com/Aust9ny/MoneyMind'
  },
  {
    id: 'hotel-suite',
    title: 'Hotel Management & Reservation Suite',
    tagline: 'Decoupled hospitality platform with Astro SSR frontend and Python REST backend',
    category: 'Full-Stack',
    featured: true,
    year: '2026',
    accentColor: 'blue',
    description:
      'A modern hospitality platform featuring an ultra-fast Astro frontend for guest reservations and a high-performance Python backend for room inventory, pricing rules, and booking confirmation.',
    challenge:
      'Preventing race conditions during simultaneous booking attempts for identical room dates while keeping the public booking client lightweight and SEO-friendly.',
    solution:
      'Utilized Astro for ultra-fast server-rendered guest catalog pages, paired with transactional booking locks in the Python backend.',
    keyFeatures: [
      'Interactive real-time room availability calendar with date pickers',
      'High-performance static catalog pages with dynamic booking flow',
      'Comprehensive room tier, amenity, and dynamic pricing management',
      'Automated booking confirmation and reservation state tracking'
    ],
    techStack: {
      frontend: ['Astro', 'TypeScript', 'Tailwind CSS'],
      backend: ['Python', 'FastAPI / REST', 'JSON Services'],
      database: ['PostgreSQL', 'SQLAlchemy'],
      devops: ['Docker', 'Vite']
    },
    metrics: [
      { label: 'Architecture', value: 'Astro + Python' },
      { label: 'Frontend Repo', value: 'hotel-front' },
      { label: 'Backend Repo', value: 'hotel-back' }
    ],
    githubUrl: 'https://github.com/Aust9ny/hotel-front',
    liveUrl: 'https://github.com/Aust9ny/hotel-back'
  },
  {
    id: 'dealer-web',
    title: 'Dealer Web Portal',
    tagline: 'Automotive dealership inventory management and customer quotation dashboard',
    category: 'Frontend',
    featured: true,
    year: '2025',
    accentColor: 'purple',
    description:
      'A comprehensive web application tailored for automotive dealerships to manage car inventory, configure vehicle specifications, and generate customer quotations with seamless workflows.',
    challenge:
      'Designing complex multi-step vehicle configuration forms with dynamic pricing dependencies and instant validation across varied screen sizes.',
    solution:
      'Engineered modular Vue 3 components with reactive state management, client-side caching for vehicle specs, and responsive Neo-brutalist data tables.',
    keyFeatures: [
      'Real-time vehicle inventory filtering by make, model, year, and fuel type',
      'Dynamic quotation calculation with financing and down-payment calculators',
      'Dealer stock status indicators and reservation management',
      'Intuitive, mobile-responsive dashboard designed for sales staff'
    ],
    techStack: {
      frontend: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Pinia'],
      backend: ['REST API', 'JSON Services'],
      database: ['PostgreSQL / MySQL'],
      devops: ['Vite', 'GitHub Actions']
    },
    metrics: [
      { label: 'Framework', value: 'Vue.js' },
      { label: 'Design', value: 'Mobile-first Bento' },
      { label: 'Interface', value: 'Inventory Dashboard' }
    ],
    githubUrl: 'https://github.com/Aust9ny/dealer-web'
  },
  {
    id: 'ai-usage-bar',
    title: 'AI Usage Bar (macOS Native App)',
    tagline: 'Native lightweight macOS menu bar utility for monitoring LLM token consumption and API limits',
    category: 'AI & Tools',
    featured: true,
    year: '2025',
    accentColor: 'yellow',
    description:
      'A native Swift macOS application residing in the menu bar that monitors real-time AI token usage, API quotas, and billing telemetry across major LLM providers.',
    challenge:
      'Achieving zero background CPU drain while polling multiple AI developer API endpoints and displaying clear, glanceable HUD notifications.',
    solution:
      'Developed in Swift using AppKit/SwiftUI with lightweight asynchronous background URLSessions, low-frequency smart polling, and native macOS aesthetics.',
    keyFeatures: [
      'Glanceable real-time token count and billing quota status in menu bar',
      'Customizable usage thresholds with native macOS notification alerts',
      'Provider support across OpenAI, Anthropic, and Google Gemini API keys',
      'Ultra-low memory footprint (<25MB) and open-source MIT license'
    ],
    techStack: {
      frontend: ['Swift', 'SwiftUI', 'AppKit'],
      backend: ['Native macOS Services', 'Async/Await'],
      database: ['Keychain Services', 'UserDefaults'],
      devops: ['Xcode', 'GitHub Open Source']
    },
    metrics: [
      { label: 'Platform', value: 'macOS Native' },
      { label: 'Language', value: 'Swift' },
      { label: 'License', value: 'MIT Open Source' }
    ],
    githubUrl: 'https://github.com/Aust9ny/ai-usage-bar'
  },
  {
    id: 'raid-activist',
    title: 'Raid Activist Multi-Platform Suite',
    tagline: 'Coordinated tactical group events, raid scheduling, and community engagement platform',
    category: 'Full-Stack',
    featured: true,
    year: '2025',
    accentColor: 'rose',
    description:
      'An ecosystem connecting a Vue.js web client, a TypeScript cross-platform mobile application, and a Node.js backend to organize community events, raid schedules, and role management.',
    challenge:
      'Synchronizing live event RSVPs and role assignments across concurrent web and mobile users with minimal latency.',
    solution:
      'Architected a decoupled micro-architecture with a Node.js REST API serving both the Vue web portal and the mobile app with consistent data contracts.',
    keyFeatures: [
      'Unified user profiles and authentication across Web and Mobile apps',
      'Interactive event scheduling with role assignments and attendance rosters',
      'Cross-platform responsive design optimized for quick mobile check-ins',
      'Role-based community administration and raid leaderboard tracking'
    ],
    techStack: {
      frontend: ['Vue.js', 'TypeScript', 'Mobile App'],
      backend: ['Node.js', 'Express', 'JavaScript'],
      database: ['PostgreSQL / MongoDB'],
      devops: ['Docker', 'GitHub Actions']
    },
    metrics: [
      { label: 'Platforms', value: 'Web + Mobile + API' },
      { label: 'Frontend', value: 'Vue & TypeScript' },
      { label: 'Backend', value: 'Node.js Express' }
    ],
    githubUrl: 'https://github.com/Aust9ny/Raid_Activist'
  },
  {
    id: 'aust9ny-portfolio',
    title: 'Aust9ny Engineering Portfolio',
    tagline: 'High-performance bilingual software engineer portfolio with live GitHub API integration',
    category: 'Frontend',
    featured: false,
    year: '2026',
    accentColor: 'blue',
    description:
      'The very portfolio you are browsing: a Neo-brutalist interactive portfolio built with React 19, TypeScript, and Vite, featuring automated GitHub Pages CI/CD and dynamic repository telemetry.',
    challenge:
      'Building a zero-cold-start interactive developer showcase with bilingual Thai/English localization, live GitHub API synchronization, and clean design.',
    solution:
      'Decoupled static Vite assets hosted on GitHub Pages CDN with relative path resolution, paired with GitHub Public REST API integration.',
    keyFeatures: [
      'Live GitHub API sync: auto-discovers and showcases public repositories',
      'Bilingual support with instant English/Thai localization context switching',
      'Neo-brutalist Bento UI with responsive animations and interactive drawers',
      'Zero-maintenance automated CI/CD pipeline via GitHub Actions'
    ],
    techStack: {
      frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion'],
      backend: ['Node.js', 'Express', 'CORS Middleware'],
      database: ['PostgreSQL / Persistent JSON Engine'],
      devops: ['GitHub Actions', 'GitHub Pages', 'Docker']
    },
    metrics: [
      { label: 'Performance', value: '100% Edge CDN' },
      { label: 'Build Time', value: '<1s Vite Build' },
      { label: 'Auto Deploy', value: 'GitHub Actions' }
    ],
    githubUrl: 'https://github.com/Aust9ny/Aust9ny.github.io',
    liveUrl: 'https://aust9ny.github.io/'
  }
];

export const portfolioSkills: SkillCategory[] = [
  {
    title: 'Frontend & UI Engineering',
    description: 'Modern, high-performance web interfaces with pixel-perfect responsive execution',
    color: 'blue',
    skills: [
      { name: 'React 18 & 19', level: 'Expert', percent: 95 },
      { name: 'TypeScript', level: 'Expert', percent: 92 },
      { name: 'Next.js (App Router)', level: 'Advanced', percent: 90 },
      { name: 'Tailwind CSS & Styling', level: 'Expert', percent: 95 },
      { name: 'State Management (Zustand/Redux)', level: 'Advanced', percent: 90 },
      { name: 'Vite & Webpack Tooling', level: 'Advanced', percent: 88 }
    ]
  },
  {
    title: 'Backend & Distributed Systems',
    description: 'Robust REST/GraphQL services, microservices, and asynchronous event streams',
    color: 'emerald',
    skills: [
      { name: 'Node.js & Runtime Internals', level: 'Expert', percent: 94 },
      { name: 'Express & Fastify', level: 'Expert', percent: 92 },
      { name: 'REST & GraphQL API Design', level: 'Expert', percent: 93 },
      { name: 'Microservices & Worker Queues', level: 'Advanced', percent: 87 },
      { name: 'WebSocket & Real-time Engines', level: 'Advanced', percent: 89 },
      { name: 'Authentication & JWT / OAuth', level: 'Advanced', percent: 90 }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, ACID transactions, and in-memory caching solutions',
    color: 'yellow',
    skills: [
      { name: 'PostgreSQL & SQL Optimization', level: 'Expert', percent: 92 },
      { name: 'Prisma ORM & Drizzle', level: 'Expert', percent: 91 },
      { name: 'Redis (Caching & Queues)', level: 'Advanced', percent: 88 },
      { name: 'MongoDB & NoSQL Modeling', level: 'Advanced', percent: 85 },
      { name: 'Database Migrations & Indexing', level: 'Advanced', percent: 89 },
      { name: 'Supabase & Firebase BaaS', level: 'Advanced', percent: 88 }
    ]
  },
  {
    title: 'DevOps, Cloud & Architecture',
    description: 'Automated CI/CD pipelines, containerization, and production reliability',
    color: 'purple',
    skills: [
      { name: 'Docker & Containerization', level: 'Advanced', percent: 90 },
      { name: 'Git & GitHub Actions CI/CD', level: 'Expert', percent: 92 },
      { name: 'AWS Services (S3, ECS, EC2)', level: 'Proficient', percent: 82 },
      { name: 'Linux Server Administration', level: 'Advanced', percent: 86 },
      { name: 'Clean Architecture & Testing (Jest/Vitest)', level: 'Advanced', percent: 89 },
      { name: 'Vercel, Railway & Cloudflare', level: 'Expert', percent: 92 }
    ]
  }
];

export const portfolioExperiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Developer',
    company: 'TechVentures Studio',
    location: 'Bangkok, Thailand',
    period: '2023 - Present',
    type: 'Full-Time',
    current: true,
    description:
      'Leading the architecture and development of scalable client-facing web applications and internal tools. Spearheading migration to TypeScript and modern microservices.',
    achievements: [
      'Architected and delivered 6 production-grade web applications from concept to deployment with 99.9% uptime.',
      'Reduced average page load time by 54% across core platforms through server-side rendering, code splitting, and Redis caching.',
      'Mentored 4 junior and mid-level engineers, running code reviews and engineering best practice sessions.'
    ],
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Software Engineer',
    company: 'Digital Nexus Solutions',
    location: 'Bangkok, Thailand',
    period: '2021 - 2023',
    type: 'Full-Time',
    description:
      'Engineered high-throughput REST APIs, automated background job queues, and responsive user dashboards for fintech and logistics enterprises.',
    achievements: [
      'Developed real-time webhook ingestion engine capable of processing 10,000+ events per minute with zero loss.',
      'Implemented robust role-based authentication and security protocols passing rigorous third-party vulnerability audits.',
      'Co-authored internal component library adopted across 5 product teams, cutting feature development time by 30%.'
    ],
    skills: ['Node.js', 'Express', 'React', 'Tailwind CSS', 'Redis', 'PostgreSQL', 'Jest']
  },
  {
    id: 'exp-3',
    role: 'Frontend & UI Developer',
    company: 'InnoTech Creative Labs',
    location: 'Bangkok, Thailand',
    period: '2020 - 2021',
    type: 'Full-Time',
    description:
      'Crafted interactive web experiences, e-commerce storefronts, and dynamic design systems for diverse international brands.',
    achievements: [
      'Built 15+ pixel-perfect responsive web interfaces with Lighthouse performance scores consistently exceeding 95/100.',
      'Collaborated closely with UI/UX designers to translate Figma design systems into reusable modular React components.'
    ],
    skills: ['React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'REST APIs', 'Git', 'Webpack']
  },
  {
    id: 'exp-4',
    role: 'Bachelor of Science in Computer Science / Engineering',
    company: 'University of Technology',
    location: 'Thailand',
    period: '2016 - 2020',
    type: 'Education',
    description:
      'Graduated with honors. Rigorous coursework in Data Structures, Algorithms, Distributed Computing, Database Systems, and Software Engineering Principles.',
    achievements: [
      'First Place - University Hackathon for Real-Time Collaborative Workspace solution.',
      'Published senior capstone project on high-concurrency event brokers.'
    ],
    skills: ['Algorithms', 'Data Structures', 'System Design', 'Databases', 'Networking']
  }
];
