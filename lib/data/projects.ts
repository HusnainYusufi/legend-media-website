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
    id: 'tailor-management',
    title: 'Tailor Management System',
    category: 'ERP Solution',
    brandColor: '#6366f1',
    description:
      'A comprehensive ERP system designed specifically for tailoring businesses. Streamlines customer profiling, order management, inventory tracking, invoicing, and worker payroll in one unified platform.',
    features: [
      'Customer profiling with body measurements and style preferences',
      'Order tracking from fabric received to delivery',
      'Inventory management for fabrics, buttons, and threads',
      'Automated digital invoicing and payment tracking',
      'Worker payroll calculation based on pieces or hours',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
    platforms: ['web'],
    images: {
      web: ['/projects/tailor-management-web.jpeg'],
      mobile: ['/projects/tailor-management-mobile.jpeg'],
    },
  },
  {
    id: 'elite-car-rental',
    title: 'Elite Car Rental',
    category: 'Rental Platform',
    brandColor: '#f59e0b',
    description:
      'A premium car rental platform featuring luxury vehicles with smart booking, real-time fleet management, GPS tracking, and dynamic pricing for an exceptional rental experience.',
    features: [
      'Fleet management with real-time availability status',
      'Smart booking engine with date selection and add-ons',
      'GPS integration for vehicle tracking and security',
      'Dynamic pricing based on demand and seasons',
      'Secure document verification portal for licenses',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Stripe'],
    platforms: ['web', 'android', 'ios'],
    images: {
      web: ['/projects/elite-car-rental-web.jpeg'],
      mobile: ['/projects/elite-car-rental-mobile.jpeg'],
    },
  },
  {
    id: 'medicore-hospital',
    title: 'MediCore Hospital',
    category: 'Healthcare Management',
    brandColor: '#10b981',
    description:
      'A comprehensive hospital management system featuring electronic medical records, doctor scheduling, pharmacy integration, lab reporting, and insurance processing for modern healthcare facilities.',
    features: [
      'Electronic Medical Records (EMR) for patient history',
      'Doctor scheduling and appointment booking',
      'Pharmacy integration with prescription linking',
      'Lab reporting portals for pathologists and patients',
      'Automated insurance claims and billing processing',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    platforms: ['web', 'android', 'ios'],
    images: {
      web: ['/projects/medicore-hospital-web.jpeg'],
      mobile: ['/projects/medicore-hospital-mobile.jpeg'],
    },
  },
  {
    id: 'luxe-beauty-salon',
    title: 'Luxe Beauty Salon',
    category: 'Booking App',
    brandColor: '#ec4899',
    description:
      'An elegant salon booking app with visual service catalogs, artist selection, real-time scheduling, loyalty programs, and automated SMS reminders for a premium beauty experience.',
    features: [
      'Visual service catalog with pricing and duration',
      'Preferred stylist and artist selection',
      'Real-time booking synced with salon calendar',
      'Loyalty program with points and rewards',
      'Automated SMS reminders 24 hours before appointments',
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'Twilio', 'Stripe'],
    platforms: ['android', 'ios'],
    images: {
      web: ['/projects/luxe-beauty-salon-web.jpeg'],
      mobile: ['/projects/luxe-beauty-salon-mobile.jpeg'],
    },
  },
  {
    id: 'ganna-healing',
    title: 'Ganna Healing',
    category: 'Wellness Platform',
    brandColor: '#ad5231',
    description:
      'A holistic wellness platform offering event workshops, video consultations, educational resources, and an e-shop for healing products to support individuals on their wellness journey.',
    features: [
      'Event workshop booking for retreats and sessions',
      'Integrated video conferencing for remote consultations',
      'Blog and CMS for wellness articles and guides',
      'E-shop for healing crystals, oils, and merchandise',
      'Testimonial slider for success stories and feedback',
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Stripe'],
    platforms: ['web', 'android', 'ios'],
    images: {
      web: ['/projects/ganna-healing-web.jpeg'],
      mobile: ['/projects/ganna-healing-mobile.jpeg'],
    },
  },
  {
    id: 'ecom-legend',
    title: 'E-Com Legend',
    category: 'E-Commerce',
    brandColor: '#8b5cf6',
    description:
      'A feature-rich fashion e-commerce platform with advanced filtering, secure checkout, wishlist functionality, comprehensive order management, and stunning product galleries.',
    features: [
      'Advanced filtering by size, color, material, and price',
      'Secure checkout with Stripe and PayPal integration',
      'User wishlist for saving favorite items',
      'Admin dashboard for orders, shipping, and returns',
      'HD image galleries with zoom and carousel',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS S3'],
    platforms: ['web'],
    images: {
      web: ['/projects/ecom-legend-web.jpeg'],
      mobile: ['/projects/ecom-legend-mobile.jpeg'],
    },
  },
  {
    id: 'realestate-pro',
    title: 'RealEstate Pro',
    category: 'Property Listing',
    brandColor: '#0ea5e9',
    description:
      'A professional real estate platform with advanced search, interactive maps, virtual tours, dedicated agent portals, and lead generation tools for property buyers and sellers.',
    features: [
      'Advanced search by location, price, and amenities',
      'Google Maps integration with nearby facilities',
      'Virtual tours with 360-degree images and videos',
      'Dedicated agent portal for listings and leads',
      'Lead generation forms on property pages',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Google Maps API', 'AWS'],
    platforms: ['web'],
    images: {
      web: ['/projects/realestate-pro-web.jpeg'],
      mobile: ['/projects/realestate-pro-mobile.jpeg'],
    },
  },
  {
    id: 'edutech-lms',
    title: 'EduTech LMS',
    category: 'Education Platform',
    brandColor: '#14b8a6',
    description:
      'A comprehensive learning management system with course building tools, student dashboards, quiz engines, automated certification, and interactive discussion forums.',
    features: [
      'Course builder for videos, PDFs, and assignments',
      'Student dashboard with progress tracking',
      'Quiz engine with automated grading',
      'Automatic certificate generation upon completion',
      'Discussion forums for student interaction',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'SendGrid'],
    platforms: ['web'],
    images: {
      web: ['/projects/edutech-lms-web.jpeg'],
      mobile: ['/projects/edutech-lms-mobile.jpeg'],
    },
  },
  {
    id: 'fooddelivery-hub',
    title: 'FoodDelivery Hub',
    category: 'Food Delivery',
    brandColor: '#ef4444',
    description:
      'A multi-vendor food delivery platform with live order tracking, customizable meal options, dedicated driver app, and comprehensive review systems for quality assurance.',
    features: [
      'Multi-vendor system with individual restaurant menus',
      'Live order tracking with real-time updates',
      'Build your meal customization options',
      'Driver app panel with navigation and order management',
      'Star ratings and reviews for food and delivery',
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
    platforms: ['web', 'android', 'ios'],
    images: {
      web: ['/projects/fooddelivery-hub-web.jpeg'],
      mobile: ['/projects/fooddelivery-hub-mobile.jpeg'],
    },
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    category: 'Health & Fitness',
    brandColor: '#84cc16',
    description:
      'An interactive fitness landing page featuring BMI calculators, workout plans, diet charts, membership tiers, and inspiring before/after transformation galleries.',
    features: [
      'Interactive BMI calculator with health metrics',
      'Categorized workout plans for all fitness levels',
      'Visual diet charts and calorie breakdowns',
      'Membership pricing tiers (Silver, Gold, Platinum)',
      'Before/after image comparison gallery',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
    platforms: ['web'],
    images: {
      web: ['/projects/fitness-tracker-web.jpeg'],
      mobile: ['/projects/fitness-tracker-mobile.jpeg'],
    },
  },
];
