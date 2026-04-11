"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  Calculator, 
  Landmark, 
  FileText, 
  SearchCheck, 
  Globe2, 
  PiggyBank, 
  Award, 
  HeartHandshake, 
  Scale, 
  ShoppingCart 
} from "lucide-react";

const serviceCategories = [
  {
    id: "start-business",
    title: "Start Your Business",
    icon: Briefcase,
    items: [
      { name: "Sole Proprietorship", desc: "The simplest way to start with minimal compliance." },
      { name: "Partnership Firm", desc: "Collaborative growth with legal clarity." },
      { name: "LLP", desc: "Flexibility of a partnership with limited liability protection." },
      { name: "Private Limited Company", desc: "Scale with global credibility. Ideal for startups." },
      { name: "One Person Company (OPC)", desc: "Corporate identity ran by a single founder." },
      { name: "HUF", desc: "Strategic tax planning for families." }
    ]
  },
  {
    id: "accounting",
    title: "Accounting Management",
    icon: Calculator,
    items: [
      { name: "Bookkeeping Services", desc: "Weekly, Monthly, or Yearly digital-first accounting." },
      { name: "Monthly Reports", desc: "Income, expenses, and performance breakdowns." },
      { name: "Inventory Management", desc: "Optimize stock to maximize your profit." },
      { name: "Cash Flow Management", desc: "Monitor inflows and outflows for proper liquidity." },
      { name: "Reconciliation Services", desc: "Zero-error assurance across bank, vendor, and GST." },
      { name: "Virtual CFO Services", desc: "Executive financial expertise on demand." }
    ]
  },
  {
    id: "gst",
    title: "GST Compliance",
    icon: Landmark,
    items: [
      { name: "GST Registration", desc: "Seamless entry into the GST ecosystem." },
      { name: "GST Return Filing", desc: "Precision in every monthly and quarterly filing." },
      { name: "Annual Return (GSTR-9)", desc: "Yearly health check and self-certified reconciliation." },
      { name: "GST Refund", desc: "Unlock your stuck capital from the GST portal." },
      { name: "Notice & Assessment", desc: "Expert representation for notices like ASMT-10 or SCN." }
    ]
  },
  {
    id: "income-tax",
    title: "Income Tax",
    icon: FileText,
    items: [
      { name: "PAN & TAN Application", desc: "The foundation of your tax identity." },
      { name: "ITR Filing", desc: "Optimizing your deductions for accurate tax returns." },
      { name: "TDS / TCS Return", desc: "Effortless compliance for every quarter." },
      { name: "Tax Planning & Advisory", desc: "Legal strategies to protect your wealth year-round." }
    ]
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    icon: SearchCheck,
    items: [
      { name: "Statutory & Tax Audits", desc: "Compliance under Companies Act and u/s 44AB." },
      { name: "Specialized Business Audits", desc: "Internal, Concurrent, and Management audits." },
      { name: "Regulatory Audits", desc: "Special audits mandated by IT/GST or Govt Grants." },
      { name: "Institutional Audits", desc: "Audits for NGOs, Trusts, and Educational Institutions." },
      { name: "Tactical & Risk Audits", desc: "Surprise and Quality audits to prevent fraud." }
    ]
  },
  {
    id: "nri",
    title: "NRI Taxation",
    icon: Globe2,
    items: [
      { name: "Residential Status Advisory", desc: "Determine your exact tax liability in India." },
      { name: "NRI ITR Filing", desc: "Seamless online reporting from abroad." },
      { name: "DTAA Benefit Advisory", desc: "Avoid double taxation legally." },
      { name: "Lower TDS Certificates", desc: "Maximize proceeds during property sales (Form 13)." },
      { name: "Foreign Remittance (15CA/CB)", desc: "Repatriate your funds safely and legally." }
    ]
  },
  {
    id: "banking",
    title: "Financing & Insurance",
    icon: PiggyBank,
    items: [
      { name: "Loan Services", desc: "Business, Home, OD/CC, and Machinery loans." },
      { name: "Insurance Solutions", desc: "Term plans, asset protection, and marine insurance." },
      { name: "Funding Support", desc: "CMA reports and detailed projected financials (DPR)." }
    ]
  },
  {
    id: "iso",
    title: "ISO & Global Certifications",
    icon: Award,
    items: [
      { name: "Management Certifications", desc: "ISO 9001, 14001, and 45001." },
      { name: "Industry-Specific Standards", desc: "ISO 27001, 20000-1, 22000, and 13485." },
      { name: "Product Marks", desc: "CE MARK, GMP, and HALAL certifications." },
      { name: "Audit & Documentation", desc: "End-to-End implementation readiness." }
    ]
  },
  {
    id: "social",
    title: "Social Sector Entity",
    icon: HeartHandshake,
    items: [
      { name: "NGO/Trust Registration", desc: "Turn your vision into a legal reality." },
      { name: "Society & Nidhi Company", desc: "Setup member-based communities." },
      { name: "12A & 80G Registration", desc: "Unlock crucial tax benefits for donors." },
      { name: "CSR & FCRA Compliance", desc: "Global funding and corporate alignment." }
    ]
  },
  {
    id: "statutory",
    title: "Registrations & IPR",
    icon: Scale,
    items: [
      { name: "Essential Registrations", desc: "MSME, Shop Act, FSSAI, Professional Tax." },
      { name: "Global Trade IDs", desc: "Import Export Code (IEC), APEDA, ICEGATE." },
      { name: "Intellectual Property", desc: "Trademark and Patent filing." }
    ]
  },
  {
    id: "ecom",
    title: "E-commerce Compliance",
    icon: ShoppingCart,
    items: [
      { name: "Marketplace Onboarding", desc: "Financial setup for Amazon, Flipkart, etc." },
      { name: "Payment Reconciliation", desc: "Verify transactions against bank payouts." },
      { name: "SPF & SAFE-T Claims", desc: "Recover lost revenue from fraudulent returns." },
      { name: "E-commerce Tax", desc: "TCS/TDS compliance and E-way bills." }
    ]
  }
];

export function Services() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  const activeCategory = serviceCategories.find(c => c.id === activeTab);

  return (
    <section id="services" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Premium Services" 
          subtitle="Explore our comprehensive suite of financial, taxation, and advisory services tailored for modern businesses."
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  "flex items-center space-x-3 w-full text-left px-5 py-4 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink",
                  activeTab === category.id 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground"
                )}
              >
                <category.icon size={20} className={activeTab === category.id ? "text-primary-foreground" : "text-primary"} />
                <span className="font-semibold text-sm sm:text-base">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 dark:bg-slate-900/40 border border-border p-6 sm:p-10 rounded-3xl"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                      <activeCategory.icon size={28} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">{activeCategory.title}</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {activeCategory.items.map((item, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors">
                        <h4 className="font-bold text-base text-foreground mb-2">{idx + 1}. {item.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
