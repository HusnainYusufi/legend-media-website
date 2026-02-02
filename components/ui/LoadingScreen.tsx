'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  // Disable scrolling when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with Sophisticated Reveal */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="mb-20"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative h-auto w-56 md:w-64"
              >
                <Image
                  src="/logo/leaf-logo.png"
                  alt="Leaf Solutions"
                  width={256}
                  height={102}
                  className="h-auto w-full object-contain"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Single Elegant Circular Loader */}
            <div className="relative flex h-24 w-24 items-center justify-center">
              {/* Background Circle */}
              <svg className="h-24 w-24 -rotate-90 transform">
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-slate-100"
                />
              </svg>
              
              {/* Animated Progress Circle */}
              <svg className="absolute inset-0 h-24 w-24 -rotate-90 transform">
                <motion.circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="url(#loadingGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: [0, 0.75, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    pathLength: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    rotate: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                />
                <defs>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#6EE7B7" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Dot Pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute h-4 w-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg shadow-green-500/50"
              />
            </div>

            {/* Tagline with Fade In */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-16 text-xs font-medium tracking-widest text-slate-500"
            >
              THINK • ANALYZE • CREATE
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

