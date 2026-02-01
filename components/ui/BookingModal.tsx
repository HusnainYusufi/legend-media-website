'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  Layers,
  ShoppingCart,
  Globe,
  Smartphone,
  Users,
  TrendingUp,
  Package,
  Briefcase,
  Monitor,
  Heart,
  MoreHorizontal,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceTypes = [
  {
    id: 'wordpress',
    label: 'WordPress',
    description: 'Custom WordPress websites and themes',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'shopify',
    label: 'Shopify',
    description: 'E-commerce stores and custom apps',
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'web-application',
    label: 'Web Application',
    description: 'Custom web applications and portals',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'mobile-app',
    label: 'Mobile App',
    description: 'iOS and Android mobile applications',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'crm',
    label: 'CRM',
    description: 'Customer relationship management systems',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'seo',
    label: 'SEO (Search Engine Optimization)',
    description: 'Boost your Google Website Ranking',
    icon: TrendingUp,
    color: 'from-amber-500 to-yellow-500',
  },
];

const businessCategories = [
  {
    id: 'products',
    label: 'Products (Retail & E-commerce)',
    description: 'For businesses selling physical or digital goods.',
    icon: Package,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'services',
    label: 'Services (Consulting & Professional)',
    description: 'For agencies, consultancies, and professional services.',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'technology',
    label: 'Technology & Online Platforms',
    description: 'For apps, software, SaaS, and digital platforms.',
    icon: Monitor,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'education-health',
    label: 'Education, Health & Lifestyle',
    description: 'For training, wellness, healthcare, and lifestyle businesses.',
    icon: Heart,
    color: 'from-rose-500 to-red-500',
  },
  {
    id: 'others',
    label: 'Others',
    description: 'Other business types not listed above.',
    icon: MoreHorizontal,
    color: 'from-slate-500 to-gray-500',
  },
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [otherCategory, setOtherCategory] = useState<string>('');

  // Custom scrollbar CSS
  const scrollbarStyles = `
    .booking-modal-scroll::-webkit-scrollbar {
      width: 8px;
    }
    .booking-modal-scroll::-webkit-scrollbar-track {
      background: #F1F5F9;
      border-radius: 10px;
    }
    .booking-modal-scroll::-webkit-scrollbar-thumb {
      background: #10B981;
      border-radius: 10px;
    }
    .booking-modal-scroll::-webkit-scrollbar-thumb:hover {
      background: #059669;
    }
  `;

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== 'others') {
      setOtherCategory(''); // Clear other category text when selecting non-other option
    }
  };

  const handleBooking = () => {
    const baseUrl = process.env.NEXT_PUBLIC_CALENDERLY_URL || 'https://calendly.com/legendmediasa';

    const params = new URLSearchParams({
      utm_source: 'legend-media',
      utm_campaign: 'website-booking',
    });

    // Prefill Calendly invitee questions
    if (selectedServices.length > 0) {
      const formattedTypes = selectedServices
        .map((id) => {
          const service = serviceTypes.find((s) => s.id === id);
          return service?.label || id;
        })
        .join(', ');
      params.set('a1', formattedTypes);
    }

    if (selectedCategory) {
      if (selectedCategory === 'others' && otherCategory.trim()) {
        params.set('a2', `Others: ${otherCategory.trim()}`);
      } else {
        const category = businessCategories.find((c) => c.id === selectedCategory);
        params.set('a2', category?.label || selectedCategory);
      }
    }

    const calendlyUrl = `${baseUrl}?${params.toString()}`;
    window.open(calendlyUrl, '_blank');
    handleClose();
  };

  const handleClose = () => {
    setStep(1);
    setSelectedServices([]);
    setSelectedCategory('');
    setOtherCategory('');
    onClose();
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const canContinueStep1 = selectedServices.length > 0;
  const canContinueStep2 = 
    selectedCategory !== '' && 
    (selectedCategory !== 'others' || otherCategory.trim() !== '');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Custom Scrollbar Styles */}
          <style>{scrollbarStyles}</style>

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full max-w-full overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.15 }}
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-600 shadow-sm transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 sm:right-5 sm:top-5 md:right-6 md:top-6 md:p-2.5"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </motion.button>

              {/* Progress Bar */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-slate-100">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div 
                className="booking-modal-scroll h-full overflow-y-auto overflow-x-hidden px-5 pt-16 pb-6 sm:px-8 sm:pt-20 sm:pb-8 md:flex md:items-center md:justify-center md:px-10 md:py-12 lg:px-12 lg:py-16" 
                data-lenis-prevent
                style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#10B981 #F1F5F9'
                }}
              >
                <div className="w-full max-w-full md:max-w-5xl lg:max-w-6xl md:py-0">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-10">
                        <div className="mb-2 inline-block rounded-full bg-green-50 px-3 py-1 md:mb-3 md:px-4 md:py-1.5">
                          <span className="text-xs font-semibold uppercase tracking-wider text-green-600 md:text-sm">
                            Step 1 of 3
                          </span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:mb-3 md:text-4xl lg:text-5xl">
                          Service Type
                        </h2>
                        <p className="mb-1 text-base font-medium text-slate-700 sm:text-lg md:mb-2 md:text-xl">
                          What Service Do You Need?
                        </p>
                        <p className="text-sm text-slate-500 sm:text-base">
                          Choose one or more services
                        </p>
                      </div>

                      {/* Service Options */}
                      <div className="mb-5 grid gap-3 sm:mb-6 sm:gap-3.5 md:mb-8 md:grid-cols-2 md:gap-4 lg:gap-5">
                        {serviceTypes.map((service) => {
                          const Icon = service.icon;
                          return (
                            <motion.button
                              key={service.id}
                              onClick={() => handleServiceToggle(service.id)}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                              className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all focus:outline-none focus:ring-2 focus:ring-green-500/20 sm:p-5 md:rounded-2xl md:p-6 lg:p-7 ${
                                selectedServices.includes(service.id)
                                  ? 'border-green-500 bg-green-50 shadow-sm'
                                  : 'border-slate-200 bg-white hover:border-green-300 hover:bg-green-50/50'
                              }`}
                            >
                              {/* Icon */}
                              <div className="mb-3 flex items-start justify-between md:mb-4">
                                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm transition-transform group-hover:scale-110 md:h-12 md:w-12 lg:h-14 lg:w-14 ${service.color}`}>
                                  <Icon className="h-5 w-5 text-white md:h-6 md:w-6 lg:h-7 lg:w-7" aria-hidden="true" />
                                </div>
                                
                                {/* Checkmark */}
                                <div
                                  className={`flex h-5 w-5 items-center justify-center rounded-full shadow-sm transition-all md:h-6 md:w-6 ${
                                    selectedServices.includes(service.id)
                                      ? 'scale-100 bg-green-500'
                                      : 'scale-0 bg-slate-200'
                                  }`}
                                >
                                  <Check className="h-3 w-3 text-white md:h-3.5 md:w-3.5" />
                                </div>
                              </div>

                              {/* Content */}
                              <h3 className="mb-1 text-base font-semibold leading-snug text-slate-900 md:mb-1.5 md:text-lg lg:text-xl">
                                {service.label}
                              </h3>
                              <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{service.description}</p>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Continue Button */}
                      <motion.button
                        whileHover={{ scale: canContinueStep1 ? 1.02 : 1 }}
                        whileTap={{ scale: canContinueStep1 ? 0.98 : 1 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => canContinueStep1 && setStep(2)}
                        disabled={!canContinueStep1}
                        className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-green-500/20 md:px-8 md:py-4 md:text-base lg:text-lg ${
                          canContinueStep1
                            ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/30'
                            : 'cursor-not-allowed bg-slate-200 text-slate-400'
                        }`}
                      >
                        <span className="hidden sm:inline">Continue to Business Category</span>
                        <span className="sm:hidden">Continue</span>
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                      </motion.button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-10">
                        <div className="mb-2 inline-block rounded-full bg-green-50 px-3 py-1 md:mb-3 md:px-4 md:py-1.5">
                          <span className="text-xs font-semibold uppercase tracking-wider text-green-600 md:text-sm">
                            Step 2 of 3
                          </span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:mb-3 md:text-4xl lg:text-5xl">
                          Business Category
                        </h2>
                        <p className="mb-1 text-base font-medium text-slate-700 sm:text-lg md:mb-2 md:text-xl">
                          What's Your Business Category?
                        </p>
                        <p className="text-sm text-slate-500 sm:text-base">
                          Help us provide tailored solutions
                        </p>
                      </div>

                      {/* Category Options */}
                      <div className="mb-5 space-y-3 sm:mb-6 md:mb-8 md:space-y-3.5 lg:space-y-4">
                        {businessCategories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <motion.button
                              key={category.id}
                              onClick={() => handleCategorySelect(category.id)}
                              whileHover={{ scale: 1.01, x: 4 }}
                              whileTap={{ scale: 0.99 }}
                              transition={{ duration: 0.15 }}
                              className={`group relative w-full overflow-hidden rounded-xl border-2 p-4 text-left transition-all focus:outline-none focus:ring-2 focus:ring-green-500/20 sm:p-5 md:rounded-2xl md:p-6 ${
                                selectedCategory === category.id
                                  ? 'border-green-500 bg-green-50 shadow-sm'
                                  : 'border-slate-200 bg-white hover:border-green-300 hover:bg-green-50/50'
                              }`}
                            >
                              {/* Content with Icon */}
                              <div className="flex items-start gap-3 md:gap-4">
                                {/* Icon */}
                                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm transition-transform group-hover:scale-110 md:h-12 md:w-12 lg:h-14 lg:w-14 ${category.color}`}>
                                  <Icon className="h-5 w-5 text-white md:h-6 md:w-6 lg:h-7 lg:w-7" aria-hidden="true" />
                                </div>

                                {/* Text content */}
                                <div className="flex-1 pr-8 md:pr-10">
                                  <h3 className="mb-1 text-base font-semibold leading-snug text-slate-900 md:text-lg lg:text-xl">
                                    {category.label}
                                  </h3>
                                  <p className="text-xs leading-relaxed text-slate-600 md:text-sm">{category.description}</p>
                                </div>

                                {/* Radio indicator */}
                                <div
                                  className={`absolute right-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-sm transition-all md:right-5 md:h-6 md:w-6 ${
                                    selectedCategory === category.id
                                      ? 'border-green-500 bg-green-500'
                                      : 'border-slate-300 bg-white'
                                  }`}
                                >
                                  <div
                                    className={`h-2 w-2 rounded-full bg-white transition-transform md:h-2.5 md:w-2.5 ${
                                      selectedCategory === category.id ? 'scale-100' : 'scale-0'
                                    }`}
                                  />
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Other Category Text Input */}
                      {selectedCategory === 'others' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-5 sm:mb-6 md:mb-8"
                        >
                          <label htmlFor="other-category" className="mb-2 block text-sm font-semibold text-slate-700 md:text-base">
                            Please specify your business type:
                          </label>
                          <input
                            id="other-category"
                            type="text"
                            value={otherCategory}
                            onChange={(e) => setOtherCategory(e.target.value)}
                            placeholder="e.g., Non-profit, Government..."
                            className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 md:px-5 md:py-3.5 md:text-base"
                            autoFocus
                          />
                        </motion.div>
                      )}

                      {/* Buttons */}
                      <div className="flex gap-3 md:gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          onClick={() => setStep(1)}
                          className="flex items-center gap-2 rounded-full border-2 border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/20 md:px-6 md:py-4 md:text-base lg:px-8"
                        >
                          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                          <span className="hidden sm:inline">Back</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: canContinueStep2 ? 1.02 : 1 }}
                          whileTap={{ scale: canContinueStep2 ? 0.98 : 1 }}
                          transition={{ duration: 0.15 }}
                          onClick={() => canContinueStep2 && setStep(3)}
                          disabled={!canContinueStep2}
                          className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-green-500/20 md:px-8 md:py-4 md:text-base lg:text-lg ${
                            canContinueStep2
                              ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/30'
                              : 'cursor-not-allowed bg-slate-200 text-slate-400'
                          }`}
                        >
                          <span className="hidden sm:inline">Continue to Schedule</span>
                          <span className="sm:hidden">Continue</span>
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      {/* Celebration Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                        className="mb-6 flex justify-center md:mb-8 lg:mb-10"
                      >
                        <div className="rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-5 shadow-lg md:p-6 lg:p-7">
                          <Sparkles className="h-10 w-10 text-white md:h-12 md:w-12 lg:h-14 lg:w-14" />
                        </div>
                      </motion.div>

                      {/* Header */}
                      <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-600 md:mb-3 md:text-sm">
                          You're one step away from bringing your vision to life
                        </p>
                        <h2 className="mb-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:mb-3 md:text-4xl lg:text-5xl">
                          You're Almost There! 🎉
                        </h2>
                        <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg lg:text-xl">
                          Book your free 15-minute consultation and let's discuss how we can bring
                          your vision to life.
                        </p>
                      </div>

                      {/* Selection Summary */}
                      <div className="mb-5 rounded-xl border-2 border-slate-200 bg-slate-50 p-4 shadow-sm sm:mb-6 md:mb-8 md:rounded-2xl md:p-6 lg:p-8">
                        <h3 className="mb-4 text-lg font-bold text-slate-900 md:mb-5 md:text-xl lg:text-2xl">
                          Your Selection Summary
                        </h3>
                        <div className="space-y-4 text-left md:space-y-5">
                          {/* Services */}
                          <div>
                            <p className="mb-2 text-xs font-semibold text-slate-500 md:mb-2.5 md:text-sm lg:text-base">
                              Service Type:
                            </p>
                            <div className="flex flex-wrap gap-2 md:gap-2.5">
                              {selectedServices.map((serviceId) => {
                                const service = serviceTypes.find((s) => s.id === serviceId);
                                const Icon = service?.icon;
                                return (
                                  <span
                                    key={serviceId}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700 shadow-sm md:gap-2 md:px-4 md:py-2 md:text-sm"
                                  >
                                    {Icon && <Icon className="h-3 w-3 md:h-3.5 md:w-3.5" />}
                                    {service?.label}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          {/* Category */}
                          <div>
                            <p className="mb-2 text-xs font-semibold text-slate-500 md:mb-2.5 md:text-sm lg:text-base">
                              Business Category:
                            </p>
                            {(() => {
                              const category = businessCategories.find((c) => c.id === selectedCategory);
                              const Icon = category?.icon;
                              const displayText = selectedCategory === 'others' && otherCategory 
                                ? `Others: ${otherCategory}`
                                : category?.label;
                              return (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm md:gap-2 md:px-4 md:py-2 md:text-sm">
                                  {Icon && <Icon className="h-3 w-3 md:h-3.5 md:w-3.5" />}
                                  {displayText}
                                </span>
                              );
                            })()}
                          </div>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 md:gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          onClick={() => setStep(2)}
                          className="flex items-center justify-center gap-1.5 rounded-full border-2 border-slate-200 px-3 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-4 md:text-base lg:px-8"
                        >
                          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                          Back
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          onClick={handleBooking}
                          className="group relative flex flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-3 py-2.5 text-xs font-semibold text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-4 md:text-base lg:px-8"
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                          />
                          <Calendar className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                          <span className="relative hidden sm:inline">Schedule My Free Consultation</span>
                          <span className="relative sm:hidden">Schedule Meeting</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

