'use client';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Links Array for cleaner code
 // Add "ABOUT" to the list
  const navLinks = [
    { name: "OUR WORK", href: "/work" },
    { name: "WHAT WE DO", href: "/services" },
    { name: "ABOUT", href: "/about" }, // <--- Added this
    { name: "CAREERS", href: "/careers" },
    { name: "LET'S TALK", href: "/contact" },
  ];

  return (
    <>
      <motion.nav 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 w-full z-50 px-6 md:px-8 py-4 flex justify-between items-center transition-colors duration-300 ${
          scrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tighter cursor-pointer relative z-50">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            PIXALARA
          </span>
        </Link>
        
        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:block">
          <Link href="/quote">
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full font-bold text-sm transition-all">
              REQUEST A QUOTE
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER ICON (Visible on Mobile) */}
        <button 
          className="md:hidden text-white text-2xl relative z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-32 px-6 md:hidden flex flex-col gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold text-white tracking-tight hover:text-purple-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <hr className="border-white/10" />
            
            <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-white text-black py-4 rounded-full font-bold text-lg uppercase tracking-widest">
                Request A Quote
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}