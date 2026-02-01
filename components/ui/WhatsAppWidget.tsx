'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import Image from 'next/image';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = '+12147959956';
  const defaultMessage = "Hi! I'd like to discuss my project with Leaf Solutions.";

  const handleSendMessage = () => {
    const textToSend = message.trim() || defaultMessage;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const quickMessages = [
    "I need to know more about your services",
    "I want to know about your company",
    "I need help with my existing project",
    "I need a website",
    "I want a mobile app",
  ];

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              className="fixed bottom-24 right-4 z-50 flex max-h-[calc(100vh-8rem)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:bottom-28 md:right-6 md:w-96"
            >
              {/* Header */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-500 p-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
                  <Image
                    src="/logo/leaf.png"
                    alt="Leaf Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">Leaf Solutions</h3>
                  <p className="text-xs text-green-50">Typically replies instantly</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-white hover:bg-white/20"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Chat Content */}
              <div className="flex-1 overflow-y-auto bg-slate-50 p-4">
                {/* Welcome Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4 rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm"
                >
                  <p className="mb-2 text-sm text-slate-700">
                    👋 Hi there! Welcome to <span className="font-semibold">Leaf Solutions</span>
                  </p>
                  <p className="text-sm text-slate-600">
                    How can we help you today? Choose a quick option or type your own message:
                  </p>
                </motion.div>

                {/* Quick Reply Buttons */}
                <div className="mb-4 space-y-2">
                  {quickMessages.map((msg, index) => (
                    <motion.button
                      key={msg}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.15 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setMessage(msg);
                        setTimeout(handleSendMessage, 300);
                      }}
                      className="w-full rounded-xl border-2 border-green-200 bg-white p-3 text-left text-sm text-slate-700 transition-all hover:border-green-400 hover:bg-green-50"
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>

                {/* Custom Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    onClick={handleSendMessage}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg transition-shadow hover:shadow-xl"
                    aria-label="Send message"
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </motion.div>

                {/* Powered by WhatsApp */}
                <p className="mt-3 text-center text-xs text-slate-400">
                  Powered by <span className="font-semibold text-green-600">WhatsApp</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.15 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group fixed bottom-6 right-4 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-500 shadow-2xl transition-shadow hover:shadow-green-500/50 md:bottom-6 md:right-6"
        aria-label="Open WhatsApp chat"
      >
        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-7 w-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg"
        >
          1
        </motion.div>
      </motion.button>
    </>
  );
}

