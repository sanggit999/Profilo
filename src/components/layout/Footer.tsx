import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/90 dark:bg-surface-dark/90 border-t border-slate-200 dark:border-surface-borderDark py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-violet flex items-center justify-center text-white shrink-0">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Nguyen Van Sang <span className="text-brand-blue">© 2026</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Fullstack Developer Portfolio — Built with React 18, Vite & Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Right Back to Top & Tagline */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
            Build. Ship. Grow. <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-blue border border-slate-300 dark:border-slate-700/60 transition-all duration-300 shadow-sm dark:shadow-card cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
