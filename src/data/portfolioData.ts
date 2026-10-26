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
  email: 'sippakorn.dev@gmail.com',
  github: 'https://github.com/sippakorn-ka',
  linkedin: 'https://linkedin.com/in/sippakorn',
  stats: {
    yearsExp: '4+',
    completedProjects: '20+',
    satisfactionRate: '99.8%',
    codeCommits: '1.8K+'
  }
};

export const portfolioProjects: Project[] = [
  {
    id: 'omniflow',
    title: 'OmniFlow Automation Platform',
    tagline: 'Enterprise-grade visual workflow orchestrator and distributed task engine',
    category: 'Full-Stack',
    featured: true,
    year: '2025',
    accentColor: 'blue',
    description:
      'A node-based visual workflow automation suite enabling engineering teams to orchestrate asynchronous microservices, webhooks, and third-party integrations with zero latency bottlenecks.',
    challenge:
      'Handling concurrent multi-step webhook executions without memory leaks, while providing an ultra-responsive drag-and-drop builder with real-time live execution telemetry.',
    solution:
      'Architected an event-driven BullMQ + Redis job processing pipeline with an optimistic UI state engine built in React and Tailwind. Decoupled worker processes from the HTTP ingestion tier.',
    keyFeatures: [
      'Visual drag-and-drop DAG workflow editor with live branch testing',
      'Distributed worker queue with automatic retry exponential backoff',
      'Real-time execution log streaming via WebSockets',
      'Granular role-based access control (RBAC) and audit trails'
    ],
    techStack: {
      frontend: ['React 19', 'TypeScript', 'Tailwind CSS', 'React Flow', 'Zustand'],
      backend: ['Node.js', 'Express', 'BullMQ', 'WebSockets'],
      database: ['PostgreSQL', 'Prisma ORM', 'Redis'],
      devops: ['Docker', 'AWS ECS', 'GitHub Actions']
    },
    metrics: [
      { label: 'Event Ingestion', value: '15,000 req/sec' },
      { label: 'Latency Cut', value: '-62% vs legacy' },
      { label: 'Active Runs/Mo', value: '2.4M+' }
    ],
    liveUrl: 'https://omniflow-demo.example.com',
    githubUrl: 'https://github.com/sippakorn-ka/omniflow'
  },
  {
    id: 'apexmetrics',
    title: 'ApexMetrics Revenue Intelligence',
    tagline: 'Real-time multi-currency SaaS billing analytics and cohort retention tracker',
    category: 'Full-Stack',
    featured: true,
    year: '2025',
    accentColor: 'yellow',
    description:
      'Financial telemetry dashboard aggregating Stripe, Paddle, and crypto payments into unified MRR/ARR charts, churn probability forecasts, and cohort retention matrices.',
    challenge:
      'Aggregating millions of webhook financial transaction rows across fluctuating currencies in sub-second query speeds for interactive dashboard charting.',
    solution:
      'Implemented TimescaleDB hypertable partitioning alongside Redis caching layers and specialized SQL window aggregation queries, keeping dashboard page loads under 300ms.',
    keyFeatures: [
      'Interactive cohort retention heatmap with drill-down filters',
      'Predictive customer churn analysis powered by statistical regression',
      'One-click multi-currency tax and VAT summary generation',
      'Granular webhook replay debugger with idempotency tracking'
    ],
    techStack: {
      frontend: ['Next.js 15', 'TypeScript', 'Recharts', 'Tailwind CSS'],
      backend: ['Node.js', 'Fastify', 'TypeScript'],
      database: ['PostgreSQL', 'TimescaleDB', 'Redis'],
      devops: ['Vercel', 'Supabase', 'Docker']
    },
    metrics: [
      { label: 'Dashboard Speed', value: '280ms P95' },
      { label: 'Tracked Revenue', value: '$8.2M ARR' },
      { label: 'Data Accuracy', value: '99.99%' }
    ],
    liveUrl: 'https://apexmetrics.example.com',
    githubUrl: 'https://github.com/sippakorn-ka/apex-metrics'
  },
  {
    id: 'codepulse-ai',
    title: 'CodePulse AI Review Assistant',
    tagline: 'Automated pull-request security scanner and architectural refactoring advisor',
    category: 'AI & Tools',
    featured: true,
    year: '2024',
    accentColor: 'purple',
    description:
      'A developer productivity bot integrating with GitHub webhooks to review PR diffs, flag potential SQL injections/memory leaks, and draft clean refactoring suggestions before human review.',
    challenge:
      'Synthesizing large multi-file Git diffs into contextual LLM prompts without exceeding token budgets or generating superficial boilerplate suggestions.',
    solution:
      'Engineered an AST-aware token chunking parser that isolates modified syntax branches, evaluates related symbols, and queries Gemini 2.5 Flash with deterministic structured schemas.',
    keyFeatures: [
      'Automated PR inline commenting with copy-pasteable diff proposals',
      'Dependency vulnerability checks against known CVE databases',
      'Custom company code standard enforcement via natural language rules',
      'Summary digest generation for team engineering standups'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Lucide React', 'Vite'],
      backend: ['Node.js', 'Express', 'Octokit (GitHub API)', 'Google Gemini AI SDK'],
      database: ['PostgreSQL', 'Redis'],
      devops: ['Cloudflare Workers', 'Docker']
    },
    metrics: [
      { label: 'Review Time Saved', value: '3.5 hrs/dev/wk' },
      { label: 'Security Catches', value: '140+ Vulns' },
      { label: 'Dev Satisfaction', value: '94% Approval' }
    ],
    liveUrl: 'https://codepulse.example.com',
    githubUrl: 'https://github.com/sippakorn-ka/codepulse-ai'
  },
  {
    id: 'nexusmart',
    title: 'NexusMart B2B Wholesale Engine',
    tagline: 'High-throughput wholesale order management and multi-warehouse sync system',
    category: 'Full-Stack',
    featured: false,
    year: '2024',
    accentColor: 'emerald',
    description:
      'End-to-end B2B commerce platform with tiered volume pricing, customized quotation approvals, multi-location inventory deduction, and automated invoice PDF generation.',
    challenge:
      'Preventing inventory overselling during simultaneous bulk orders while keeping product listing search instantaneously snappy across 40,000+ SKUs.',
    solution:
      'Implemented ACID transactional row-level locks in PostgreSQL during order checkout, paired with Elasticsearch for millisecond fuzzy catalog filtering.',
    keyFeatures: [
      'Custom customer tier pricing matrix with instant bulk discount logic',
      'Multi-warehouse inventory reservation and barcode scanning integration',
      'Automated branded PDF invoice generation and tax compliance calculations',
      'Wholesale credit line limits with automatic risk warnings'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Table'],
      backend: ['Node.js', 'Express', 'Elasticsearch'],
      database: ['PostgreSQL', 'Prisma ORM'],
      devops: ['AWS EC2', 'S3', 'Nginx']
    },
    metrics: [
      { label: 'SKUs Indexed', value: '45,000+' },
      { label: 'Checkout Concurrency', value: '800 orders/min' },
      { label: 'Oversell Rate', value: '0.00%' }
    ],
    liveUrl: 'https://nexusmart.example.com',
    githubUrl: 'https://github.com/sippakorn-ka/nexus-mart'
  },
  {
    id: 'hyperroute',
    title: 'HyperRoute Edge API Gateway',
    tagline: 'Ultra-lightweight distributed API proxy, rate limiter, and authentication proxy',
    category: 'Backend & Cloud',
    featured: false,
    year: '2024',
    accentColor: 'rose',
    description:
      'Configurable edge routing proxy delivering token-bucket rate limiting, JWT verification, and dynamic upstream load balancing with sub-2 millisecond overhead.',
    challenge:
      'Minimizing proxy roundtrip overhead while performing synchronous cryptographic JWT validation and atomic Redis sliding-window quota checks.',
    solution:
      'Built a lean Go & Node.js dual proxy architecture leveraging Redis pipelined Lua scripts for atomic sliding window rate limiting.',
    keyFeatures: [
      'Sliding window rate-limiter with IP and API key tier quotas',
      'Centralized JWT auth validation and upstream header forwarding',
      'Health check circuit breaker with automated dead host failover',
      'Structured request logging with OpenTelemetry tracing'
    ],
    techStack: {
      backend: ['Node.js', 'TypeScript', 'Go', 'Express'],
      database: ['Redis cluster'],
      devops: ['Docker', 'Kubernetes', 'Linux', 'Terraform']
    },
    metrics: [
      { label: 'Proxy Overhead', value: '< 1.8ms' },
      { label: 'Peak Capacity', value: '40,000 RPS' },
      { label: 'Uptime Score', value: '99.99%' }
    ],
    liveUrl: 'https://hyperroute.example.com',
    githubUrl: 'https://github.com/sippakorn-ka/hyperroute'
  },
  {
    id: 'syncspace',
    title: 'SyncSpace Collaborative Canvas',
    tagline: 'Real-time collaborative diagramming and whiteboard tool with conflict resolution',
    category: 'Frontend',
    featured: false,
    year: '2023',
    accentColor: 'blue',
    description:
      'A low-latency browser canvas where remote engineering teams sketch system architectures, flowcharts, and sticky-notes with live multi-cursor presence.',
    challenge:
      'Ensuring conflict-free document convergence during simultaneous edits across unstable mobile and desktop network connections.',
    solution:
      'Employed Yjs Conflict-free Replicated Data Types (CRDTs) over WebSockets with HTML5 Canvas hardware-accelerated rendering.',
    keyFeatures: [
      'Real-time smooth multiplayer cursor tracking and selection boxes',
      'Infinite zoomable and pannable 60FPS canvas renderer',
      'Export to SVG, PNG, and clean Markdown architecture briefs',
      'Local-first offline editing with instant cloud re-synchronization'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'HTML5 Canvas API', 'Yjs CRDT'],
      backend: ['Node.js', 'WebSockets / Socket.io'],
      database: ['IndexedDB', 'PostgreSQL'],
      devops: ['Vercel', 'Render']
    },
    metrics: [
      { label: 'Sync Latency', value: '< 45ms' },
      { label: 'Canvas Render', value: 'Solid 60 FPS' },
      { label: 'Session Length', value: '42m avg' }
    ],
    liveUrl: 'https://syncspace.example.com',
    githubUrl: 'https://github.com/sippakorn-ka/syncspace'
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
