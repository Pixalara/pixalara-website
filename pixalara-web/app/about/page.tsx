'use client';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaArrowRight, FaBolt, FaServer, FaNetworkWired, FaLock } from 'react-icons/fa';
import Link from 'next/link';

// === ANIMATION VARIANTS ===
const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: { 
    opacity: [0.5, 1, 0.5], 
    scale: [1, 1.1, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1, 
    opacity: 0.6,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

const particleVariants = {
  animate: {
    x: [0, 100, 0],
    y: [0, -50, 0],
    opacity: [0, 1, 0],
    transition: { duration: 5, repeat: Infinity, ease: "linear" }
  }
};

export default function AboutPage() {
  return (
    // Reduced pt-40 to pt-32 for better initial positioning
    <main className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. HERO SECTION - DRASTICALLY REDUCED MARGIN (mb-12) */}
      <div className="max-w-7xl mx-auto mb-12 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            Who We Are
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tighter leading-[1.1]">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Digital Empires.
            </span>
          </h1>
        </motion.div>
      </div>

      {/* 2. MAIN DESCRIPTION GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32 relative z-10">
        
        {/* Left: The "Manifesto" */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 relative z-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Pixalara builds world-class digital experiences that are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">engineered to scale.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We design, build, host, secure, and manage high-performance websites, applications, and cloud-native systems for modern brands.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            From stunning UI/UX to reliable cloud infrastructure, SEO, business email, and fully managed hosting, we help startups and growing businesses launch faster, scale smarter, and stay secure.
          </p>
          <div className="pt-2">
             <Link href="/contact" className="inline-flex items-center gap-3 text-white border-b border-white/20 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all font-bold uppercase tracking-widest text-sm">
               Partner With Us <FaArrowRight />
             </Link>
          </div>
        </motion.div>

        {/* Right: The Animated "Engine" Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-8 md:p-10 min-h-[450px] flex flex-col justify-center group"
        >
          {/* === BACKGROUND ANIMATIONS === */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* 1. The Abstract Network Grid SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <motion.path variants={pathVariants} initial="initial" animate="animate" d="M50,50 Q 200,150 350,50 T 650,150" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <motion.path variants={pathVariants} initial="initial" animate="animate" transition={{delay: 0.5}} d="M50,250 Q 200,150 350,250 T 650,150" stroke="url(#grad2)" strokeWidth="2" fill="none" />
              <motion.path variants={pathVariants} initial="initial" animate="animate" transition={{delay: 1}} d="M350,50 V 450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
              
              {/* Glowing Nodes */}
              <motion.circle variants={glowVariants} initial="initial" animate="animate" cx="50" cy="50" r="8" fill="#3b82f6" filter="url(#blurMe)" />
              <motion.circle variants={glowVariants} initial="initial" animate="animate" cx="350" cy="250" r="12" fill="#8b5cf6" filter="url(#blurMe)" />
              <motion.circle variants={glowVariants} initial="initial" animate="animate" transition={{delay: 1}} cx="650" cy="150" r="8" fill="#06b6d4" filter="url(#blurMe)" />

              {/* Definitions for Gradients & Blurs */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: "#3b82f6", stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: "#8b5cf6", stopOpacity: 0.1}} />
                </linearGradient>
                 <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: "#8b5cf6", stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: "#06b6d4", stopOpacity: 0.1}} />
                </linearGradient>
                <filter id="blurMe">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
              </defs>
            </svg>
            
            {/* 2. Moving Data Particles */}
            <motion.div variants={particleVariants} animate="animate" className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-[2px]" />
            <motion.div variants={particleVariants} animate="animate" transition={{delay: 2}} className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full blur-[3px]" />

            {/* 3. Subtle Scan Line Overlay */}
            <motion.div 
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10"
            />
          </div>
          
          {/* === FOREGROUND CONTENT: THE "ENGINE" MODULES === */}
          <div className="relative z-20 space-y-6">
             {/* Module 1 */}
             <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-5 p-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-blue-500/30">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <FaBolt />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">Velocity Core</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full animate-pulse">Active</span>
                  </div>
                  <p className="text-gray-400 text-xs">Sub-millisecond load times via global edge computing.</p>
                </div>
             </motion.div>

             {/* Module 2 - SECURE CORE */}
             <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-5 p-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-purple-500/30">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <FaLock />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">Secure Core</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full animate-pulse">Protected</span>
                  </div>
                  <p className="text-gray-400 text-xs">End-to-end encryption & real-time monitoring.</p>
                </div>
             </motion.div>

             {/* Module 3 */}
             <motion.div whileHover={{ scale: 1.02, x: 5 }} className="flex items-start gap-5 p-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-cyan-500/30">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-xl text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <FaServer />
                </div>
                <div>
                   <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">Auto-Scale Edge</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">Elastic</span>
                  </div>
                  <p className="text-gray-400 text-xs">Infrastructure that adapts instantly to traffic spikes.</p>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3. CORE VALUES */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/30 transition-all group">
               <FaRocket className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-white mb-3">Launch Faster</h3>
               <p className="text-gray-400">We don't believe in months of development hell. We ship MVP versions quickly so you can start growing.</p>
            </div>
            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-purple-500/30 transition-all group">
               <FaNetworkWired className="text-4xl text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-white mb-3">Scale Smarter</h3>
               <p className="text-gray-400">Our cloud-native architecture ensures that when your traffic spikes, your site doesn't crash. It adapts.</p>
            </div>
            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/30 transition-all group">
               <FaShieldAlt className="text-4xl text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-white mb-3">Stay Secure</h3>
               <p className="text-gray-400">Security isn't an addon; it's the foundation. We bake security protocols into every line of code.</p>
            </div>
        </div>
      </div>

    </main>
  );
}