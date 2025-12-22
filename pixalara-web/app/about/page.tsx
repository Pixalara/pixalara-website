'use client';
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaRocket } from 'react-icons/fa';

// === DATA: WHY CHOOSE PIXALARA ===
const reasons = [
  {
    title: "End-to-End IT Ownership",
    desc: "From domain configuration to cloud-native application design, development, and deployment, we manage your entire digital foundation — so you can stay focused on growth."
  },
  {
    title: "Built to Scale on AWS",
    desc: "We design scalable AWS architectures and implement modern DevOps practices to keep your applications fast, secure, and reliable as traffic grows."
  },
  {
    title: "Always-On Reliability",
    desc: "High availability, proactive monitoring, and rapid response ensure your systems stay online and perform when it matters most."
  },
  {
    title: "Grow Your Brand Digitally",
    desc: "We build visibility, authority, and demand through data-driven digital marketing — turning traffic into leads and leads into customers."
  },
  {
    title: "Growth, Not Just Delivery",
    desc: "We don’t disappear after launch. We partner with you long-term to evolve, optimize, and scale continuously."
  },
  {
    title: "One Partner. One Process.",
    desc: "Everything is delivered under one roof — transparent, structured, and engineered for measurable business outcomes."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-0 px-6 relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mb-32">
        
        {/* LEFT: TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            {/* UPDATED: Changed from "Who We Are" to "Why Pixalara" */}
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
              Why Pixalara
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
          
          <div className="text-lg text-gray-400 leading-relaxed mb-8 space-y-6">
            <p>
              Pixalara is a digital-first technology studio specializing in high-performance web platforms, scalable applications, and cloud-native infrastructure.
            </p>
            <p>
              We partner with ambitious brands to design, engineer, and operate systems that are fast, secure, and built to scale — from launch to long-term growth.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: TECH CARDS */}
        <div className="space-y-6">
          
          {/* Velocity Core */}
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

          {/* Secure Core */}
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

          {/* Infinite Scale */}
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

      {/* 2. WHY CHOOSE PIXALARA */}
      <section className="relative z-10 max-w-7xl mx-auto mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Pixalara</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === PREMIUM BLENDING EFFECT === */}
      <div className="h-10" />

      {/* Glow and Gradient Container */}
      <div className="relative w-full h-20">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-purple-900/20 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      </div>

    </main>
  );
}