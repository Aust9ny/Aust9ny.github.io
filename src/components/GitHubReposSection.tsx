import { useState, useEffect, useMemo } from 'react';
import {
  FolderGit2,
  Star,
  GitFork,
  ExternalLink,
  RefreshCw,
  Search,
  Sparkles,
  Calendar,
  Code2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500 text-white',
  JavaScript: 'bg-yellow-400 text-zinc-900',
  Python: 'bg-emerald-500 text-white',
  Vue: 'bg-teal-500 text-white',
  Swift: 'bg-orange-500 text-white',
  Astro: 'bg-purple-500 text-white',
  HTML: 'bg-rose-500 text-white',
  CSS: 'bg-cyan-500 text-white',
  Go: 'bg-sky-500 text-white',
  Rust: 'bg-amber-600 text-white',
};

export function GitHubReposSection({
  username = 'Aust9ny',
}: {
  username?: string;
}) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLang, setSelectedLang] = useState<string>('All');
  const [hideForks, setHideForks] = useState<boolean>(true);

  const fetchRepos = async (force: boolean = false) => {
    if (force) setRefreshing(true);
    else setLoading(true);
    setError(null);

    try {
      // 1. Try our internal cached Express API first
      let res = await fetch(`/api/github/repos?username=${encodeURIComponent(username)}${force ? '&force=true' : ''}`);
      
      // 2. If running standalone or API unavailable, fallback directly to GitHub Public API
      if (!res.ok) {
        res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`);
      }

      const data = await res.json();
      const repoList: GitHubRepo[] = data.repos || (Array.isArray(data) ? data : []);

      if (Array.isArray(repoList)) {
        setRepos(repoList);
        setLastUpdated(data.updatedAt ? new Date(data.updatedAt).toLocaleTimeString() : new Date().toLocaleTimeString());
      } else {
        throw new Error('Unexpected response format from GitHub API');
      }
    } catch (err: unknown) {
      console.error('Failed to load GitHub repositories:', err);
      setError('Unable to load live repositories from GitHub. Check your internet connection.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [username]);

  // Extract unique languages
  const availableLanguages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return ['All', ...Array.from(set).sort()];
  }, [repos]);

  // Filtered Repos
  const filteredRepos = useMemo(() => {
    return repos.filter((r) => {
      if (hideForks && r.fork) return false;
      if (selectedLang !== 'All' && r.language !== selectedLang) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchName = r.name.toLowerCase().includes(q);
      const matchDesc = r.description?.toLowerCase().includes(q);
      const matchLang = r.language?.toLowerCase().includes(q);
      const matchTopics = r.topics?.some((t) => t.toLowerCase().includes(q));

      return matchName || matchDesc || matchLang || matchTopics;
    });
  }, [repos, hideForks, selectedLang, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Live Sync Banner */}
      <div className="border-2 border-zinc-900 bg-emerald-50 p-4 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute"></span>
            <span className="w-3 h-3 bg-emerald-600 rounded-full border border-zinc-900"></span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-black uppercase text-zinc-900 tracking-wide">
                Live GitHub Sync Feed
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-black bg-white border border-zinc-900 text-zinc-800 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)]">
                @{username}
              </span>
            </div>
            <p className="text-[11px] font-bold text-zinc-600 mt-0.5">
              Automatically updates whenever you push, star, or publish new repositories on GitHub.
              {lastUpdated && ` Last synced at ${lastUpdated}.`}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-btn px-3 py-1.5 bg-white text-zinc-900 text-xs font-black uppercase flex items-center gap-1.5"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={() => fetchRepos(true)}
            disabled={refreshing || loading}
            className="bento-btn px-3 py-1.5 bg-yellow-300 text-zinc-900 text-xs font-black uppercase flex items-center gap-1.5 disabled:opacity-50"
            title="Refetch live repositories from GitHub"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
            <span>{refreshing ? 'Syncing...' : 'Sync Now'}</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bento-card p-4 bg-white flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Language Filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0">
          <Code2 className="w-4 h-4 text-zinc-500 mr-1 flex-shrink-0" />
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-2.5 py-1 text-xs font-black uppercase tracking-wide border-2 whitespace-nowrap transition-all ${
                selectedLang === lang
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]'
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-900'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Search & Fork Filter */}
        <div className="flex items-center space-x-2">
          <label className="flex items-center space-x-1.5 text-xs font-bold text-zinc-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hideForks}
              onChange={(e) => setHideForks(e.target.checked)}
              className="accent-zinc-900 w-3.5 h-3.5"
            />
            <span>Hide Forks</span>
          </label>

          <div className="relative w-48 sm:w-60">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repos..."
              className="w-full pl-8 pr-3 py-1 text-xs font-bold bg-zinc-50 border-2 border-zinc-900 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bento-card p-5 bg-white animate-pulse space-y-4 border-2 border-zinc-300"
            >
              <div className="h-5 bg-zinc-200 rounded w-2/3"></div>
              <div className="h-10 bg-zinc-100 rounded w-full"></div>
              <div className="h-4 bg-zinc-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="bento-card p-6 bg-rose-50 border-2 border-rose-900 text-center space-y-2">
          <AlertCircle className="w-8 h-8 text-rose-600 mx-auto" />
          <p className="text-sm font-black text-rose-900">{error}</p>
          <button
            onClick={() => fetchRepos(true)}
            className="bento-btn px-4 py-2 bg-white text-xs font-black uppercase text-zinc-900"
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && filteredRepos.length === 0 && (
        <div className="bento-card p-12 bg-white text-center space-y-3">
          <FolderGit2 className="w-10 h-10 text-zinc-400 mx-auto" />
          <p className="text-sm font-black text-zinc-800">
            No public repositories match your current filters.
          </p>
          <button
            onClick={() => {
              setSelectedLang('All');
              setSearchQuery('');
              setHideForks(false);
            }}
            className="bento-btn px-4 py-1.5 bg-yellow-300 text-xs font-black uppercase"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Repos Grid */}
      {!loading && !error && filteredRepos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRepos.map((repo) => {
            const langColorClass = repo.language
              ? LANGUAGE_COLORS[repo.language] || 'bg-zinc-800 text-white'
              : 'bg-zinc-200 text-zinc-700';

            const updatedDate = new Date(repo.updated_at).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <div
                key={repo.id}
                className="bento-card p-5 bg-white flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform group"
              >
                {/* Top Section */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <FolderGit2 className="w-4 h-4 text-zinc-700 flex-shrink-0" />
                      <h4 className="text-base font-black text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                        {repo.name}
                      </h4>
                    </div>

                    {repo.fork && (
                      <span className="px-1.5 py-0.5 text-[9px] font-black uppercase bg-zinc-100 border border-zinc-900 text-zinc-600 flex-shrink-0">
                        Fork
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-zinc-600 line-clamp-2 min-h-[32px]">
                    {repo.description || 'Public GitHub project and source repository.'}
                  </p>

                  {/* Language and Topics */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {repo.language && (
                      <span
                        className={`px-2 py-0.5 text-[10px] font-black border border-zinc-900 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)] ${langColorClass}`}
                      >
                        {repo.language}
                      </span>
                    )}

                    {repo.topics?.slice(0, 2).map((topic) => (
                      <span
                        key={topic}
                        className="px-1.5 py-0.5 text-[10px] font-bold bg-zinc-100 border border-zinc-400 text-zinc-700"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Details & Links */}
                <div className="pt-5 mt-4 border-t border-zinc-200 flex items-center justify-between text-xs">
                  {/* Stats (Stars & Date) */}
                  <div className="flex items-center space-x-3 text-zinc-600 font-bold text-[11px]">
                    <span className="flex items-center space-x-1" title={`${repo.stargazers_count} stars`}>
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>

                    {repo.forks_count > 0 && (
                      <span className="flex items-center space-x-1" title={`${repo.forks_count} forks`}>
                        <GitFork className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{repo.forks_count}</span>
                      </span>
                    )}

                    <span className="flex items-center space-x-1 text-zinc-400" title={`Last pushed: ${updatedDate}`}>
                      <Calendar className="w-3 h-3" />
                      <span>{updatedDate}</span>
                    </span>
                  </div>

                  {/* Link Buttons */}
                  <div className="flex items-center space-x-1.5">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-zinc-100 hover:bg-emerald-300 border border-zinc-900 shadow-[1px_1px_0px_0px_rgba(24,24,27,1)] transition-colors"
                        title="Open Live Website / Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-900" />
                      </a>
                    )}

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-zinc-900 text-white hover:bg-blue-600 border border-zinc-900 text-[11px] font-black uppercase flex items-center space-x-1 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all"
                    >
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
