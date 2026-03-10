import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, FileText } from "lucide-react";
import { ACADEMY_CONFIG } from "../config";

const CodeWindow = () => {
  return (
    <div className="rounded-lg select-none border border-slate-700 relative bg-[#010101] shadow-2xl">
      <div className="flex flex-row">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
        <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
      </div>
      <div className="px-8 py-5">
        <div className="flex flex-row space-x-2">
          <div className="rounded-full bg-red-400 w-3 h-3"></div>
          <div className="rounded-full bg-orange-400 w-3 h-3"></div>
          <div className="rounded-full bg-green-200 w-3 h-3"></div>
        </div>
      </div>
      <div className="px-8 py-8 border-t-[2px] border-slate-800 overflow-hidden">
        <code className="font-mono text-sm leading-relaxed">
          <div>
            <span className="text-pink-500 mr-2">const</span>
            <span className="text-white mr-2">coder</span>
            <span className="text-pink-500 mr-2">=</span>
            <span className="text-gray-400">{"{"}</span>
            <span className="blink inline-block w-[3px] h-5 bg-white ml-1 align-middle"></span>
          </div>
          <div>
            <span className="text-white ml-8 mr-2">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">Master Coder</span>
            <span className="text-gray-400">',</span>
          </div>
          <div>
            <span className="text-white ml-8 mr-2">skills:</span>
            <span className="text-gray-400">['</span>
            <span className="text-amber-300">React</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Node</span>
            <span className="text-gray-400">'],</span>
          </div>
          <div>
            <span className="text-white ml-8 mr-2">hardWorker:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-white ml-8 mr-2">problemSolver:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-green-400 ml-8 mr-2">hireable:</span>
            <span className="text-orange-400">function</span>
            <span className="text-gray-400">() {"{"}</span>
          </div>
          <div>
            <span className="text-orange-400 ml-16 mr-2">return</span>
            <span className="text-gray-400">(</span>
          </div>
          <div>
            <span className="text-cyan-400 ml-24">this.</span>
            <span className="text-white mr-2">hardWorker</span>
            <span className="text-amber-300">&&</span>
          </div>
          <div>
            <span className="text-cyan-400 ml-24">this.</span>
            <span className="text-white mr-2">problemSolver</span>
            <span className="text-amber-300">&&</span>
          </div>
          <div>
            <span className="text-cyan-400 ml-24">this.</span>
            <span className="text-white mr-2">skills.length</span>
            <span className="text-amber-300 mr-2">{">"}=</span>
            <span className="text-orange-400">5</span>
          </div>
          <div>
            <span className="text-gray-400 ml-16 mr-2">);</span>
          </div>
          <div>
            <span className="text-gray-400 ml-8">{"}"}</span>
          </div>
          <div>
            <span className="text-gray-400">{"}"}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
            Master Coding. Build Practical Projects.{" "}
            <span className="text-pink-500">Get Job-Ready</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
            Our Academy teaches practical, high-demand tech skills designed
            for beginners.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#courses"
              className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-sm shadow-blue-600/20"
            >
              Enroll in a Course <ArrowRight size={20} />
            </a>
            <a
              href="#product"
              className="px-8 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-xl font-semibold hover:text-pink-500 dark:hover:text-pink-400 transition-all flex items-center gap-2"
            >
              <FileText size={20} /> Buy Resume Template
            </a>
          </div>

          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/student${i}/40/40`}
                  alt="Student"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium">
              Joined by 500+ successful students
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <CodeWindow />

          <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

                   
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
