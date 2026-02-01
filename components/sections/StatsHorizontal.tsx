'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  {
    icon: TrendingUp,
    value: 500,
    suffix: '+',
    label: 'Projects Completed',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: 450,
    suffix: '+',
    label: 'Satisfied Clients',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    value: 8,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'from-amber-500 to-orange-500',
  },
];

export function StatsHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <>
      {/* Desktop: Horizontal scroll */}
      <div ref={containerRef} className="relative hidden h-[300vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-slate-900">
          {/* Background elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-green-600/20 to-transparent"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
              }}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-blue-600/20 to-transparent"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
              }}
            />
          </div>

          {/* Horizontal scrolling content */}
          <motion.div style={{ x }} className="flex gap-12 px-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="flex h-screen w-screen flex-shrink-0 items-center justify-center"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [
                        index / stats.length - 0.1,
                        index / stats.length,
                        (index + 1) / stats.length,
                        (index + 1) / stats.length + 0.1,
                      ],
                      [0, 1, 1, 0]
                    ),
                  }}
                >
                  <div className="relative">
                {/* Glowing background */}
                <div
                  className={`absolute inset-0 -m-10 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-3xl md:-m-20`}
                />

                    {/* Content card */}
                    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-16 backdrop-blur-sm">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className={`mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br ${stat.color}`}
                      >
                        <Icon className="h-16 w-16 text-white" aria-hidden="true" />
                      </motion.div>

                      {/* Value */}
                      <div className="mb-4 text-center">
                        <div className="text-8xl font-bold text-white">
                          <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                        </div>
                      </div>

                      {/* Label */}
                      <p className="text-center text-2xl font-medium text-slate-300">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress indicator */}
          <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-3">
            {stats.map((_, index) => (
              <motion.div
                key={index}
                className="h-2 w-12 overflow-hidden rounded-full bg-white/20"
              >
                <motion.div
                  className="h-full bg-green-400"
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [index / stats.length, (index + 1) / stats.length],
                      [0, 1]
                    ),
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical stack */}
      <section className="relative overflow-hidden bg-slate-900 px-4 py-16 md:hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-green-600/20 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-600/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-lg space-y-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Glowing background */}
                <div
                  className={`absolute inset-0 -m-4 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-3xl sm:-m-8`}
                />

                {/* Content card */}
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${stat.color}`}
                  >
                    <Icon className="h-10 w-10 text-white" aria-hidden="true" />
                  </motion.div>

                  {/* Value */}
                  <div className="mb-3 text-center">
                    <div className="text-5xl font-bold text-white">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-center text-lg font-medium text-slate-300">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

