'use client'; // <--- THIS LINE IS CRITICAL (Must be at the very top)
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden group"
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Transform</span> Your Digital Presence?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the forward-thinking brands that are scaling faster with Pixalara’s design and engineering expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow"
              >
                <FaRocket className="text-purple-600" />
                Start Your Project
              </motion.button>
            </Link>
            
            <Link href="/work">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                View Our Work <FaArrowRight />
              </motion.button>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}