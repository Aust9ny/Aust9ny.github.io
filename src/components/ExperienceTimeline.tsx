import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Building,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function ExperienceTimeline() {
  const { experiences, t } = useLanguage();

  return (
    <section id="experience" className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
      {/* Section Header */}
      <div className="border-2 border-zinc-900 bg-white p-4 sm:p-6 shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] sm:shadow-[5px_5px_0px_0px_rgba(24,24,27,1)]">
        <div className="flex items-center space-x-2 mb-1">
          <span className="w-2.5 h-2.5 bg-yellow-400"></span>
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
            {t.expHeading}
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-zinc-600 max-w-2xl">
          {t.expSubheading}
        </p>
      </div>

      {/* Timeline Cards Container */}
      <div className="space-y-4 sm:space-y-5">
        {experiences.map((item) => {
          const isEducation = item.type === 'Education';
          return (
            <div
              key={item.id}
              className="bento-card p-4 sm:p-6 bg-white relative overflow-hidden"
            >
              {/* Top Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b-2 border-zinc-900">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 flex-wrap">
                    <h3 className="text-xl font-black text-zinc-900">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-black uppercase bg-green-200 border border-zinc-900 text-zinc-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                        {t.expPresent}
                      </span>
                    )}
                    <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-zinc-100 border border-zinc-900 text-zinc-700">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-xs font-bold text-zinc-600">
                    <span className="flex items-center space-x-1 text-blue-600 font-extrabold">
                      {isEducation ? (
                        <GraduationCap className="w-3.5 h-3.5" />
                      ) : (
                        <Building className="w-3.5 h-3.5" />
                      )}
                      <span>{item.company}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="flex items-center space-x-1.5 px-3 py-1 bg-yellow-300 border-2 border-zinc-900 text-xs font-black self-start sm:self-auto shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-700 font-medium py-4 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements Bullet List */}
              <div className="space-y-2 pb-4">
                <div className="text-xs font-black uppercase text-zinc-500 tracking-wider">
                  {t.expKeyAchievements}
                </div>
                <div className="space-y-2">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-800 font-semibold leading-snug">
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills Footer */}
              <div className="pt-4 border-t-2 border-zinc-900 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-black text-zinc-500 uppercase mr-1">
                  {t.expTechUsed}:
                </span>
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 bg-zinc-100 border border-zinc-900 text-[11px] font-bold text-zinc-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
