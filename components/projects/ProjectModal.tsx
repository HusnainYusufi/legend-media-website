'use client';

import { motion } from 'framer-motion';
import { X, Monitor, Smartphone, Check } from 'lucide-react';
import type { Project } from '@/lib/types/project.types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const hasMobile = project.platforms.includes('android') || project.platforms.includes('ios');
  const hasWeb = project.platforms.includes('web');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
    >
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        {/* Header with Brand Color */}
        <div
          className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-sm sm:px-8 sm:py-6"
          style={{
            borderTop: `6px solid ${project.brandColor}`,
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              {/* Category Badge */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: project.brandColor }}
                />
                {project.category}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{project.title}</h2>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-full p-2 transition-colors hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="h-6 w-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 sm:px-8">
          {/* Description */}
          <div className="mb-8">
            <h3 className="mb-3 text-xl font-semibold text-slate-900">Overview</h3>
            <p className="leading-relaxed text-slate-600">{project.description}</p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Key Features</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-4"
                >
                  <div
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${project.brandColor}20` }}
                  >
                    <Check className="h-3 w-3" style={{ color: project.brandColor }} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-md"
                  style={{ backgroundColor: project.brandColor }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Available On</h3>
            <div className="flex gap-4">
              {hasWeb && (
                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-6 py-4">
                  <Monitor className="h-6 w-6 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-900">Web Platform</p>
                    <p className="text-sm text-slate-600">Desktop & Mobile Web</p>
                  </div>
                </div>
              )}
              {hasMobile && (
                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-6 py-4">
                  <Smartphone className="h-6 w-6 text-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-900">Mobile Apps</p>
                    <p className="text-sm text-slate-600">
                      {project.platforms.includes('ios') && 'iOS'}
                      {project.platforms.includes('ios') && project.platforms.includes('android') && ' & '}
                      {project.platforms.includes('android') && 'Android'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-center sm:p-8">
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              Interested in a Similar Project?
            </h3>
            <p className="mb-6 text-slate-600">
              Let's discuss how we can build something amazing for your business.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="inline-block rounded-full px-8 py-3 font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
              style={{ backgroundColor: project.brandColor }}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
