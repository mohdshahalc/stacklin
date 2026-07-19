'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed left-0 right-0 mx-auto z-50 rounded-full transition-all duration-500 py-4 px-6 md:px-8 ${
          scrolled
            ? 'top-4 w-[92%] max-w-5xl glass-panel'
            : 'top-6 w-[95%] max-w-6xl bg-transparent border border-transparent'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Brand Logo */}
          <a href="#" className="magnetic-target flex items-center gap-3 hover:opacity-85 transition-opacity">
            <svg className="w-6 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(0,216,255,0.4)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140 60C140 45 125 30 100 30C75 30 60 45 60 60C60 75 80 85 105 95C135 107 145 120 145 140C145 165 125 180 100 180C70 180 55 160 55 140" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
            </svg>
            <span className="font-display font-black text-base tracking-[0.2em] text-white uppercase">STACKLIN</span>
          </a>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex gap-8 items-center">
            {['Work', 'Services', 'Process', 'About', 'Insights', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link magnetic-target font-display text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors duration-300 relative py-1"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="magnetic-target relative flex items-center justify-center py-2 px-5 rounded-full border border-primary/30 hover:border-primary/80 transition-colors duration-300 overflow-hidden group interactive-hover"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="font-display text-[9px] tracking-[0.2em] uppercase font-semibold text-white relative z-10">
                Book Discovery Call
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center p-2 text-white magnetic-target cursor-pointer hover:opacity-85 transition-opacity"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Slide Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#050505]/98 backdrop-blur-3xl z-[999] flex flex-col justify-between p-8 pt-24"
          >
            {/* Top Logo / Close bar */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(0,216,255,0.4)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M140 60C140 45 125 30 100 30C75 30 60 45 60 60C60 75 80 85 105 95C135 107 145 120 145 140C145 165 125 180 100 180C70 180 55 160 55 140" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
                </svg>
                <span className="font-display font-black text-base tracking-[0.2em] text-white uppercase">STACKLIN</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white cursor-pointer hover:bg-white/5 transition-colors duration-200"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Navigation Links */}
            <div className="flex flex-col gap-5 items-start justify-center flex-grow pl-4 mt-8">
              {['Work', 'Services', 'Process', 'About', 'Insights', 'Contact'].map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-display font-black text-4xl sm:text-5xl text-gray-500 hover:text-white transition-colors duration-300 relative py-1 text-left flex items-baseline"
                >
                  <span className="text-primary text-[11px] font-mono mr-3.5">0{i+1}.</span>
                  {link.toUpperCase()}
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions / Info */}
            <div className="border-t border-white/5 pt-8 pl-4 flex flex-col gap-6 text-left">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full max-w-md py-4.5 px-6 rounded-full bg-[#5D5FEF] text-white font-display text-[9px] font-black tracking-widest uppercase hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-secondary/10 flex items-center justify-center gap-2"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
              <div className="flex gap-6 font-mono text-[8px] text-gray-500 uppercase tracking-widest">
                <span>EST. // 2024</span>
                <span>STATUS // OPEN FOR PROJECTS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
