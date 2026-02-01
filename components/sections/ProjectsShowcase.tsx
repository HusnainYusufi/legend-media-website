'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Smartphone, Check, Expand, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '@/lib/data/projects';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { Badge } from '@/components/ui/Badge';
import { AdvancedParallax } from '@/components/ui/AdvancedParallax';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const platformIcons = {
  web: Monitor,
  android: Smartphone,
  ios: Smartphone,
};

export function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white px-4 py-16 sm:px-6 sm:py-24 md:py-32"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <AdvancedParallax speed={80} direction="up" className="absolute left-1/4 top-1/4">
          <div className="h-64 w-64 rounded-full bg-green-100/40 blur-3xl sm:h-96 sm:w-96" />
        </AdvancedParallax>
        <AdvancedParallax speed={100} direction="down" className="absolute bottom-1/4 right-1/4">
          <div className="h-64 w-64 rounded-full bg-blue-100/40 blur-3xl sm:h-96 sm:w-96" />
        </AdvancedParallax>
      </div>

      <div className="container relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div style={{ opacity, y: useTransform(y, (value) => value * 0.5) }}>
          <ScrollReveal>
            <div className="mb-12 text-center sm:mb-16 md:mb-24">
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
        </motion.div>

        {/* Projects */}
        <div className="space-y-24 sm:space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <ProjectShowcaseCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectShowcaseCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectShowcaseCard({ project, index }: ProjectShowcaseCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const isEven = index % 2 === 0;

  const allImages = [...(project.images.web || []), ...(project.images.mobile || [])];
  const webImages = project.images.web || [];
  const mobileImages = project.images.mobile || [];

  return (
    <div
      ref={cardRef}
      className={`grid gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24 ${!isEven && 'lg:grid-flow-dense'}`}
    >
      {/* Device Mockups Gallery */}
      <div className={`${!isEven && 'lg:col-start-2'}`}>
        <ScrollReveal delay={0.1}>
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            {/* Gradient glow effect */}
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
              className="absolute inset-0 -m-3 rounded-full blur-3xl sm:-m-6 md:-m-12"
              style={{
                background: `radial-gradient(circle, ${project.brandColor}30 0%, transparent 70%)`,
              }}
            />

            {/* Device Mockups Container */}
            {webImages.length > 0 && mobileImages.length > 0 ? (
              // Both web and mobile
              <div className="relative">
                {/* Web Mockup - Background */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative cursor-pointer"
                  onClick={() => setGalleryOpen(true)}
                >
                  <DeviceMockup
                    type="laptop"
                    imageSrc={webImages[0]}
                    imageAlt={`${project.title} web interface`}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-4 backdrop-blur-sm">
                      <Expand className="h-6 w-6 text-slate-900" />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Mockup - Floating on top */}
                  <motion.div
                    initial={{ opacity: 0, x: 40, y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ y: -10, x: 10, scale: 1.05 }}
                    className="group absolute -bottom-8 -right-4 z-10 w-2/5 cursor-pointer sm:-bottom-12 sm:-right-8 sm:w-1/3 lg:-right-12"
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={() => setGalleryOpen(true)}
                    data-cursor="project"
                  >
                  <DeviceMockup
                    type="mobile"
                    imageSrc={mobileImages[0]}
                    imageAlt={`${project.title} mobile interface`}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-[2.5rem] bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-3 backdrop-blur-sm">
                      <Expand className="h-5 w-5 text-slate-900" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : webImages.length > 0 ? (
              // Only web
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative cursor-pointer"
                onClick={() => setGalleryOpen(true)}
              >
                <DeviceMockup
                  type="laptop"
                  imageSrc={webImages[0]}
                  imageAlt={`${project.title} web interface`}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <div className="rounded-full bg-white/90 p-4 backdrop-blur-sm">
                    <Expand className="h-6 w-6 text-slate-900" />
                  </div>
                </div>
              </motion.div>
            ) : (
              // Only mobile
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative mx-auto w-3/5 cursor-pointer sm:w-2/5"
                onClick={() => setGalleryOpen(true)}
                data-cursor="project"
              >
                <DeviceMockup
                  type="mobile"
                  imageSrc={mobileImages[0]}
                  imageAlt={`${project.title} mobile interface`}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-[2.5rem] bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <div className="rounded-full bg-white/90 p-4 backdrop-blur-sm">
                    <Expand className="h-6 w-6 text-slate-900" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Brand accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 h-1 w-full origin-left rounded-full sm:mt-8"
              style={{
                background: `linear-gradient(90deg, ${project.brandColor}, ${project.brandColor}60, transparent)`,
              }}
            />

            

            {/* Lightbox Gallery */}
            {galleryOpen && (
              <LightboxGallery
                images={allImages}
                onClose={() => setGalleryOpen(false)}
                projectName={project.title}
              />
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className={`flex flex-col justify-center ${!isEven && 'lg:col-start-1 lg:row-start-1'}`}
      >
        <ScrollReveal delay={0.2}>
          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="mb-3 inline-block rounded-full px-4 py-1.5 sm:mb-4 sm:px-5 sm:py-2"
            style={{ backgroundColor: `${project.brandColor}15` }}
          >
            <span
              className="text-xs font-bold uppercase tracking-wider sm:text-sm"
              style={{ color: project.brandColor }}
            >
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-slate-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {project.title}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 inline-block h-2 w-2 rounded-full sm:ml-3 sm:h-3 sm:w-3"
              style={{ backgroundColor: project.brandColor }}
            />
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-base leading-relaxed text-slate-600 sm:mb-8 sm:text-lg md:text-xl"
          >
            {project.description}
          </motion.p>

          {/* Features */}
          <div className="mb-6 sm:mb-8">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:mb-5 sm:text-sm">
              Key Features
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6"
                    style={{ backgroundColor: `${project.brandColor}25` }}
                  >
                    <Check
                      className="h-3 w-3 sm:h-4 sm:w-4"
                      style={{ color: project.brandColor }}
                      aria-hidden="true"
                    />
                  </motion.div>
                  <span className="text-sm text-slate-700 sm:text-base md:text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6 sm:mb-8">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:mb-5 sm:text-sm">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, idx) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, type: 'spring' }}
                  whileHover={{ scale: 1.15, y: -4 }}
                >
                  <Badge variant="secondary">{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:mb-5 sm:text-sm">
              Platforms
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {project.platforms.map((platform, idx) => {
                const Icon = platformIcons[platform];
                return (
                  <motion.div
                    key={platform}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex items-center gap-2 rounded-xl border-2 px-4 py-2 shadow-md sm:gap-3 sm:px-6 sm:py-3"
                    style={{
                      borderColor: `${project.brandColor}50`,
                      backgroundColor: 'white',
                    }}
                  >
                    <Icon
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      style={{ color: project.brandColor }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-semibold text-slate-700 sm:text-base">
                      {platform === 'ios'
                        ? 'iOS'
                        : platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </motion.div>
    </div>
  );
}

// Lightbox Gallery Component
function LightboxGallery({
  images,
  onClose,
  projectName,
}: {
  images: string[];
  onClose: () => void;
  projectName: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      {/* Content */}
      <div className="relative h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        {/* Current Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
        >
          <img
            src={images[currentIndex]}
            alt={`${projectName} screenshot ${currentIndex + 1}`}
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Previous Button */}
        {images.length > 1 && (
          <motion.button
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </motion.button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <motion.button
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </motion.button>
        )}

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/50 p-2 backdrop-blur-sm">
          {images.map((_img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
          aria-label="Close gallery"
        >
          <X className="h-6 w-6" />
        </motion.button>

        {/* Image counter */}
        <div className="absolute left-4 top-4 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  );
}

