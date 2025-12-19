'use client';
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaRocket, FaCode } from 'react-icons/fa';

export default function AboutPage() {
  return (
    // Transparent background so the Global Gradient shows through
    <main className="min-h-screen pt-24 pb-20 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* === LEFT SIDE: TEXT CONTENT === */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              Who We Are
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Digital Empires.
            </span>
          </h1>
          
          <h2 className="text-2xl text-white font-bold mb-6">
            Pixalara builds world-class digital experiences that are <span className="text-purple-400">engineered to scale.</span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            We design, build, host, secure, and manage high-performance websites, applications, and cloud-native systems for modern brands. We don't just write code; we architect infrastructure that handles millions of users without blinking.
          </p>

          <div className="flex gap-6">
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
              Our Story
            </button>
            <button className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
              View Stats
            </button>
          </div>
        </motion.div>

        {/* === RIGHT SIDE: TECH CARDS (Velocity Core) === */}
        <div className="space-y-6">
          
          {/* Card 1: Velocity Core */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/50 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl group-hover:scale-110 transition-transform">
                <FaBolt />
              </div>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                Active
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Velocity Core</h3>
            <p className="text-gray-400 text-sm">Sub-millisecond load times via global edge computing and static generation.</p>
          </motion.div>

          {/* Card 2: Secure Core */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/50 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-2xl group-hover:scale-110 transition-transform">
                <FaShieldAlt />
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                Protected
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Secure Core</h3>
            <p className="text-gray-400 text-sm">Enterprise-grade firewalls, DDoS protection, and automated threat detection.</p>
          </motion.div>

          {/* Card 3: Scalable Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-pink-500/50 transition-colors group"
          >
             <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 text-2xl group-hover:scale-110 transition-transform">
                <FaRocket />
              </div>
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
                Scalable
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Infinite Scale</h3>
            <p className="text-gray-400 text-sm">Architecture that grows automatically from 10 to 10 million users.</p>
          </motion.div>

        </div>

      </div>
    </main>
  );
}