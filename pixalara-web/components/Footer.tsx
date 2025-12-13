'use client';
import { motion } from 'framer-motion';
// Removed FaGithub
import { FaTwitter, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden border-t border-white/10">
      
      {/* 1. CALL TO ACTION SECTION */}
      <div className="relative py-32 px-6 text-center z-10">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/10 rounded-full blur-[120px] -z-10" />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
        >
          Ready to <span className="text-red-600">Scale?</span>
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Let's build something extraordinary together. Your digital empire starts with a single click.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-wide hover:bg-gray-200 transition-all"
        >
          <span>Get a Quote</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          
          {/* Button Glow Effect */}
          <div className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-4 transition-all opacity-50" />
        </motion.button>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-6">
          {/* UPDATED LOGO with Gradient */}
          <h3 className="text-3xl font-extrabold tracking-tighter mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              PIXALARA
            </span>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            A full-service digital agency focused on branding, UI/UX design, and mobile development.
          </p>
          <div className="flex gap-4">
            {/* Removed FaGithub from this list */}
            {[FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            {['About Us', 'Our Work', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-red-500 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            {['Web Design', 'App Development', 'Branding', 'SEO & Marketing'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-red-500 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Stay Updated</h4>
          <div className="flex bg-white/5 rounded-lg overflow-hidden border border-white/10 p-1">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent text-white px-4 py-2 outline-none w-full text-sm placeholder:text-gray-600"
            />
            <button className="bg-white/10 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* 3. BOTTOM COPYRIGHT BAR (Updated to match screenshot) */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright */}
        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Pixalara Inc. All rights reserved.
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-8 text-xs text-gray-500 font-medium">
          <a href="#" className="hover:text-white transition-colors">Careers</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}