import { TranslationDictionary } from './types';

export const translations: Record<'en' | 'th', TranslationDictionary> = {
  en: {
    // Navigation & Branding
    brandName: 'SIPPAKORN',
    brandTag: 'DEV',
    availableForHire: 'Available for Hire',
    navProjects: 'Projects',
    navSkills: 'Skills & Stack',
    navExperience: 'Experience',
    navAbout: 'About Me',
    navContact: 'Contact',
    navBookmarks: 'Saved',

    // Hero Section
    heroBadgeRole: 'Full-Stack Software Engineer',
    heroBadgeStatus: 'Open to Work • Bangkok & Remote',
    heroCtaProjects: 'Explore Featured Projects',
    heroCtaContact: 'Get in Touch',
    heroCtaResume: 'Download Resume / CV',
    heroStatsYears: 'Years of Experience',
    heroStatsProjects: 'Production Projects',
    heroStatsUptime: 'Platform Reliability',
    heroStatsCommits: 'Git Contributions',
    heroCurrentFocusTitle: 'CURRENT TECH FOCUS',
    heroCurrentFocusDesc: 'React 19, TypeScript, Next.js App Router, Node.js Microservices, PostgreSQL & Cloud Orchestration',
    quickConnectTitle: 'DIRECT CHANNELS',
    copyEmailSuccess: 'Email copied to clipboard!',

    // Projects Section
    projectsHeading: 'Featured Work & Engineering Projects',
    projectsSubheading: 'Production applications, distributed systems, and real-world software built with performance, security, and developer ergonomics.',
    searchProjectsPlaceholder: 'Search projects by name, description, or tech stack (e.g. React, Redis)...',
    allFilter: 'All Projects',
    categoryFullStack: 'Full-Stack',
    categoryFrontend: 'Frontend',
    categoryBackend: 'Backend & Cloud',
    categoryAi: 'AI & Tools',
    viewProjectDetails: 'Case Study & Details',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    bookmarkProject: 'Bookmark Project',
    bookmarked: 'Bookmarked',
    noProjectsFound: 'No projects match your filter or search query.',
    featuredBadge: 'Featured Project',

    // Project Modal
    modalOverview: 'Overview & Architecture',
    modalChallenge: 'Engineering Challenge',
    modalSolution: 'Architectural Solution',
    modalKeyFeatures: 'Core Capabilities',
    modalTechStack: 'Technology Stack',
    modalImpactMetrics: 'Key Outcomes & Telemetry',
    modalClose: 'Close',
    modalVisitLive: 'Open Live Demo',
    modalViewSource: 'Inspect Code on GitHub',

    // Skills Section
    skillsHeading: 'Technical Expertise & Skills Matrix',
    skillsSubheading: 'Proven proficiencies across the modern web stack, database systems, distributed backends, and cloud deployment pipelines.',
    coreSkillsHighlight: '4+ Years of continuous hands-on software development with high engineering standards.',

    // Experience Section
    expHeading: 'Work Experience & Milestones',
    expSubheading: 'A track record of engineering leadership, scalable product delivery, and continuous technical growth.',
    expPresent: 'Present',
    expKeyAchievements: 'Key Achievements & Impact',
    expTechUsed: 'Technologies Used',

    // About Section
    aboutHeading: 'About Me & Engineering Philosophy',
    aboutSubheading: 'Driven by curiosity, structured thinking, and a dedication to writing clean, maintainable, and high-impact code.',
    aboutPhilosophyTitle: 'My Engineering Philosophy',
    aboutCoreValuesTitle: 'Core Principles I Work By',
    aboutValue1Title: 'Pragmatic & Scalable Architecture',
    aboutValue1Desc: 'I choose proven, battle-tested technologies that solve real problems over transient hype, optimizing for team velocity and maintainability.',
    aboutValue2Title: 'Obsession with Performance',
    aboutValue2Desc: 'Fast load times, minimal bundle sizes, responsive database indexing, and low latency are non-negotiable standards.',
    aboutValue3Title: 'Clear Ownership & Communication',
    aboutValue3Desc: 'Strong product sense, proactive collaboration with design and stakeholders, and writing thorough documentation and tests.',

    // Contact Drawer
    contactDrawerTitle: "Let's Build Something Great",
    contactDrawerSubtitle: 'Have a project in mind, an open full-time position, or a consulting inquiry? Drop a message below or reach out directly.',
    copyEmail: 'Copy Email',
    emailCopied: 'Copied!',
    formName: 'Your Name',
    formEmail: 'Email Address',
    formSubject: 'Subject / Project Type',
    formMessage: 'Message',
    sendMessage: 'Send Message',
    messageSent: 'Message Sent!',
    messageSuccessAlert: 'Thank you for reaching out! I will respond to your message promptly.',
    downloadCv: 'Download Full Resume (PDF)',
    socialLinksTitle: 'Connect on Social & Professional Networks',

    // Bookmarks Drawer
    savedDrawerTitle: 'Saved & Bookmarked Projects',
    savedDrawerEmpty: 'No Saved Projects Yet',
    savedDrawerEmptyDesc: 'Click the bookmark icon on any project card to pin it here for easy review and reference.',
    clearAllBookmarks: 'Clear All Bookmarks',
    viewDetailsBtn: 'View Details',

    // Footer
    footerCopyright: '© 2026 Sippakorn. All rights reserved.',
    footerBuiltWith: 'Designed with Neo-Brutalism style using React 19, TypeScript & Tailwind CSS.',
    backToTop: 'Back to Top'
  },

  th: {
    // Navigation & Branding
    brandName: 'SIPPAKORN',
    brandTag: 'DEV',
    availableForHire: 'พร้อมรับงานทันที',
    navProjects: 'ผลงาน & โปรเจกต์',
    navSkills: 'ทักษะ & เทคโนโลยี',
    navExperience: 'ประสบการณ์ทำงาน',
    navAbout: 'เกี่ยวกับฉัน',
    navContact: 'ติดต่อ',
    navBookmarks: 'บันทึกไว้',

    // Hero Section
    heroBadgeRole: 'วิศวกรซอฟต์แวร์ Full-Stack',
    heroBadgeStatus: 'พร้อมเริ่มงาน • กรุงเทพฯ & ทำงานทางไกล (Remote)',
    heroCtaProjects: 'ดูผลงานและเคสศึกษา',
    heroCtaContact: 'ติดต่อพูดคุย',
    heroCtaResume: 'ดาวน์โหลดเรซูเม่ (CV)',
    heroStatsYears: 'ปีประสบการณ์ทำงาน',
    heroStatsProjects: 'โปรเจกต์ระดับ Production',
    heroStatsUptime: 'ความเสถียรของระบบ',
    heroStatsCommits: 'การอัปเดตโค้ด Git',
    heroCurrentFocusTitle: 'เทคโนโลยีที่กำลังโฟกัส',
    heroCurrentFocusDesc: 'React 19, TypeScript, Next.js App Router, Node.js Microservices, PostgreSQL & Cloud Orchestration',
    quickConnectTitle: 'ช่องทางติดต่อโดยตรง',
    copyEmailSuccess: 'คัดลอกอีเมลเรียบร้อยแล้ว!',

    // Projects Section
    projectsHeading: 'ผลงานที่โดดเด่นและโปรเจกต์ซอฟต์แวร์',
    projectsSubheading: 'แอปพลิเคชันระดับ Production, ระบบกระจายตัว และซอฟต์แวร์ที่พัฒนาโดยคำนึงถึงความเร็ว ความปลอดภัย และสถาปัตยกรรมที่ยั่งยืน',
    searchProjectsPlaceholder: 'ค้นหาโปรเจกต์จากชื่อ รายละเอียด หรือเทคโนโลยี (เช่น React, Redis)...',
    allFilter: 'ทุกโปรเจกต์',
    categoryFullStack: 'Full-Stack',
    categoryFrontend: 'Frontend',
    categoryBackend: 'Backend & Cloud',
    categoryAi: 'AI & Tools',
    viewProjectDetails: 'ดูเคสศึกษา & รายละเอียด',
    liveDemo: 'ชมตัวอย่างระบบสด',
    sourceCode: 'ดูซอร์สโค้ด GitHub',
    bookmarkProject: 'บันทึกโปรเจกต์',
    bookmarked: 'บันทึกแล้ว',
    noProjectsFound: 'ไม่พบโปรเจกต์ที่ตรงกับคำค้นหาหรือตัวกรองที่เลือก',
    featuredBadge: 'โปรเจกต์แนะนำ',

    // Project Modal
    modalOverview: 'ภาพรวม & สถาปัตยกรรม',
    modalChallenge: 'ความท้าทายทางวิศวกรรม',
    modalSolution: 'แนวทางการแก้ปัญหาทางเทคนิค',
    modalKeyFeatures: 'ฟีเจอร์และความสามารถหลัก',
    modalTechStack: 'เทคโนโลยีและเครื่องมือที่ใช้',
    modalImpactMetrics: 'ผลลัพธ์และตัวชี้วัดประสิทธิภาพ',
    modalClose: 'ปิดหน้าต่าง',
    modalVisitLive: 'เปิดชมเว็บไซต์จริง',
    modalViewSource: 'ตรวจสอบซอร์สโค้ดบน GitHub',

    // Skills Section
    skillsHeading: 'ทักษะและความเชี่ยวชาญทางเทคนิค',
    skillsSubheading: 'ความเชี่ยวชาญครอบคลุม Web Stack สมัยใหม่ ระบบฐานข้อมูล การออกแบบ Backend แบบกระจายตัว และกระบวนการ Cloud Deployment',
    coreSkillsHighlight: 'ประสบการณ์พัฒนาซอฟต์แวร์จริงอย่างต่อเนื่องกว่า 4 ปี พร้อมมาตรฐานวิศวกรรมระดับสูง',

    // Experience Section
    expHeading: 'ประวัติการทำงานและการศึกษา',
    expSubheading: 'เส้นทางการทำงาน การส่งมอบระบบขนาดใหญ่ และการเติบโตทางเทคนิคอย่างต่อเนื่อง',
    expPresent: 'ปัจจุบัน',
    expKeyAchievements: 'ผลงานเด่นและความสำเร็จ',
    expTechUsed: 'เทคโนโลยีที่ใช้งาน',

    // About Section
    aboutHeading: 'เกี่ยวกับฉันและปรัชญาการทำงาน',
    aboutSubheading: 'ขับเคลื่อนด้วยความใคร่รู้ การคิดอย่างเป็นระบบ และความมุ่งมั่นในการเขียนโค้ดที่สะอาด ดูแลรักษาง่าย และสร้างผลลัพธ์ต่อธุรกิจ',
    aboutPhilosophyTitle: 'ปรัชญาทางวิศวกรรมของผม',
    aboutCoreValuesTitle: 'หลักการสำคัญในการทำงาน',
    aboutValue1Title: 'สถาปัตยกรรมที่สมจริงและพร้อมขยายตัว',
    aboutValue1Desc: 'เลือกใช้เทคโนโลยีที่ผ่านการพิสูจน์แล้วว่าแก้ปัญหาได้จริงมากกว่าการตามกระแสชั่วคราว เพื่อความเร็วและการดูแลรักษาที่ง่ายในระยะยาว',
    aboutValue2Title: 'ใส่ใจในประสิทธิภาพความเร็วระดับสูงสุด',
    aboutValue2Desc: 'เวลาโหลดที่เร็ว, ขนาด Bundle ที่เบา, การทำดัชนีฐานข้อมูลที่แม่นยำ และ Latency ต่ำ คือมาตรฐานที่ไม่สามารถประนีประนอมได้',
    aboutValue3Title: 'ความรับผิดชอบและการสื่อสารที่ชัดเจน',
    aboutValue3Desc: 'เข้าใจมุมมองเชิงธุรกิจ ประสานงานเชิงรุกกับทีมดีไซน์และผู้มีส่วนได้ส่วนเสีย พร้อมจัดทำเอกสารและเขียนชุดทดสอบที่ครอบคลุม',

    // Contact Drawer
    contactDrawerTitle: 'มาร่วมสร้างสรรค์โปรเจกต์ด้วยกัน',
    contactDrawerSubtitle: 'หากคุณมีตำแหน่งงานประจำที่น่าสนใจ มีโปรเจกต์ที่ต้องการผู้เชี่ยวชาญ หรือต้องการคำปรึกษา สามารถส่งข้อความหรือติดต่อได้ทันที',
    copyEmail: 'คัดลอกอีเมล',
    emailCopied: 'คัดลอกแล้ว!',
    formName: 'ชื่อของคุณ',
    formEmail: 'อีเมลติดต่อ',
    formSubject: 'หัวข้อ / ประเภทโปรเจกต์',
    formMessage: 'ข้อความรายละเอียด',
    sendMessage: 'ส่งข้อความ',
    messageSent: 'ส่งข้อความเรียบร้อย!',
    messageSuccessAlert: 'ขอบคุณสำหรับการติดต่อ! ผมจะตอบกลับข้อความของคุณโดยเร็วที่สุดครับ',
    downloadCv: 'ดาวน์โหลดเรซูเม่ฉบับเต็ม (PDF)',
    socialLinksTitle: 'ช่องทางเชื่อมต่อโซเชียลและเครือข่ายมืออาชีพ',

    // Bookmarks Drawer
    savedDrawerTitle: 'โปรเจกต์ที่คุณบันทึกไว้',
    savedDrawerEmpty: 'ยังไม่มีโปรเจกต์ที่บันทึก',
    savedDrawerEmptyDesc: 'คุณสามารถคลิกไอคอนบันทึกบนการ์ดผลงาน เพื่อปักหมุดไว้เปิดดูย้อนหลังได้อย่างสะดวก',
    clearAllBookmarks: 'ล้างรายการที่บันทึกทั้งหมด',
    viewDetailsBtn: 'ดูรายละเอียด',

    // Footer
    footerCopyright: '© 2026 ศิปกรณ์ (Sippakorn). สงวนลิขสิทธิ์ทั้งหมด',
    footerBuiltWith: 'ออกแบบด้วยสไตล์ Neo-Brutalism โดยใช้ React 19, TypeScript และ Tailwind CSS',
    backToTop: 'กลับสู่ด้านบน'
  }
};
