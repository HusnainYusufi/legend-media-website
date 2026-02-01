import type { Project } from '@/lib/types/project.types';

export const projects: Project[] = [
  {
    id: 'tailor-erp',
    title: 'Tailor Management System',
    category: 'ERP & Business',
    brandColor: '#8b5cf6',
    description:
      'Complete ERP solution for tailoring businesses. Manages customer profiles, order tracking, inventory, invoicing, and worker payroll in one unified platform.',
    features: [
      'Customer Profiling: Detailed body measurements and style preferences',
      'Order Tracking: From fabric received to ready to deliver',
      'Inventory Management: Monitors fabric stock, buttons, and threads',
      'Invoicing & Billing: Automated digital invoices and payment history',
      'Worker Payroll: Calculates wages based on pieces or hours',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    platforms: ['web'],
    images: {
      web: ['/projects/tailor-erp.png'],
    },
  },
  {
    id: 'elite-rental',
    title: 'Elite Car Rental',
    category: 'Automotive & Rental',
    brandColor: '#dc2626',
    description:
      'Premium car rental platform featuring luxury fleet management, smart booking engine, GPS tracking, dynamic pricing, and secure document verification.',
    features: [
      'Fleet Management: Real-time status of luxury vehicles',
      'Smart Booking Engine: Dates, locations, and add-ons selection',
      'GPS Integration: Track vehicle location for security',
      'Dynamic Pricing: Automated rate adjustment for demand',
      'Document Verification: Secure upload for licenses and IDs',
    ],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Google Maps API', 'AWS S3'],
    platforms: ['web', 'android', 'ios'],
    images: {
      web: ['/projects/elite-rental.png'],
      mobile: ['/projects/elite-rental-mobile.png'],
    },
  },
  {
    id: 'medicore',
    title: 'MediCore Hospital',
    category: 'Healthcare & Wellness',
    brandColor: '#0ea5e9',
    description:
      'Comprehensive hospital management system with patient EMR, doctor scheduling, pharmacy integration, lab reporting, and insurance processing.',
    features: [
      'Patient EMR: Electronic medical records with full history',
      'Doctor Scheduling: Manage shifts and appointment bookings',
      'Pharmacy Integration: Link prescriptions to inventory',
      'Lab Reporting: Upload and download reports remotely',
      'Insurance Processing: Automated claims and billing',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'FHIR Standard'],
    platforms: ['web'],
    images: {
      web: ['/projects/medicore.png'],
    },
  },
  {
    id: 'luxe-salon',
    title: 'Luxe Beauty Salon',
    category: 'Beauty & Lifestyle',
    brandColor: '#ec4899',
    description:
      'Modern salon booking app with service catalog, artist selection, real-time scheduling, loyalty program, and automated SMS reminders.',
    features: [
      'Service Catalog: Visual menu with pricing and duration',
      'Artist Selection: Choose preferred stylist or makeup artist',
      'Real-Time Booking: Synced calendar prevents double bookings',
      'Loyalty Program: Track visits and earn redeemable points',
      'SMS Reminders: 24-hour appointment notifications',
    ],
    technologies: ['React Native', 'Firebase', 'Twilio', 'Stripe', 'Node.js'],
    platforms: ['android', 'ios'],
    images: {
      mobile: ['/projects/luxe-salon.png'],
    },
  },
  {
    id: 'ganna-healing',
    title: 'Ganna Healing',
    category: 'Healthcare & Wellness',
    brandColor: '#ad5231',
    description:
      'Holistic wellness platform offering event workshops, video consultations, wellness blog, e-shop for healing products, and client testimonials.',
    features: [
      'Event Workshops: Booking for yoga, meditation, healing sessions',
      'Video Consultations: Remote 1-on-1 healing sessions',
      'Blog & Resources: CMS for wellness articles and guides',
      'E-Shop: Sell healing crystals, oils, and merchandise',
      'Testimonial Slider: Success stories and client feedback',
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Zoom API'],
    platforms: ['android', 'ios', 'web'],
    images: {
      mobile: ['/projects/ganna 1.jpg', '/projects/ganna 2.jpg'],
      web: ['/projects/ganna-web.png'],
    },
  },
  {
    id: 'ecom-legend',
    title: 'E-Com Legend',
    category: 'E-Commerce',
    brandColor: '#f59e0b',
    description:
      'Feature-rich fashion e-commerce store with advanced filtering, secure checkout, wishlist, order management, and responsive product gallery.',
    features: [
      'Advanced Filtering: Size, color, material, brand, price range',
      'Secure Checkout: Stripe/PayPal payment integration',
      'User Wishlist: Save items for later purchase',
      'Order Management: Process orders, print labels, handle returns',
      'Responsive Gallery: HD image zooming and carousel',
    ],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    platforms: ['web'],
    images: {
      web: ['/projects/ecom-legend.png'],
    },
  },
  {
    id: 'realestate-pro',
    title: 'RealEstate Pro',
    category: 'Real Estate',
    brandColor: '#10b981',
    description:
      'Advanced property listing platform with smart search, map integration, virtual tours, agent portal, and lead generation forms.',
    features: [
      'Advanced Search: Location, price, bedrooms, amenities filters',
      'Map View: Google Maps showing nearby facilities',
      'Virtual Tours: 360-degree images and video walkthroughs',
      'Agent Portal: Manage property listings and leads',
      'Lead Generation: Contact forms on property pages',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'AWS S3'],
    platforms: ['web'],
    images: {
      web: ['/projects/realestate-pro.png'],
    },
  },
  {
    id: 'edutech-lms',
    title: 'EduTech LMS',
    category: 'Education & Learning',
    brandColor: '#6366f1',
    description:
      'Complete learning management system with course builder, student dashboard, quiz engine, certification, and discussion forums.',
    features: [
      'Course Builder: Upload videos, PDFs, and assignments',
      'Student Dashboard: Track progress and pending quizzes',
      'Quiz Engine: Automated grading for assessments',
      'Certification: Auto-generated certificates on completion',
      'Discussion Forums: Student Q&A and peer interaction',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3', 'Socket.io'],
    platforms: ['web'],
    images: {
      web: ['/projects/edutech-lms.png'],
    },
  },
  {
    id: 'fooddelivery-hub',
    title: 'FoodDelivery Hub',
    category: 'Food & Delivery',
    brandColor: '#ef4444',
    description:
      'Multi-vendor food delivery platform with live tracking, customizable orders, driver app, and comprehensive review system.',
    features: [
      'Multi-Vendor System: Multiple restaurants with unique menus',
      'Live Order Tracking: Real-time status updates',
      'Add-on Options: Build your meal with customizations',
      'Driver App Panel: Navigation and order management',
      'Review System: Star ratings and detailed feedback',
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
    platforms: ['android', 'ios', 'web'],
    images: {
      mobile: ['/projects/food-delivery-mobile.png'],
      web: ['/projects/food-delivery-web.png'],
    },
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    category: 'Health & Fitness',
    brandColor: '#14b8a6',
    description:
      'Comprehensive fitness platform with BMI calculator, workout plans, diet charts, membership tiers, and transformation gallery.',
    features: [
      'BMI Calculator: Interactive health metrics tool',
      'Workout Plans: Beginner to advanced exercise routines',
      'Diet Charts: Meal prep guides and calorie counting',
      'Membership Tiers: Silver, Gold, Platinum pricing',
      'Before/After Gallery: Client transformation showcases',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    platforms: ['web'],
    images: {
      web: ['/projects/fitness-tracker.png'],
    },
  },
];

