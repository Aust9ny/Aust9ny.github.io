import { useState } from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'stack' | 'impact'>('overview');

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border-t-4 sm:border-2 border-zinc-900 shadow-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-2xl sm:rounded-none overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-zinc-900 text-white p-3.5 sm:p-5 flex items-center justify-between border-b-2 border-zinc-900 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-black uppercase bg-yellow-300 text-zinc-900 border border-zinc-900">
              {project.category}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-zinc-400">
              {project.year} Case Study
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold uppercase border border-white"
              >
                <span>{t.liveDemo}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-extrabold uppercase border border-white"
              >
                <span>{t.sourceCode}</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 bg-white text-zinc-900 hover:bg-yellow-300 border border-zinc-900 transition-colors"
              title={t.modalClose}
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Modal Title Header */}
        <div className="p-4 sm:p-6 border-b-2 border-zinc-900 bg-zinc-50 flex-shrink-0">
          <h2 className="text-xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-base text-zinc-700 font-semibold mt-1">
            {project.tagline}
          </p>

          {/* Impact Metrics Banner */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-zinc-900 p-2 sm:p-2.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] text-center"
              >
                <div className="text-sm sm:text-lg font-black text-blue-600 truncate">
                  {metric.value}
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase font-bold text-zinc-600 tracking-tight sm:tracking-wide truncate">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b-2 border-zinc-900 bg-zinc-200/60 overflow-x-auto no-scrollbar flex-shrink-0">
          {[
            { id: 'overview', label: t.modalOverview, icon: Layers },
            { id: 'architecture', label: t.modalSolution, icon: Cpu },
            { id: 'stack', label: t.modalTechStack, icon: Sparkles },
            { id: 'impact', label: t.modalImpactMetrics, icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-black uppercase tracking-wider border-r-2 border-zinc-900 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-blue-600 border-b-2 border-b-white -mb-[2px]'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Tab Contents */}
        <div className="p-4 sm:p-7 flex-1 overflow-y-auto space-y-4 sm:space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-5">
              <div className="space-y-1.5 sm:space-y-2">
                <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-zinc-500">
                  Project Summary
                </h4>
                <p className="text-xs sm:text-base text-zinc-800 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Key Features Checklist */}
              <div className="space-y-2">
                <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-zinc-500">
                  {t.modalKeyFeatures}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 bg-zinc-50 border border-zinc-900 p-2 sm:p-2.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-zinc-800">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              {/* Challenge Bento */}
              <div className="bg-red-50 border-2 border-zinc-900 p-3.5 sm:p-4 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] space-y-1.5 sm:space-y-2">
                <div className="flex items-center space-x-2 text-red-700 font-black text-xs uppercase tracking-wide">
                  <AlertCircle className="w-4 h-4" />
                  <span>{t.modalChallenge}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Bento */}
              <div className="bg-emerald-50 border-2 border-zinc-900 p-3.5 sm:p-4 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] space-y-1.5 sm:space-y-2">
                <div className="flex items-center space-x-2 text-emerald-700 font-black text-xs uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.modalSolution}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.techStack.frontend && (
                <div className="bg-white border-2 border-zinc-900 p-3 sm:p-3.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
                  <div className="text-[11px] sm:text-xs font-black uppercase text-blue-600 tracking-wider mb-2">
                    Frontend Layer
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.frontend.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-blue-50 border border-zinc-900 text-[11px] sm:text-xs font-bold text-zinc-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.backend && (
                <div className="bg-white border-2 border-zinc-900 p-3 sm:p-3.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
                  <div className="text-[11px] sm:text-xs font-black uppercase text-emerald-600 tracking-wider mb-2">
                    Backend & Services
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.backend.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-emerald-50 border border-zinc-900 text-[11px] sm:text-xs font-bold text-zinc-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.database && (
                <div className="bg-white border-2 border-zinc-900 p-3 sm:p-3.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
                  <div className="text-[11px] sm:text-xs font-black uppercase text-yellow-600 tracking-wider mb-2">
                    Data & Storage
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.database.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-yellow-50 border border-zinc-900 text-[11px] sm:text-xs font-bold text-zinc-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack.devops && (
                <div className="bg-white border-2 border-zinc-900 p-3 sm:p-3.5 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
                  <div className="text-[11px] sm:text-xs font-black uppercase text-purple-600 tracking-wider mb-2">
                    DevOps & Cloud
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.devops.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 bg-purple-50 border border-zinc-900 text-[11px] sm:text-xs font-bold text-zinc-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 bg-yellow-50 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
                <h4 className="text-[11px] sm:text-xs font-black uppercase text-zinc-900 mb-1 sm:mb-2">
                  Production Telemetry & Business Value
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-zinc-700 leading-relaxed">
                  This system was designed with high observability and measurable ROI. All core metrics below were tracked in production over multiple consecutive quarters.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] sm:shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] text-center"
                  >
                    <div className="text-xl sm:text-2xl font-black text-blue-600">{m.value}</div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase text-zinc-600 mt-0.5 sm:mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-3.5 sm:p-5 bg-zinc-100 border-t-2 border-zinc-900 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 flex-shrink-0">
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-btn px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wide flex items-center justify-center space-x-1.5"
              >
                <span>{t.modalVisitLive}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-btn px-3 py-2 bg-white hover:bg-zinc-100 text-zinc-900 font-black text-xs uppercase tracking-wide flex items-center justify-center space-x-1.5"
              >
                <span>{t.modalViewSource}</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="bento-btn w-full sm:w-auto px-4 py-2 bg-zinc-900 text-white font-black text-xs uppercase tracking-wide text-center"
          >
            {t.modalClose}
          </button>
        </div>
      </div>
    </div>
  );
}
