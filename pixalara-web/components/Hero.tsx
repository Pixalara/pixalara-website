'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Lock scrolling when the site loads
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden'; // Freeze scrolling
    } else {
      document.body.style.overflow = 'unset'; // Enable scrolling after entry
    }
  }, [hasEntered]);

  const handleEnter = () => {
    setHasEntered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* === 1. PREMIUM ENTRY OVERLAY (FIXED POSITION) === */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            // CHANGED: 'fixed' instead of 'absolute' covers the whole window
            // CHANGED: 'z-[9999]' ensures it is on top of EVERYTHING
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center cursor-pointer"
            onClick={handleEnter}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold mb-2 tracking-tighter">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
    PIXALARA
  </span>
</h1>
{/* Optional: Add your slogan below the title */}
<p className="text-gray-300 text-lg tracking-widest uppercase mb-8">
  Your Vision, Our Creation.
</p>
              <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-8">
                Digital Experience Agency
              </p>
              
              <button 
                className="group flex items-center gap-3 mx-auto border border-white/20 px-8 py-3 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                <span className="text-sm font-bold tracking-widest uppercase">Enter Site</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* === 2. MAIN HERO CONTENT === */}
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
        <video 
          ref={videoRef}
          loop 
          muted={false}
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Text Content (Only renders after entering) */}
      {hasEntered && (
        <>
          <div className="relative z-20 text-center px-4 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter leading-tight mb-6"
            >
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
                DIGITAL EMPIRES
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            >
              Pixalara transforms businesses with cutting-edge web design, branding, and motion-first development.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/30"
            >
              Get Started
            </motion.button>
          </div>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={toggleAudio}
            className="absolute bottom-10 right-10 z-30 bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/20 transition-all border border-white/20 group"
          >
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </motion.button>
        </>
      )}
    </section>
  );
}