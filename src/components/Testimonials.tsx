'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Elena Vance',
    role: 'VP of Product, Horology Vault',
    quote: 'Working with Stacklin completely changed our digital presence. They took our complex Horology Vault WebGL concept and built a flawless, high-performance experience. Their attention to detail and custom engineering is truly world-class.',
    metric: '+180%',
    label: 'Conversion Uplift',
    category: 'HOROLOGY VAULT CEO',
    portrait: '/images/client_portrait.png',
  },
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    quote: 'Stacklin did not just build a website; they defined our entire engineering roadmap. Our SaaS database queries are now sub-second, and our site loads instantly worldwide. Flawless execution and craftsmanship.',
    metric: '-60%',
    label: 'Database Latency',
    category: 'TECHFLOW FOUNDER',
    portrait: '/images/client_portrait.png',
  },
  {
    name: 'Marcus Thorne',
    role: 'CTO, Apex Creative',
    quote: 'Technical mastery meets visual poetry. The performance of our platform is unparalleled. Our team easily maintains the structured TypeScript code they delivered, allowing us to launch new features instantly.',
    metric: '100/100',
    label: 'Lighthouse Score',
    category: 'APEX CREATIVE CTO',
    portrait: '/images/client_portrait.png',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const navigate = useCallback((targetDir: 'next' | 'prev') => {
    if (targetDir === 'next') {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    } else {
      setDirection(-1);
      setActiveIndex((prev) => (prev + TESTIMONIALS.length - 1) % TESTIMONIALS.length);
    }
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12" id="about">
      {/* Small top tagline */}
      <div className="mb-24 text-center select-none">
        <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
          Endorsements // Client Voices
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">
          Client Testimonials
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Editorial Portrait Magazine Frame */}
        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-card">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Portrait Image */}
              <Image
                src={TESTIMONIALS[activeIndex].portrait}
                alt={`${TESTIMONIALS[activeIndex].name} Portrait`}
                fill
                className="object-cover filter saturate-[1.02] brightness-95"
              />
              
              {/* Subtle editorial text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 select-none text-left">
                <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block mb-1">
                  {TESTIMONIALS[activeIndex].category}
                </span>
                <h4 className="font-display font-black text-2xl text-white">
                  {TESTIMONIALS[activeIndex].name.toUpperCase()}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Dynamic Quote Slide */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-8 pl-0 lg:pl-8 text-left relative min-h-[350px]">
          
          <Quote className="w-12 h-12 text-[#5D5FEF]/20 shrink-0" strokeWidth={1} />

          <div className="overflow-hidden relative w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <blockquote className="font-display font-black text-2xl sm:text-3xl lg:text-[32px] leading-[1.15] text-gray-100 italic">
                  "{TESTIMONIALS[activeIndex].quote}"
                </blockquote>

                <div className="flex flex-col sm:flex-row gap-8 sm:items-center mt-8">
                  <div>
                    <cite className="not-italic font-display font-black text-base text-white block mb-0.5">
                      {TESTIMONIALS[activeIndex].name}
                    </cite>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                      {TESTIMONIALS[activeIndex].role}
                    </span>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-[1px] w-8 bg-white/10 hidden sm:block" />

                  {/* Metrics outcome info */}
                  <div>
                    <div className="text-xl font-black font-display text-secondary">{TESTIMONIALS[activeIndex].metric}</div>
                    <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">{TESTIMONIALS[activeIndex].label}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => navigate('prev')}
              className="magnetic-target flex items-center justify-center rounded-full w-12 h-12 border border-white/10 bg-transparent hover:bg-white/5 transition-all duration-150 cursor-pointer"
            >
              <ArrowLeft className="text-white" size={18} strokeWidth={1.75} />
            </button>
            <button 
              onClick={() => navigate('next')}
              className="magnetic-target flex items-center justify-center rounded-full w-12 h-12 border border-white/10 bg-transparent hover:bg-white/5 transition-all duration-150 cursor-pointer"
            >
              <ArrowRight className="text-white" size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
