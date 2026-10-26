import { SkillCategory } from '../types';
import {
  Code,
  Server,
  Database,
  Cloud,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function SkillsBento() {
  const { skills, t } = useLanguage();

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Server className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <Database className="w-5 h-5 text-amber-600" />;
      case 3:
        return <Cloud className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-zinc-900" />;
    }
  };

  const getAccentColor = (idx: number) => {
    switch (idx) {
      case 0:
        return 'border-l-4 border-l-blue-600';
      case 1:
        return 'border-l-4 border-l-emerald-600';
      case 2:
        return 'border-l-4 border-l-amber-500';
      case 3:
        return 'border-l-4 border-l-purple-600';
      default:
        return 'border-l-4 border-l-zinc-900';
    }
  };

  const getProgressColor = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-blue-600';
      case 1:
        return 'bg-emerald-600';
      case 2:
        return 'bg-amber-500';
      case 3:
        return 'bg-purple-600';
      default:
        return 'bg-zinc-900';
    }
  };

  return (
    <section id="skills" className="space-y-6 pt-4">
      {/* Section Header */}
      <div className="border-2 border-zinc-900 bg-white p-6 shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1.5">
            <span className="w-2.5 h-2.5 bg-blue-600"></span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
              {t.skillsHeading}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-zinc-600 max-w-2xl">
            {t.skillsSubheading}
          </p>
        </div>

        <div className="px-3.5 py-2 bg-yellow-300 border-2 border-zinc-900 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] text-xs font-black uppercase tracking-wide self-start md:self-auto">
          {t.coreSkillsHighlight}
        </div>
      </div>

      {/* 4-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skills.map((category, catIdx) => (
          <div
            key={catIdx}
            className={`bento-card p-5 sm:p-6 bg-white flex flex-col justify-between ${getAccentColor(
              catIdx
            )}`}
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4 pb-3 border-b-2 border-zinc-900">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(catIdx)}
                    <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-zinc-600">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Items List */}
              <div className="space-y-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-zinc-900">
                        {skill.name}
                      </span>
                      <span className="px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-zinc-100 border border-zinc-900 text-zinc-800">
                        {skill.level}
                      </span>
                    </div>

                    {/* Neo-brutalist Progress Bar */}
                    <div className="w-full h-2.5 bg-zinc-100 border border-zinc-900 overflow-hidden">
                      <div
                        className={`h-full ${getProgressColor(catIdx)} transition-all duration-500`}
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tag Summary */}
            <div className="pt-4 mt-5 border-t border-zinc-200 flex flex-wrap gap-1.5">
              {category.skills.map((s, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[10px] font-black bg-zinc-100 text-zinc-700 border border-zinc-300"
                >
                  #{s.name.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
