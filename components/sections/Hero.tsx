'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const words = ['Think', 'Analyze', 'Create'];

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative flex min-h-screen items-center overflow-hidden bg-white px-4 pt-20 sm:px-6 md:px-8">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/20"
        style={{ opacity }}
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-green-200/20 blur-3xl sm:h-72 sm:w-72"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl sm:h-96 sm:w-96"
        />
      </div>

      <motion.div style={{ y }} className="container relative z-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Main Content */}
          <div className="mb-12 sm:mb-16">
            {/* Company Name - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 sm:mb-12"
            >
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block"
                >
                  Legend
                </motion.span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                  className="text-green-600"
                >
                  .
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-block font-medium text-slate-700"
                >
                  Media
                </motion.span>
              </h1>
            </motion.div>

            {/* Animated Word with Enhanced Effects */}
            <div className="mb-8 h-16 sm:mb-12 sm:h-20 md:h-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -40, rotateX: 90 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="text-4xl font-bold text-green-600 sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {words[currentWord]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Description with stagger effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:mb-12 sm:text-lg md:text-xl"
            >
              We build <span className="font-semibold text-slate-900">digital solutions</span> that
              transform <span className="font-semibold text-green-600">ideas into reality</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group inline-flex w-full items-center justify-center gap-2 bg-slate-900 px-6 py-3 text-center font-medium text-white transition-all hover:gap-3 sm:w-auto sm:px-8 sm:py-4"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform" aria-hidden="true" />
              </button>

              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group inline-flex w-full items-center justify-center gap-2 border-b-2 border-slate-900 pb-1 font-medium text-slate-900 transition-colors hover:border-green-600 hover:text-green-600 sm:w-auto"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </motion.div>
          </div>

          {/* Stats Bar - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:gap-8 sm:pt-8 md:gap-16"
          >
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '450+', label: 'Satisfied Clients' },
              { value: '8+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="mb-1 text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Element - Subtle */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] bg-gradient-to-tl from-green-50 to-transparent opacity-50 sm:h-[500px] sm:w-[500px]" />
    </section>
  );
}
