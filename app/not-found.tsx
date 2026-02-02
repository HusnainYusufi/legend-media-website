'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <div className="container px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-auto w-32">
              <Image
                src="/logo/leaf-logo.png"
                alt="Legend Media"
                width={150}
                height={60}
                className="h-auto w-full object-contain"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* 404 */}
          <h1 className="mb-4 text-9xl font-bold text-slate-900 md:text-[200px]">
            404
          </h1>

          {/* Message */}
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Page Not Found
          </h2>
          <p className="mx-auto mb-8 max-w-md text-lg text-slate-600">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
            >
              <Home className="h-5 w-5" aria-hidden="true" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 transition-all hover:border-green-600 hover:text-green-600"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              Go Back
            </button>
          </div>

          {/* Decorative element */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mt-16"
          >
            <div className="inline-block text-8xl">🍃</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

