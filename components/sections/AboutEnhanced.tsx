'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, BarChart3, Palette, Rocket, Shield, Zap } from 'lucide-react';
import { AdvancedParallax } from '@/components/ui/AdvancedParallax';
import { ScaleOnScroll } from '@/components/ui/ScaleOnScroll';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const features = [
  {
    icon: Lightbulb,
    title: 'Strategic Thinking',
    description:
      'We start with understanding your business goals and market positioning to create solutions that drive real results.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Analysis',
    description:
      'Every decision is backed by research, analytics, and user insights to ensure optimal performance and ROI.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Creative Execution',
    description:
      'Beautiful, functional designs combined with cutting-edge technology to deliver exceptional user experiences.',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge technology',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Enterprise-grade solutions that scale',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for the best UX',
  },
];

export function AboutEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      {/* Animated background */}
      <div className="absolute inset-0">
        <AdvancedParallax speed={100} direction="up" className="absolute left-0 top-0">
          <div className="h-64 w-64 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 opacity-30 blur-3xl sm:h-96 sm:w-96" />
        </AdvancedParallax>
        <AdvancedParallax speed={80} direction="down" className="absolute right-0 top-1/4">
          <div className="h-64 w-64 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-30 blur-3xl sm:h-96 sm:w-96" />
        </AdvancedParallax>
        <AdvancedParallax speed={120} direction="up" className="absolute bottom-0 left-1/3">
          <div className="h-64 w-64 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-30 blur-3xl sm:h-96 sm:w-96" />
        </AdvancedParallax>
      </div>

      <div className="container relative mx-auto max-w-7xl">
        {/* Header with parallax */}
        <motion.div style={{ opacity, scale }} className="mb-12 text-center sm:mb-16 md:mb-24">
          <ScrollReveal>
            <div className="mb-4 inline-block sm:mb-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="inline-block rounded-full bg-green-50 px-4 py-1.5 sm:px-6 sm:py-2"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 sm:text-sm">
                  Who We Are
                </span>
              </motion.div>
            </div>

            <motion.h2
              style={{ y: useTransform(y, (value) => value * 0.5) }}
              className="mb-6 text-4xl font-bold text-slate-900 sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Digital{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>

            <motion.p
              style={{ y: useTransform(y, (value) => value * 0.3) }}
              className="mx-auto max-w-4xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
            >
              At Legend Media, we specialize in building scalable web and app solutions tailored to
              your business goals. Our expert team helps you bring ideas to life with innovative,
              reliable, and future-ready technology.
            </motion.p>
          </ScrollReveal>
        </motion.div>

        {/* Feature cards with stagger and parallax */}
        <div className="mb-16 grid gap-8 sm:mb-24 sm:gap-12 md:mb-32 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AdvancedParallax
                key={feature.title}
                speed={50 + index * 20}
                direction={index % 2 === 0 ? 'up' : 'down'}
              >
                <ScaleOnScroll start={0.8} end={1}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="group relative h-full"
                  >
                    {/* Glowing background on hover */}
                    <div
                      className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl sm:p-8">
                      {/* Animated gradient background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                      />

                      {/* Icon with rotation on hover */}
                      <motion.div
                        className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br sm:mb-6 sm:h-16 sm:w-16 ${feature.gradient}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" aria-hidden="true" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="relative mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="relative text-sm leading-relaxed text-slate-600 sm:text-base">{feature.description}</p>

                      {/* Decorative bottom line */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`}
                      />
                    </div>
                  </motion.div>
                </ScaleOnScroll>
              </AdvancedParallax>
            );
          })}
        </div>

        {/* Values section with horizontal reveal */}
        <div className="relative">
          <ScrollReveal delay={0.2}>
            <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:mb-12 sm:text-3xl md:text-4xl">
              Our Core Values
            </h3>
          </ScrollReveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl sm:p-8"
                >
                  {/* Background gradient - always present, just changes opacity */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <Icon
                      className="mb-3 h-8 w-8 text-green-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:mb-4 sm:h-10 sm:w-10"
                      aria-hidden="true"
                    />
                    <h4 className="mb-2 text-lg font-semibold text-slate-900 sm:text-xl">{value.title}</h4>
                    <p className="text-sm text-slate-600 sm:text-base">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

