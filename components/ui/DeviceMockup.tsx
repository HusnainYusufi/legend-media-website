'use client';

import Image from 'next/image';
import { type ReactNode } from 'react';

interface DeviceMockupProps {
  type: 'laptop' | 'mobile';
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function DeviceMockup({ type, children, imageSrc, imageAlt = '', className = '' }: DeviceMockupProps) {
  if (type === 'laptop') {
    return (
      <div className={`relative ${className}`}>
        {/* Laptop Frame */}
        <div className="relative w-full">
          {/* Screen */}
          <div className="relative rounded-t-xl border-4 border-slate-800 bg-slate-900 p-2 shadow-2xl">
            {/* Bezel */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-black">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                children
              )}
            </div>
          </div>
          {/* Bottom Base */}
          <div className="relative h-4 w-full">
            {/* Keyboard deck */}
            <div className="absolute inset-0 rounded-b-xl bg-gradient-to-b from-slate-700 to-slate-800 shadow-lg" />
            {/* Bottom edge */}
            <div className="absolute bottom-0 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-b-lg bg-slate-600" />
          </div>
        </div>
      </div>
    );
  }

  // Mobile Frame
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative mx-auto w-full max-w-[280px]">
        {/* Outer frame with notch */}
        <div className="relative rounded-[2.5rem] border-[14px] border-slate-900 bg-slate-900 shadow-2xl">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
          
          {/* Screen */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.75rem] bg-black">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="280px"
              />
            ) : (
              children
            )}
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/20" />
        </div>
        
        {/* Power button */}
        <div className="absolute right-0 top-24 h-12 w-1 rounded-l-lg bg-slate-800" />
        
        {/* Volume buttons */}
        <div className="absolute left-0 top-20 h-8 w-1 rounded-r-lg bg-slate-800" />
        <div className="absolute left-0 top-32 h-8 w-1 rounded-r-lg bg-slate-800" />
      </div>
    </div>
  );
}

