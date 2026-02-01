import type { Project } from '@/lib/types/project.types';

export const projects: Project[] = [
  {
    id: 'sticha',
    title: 'Sticha App',
    category: 'Marketplace Platform',
    brandColor: '#155dfc',
    description:
      'A full-featured marketplace that seamlessly connects tailors with customers. Tailors showcase services and grow revenue, while customers discover trusted professionals and place bespoke orders with confidence.',
    features: [
      'End-to-end service marketplace',
      'Customer job posting and bidding workflow',
      'Real-time order tracking and notifications',
      'Secure, PCI-compliant payments and payouts',
      'Ratings, reviews, and reputation system',
      'AI-powered vision measurement for accurate sizing',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    platforms: ['web', 'android', 'ios'],
    images: {
      web: ['/projects/Sticha 1 - web.png'],
      mobile: ['/projects/sticha 2.jpg', '/projects/sticha 3.jpg'],
    },
  },
  {
    id: 'ganna',
    title: 'Ganna Healing',
    category: 'Healthcare & Wellness',
    brandColor: '#ad5231',
    description:
      'A therapeutic mobile app supporting individuals on their healing journey from trauma and its side effects. Offers guided sessions, progress insights, and access to trusted professional resources.',
    features: [
      'Evidence-informed guided healing sessions',
      'Personal progress dashboard and insights',
      'Curated therapist and support directory',
      'Meditation and mindfulness exercises',
      'Crisis resources and safety planning',
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    platforms: ['android', 'ios'],
    images: {
      mobile: [
        '/projects/ganna 1.jpg',
        '/projects/ganna 2.jpg',
        '/projects/ganna 3.jpg',
        '/projects/ganna 4.jpg',
      ],
    },
  },
];

