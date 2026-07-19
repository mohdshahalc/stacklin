'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed left-0 right-0 mx-auto z-50 rounded-full transition-all duration-500 py-4 px-8 ${
        scrolled
          ? 'top-4 w-[90%] max-w-5xl glass-panel'
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

        {/* Navigation Links */}
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

        {/* CTA Button */}
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
    </motion.nav>
  );
}
