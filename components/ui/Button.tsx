'use client';

import { cn } from '@/lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        {
          'bg-slate-900 text-white hover:bg-slate-800': variant === 'primary',
          'bg-white text-slate-900 hover:bg-slate-50': variant === 'secondary',
          'border border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white':
            variant === 'outline',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-base': size === 'lg',
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

