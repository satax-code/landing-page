"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Activity, Users } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const values = [
  {
    title: "Integrity First",
    description: "In finance, trust is everything. We maintain the highest standards of transparency in every audit, filing, and consultation.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Innovation-Driven",
    description: "We leverage the latest Fintech tools and automation to ensure your accounting is real-time, error-free, and accessible.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Proactive Strategy",
    description: "We don’t wait for tax season to act. We provide year-round advisory to ensure you are always optimized and compliant.",
    icon: Activity,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Client Success",
    description: "Your growth is our primary KPI. When your business saves money and scales efficiently, we succeed.",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function MissionValues() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Mission & Core Values" 
          subtitle="To provide Strategic, Accurate, and Tax-optimized solutions (SATAX) that enable business owners to scale with confidence and financial clarity."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.bg} ${value.color}`}>
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
