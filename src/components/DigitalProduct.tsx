import React from "react";
import { motion } from "motion/react";
import { ACADEMY_CONFIG } from "../config";
import { Check, ShoppingCart, FileText } from "lucide-react";

const DigitalProduct = () => {
  const benefits = [
    "Professional resume structure",
    "ATS-friendly template",
    "Easy to edit (Word & Google Docs)",
    "Helps job seekers stand out",
    "Includes Cover Letter template",
    "Bonus: Job Search Guide",
  ];

  return (
    <section id="product" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-pink-500 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-6 md:p-20 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                  Digital Product
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Get Hired Faster with Our{" "}
                  <span className="text-pink-100">Resume Bundle</span>
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Stop getting rejected by ATS systems. Our professional Resume
                  and Cover Letter bundle is designed to help you land more
                  interviews.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-sm font-medium text-blue-50">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="text-3xl font-bold">
                    {ACADEMY_CONFIG.resumePrice}
                  </div>
                  <a
                    href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I want to buy the Resume and Cover Letter template for ${ACADEMY_CONFIG.resumePrice}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg"
                  >
                    Buy Now <ShoppingCart size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative h-full min-h-[400px] hidden lg:block">
              <img
                src={ACADEMY_CONFIG.productImage}
                alt="Resume Template"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl w-64"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <FileText size={24} />
                </div>
                <div className="h-2 w-3/4 bg-zinc-100 rounded-full mb-3"></div>
                <div className="h-2 w-full bg-zinc-100 rounded-full mb-3"></div>
                <div className="h-2 w-1/2 bg-zinc-100 rounded-full mb-6"></div>
                <div className="h-8 w-full bg-blue-600 rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalProduct;
