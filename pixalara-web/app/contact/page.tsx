'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  FaEnvelope, FaMapMarkerAlt, FaPaperPlane, 
  FaCheckCircle, FaSpinner, FaChevronDown, 
  FaCheck, FaHome 
} from 'react-icons/fa';

// === COUNTRY LIST ===
const countryCodes = [
  { code: "+91", country: "IN", flag: "🇮🇳" }, { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "GB", flag: "🇬🇧" }, { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+61", country: "AU", flag: "🇦🇺" }, { code: "+1", country: "CA", flag: "🇨🇦" },
  { code: "+49", country: "DE", flag: "🇩🇪" }, { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+81", country: "JP", flag: "🇯🇵" }, { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+", country: "OT", flag: "🌐" },
];

// === ANIMATION VARIANTS (Fixed Types) ===
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.05, delayChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50 } 
  }
};

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', service: '', budget: '', message: ''
  });
  
  // Dropdown State
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // UPDATED LISTS
  const services = ["Web Design", "App Dev", "Branding", "Digital Marketing", "Cloud/DevOps", "Others"];
  const budgets = ["$100 - $1k", "$1k - $5k", "$5k - $10k", "$10k - $50k", "$50k+"];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    const data = {
      // Use your Access Key here
      access_key: "fc78a175-8f5d-4b45-94bd-ca3cd956725e", 
      subject: "New Project Inquiry - Pixalara",
      from_name: "Pixalara Website",
      ...formData,
      full_phone: `${selectedCountry.code} ${formData.mobile}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', service: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* === LEFT SIDE: INFO === */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-40"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Something Great.
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
            Tell us about your goals. Whether it's a new platform, a rebrand, or cloud infrastructure, we are ready to engineer your success.
          </p>

          {/* Contact Details Cards */}
          <div className="space-y-6">
            <a href="mailto:hello@pixalara.com" className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-2xl text-blue-400 group-hover:scale-110 transition-transform">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Email Us</p>
                <p className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">hello@pixalara.com</p>
              </div>
            </a>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 transition-all">
              <div className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-2xl text-purple-400">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">HQ</p>
                <p className="text-xl text-white font-medium">Global / Remote First</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* === RIGHT SIDE: THE MERGED FORM === */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-neutral-900/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/10 relative overflow-visible">
            
            {/* === PREMIUM SUCCESS STATE (RESTORED) === */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-neutral-900/95 backdrop-blur-xl rounded-[2.5rem] flex flex-col items-center justify-center text-center p-8 border border-white/10"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <FaCheckCircle className="text-4xl text-green-500" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">Request Received</h3>
                  <p className="text-gray-400 text-sm mb-8 max-w-xs">
                    Your vision is safe with us. Our engineering team has been notified.
                  </p>

                  {/* Value-Add Timeline */}
                  <div className="w-full bg-white/5 rounded-xl p-6 mb-8 text-left border border-white/5">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Next Steps:</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs text-blue-400 font-bold">1</div>
                        <p className="text-sm text-gray-300">Internal Review <span className="text-gray-600 text-xs ml-2">(In Progress)</span></p>
                      </div>
                      <div className="flex items-center gap-3 opacity-50">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-bold">2</div>
                        <p className="text-sm text-gray-300">Discovery Call Scheduling</p>
                      </div>
                      <div className="flex items-center gap-3 opacity-50">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-bold">3</div>
                        <p className="text-sm text-gray-300">Strategic Proposal</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 w-full">
                    <Link href="/" className="flex-1">
                      <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                         <FaHome /> Home
                      </button>
                    </Link>
                    <button 
                      onClick={() => setStatus('idle')} 
                      className="flex-1 py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      New Request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ANIMATED FORM CONTAINER */}
            <motion.form 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit} 
              className="space-y-6 relative z-10"
            >
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:bg-black/60 transition-all" />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Email</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@company.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:bg-black/60 transition-all" />
                </motion.div>
              </div>

              {/* Row 2: Mobile with Country Code */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Mobile Number</label>
                <div className="flex gap-3 relative">
                  <div className="w-32 shrink-0 relative" ref={dropdownRef}>
                    <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full h-full bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white flex items-center justify-between hover:border-purple-500 transition-all">
                      <span className="flex items-center gap-2 text-sm">
                        <span>{selectedCountry.flag}</span>
                        <span className="font-bold">{selectedCountry.code}</span>
                      </span>
                      <FaChevronDown className="text-[10px] text-gray-500" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full mt-2 left-0 w-64 bg-neutral-900 border border-white/10 rounded-xl shadow-xl z-50 max-h-48 overflow-y-auto custom-scrollbar">
                        {countryCodes.map((c) => (
                          <button key={c.country} type="button" onClick={() => { setSelectedCountry(c); setIsDropdownOpen(false); }} className="w-full px-4 py-3 hover:bg-white/10 flex items-center gap-3 text-left text-sm text-gray-300 border-b border-white/5 last:border-none">
                            <span className="text-lg">{c.flag}</span> <span className="font-bold">{c.code}</span> <span className="text-xs text-gray-500 truncate">{c.country}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none" placeholder="98765 43210" />
                </div>
              </motion.div>

              {/* Row 3: Service Selection (Chips) */}
              <motion.div variants={itemVariants} className="space-y-3">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">What do you need?</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <motion.button 
                      key={s} 
                      type="button" 
                      onClick={() => setFormData({ ...formData, service: s })} 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full border text-xs font-bold transition-all ${formData.service === s ? 'bg-white text-black border-white' : 'bg-white/5 text-gray-400 border-white/10 hover:border-purple-500 hover:text-white'}`}
                    >
                      {formData.service === s && <FaCheck className="inline-block mr-2 text-[10px]" />}
                      {s}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Row 4: Budget Selection (Chips) */}
              <motion.div variants={itemVariants} className="space-y-3">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Project Budget</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <motion.button 
                      key={b} 
                      type="button" 
                      onClick={() => setFormData({ ...formData, budget: b })} 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full border text-xs font-bold transition-all ${formData.budget === b ? 'bg-white text-black border-white' : 'bg-white/5 text-gray-400 border-white/10 hover:border-purple-500 hover:text-white'}`}
                    >
                      {b}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Row 5: Details */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider ml-1">Project Details</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your project goals and timeline..." className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:bg-black/60 transition-all resize-none custom-scrollbar"></textarea>
              </motion.div>

              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full py-5 rounded-xl bg-white text-black font-bold text-lg hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-purple-900/20"
              >
                {status === 'submitting' ? (
                  <>Sending... <FaSpinner className="animate-spin" /></>
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </motion.button>

              {status === 'error' && (
                <p className="text-red-500 text-center text-sm mt-2">Something went wrong. Please check your connection.</p>
              )}

            </motion.form>
          </div>
        </motion.div>

      </div>
    </main>
  );
}