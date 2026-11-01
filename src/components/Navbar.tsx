import { useState } from 'react';
import { Project } from '../types';
import {
  Code2,
  Bookmark,
  Languages,
  Send,
  FolderGit2,
  Cpu,
  History,
  User,
  Menu,
  X,
  Activity,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  activeTab: 'projects' | 'skills' | 'experience' | 'about';
  setActiveTab: (tab: 'projects' | 'skills' | 'experience' | 'about') => void;
  savedProjects: Project[];
  setIsSavedDrawerOpen: (open: boolean) => void;
  setIsContactDrawerOpen: (open: boolean) => void;
  setIsGuestbookOpen?: (open: boolean) => void;
}

export function Navbar({
  activeTab,
  setActiveTab,
  savedProjects,
  setIsSavedDrawerOpen,
  setIsContactDrawerOpen,
  setIsGuestbookOpen,
}: NavbarProps) {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: 'projects' | 'skills' | 'experience' | 'about') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#f8f9fa] border-b-2 border-zinc-900 text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Status Badge */}
          <div
            className="flex items-center space-x-3 cursor-pointer group select-none"
            onClick={() => handleTabClick('projects')}
          >
            <div className="w-11 h-11 bg-blue-600 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] flex items-center justify-center text-white font-black text-xl group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all">
              <Code2 className="w-6 h-6 text-white stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-2xl tracking-tight text-zinc-900">
                  {t.brandName}<span className="text-blue-600">.{t.brandTag}</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold bg-green-100 border-2 border-zinc-900 text-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {t.availableForHire}
                </span>
              </div>
              <p className="text-xs text-zinc-500 font-semibold hidden md:block">
                Full-Stack Developer & Software Engineer
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs (Neo-Brutalist Pills) */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-zinc-200/80 p-1.5 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
            <button
              onClick={() => handleTabClick('projects')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wide border-2 transition-all ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
                  : 'bg-white text-zinc-800 border-transparent hover:border-zinc-900 hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>{t.navProjects}</span>
            </button>

            <button
              onClick={() => handleTabClick('skills')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wide border-2 transition-all ${
                activeTab === 'skills'
                  ? 'bg-blue-600 text-white border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
                  : 'bg-white text-zinc-800 border-transparent hover:border-zinc-900 hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{t.navSkills}</span>
            </button>

            <button
              onClick={() => handleTabClick('experience')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wide border-2 transition-all ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
                  : 'bg-white text-zinc-800 border-transparent hover:border-zinc-900 hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
              }`}
            >
              <History className="w-4 h-4" />
              <span>{t.navExperience}</span>
            </button>

            <button
              onClick={() => handleTabClick('about')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wide border-2 transition-all ${
                activeTab === 'about'
                  ? 'bg-blue-600 text-white border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
                  : 'bg-white text-zinc-800 border-transparent hover:border-zinc-900 hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{t.navAbout}</span>
            </button>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center space-x-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 bg-white border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:bg-zinc-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-xs font-extrabold uppercase"
              title="Toggle English / Thai"
            >
              <Languages className="w-4 h-4 text-zinc-800" />
              <span>{language === 'en' ? '🇹🇭 TH' : '🇬🇧 EN'}</span>
            </button>

            {/* DevOps & Guestbook Telemetry Button */}
            {setIsGuestbookOpen && (
              <button
                onClick={() => setIsGuestbookOpen(true)}
                className="flex items-center space-x-1.5 px-2.5 py-1.5 bg-white border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:bg-zinc-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-xs font-black uppercase"
                title="Live Server Telemetry & Guestbook"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="hidden sm:inline">Telemetry</span>
              </button>
            )}

            {/* Saved Bookmarks Button */}
            <button
              onClick={() => setIsSavedDrawerOpen(true)}
              className="relative p-2 bg-white border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] hover:bg-zinc-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              title={t.savedDrawerTitle}
            >
              <Bookmark className="w-5 h-5 text-zinc-800" />
              {savedProjects.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-300 border-2 border-zinc-900 rounded-full text-[10px] font-black flex items-center justify-center text-zinc-900 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]">
                  {savedProjects.length}
                </span>
              )}
            </button>

            {/* Contact Drawer CTA Button */}
            <button
              onClick={() => setIsContactDrawerOpen(true)}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-yellow-300 hover:bg-yellow-400 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] text-zinc-900 text-xs font-black uppercase tracking-wide active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <Send className="w-4 h-4" />
              <span>{t.navContact}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-white border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] text-zinc-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-zinc-900 bg-white p-4 space-y-2">
          <button
            onClick={() => handleTabClick('projects')}
            className="w-full text-left px-3 py-2 border-2 border-zinc-900 font-black text-sm flex items-center justify-between bg-zinc-50 hover:bg-yellow-100"
          >
            <span>{t.navProjects}</span>
            <FolderGit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleTabClick('skills')}
            className="w-full text-left px-3 py-2 border-2 border-zinc-900 font-black text-sm flex items-center justify-between bg-zinc-50 hover:bg-yellow-100"
          >
            <span>{t.navSkills}</span>
            <Cpu className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleTabClick('experience')}
            className="w-full text-left px-3 py-2 border-2 border-zinc-900 font-black text-sm flex items-center justify-between bg-zinc-50 hover:bg-yellow-100"
          >
            <span>{t.navExperience}</span>
            <History className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleTabClick('about')}
            className="w-full text-left px-3 py-2 border-2 border-zinc-900 font-black text-sm flex items-center justify-between bg-zinc-50 hover:bg-yellow-100"
          >
            <span>{t.navAbout}</span>
            <User className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsContactDrawerOpen(true);
            }}
            className="w-full text-center px-3 py-2.5 bg-yellow-300 border-2 border-zinc-900 font-black text-sm shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>{t.navContact}</span>
          </button>
        </div>
      )}
    </header>
  );
}
