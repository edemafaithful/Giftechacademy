import React from "react";
import { motion } from "motion/react";
import { COURSES, ACADEMY_CONFIG } from "../config";
import { CheckCircle, MessageCircle } from "lucide-react";

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            Our Courses
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-1 bg-pink-500 mx-auto rounded-full"
          ></motion.div>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Choose from our range of high-demand tech courses. All courses are
            designed to take you from beginner to job-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Pinterest-style Save button placeholder if needed */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-2 h-2 bg-white rounded-full"></span> Save
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {course.title}
                  </h3>
                  <span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-2 py-1 rounded">
                    {course.duration}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-white font-bold text-sm">
                    {course.price}
                  </span>
                  <span className="text-zinc-600 text-xs line-through">
                    {course.originalPrice}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I want to enroll in the GifTechAcademy ${course.title} course.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all border border-zinc-800"
                >
                  Enroll Now <MessageCircle size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
