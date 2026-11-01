import {
  User,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  HeartHandshake,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export function AboutSection({ onOpenContact }: AboutSectionProps) {
  const { profile, t } = useLanguage();

  return (
    <section id="about" className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
      {/* Section Header */}
      <div className="border-2 border-zinc-900 bg-white p-4 sm:p-6 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] sm:shadow-[5px_5px_0px_0px_rgba(24,24,27,1)]">
        <div className="flex items-center space-x-2 mb-1">
          <span className="w-2.5 h-2.5 bg-purple-600"></span>
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
            {t.aboutHeading}
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-zinc-600 max-w-2xl">
          {t.aboutSubheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
        {/* Left Column: Personal Narrative (7 Cols) */}
        <div className="lg:col-span-7 bento-card p-4 sm:p-8 bg-white flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pb-3 border-b-2 border-zinc-900">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-black text-zinc-900 uppercase">
                {t.aboutPhilosophyTitle}
              </h3>
            </div>

            <div className="space-y-3.5 text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
              {profile.bioLong.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t-2 border-zinc-900 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="text-xs font-black uppercase text-zinc-500">
                Current Location & Availability
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-900">
                {profile.location}
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="bento-btn px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-zinc-900 text-xs font-black uppercase tracking-wide"
            >
              {t.heroCtaContact}
            </button>
          </div>
        </div>

        {/* Right Column: 3 Core Engineering Principles (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bento-card p-5 bg-blue-50 border-l-4 border-l-blue-600">
            <div className="flex items-center space-x-2 text-blue-900 font-black text-sm uppercase mb-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{t.aboutValue1Title}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-700 leading-snug">
              {t.aboutValue1Desc}
            </p>
          </div>

          <div className="bento-card p-5 bg-amber-50 border-l-4 border-l-amber-500">
            <div className="flex items-center space-x-2 text-zinc-900 font-black text-sm uppercase mb-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>{t.aboutValue2Title}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-700 leading-snug">
              {t.aboutValue2Desc}
            </p>
          </div>

          <div className="bento-card p-5 bg-emerald-50 border-l-4 border-l-emerald-600">
            <div className="flex items-center space-x-2 text-emerald-900 font-black text-sm uppercase mb-1.5">
              <Target className="w-4 h-4 text-emerald-600" />
              <span>{t.aboutValue3Title}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-700 leading-snug">
              {t.aboutValue3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
