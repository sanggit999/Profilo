import React, { useState, useEffect } from 'react';
import { Briefcase, FolderGit2, Sparkles, Terminal } from 'lucide-react';
import { profileInfoData } from '@/data/profileData';
import { Button } from '@/components/ui/Button';

const roles = [
  'Fullstack Developer',
  'React.js & React Native Specialist',
  'Python / Django REST Framework Engineer',
  'Flutter & Cross-Platform Mobile Engineer',
];

export const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === targetText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? targetText.substring(0, currentText.length - 1)
            : targetText.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex flex-col items-center space-y-6">
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-mono font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fullstack Developer Portfolio</span>
          </div>

          {/* Sub-Greeting Line */}
          <p className="text-lg sm:text-2xl font-mono text-slate-500 dark:text-slate-400 font-medium tracking-wide">
            Hi, I'm
          </p>

          {/* Main Crystal Clear Name Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-none pb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              {profileInfoData.fullName}
            </span>
          </h1>

          {/* Animated Role Subtitle (Typewriter Effect) */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-100/90 dark:bg-surface-dark/90 border border-slate-200 dark:border-surface-borderDark max-w-full overflow-hidden shadow-sm mt-2">
            <Terminal className="w-5 h-5 text-brand-blue shrink-0" />
            <p className="text-sm sm:text-lg md:text-xl font-bold font-mono text-slate-800 dark:text-slate-200 truncate">
              <span>{currentText}</span>
              <span className="inline-block w-2 h-4 sm:h-5 ml-1 bg-brand-blue animate-pulse align-middle" />
            </p>
          </div>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
            {profileInfoData.valueProposition}
          </p>

          {/* CTA Buttons - Directing to Company Experience & Personal Project */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#experience">
              <Button variant="primary" size="lg" icon={<Briefcase className="w-4 h-4" />}>
                View Company Experience
              </Button>
            </a>

            <a href="#projects">
              <Button variant="outline" size="lg" icon={<FolderGit2 className="w-4 h-4" />}>
                Personal Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
