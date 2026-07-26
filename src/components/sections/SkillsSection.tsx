import React from 'react';
import { Terminal, Code, Database, Server, Cloud } from 'lucide-react';
import { skillCategoriesData } from '@/data/profileData';
import { Badge } from '@/components/ui/Badge';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Frontend & Mobile':
        return <Code className="w-5 h-5 text-brand-blue" />;
      case 'Backend & Databases':
        return <Database className="w-5 h-5 text-brand-violet" />;
      case 'DevOps & Infrastructure':
        return <Server className="w-5 h-5 text-emerald-500 dark:text-brand-mint" />;
      case 'Cloud & Mobile Services':
        return <Cloud className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-200 dark:border-surface-borderDark/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="violet" className="mb-3">04. SKILLS & TOOLKIT</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Stack & Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A Senior-level breakdown of technologies, frameworks, infrastructure, and mobile services I leverage.
          </p>
        </div>

        {/* Skill Category Cards Grid - 4 Columns for Senior Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategoriesData.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-surface-borderDark hover:border-brand-violet/40 transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-card group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-surface-borderDark">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark group-hover:scale-110 transition-transform">
                    {getCategoryIcon(cat.categoryName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {cat.categoryName}
                  </h3>
                </div>

                {/* Skill Pills List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-surface-dark/90 border border-slate-200 dark:border-surface-borderDark hover:border-brand-blue/50 hover:scale-105 transition-all text-xs font-mono font-medium text-slate-800 dark:text-slate-200"
                    >
                      <Terminal className="w-3 h-3 text-brand-blue shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
