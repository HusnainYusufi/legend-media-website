import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';

import { SmoothScrollProvider } from '@/components/providers/SmoothScroll';
import { LoadingProvider } from '@/components/providers/LoadingProvider';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { WhatsAppWidget } from '@/components/ui/WhatsAppWidget';
import { CustomCursor } from '@/components/ui/CustomCursor';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://legendmedia.com'),
  title: {
    default: 'Legend Media | App Development Agency',
    template: '%s | Legend Media',
  },
  description:
    'Transform your ideas into reality with Legend Media. Expert web and mobile app development, custom software solutions, and digital innovation. 500+ projects delivered, 98% client satisfaction.',
  keywords: [
    'web development agency',
    'mobile app development',
    'custom software development',
    'digital solutions',
    'scalable applications',
    'React development',
    'Next.js development',
    'iOS app development',
    'Android app development',
    'UI/UX design',
    'full-stack development',
    'software consultancy',
  ],
  authors: [{ name: 'Legend Media', url: 'https://legendmedia.com' }],
  creator: 'Legend Media',
  publisher: 'Legend Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://legendmedia.com',
    siteName: 'Legend Media',
    title: 'Legend Media | Award-Winning Web & App Development Agency',
    description:
      'Transform your ideas into reality with Legend Media. Expert web and mobile app development, custom software solutions, and digital innovation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Legend Media - Award-Winning Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legend Media | Award-Winning Web & App Development Agency',
    description:
      'Transform your ideas into reality with Legend Media. Expert web and mobile app development, custom software solutions, and digital innovation.',
    images: ['/og-image.jpg'],
    creator: '@legendmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://legendmedia.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className="antialiased md:cursor-none">
        <LoadingProvider>
          <LanguageProvider>
            {/* Skip to main content for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-green-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Skip to main content
            </a>
            <CustomCursor />
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
            <WhatsAppWidget />
          </LanguageProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
