import { Project } from '../types';
import { X, Trash2, ArrowUpRight, BookmarkCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface SavedProjectsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProjects: Project[];
  onRemoveSaved: (id: string) => void;
  onClearAll: () => void;
  onSelectProject: (project: Project) => void;
}

export function SavedProjectsDrawer({
  isOpen,
  onClose,
  savedProjects,
  onRemoveSaved,
  onClearAll,
  onSelectProject,
}: SavedProjectsDrawerProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white border-l-4 border-zinc-900 shadow-2xl h-full flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-zinc-900 text-white flex items-center justify-between border-b-2 border-zinc-900">
          <div className="flex items-center space-x-2">
            <BookmarkCheck className="w-5 h-5 text-yellow-300" />
            <h3 className="text-lg font-black">{t.savedDrawerTitle}</h3>
            <span className="px-2 py-0.5 text-xs font-black bg-yellow-300 text-zinc-900">
              {savedProjects.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white text-zinc-900 hover:bg-yellow-300 border border-zinc-900 transition-colors"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-3">
          {savedProjects.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-zinc-100 border-2 border-zinc-900 flex items-center justify-center mx-auto text-zinc-400">
                <BookmarkCheck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-zinc-800">
                {t.savedDrawerEmpty}
              </h4>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                {t.savedDrawerEmptyDesc}
              </p>
            </div>
          ) : (
            savedProjects.map((project) => (
              <div
                key={project.id}
                className="bento-card p-4 bg-zinc-50 flex flex-col justify-between space-y-3 hover:bg-white transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-blue-600 text-white">
                      {project.category}
                    </span>
                    <button
                      onClick={() => onRemoveSaved(project.id)}
                      className="text-zinc-400 hover:text-red-600 transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h4 className="text-sm font-black text-zinc-900">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-600 line-clamp-1 mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-200">
                  <button
                    onClick={() => {
                      onSelectProject(project);
                      onClose();
                    }}
                    className="text-xs font-black text-blue-600 hover:underline flex items-center space-x-1"
                  >
                    <span>{t.viewDetailsBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-zinc-600 hover:text-zinc-900 flex items-center space-x-1"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {savedProjects.length > 0 && (
          <div className="p-4 bg-zinc-100 border-t-2 border-zinc-900 flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs font-black text-red-600 hover:underline"
            >
              {t.clearAllBookmarks}
            </button>
            <button
              onClick={onClose}
              className="bento-btn px-4 py-1.5 bg-zinc-900 text-white text-xs font-black uppercase"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
