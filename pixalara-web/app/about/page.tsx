'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { FaAward, FaUsers, FaGlobeAmericas, FaRocket } from 'react-icons/fa';

// === STATS DATA ===
const stats = [
  { label: "Years Experience", value: 8, suffix: "+", icon: <FaAward /> },
  { label: "Projects Shipped", value: 150, suffix: "+", icon: <FaRocket /> },
  { label: "Global Clients", value: 40, suffix: "+", icon: <FaGlobeAmericas /> },
  { label: "Team Experts", value: 12, suffix: "", icon: <FaUsers /> },
];

// === COUNTING NUMBER COMPONENT ===
function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Spring physics for smooth counting
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2 // 2 seconds duration
  });

  // Transform number to string (to avoid decimals during count)
  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span className="flex">
      <motion.span ref={ref}>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* 1. HERO: The Manifesto */}
      <section className="relative pt-40 pb-32 px-6 border-b border-white/10 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-400 font-bold tracking-widest uppercase mb-6"
          >
            Who We Are
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter leading-tight"
          >
            We Are the Architects <br />
            of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Digital Future.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-xl text-gray-300 leading-relaxed"
            >
              Pixalara wasn't born in a boardroom. It started with a simple obsession: to destroy the "average." We noticed the web was becoming a sea of sameness—templated sites, boring apps, and safe branding.
            </motion.p>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="text-xl text-gray-400 leading-relaxed"
            >
              We exist to break that mold. We combine aggressive creative strategy with military-grade engineering to build digital empires that don't just exist—they dominate.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. STATS BOARD (With Counting Animation) */}
      <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} 
        />

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors group"
            >
              <div className="text-4xl text-purple-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* THE COUNTING NUMBER */}
              <div className="text-5xl md:text-6xl font-black text-white mb-3 flex justify-center items-center">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VALUES / DNA */}
      <section className="py-32 px-6 border-t border-white/10 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Our <span className="text-cyan-400">DNA.</span></h2>
          <div className="space-y-12">
            {[
              { title: "Obsession with Quality", desc: "Good enough is the enemy of great. We don't ship until it's perfect." },
              { title: "Radical Transparency", desc: "No hidden fees. No tech jargon. Just honest collaboration." },
              { title: "Speed Wins", desc: "In the digital age, slow is dead. We build for velocity and performance." }
            ].map((item, i) => (
              <div key={i} className="border-b border-white/10 pb-12 last:border-0">
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}