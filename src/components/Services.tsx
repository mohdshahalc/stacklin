'use client';

import { MouseEvent } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // Subtle 3D tilt
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden" id="services">
      
      {/* Soft background ambient gradient lights */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#00D8FF]/5 filter blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Editorial layout split header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-start select-none relative z-10">
        <div className="lg:col-span-8 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
            Capabilities // What We Do
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[76px] leading-[0.95] tracking-tight">
            Crafting digital <br />
            value through <br />
            code & style.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:pt-20 text-left">
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base border-l border-white/10 pl-6">
            We reject boring grids and templates. We design bespoke visual ecosystems tailored to establish authority for your brand.
          </p>
        </div>
      </div>

      {/* Asymmetric Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        
        {/* Capability Card 1: Visual Storytelling (Col: 7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bento-card md:col-span-7 p-8 sm:p-10 min-h-[420px] cursor-default transition-all duration-300 border border-white/5 hover:border-primary/20 group relative overflow-hidden flex flex-col justify-between"
        >
          {/* Highlight Glow behind card */}
          <div className="absolute inset-0 bg-radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(0, 216, 255, 0.04), transparent 50%) pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 h-full w-full relative z-10">
            {/* Left: Text */}
            <div className="flex flex-col justify-between h-full text-left w-full sm:w-1/2">
              <div>
                <span className="font-mono text-[8px] tracking-[0.25em] text-[#00D8FF] uppercase block mb-3">ART DIRECTION // STYLE</span>
                <h3 className="font-display font-black text-2xl text-white mb-4 group-hover:text-primary transition-colors duration-300">Visual Storytelling</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  Immersive layouts with premium art direction, bespoke typography, and high-end WebGL rendering that capture instant attention.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {['Design System', 'Custom Typography', 'WebGL'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded border border-white/5 bg-white/2 font-mono text-[7px] text-gray-500 uppercase tracking-wide">{t}</span>
                ))}
              </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="relative w-full sm:w-1/2 h-[180px] sm:h-full flex items-center justify-center bg-black/20 rounded-2xl border border-white/5 overflow-hidden p-4 min-h-[180px] sm:min-h-0">
              {/* Swatches */}
              <div className="absolute top-4 left-4 p-2 rounded-xl border border-white/10 bg-[#0E0E0E]/90 backdrop-blur-md flex gap-1.5 shadow-xl">
                <div className="w-3.5 h-3.5 rounded bg-[#050505] border border-white/10" />
                <div className="w-3.5 h-3.5 rounded bg-[#00D8FF]" />
                <div className="w-3.5 h-3.5 rounded bg-white" />
              </div>
              {/* Large Typography Aa */}
              <div className="w-24 h-24 rounded-2xl border border-white/10 bg-[#101010]/80 shadow-2xl flex flex-col justify-center items-center">
                <span className="font-display font-black text-4xl text-white">Aa</span>
                <span className="font-mono text-[6px] text-gray-500 tracking-widest mt-1">INTER DISPLAY</span>
              </div>
              <div className="absolute right-3 bottom-3 font-mono text-[6px] text-gray-600 tracking-wider">GRID_UNIT // 8PX</div>
            </div>
          </div>
        </motion.div>

        {/* Capability Card 2: Creative Engineering (Col: 5) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bento-card md:col-span-5 p-8 sm:p-10 min-h-[420px] cursor-default transition-all duration-300 border border-white/5 hover:border-secondary/20 group relative overflow-hidden flex flex-col justify-between"
        >
          {/* Highlight Glow behind card */}
          <div className="absolute inset-0 bg-radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(93, 124, 255, 0.04), transparent 50%) pointer-events-none" />
          
          <div className="flex flex-col justify-between h-full w-full text-left gap-8 relative z-10">
            {/* Top: Custom Browser Component Showcase */}
            <div className="w-full h-[180px] bg-black/20 rounded-2xl border border-white/5 flex items-center justify-center p-4 relative overflow-hidden shrink-0">
              <div className="w-[180px] flex flex-col gap-2 p-3 rounded-2xl border border-white/10 bg-black/60 shadow-xl">
                <div className="h-5 rounded-lg border border-white/5 bg-white/2 px-2 flex items-center justify-between">
                  <span className="font-mono text-[6px] text-gray-500">const App = () =&gt; ...</span>
                  <div className="w-2 h-2 rounded bg-secondary" />
                </div>
                <div className="flex gap-2">
                  <div className="flex-grow h-5 rounded bg-secondary flex items-center justify-center">
                    <span className="font-display font-black text-[6px] text-white tracking-wider">DEPLOY</span>
                  </div>
                  <div className="flex-grow h-5 rounded border border-white/10 bg-transparent flex items-center justify-center">
                    <span className="font-display font-black text-[6px] text-gray-400 tracking-wider">CANCEL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Text */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <span className="font-mono text-[8px] tracking-[0.25em] text-[#5D7CFF] uppercase block mb-3">DEVELOPMENT // SYSTEM</span>
                <h3 className="font-display font-black text-2xl text-white mb-4 group-hover:text-secondary transition-colors duration-300">Creative Engineering</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  High-performance frontends built with Next.js and robust server systems engineered for maximum stability and speed.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {['Next.js 15', 'TypeScript', 'Tailwind v4'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded border border-white/5 bg-white/2 font-mono text-[7px] text-gray-500 uppercase tracking-wide">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capability Card 3: Motion Design (Col: 5) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bento-card md:col-span-5 p-8 sm:p-10 min-h-[380px] cursor-default transition-all duration-300 border border-white/5 hover:border-primary/20 group relative overflow-hidden flex flex-col justify-between"
        >
          {/* Highlight Glow behind card */}
          <div className="absolute inset-0 bg-radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(0, 216, 255, 0.04), transparent 50%) pointer-events-none" />
          
          <div className="flex flex-col justify-between h-full w-full text-left gap-8 relative z-10">
            {/* Top: SVG Motion Curve */}
            <div className="w-full h-[140px] bg-black/20 rounded-2xl border border-white/5 flex items-center justify-center p-4 relative overflow-hidden shrink-0">
              <svg className="w-32 h-16 text-[#00D8FF]" viewBox="0 0 100 50" fill="none">
                <path d="M 0 50 C 40 50 60 0 100 0" stroke="currentColor" strokeWidth="1.5" />
                <motion.circle 
                  cx="50" cy="25" r="3.5" fill="#00D8FF" 
                  animate={{ cx: [0, 100], cy: [50, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                />
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
              </svg>
              <div className="absolute top-2 right-2 font-mono text-[6px] text-gray-500 tracking-wider">EASE // CUBIC-BEZIER</div>
            </div>

            {/* Bottom: Text */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <span className="font-mono text-[8px] tracking-[0.25em] text-[#00D8FF] uppercase block mb-3">INTERACTION // MOTION</span>
                <h3 className="font-display font-black text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">Motion Design</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  Cinematic scroll-linked timelines, fluid layout flips, and physics-based interactions compiled to feel alive.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {['Framer Motion', 'GSAP', 'Lenis Scroll'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded border border-white/5 bg-white/2 font-mono text-[7px] text-gray-500 uppercase tracking-wide">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capability Card 4: Performance Optimization (Col: 7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="bento-card md:col-span-7 p-8 sm:p-10 min-h-[380px] cursor-default transition-all duration-300 border border-white/5 hover:border-secondary/20 group relative overflow-hidden flex flex-col justify-between"
        >
          {/* Highlight Glow behind card */}
          <div className="absolute inset-0 bg-radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(93, 124, 255, 0.04), transparent 50%) pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 h-full w-full relative z-10">
            {/* Left: Text */}
            <div className="flex flex-col justify-between h-full text-left w-full sm:w-1/2">
              <div>
                <span className="font-mono text-[8px] tracking-[0.25em] text-[#00E5A3] uppercase block mb-3">OPTIMIZATION // SPEED</span>
                <h3 className="font-display font-black text-2xl text-white mb-4 group-hover:text-[#00E5A3] transition-colors duration-300">Performance Audits</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                  Improving bundle optimization, asset caching, and database queries to target sub-second page loads.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {['Lighthouse 100', 'Edge Caching', 'Sub-second delay'].map(t => (
                  <span key={t} className="px-2 py-0.5 rounded border border-white/5 bg-white/2 font-mono text-[7px] text-gray-500 uppercase tracking-wide">{t}</span>
                ))}
              </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="relative w-full sm:w-1/2 h-[140px] sm:h-full flex items-center justify-center bg-black/20 rounded-2xl border border-white/5 overflow-hidden p-4 min-h-[140px] sm:min-h-0">
              {/* Lighthouse circular chart */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(0, 229, 163, 0.05)" strokeWidth="6" fill="transparent" />
                  <motion.circle 
                    cx="50" cy="50" r="40" stroke="#00E5A3" strokeWidth="6" fill="transparent" 
                    strokeDasharray="251"
                    initial={{ strokeDashoffset: 251 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <span className="font-display font-black text-3xl text-white relative z-10">100</span>
              </div>
              <div className="absolute top-2 right-2 font-mono text-[6px] text-[#00E5A3] tracking-widest uppercase">OPTIMIZED</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
