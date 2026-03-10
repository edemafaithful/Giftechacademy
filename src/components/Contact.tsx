import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Users } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-1 bg-pink-500 mx-auto rounded-full"
          ></motion.div>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 text-center"
          >
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-500 mx-auto mb-6">
              <MessageCircle size={32} />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">WhatsApp</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">Chat with us directly for quick responses.</p>
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all"
            >
              Message Us
            </a>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 text-center"
          >
            <div className="w-16 h-16 bg-pink-50 dark:bg-pink-900/20 rounded-2xl flex items-center justify-center text-pink-500 mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Email</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">Send us an email for formal inquiries.</p>
            <a
              href={`mailto:${ACADEMY_CONFIG.email}`}
              className="text-pink-500 font-bold hover:underline"
            >
              {ACADEMY_CONFIG.email}
            </a>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 text-center"
          >
            <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-500 mx-auto mb-6">
              <Users size={32} />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Follow Us</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">Stay updated with our latest news.</p>
            <div className="flex justify-center gap-4">
              <a href={ACADEMY_CONFIG.socials.facebook} className="p-3 bg-white dark:bg-zinc-900 rounded-xl text-zinc-400 hover:text-pink-500 transition-all"><Facebook size={20} /></a>
              <a href={ACADEMY_CONFIG.socials.twitter} className="p-3 bg-white dark:bg-zinc-900 rounded-xl text-zinc-400 hover:text-blue-400 transition-all"><Twitter size={20} /></a>
              <a href={ACADEMY_CONFIG.socials.instagram} className="p-3 bg-white dark:bg-zinc-900 rounded-xl text-zinc-400 hover:text-pink-500 transition-all"><Instagram size={20} /></a>
              <a href={ACADEMY_CONFIG.socials.linkedin} className="p-3 bg-white dark:bg-zinc-900 rounded-xl text-zinc-400 hover:text-blue-700 transition-all"><Linkedin size={20} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
