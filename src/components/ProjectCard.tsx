import { Project } from '../types';
import {
  ExternalLink,
  Github,
  Bookmark,
  Sparkles,
  ArrowUpRight,
  Heart,
  Eye,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
  isSaved: boolean;
  likes?: number;
  views?: number;
  onLike?: (id: string) => void;
  onToggleSave: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({
  project,
  isSaved,
  likes = 0,
  views = 0,
  onLike,
  onToggleSave,
  onOpenDetails,
}: ProjectCardProps) {
  const { t } = useLanguage();

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSave(project);
    if (!isSaved) {
      confetti({ particleCount: 20, spread: 45, origin: { y: 0.8 } });
    }
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike?.(project.id);
  };

  // Color theme mapping for badges
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return 'bg-blue-600 text-white';
      case 'Frontend':
        return 'bg-purple-600 text-white';
      case 'Backend & Cloud':
        return 'bg-emerald-600 text-white';
      case 'AI & Tools':
        return 'bg-yellow-400 text-zinc-900';
      default:
        return 'bg-zinc-800 text-white';
    }
  };

  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="bento-card group flex flex-col justify-between p-5 sm:p-6 cursor-pointer hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(24,24,27,1)] transition-all bg-white relative"
    >
      {/* Top Bar: Category, Year, Bookmark & Likes */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`px-2 py-0.5 text-[10px] font-black uppercase tracking-wider border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] ${getBadgeStyle(
                project.category
              )}`}
            >
              {project.category}
            </span>
            <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-zinc-100 border border-zinc-900 text-zinc-700">
              {project.year}
            </span>
            {project.featured && (
              <span className="px-1.5 py-0.5 text-[10px] font-black bg-yellow-300 border border-zinc-900 text-zinc-900 flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-zinc-900" />
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1.5">
            {/* Live Likes Reaction Button */}
            <button
              onClick={handleLikeClick}
              className="flex items-center space-x-1 px-2 py-1 text-xs font-black bg-rose-50 hover:bg-rose-100 border border-zinc-900 text-rose-700 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)] active:translate-x-[1px] active:translate-y-[1px] transition-all"
              title="Give this project a like!"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>{likes}</span>
            </button>

            {/* Bookmark Button */}
            <button
              onClick={handleBookmarkClick}
              className={`p-1.5 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all ${
                isSaved
                  ? 'bg-yellow-300 text-zinc-900'
                  : 'bg-white text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
              title={isSaved ? t.bookmarked : t.bookmarkProject}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-zinc-900' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-black text-zinc-900 group-hover:text-blue-600 transition-colors leading-snug">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-1" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium line-clamp-2">
            {project.tagline}
          </p>
        </div>

        {/* Impact Metrics Bento Strip */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y-2 border-zinc-900 bg-zinc-50 px-2 -mx-2 mb-4">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[11px] sm:text-xs font-black text-zinc-900 truncate">
                {metric.value}
              </div>
              <div className="text-[9px] font-bold uppercase text-zinc-500 tracking-tight truncate">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags & Live Views */}
        <div className="flex items-center justify-between gap-1 mb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.frontend?.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-extrabold bg-blue-50 border border-zinc-900 text-blue-900"
              >
                {tech}
              </span>
            ))}
            {project.techStack.backend?.slice(0, 1).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-extrabold bg-emerald-50 border border-zinc-900 text-emerald-900"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-1 text-[11px] font-extrabold text-zinc-400">
            <Eye className="w-3.5 h-3.5" />
            <span>{views}</span>
          </div>
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div
        className="pt-3 border-t-2 border-zinc-900 flex items-center justify-between gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onOpenDetails(project)}
          className="bento-btn px-3 py-1.5 bg-zinc-900 hover:bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider flex-1 text-center"
        >
          {t.viewProjectDetails}
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-white hover:bg-yellow-300 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
            title={t.liveDemo}
          >
            <ExternalLink className="w-4 h-4 text-zinc-900" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-white hover:bg-blue-100 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
            title={t.sourceCode}
          >
            <Github className="w-4 h-4 text-zinc-900" />
          </a>
        )}
      </div>
    </div>
  );
}
