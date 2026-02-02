'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  FileText,
  ArrowLeft,
  Database,
  Target,
  Lock,
  UserX,
  Cookie,
  Settings,
  CheckCircle,
  Briefcase,
  CreditCard,
  Copyright,
  AlertTriangle,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-5 md:px-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-600 transition-colors hover:text-green-600"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">
            Legend<span className="text-green-600">.</span>Media
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-6 py-16 md:px-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Legal Information
          </h1>
          <p className="text-lg text-slate-600">
            Our commitment to transparency, privacy, and fair terms
          </p>
        </motion.div>

        {/* Privacy Policy Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          id="privacy-policy"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
          </div>

          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-slate-700">
              At Legend Media, we respect and protect your privacy. Here's how we handle your
              information.
            </p>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                <Database className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Data Collection</h3>
                <p className="leading-relaxed text-slate-600">
                  We only collect personal information (like name, email, phone number) when you
                  voluntarily submit it through our website forms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Use of Data</h3>
                <p className="leading-relaxed text-slate-600">
                  Your data is used solely for communication, consultation scheduling, and providing
                  requested services.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                <Lock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Data Security</h3>
                <p className="leading-relaxed text-slate-600">
                  We implement industry-standard security measures to safeguard your information.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                <UserX className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Third Parties</h3>
                <p className="leading-relaxed text-slate-600">
                  We never sell or rent your personal information to third parties.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                <Cookie className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Cookies</h3>
                <p className="leading-relaxed text-slate-600">
                  Our website may use cookies to improve user experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                <Settings className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Your Rights</h3>
                <p className="leading-relaxed text-slate-600">
                  You may request data deletion or updates anytime by contacting us at{' '}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@leafsols.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-green-600 hover:underline"
                  >
                    info@leafsols.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Terms & Conditions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          id="terms-conditions"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Terms & Conditions</h2>
          </div>

          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-slate-700">
              By using our website and services, you agree to the following terms and conditions.
            </p>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Consultations</h3>
                <p className="leading-relaxed text-slate-600">
                  Free consultations are provided to help you explore project requirements; no
                  obligations until a formal agreement is signed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Services</h3>
                <p className="leading-relaxed text-slate-600">
                  Project timelines, deliverables, and pricing will be clearly defined in a written
                  agreement before commencement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                <CreditCard className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Payments</h3>
                <p className="leading-relaxed text-slate-600">
                  Payments are due as per agreed milestones; late payments may delay delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                <Copyright className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Intellectual Property</h3>
                <p className="leading-relaxed text-slate-600">
                  Upon full payment, completed project deliverables belong to the client.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Liability</h3>
                <p className="leading-relaxed text-slate-600">
                  Legend Media is not responsible for indirect losses, downtime, or third-party
                  service disruptions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100">
                <RefreshCw className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Updates</h3>
                <p className="leading-relaxed text-slate-600">
                  Terms may be updated at any time; continued use of our website implies acceptance of
                  updates.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-slate-500"
        >
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-8 text-center"
        >
          <h3 className="mb-3 text-2xl font-bold text-slate-900">Have Questions?</h3>
          <p className="mb-6 text-slate-600">
            If you have any questions about our privacy policy or terms, feel free to contact us.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@leafsols.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-green-500/30"
          >
            Contact Us
          </a>
        </motion.div>
      </main>
    </div>
  );
}

