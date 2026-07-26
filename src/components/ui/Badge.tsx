import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'violet' | 'mint' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/30',
    violet: 'bg-brand-violet/10 text-brand-violet border-brand-violet/30',
    mint: 'bg-emerald-500/10 text-emerald-600 dark:text-brand-mint border-emerald-500/30',
    neutral: 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700/60',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
