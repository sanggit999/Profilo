import React from 'react';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Package, Layers } from 'lucide-react';
import { companyExperiencesData } from '@/data/profileData';
import { Badge } from '@/components/ui/Badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-200 dark:border-surface-borderDark/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="violet" className="mb-3">01. WORK EXPERIENCE</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Company History & Product Track Record
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world impact delivering enterprise web platforms and cross-platform mobile apps.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-300 dark:border-surface-borderDark md:ml-6 space-y-12 pl-6 md:pl-10">
          {companyExperiencesData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-surface-dark border-2 border-brand-blue group-hover:bg-brand-blue group-hover:scale-125 transition-all duration-300 shadow-glow-blue" />

              {/* Company Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-surface-borderDark hover:border-brand-blue/40 transition-all duration-300 shadow-sm dark:shadow-card">
                {/* Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-surface-borderDark/60">
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase text-brand-blue tracking-wider flex items-center gap-1.5 mb-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.companyName}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {exp.jobTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-surface-dark px-3 py-1.5 rounded-lg border border-slate-200 dark:border-surface-borderDark">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      {exp.timeRange}
                    </span>
                    {exp.isCurrentRole && (
                      <Badge variant="mint">Current Role</Badge>
                    )}
                  </div>
                </div>

                {/* Key Responsibilities Overview */}
                <div className="mb-8 space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-3">
                    Core Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Company Products Showcase */}
                {exp.companyProducts && exp.companyProducts.length > 0 && (
                  <div className="mb-8 space-y-4">
                    <h4 className="text-xs font-mono uppercase text-brand-violet tracking-wider flex items-center gap-1.5 mb-3">
                      <Package className="w-4 h-4 text-brand-violet" />
                      Company Products Delivered ({exp.companyProducts.length}):
                    </h4>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {exp.companyProducts.map((product, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-5 rounded-xl bg-slate-100/90 dark:bg-surface-dark/90 border border-slate-200 dark:border-surface-borderDark hover:border-brand-blue/40 transition-all shadow-sm"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <h5 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 min-w-0">
                              <Layers className="w-4 h-4 text-brand-blue shrink-0" />
                              <span className="truncate">{product.name}</span>
                            </h5>
                            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap shrink-0">
                              {product.timeRange && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-surface-dark px-2 py-0.5 rounded border border-slate-200 dark:border-surface-borderDark">
                                  <Calendar className="w-3 h-3 text-slate-400" />
                                  {product.timeRange}
                                </span>
                              )}
                              <Badge variant={product.type === 'Web Platform' ? 'blue' : 'violet'} className="shrink-0 whitespace-nowrap">
                                {product.type}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            {product.description}
                          </p>

                          {/* Product Features Bullet Points */}
                          <ul className="space-y-1 mb-4">
                            {product.features.map((feat, fIdx) => (
                              <li key={fIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                                <span className="text-brand-blue shrink-0">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-surface-borderDark/60">
                            {product.techStack.map((tech) => (
                              <Badge key={tech} variant="neutral" className="text-[10px] px-2 py-0">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantifiable Impact & Achievements */}
                {exp.impact.length > 0 && (
                  <div className="mb-6 p-4 rounded-lg bg-slate-100/90 dark:bg-surface-dark/80 border border-brand-blue/30">
                    <h4 className="text-xs font-mono uppercase text-emerald-600 dark:text-brand-mint tracking-wider flex items-center gap-1.5 mb-2">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Engineering Impact:
                    </h4>
                    <ul className="space-y-1">
                      {exp.impact.map((metric, idx) => (
                        <li key={idx} className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          • {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Combined Tech Stack */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 dark:border-surface-borderDark/60">
                  <span className="text-xs font-mono text-slate-500 mr-2">Company Stack:</span>
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} variant="neutral">
                      {tech}
                    </Badge>
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
