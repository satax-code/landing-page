"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Cpu, BookOpen, Settings } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const reasons = [
  {
    title: "Expert Guidance",
    description: "Practical knowledge of Indian Tax laws combined with modern financial modeling.",
    icon: TrendingUp,
  },
  {
    title: "Digital-First Approach",
    description: "We use technology to eliminate boring paperwork, making your finance management 100% paperless and efficient.",
    icon: Cpu,
  },
  {
    title: "Educational Authority",
    description: "Through our digital platforms and YouTube insights, we ensure our clients are always informed.",
    icon: BookOpen,
  },
  {
    title: "Customized Solutions",
    description: "No 'one-size-fits-all.' We dive deep into your business model to find the best tax-saving opportunities.",
    icon: Settings,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Who We Are" 
              align="left" 
              subtitle="We are a team of dedicated financial strategists, tax experts, and modern accountants."
            />
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg">
              <p>
                Led by a vision to simplify Indian taxation, we bring deep practical expertise in GST, Income Tax, and Accounting. 
              </p>
              <p>
                We don't just work for our clients; we work with them. Whether you are a solo freelancer, a growing startup, or an established SME, we tailor our strategies to fit your specific industry needs.
              </p>
              
              <div className="pt-4 flex flex-col space-y-3">
                <div className="flex items-center space-x-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <span>Deep Industry Expertise</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <span>Proactive Year-Round Advisory</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <span>100% Paperless & Efficient</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{reason.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
