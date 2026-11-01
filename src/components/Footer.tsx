import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { profile, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-zinc-900 bg-white text-zinc-900 mt-10 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 border-2 border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] flex items-center justify-center text-white font-black text-sm">
                <Code2 className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="font-black text-xl tracking-tight text-zinc-900">
                {t.brandName}<span className="text-blue-600">.{t.brandTag}</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 font-semibold max-w-md leading-relaxed">
              {profile.bioShort}
            </p>
            <div className="text-xs font-bold text-zinc-500">
              {profile.location}
            </div>
          </div>

          {/* Quick Links & Channels */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-black uppercase text-zinc-900 tracking-wider">
              {t.quickConnectTitle}
            </div>
            <div className="space-y-1.5 text-xs font-bold">
              <div>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-zinc-600 hover:text-blue-600 flex items-center space-x-1.5 py-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-blue-600 flex items-center space-x-1.5 py-0.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/Aust9ny</span>
                </a>
              </div>
              <div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-blue-600 flex items-center space-x-1.5 py-0.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/sippakorn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="bento-btn w-full sm:w-auto justify-center px-4 py-2.5 bg-yellow-300 hover:bg-yellow-400 text-zinc-900 text-xs font-black uppercase tracking-wider flex items-center space-x-2"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-semibold gap-2 text-center sm:text-left">
          <div>{t.footerCopyright}</div>
          <div>{t.footerBuiltWith}</div>
        </div>
      </div>
    </footer>
  );
}
