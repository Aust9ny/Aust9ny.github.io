import { Project, SkillCategory, ExperienceItem, ProfileInfo } from "../types";

export const portfolioProfileThai: ProfileInfo = {
  name: "สิปปกร กันหาฤกษ์ (Sippakorn Kanhareuk)",
  role: "Full-Stack Developer & Software Engineer",
  heroHeadline:
    "พัฒนาเว็บแอปพลิเคชันประสิทธิภาพสูง และระบบซอฟต์แวร์ที่พร้อมรองรับการเติบโต",
  heroSubtitle:
    "วิศวกรซอฟต์แวร์ผู้เชี่ยวชาญด้าน React Ecosystem สมัยใหม่, ระบบ Node.js Backend แบบกระจายตัว, สถาปัตยกรรม Clean Code และการออกแบบ UX ที่ใช้งานง่าย สร้างผลลัพธ์วัดผลได้จริง",
  bioShort:
    "Full-Stack Developer ประสบการณ์ 4+ ปี มีความเชี่ยวชาญในการออกแบบระบบเว็บแอปพลิเคชันครบวงจร ตั้งแต่สถาปัตยกรรมฐานข้อมูล, REST APIs ไปจนถึง Responsive UI ที่รวดเร็ว ปลอดภัย และดูแลรักษาง่าย",
  bioLong: [
    "ผมมุ่งมั่นสร้างสรรค์แพลตฟอร์มดิจิทัลที่ผสมผสานความแม่นยำด้านวิศวกรรมเข้ากับการออกแบบที่เข้าใจผู้ใช้งานอย่างลึกซึ้ง ตลอด 4+ ปีที่ผ่านมา ผมได้ออกแบบและดูแลระบบซอฟต์แวร์ที่ใช้งานจริง รองรับผู้ใช้หลายหมื่นคนต่อวัน",
    "เครื่องมือหลักที่ผมใช้งานประจำประกอบด้วย TypeScript, React, Next.js, Node.js, Express,Docker และ CI/CD Pipelines ผมชอบการทำงานที่เน้น Ownership, การแก้ปัญหาเชิงโครงสร้าง และการเขียนโค้ดที่อ่านง่ายมีมาตรฐาน",
    "นอกเวลาทำงาน ผมมักศึกษาเครื่องมือ AI สำหรับนักพัฒนา มีส่วนร่วมใน Open Source และพัฒนาโปรดักต์ดิจิทัลที่มีประโยชน์ต่อผู้ใช้งานจริง",
  ],
  location: "กรุงเทพฯ, ประเทศไทย (พร้อมรับงาน Remote ทั่วโลก)",
  availability:
    "พร้อมรับงานตำแหน่งประจำ (Full-Time) และงานโปรเจกต์สัญญาจ้าง (Contracts)",
  email: "sippakorn.kan1@gmail.com",
  github: "https://github.com/Aust9ny",
  linkedin: "https://linkedin.com/in/sippakorn",
  stats: {
    yearsExp: "3+ ปี",
    completedProjects: "6 โปรเจกต์",
    satisfactionRate: "99.8%",
    codeCommits: "1.8K+ ครั้ง",
  },
};

export const portfolioProjectsThai: Project[] = [
  {
    id: "omniflow",
    title: "OmniFlow Automation Platform",
    tagline:
      "ระบบจัดคิวและออโตเมชันประมวลผลงานแบบกระจายตัวระดับองค์กร พร้อม Visual Editor",
    category: "Full-Stack",
    featured: true,
    year: "2025",
    accentColor: "blue",
    description:
      "แพลตฟอร์มออโตเมชันที่เชื่อมต่อ Microservices, Webhooks และบริการภายนอกผ่าน Visual Node-based Canvas โดยไร้คอขวดด้าน Latency",
    challenge:
      "การจัดการคำขอ Webhook พร้อมกันจำนวนมากโดยไม่เกิด Memory Leak พร้อมทั้งมี UI Drag-and-Drop ที่ตอบสนองลื่นไหลแบบ Real-time",
    solution:
      "ออกแบบสถาปัตยกรรม Event-driven โดยใช้ BullMQ + Redis แยกกระบวนการประมวลผล Worker ออกจาก HTTP Ingestion และใช้ State Optimistic UI บน React",
    keyFeatures: [
      "Visual DAG Workflow Editor แบบลากวาง พร้อมระบบทดสอบเงื่อนไขแบบสด",
      "ระบบคิวประมวลผลแบบกระจายตัว พร้อมระบบ Retry และ Exponential Backoff",
      "การสตรีม Log ผลการทำงานแบบ Real-time ผ่าน WebSockets",
      "ระบบควบคุมสิทธิ์ผู้ใช้แบบละเอียด (RBAC) และบันทึก Audit Trail ครบถ้วน",
    ],
    techStack: {
      frontend: [
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "React Flow",
        "Zustand",
      ],
      backend: ["Node.js", "Express", "BullMQ", "WebSockets"],
      database: ["PostgreSQL", "Prisma ORM", "Redis"],
      devops: ["Docker", "AWS ECS", "GitHub Actions"],
    },
    metrics: [
      { label: "ความเร็วรับ Event", value: "15,000 req/วินาที" },
      { label: "ลด Latency", value: "-62% เทียบระบบเดิม" },
      { label: "ประมวลผลต่อเดือน", value: "2.4 ล้านครั้ง" },
    ],
    liveUrl: "https://omniflow-demo.example.com",
    githubUrl: "https://github.com/sippakorn-ka/omniflow",
  },
  {
    id: "apexmetrics",
    title: "ApexMetrics Revenue Intelligence",
    tagline:
      "แดชบอร์ดวิเคราะห์รายได้และ Cohort Retention สำหรับโมเดลธุรกิจ SaaS แบบ Real-time",
    category: "Full-Stack",
    featured: true,
    year: "2025",
    accentColor: "yellow",
    description:
      "ระบบรวบรวมข้อมูลธุรกรรมการเงินจาก Stripe, Paddle และ Payment Gateways เพื่อแสดงกราฟ MRR/ARR, พยากรณ์อัตรา Churn และวิเคราะห์การรักษาลูกค้า",
    challenge:
      "การรวมข้อมูลธุรกรรมระดับล้านแถวข้ามอัตราแลกเปลี่ยนหลายสกุลเงินให้ประมวลผลและแสดงผลบนแดชบอร์ดได้เร็วระดับมิลลิวินาที",
    solution:
      "นำ TimescaleDB Hypertable มาแบ่งพาร์ทิชันข้อมูล ผสานกับ Redis Caching และปรับแต่ง SQL Window Queries จนหน้าแดชบอร์ดโหลดได้ภายในเวลาไม่เกิน 300ms",
    keyFeatures: [
      "Interactive Cohort Retention Heatmap พร้อมตัวกรองเจาะลึก",
      "การทำนายโอกาสยกเลิกการใช้งาน (Churn Prediction) ด้วยสถิติขั้นสูง",
      "การคำนวณภาษีและ VAT แบบหลายสกุลเงินในคลิกเดียว",
      "ระบบ Replay และ Debug Webhook ย้อนหลังพร้อมตรวจสอบ Idempotency",
    ],
    techStack: {
      frontend: ["Next.js 15", "TypeScript", "Recharts", "Tailwind CSS"],
      backend: ["Node.js", "Fastify", "TypeScript"],
      database: ["PostgreSQL", "TimescaleDB", "Redis"],
      devops: ["Vercel", "Supabase", "Docker"],
    },
    metrics: [
      { label: "ความเร็วโหลดแดชบอร์ด", value: "280ms P95" },
      { label: "ยอดรายได้ที่ระบบดูแล", value: "$8.2M ARR" },
      { label: "ความแม่นยำของข้อมูล", value: "99.99%" },
    ],
    liveUrl: "https://apexmetrics.example.com",
    githubUrl: "https://github.com/sippakorn-ka/apex-metrics",
  },
  {
    id: "codepulse-ai",
    title: "CodePulse AI Review Assistant",
    tagline:
      "ระบบ AI ตรวจสอบความปลอดภัยและให้คำแนะนำ Refactor โค้ดบน Pull Request อัตโนมัติ",
    category: "AI & Tools",
    featured: true,
    year: "2024",
    accentColor: "purple",
    description:
      "บอทช่วยเหลือทีมวิศวกรซอฟต์แวร์ ทำงานร่วมกับ GitHub Webhooks เพื่อตรวจจับช่องโหว่ความปลอดภัย เช่น SQL Injection หรือ Memory Leak พร้อมเสนอแนวทางแก้ไขทันที",
    challenge:
      "การส่ง Git Diff ขนาดใหญ่เข้าประมวลผลกับ LLM โดยไม่เกินขีดจำกัด Token และยังคงได้คำแนะนำที่ตรงจุด ไม่เป็นเพียงข้อความทั่วไป",
    solution:
      "สร้าง AST-aware Token Parser เพื่อแยกวิเคราะห์เฉพาะ Syntax Tree ที่เปลี่ยนแปลง พร้อมเรียกใช้งาน Google Gemini SDK ด้วย Structured JSON Schema",
    keyFeatures: [
      "แสดงคอมเมนต์ข้อเสนอแก้ไขโค้ด (Diff Suggestion) บน PR โดยอัตโนมัติ",
      "สแกนช่องโหว่ของ Dependencies กับฐานข้อมูล CVE สากล",
      "บังคับใช้มาตรฐานโค้ดของทีมผ่านกฎภาษาธรรมชาติ",
      "สรุปรายงานสรุปภาพรวมการเปลี่ยนแปลงสำหรับ Standup Meeting",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Lucide React", "Vite"],
      backend: [
        "Node.js",
        "Express",
        "Octokit (GitHub API)",
        "Google Gemini AI SDK",
      ],
      database: ["PostgreSQL", "Redis"],
      devops: ["Cloudflare Workers", "Docker"],
    },
    metrics: [
      { label: "ประหยัดเวลา Review", value: "3.5 ชม./คน/สัปดาห์" },
      { label: "ตรวจพบช่องโหว่", value: "140+ รายการ" },
      { label: "ความพึงพอใจของทีม", value: "94% ยอมรับ" },
    ],
    liveUrl: "https://codepulse.example.com",
    githubUrl: "https://github.com/sippakorn-ka/codepulse-ai",
  },
  {
    id: "nexusmart",
    title: "NexusMart B2B Wholesale Engine",
    tagline:
      "ระบบจัดการคำสั่งซื้อราคาส่งและซิงค์สต็อกคลังสินค้าหลายสาขาแบบ Real-time",
    category: "Full-Stack",
    featured: false,
    year: "2024",
    accentColor: "emerald",
    description:
      "แพลตฟอร์มการค้า B2B พร้อมระบบราคาส่งตามระดับสมาชิก, กระบวนการอนุมัติใบเสนอราคา, การตัดสต็อกข้ามคลังอัตโนมัติ และการออกใบกำกับภาษี PDF ทันที",
    challenge:
      "การป้องกันปัญหาสต็อกติดลบจากการกดสั่งซื้อสินค้าล็อตใหญ่พร้อมกัน และการค้นหาสินค้ากว่า 40,000 รายการอย่างรวดเร็ว",
    solution:
      "ใช้ ACID Transactional Row-Level Locking ใน PostgreSQL ช่วงชำระเงิน พร้อมจับคู่กับ Elasticsearch สำหรับการสืบค้นข้อมูลสินค้าแบบมิลลิวินาที",
    keyFeatures: [
      "ตารางกำหนดราคาตามระดับสมาชิกพร้อมคำนวณส่วนลดตามจำนวนอัตโนมัติ",
      "การจองสต็อกล่วงหน้าข้ามคลังสินค้าและรองรับการสแกนบาร์โค้ด",
      "ออกใบกำกับภาษีและเอกสารทางบัญชี PDF อัตโนมัติ",
      "ระบบควบคุมวงเงินเครดิตการค้าพร้อมแจ้งเตือนความเสี่ยง",
    ],
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap CSS",
        "Javascript",
        "Nuxt3-4",
        "NextJS",
      ],
      backend: [
        "Node.js",
        "Express",
        "Elasticsearch",
        "CI3",
        "Laravel",
        "NestJS",
      ],
      database: ["MYSQL"],
      devops: ["AWS EC2", "S3", "Nginx", "Huawei Code Arts"],
    },
    metrics: [
      { label: "จำนวนรายการสินค้า", value: "45,000+ SKUs" },
      { label: "รองรับคำสั่งซื้อพร้อมกัน", value: "800 รายการ/นาที" },
      { label: "อัตราสต็อกผิดพลาด", value: "0.00%" },
    ],
    liveUrl: "https://nexusmart.example.com",
    githubUrl: "https://github.com/sippakorn-ka/nexus-mart",
  },
  {
    id: "hyperroute",
    title: "HyperRoute Edge API Gateway",
    tagline:
      "เกตเวย์พร็อกซีความเร็วสูง ระบบจำกัดปริมาณคำขอ (Rate Limiter) และศูนย์กลาง Auth",
    category: "Backend & Cloud",
    featured: false,
    year: "2024",
    accentColor: "rose",
    description:
      "Edge Proxy น้ำหนักเบาพร้อมระบบ Rate Limiting แบบ Token-Bucket, ตรวจสอบความถูกต้องของ JWT และกระจายโหลดแบบไดนามิกโดยเพิ่มเวลา Overhead ไม่ถึง 2 มิลลิวินาที",
    challenge:
      "การลดเวลา Roundtrip ของคำขอให้เหลือน้อยที่สุด ควบคู่กับการเข้ารหัสตรวจ JWT และตรวจสอบ Quota ผ่าน Redis แบบ Atomic",
    solution:
      "สร้างสถาปัตยกรรม Proxy ร่วมระหว่าง Go และ Node.js พร้อมรัน Lua Script บน Redis Pipeline เพื่อให้การตัดโควตาทำงานแบบ Atomic ทันที",
    keyFeatures: [
      "Sliding Window Rate-Limiter แยกตาม IP และระดับ API Key",
      "ตรวจสอบและถอดรหัส JWT จากจุดเดียวพร้อมส่งต่อ Headers ให้ Services ภายใน",
      "ระบบ Circuit Breaker สลับการทำงานเมื่อโฮสต์ปลายทางขัดข้อง",
      "เก็บบันทึก Log แบบ Structured เชื่อมต่อ OpenTelemetry Tracing",
    ],
    techStack: {
      backend: ["Node.js", "TypeScript", "Go", "Express"],
      database: ["Redis cluster"],
      devops: ["Docker", "Kubernetes", "Linux", "Terraform"],
    },
    metrics: [
      { label: "Overhead ของระบบ", value: "< 1.8ms" },
      { label: "รองรับคำขอสูงสุด", value: "40,000 RPS" },
      { label: "ความเสถียร Uptime", value: "99.99%" },
    ],
    liveUrl: "https://hyperroute.example.com",
    githubUrl: "https://github.com/sippakorn-ka/hyperroute",
  },
  {
    id: "syncspace",
    title: "SyncSpace Collaborative Canvas",
    tagline:
      "กระดานไวท์บอร์ดจำลองสถาปัตยกรรมระบบแบบทำงานร่วมกัน Real-time รองรับ Multi-cursor",
    category: "Frontend",
    featured: false,
    year: "2023",
    accentColor: "blue",
    description:
      "พื้นที่ทำงานออนไลน์สำหรับทีมวิศวกร ใช้ร่าง Flowchart และ System Architecture พร้อมแสดงตำแหน่ง Cursor ของเพื่อนร่วมทีมได้ทันที",
    challenge:
      "การผสานข้อมูลที่แก้ไขพร้อมกันจากผู้ใช้หลายรายไม่ให้เกิดข้อขัดแย้ง (Conflict) แม้จะใช้งานผ่านเครือข่ายอินเทอร์เน็ตที่ไม่เสถียร",
    solution:
      "ประยุกต์ใช้เทคโนโลยี Yjs CRDTs (Conflict-free Replicated Data Types) บน WebSockets และเรนเดอร์ Canvas ด้วย Hardware Acceleration",
    keyFeatures: [
      "แสดงผลตำแหน่ง Mouse Cursor และกล่องการเลือกของผู้ร่วมงานแบบสด 60 FPS",
      "กระดานพื้นที่ไร้ขีดจำกัด รองรับการซูมและแพนภาพอย่างลื่นไหล",
      "ส่งออกไฟล์ได้ทั้งรูปแบบ SVG, PNG และสรุปสถาปัตยกรรม Markdown",
      "ใช้งานแบบออฟไลน์ได้ (Local-first) และซิงค์ขึ้น Cloud อัตโนมัติเมื่อต่อเน็ต",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "HTML5 Canvas API", "Yjs CRDT"],
      backend: ["Node.js", "WebSockets / Socket.io"],
      database: ["IndexedDB", "PostgreSQL"],
      devops: ["Vercel", "Render"],
    },
    metrics: [
      { label: "ความหน่วงซิงค์ข้อมูล", value: "< 45ms" },
      { label: "อัตราเฟรมเรต Canvas", value: "ลื่นไหล 60 FPS" },
      { label: "เวลาการใช้งานเฉลี่ย", value: "42 นาที/เซสชัน" },
    ],
    liveUrl: "https://syncspace.example.com",
    githubUrl: "https://github.com/sippakorn-ka/syncspace",
  },
];

export const portfolioSkillsThai: SkillCategory[] = [
  {
    title: "Frontend & UI Engineering",
    description:
      "การพัฒนาหน้าบ้านที่ทันสมัย โหลดเร็วระดับมิลลิวินาที และตอบสนองทุกขนาดหน้าจอ",
    color: "blue",
    skills: [
      { name: "React 18 & 19", level: "ผู้เชี่ยวชาญ (Expert)", percent: 95 },
      { name: "TypeScript", level: "ผู้เชี่ยวชาญ (Expert)", percent: 92 },
      {
        name: "Next.js (App Router)",
        level: "ขั้นสูง (Advanced)",
        percent: 90,
      },
      {
        name: "Tailwind CSS & การจัดสไตล์",
        level: "ผู้เชี่ยวชาญ (Expert)",
        percent: 95,
      },
      {
        name: "State Management (Zustand/Redux)",
        level: "ขั้นสูง (Advanced)",
        percent: 90,
      },
      {
        name: "เครื่องมือ Vite & Webpack",
        level: "ขั้นสูง (Advanced)",
        percent: 88,
      },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    description:
      "การออกแบบระบบ API, Microservices และระบบประมวลผลคิวที่มีความเสถียรสูง",
    color: "emerald",
    skills: [
      {
        name: "Node.js & Runtime Internals",
        level: "ผู้เชี่ยวชาญ (Expert)",
        percent: 94,
      },
      {
        name: "Express & Fastify",
        level: "ผู้เชี่ยวชาญ (Expert)",
        percent: 92,
      },
      {
        name: "การออกแบบ REST & GraphQL API",
        level: "ผู้เชี่ยวชาญ (Expert)",
        percent: 93,
      },
      {
        name: "Microservices & คิวประมวลผล (Queues)",
        level: "ขั้นสูง (Advanced)",
        percent: 87,
      },
      {
        name: "WebSocket & ระบบ Real-time",
        level: "ขั้นสูง (Advanced)",
        percent: 89,
      },
      {
        name: "ระบบความปลอดภัย & JWT / OAuth",
        level: "ขั้นสูง (Advanced)",
        percent: 90,
      },
    ],
  },
  {
    title: "Databases & Storage",
    description:
      "การออกแบบฐานข้อมูลแบบ Relational, ทรานแซกชัน ACID และระบบ Caching ความเร็วสูง",
    color: "yellow",
    skills: [
      { name: "MYSQL", level: "ผู้เชี่ยวชาญ (Expert)", percent: 92 },
      {
        name: "Prisma ORM & Drizzle",
        level: "ผู้เชี่ยวชาญ (Expert)",
        percent: 91,
      },
      {
        name: "MongoDB & NoSQL Data Modeling",
        level: "ขั้นสูง (Advanced)",
        percent: 85,
      },
      {
        name: "Database Migrations & Indexing",
        level: "ขั้นสูง (Advanced)",
        percent: 89,
      },
      {
        name: "Supabase & Firebase BaaS",
        level: "ขั้นสูง (Advanced)",
        percent: 88,
      },
    ],
  },
  {
    title: "DevOps, Cloud & Architecture",
    description:
      "ระบบส่งมอบอัตโนมัติ CI/CD, การรันคอนเทนเนอร์ และสถาปัตยกรรมระดับ Production",
    color: "purple",
    skills: [
      {
        name: "Docker & Containerization",
        level: "ขั้นสูง (Advanced)",
        percent: 90,
      },
      {
        name: "Git & GitHub Actions CI/CD",
        level: "ผู้เชี่ยวชาญ (Expert)",
        percent: 92,
      },
      {
        name: "บริการ AWS (S3, ECS, EC2)",
        level: "ชำนาญการ (Proficient)",
        percent: 82,
      },
      {
        name: "การดูแลเซิร์ฟเวอร์ Linux",
        level: "ขั้นสูง (Advanced)",
        percent: 86,
      },
      {
        name: "Clean Architecture & Testing (Jest/Vitest)",
        level: "ขั้นสูง (Advanced)",
        percent: 89,
      },
      {
        name: "Vercel, Railway & Cloudflare",
        level: "ผู้เชี่ยวชาญ (Expert)",
        percent: 92,
      },
    ],
  },
];

export const portfolioExperiencesThai: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Developer",
    company: "TechVentures Studio",
    location: "กรุงเทพฯ, ประเทศไทย",
    period: "2023 - ปัจจุบัน",
    type: "Full-Time",
    current: true,
    description:
      "ผู้นำทีมด้านสถาปัตยกรรมและพัฒนาเว็บแอปพลิเคชันหลักขององค์กร ผลักดันการอัปเกรดระบบสู่ TypeScript และสถาปัตยกรรม Microservices เต็มรูปแบบ",
    achievements: [
      "ออกแบบและส่งมอบระบบ Production รวม 6 โปรเจกต์ตั้งแต่ศูนย์จนขึ้นระบบจริง ด้วยความเสถียร 99.9% Uptime",
      "ลดเวลาเฉลี่ยการโหลดหน้าเว็บลง 54% ทั่วทั้งระบบ ด้วยเทคนิค SSR, Code-splitting และการแคช Redis",
      "ให้คำปรึกษาและโค้ชวิศวกรซอฟต์แวร์ 4 คน จัดทำคู่มือ Code Review และมาตรฐานวิศวกรรมขององค์กร",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    id: "exp-2",
    role: "Full-Stack Software Engineer",
    company: "Digital Nexus Solutions",
    location: "กรุงเทพฯ, ประเทศไทย",
    period: "2021 - 2023",
    type: "Full-Time",
    description:
      "พัฒนาระบบ REST APIs ประสิทธิภาพสูง, ระบบประมวลผลงานเบื้องหลังอัตโนมัติ และแดชบอร์ดบริหารจัดการสำหรับธุรกิจฟินเทคและโลจิสติกส์",
    achievements: [
      "พัฒนาระบบรับ Webhook ประมวลผลธุรกรรมกว่า 10,000 เหตุการณ์ต่อนาทีโดยไม่มีข้อมูลตกหล่น",
      "วางระบบความปลอดภัยและการพิสูจน์ตัวตนตามมาตรฐาน ผ่านการตรวจสอบช่องโหว่ความปลอดภัยจากหน่วยงานภายนอก",
      "ร่วมสร้าง UI Component Library ส่วนกลางที่นำไปใช้งานใน 5 ทีมผลิตภัณฑ์ ลดเวลาพัฒนาฟีเจอร์ลง 30%",
    ],
    skills: [
      "Node.js",
      "Express",
      "React",
      "Tailwind CSS",
      "Redis",
      "PostgreSQL",
      "Jest",
    ],
  },
  {
    id: "exp-3",
    role: "Frontend & UI Developer",
    company: "InnoTech Creative Labs",
    location: "กรุงเทพฯ, ประเทศไทย",
    period: "2020 - 2021",
    type: "Full-Time",
    description:
      "พัฒนาหน้าเว็บไซต์ตอบสนองแบบ Interactive, หน้าร้านค้าออนไลน์ E-commerce และระบบ Design System ให้กับแบรนด์ชั้นนำระดับสากล",
    achievements: [
      "พัฒนาหน้าเว็บที่ตรงตามสเปกดีไซน์กว่า 15 โปรเจกต์ โดยได้คะแนน Google Lighthouse สูงกว่า 95/100 อย่างสม่ำเสมอ",
      "ทำงานร่วมกับทีม UI/UX เพื่อแปลง Design System จาก Figma สู่ React Components ที่นำกลับมาใช้ซ้ำได้ง่าย",
    ],
    skills: [
      "React",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "REST APIs",
      "Git",
      "Webpack",
    ],
  },
  {
    id: "exp-4",
    role: "วิศวกรรมศาสตร์บัณฑิต สาขาคอมพิวเตอร์และสารสนเทศ",
    company: "มหาวิทยลัยเกษตรศาสตร์ศรีราชา",
    location: "ประเทศไทย",
    period: "2021 - 2025",
    type: "Education",
    description:
      "ศึกษาโครงสร้างข้อมูล อัลกอริทึม การประมวลผลแบบกระจายตัว ระบบฐานข้อมูล และหลักวิศวกรรมซอฟต์แวร์",
    achievements: [
      "Money Mind Project แอปมือถือสำหรับช่วยจัดการและบริหารเงิน เพื่อการเก็บออม ใช้ชีวิต และการเกษียณอย่างมีคุณภาพ",
    ],
    skills: [
      "Algorithms",
      "Data Structures",
      "System Design",
      "Databases",
      "Networking",
      "DevOps",
    ],
  },
];
