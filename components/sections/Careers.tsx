"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Laptop, ArrowRight } from "lucide-react";

export function Careers() {
  return (
    <section id="careers" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Grow With Satax Advisors</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              We believe that our greatest asset is our people. Join a team of passionate, driven, and detail-oriented individuals making a real difference in Finance, Taxation, and Business Advisory.
            </p>

            <a 
              href="mailto:info@satax.in" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary bg-white rounded-full hover:bg-slate-100 transition-all shadow-xl group"
            >
              Share Your Resume
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg text-white mt-1">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diverse Learning</h3>
                <p className="text-primary-foreground/80">Gain hands-on experience across multiple industries—from manufacturing and NGOs to E-commerce.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg text-white mt-1">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                <p className="text-primary-foreground/80">A culture of mentorship where every team member is encouraged to learn and stay updated with evolving tax laws.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg text-white mt-1">
                <Laptop size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation-Led</h3>
                <p className="text-primary-foreground/80">Work with modern financial tools and digital platforms to provide cutting-edge solutions to our clients.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
