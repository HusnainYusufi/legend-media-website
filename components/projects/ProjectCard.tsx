'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone } from 'lucide-react';
import type { Project } from '@/lib/types/project.types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  variant?: 'small' | 'medium' | 'large';
}

export function ProjectCard({ project, onClick, variant = 'small' }: ProjectCardProps) {
  const heightClass =
    variant === 'large' ? 'h-[500px]' : variant === 'medium' ? 'h-[400px]' : 'h-[350px]';

  const hasMobile = project.platforms.includes('android') || project.platforms.includes('ios');
  const hasWeb = project.platforms.includes('web');

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -8 }}
      className={`group relative ${heightClass} w-full overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 p-8 text-left shadow-lg transition-shadow hover:shadow-2xl`}
      style={{
        borderTop: `4px solid ${project.brandColor}`,
      }}
    >
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${project.brandColor} 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
        style={{
          background: `linear-gradient(135deg, ${project.brandColor}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: project.brandColor }}
            />
            {project.category}
          </motion.div>

          {/* Title */}
          <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-slate-700 sm:text-3xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-end justify-between">
          {/* Platform Icons */}
          <div className="flex gap-2">
            {hasWeb && (
              <div className="flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1">
                <Monitor className="h-3 w-3 text-slate-600" />
                <span className="text-xs font-medium text-slate-600">Web</span>
              </div>
            )}
            {hasMobile && (
              <div className="flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1">
                <Smartphone className="h-3 w-3 text-slate-600" />
                <span className="text-xs font-medium text-slate-600">Mobile</span>
              </div>
            )}
          </div>

          {/* View Details Arrow */}
          <motion.div
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: project.brandColor }}
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </motion.div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${project.brandColor}22 50%, transparent 70%)`,
        }}
      />
    </motion.button>
  );
}
