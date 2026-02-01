'use client';

import { motion } from 'framer-motion';

interface LegendMediaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'text-lg sm:text-xl',
  md: 'text-2xl sm:text-3xl md:text-4xl',
  lg: 'text-4xl sm:text-5xl md:text-6xl',
  xl: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
};

export function LegendMediaLogo({ size = 'md', className = '' }: LegendMediaLogoProps) {
  return (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block text-slate-900"
      >
        Legend
      </motion.span>
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="text-green-600"
      >
        .
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="inline-block font-medium text-slate-700"
      >
        Media
      </motion.span>
    </div>
  );
}
