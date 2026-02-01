'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8 text-slate-400 sm:py-12">
      <div className="container px-4 sm:px-6 md:px-12">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo/leaf.png"
                alt="Legend Media"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8"
              />
              <span className="text-base font-medium text-white sm:text-lg">Legend.Media</span>
            </div>
            <p className="max-w-md text-sm font-light leading-relaxed text-slate-500 sm:text-base">
              Building digital solutions that transform ideas into reality. We specialize in
              scalable web and app development tailored to your business goals.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-col sm:gap-8 md:flex-row md:justify-end">
            <div>
              <h3 className="mb-3 text-sm font-medium text-white sm:mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <a href="#about" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="transition-colors hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="transition-colors hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-white sm:mb-4">Legal</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <Link href="/legal#privacy-policy" className="transition-colors hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal#terms-conditions" className="transition-colors hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-3 text-sm font-medium text-white sm:mb-4">Contact</h3>
              <ul className="space-y-2 text-sm font-light">
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@legendmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all transition-colors hover:text-white"
                  >
                    info@legendmedia.com
                  </a>
                </li>
                <li>
                  <a href="tel:+12147959956" className="transition-colors hover:text-white">
                    +1 (214) 795-9956
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs font-light sm:mt-12 sm:pt-8 sm:text-sm">
          <p>© 2025 Legend Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
