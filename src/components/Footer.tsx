import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              GifTech<span className="text-blue-600">Academy</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-8 leading-relaxed">
              Empowering individuals with practical tech skills for a successful career in the digital age.
            </p>
            <div className="flex gap-4">
              <a href={ACADEMY_CONFIG.socials.facebook} className="text-zinc-400 hover:text-pink-500 transition-colors"><Facebook size={20} /></a>
              <a href={ACADEMY_CONFIG.socials.twitter} className="text-zinc-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href={ACADEMY_CONFIG.socials.instagram} className="text-zinc-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
              <a href={ACADEMY_CONFIG.socials.linkedin} className="text-zinc-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-500 dark:text-zinc-400 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-zinc-500 dark:text-zinc-400 hover:text-pink-500 transition-colors">About</a></li>
              <li><a href="#courses" className="text-zinc-500 dark:text-zinc-400 hover:text-pink-500 transition-colors">Courses</a></li>
              <li><a href="#contact" className="text-zinc-500 dark:text-zinc-400 hover:text-pink-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-zinc-500 dark:text-zinc-400">{ACADEMY_CONFIG.email}</li>
              <li className="text-zinc-500 dark:text-zinc-400">WhatsApp Support Available</li>
              <li className="text-zinc-500 dark:text-zinc-400">Abuja, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            © {currentYear} {ACADEMY_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center gap-1">
            GiftechAcademy <Heart size={14} className="text-red-500 fill-red-500" /> Edema
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
