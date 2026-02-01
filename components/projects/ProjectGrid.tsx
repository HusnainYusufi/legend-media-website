'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/lib/types/project.types';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {projects.map((project, index) => {
        // Create a bento box layout pattern (varying sizes)
        const isLarge = index % 5 === 0;
        const isMedium = index % 3 === 0 && !isLarge;

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${
              isLarge
                ? 'sm:col-span-2 lg:col-span-2'
                : isMedium
                  ? 'sm:col-span-1 lg:col-span-2'
                  : 'sm:col-span-1'
            }`}
          >
            <ProjectCard
              project={project}
              onClick={() => onSelectProject(project)}
              variant={isLarge ? 'large' : isMedium ? 'medium' : 'small'}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
