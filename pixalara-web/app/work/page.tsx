'use client';
import { motion } from 'framer-motion';
// FIXED IMPORTS: Separated icons into their correct packages
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaArrowRight, FaClock, FaGraduationCap, FaIndustry, FaCube, FaShapes } from 'react-icons/fa6';
import Link from 'next/link';

// === PROJECT DATA (UPDATED WITH ICONS) ===
const projects = [
  {
    id: 1,
    title: "Pixalara Growth School",
    category: "EdTech Platform",
    desc: "A learning platform focused on DevOps, Cloud, and SRE training with real-world labs, scalable infrastructure, and a performance-first UI.",
    gradient: "from-cyan-500 to-blue-600",
    link: "https://growthschool.pixalara.com",
    status: "live",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "Finetech Power Controls",
    category: "Industrial Website",
    desc: "A corporate website for an electrical and power solutions company, designed for credibility, clarity, and lead generation.",
    gradient: "from-orange-500 to-red-600",
    link: "https://finetechpowercontrols.com",
    status: "live",
    icon: <FaIndustry />,
  },
  {
    id: 3,
    title: "Work in Progress",
    category: "Upcoming Project",
    desc: "We’re currently engineering a new digital platform. Full case study coming soon.",
    gradient: "from-purple-600 to-pink-500",
    status: "wip",
    icon: <FaCube />,
  },
  {
    id: 4,
    title: "Work in Progress",
    category: "Upcoming Project",
    desc: "An exciting new project is under active development. Stay tuned for the launch.",
    gradient: "from-emerald-500 to-teal-400",
    status: "wip",
    icon: <FaShapes />,
  },
];

export default function WorkPage() {
  return (
    // Transparent background so global blue gradient shows
    <main className="min-h-screen pt-24 pb-20 px-6">
      
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
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight mb-8"
        >
          MADE BY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            PIXALARA.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed"
        >
          We don't just build websites. We engineer <span className="text-white font-bold">digital breakthroughs.</span> From immersive 3D worlds to high-frequency fintech dashboards, this is where code meets art.
        </motion.p>
      </div>

      {/* === PROJECTS GRID === */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            className={`group ${project.status === 'live' ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {/* Project Card Container */}
            {/* UPDATED: Changed aspect-[3/2] to aspect-[2/1] for reduced height */}
            <div className={`w-full aspect-[2/1] rounded-[2rem] bg-gradient-to-br ${project.gradient} relative overflow-hidden mb-6 border border-white/10 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500 flex items-center justify-center`}>
              
              {/* 3D Icon Placeholder (Reduced Size) */}
              <div className="text-white/30 text-6xl md:text-8xl drop-shadow-2xl transform group-hover:scale-110 group-hover:text-white/50 transition-all duration-500 relative z-0">
                {project.icon}
              </div>

              {/* Overlay on Hover (CTA Buttons) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                 
                 {/* LIVE PROJECT CTA */}
                 {project.status === 'live' && project.link && (
                   <a 
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
                   >
                      View Live Site <FaExternalLinkAlt />
                   </a>
                 )}

                 {/* WIP PROJECT INDICATOR */}
                 {project.status === 'wip' && (
                   <div className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 cursor-default shadow-lg text-sm md:text-base">
                      Coming Soon <FaClock />
                   </div>
                 )}

              </div>
            </div>

            {/* Project Info */}
            <div className="flex justify-between items-start px-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">{project.desc}</p>
              </div>
              <span className={`hidden md:block text-xs font-bold border px-3 py-1.5 rounded-full uppercase tracking-widest ${project.status === 'wip' ? 'text-gray-500 border-white/10' : 'text-white border-white/30'}`}>
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === BOTTOM CTA === */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl text-white mb-8 font-bold">Have a project in mind?</h2>
        <Link href="/contact">
          <button className="border border-white/20 text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all font-bold tracking-widest uppercase">
            Let's Build It
          </button>
        </Link>
      </div>

    </main>
  );
}