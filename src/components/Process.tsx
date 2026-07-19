'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROCESS_STEPS = [
  {
    phase: '01',
    name: 'Discovery & Research',
    description: 'We align on business goals, research user personas, identify technical constraints, and define the complete scope.',
  },
  {
    phase: '02',
    name: 'Strategy & Architecture',
    description: 'We draft the technology stack, outline the database models, configure security protocols, and map user flows.',
  },
  {
    phase: '03',
    name: 'Editorial UI/UX Design',
    description: 'We create custom design tokens, layout wireframes, high-fidelity mockups, and interactive motion prototypes.',
  },
  {
    phase: '04',
    name: 'Premium Engineering',
    description: 'We build structured clean code with Next.js, configure robust database models, APIs, and fluid animations.',
  },
  {
    phase: '05',
    name: 'Launch & Optimization',
    description: 'We deploy to serverless caching layers, execute security penetration checks, and optimize Lighthouse performance.',
  },
  {
    phase: '06',
    name: 'Scale & Support',
    description: 'We track real-time logs, resolve updates, configure backups, and plan feature iterations for product growth.',
  },
];

export default function Process() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12" id="process">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Sticky Left Column: Large glowing orbital graphic */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-8 text-left">
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

          {/* Large Abstract Glowing Orbital Graphic */}
          <div className="relative w-72 h-72 rounded-3xl border border-white/5 bg-card/40 flex items-center justify-center overflow-hidden select-none mt-4">
            <div className="absolute w-48 h-48 bg-[#00D8FF]/5 filter blur-[60px] rounded-full pointer-events-none" />
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="w-44 h-44 text-secondary opacity-60"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 8" />
              <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" />
              <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle cx="100" cy="50" r="5" fill="#00D8FF" />
            </motion.svg>
            <div className="absolute font-mono text-[9px] text-gray-500 tracking-widest uppercase">
              PHASE ENGINE
            </div>
          </div>
        </div>

        {/* Scrolling Right Column: Step Cards with vertical timeline */}
        <div ref={scrollRef} className="lg:col-span-7 relative pl-8 sm:pl-16 space-y-8">
          
          {/* Vertical timeline track line */}
          <div className="absolute left-[15px] sm:left-[30px] top-6 bottom-6 w-[1.5px] bg-white/5 pointer-events-none rounded-full" />
          
          {/* Animated active vertical line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-[15px] sm:left-[30px] top-6 bottom-6 w-[1.5px] bg-primary pointer-events-none rounded-full origin-top"
          />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="p-8 rounded-2xl border border-white/5 bg-card hover:border-white/10 transition-colors duration-300 flex items-start gap-6 relative group"
            >
              {/* Highlight line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00D8FF] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />
              
              {/* Floating Node Bullet Indicator on timeline track */}
              <div className="absolute left-[-23px] sm:left-[-41px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-full bg-card border-2 border-white/10 group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-transparent group-hover:bg-primary transition-colors duration-300" />
              </div>

              <span 
                className="font-display font-black text-4xl text-transparent tracking-tighter shrink-0 select-none"
                style={{ WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)' }}
              >
                {step.phase}
              </span>
              <div className="text-left">
                <h3 className="font-display font-black text-lg text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
