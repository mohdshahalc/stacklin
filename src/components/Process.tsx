'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const PROCESS_STEPS = [
  {
    phase: '01',
    name: 'Discovery & Research',
    description: 'We align on business goals, research user personas, identify technical constraints, and define the complete scope.',
    accent: '#00D8FF',
    svg: (
      <svg className="w-12 h-12 text-[#00D8FF]" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="25" width="60" height="50" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="48" cy="46" r="12" stroke="#00D8FF" strokeWidth="1.5" fill="#050505" />
        <line x1="56" y1="54" x2="68" y2="66" stroke="#00D8FF" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    phase: '02',
    name: 'Strategy & Architecture',
    description: 'We draft the technology stack, outline the database models, configure security protocols, and map user flows.',
    accent: '#5D7CFF',
    svg: (
      <svg className="w-12 h-12 text-[#5D7CFF]" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="42" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <rect x="67" y="22" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <rect x="67" y="62" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M33 51 H50 V31 H67 M50 51 V71 H67" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    phase: '03',
    name: 'Editorial UI/UX Design',
    description: 'We create custom design tokens, layout wireframes, high-fidelity mockups, and interactive motion prototypes.',
    accent: '#00E5A3',
    svg: (
      <svg className="w-12 h-12 text-[#00E5A3]" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="28" width="60" height="44" rx="4" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="28" cy="35" r="1.5" fill="currentColor" />
        <circle cx="34" cy="35" r="1.5" fill="currentColor" />
        <circle cx="35" cy="54" r="5" fill="#00D8FF" />
        <circle cx="50" cy="54" r="5" fill="#5D7CFF" />
        <circle cx="65" cy="54" r="5" fill="#00E5A3" />
      </svg>
    )
  },
  {
    phase: '04',
    name: 'Premium Engineering',
    description: 'We build structured clean code with Next.js, configure robust database models, APIs, and fluid animations.',
    accent: '#00D8FF',
    svg: (
      <svg className="w-12 h-12 text-[#00D8FF]" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="25" width="60" height="50" rx="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 35 45 L 28 50 L 35 55 M 65 45 L 72 50 L 65 55" stroke="currentColor" strokeWidth="1.2" />
        <line x1="53" y1="42" x2="47" y2="58" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    phase: '05',
    name: 'Launch & Optimization',
    description: 'We deploy to serverless caching layers, execute security penetration checks, and optimize Lighthouse performance.',
    accent: '#00E5A3',
    svg: (
      <svg className="w-12 h-12 text-[#00E5A3]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M42 50 L48 56 L58 44" stroke="#00E5A3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    phase: '06',
    name: 'Scale & Support',
    description: 'We track real-time logs, resolve updates, configure backups, and plan feature iterations for product growth.',
    accent: '#5D7CFF',
    svg: (
      <svg className="w-12 h-12 text-[#5D7CFF]" viewBox="0 0 100 100" fill="none">
        <path d="M25 70 A 30 30 0 1 1 75 70" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="50" y1="50" x2="65" y2="35" stroke="#5D7CFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </svg>
    )
  },
];

export default function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Left Column 3D Tilt spring variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  const handleMouseMoveCenter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xVal = (e.clientX - rect.left - width / 2) / (width / 2);
    const yVal = (e.clientY - rect.top - height / 2) / (height / 2);
    mouseX.set(xVal * 10); // max 10deg tilt
    mouseY.set(yVal * -10);
  };

  const handleMouseLeaveCenter = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden" id="process">
      
      {/* Soft background ambient gradient lights */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#00D8FF]/5 filter blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#5D7CFF]/5 filter blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Column: 3D Isometric glass centerpiece */}
        <div 
          onMouseMove={handleMouseMoveCenter}
          onMouseLeave={handleMouseLeaveCenter}
          className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-8 text-left z-10"
        >
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
              Workflows // Execution
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Our Process
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm">
            We follow a structured design and engineering pipeline, ensuring complete transparency and pixel-perfect delivery at every phase.
          </p>

          {/* 3D Isometric Glass Stack Centerpiece */}
          <motion.div 
            style={{ 
              rotateX: 55, 
              rotateY: 0, 
              rotateZ: -45, 
              transformStyle: 'preserve-3d', 
              x: springX, 
              y: springY 
            }}
            className="relative w-64 h-64 mx-auto flex items-center justify-center select-none mt-8 cursor-default hidden lg:flex"
          >
            {/* Bottom Layer: Grid blueprint frame */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-52 h-52 border border-white/5 rounded-3xl bg-transparent flex items-center justify-center opacity-40 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
              style={{ transform: 'translateZ(-40px)' }}
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
            </motion.div>

            {/* Middle Layer: Glass nodes network */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute w-48 h-48 border border-[#00D8FF]/10 rounded-3xl bg-white/[0.01] backdrop-blur-sm flex items-center justify-center opacity-70"
              style={{ transform: 'translateZ(0px)' }}
            >
              <svg className="w-20 h-20 text-[#00D8FF] opacity-60" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="1" />
                <circle cx="20" cy="30" r="4" fill="currentColor" />
                <circle cx="80" cy="70" r="4" fill="currentColor" />
                <line x1="24" y1="34" x2="36" y2="46" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="76" y1="66" x2="64" y2="54" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </motion.div>

            {/* Top Layer: Glowing Active core interface */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute w-44 h-44 border border-[#5D7CFF]/20 rounded-3xl bg-[#101010]/80 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-2xl"
              style={{ transform: 'translateZ(40px)' }}
            >
              <span className="font-display font-black text-2xl text-white tracking-widest">FLOW</span>
              <span className="font-mono text-[7px] text-gray-500 tracking-[0.2em] uppercase mt-2">WORKFLOW CORE ENGINE</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Steps Timeline */}
        <div ref={scrollRef} className="lg:col-span-8 relative pl-6 md:pl-0">
          
          {/* Vertical timeline track line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-16 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
          
          {/* Animated active vertical line (Desktop) */}
          <motion.div 
            style={{ scaleY: pathLength }}
            className="absolute left-1/2 -translate-x-1/2 top-6 bottom-16 w-[1.5px] bg-gradient-to-b from-[#00D8FF] via-[#5D7CFF] to-[#00E5A3] pointer-events-none origin-top hidden md:block"
          />

          {/* Straight Timeline Path (Mobile) */}
          <div className="absolute left-[15px] top-6 bottom-6 w-[1px] bg-white/5 pointer-events-none md:hidden" />
          <motion.div 
            style={{ scaleY: pathLength }}
            className="absolute left-[15px] top-6 bottom-6 w-[1.5px] bg-primary pointer-events-none origin-top md:hidden"
          />

          {/* Desktop Layout (2 Columns - Offset Zig-Zag) */}
          <div className="hidden md:grid grid-cols-2 gap-x-16 md:pb-24">
            
            {/* Left Column: Steps 1, 3, 5 */}
            <div className="flex flex-col gap-12">
              {[PROCESS_STEPS[0], PROCESS_STEPS[2], PROCESS_STEPS[4]].map((step, idx) => {
                const stepIdx = idx * 2;
                return (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="w-full p-8 rounded-3xl border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-md transition-all duration-500 flex flex-col items-start gap-4 relative group hover:bg-[#0F0F0F]/80 z-10"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.04)' }}
                  >
                    <div className="absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ borderColor: `${step.accent}30` }} />
                    <div className="absolute top-1/2 -translate-y-1/2 right-[-39px] translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0A0A0A] border border-white/10 group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary transition-colors duration-300" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <span className="font-display font-black text-3xl tracking-tighter shrink-0 select-none opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{ color: step.accent }}>
                        {step.phase}
                      </span>
                      <div className="opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">{step.svg}</div>
                    </div>
                    <div className="text-left mt-2">
                      <h3 className="font-display font-black text-lg text-white mb-2 group-hover:text-primary transition-colors duration-300">{step.name}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Steps 2, 4, 6 (Offset Downwards) */}
            <div className="flex flex-col gap-12 pt-28">
              {[PROCESS_STEPS[1], PROCESS_STEPS[3], PROCESS_STEPS[5]].map((step, idx) => {
                const stepIdx = idx * 2 + 1;
                return (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="w-full p-8 rounded-3xl border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-md transition-all duration-500 flex flex-col items-start gap-4 relative group hover:bg-[#0F0F0F]/80 z-10"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.04)' }}
                  >
                    <div className="absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ borderColor: `${step.accent}30` }} />
                    <div className="absolute top-1/2 -translate-y-1/2 left-[-39px] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0A0A0A] border border-white/10 group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary transition-colors duration-300" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <span className="font-display font-black text-3xl tracking-tighter shrink-0 select-none opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{ color: step.accent }}>
                        {step.phase}
                      </span>
                      <div className="opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300">{step.svg}</div>
                    </div>
                    <div className="text-left mt-2">
                      <h3 className="font-display font-black text-lg text-white mb-2 group-hover:text-primary transition-colors duration-300">{step.name}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Mobile Layout (1 Column Chronological) */}
          <div className="md:hidden flex flex-col gap-8 pb-12">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full p-6 rounded-3xl border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-md flex flex-col items-start gap-4 relative group"
                style={{ borderColor: 'rgba(255, 255, 255, 0.04)' }}
              >
                <div className="absolute left-[-23px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#0A0A0A] border border-white/10 group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary transition-colors duration-300" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-display font-black text-2xl tracking-tighter" style={{ color: step.accent }}>
                    {step.phase}
                  </span>
                  <div>{step.svg}</div>
                </div>
                <div className="text-left">
                  <h3 className="font-display font-black text-base text-white mb-1.5">{step.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
