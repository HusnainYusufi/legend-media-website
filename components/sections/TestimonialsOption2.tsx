'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

/**
 * OPTION 2: FEATURED SPOTLIGHT CAROUSEL
 * Large featured testimonial with side navigation
 * BEST FOR: Premium feel, detailed quotes, fewer distractions
 */
export function TestimonialsOption2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);

  return (
    <>
      {/* Desktop: Horizontal scroll */}
      <div ref={containerRef} className="relative hidden h-[300vh] md:block">
        <section className="sticky top-0 flex h-screen items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
          </div>

          {/* Gradient fade to next section at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

          {/* Header - Fixed position */}
          <div className="absolute left-0 right-0 top-16 z-10 px-4 text-center md:top-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-3 inline-block rounded-full bg-green-500/10 px-4 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
                  Testimonials
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Client Success Stories</h2>
            </motion.div>
          </div>

          {/* Sliding testimonials - with proper spacing from header */}
          <motion.div style={{ x }} className="flex gap-16 px-8 md:px-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex h-screen w-screen flex-shrink-0 items-center justify-center pt-32 md:pt-40"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-4xl px-4"
                >
                  {/* Giant quote icon */}
                  <Quote
                    className="absolute -left-4 -top-12 h-24 w-24 text-green-400/10 md:-left-8 md:-top-8 md:h-32 md:w-32"
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
                    {/* Stars */}
                    <div className="mb-6 flex justify-center gap-2">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-amber-400 text-amber-400 md:h-6 md:w-6"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mb-8 text-center text-xl font-light leading-relaxed text-white md:text-2xl lg:text-3xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-xl font-bold text-white md:h-16 md:w-16 md:text-2xl">
                        {testimonial.initials}
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-white md:text-xl">{testimonial.author}</div>
                        <div className="text-sm text-slate-400 md:text-base">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Progress indicator */}
          <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="h-2 w-16 overflow-hidden rounded-full bg-white/20"
              >
                <motion.div
                  className="h-full bg-green-400"
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [index / testimonials.length, (index + 1) / testimonials.length],
                      [0, 1]
                    ),
                    transformOrigin: 'left',
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile: Vertical stack */}
      <section id="testimonials" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16 md:hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8 text-center">
          <div className="mb-3 inline-block rounded-full bg-green-500/10 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Client Success Stories</h2>
        </div>

        {/* Testimonials */}
        <div className="relative z-10 mx-auto max-w-lg space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Giant quote icon */}
              <Quote
                className="absolute -left-2 -top-6 h-16 w-16 text-green-400/10"
                aria-hidden="true"
              />

              {/* Card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                {/* Stars */}
                <div className="mb-4 flex justify-center gap-1.5">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 text-center text-base font-light leading-relaxed text-white sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-lg font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div className="text-center">
                    <div className="text-base font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

