"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Ready to scale with confidence? Contact our expert team for a customized consultation."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 sm:p-10 border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Delhi Office</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">5/99, Back Side, First Floor, Block 5, Subhash Nagar, Delhi 110027</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Morena Office</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">34/703, Near Banke Bihari Garden, Shikarpur Road, Morena, M.P 476001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">+91-8319022916 <br/> 011-46045178</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1"><a href="mailto:info@satax.in" className="hover:text-primary transition-colors">info@satax.in</a></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form (Visual only for now, can be hooked to API later) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <form className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your business needs..."></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
