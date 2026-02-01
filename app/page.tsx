import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutEnhanced } from '@/components/sections/AboutEnhanced';
import { StatsHorizontal } from '@/components/sections/StatsHorizontal';
import { ProjectsCarousel } from '@/components/sections/ProjectsCarousel';
import { TestimonialsOption2 } from '@/components/sections/TestimonialsOption2';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Legend Media',
    description:
      'Award-winning web and mobile app development agency specializing in scalable digital solutions',
    url: 'https://legendmediasa.com',
    logo: 'https://legendmediasa.com/logo/leaf-logo.png',
    image: 'https://legendmediasa.com/og-image.jpg',
    email: 'info@legendmediasa.com',
    telephone: '+966-54-516-9303',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
    },
    sameAs: [
      // Add your social media links here
      // 'https://twitter.com/legendmediasa',
      // 'https://linkedin.com/company/legendmediasa',
      // 'https://github.com/legendmediasa',
    ],
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'Mobile App Development',
      'Custom Software Development',
      'UI/UX Design',
      'Digital Consulting',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '450',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <AboutEnhanced />
        <StatsHorizontal />
        <ProjectsCarousel />
        <TestimonialsOption2 />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
