import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Star } from 'lucide-react';
import { personalProjectsData } from '@/data/profileData';
import { Badge } from '@/components/ui/Badge';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Fullstack', 'Frontend', 'Mobile', 'Tools'];

  const filteredProjects = activeCategory === 'All'
    ? personalProjectsData
    : personalProjectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-200 dark:border-surface-borderDark/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="blue" className="mb-3">02. PERSONAL PROJECTS</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Work & Side Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Open-source tools, developer utilities, and web applications built with a focus on problem-solving.
          </p>
        </div>

        {/* Filter Tabs - Rendered if multiple projects exist */}
        {personalProjectsData.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-glow-blue'
                    : 'bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-surface-borderDark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Cards Grid */}
        <div className={filteredProjects.length === 1 ? "max-w-3xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-xl border border-slate-200 dark:border-surface-borderDark hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 group shadow-sm dark:shadow-card"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.featured && (
                      <Badge variant="blue" className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-brand-blue text-brand-blue" />
                        Featured
                      </Badge>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title="GitHub Source"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Problem Solved Highlight */}
                <div className="p-3.5 rounded-lg bg-slate-100/90 dark:bg-surface-dark/90 border border-slate-200 dark:border-surface-borderDark mb-6">
                  <span className="text-xs font-mono uppercase text-brand-violet block mb-1">
                    Problem Solved:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {project.problemSolved}
                  </p>
                </div>
              </div>

              {/* Footer Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-surface-borderDark/60">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
