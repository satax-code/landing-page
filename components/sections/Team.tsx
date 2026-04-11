"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const teamMembers = [
  {
    name: "Vikash Tomar",
    role: "Founder",
    qualifications: "B.Sc, Diploma in Finance & Accounting (Germany), DCA, Diploma in Tech",
    exp: "9+ Years",
    desc: "Rich experience in GST Audit, Income Tax Audit, and Accounting. Believes in: 'There are no limits to what you can accomplish, except the limits you place on your own thinking.'",
  },
  {
    name: "Vaibhav Kumar",
    role: "Co-Founder",
    qualifications: "Chartered Accountant (ICAI)",
    exp: "11+ Years",
    desc: "Expert in Auditing, Direct & Indirect Taxation, representing clients before various income tax and GST authorities in assessments, appeals, and litigation.",
  },
  {
    name: "Kiran",
    role: "Core Member",
    qualifications: "Company Secretary",
    exp: "8+ Years",
    desc: "Specializes in Corporate Laws, Secretarial Compliances, MCA & ROC matters. Expertise in maintaining high standards of customer service and business retention.",
  },
  {
    name: "Vikas Chadha",
    role: "Senior Associate (Finance)",
    qualifications: "PGDBA in Business Analytics, B.Com",
    exp: "8+ Years",
    desc: "Competent business analyst heading a team of 5-6 members. Good fundamentals in Accounting, Finance & Taxation with strong analytical decision-making skills.",
  },
  {
    name: "Jasmeet Kaur",
    role: "Team Member",
    qualifications: "Professional Consultant",
    exp: "Experienced",
    desc: "A dedicated professional serving our clients with customized financial needs and day-to-day strategic accounting support.",
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Meet Our Experts" 
          subtitle="Qualified professionals looking after your customized needs and guiding you every step of the way."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 border-4 border-white dark:border-slate-800 shadow-md">
                <User size={32} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              
              <div className="space-y-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
                <p><strong>Edu:</strong> {member.qualifications}</p>
                <p><strong>Exp:</strong> {member.exp}</p>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-border pt-4">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
