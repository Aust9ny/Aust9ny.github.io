import { useState } from 'react';
import {
  ArrowRight,
  Download,
  Send,
  Github,
  Linkedin,
  Mail,
  Check,
  Sparkles,
  Terminal,
  Zap,
  Code2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroBentoProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export function HeroBento({ onExploreProjects, onOpenContact }: HeroBentoProps) {
  const { profile, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    confetti({ particleCount: 25, spread: 40, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadCv = () => {
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    // Trigger download or open resume
    window.open('https://github.com/sippakorn-ka', '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Main Headline Bento Card (8 Cols) */}
      <div className="lg:col-span-8 bg-white border-2 border-zinc-900 p-6 sm:p-8 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] flex flex-col justify-between relative overflow-hidden">
        {/* Top Badges */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-blue-600 border-2 border-zinc-900 text-white text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              {t.heroBadgeRole}
            </span>
            <span className="px-3 py-1 bg-yellow-300 border-2 border-zinc-900 text-zinc-900 text-xs font-black uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              {t.heroBadgeStatus}
            </span>
          </div>

          {/* Big Punchy Headline */}
          <div className="space-y-3 pt-2">
            <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-[1.1]">
              {profile.heroHeadline}
            </h1>
            <p className="text-sm sm:text-base text-zinc-700 font-medium leading-relaxed max-w-2xl">
              {profile.heroSubtitle}
            </p>
          </div>
        </div>

        {/* Action Buttons & Tech Highlights */}
        <div className="pt-8 space-y-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onExploreProjects}
              className="bento-btn px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wide flex items-center space-x-2 cursor-pointer"
            >
              <span>{t.heroCtaProjects}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            <button
              onClick={onOpenContact}
              className="bento-btn px-5 py-3 bg-yellow-300 hover:bg-yellow-400 text-zinc-900 font-black text-sm uppercase tracking-wide flex items-center space-x-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.heroCtaContact}</span>
            </button>

            <button
              onClick={handleDownloadCv}
              className="bento-btn px-4 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-black text-sm uppercase tracking-wide flex items-center space-x-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{t.heroCtaResume}</span>
              <span className="sm:hidden">Resume</span>
            </button>
          </div>

          <div className="pt-3 border-t-2 border-zinc-900 flex flex-wrap items-center gap-2 text-xs font-extrabold text-zinc-600">
            <span className="text-zinc-900 uppercase">Core Stack:</span>
            {['TypeScript', 'React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-zinc-100 border border-zinc-900 text-zinc-900 text-[11px] font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Bento Column: Stats & Focus (4 Cols) */}
      <div className="lg:col-span-4 flex flex-col gap-5">
        {/* Metric Grid Card */}
        <div className="bg-white border-2 border-zinc-900 p-5 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)]">
          <div className="grid grid-cols-2 gap-3">
            {/* Stat 1 */}
            <div className="bg-blue-50 border-2 border-zinc-900 p-3 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              <div className="text-2xl sm:text-3xl font-black text-blue-600">
                {profile.stats.yearsExp}
              </div>
              <div className="text-[11px] font-black uppercase text-zinc-700 tracking-wide mt-1">
                {t.heroStatsYears}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-yellow-50 border-2 border-zinc-900 p-3 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              <div className="text-2xl sm:text-3xl font-black text-zinc-900">
                {profile.stats.completedProjects}
              </div>
              <div className="text-[11px] font-black uppercase text-zinc-700 tracking-wide mt-1">
                {t.heroStatsProjects}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-emerald-50 border-2 border-zinc-900 p-3 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                {profile.stats.satisfactionRate}
              </div>
              <div className="text-[11px] font-black uppercase text-zinc-700 tracking-wide mt-1">
                {t.heroStatsUptime}
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-purple-50 border-2 border-zinc-900 p-3 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
              <div className="text-2xl sm:text-3xl font-black text-purple-600">
                {profile.stats.codeCommits}
              </div>
              <div className="text-[11px] font-black uppercase text-zinc-700 tracking-wide mt-1">
                {t.heroStatsCommits}
              </div>
            </div>
          </div>
        </div>

        {/* Current Tech Focus Bento Card */}
        <div className="bg-yellow-300 border-2 border-zinc-900 p-5 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)]">
          <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-zinc-900 mb-2">
            <Zap className="w-4 h-4 fill-zinc-900" />
            <span>{t.heroCurrentFocusTitle}</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
            {t.heroCurrentFocusDesc}
          </p>
        </div>

        {/* Direct Connect & Socials Card */}
        <div className="bg-white border-2 border-zinc-900 p-4 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 border-2 border-zinc-900 text-xs font-black flex items-center space-x-1.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              title={profile.email}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                  <span className="text-green-700">{t.emailCopied}</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.copyEmail}</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900 text-white hover:bg-blue-600 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 text-white hover:bg-blue-700 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
