'use client';
import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const ROTATION_RANGE = 20; // How much it tilts (degrees)

export default function ServiceCard({ title, desc, icon, index, color }: any) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse position to rotation degrees
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the center of the card
    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;

    x.set(rX * ROTATION_RANGE);
    y.set(rY * ROTATION_RANGE);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-8 border border-white/10 backdrop-blur-md group cursor-pointer"
    >
      {/* 1. Neon Glow Background Effect */}
      <div 
        style={{ transform: "translateZ(0px)" }}
        className={`absolute inset-4 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${color} blur-2xl`} 
      />

      {/* 2. Floating Number (Depth Level 1) */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute top-4 right-6 text-6xl font-black text-white/5 select-none"
      >
        0{index}
      </div>

      {/* 3. Floating Icon (Depth Level 2) */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`mb-6 text-6xl bg-gradient-to-br ${color} bg-clip-text text-transparent w-fit`}
      >
        {icon}
      </div>

      {/* 4. Text Content (Depth Level 3) */}
      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {desc}
        </p>
      </div>

      {/* 5. Button (Depth Level 4) */}
      <div 
        style={{ transform: "translateZ(40px)" }}
        className="absolute bottom-8 left-8"
      >
        <button className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
          Details <span className="text-red-600">→</span>
        </button>
      </div>

    </motion.div>
  );
}