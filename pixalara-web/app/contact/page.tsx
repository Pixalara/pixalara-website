'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCheckCircle, FaChevronDown } from 'react-icons/fa';

// Top 30 Countries + Others
const countryCodes = [
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+1", country: "US", flag: "🇺🇸", name: "USA" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "UK" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
  { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+", country: "OT", flag: "🌐", name: "Other" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [countryCode, setCountryCode] = useState(countryCodes[0]); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullPhone = `${countryCode.code} ${formData.get('mobile_number')}`;
    formData.append("Full_Phone_Number", fullPhone);

    // === WEB3FORMS CONFIGURATION ===
    formData.append("access_key", "fc78a175-8f5d-4b45-94bd-ca3cd956725e"); 
    formData.append("subject", "New Inquiry from Pixalara Contact Page");
    formData.append("from_name", "Pixalara Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <main className="bg-black min-h-screen pt-32 px-6 flex flex-col md:flex-row max-w-7xl mx-auto gap-16 pb-20 items-center">
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1a1a1a; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #444; }
      `}</style>

      {/* Left Side: Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1"
      >
        <h1 className="text-7xl md:text-9xl font-bold text-white mb-10 tracking-tighter leading-none">
          Let's <br />
          {/* UPDATED GRADIENT: Purple to Pink (Matches "Works") */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Talk.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-12">
          Have a project in mind? We’d love to hear from you. We work globally with brands of all sizes.
        </p>

        <div className="space-y-8">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-cyan-400 text-xl"><FaEnvelope /></div>
            <div><p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Us</p><a href="mailto:hello@pixalara.com" className="text-2xl text-white font-bold hover:text-cyan-400">hello@pixalara.com</a></div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-400 text-xl"><FaPhoneAlt /></div>
            <div><p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call Us</p><p className="text-2xl text-white font-bold">+1 (555) 123-4567</p></div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Contact Form */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.2 }}
         className="flex-1 bg-neutral-900 rounded-[2rem] border border-white/10 p-8 relative overflow-visible flex flex-col justify-center shadow-2xl"
      >
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-green-500 blur-[30px] opacity-20 rounded-full" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-4xl text-white shadow-2xl mx-auto">
                <FaCheckCircle />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Message Received.</h3>
            <p className="text-gray-400 text-base mb-8 max-w-sm mx-auto leading-relaxed">
              Thanks! We'll be in touch within <span className="text-white font-semibold">24 hours</span>.
            </p>
            <button 
              onClick={() => setStatus('idle')} 
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
            >
              Done
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 block">Name</label>
              <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors" placeholder="John Doe" />
            </div>

            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 block">Email</label>
              <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors" placeholder="john@example.com" />
            </div>

            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 block">Mobile Number</label>
              <div className="flex gap-3 relative">
                
                {/* Dropdown */}
                <div className="w-32 shrink-0 relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full h-full bg-black/50 border border-white/10 rounded-xl px-3 py-3 text-white flex items-center justify-between hover:border-cyan-400 transition-all"
                  >
                    <span className="flex items-center gap-2 text-base">
                      <span>{countryCode.flag}</span>
                      <span className="text-sm font-bold text-gray-300">{countryCode.code}</span>
                    </span>
                    <FaChevronDown className={`text-[10px] text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 left-0 w-[260px] bg-neutral-900 border border-white/10 rounded-xl shadow-2xl z-50 max-h-56 overflow-y-auto custom-scrollbar"
                      >
                        {countryCodes.map((c) => (
                          <button
                            key={c.country}
                            type="button"
                            onClick={() => { setCountryCode(c); setIsDropdownOpen(false); }}
                            className="w-full px-4 py-2.5 hover:bg-white/10 flex items-center gap-3 transition-colors border-b border-white/5 last:border-none group"
                          >
                            <span className="text-lg flex-shrink-0 w-6">{c.flag}</span>
                            <span className="text-gray-400 font-mono text-xs w-10 text-left flex-shrink-0 group-hover:text-white transition-colors">{c.code}</span>
                            <span className="text-gray-300 text-sm truncate flex-1 text-left group-hover:text-white transition-colors">{c.name}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <input 
                  type="tel" 
                  name="mobile_number" 
                  required 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors" 
                  placeholder="98765 43210" 
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-white uppercase tracking-wider mb-2 block">Message</label>
              <textarea name="message" rows={3} required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-400 outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-white text-black py-3.5 rounded-xl font-bold text-base uppercase tracking-widest hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              {status === 'sending' ? 'Sending...' : <>Send Message <FaPaperPlane className="text-sm" /></>}
            </button>
            {status === 'error' && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
          </form>
        )}
      </motion.div>
    </main>
  );
}