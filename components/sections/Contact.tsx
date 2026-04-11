"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Check, ChevronDown, X as XIcon, Loader2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "@/lib/utils";

const servicesList = [
  "New Business Setup", 
  "Accounting & MIS", 
  "GST Services", 
  "Income Tax", 
  "Audit & Assurance", 
  "NRI Taxation", 
  "Loans & Funding", 
  "ISO Certifications", 
  "NGO & Trust", 
  "E-commerce Tax"
];

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showError, setShowError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (srv: string) => {
    setSelectedServices(prev => 
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
    if (showError) setShowError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setShowError(true);
      return;
    }
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      services: selectedServices.join(", ")
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Thanks for reaching out! Your request was sent successfully.");
        // Reset form
        (e.target as HTMLFormElement).reset();
        setSelectedServices([]);
      } else {
        alert("Failed to send your request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 sm:p-10 border border-border shadow-sm h-fit"
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

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 border border-border shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" placeholder="John Doe" disabled={isSubmitting} />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm" placeholder="john@company.com" disabled={isSubmitting} />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Services Interested In <span className="text-red-500">*</span></label>
                  
                  <div 
                    onClick={() => !isSubmitting && setIsOpen(!isOpen)}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-border bg-slate-50 dark:bg-slate-900 cursor-pointer flex justify-between items-center transition-all min-h-[46px]",
                      isSubmitting && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <div className="flex flex-wrap gap-1">
                      {selectedServices.length === 0 ? (
                        <span className="text-slate-400 text-sm">Select services...</span>
                      ) : (
                        selectedServices.map(srv => (
                          <span key={srv} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-md flex items-center">
                            {srv}
                            <button 
                              type="button" 
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                if (!isSubmitting) toggleService(srv); 
                              }} 
                              className="ml-1.5 hover:text-primary/70 focus:outline-none"
                              disabled={isSubmitting}
                            >
                              <XIcon size={12} strokeWidth={3} />
                            </button>
                          </span>
                        ))
                      )}
                    </div>
                    <ChevronDown size={18} className={cn("text-slate-400 transition-transform shrink-0 ml-2", isOpen && "rotate-180")} />
                  </div>

                  <AnimatePresence>
                    {isOpen && !isSubmitting && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border border-border rounded-lg shadow-xl max-h-56 overflow-y-auto overflow-x-hidden"
                      >
                        {servicesList.map(srv => {
                          const isSelected = selectedServices.includes(srv);
                          return (
                            <button
                              type="button"
                              key={srv}
                              onClick={() => toggleService(srv)}
                              className="w-full text-left px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center justify-between text-sm transition-colors text-foreground"
                            >
                              <span>{srv}</span>
                              <div className={cn("w-4 h-4 rounded border flex flex-shrink-0 items-center justify-center transition-colors ml-3", isSelected ? "bg-primary border-primary text-white" : "border-slate-300 dark:border-slate-600")}>
                                {isSelected && <Check size={12} strokeWidth={3} />}
                              </div>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {showError && <p className="text-red-500 text-xs mt-2">Please select at least one service.</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">How can we help?</label>
                  <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm" placeholder="Tell us about your business needs..." disabled={isSubmitting}></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 pt-4 mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : "Submit Request"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
