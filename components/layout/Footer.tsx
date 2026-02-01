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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@legendmediasa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all transition-colors hover:text-white"
                  >
                    info@legendmediasa.com
                  </a>
                </li>
                <li>
                  <a href="tel:+966545169303" className="transition-colors hover:text-white">
                    +966 54 516 9303
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/by2mEnpuHjxmfpsS9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Abu Al Noor Tower, An Nawwariyyah, Makkah
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-800 sm:mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90223.15217702699!2d39.81974293822039!3d21.486849437129976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21d0039429209%3A0x321aa822cb5c53d0!2z2KjYsdisINin2KjZiCDYp9mE2YbZiNixINiq2KfZiNix!5e0!3m2!1sen!2ssa!4v1769978809847!5m2!1sen!2ssa"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Legend Media Office Location"
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs font-light sm:pt-8 sm:text-sm">
          <p>© 2026 Legend Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
