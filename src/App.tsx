import { useState, useEffect } from 'react';
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
import { GitHubReposSection } from './components/GitHubReposSection';
import { Footer } from './components/Footer';
import { useLanguage } from './i18n/LanguageContext';
import { getApiUrl } from './config/api';
import { Search, Filter, Sparkles, FolderGit2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const { t, projects } = useLanguage();

  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'experience' | 'about'>('projects');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [projectDisplayMode, setProjectDisplayMode] = useState<'featured' | 'github'>('featured');

  // Modals & Drawers
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isGuestbookOpen, setIsGuestbookOpen] = useState<boolean>(false);

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

  // Filter projects by category and search term
  const filteredProjects = projects.filter((project) => {
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
        <section id="projects" className="space-y-6 pt-6">
          {/* Section Header */}
          <div className="border-2 border-zinc-900 bg-white p-6 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-2.5 h-2.5 bg-blue-600"></span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
                  {t.projectsHeading}
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-600 max-w-2xl">
                {t.projectsSubheading}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1.5 bg-blue-50 border-2 border-zinc-900 text-xs font-black uppercase text-blue-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                {projectDisplayMode === 'featured' ? `${filteredProjects.length} / ${projects.length} Works` : 'Live GitHub Feed'}
              </span>
            </div>
          </div>

          {/* Sub-view switcher: Curated Case Studies vs Live GitHub Repos */}
          <div className="flex flex-wrap items-center gap-2 border-b-2 border-zinc-900 pb-2">
            <button
              onClick={() => setProjectDisplayMode('featured')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wide border-2 transition-all flex items-center space-x-2 ${
                projectDisplayMode === 'featured'
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]'
                  : 'bg-white hover:bg-zinc-100 text-zinc-700 border-zinc-900 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Case Studies ({projects.length})</span>
            </button>

            <button
              onClick={() => setProjectDisplayMode('github')}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wide border-2 transition-all flex items-center space-x-2 ${
                projectDisplayMode === 'github'
                  ? 'bg-emerald-400 text-zinc-900 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]'
                  : 'bg-white hover:bg-zinc-100 text-zinc-700 border-zinc-900 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Live GitHub Repositories</span>
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            </button>
          </div>

          {projectDisplayMode === 'github' ? (
            /* LIVE GITHUB REPOSITORIES SYNC */
            <GitHubReposSection username="Aust9ny" />
          ) : (
            /* CURATED FEATURED PROJECTS */
            <>
              {/* Filter Bar & Search Bento Control */}
              <div className="bento-card p-4 bg-white flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Category Filter Pills */}
                <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0">
                  <Filter className="w-4 h-4 text-zinc-500 mr-1 flex-shrink-0" />
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`px-3 py-1 text-xs font-black uppercase tracking-wide border-2 whitespace-nowrap transition-all ${
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
                <div className="relative md:w-72">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchProjectsPlaceholder}
                    className="w-full pl-9 pr-8 py-1.5 text-xs font-bold bg-zinc-50 border-2 border-zinc-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600"
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
            </>
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
