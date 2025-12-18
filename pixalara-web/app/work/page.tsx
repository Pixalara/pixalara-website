'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

// === PROJECT DATA (You can change these later) ===
const projects = [
  {
    id: 1,
    title: "Neon Fintech",
    category: "App Development",
    desc: "A next-gen banking interface built for the crypto-native generation. Features real-time visualization and biometric security.",
    gradient: "from-blue-600 to-cyan-400", // Placeholder for image
  },
  {
    id: 2,
    title: "Aura E-Commerce",
    category: "Web Design",
    desc: "A luxury fashion marketplace with immersive 3D product previews and AI-driven recommendations.",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    id: 3,
    title: "Orbital Dashboard",
    category: "SaaS Platform",
    desc: "Enterprise analytics platform processing millions of data points per second with zero latency.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Zenith Health",
    category: "Mobile App",
    desc: "Telemedicine app connecting patients to specialists in under 60 seconds. HIPAA compliant and secure.",
    gradient: "from-emerald-500 to-teal-400",
  }
];

export default function WorkPage() {
  return (
    // NO bg-black here -> Global Gradient shows through
    <main className="min-h-screen pt-40 pb-20 px-6">
      
      {/* === HEADER === */}
      <div className="max-w-7xl mx-auto mb-32 text-center md:text-left">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 font-bold tracking-widest uppercase mb-4"
        >
          Selected Works
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter"
        >
          MADE BY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            PIXALARA.
          </span>
        </motion.h1>
      </div>

      {/* === PROJECTS GRID === */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            {/* Project Card / Image Placeholder */}
            {/* Using a Gradient Div instead of Image for now so it doesn't break */}
            <div className={`w-full h-[400px] md:h-[500px] rounded-[2rem] bg-gradient-to-br ${project.gradient} relative overflow-hidden mb-8 border border-white/10 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500`}>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study <FaExternalLinkAlt />
                 </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg max-w-md">{project.desc}</p>
              </div>
              <span className="hidden md:block text-sm font-bold text-gray-500 border border-white/10 px-4 py-2 rounded-full uppercase tracking-widest">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === BOTTOM CTA === */}
      <div className="mt-40 text-center">
        <h2 className="text-3xl text-white mb-8">Have a project in mind?</h2>
        <button className="border border-white/20 text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all font-bold tracking-widest uppercase">
          Let's Build It
        </button>
      </div>

    </main>
  );
}