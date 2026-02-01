'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BookingModal } from '@/components/ui/BookingModal';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Burger Menu + Language Toggle */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed right-6 top-6 z-50 flex items-center gap-3 md:right-8 md:top-8"
      >
        <LanguageToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group relative h-14 w-14 rounded-full bg-slate-900/80 backdrop-blur-xl transition-all hover:bg-slate-900 hover:shadow-2xl md:h-16 md:w-16"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {/* Animated Burger Icon */}
          <div className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5">
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 6 : 0,
                backgroundColor: menuOpen ? '#10B981' : '#FFFFFF',
              }}
              className="h-0.5 w-5 rounded-full bg-white transition-all"
            />
            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
                width: menuOpen ? 0 : 20,
              }}
              className="h-0.5 w-5 rounded-full bg-white transition-all"
            />
            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -6 : 0,
                backgroundColor: menuOpen ? '#10B981' : '#FFFFFF',
              }}
              className="h-0.5 w-5 rounded-full bg-white transition-all"
            />
          </div>

          {/* Ripple effect on hover */}
          <span className="absolute inset-0 -z-10 rounded-full bg-green-500 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20" />
        </button>
      </motion.header>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-2xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto"
            >
              <div className="container mx-auto max-w-6xl px-6">
                {/* Logo at top */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-12 text-center sm:mb-16"
                >
                  <div className="mb-3 flex items-center justify-center gap-2 sm:gap-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <Image
                        src="/logo/leaf.png"
                        alt="Legend Media"
                        width={40}
                        height={40}
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </motion.div>
                    <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                      Legend<span className="text-green-500">.</span>Media
                    </h2>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">Think • Analyze • Create</p>
                </motion.div>

                {/* Navigation Links */}
                <nav className="mb-12 sm:mb-16">
                  <ul className="space-y-4 sm:space-y-6">
                    {[
                      { href: '/', label: 'Home', number: '01' },
                      { href: '/#about', label: 'About', number: '02' },
                      { href: '/projects', label: 'Portfolio', number: '03' },
                      { href: '/#testimonials', label: 'Reviews', number: '04' },
                      { href: '/#contact', label: 'Contact', number: '05' },
                    ].map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="group inline-flex items-center gap-3 text-3xl font-bold transition-all sm:gap-6 sm:text-4xl md:text-6xl lg:text-7xl"
                        >
                          <span className="text-xs font-mono text-green-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:text-sm">
                            {item.number}
                          </span>
                          <motion.span
                            className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent transition-all group-hover:from-green-400 group-hover:to-emerald-400"
                            whileHover={{ x: 16, scale: 1.05 }}
                            transition={{ duration: 0.1 }}
                          >
                            {item.label}
                          </motion.span>
                          <span className="h-0.5 w-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 group-hover:w-12 sm:h-1 sm:group-hover:w-16" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-12 flex justify-center sm:mb-16"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-2xl shadow-green-500/30 sm:px-10 sm:py-5"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    />
                    <span className="relative flex items-center gap-2 text-base sm:gap-3 sm:text-lg">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                      Book a Meeting
                    </span>
                  </motion.button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid gap-4 text-center sm:gap-6 md:grid-cols-2 md:text-left"
                >
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-500 sm:text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:info@legendmedia.com"
                      className="text-base text-white transition-colors hover:text-green-400 sm:text-lg"
                    >
                      info@legendmedia.com
                    </a>
                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">Response within 24 hours</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-500 sm:text-sm">
                      Phone
                    </p>
                    <a
                      href="tel:+12147959956"
                      className="text-base text-white transition-colors hover:text-green-400 sm:text-lg"
                    >
                      +1 (214) 795-9956
                    </a>
                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500 blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-emerald-500 blur-3xl"
                  />
                </div>
              </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
