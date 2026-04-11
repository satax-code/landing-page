import * as React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">
              Satax Advisors
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Strategic, Accurate, and Tax-optimized solutions enabling business owners to scale with confidence and financial clarity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/www.satax.in" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="https://www.instagram.com/satax.in" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/company/sataxin" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Business Setup</li>
              <li>Accounting & MIS</li>
              <li>GST Returns & Refunds</li>
              <li>Income Tax & Advisory</li>
              <li>Audit & Assurance</li>
              <li>ISO Consultancy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <span><strong className="text-white">Delhi Office:</strong><br/> 5/99, Back Side, First Floor, Block 5, Subhash Nagar, Delhi 110027</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-500 shrink-0 mt-0.5" size={18} />
                <span><strong className="text-white">Morena Office:</strong><br/> 34/703, Near Banke Bihari Garden, Shikarpur Road, Morena, M.P 476001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-amber-500 shrink-0" size={18} />
                <span>+91-8319022916 <br className="md:hidden"/> <span className="hidden md:inline">|</span> 011-46045178</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-amber-500 shrink-0" size={18} />
                <a href="mailto:info@satax.in" className="hover:text-white transition-colors">info@satax.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Satax Advisors. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
