'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const platformIcons = {
  web: Monitor,
  android: Smartphone,
  ios: Smartphone,
};

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentProject = projects[currentIndex]!;
  const webImages = currentProject?.images?.web || [];
  const mobileImages = currentProject?.images?.mobile || [];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white px-4 py-16 sm:px-6 sm:py-24 md:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-green-100/40 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12 text-center sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="mb-3 inline-block rounded-full bg-green-50 px-3 py-1 sm:mb-4 sm:px-4 sm:py-1.5"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                Our Work
              </span>
            </motion.div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
              Portfolio of{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg md:text-xl">
              A showcase of innovative solutions that have transformed businesses and improved lives.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative min-h-[600px] sm:min-h-[700px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12"
              >
                {/* Device Mockups */}
                <div className="relative flex items-center justify-center">
                  <div className="relative w-full max-w-lg">
                    {/* Gradient glow */}
                    <motion.div
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 -m-6 rounded-full blur-3xl sm:-m-12"
                      style={{
                        background: `radial-gradient(circle, ${currentProject.brandColor}30 0%, transparent 70%)`,
                      }}
                    />

                    {/* Device Mockups */}
                    {webImages.length > 0 && mobileImages.length > 0 ? (
                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <DeviceMockup
                            type="laptop"
                            imageSrc={webImages[0]}
                            imageAlt={`${currentProject.title} web interface`}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20, y: 20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="absolute -bottom-4 -right-4 z-10 w-2/5 sm:-bottom-8 sm:-right-8 sm:w-1/3"
                        >
                          <DeviceMockup
                            type="mobile"
                            imageSrc={mobileImages[0]}
                            imageAlt={`${currentProject.title} mobile interface`}
                          />
                        </motion.div>
                      </div>
                    ) : webImages.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <DeviceMockup
                          type="laptop"
                          imageSrc={webImages[0]}
                          imageAlt={`${currentProject.title} web interface`}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto w-3/5 sm:w-2/5"
                      >
                        <DeviceMockup
                          type="mobile"
                          imageSrc={mobileImages[0]}
                          imageAlt={`${currentProject.title} mobile interface`}
                        />
                      </motion.div>
                    )}

                    {/* Brand accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="mt-8 h-1 w-full origin-left rounded-full sm:mt-12"
                      style={{
                        background: `linear-gradient(90deg, ${currentProject.brandColor}, ${currentProject.brandColor}60, transparent)`,
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-3 inline-block self-start rounded-full px-4 py-1.5 sm:mb-4 sm:px-5 sm:py-2"
                    style={{ backgroundColor: `${currentProject.brandColor}15` }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider sm:text-sm"
                      style={{ color: currentProject.brandColor }}
                    >
                      {currentProject.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4 text-3xl font-bold text-slate-900 sm:mb-6 sm:text-4xl md:text-5xl"
                  >
                    {currentProject.title}
                    <motion.span
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-2 inline-block h-2 w-2 rounded-full sm:ml-3 sm:h-3 sm:w-3"
                      style={{ backgroundColor: currentProject.brandColor }}
                    />
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 text-base leading-relaxed text-slate-600 sm:mb-8 sm:text-lg"
                  >
                    {currentProject.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.slice(0, 5).map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + idx * 0.05, type: 'spring' }}
                        >
                          <Badge variant="secondary">{tech}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm">
                      Platforms
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {currentProject.platforms.map((platform, idx) => {
                        const Icon = platformIcons[platform];
                        return (
                          <motion.div
                            key={platform}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex items-center gap-2 rounded-lg border-2 px-3 py-1.5 shadow-sm sm:px-4 sm:py-2"
                            style={{
                              borderColor: `${currentProject.brandColor}50`,
                              backgroundColor: 'white',
                            }}
                          >
                            <Icon
                              className="h-4 w-4 sm:h-5 sm:w-5"
                              style={{ color: currentProject.brandColor }}
                              aria-hidden="true"
                            />
                            <span className="text-sm font-medium text-slate-700">
                              {platform === 'ios'
                                ? 'iOS'
                                : platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 z-20 flex -translate-y-1/2 justify-between px-2 sm:px-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white sm:h-12 sm:w-12"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:bg-white sm:h-12 sm:w-12"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" />
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2 sm:mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-green-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="mt-4 text-center text-sm text-slate-500">
            <span className="font-semibold text-green-600">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            <span>{projects.length}</span>
          </div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center sm:mt-16"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800 hover:gap-3 sm:px-8 sm:py-4"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
