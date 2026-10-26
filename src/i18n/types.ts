export type Language = 'en' | 'th';

export interface TranslationDictionary {
  // Navigation & Branding
  brandName: string;
  brandTag: string;
  availableForHire: string;
  navProjects: string;
  navSkills: string;
  navExperience: string;
  navAbout: string;
  navContact: string;
  navBookmarks: string;

  // Hero Section
  heroBadgeRole: string;
  heroBadgeStatus: string;
  heroCtaProjects: string;
  heroCtaContact: string;
  heroCtaResume: string;
  heroStatsYears: string;
  heroStatsProjects: string;
  heroStatsUptime: string;
  heroStatsCommits: string;
  heroCurrentFocusTitle: string;
  heroCurrentFocusDesc: string;
  quickConnectTitle: string;
  copyEmailSuccess: string;

  // Projects Section
  projectsHeading: string;
  projectsSubheading: string;
  searchProjectsPlaceholder: string;
  allFilter: string;
  categoryFullStack: string;
  categoryFrontend: string;
  categoryBackend: string;
  categoryAi: string;
  viewProjectDetails: string;
  liveDemo: string;
  sourceCode: string;
  bookmarkProject: string;
  bookmarked: string;
  noProjectsFound: string;
  featuredBadge: string;

  // Project Modal
  modalOverview: string;
  modalChallenge: string;
  modalSolution: string;
  modalKeyFeatures: string;
  modalTechStack: string;
  modalImpactMetrics: string;
  modalClose: string;
  modalVisitLive: string;
  modalViewSource: string;

  // Skills Section
  skillsHeading: string;
  skillsSubheading: string;
  coreSkillsHighlight: string;

  // Experience Section
  expHeading: string;
  expSubheading: string;
  expPresent: string;
  expKeyAchievements: string;
  expTechUsed: string;

  // About Section
  aboutHeading: string;
  aboutSubheading: string;
  aboutPhilosophyTitle: string;
  aboutCoreValuesTitle: string;
  aboutValue1Title: string;
  aboutValue1Desc: string;
  aboutValue2Title: string;
  aboutValue2Desc: string;
  aboutValue3Title: string;
  aboutValue3Desc: string;

  // Contact Drawer
  contactDrawerTitle: string;
  contactDrawerSubtitle: string;
  copyEmail: string;
  emailCopied: string;
  formName: string;
  formEmail: string;
  formSubject: string;
  formMessage: string;
  sendMessage: string;
  messageSent: string;
  messageSuccessAlert: string;
  downloadCv: string;
  socialLinksTitle: string;

  // Bookmarks Drawer
  savedDrawerTitle: string;
  savedDrawerEmpty: string;
  savedDrawerEmptyDesc: string;
  clearAllBookmarks: string;
  viewDetailsBtn: string;

  // Footer
  footerCopyright: string;
  footerBuiltWith: string;
  backToTop: string;
}
