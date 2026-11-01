import { useState, useEffect, useMemo } from 'react';
import { Project, ProjectCategory } from './types';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SkillsBento } from './components/SkillsBento';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AboutSection } from './components/AboutSection';
import { ContactDrawer } from './components/ContactDrawer';
import { SavedProjectsDrawer } from './components/SavedProjectsDrawer';
import { GuestbookDrawer } from './components/GuestbookDrawer';
import { Footer } from './components/Footer';
import { useLanguage } from './i18n/LanguageContext';
import { getApiUrl } from './config/api';
import { Search, Filter, FolderGit2, X, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const { t, projects } = useLanguage();

  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'experience' | 'about'>('projects');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gitRepos, setGitRepos] = useState<Project[]>([]);
  const [isSyncingGit, setIsSyncingGit] = useState<boolean>(false);

  // Modals & Drawers
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isGuestbookOpen, setIsGuestbookOpen] = useState<boolean>(false);

  // Fetch extra public repositories from GitHub (@Aust9ny) and convert to full Project format
  const fetchGitHubProjects = (force: boolean = false) => {
    setIsSyncingGit(true);
    fetch(`https://api.github.com/users/Aust9ny/repos?sort=updated&per_page=100`)
      .then((res) => res.json())
      .then((repos: Array<Record<string, unknown>>) => {
        if (!Array.isArray(repos)) return;

        // Existing project IDs or repo names to avoid duplicates
        const existingRepos = new Set([
          'moneymind',
          'hotel-front',
          'hotel-back',
          'hotel-suite',
          'dealer-web',
          'ai-usage-bar',
          'raid_activist',
          'raid-activist',
          'aust9ny.github.io',
          'aust9ny',
          'gap-seek-main'
        ]);

        const extraProjects: Project[] = repos
          .filter((r) => {
            const name = String(r.name || '').toLowerCase();
            return !r.fork && !existingRepos.has(name);
          })
          .map((r) => {
            const rawName = String(r.name || '');
            const lang = String(r.language || '');
            const langLower = lang.toLowerCase();
            const nameLower = rawName.toLowerCase();
            const stars = Number(r.stargazers_count || 0);
            const forks = Number(r.forks_count || 0);

            // Determine category from language and name
            let category: Project['category'] = 'Full-Stack';
            if (nameLower.includes('front') || nameLower.includes('web') || langLower === 'vue' || langLower === 'astro' || langLower === 'html') {
              category = 'Frontend';
            } else if (nameLower.includes('back') || langLower === 'python' || langLower === 'go') {
              category = 'Backend & Cloud';
            } else if (nameLower.includes('ai') || nameLower.includes('tool') || langLower === 'swift') {
              category = 'AI & Tools';
            }

            return {
              id: `git-${r.id}`,
              title: rawName.replace(/[-_]/g, ' '),
              tagline: r.description ? String(r.description) : `Open-source ${lang || 'software'} repository on GitHub`,
              category,
              featured: stars > 0,
              year: new Date(String(r.updated_at || r.created_at || '')).getFullYear().toString() || '2025',
              accentColor: langLower === 'typescript' ? 'blue' : langLower === 'python' ? 'emerald' : langLower === 'vue' ? 'purple' : 'yellow',
              description: r.description ? String(r.description) : `Public software repository created and maintained by Sippakorn. Full source code, commit history, and technical assets are available on GitHub.`,
              challenge: 'Designing an efficient, scalable, and maintainable software architecture with clear documentation and modern standards.',
              solution: `Developed using ${lang || 'modern developer tooling'} with Git version control, modular code separation, and automated CI/CD practices.`,
              keyFeatures: [
                `Developed primarily with ${lang || 'TypeScript & JavaScript'}`,
                `Open-source public codebase hosted at github.com/Aust9ny/${rawName}`,
                `Repository Telemetry: ⭐ ${stars} Stars | 🍴 ${forks} Forks`,
                'Version-controlled with automated testing and GitHub workflows'
              ],
              techStack: {
                frontend: lang ? [lang] : ['TypeScript'],
                backend: ['REST API', 'Git'],
                database: ['Relational / Document DB'],
                devops: ['Git', 'GitHub Actions']
              },
              metrics: [
                { label: 'GitHub Stars', value: `⭐ ${stars}` },
                { label: 'Language', value: lang || 'Open Source' },
                { label: 'Forks', value: `🍴 ${forks}` }
              ],
              githubUrl: String(r.html_url || `https://github.com/Aust9ny/${rawName}`),
              liveUrl: r.homepage ? String(r.homepage) : undefined
            };
          });

        setGitRepos(extraProjects);
      })
      .catch((err) => console.log('GitHub sync note:', err))
      .finally(() => setIsSyncingGit(false));
  };

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  // Live Project Stats from API
  const [projectStats, setProjectStats] = useState<Record<string, { likes: number; views: number }>>({});

  useEffect(() => {
    fetch(getApiUrl('/api/projects/stats'))
      .then((res) => res.json())
      .then((data) => {
        if (data.stats) setProjectStats(data.stats);
      })
      .catch((err) => console.log('Stats sync notice:', err));
  }, []);

  const handleLikeProject = async (id: string) => {
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    try {
      const res = await fetch(getApiUrl(`/api/projects/${id}/like`), { method: 'POST' });
      const data = await res.json();
      if (data.stat) {
        setProjectStats((prev) => ({
          ...prev,
          [id]: data.stat,
        }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenProjectDetails = (project: Project) => {
    setSelectedProject(project);
    fetch(getApiUrl(`/api/projects/${project.id}/view`), { method: 'POST' })
      .then((res) => res.json())
      .then((data) => {
        if (data.stat) {
          setProjectStats((prev) => ({
            ...prev,
            [project.id]: data.stat,
          }));
        }
      })
      .catch(() => {});
  };

  // Saved / Bookmarked Projects in LocalStorage
  const [savedProjects, setSavedProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('sippakorn_saved_projects');
      if (saved) return JSON.parse(saved);
      return [projects[0]];
    } catch {
      return [projects[0]];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sippakorn_saved_projects', JSON.stringify(savedProjects));
    } catch (e) {
      console.error(e);
    }
  }, [savedProjects]);

  const toggleSaveProject = (project: Project) => {
    setSavedProjects((prev) => {
      const exists = prev.some((p) => p.id === project.id);
      if (exists) {
        return prev.filter((p) => p.id !== project.id);
      } else {
        return [...prev, project];
      }
    });
  };

  const removeSavedProject = (id: string) => {
    setSavedProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const clearAllSaved = () => {
    setSavedProjects([]);
  };

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'All', label: t.allFilter },
    { key: 'Full-Stack', label: t.categoryFullStack },
    { key: 'Frontend', label: t.categoryFrontend },
    { key: 'Backend & Cloud', label: t.categoryBackend },
    { key: 'AI & Tools', label: t.categoryAi },
  ];

  // Combine core real projects with extra public repos from GitHub
  const allProjects = useMemo(() => {
    return [...projects, ...gitRepos];
  }, [projects, gitRepos]);

  // Filter projects by category and search term
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const inTitle = project.title.toLowerCase().includes(query);
    const inTagline = project.tagline.toLowerCase().includes(query);
    const inDesc = project.description.toLowerCase().includes(query);
    const inTech =
      project.techStack.frontend?.some((tech) => tech.toLowerCase().includes(query)) ||
      project.techStack.backend?.some((tech) => tech.toLowerCase().includes(query)) ||
      project.techStack.database?.some((tech) => tech.toLowerCase().includes(query)) ||
      project.techStack.devops?.some((tech) => tech.toLowerCase().includes(query));

    return matchesCategory && (inTitle || inTagline || inDesc || inTech);
  });

  const handleExploreProjects = () => {
    setActiveTab('projects');
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 font-sans selection:bg-yellow-300 selection:text-zinc-900 flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedProjects={savedProjects}
        setIsSavedDrawerOpen={setIsSavedDrawerOpen}
        setIsContactDrawerOpen={setIsContactDrawerOpen}
        setIsGuestbookOpen={setIsGuestbookOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* HERO SECTION BENTO GRID */}
        <HeroBento
          onExploreProjects={handleExploreProjects}
          onOpenContact={() => setIsContactDrawerOpen(true)}
        />

        {/* PROJECTS SHOWCASE SECTION */}
        <section id="projects" className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
          {/* Section Header */}
          <div className="border-2 border-zinc-900 bg-white p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] sm:shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-2.5 h-2.5 bg-blue-600"></span>
                <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
                  {t.projectsHeading}
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-600 max-w-2xl">
                {t.projectsSubheading}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {/* Live GitHub status badge */}
              <div className="flex items-center space-x-1 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-emerald-50 border-2 border-zinc-900 text-[10px] sm:text-xs font-black uppercase text-emerald-950 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 border border-zinc-900 -ml-2"></span>
                <span>GitHub Synced</span>
              </div>

              {/* Manual refresh button */}
              <button
                onClick={() => fetchGitHubProjects(true)}
                disabled={isSyncingGit}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-yellow-300 hover:bg-yellow-400 border-2 border-zinc-900 text-[10px] sm:text-xs font-black uppercase text-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] flex items-center space-x-1 transition-all active:translate-x-[1px] active:translate-y-[1px]"
                title="Refresh projects from GitHub"
              >
                <RefreshCw className={`w-3 sm:w-3.5 h-3 sm:h-3.5 ${isSyncingGit ? 'animate-spin' : ''}`} />
                <span>{isSyncingGit ? 'Syncing...' : 'Sync'}</span>
              </button>

              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-blue-50 border-2 border-zinc-900 text-[10px] sm:text-xs font-black uppercase text-blue-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                {filteredProjects.length} / {allProjects.length} Works
              </span>
            </div>
          </div>

          {/* Filter Bar & Search Bento Control */}
          <div className="bento-card p-3 sm:p-4 bg-white flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Category Filter Pills (Horizontal swipe on mobile) */}
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar -mx-1 px-1 pb-1 md:pb-0">
              <Filter className="w-3.5 h-3.5 text-zinc-500 mr-1 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-black uppercase tracking-wide border-2 whitespace-nowrap transition-all flex-shrink-0 active:translate-x-[1px] active:translate-y-[1px] ${
                    selectedCategory === cat.key
                      ? 'bg-zinc-900 text-white border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchProjectsPlaceholder}
                className="w-full pl-9 pr-8 py-2 text-base sm:text-xs font-bold bg-zinc-50 border-2 border-zinc-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600 rounded-none shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Project Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div className="bento-card p-12 bg-white text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-zinc-100 border-2 border-zinc-900 flex items-center justify-center mx-auto text-zinc-400">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <p className="text-sm font-black text-zinc-800">
                {t.noProjectsFound}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="bento-btn px-4 py-2 bg-yellow-300 text-xs font-black uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isSaved={savedProjects.some((p) => p.id === project.id)}
                  likes={projectStats[project.id]?.likes}
                  views={projectStats[project.id]?.views}
                  onLike={handleLikeProject}
                  onToggleSave={toggleSaveProject}
                  onOpenDetails={handleOpenProjectDetails}
                />
              ))}
            </div>
          )}
        </section>

        {/* SKILLS BENTO SECTION */}
        <SkillsBento />

        {/* EXPERIENCE TIMELINE SECTION */}
        <ExperienceTimeline />

        {/* ABOUT ME SECTION */}
        <AboutSection onOpenContact={() => setIsContactDrawerOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactDrawer
        isOpen={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
      />

      <SavedProjectsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProjects={savedProjects}
        onRemoveSaved={removeSavedProject}
        onClearAll={clearAllSaved}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      <GuestbookDrawer
        isOpen={isGuestbookOpen}
        onClose={() => setIsGuestbookOpen(false)}
      />
    </div>
  );
}
