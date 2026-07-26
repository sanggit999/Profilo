import React from 'react';
import { Layers, Zap, ShieldCheck, Layout, Target, Cpu } from 'lucide-react';
import { aboutData } from '@/data/profileData';
import { Badge } from '@/components/ui/Badge';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-brand-blue" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-brand-mint" />;
      case 'Layout': return <Layout className="w-6 h-6 text-brand-violet" />;
      default: return <Cpu className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="about" className="py-20 relative border-t border-slate-200 dark:border-surface-borderDark/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="blue" className="mb-3">03. ABOUT ME</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering with Precision & Purpose
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {aboutData.shortIntro}
          </p>
        </div>

        {/* Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {aboutData.coreStrengths.map((strength, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-surface-borderDark hover:border-brand-blue/40 transition-all duration-300 group shadow-sm dark:shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark group-hover:scale-110 transition-transform">
                  {getIcon(strength.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-blue transition-colors">
                    {strength.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Focus & Goals Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Focus */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-surface-borderDark">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-brand-blue" />
              Current Tech Focus
            </h3>
            <ul className="space-y-3">
              {aboutData.techFocus.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Goals */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200 dark:border-surface-borderDark">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-brand-violet" />
              Current Goals
            </h3>
            <ul className="space-y-3">
              {aboutData.currentGoals.map((goal, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-brand-violet" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
