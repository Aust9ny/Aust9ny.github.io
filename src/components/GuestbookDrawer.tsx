import { useState, useEffect } from 'react';
import {
  X,
  MessageSquarePlus,
  Cpu,
  Database,
  Server,
  Activity,
  Send,
  Sparkles,
  Check,
  Clock,
  Building,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GuestbookEntry {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar_color: string;
  created_at: string;
}

interface HealthData {
  status: string;
  uptimeSeconds: number;
  environment: string;
  database: {
    engine: string;
    postgresConnected: boolean;
    contactsCount: number;
    guestbookCount: number;
  };
  system: {
    nodeVersion: string;
    platform: string;
    memoryUsageMB: number;
  };
}

interface GuestbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuestbookDrawer({ isOpen, onClose }: GuestbookDrawerProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [health, setHealth] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'guestbook' | 'devops'>('guestbook');

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchEntries();
      fetchHealth();
    }
  }, [isOpen]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/guestbook');
      const data = await res.json();
      if (data.entries) setEntries(data.entries);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchHealth = async () => {
    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      setHealth(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, role, company, message }),
      });
      const data = await res.json();
      if (data.entry) {
        setEntries((prev) => [data.entry, ...prev]);
        setSubmitted(true);
        confetti({ particleCount: 45, spread: 60, origin: { y: 0.7 } });
        setName('');
        setRole('');
        setCompany('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-lg bg-white border-l-4 border-zinc-900 shadow-2xl h-full flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-zinc-900 text-white flex items-center justify-between border-b-2 border-zinc-900">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-lg font-black tracking-tight">Guestbook & DevOps Telemetry</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white text-zinc-900 hover:bg-yellow-300 border border-zinc-900 transition-colors"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b-2 border-zinc-900 bg-zinc-100">
          <button
            onClick={() => setActiveTab('guestbook')}
            className={`flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-colors border-r-2 border-zinc-900 ${
              activeTab === 'guestbook' ? 'bg-white text-blue-600' : 'text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            Visitor Guestbook ({entries.length})
          </button>
          <button
            onClick={() => setActiveTab('devops')}
            className={`flex-1 py-2.5 text-xs font-black uppercase tracking-wider transition-colors ${
              activeTab === 'devops' ? 'bg-white text-blue-600' : 'text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            Live Server Telemetry
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-5">
          {activeTab === 'guestbook' ? (
            <div className="space-y-6">
              {/* Submission Form */}
              <div className="bento-card p-4 bg-zinc-50 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-black uppercase text-zinc-900">
                  <MessageSquarePlus className="w-4 h-4 text-blue-600" />
                  <span>Leave an Endorsement or Note</span>
                </div>

                {submitted ? (
                  <div className="p-3 bg-emerald-100 border border-zinc-900 text-xs font-black text-emerald-900 flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Your note was posted to the database! Thank you!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-2.5 py-1.5 text-xs font-bold bg-white border-2 border-zinc-900 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Company / Team"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="px-2.5 py-1.5 text-xs font-bold bg-white border-2 border-zinc-900 focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Role (e.g. Senior Recruiter, Engineer)"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs font-bold bg-white border-2 border-zinc-900 focus:outline-none"
                    />
                    <textarea
                      required
                      rows={2}
                      placeholder="Leave a message, feedback, or interview invitation..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs font-bold bg-white border-2 border-zinc-900 focus:outline-none resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bento-btn w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase flex items-center justify-center space-x-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Saving to DB...' : 'Post to Guestbook'}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Entries Feed */}
              <div className="space-y-3">
                <div className="text-xs font-black uppercase text-zinc-500">Recent Endorsements</div>
                {loading ? (
                  <div className="py-8 text-center text-xs font-bold text-zinc-400">Loading entries...</div>
                ) : entries.length === 0 ? (
                  <div className="py-8 text-center text-xs font-bold text-zinc-400">No entries yet. Be the first!</div>
                ) : (
                  entries.map((entry) => (
                    <div key={entry.id} className="bento-card p-3.5 bg-white space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-black text-zinc-900">{entry.name}</span>
                          <div className="text-[10px] font-bold text-zinc-500 flex items-center space-x-1">
                            <span>{entry.role}</span>
                            {entry.company && (
                              <>
                                <span>•</span>
                                <span>{entry.company}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <span className="text-[9px] font-bold text-zinc-400">
                          {new Date(entry.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-700 font-semibold leading-relaxed">
                        "{entry.message}"
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* DevOps Live Server Telemetry */}
              <div className="bento-card p-4 bg-zinc-900 text-white space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-emerald-400">
                    <Activity className="w-4 h-4" />
                    <span>API Server Status: {health?.status?.toUpperCase() ?? 'HEALTHY'}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300">
                    {health?.environment}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-zinc-800/80 p-2.5 border border-zinc-700">
                    <div className="text-[10px] uppercase font-bold text-zinc-400">Database Engine</div>
                    <div className="font-mono font-bold text-yellow-300 mt-0.5">
                      {health?.database.engine}
                    </div>
                  </div>

                  <div className="bg-zinc-800/80 p-2.5 border border-zinc-700">
                    <div className="text-[10px] uppercase font-bold text-zinc-400">Memory Heap Used</div>
                    <div className="font-mono font-bold text-emerald-300 mt-0.5">
                      {health?.system.memoryUsageMB} MB
                    </div>
                  </div>

                  <div className="bg-zinc-800/80 p-2.5 border border-zinc-700">
                    <div className="text-[10px] uppercase font-bold text-zinc-400">Server Uptime</div>
                    <div className="font-mono font-bold text-blue-300 mt-0.5">
                      {health?.uptimeSeconds} seconds
                    </div>
                  </div>

                  <div className="bg-zinc-800/80 p-2.5 border border-zinc-700">
                    <div className="text-[10px] uppercase font-bold text-zinc-400">Node Runtime</div>
                    <div className="font-mono font-bold text-purple-300 mt-0.5">
                      {health?.system.nodeVersion} ({health?.system.platform})
                    </div>
                  </div>
                </div>
              </div>

              {/* AWS Deployment Blueprint Bento */}
              <div className="bento-card p-4 bg-blue-50 border-l-4 border-l-blue-600 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-black uppercase text-blue-900">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span>AWS DevOps Architecture</span>
                </div>
                <p className="text-xs text-zinc-700 font-semibold leading-relaxed">
                  This portfolio is designed to deploy seamlessly to AWS using standard DevOps tooling:
                </p>
                <div className="space-y-1.5 text-xs font-bold text-zinc-800 pt-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span><strong>Compute:</strong> Docker container on AWS EC2 or AWS ECS Fargate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span><strong>Database:</strong> PostgreSQL on Amazon RDS (or containerized on EC2)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span><strong>CI/CD:</strong> GitHub Actions automated build & deploy pipeline</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-zinc-100 border-t-2 border-zinc-900 flex items-center justify-between">
          <span className="text-[11px] font-extrabold text-zinc-500">
            Endpoint: <code className="text-zinc-900">/api/health</code>
          </span>
          <button
            onClick={onClose}
            className="bento-btn px-4 py-1.5 bg-zinc-900 text-white text-xs font-black uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
