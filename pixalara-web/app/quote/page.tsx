'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaChevronDown } from 'react-icons/fa';

// Country List
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

export default function QuotePage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    budget: '',
    message: ''
  });

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

  const services = ["Web Design", "App Dev", "Branding", "Marketing", "Cloud/DevOps", "Others"];
  const budgets = ["$100 - $1k", "$1k - $5k", "$5k - $10k", "$10k - $50k", "$50k+"];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    const data = {
      access_key: "fc78a175-8f5d-4b45-94bd-ca3cd956725e", 
      subject: "New Quote Request - Pixalara",
      from_name: "Pixalara Quote Form",
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
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <main className="bg-black min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      
      {/* Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1a1a1a; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #444; }
      `}</style>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-2xl w-full z-10">
        {status === 'success' ? (
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 text-center relative overflow-hidden"
           >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500/30 blur-[60px] rounded-full pointer-events-none" />
             <div className="relative w-20 h-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6 shadow-2xl shadow-purple-500/40">
               <FaCheck />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We're On It.</h2>
             <p className="text-gray-300 mb-8 leading-relaxed max-w-md mx-auto">
               Thanks, <span className="text-white font-bold">{formData.name}</span>. We've received your project details.
             </p>
             <button 
               onClick={() => { setStatus('idle'); setFormData({name: '', email: '', mobile: '', service: '', budget: '', message: ''}) }}
               className="bg-white text-black hover:bg-pink-500 transition-colors px-10 py-3 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 mx-auto"
             >
               Done
             </button>
           </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Project.</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Tell us about your vision. We'll reply within 24 hours.
              </p>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-5 bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-md overflow-visible"
              onSubmit={handleSubmit}
            >
              <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

              {/* 1. Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">Your Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white uppercase tracking-wider">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors" />
                </div>
              </div>

              {/* 2. Mobile Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white uppercase tracking-wider">Mobile Number</label>
                <div className="flex gap-3 relative">
                  
                  {/* Dropdown */}
                  <div className="w-32 shrink-0 relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full h-full bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-white flex items-center justify-between hover:border-purple-500 transition-all"
                    >
                      <span className="flex items-center gap-2 text-base">
                        <span>{selectedCountry.flag}</span>
                        <span className="text-sm font-bold text-gray-300">{selectedCountry.code}</span>
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
                              onClick={() => { setSelectedCountry(c); setIsDropdownOpen(false); }}
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
                    name="mobile" 
                    required 
                    value={formData.mobile} 
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors" 
                    placeholder="98765 43210" 
                  />
                </div>
              </div>

              {/* 3. Service Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-white uppercase tracking-wider">What do you need?</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button key={s} type="button" onClick={() => setFormData({ ...formData, service: s })} className={`px-4 py-2 rounded-full border text-xs font-bold transition-all ${formData.service === s ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white'}`}>{s}</button>
                  ))}
                </div>
              </div>

              {/* 4. Budget Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-white uppercase tracking-wider">Project Budget (USD)</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button key={b} type="button" onClick={() => setFormData({ ...formData, budget: b })} className={`px-4 py-2 rounded-full border text-xs font-bold transition-all ${formData.budget === b ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white'}`}>{b}</button>
                  ))}
                </div>
              </div>

              {/* 5. Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white uppercase tracking-wider">Project Details</label>
                <textarea name="message" rows={3} required value={formData.message} onChange={handleChange} placeholder="Tell us about your goals..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none transition-colors resize-none" />
              </div>

              <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-xl text-white font-bold text-base uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-transform shadow-lg shadow-purple-600/25 disabled:opacity-50 mt-2">
                {status === 'sending' ? 'Sending Request...' : 'Send Request'}
              </button>
            </motion.form>
          </>
        )}
      </div>
    </main>
  );
}