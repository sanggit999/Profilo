import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-brand-blue selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections - Experience right after Hero */}
      <main className="flex-grow">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
