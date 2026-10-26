import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationDictionary } from './types';
import { translations } from './translations';
import { Project, SkillCategory, ExperienceItem, ProfileInfo } from '../types';
import {
  portfolioProfile,
  portfolioProjects,
  portfolioSkills,
  portfolioExperiences,
} from '../data/portfolioData';
import {
  portfolioProfileThai,
  portfolioProjectsThai,
  portfolioSkillsThai,
  portfolioExperiencesThai,
} from './portfolioThai';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
  profile: ProfileInfo;
  projects: Project[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sippakorn_portfolio_lang');
      if (saved === 'th' || saved === 'en') return saved;
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('th')) {
        return 'th';
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('sippakorn_portfolio_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] || translations.en;
  const profile = language === 'th' ? portfolioProfileThai : portfolioProfile;
  const projects = language === 'th' ? portfolioProjectsThai : portfolioProjects;
  const skills = language === 'th' ? portfolioSkillsThai : portfolioSkills;
  const experiences = language === 'th' ? portfolioExperiencesThai : portfolioExperiences;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        profile,
        projects,
        skills,
        experiences,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
