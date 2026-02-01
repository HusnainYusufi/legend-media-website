'use client';

import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils/cn';

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
        {
          'bg-green-600 text-white': variant === 'primary',
          'bg-slate-200 text-slate-700': variant === 'secondary',
          'border border-green-600 text-green-600': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

