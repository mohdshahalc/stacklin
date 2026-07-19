'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const SLIDES = [
  {
    id: '01',
    category: 'VISUAL DESIGN // COUTURE',
    title: 'DESIGN',
    subtitle: 'COUTURE',
    desc: 'Visceral visual layouts, custom typography scales, and high-fidelity motion prototypes engineered to command absolute market authority.',
    glow: 'rgba(0, 216, 255, 0.18)',
    accent: '#00D8FF',
    svg: (
      <svg className="w-40 h-40 text-[#00D8FF] opacity-80" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 6" />
        <path d="M30 100 H170 M100 30 V170" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <polygon points="100,20 180,100 100,180 20,100" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: '02',
    category: 'PERFORMANCE // ENGINEERING',
    title: 'CRAFTSMAN',
    subtitle: 'ENGINEERING',
    desc: 'Next.js frontends and robust server systems compiled at sub-second speeds. Strict type safety with zero layout shifts and absolute security.',
    glow: 'rgba(93, 124, 255, 0.18)',
    accent: '#5D7CFF',
    svg: (
      <svg className="w-40 h-40 text-[#5D7CFF] opacity-80" viewBox="0 0 200 200" fill="none">
        <rect x="35" y="35" width="130" height="130" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <rect x="55" y="55" width="90" height="90" rx="6" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
        <line x1="100" y1="35" x2="100" y2="165" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <line x1="35" y1="100" x2="165" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <path d="M100 65 L135 100 L100 135 L65 100 Z" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: '03',
    category: 'INTELLIGENCE // ECOSYSTEM',
    title: 'NEURAL',
    subtitle: 'AI SOLUTIONS',
    desc: 'Vector embedding search, custom neural agent pipelines, and intelligent semantic analysis integrated into clean, low-latency client interfaces.',
    glow: 'rgba(0, 233, 160, 0.15)',
    accent: '#00E5A3',
    svg: (
      <svg className="w-40 h-40 text-[#00E5A3] opacity-80" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="50" r="12" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="150" r="12" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="150" r="12" stroke="currentColor" strokeWidth="1" />
        {/* Connecting network lines */}
        <line x1="62" y1="62" x2="78" y2="78" stroke="currentColor" strokeWidth="1" />
        <line x1="138" y1="62" x2="122" y2="78" stroke="currentColor" strokeWidth="1" />
        <line x1="62" y1="138" x2="78" y2="122" stroke="currentColor" strokeWidth="1" />
        <line x1="138" y1="138" x2="122" y2="122" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="62" x2="50" y2="138" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="150" y1="62" x2="150" y2="138" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay loop that clears and restarts whenever index shifts
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // changes every 5 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    } else {
      setActiveIndex((prev) => (prev + SLIDES.length - 1) % SLIDES.length);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  }, [isAnimating]);

  const getRole = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + SLIDES.length - 1) % SLIDES.length) return 'left';
    if (index === (activeIndex + 1) % SLIDES.length) return 'right';
    return 'back';
  };

  const getStyleForRole = (role: string) => {
    const baseStyle = {
      transition: 'transform 650ms cubic-bezier(0.16, 1, 0.3, 1), filter 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms cubic-bezier(0.16, 1, 0.3, 1), left 650ms cubic-bezier(0.16, 1, 0.3, 1), bottom 650ms cubic-bezier(0.16, 1, 0.3, 1), height 650ms cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'transform, filter, opacity',
    };

    switch (role) {
      case 'center':
        return {
          ...baseStyle,
          transform: `translateX(-50%) scale(${isMobile ? 1.05 : 1.22})`,
          filter: 'blur(0px)',
          opacity: 1,
          zIndex: 20,
          left: '50%',
          height: '100%',
          bottom: '0%',
        };
      case 'left':
        return {
          ...baseStyle,
          transform: 'translateX(-50%) scale(0.85) rotate(-6deg)',
          filter: 'blur(3px)',
          opacity: 0.4,
          zIndex: 10,
          left: isMobile ? '15%' : '20%',
          height: '80%',
          bottom: '5%',
        };
      case 'right':
        return {
          ...baseStyle,
          transform: 'translateX(-50%) scale(0.85) rotate(6deg)',
          filter: 'blur(3px)',
          opacity: 0.4,
          zIndex: 10,
          left: isMobile ? '85%' : '80%',
          height: '80%',
          bottom: '5%',
        };
      default:
        return {
          ...baseStyle,
          transform: 'translateX(-50%) scale(0.7)',
          filter: 'blur(6px)',
          opacity: 0,
          zIndex: 5,
          left: '50%',
          height: '70%',
          bottom: '10%',
        };
    }
  };

  const textVariants = {
    hidden: { y: '110%', rotate: 1 },
    visible: {
      y: 0,
      rotate: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 overflow-hidden select-none">
      {/* Structural grid background overlay */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
      }} />

      {/* Decorative fine technical line */}
      <div className="absolute left-[38%] top-0 bottom-0 w-[1px] bg-white/[0.02] pointer-events-none hidden lg:block" />

      {/* Main composition grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative mt-12 flex-grow">
        
        {/* Left Column: Asymmetrical Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          
          {/* Studio Tag */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/2 mb-8">
            <span className="w-1 h-1 bg-[#00D8FF] rounded-full animate-pulse" style={{ backgroundColor: SLIDES[activeIndex].accent }} />
            <span className="font-mono text-[8px] tracking-[0.3em] text-gray-500 uppercase">
              {SLIDES[activeIndex].category}
            </span>
          </div>

          {/* Giant overlapping Awwwards-style typography */}
          <h1 className="font-display font-black text-[55px] sm:text-[85px] lg:text-[104px] leading-[0.88] tracking-tighter mb-10 text-left">
            <div className="reveal-wrapper">
              <motion.span 
                variants={textVariants} 
                initial="hidden"
                animate="visible"
                className="block text-white"
              >
                STACKLIN
              </motion.span>
            </div>
            <br />
            <div className="reveal-wrapper">
              <motion.span 
                key={`title-2-${activeIndex}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block text-transparent stroke-text"
              >
                {SLIDES[activeIndex].title}
              </motion.span>
            </div>
            <br />
            <div className="reveal-wrapper">
              <motion.span 
                key={`title-3-${activeIndex}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="block text-gradient"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${SLIDES[activeIndex].accent} 0%, #5D7CFF 100%)`
                }}
              >
                {SLIDES[activeIndex].subtitle}
              </motion.span>
            </div>
          </h1>

          {/* Paragraph and CTA grouped asymmetrically */}
          <div className="flex flex-col sm:flex-row gap-8 items-start max-w-xl mt-4">
            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-body text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs text-left"
            >
              {SLIDES[activeIndex].desc}
            </motion.p>

            <div className="shrink-0">
              <a
                href="#contact"
                className="magnetic-target relative flex items-center justify-center h-12 px-6 rounded-full border border-white/10 hover:border-[#00D8FF]/30 bg-white/2 text-white font-display text-[9px] font-bold tracking-[0.2em] uppercase overflow-hidden group interactive-hover"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" style={{ backgroundColor: SLIDES[activeIndex].accent }}></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-1.5">
                  Book Call <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Navigation arrow buttons below details */}
          <div className="flex gap-3 mt-12">
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

        {/* Right Column: 3D Perspective Carousel */}
        <div className="lg:col-span-6 relative w-full h-[380px] lg:h-[500px] flex items-center justify-center z-0 select-none">
          {/* Ambient Glowing Color Orbs (Behind active slide) */}
          <div 
            className="absolute w-[260px] h-[260px] filter blur-[90px] rounded-full z-0 transition-colors duration-700 pointer-events-none" 
            style={{ backgroundColor: SLIDES[activeIndex].glow }}
          />
          
          {/* Carousel Track Container */}
          <div className="relative w-[280px] sm:w-[320px] h-full flex items-center justify-center">
            {SLIDES.map((slide, index) => {
              const role = getRole(index);
              return (
                <div 
                  key={slide.id}
                  className="absolute w-full h-[90%] rounded-3xl p-8 glass-panel border border-white/5 flex flex-col justify-between"
                  style={{ 
                    ...getStyleForRole(role),
                  }}
                >
                  {/* Grid details indicator inside the glass card */}
                  <div className="absolute inset-0 z-[-1] pointer-events-none opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />

                  {/* Top card metadata */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] tracking-wider text-gray-500">
                      SYS_MODE // {slide.id}
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded border text-[8px] font-mono font-bold" 
                      style={{ color: slide.accent, borderColor: `${slide.accent}20`, backgroundColor: `${slide.accent}05` }}
                    >
                      ACTIVE
                    </span>
                  </div>

                  {/* Center rotating geometry visual */}
                  <div className="relative flex-grow flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                      className="relative flex items-center justify-center"
                    >
                      {slide.svg}
                    </motion.div>
                  </div>

                  {/* Bottom details label */}
                  <div className="flex justify-between items-center bg-white/2 border border-white/5 rounded-xl p-3.5 backdrop-blur-md">
                    <div>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">MODULE</p>
                      <h4 className="text-white font-display font-black text-sm tracking-tight mt-1">{slide.title}</h4>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-gray-400">{slide.id}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom status display */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-white/5 pt-8 gap-4 w-full mt-16">
        <div className="flex gap-8 font-mono text-[8px] text-gray-500 tracking-[0.2em] uppercase">
          <span>STATUS // ACCEPTING PROJECTS Q3</span>
          <span>EST. // 2024</span>
        </div>
        <div className="font-mono text-[8px] text-gray-500 tracking-[0.2em] uppercase">
          SCROLL TO EXPLORE &darr;
        </div>
      </div>
    </section>
  );
}
