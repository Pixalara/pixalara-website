'use client';
import { motion } from 'framer-motion';
import { 
  SiVercel, SiSupabase, SiNextdotjs, SiTailwindcss, 
  SiPrisma, SiStripe, SiLinear, SiNotion 
} from 'react-icons/si';

// Modern Startup Stack Logos
const brands = [
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Stripe", icon: <SiStripe /> },
  { name: "Linear", icon: <SiLinear /> },
  { name: "Notion", icon: <SiNotion /> },
];

export default function BrandMarquee() {
  return (
    <section className="pt-20 pb-2 bg-black overflow-hidden relative border-t border-white/5">
      
      <div className="text-center mb-10 px-4">
        <p className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase">
          Powering Next-Gen Startups
        </p>
      </div>

      {/* Gradient Masks for Fade Effect */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee Container */}
      <div className="flex">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 pr-16 whitespace-nowrap"
        >
          {/* Render Logos Twice to Create Seamless Loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className={`
                flex items-center gap-3 text-4xl transition-all duration-500 cursor-pointer group
                active:scale-95 
                
                /* === MOBILE: ALWAYS VISIBLE === */
                text-white

                /* === DESKTOP: DIMMED DEFAULT, GLOW ON HOVER === */
                md:text-gray-800 md:hover:text-white
              `}
            >
              <span className={`
                transition-colors
                /* Mobile: Always Cyan */
                text-cyan-400 
                /* Desktop: Inherit -> Cyan on Hover */
                md:text-inherit md:group-hover:text-cyan-400
              `}>
                {brand.icon}
              </span>
              
              <span className={`
                text-lg font-bold font-mono transition-opacity duration-300 -ml-2
                /* Mobile: Always Visible */
                opacity-100
                /* Desktop: Hidden -> Visible on Hover */
                md:opacity-0 md:group-hover:opacity-100
              `}>
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}