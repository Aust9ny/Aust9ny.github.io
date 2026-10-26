import { useState } from 'react';
import {
  X,
  Mail,
  Check,
  Send,
  Download,
  Github,
  Linkedin,
  Sparkles,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n/LanguageContext';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const { profile, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    confetti({ particleCount: 25, spread: 45, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    }, 600);
  };

  const handleDownloadCv = () => {
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    window.open('https://github.com/sippakorn-ka', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-lg bg-white border-l-4 border-zinc-900 shadow-2xl h-full flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 bg-zinc-900 text-white flex items-center justify-between border-b-2 border-zinc-900">
          <div className="space-y-1">
            <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-yellow-300 text-zinc-900 border border-zinc-900">
              Direct Inquiries
            </span>
            <h3 className="text-xl font-black">{t.contactDrawerTitle}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white text-zinc-900 hover:bg-yellow-300 border border-zinc-900 transition-colors"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {/* Email Quick-Copy Card */}
          <div className="bento-card p-4 bg-yellow-50 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-[10px] font-black uppercase text-zinc-500">
                Direct Email
              </div>
              <div className="text-sm font-extrabold text-zinc-900 truncate">
                {profile.email}
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="bento-btn px-3 py-1.5 bg-white hover:bg-yellow-300 text-zinc-900 text-xs font-black uppercase flex items-center space-x-1.5"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                  <span>{t.emailCopied}</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.copyEmail}</span>
                </>
              )}
            </button>
          </div>

          {/* Availability Status */}
          <div className="flex items-center space-x-2 text-xs font-bold text-zinc-700 p-2.5 bg-zinc-100 border border-zinc-900">
            <Clock className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>{profile.availability}</span>
          </div>

          {/* Interactive Form */}
          {isSubmitted ? (
            <div className="bento-card p-6 bg-emerald-50 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-200 border-2 border-zinc-900 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-emerald-800 stroke-[3]" />
              </div>
              <h4 className="text-lg font-black text-zinc-900">{t.messageSent}</h4>
              <p className="text-xs sm:text-sm font-semibold text-zinc-700">
                {t.messageSuccessAlert}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="bento-btn px-4 py-2 bg-white text-zinc-900 text-xs font-black uppercase"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-zinc-700">
                  {t.formName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Miller"
                  className="w-full px-3 py-2 border-2 border-zinc-900 text-xs font-bold bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-zinc-700">
                  {t.formEmail} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3 py-2 border-2 border-zinc-900 text-xs font-bold bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-zinc-700">
                  {t.formSubject}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Time Role / Contract Opportunity"
                  className="w-full px-3 py-2 border-2 border-zinc-900 text-xs font-bold bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-zinc-700">
                  {t.formMessage} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Sippakorn, we are looking for a full-stack engineer..."
                  className="w-full px-3 py-2 border-2 border-zinc-900 text-xs font-bold bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bento-btn w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : t.sendMessage}</span>
              </button>
            </form>
          )}

          {/* Resume Download Callout */}
          <div className="pt-2">
            <button
              onClick={handleDownloadCv}
              className="bento-btn w-full py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadCv}</span>
            </button>
          </div>
        </div>

        {/* Drawer Footer Socials */}
        <div className="p-5 bg-zinc-100 border-t-2 border-zinc-900 space-y-3">
          <div className="text-[11px] font-black uppercase text-zinc-600 text-center">
            {t.socialLinksTitle}
          </div>
          <div className="flex items-center justify-center space-x-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-zinc-900 text-white text-xs font-extrabold uppercase border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] flex items-center space-x-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-blue-600 text-white text-xs font-extrabold uppercase border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] flex items-center space-x-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
