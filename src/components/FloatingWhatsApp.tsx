import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ACADEMY_CONFIG } from '../config';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 transition-colors"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
