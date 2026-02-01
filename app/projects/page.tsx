'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Check, ArrowLeft, Filter } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { Badge } from '@/components/ui/Badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const platformIcons = {
  web: Monitor,
  android: Smartphone,
  ios: Smartphone,
};

// Get unique categories
const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-40">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-green-100/40 blur-3xl sm:h-96 sm:w-96" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl sm:h-96 sm:w-96" />
          </div>

          <div className="container relative mx-auto max-w-7xl">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-green-600"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center sm:mb-16"
            >
              <div className="mb-3 inline-block rounded-full bg-green-50 px-3 py-1 sm:mb-4 sm:px-4 sm:py-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                  Our Portfolio
                </span>
              </div>
              <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
                All{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg md:text-xl">
                Explore our complete collection of {projects.length} innovative solutions across various industries.
              </p>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              <Filter className="mr-2 h-4 w-4 text-slate-400" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-5 sm:py-2.5 ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                      : 'bg-white text-slate-600 shadow-md hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 pb-24 sm:px-6 sm:pb-32">
          <div className="container mx-auto max-w-7xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-16 sm:space-y-24"
              >
                {filteredProjects.map((project, index) => {
                  const isExpanded = expandedProject === project.id;
                  const webImages = project.images.web || [];
                  const mobileImages = project.images.mobile || [];
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                        !isEven && 'lg:grid-flow-dense'
                      }`}
                    >
                      {/* Device Mockups */}
                      <div className={`${!isEven && 'lg:col-start-2'}`}>
                        <div className="relative">
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
                            className="absolute inset-0 -m-4 rounded-full blur-3xl sm:-m-8"
                            style={{
                              background: `radial-gradient(circle, ${project.brandColor}30 0%, transparent 70%)`,
                            }}
                          />

                          {/* Device Mockups */}
                          {webImages.length > 0 && mobileImages.length > 0 ? (
                            <div className="relative">
                              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                                <DeviceMockup
                                  type="laptop"
                                  imageSrc={webImages[0]}
                                  imageAlt={`${project.title} web interface`}
                                />
                              </motion.div>
                              <motion.div
                                whileHover={{ y: -8, x: 8, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="absolute -bottom-4 -right-4 z-10 w-2/5 sm:-bottom-8 sm:-right-8 sm:w-1/3"
                              >
                                <DeviceMockup
                                  type="mobile"
                                  imageSrc={mobileImages[0]}
                                  imageAlt={`${project.title} mobile interface`}
                                />
                              </motion.div>
                            </div>
                          ) : webImages.length > 0 ? (
                            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                              <DeviceMockup
                                type="laptop"
                                imageSrc={webImages[0]}
                                imageAlt={`${project.title} web interface`}
                              />
                            </motion.div>
                          ) : (
                            <motion.div
                              whileHover={{ y: -8, scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              className="mx-auto w-3/5 sm:w-2/5"
                            >
                              <DeviceMockup
                                type="mobile"
                                imageSrc={mobileImages[0]}
                                imageAlt={`${project.title} mobile interface`}
                              />
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
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`flex flex-col justify-center ${
                          !isEven && 'lg:col-start-1 lg:row-start-1'
                        }`}
                      >
                        {/* Category badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="mb-3 inline-block self-start rounded-full px-4 py-1.5 sm:mb-4 sm:px-5 sm:py-2"
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
                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="mb-4 text-3xl font-bold text-slate-900 sm:mb-6 sm:text-4xl md:text-5xl"
                        >
                          {project.title}
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="ml-2 inline-block h-2 w-2 rounded-full sm:ml-3 sm:h-3 sm:w-3"
                            style={{ backgroundColor: project.brandColor }}
                          />
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="mb-6 text-base leading-relaxed text-slate-600 sm:mb-8 sm:text-lg"
                        >
                          {project.description}
                        </motion.p>

                        {/* Expand/Collapse Features */}
                        <button
                          onClick={() =>
                            setExpandedProject(isExpanded ? null : project.id)
                          }
                          className="mb-6 inline-flex items-center gap-2 self-start text-sm font-medium text-green-600 transition-colors hover:text-green-700 sm:mb-8"
                        >
                          {isExpanded ? 'Hide Details' : 'Show Details'}
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              {/* Features */}
                              <div className="mb-6 sm:mb-8">
                                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:mb-4 sm:text-sm">
                                  Key Features
                                </h4>
                                <div className="space-y-2 sm:space-y-3">
                                  {project.features.map((feature, idx) => (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.05 }}
                                      className="flex items-start gap-3"
                                    >
                                      <div
                                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6"
                                        style={{ backgroundColor: `${project.brandColor}25` }}
                                      >
                                        <Check
                                          className="h-3 w-3 sm:h-4 sm:w-4"
                                          style={{ color: project.brandColor }}
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <span className="text-sm text-slate-700 sm:text-base">
                                        {feature}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Technologies */}
                        <div className="mb-6 sm:mb-8">
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, type: 'spring' }}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge variant="secondary">{tech}</Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Platforms */}
                        <div>
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm">
                            Platforms
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.platforms.map((platform, idx) => {
                              const Icon = platformIcons[platform];
                              return (
                                <motion.div
                                  key={platform}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className="flex items-center gap-2 rounded-lg border-2 px-3 py-1.5 shadow-sm sm:px-4 sm:py-2"
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
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg text-slate-500">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:mb-6 sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-base text-slate-600 sm:text-lg">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all hover:bg-green-700 hover:gap-3"
            >
              Get In Touch
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
