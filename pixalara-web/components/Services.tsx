'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaPaintBrush, FaLayerGroup, FaMobileAlt, FaEnvelope, 
  FaServer, FaBullhorn, FaCloud, FaArrowRight 
} from 'react-icons/fa';

// === DATA ===
const services = [
  {
    title: "Web Design & Development",
    desc: "We don't just build websites; we engineer digital gravity. Experience pixel-perfect design fused with robust code that converts visitors into obsessives.",
    icon: <FaPaintBrush />,
    color: "from-blue-600 to-cyan-400",
    bgPattern: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
    span: "md:col-span-2", 
  },
  {
    title: "Branding & Identity",
    desc: "Your brand is your battlefield. We forge distinct visual identities that cut through the noise.",
    icon: <FaLayerGroup />,
    color: "from-purple-600 to-pink-500",
    bgPattern: "linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)",
    span: "md:col-span-1", 
  },
  {
    title: "App Development",
    desc: "Native iOS & Android ecosystems built for speed. High-performance apps users refuse to delete.",
    icon: <FaMobileAlt />,
    color: "from-red-600 to-orange-500",
    bgPattern: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
    span: "md:col-span-1",
  },
  {
    title: "Domain & Business Mail",
    desc: "Legitimize your presence. Secure enterprise-grade domains and professional Google/Outlook workspaces.",
    icon: <FaEnvelope />,
    color: "from-emerald-500 to-teal-400",
    bgPattern: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
    span: "md:col-span-1",
  },
  {
    title: "Web Hosting",
    desc: "Experience 99.99% uptime with military-grade SSL security and lightning-fast server response times.",
    icon: <FaServer />,
    color: "from-indigo-600 to-blue-500",
    bgPattern: "linear-gradient(30deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
    span: "md:col-span-1",
  },
  {
    title: "Digital Marketing",
    desc: "Stop guessing, start dominating. We deploy data-weaponized SEO and PPC strategies that turn traffic into revenue streams.",
    icon: <FaBullhorn />,
    color: "from-orange-500 to-yellow-400",
    bgPattern: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
    span: "md:col-span-2", 
  },
  {
    title: "Cloud & DevOps",
    desc: "Scalable AWS & Google Cloud infrastructure. CI/CD pipelines for unbreakable reliability.",
    icon: <FaCloud />,
    color: "from-cyan-500 to-blue-500",
    bgPattern: "radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px)",
    span: "md:col-span-1",
  }
];

// === PARALLAX CARD COMPONENT ===
const CreativeCard = ({ title, desc, icon, span, color, bgPattern, index }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const bgX = useTransform(mouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["-20px", "20px"]);
  const contentX = useTransform(mouseX, [-0.5, 0.5], ["10px", "-10px"]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], ["10px", "-10px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // CHANGED: Increased height to min-h-[450px] and increased padding to p-10
      className={`relative group min-h-[450px] rounded-[2.5rem] bg-neutral-900 overflow-hidden border border-white/5 ${span}`}
    >
      
      {/* Background Layers */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute -inset-10 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`w-full h-full bg-gradient-to-br ${color} blur-3xl`} />
      </motion.div>
      <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundImage: bgPattern, backgroundSize: "20px 20px" }} />
      <div className="absolute inset-0 bg-neutral-950/80 group-hover:bg-neutral-950/60 transition-colors duration-500" />

      {/* Content Layer */}
      <motion.div style={{ x: contentX, y: contentY }} className="relative h-full p-10 flex flex-col justify-between z-20">
        <div>
          {/* Bigger Icon Box */}
          <div className="relative w-20 h-20 mb-8">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} blur-md opacity-50 group-hover:opacity-100 transition-opacity`} />
            <div className="relative w-full h-full bg-black rounded-2xl border border-white/10 flex items-center justify-center text-3xl text-white shadow-xl">
              {icon}
            </div>
          </div>

          {/* Bigger Title */}
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight group-hover:scale-[1.02] origin-left transition-transform">
            {title}
          </h3>
          
          {/* Bigger Description */}
          <p className="text-gray-300 text-lg leading-relaxed font-medium group-hover:text-white transition-colors">
            {desc}
          </p>
        </div>

        {/* Bigger Button */}
        <div className="flex items-center gap-4 mt-8">
          <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300`}>
            <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 text-lg" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
            View Service
          </span>
        </div>
      </motion.div>

      <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-[2.5rem] transition-colors duration-500 pointer-events-none`} />
    </motion.div>
  );
};

// === MAIN SECTION ===
export default function Services() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">Evolution.</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">
             The building blocks of your next digital breakthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <CreativeCard key={index} index={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}