'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Phone, Calendar, Sparkles } from 'lucide-react';
import { BookingModal } from '@/components/ui/BookingModal';

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-green-50/30 px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:py-40">

      {/* Gradient Orbs - lighter colors */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -right-40 bottom-1/3 h-[600px] w-[600px] rounded-full bg-emerald-300/20 blur-[120px]"
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 sm:mb-6 sm:px-4 sm:py-1.5"
            >
              <Sparkles className="h-3 w-3 text-green-600 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                Let's Connect
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Ready to Build Something{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Amazing
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-green-600 to-emerald-600 sm:-bottom-2 sm:h-1"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
              ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-slate-600 sm:text-lg md:text-xl"
            >
              Let's turn your vision into reality. Book a free consultation to discuss your project.
            </motion.p>
          </div>

          {/* Magnetic CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12 flex justify-center sm:mb-16"
          >
              <MagneticButton onClick={() => setIsModalOpen(true)} />
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid gap-4 sm:gap-6 md:grid-cols-2"
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@leafsols.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:rounded-2xl sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 sm:h-14 sm:w-14">
                  <Mail className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <div className="mb-0.5 text-xs font-medium text-slate-500 sm:mb-1 sm:text-sm">Email</div>
                  <div className="text-base font-semibold text-slate-900 sm:text-lg">info@leafsols.com</div>
                  <div className="mt-0.5 text-xs text-green-600 sm:mt-1 sm:text-sm">Response within 24 hours</div>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+12147959956"
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:rounded-2xl sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 sm:h-14 sm:w-14">
                  <Phone className="h-6 w-6 text-emerald-600 sm:h-7 sm:w-7" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <div className="mb-0.5 text-xs font-medium text-slate-500 sm:mb-1 sm:text-sm">Phone</div>
                  <div className="text-base font-semibold text-slate-900 sm:text-lg">+1 (214) 795-9956</div>
                  <div className="mt-0.5 text-xs text-emerald-600 sm:mt-1 sm:text-sm">Mon-Fri 9AM-6PM EST</div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

// Magnetic Button with Shimmer Effect
function MagneticButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer"
    >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-2xl transition-shadow duration-300 hover:shadow-green-500/50 sm:px-8 sm:py-4 md:px-10 md:py-5"
            onClick={onClick}
          >
        {/* Shimmer Animation */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: 'linear',
            }}
          />
        </div>

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 text-base sm:text-lg">
          <Calendar className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          Book a Free Meeting
          <motion.span
            animate={{
              rotate: [0, 14, -14, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            ✨
          </motion.span>
        </span>

        {/* Glow Effect */}
        <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
      </motion.button>
    </motion.div>
  );
}
