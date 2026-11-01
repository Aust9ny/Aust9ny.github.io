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
  linkedin: "https://www.linkedin.com/in/sippakorn-kanhareuk-52059a281/",
  stats: {
    yearsExp: "3+ ปี",
    completedProjects: "6 โปรเจกต์",
    satisfactionRate: "99.8%",
    codeCommits: "1.8K+ ครั้ง",
  },
};

export const portfolioProjectsThai: Project[] = [
  {
    id: "moneymind",
    title: "MoneyMind Financial Management",
    tagline:
      "แพลตฟอร์มจัดการและวิเคราะห์การเงินส่วนบุคคล ติดตามรายรับ-รายจ่าย และพอร์ตการลงทุนแบบเรียลไทม์",
    category: "Full-Stack",
    featured: true,
    year: "2025",
    accentColor: "emerald",
    description:
      "แอปพลิเคชันจัดการการเงินที่พัฒนาขึ้นเพื่อให้ผู้ใช้เห็นภาพรวมพฤติกรรมการใช้จ่าย กำหนดขอบเขตงบประมาณ และวางแผนเป้าหมายทางการเงินด้วยการวิเคราะห์ข้อมูลแบบสด",
    challenge:
      "การออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์เพื่อรองรับธุรกรรมหลายสกุลเงิน การตัดรอบบิลประจำ และการจัดหมวดหมู่อัตโนมัติ โดยให้การแสดงผลบนแดชบอร์ดทำงานได้เร็วกว่า 100ms",
    solution:
      "ออกแบบ Indexing บน PostgreSQL อย่างมีประสิทธิภาพ แยกส่วนการบันทึกธุรกรรมออกจากกระบวนการคำนวณยอดรวม และพัฒนาส่วนติดต่อผู้ใช้ด้วย React และกราฟสรุปข้อมูลแบบอินเทอร์แอคทีฟ",
    keyFeatures: [
      "ระบบจัดหมวดหมู่ธุรกรรมและแจ้งเตือนเพดานงบประมาณรายเดือนอัตโนมัติ",
      "กราฟกระแสเงินสดเชิงโต้ตอบและสถิติการเติบโตของมูลค่าสินทรัพย์สุทธิ",
      "รองรับการแปลงอัตราแลกเปลี่ยนหลายสกุลเงินแบบเรียลไทม์",
      "การจัดเก็บข้อมูลแบบเข้ารหัสตามมาตรฐานความปลอดภัยและความเป็นส่วนตัวสูงสุด",
    ],
    techStack: {
      frontend: ["TypeScript", "React", "Tailwind CSS", "Chart.js"],
      backend: ["Node.js", "Express", "REST API"],
      database: ["PostgreSQL", "Prisma ORM"],
      devops: ["Docker", "GitHub Actions"],
    },
    metrics: [
      { label: "GitHub Stars", value: "⭐ 2 Stars" },
      { label: "Stack หลัก", value: "TypeScript & Node" },
      { label: "สถานะระบบ", value: "Production Ready" },
    ],
    githubUrl: "https://github.com/Aust9ny/MoneyMind",
  },
  {
    id: "hotel-suite",
    title: "Hotel Management & Reservation Suite",
    tagline:
      "ระบบจองห้องพักและบริหารโรงแรมแบบครบวงจร ด้วย Frontend Astro SSR และ Backend Python REST",
    category: "Full-Stack",
    featured: true,
    year: "2026",
    accentColor: "blue",
    description:
      "ระบบจัดการโรงแรมที่ผสมผสาน Frontend ความเร็วสูงด้วย Astro สำหรับให้ผู้เข้าพักค้นหาห้องและจองห้องพัก พร้อม Backend ประสิทธิภาพสูงด้วย Python ในการดูแลสต็อกห้อง กฎราคา และการยืนยันการจอง",
    challenge:
      "การป้องกันปัญหา Race Condition จากการแย่งจองห้องเดียวกันในเวลาเดียวกัน พร้อมทั้งรักษาความเร็วในการโหลดหน้าเว็บสำหรับค้นหาห้องพักให้เหมาะสมกับ SEO",
    solution:
      "ใช้ Astro ทำ Server-Side Rendering เพื่อให้หน้าแสดงรายการห้องพักโหลดได้รวดเร็วทันที ผสานกับระบบ Transactional Booking Locks บน Backend Python",
    keyFeatures: [
      "ปฏิทินแสดงความพร้อมของห้องพักแบบเรียลไทม์พร้อมระบบเลือกช่วงวันเข้าพัก",
      "หน้าแสดงแคตตาล็อกห้องพักแบบ Ultra-fast พร้อมโฟลว์การจองแบบไดนามิก",
      "ระบบจัดการประเภทห้อง สิ่งอำนวยความสะดวก และการตั้งราคาตามช่วงเวลา",
      "การออกใบยืนยันการจองและติดตามสถานะห้องพักแบบอัตโนมัติ",
    ],
    techStack: {
      frontend: ["Astro", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "FastAPI / REST", "JSON Services"],
      database: ["PostgreSQL", "SQLAlchemy"],
      devops: ["Docker", "Vite"],
    },
    metrics: [
      { label: "สถาปัตยกรรม", value: "Astro + Python" },
      { label: "Frontend Repo", value: "hotel-front" },
      { label: "Backend Repo", value: "hotel-back" },
    ],
    githubUrl: "https://github.com/Aust9ny/hotel-front",
    liveUrl: "https://github.com/Aust9ny/hotel-back",
  },
  {
    id: "dealer-web",
    title: "Dealer Web Portal",
    tagline:
      "เว็บแอปพลิเคชันบริหารจัดการสต็อกรถยนต์และคำนวณใบเสนอราคาสำหรับโชว์รูมตัวแทนจำหน่าย",
    category: "Frontend",
    featured: true,
    year: "2025",
    accentColor: "purple",
    description:
      "เว็บพอร์ทัลสำหรับโชว์รูมรถยนต์ ใช้ในการจัดการคลังยานยนต์ ปรับแต่งตัวเลือกสเปกรถ และคำนวณใบเสนอราคาสำหรับลูกค้าอย่างครบวงจรและสะดวกรวดเร็ว",
    challenge:
      "การสร้างฟอร์มปรับแต่งออปชันรถยนต์แบบหลายขั้นตอน (Multi-step Form) ที่มีตัวแปรราคาซับซ้อน และต้องตรวจสอบความถูกต้องแบบเรียลไทม์บนหน้าจอทุกขนาด",
    solution:
      "พัฒนาด้วย Vue 3 แบบโมดูลาร์ ใช้ Reactive State Management จัดการข้อมูล พร้อมแคชสเปกรถบนฝั่งไคลเอนต์เพื่อความรวดเร็ว และใช้ตารางข้อมูลสไตล์ Neo-brutalist",
    keyFeatures: [
      "ระบบกรองสต็อกรถยนต์ตามยี่ห้อ รุ่น ปี และประเภทพลังงานแบบทันที",
      "เครื่องคำนวณค่างวด เงินดาวน์ และดอกเบี้ยสินเชื่อรถยนต์แบบเรียลไทม์",
      "ระบบสถานะสต็อกรถและฟังก์ชันการจองรถของทีมขาย",
      "ดีไซน์ Bento แบบ Mobile-first ใช้งานง่ายบนแท็บเล็ตและสมาร์ทโฟน",
    ],
    techStack: {
      frontend: ["Vue.js", "JavaScript", "Tailwind CSS", "Pinia"],
      backend: ["REST API", "JSON Services"],
      database: ["PostgreSQL / MySQL"],
      devops: ["Vite", "GitHub Actions"],
    },
    metrics: [
      { label: "เฟรมเวิร์ก", value: "Vue.js" },
      { label: "ดีไซน์", value: "Mobile-first Bento" },
      { label: "ประเภทระบบ", value: "Inventory Dashboard" },
    ],
    githubUrl: "https://github.com/Aust9ny/dealer-web",
  },
  {
    id: "ai-usage-bar",
    title: "AI Usage Bar (macOS Native App)",
    tagline:
      "แอปพลิเคชัน Menu Bar บน macOS สำหรับติดตามปริมาณ Token และโควตาการใช้งาน AI APIs แบบเรียลไทม์",
    category: "AI & Tools",
    featured: true,
    year: "2025",
    accentColor: "yellow",
    description:
      "แอปพลิเคชัน Native Swift บนแถบเมนูบาร์ของ macOS ที่คอยเฝ้าระวังปริมาณการใช้ Token, โควตา API และค่าใช้จ่ายจากผู้ให้บริการ LLM ชั้นนำ",
    challenge:
      "การตรวจสอบสถานะ API จากผู้ให้บริการหลายรายในเบื้องหลังโดยไม่กินทรัพยากร CPU และแบตเตอรี่ พร้อมแสดงผลข้อมูลบน HUD ที่อ่านง่าย",
    solution:
      "เขียนด้วยภาษา Swift บน AppKit/SwiftUI ใช้ Asynchronous URLSessions ในการดึงข้อมูลแบบประหยัดพลังงาน พร้อมปรับความถี่การอัปเดตอย่างชาญฉลาด",
    keyFeatures: [
      "แสดงจำนวน Token และเปอร์เซ็นต์โควตาคงเหลือบน Menu Bar แบบสรุปภาพรวม",
      "ตั้งค่าเกณฑ์แจ้งเตือนผ่าน Native Notification บน macOS เมื่อโควตาใกล้หมด",
      "รองรับ API Keys ทั้ง OpenAI, Anthropic Claude และ Google Gemini",
      "ใช้หน่วยความจำต่ำมาก (<25MB) และแจกจ่ายเป็นโอเพนซอร์สแบบ MIT License",
    ],
    techStack: {
      frontend: ["Swift", "SwiftUI", "AppKit"],
      backend: ["Native macOS Services", "Async/Await"],
      database: ["Keychain Services", "UserDefaults"],
      devops: ["Xcode", "GitHub Open Source"],
    },
    metrics: [
      { label: "แพลตฟอร์ม", value: "macOS Native" },
      { label: "ภาษาที่ใช้", value: "Swift" },
      { label: "สัญญาอนุญาต", value: "MIT Open Source" },
    ],
    githubUrl: "https://github.com/Aust9ny/ai-usage-bar",
  },
  {
    id: "raid-activist",
    title: "Raid Activist Multi-Platform Suite",
    tagline:
      "แพลตฟอร์มประสานงานอีเวนต์ ตารางนัดหมายกิจกรรม และระบบจัดการบทบาทสมาชิกคอมมูนิตี้",
    category: "Full-Stack",
    featured: true,
    year: "2025",
    accentColor: "rose",
    description:
      "ระบบนิเวศน์ที่เชื่อมต่อระหว่างเว็บพอร์ทัล Vue.js, แอปพลิเคชันมือถือ TypeScript และระบบหลังบ้าน Node.js เพื่อใช้วางแผนอีเวนต์และตารางกิจกรรมของคอมมูนิตี้",
    challenge:
      "การซิงค์ข้อมูลการตอบรับเข้าร่วม (RSVP) และการแบ่งหน้าที่ของสมาชิกข้ามระหว่างผู้ใช้บนเว็บและบนมือถือพร้อมกันโดยไม่ให้เกิดความล่าช้า",
    solution:
      "ออกแบบสถาปัตยกรรม Micro-service แบบ Decoupled โดยมี Node.js REST API คอยให้บริการข้อมูลแก่ทั้งแอปพลิเคชันเว็บและมือถือด้วย Data Contracts เดียวกัน",
    keyFeatures: [
      "โปรไฟล์ผู้ใช้และระบบล็อกอินร่วมกันทั้งบน Web และ Mobile",
      "ตารางกิจกรรมเชิงโต้ตอบพร้อมระบบจัดสายและมอบหมายหน้าที่",
      "การออกแบบที่รองรับ Responsive ทุกหน้าจอเพื่อให้เช็กอินบนมือถือได้รวดเร็ว",
      "ระบบจัดการสิทธิ์ผู้ดูแลคอมมูนิตี้และตารางคะแนนกิจกรรม",
    ],
    techStack: {
      frontend: ["Vue.js", "TypeScript", "Mobile App"],
      backend: ["Node.js", "Express", "JavaScript"],
      database: ["PostgreSQL / MongoDB"],
      devops: ["Docker", "GitHub Actions"],
    },
    metrics: [
      { label: "แพลตฟอร์ม", value: "Web + Mobile + API" },
      { label: "Frontend", value: "Vue & TypeScript" },
      { label: "Backend", value: "Node.js Express" },
    ],
    githubUrl: "https://github.com/Aust9ny/Raid_Activist",
  },
  {
    id: "aust9ny-portfolio",
    title: "Aust9ny Engineering Portfolio",
    tagline:
      "เว็บไซต์พอร์ตโฟลิโอวิศวกรซอฟต์แวร์ 2 ภาษา พร้อมระบบดึงข้อมูลโปรเจกต์จาก GitHub API แบบสด",
    category: "Frontend",
    featured: false,
    year: "2026",
    accentColor: "blue",
    description:
      "เว็บไซต์พอร์ตโฟลิโอที่คุณกำลังใช้งานอยู่ พัฒนาด้วย React 19, TypeScript และ Vite ในสไตล์ Neo-brutalist พร้อมระบบ CI/CD ผ่าน GitHub Actions และการเชื่อมต่อ GitHub REST API อัตโนมัติ",
    challenge:
      "การพัฒนาพอร์ตโฟลิโอแบบ Zero Cold Start ที่มีระบบสลับ 2 ภาษา ไทย/อังกฤษ แบบทันที พร้อมแสดงโปรเจกต์จริงจาก GitHub ได้อัตโนมัติ",
    solution:
      "ใช้ Vite รวบรวมโค้ดเป็น Static Assets บน GitHub Pages CDN และเชื่อมต่อ GitHub Public API สำหรับดึงข้อมูล Repository สดจากบัญชีผู้ใช้",
    keyFeatures: [
      "ซิงค์ข้อมูลสดกับ GitHub API: แสดง Repository สาธารณะใหม่อัตโนมัติ",
      "รองรับ 2 ภาษา สลับไทย-อังกฤษได้ทันทีผ่าน LanguageContext",
      "ดีไซน์ Bento สไตล์ Neo-brutalist พร้อม Drawer สำหรับติดต่อและสมุดเยี่ยม",
      "ระบบ CI/CD อัตโนมัติผ่าน GitHub Actions Deploy ทุกครั้งที่ Push โค้ด",
    ],
    techStack: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS", "Motion"],
      backend: ["Node.js", "Express", "CORS Middleware"],
      database: ["PostgreSQL / Persistent JSON Engine"],
      devops: ["GitHub Actions", "GitHub Pages", "Docker"],
    },
    metrics: [
      { label: "Performance", value: "100% Edge CDN" },
      { label: "ความเร็ว Build", value: "<1s Vite Build" },
      { label: "ระบบ Deploy", value: "GitHub Actions" },
    ],
    githubUrl: "https://github.com/Aust9ny/Aust9ny.github.io",
    liveUrl: "https://aust9ny.github.io/",
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
