import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Award, Rocket } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            Our Mission
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-1 bg-pink-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Empowering the next generation of tech leaders through practical, accessible education.
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              GifTechAcademy was founded with a simple goal: to make high-quality tech education accessible to everyone, regardless of their background. 
              We believe that tech skills are the most powerful tools for career transformation in the 21st century.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Our curriculum is designed by industry professionals who focus on what actually matters in the job market. 
              We don't just teach theory; we help you build real projects and gain the confidence to succeed in the tech industry.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-500">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Practical Learning</h4>
                  <p className="text-sm text-zinc-500">Hands-on projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-500">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Community</h4>
                  <p className="text-sm text-zinc-500">Learn with peers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-500">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Certification</h4>
                  <p className="text-sm text-zinc-500">Recognized skills</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-500">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Career Growth</h4>
                  <p className="text-sm text-zinc-500">Job-ready training</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ACADEMY_CONFIG.aboutImage}
                alt="Students Learning"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-sm font-medium opacity-80">Practical Focus</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
