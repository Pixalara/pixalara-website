'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// === PROJECT DATA (With Real Image Placeholders) ===
const allProjects = [
  {
    id: 1,
    title: "Nebula Stream",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Tech/Dashboard look
    description: "A futuristic streaming platform dashboard."
  },
  {
    id: 2,
    title: "Apex Fitness",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop", // Gym/Phone
    description: "Workout tracking with AI integration."
  },
  {
    id: 3,
    title: "Lumina Bank",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1565514020176-dbf2277e4952?q=80&w=2670&auto=format&fit=crop", // Clean Abstract
    description: "Rebranding a global fintech giant."
  },
  {
    id: 4,
    title: "Velocita",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop", // Car/Speed
    description: "High-performance automotive e-commerce."
  },
  {
    id: 5,
    title: "EcoHome",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2671&auto=format&fit=crop", // Smart Home
    description: "IoT control for smart sustainable homes."
  },
  {
    id: 6,
    title: "Urban Coffee",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop", // Coffee Cup
    description: "Visual identity for a luxury coffee chain."
  }
];

const categories = ["All", "Web Design", "App Development", "Branding"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-black min-h-screen pt-40 px-6 pb-32">
      
      {/* 1. HEADER */}
      <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-bold text-white mb-6 tracking-tighter"
        >
          Selected <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Works.
          </span>
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A collection of digital experiences engineered for growth.
        </p>
      </div>

      {/* 2. FILTER TABS */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all ${
              activeCategory === cat 
              ? 'bg-white text-black border-white' 
              : 'bg-transparent text-gray-500 border-white/10 hover:border-white hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. PROJECT GRID */}
      <motion.div 
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group cursor-pointer relative"
            >
              {/* IMAGE CARD */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/10">
                {/* Real Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Hover Reveal Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                    View Case Study <FaArrowRight />
                  </div>
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
                {/* Category Tag */}
                <span className="text-xs font-bold text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full uppercase tracking-widest bg-cyan-400/10">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </main>
  );
}