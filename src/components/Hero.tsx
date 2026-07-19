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
      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative select-none">
        {/* Mini Browser Window */}
        <div className="w-[200px] h-[120px] rounded-xl border border-white/10 bg-black/60 shadow-2xl flex flex-col overflow-hidden">
          {/* Browser Bar */}
          <div className="h-4.5 bg-white/5 border-b border-white/5 px-2 flex items-center gap-1 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-24 h-2 rounded bg-white/5 mx-auto" />
          </div>
          {/* Browser Content */}
          <div className="flex-grow p-2.5 flex flex-col gap-2 text-left justify-center">
            {/* Tiny Navbar */}
            <div className="flex justify-between items-center opacity-60">
              <div className="w-5 h-1.5 rounded bg-white/40" />
              <div className="flex gap-1.5">
                <div className="w-2.5 h-1 rounded bg-white/20" />
                <div className="w-2.5 h-1 rounded bg-white/20" />
              </div>
              <div className="w-5 h-1.5 rounded bg-[#00D8FF]/60" />
            </div>
            {/* Tiny Hero */}
            <div className="space-y-1.5 mt-1">
              <div className="w-24 h-2.5 rounded bg-white" />
              <div className="w-16 h-2 rounded bg-white/60" />
            </div>
            {/* Tiny Button */}
            <div className="w-10 h-2.5 rounded bg-[#00D8FF] shrink-0" />
          </div>
        </div>

        {/* Floating Swatches Badge (Overlayed bottom left) */}
        <div className="absolute bottom-2 left-2 p-2 rounded-xl border border-white/10 bg-[#0E0E0E]/90 backdrop-blur-md flex gap-1.5 shadow-xl">
          <div className="w-3.5 h-3.5 rounded bg-[#050505] border border-white/10" />
          <div className="w-3.5 h-3.5 rounded bg-[#00D8FF]" />
          <div className="w-3.5 h-3.5 rounded bg-[#5D7CFF]" />
          <div className="w-3.5 h-3.5 rounded bg-white" />
        </div>

        {/* Floating Typography Badge (Overlayed bottom right) */}
        <div className="absolute top-2 right-2 p-2 rounded-xl border border-white/10 bg-[#0E0E0E]/90 backdrop-blur-md flex items-center gap-2 shadow-xl">
          <span className="font-display font-black text-xs text-white">Aa</span>
          <span className="font-mono text-[6px] text-gray-500 tracking-wider">INTER / 900</span>
        </div>
      </div>
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
      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative select-none">
        {/* UI Elements Stack */}
        <div className="w-[180px] flex flex-col gap-2 p-3 rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
          {/* Input Field Mock */}
          <div className="h-6 rounded-lg border border-white/5 bg-white/2 px-2 flex items-center justify-between">
            <span className="font-mono text-[7px] text-gray-500">enter email...</span>
            <div className="w-2.5 h-2.5 rounded bg-[#5D7CFF]/80" />
          </div>
          {/* Buttons row */}
          <div className="flex gap-2">
            <div className="flex-grow h-6 rounded-lg bg-[#5D7CFF] flex items-center justify-center">
              <span className="font-display font-black text-[7px] text-white tracking-wider">PRIMARY</span>
            </div>
            <div className="flex-grow h-6 rounded-lg border border-white/10 bg-transparent flex items-center justify-center">
              <span className="font-display font-black text-[7px] text-gray-400 tracking-wider">SECONDARY</span>
            </div>
          </div>
        </div>

        {/* Layout Grid Wireframe (Floating top right) */}
        <div className="absolute top-0 right-2 w-[85px] p-2 rounded-xl border border-white/10 bg-[#0E0E0E]/90 backdrop-blur-md flex flex-col gap-1 shadow-xl">
          <span className="font-mono text-[5px] text-gray-500 tracking-wider">LAYOUT_GRID</span>
          <div className="h-2 rounded bg-white/5 border border-dashed border-white/10 text-[5px] font-mono text-center text-gray-600">HEADER</div>
          <div className="h-4 rounded bg-[#5D7CFF]/5 border border-dashed border-[#5D7CFF]/20 text-[5px] font-mono text-center text-gray-400">HERO</div>
          <div className="h-3 rounded bg-white/5 border border-dashed border-white/10 text-[5px] font-mono text-center text-gray-600">SERVICES</div>
        </div>

        {/* Component Status Badge (Floating bottom left) */}
        <div className="absolute bottom-2 left-2 p-2 rounded-xl border border-white/10 bg-[#0E0E0E]/90 backdrop-blur-md flex flex-col gap-1 shadow-xl text-left">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#00E5A3] animate-pulse" />
            <span className="font-mono text-[6px] text-gray-300">COMPONENT_BUILD</span>
          </div>
          <span className="font-mono text-[5px] text-gray-500">OPTIMIZED // 100%</span>
        </div>
      </div>
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
      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative select-none">
        {/* Device stack */}
        <div className="relative w-[190px] h-[105px] flex items-end justify-center gap-2">
          {/* Tablet Frame */}
          <div className="w-[45px] h-[65px] rounded-lg border border-white/10 bg-black/60 shadow-xl p-1 flex flex-col justify-between shrink-0">
            <div className="h-1 bg-white/5 rounded-full" />
            <div className="h-8 bg-white/2 rounded" />
            <div className="h-1 bg-white/5 rounded-full w-2 mx-auto" />
          </div>
          {/* Desktop Frame */}
          <div className="w-[110px] h-[80px] rounded-xl border border-white/10 bg-black/60 shadow-2xl p-1.5 flex flex-col justify-between">
            <div className="h-2 bg-white/5 rounded-md flex justify-between px-1">
              <div className="w-1.5 h-0.8 bg-white/20 rounded-full" />
              <div className="w-2.5 h-0.8 bg-white/20 rounded-full" />
            </div>
            <div className="h-10 bg-white/2 rounded-md" />
            <div className="h-1 bg-white/10 rounded w-8 mx-auto" />
          </div>
          {/* Mobile Frame */}
          <div className="absolute right-0 bottom-0 w-[25px] h-[45px] rounded border border-white/20 bg-black/90 shadow-2xl p-0.5 flex flex-col justify-between">
            <div className="h-0.5 bg-white/20 rounded-full w-2 mx-auto" />
            <div className="h-6 bg-white/5 rounded" />
            <div className="w-1 h-1 rounded-full bg-white/30 mx-auto" />
          </div>
        </div>

        {/* Workflow Flow (Floating top left) */}
        <div className="absolute top-2 left-2 p-2 rounded-xl border border-white/10 bg-[#0E0E0E]/95 backdrop-blur-md flex items-center gap-1.5 shadow-xl">
          <div className="px-1.5 py-0.5 rounded border border-white/10 text-[5px] font-mono text-gray-400">DESIGN</div>
          <span className="text-gray-500 text-[6px]">&rarr;</span>
          <div className="px-1.5 py-0.5 rounded border border-primary/20 text-[5px] font-mono text-primary">DEV</div>
          <span className="text-gray-500 text-[6px]">&rarr;</span>
          <div className="px-1.5 py-0.5 rounded border border-white/10 text-[5px] font-mono text-gray-400">LAUNCH</div>
        </div>
      </div>
    ),
  },
];

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800; // 1.8s
    const incrementTime = Math.max(Math.floor(duration / value), 16);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

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

  const cardVariants = {
    center: {
      x: '-50%',
      y: '0%',
      scale: isMobile ? 1.05 : 1.22,
      rotate: 0,
      filter: 'blur(0px)',
      opacity: 1,
      zIndex: 20,
    },
    left: {
      x: isMobile ? '-140%' : '-150%',
      y: '10%',
      scale: 0.85,
      rotate: -6,
      filter: 'blur(3px)',
      opacity: 0.45,
      zIndex: 10,
    },
    right: {
      x: isMobile ? '40%' : '50%',
      y: '10%',
      scale: 0.85,
      rotate: 6,
      filter: 'blur(3px)',
      opacity: 0.45,
      zIndex: 10,
    },
    back: {
      x: '-50%',
      y: '15%',
      scale: 0.7,
      rotate: 0,
      filter: 'blur(6px)',
      opacity: 0,
      zIndex: 5,
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
          <h1 className="font-display font-black text-[clamp(42px,11vw,104px)] leading-[0.88] tracking-tighter mb-10 text-left">
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
                <motion.div 
                  key={slide.id}
                  variants={cardVariants}
                  animate={role}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -60) {
                      navigate('next');
                    } else if (info.offset.x > 60) {
                      navigate('prev');
                    }
                  }}
                  className="absolute w-full h-[90%] rounded-3xl p-8 border flex flex-col justify-between cursor-grab active:cursor-grabbing bg-black/10 backdrop-blur-md"
                  style={{ 
                    left: '50%',
                    bottom: '5%',
                    transformOrigin: 'bottom center',
                    borderColor: role === 'center' ? `${slide.accent}40` : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: role === 'center' ? `0 20px 40px -10px ${slide.accent}0a` : 'none'
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
                  <div 
                    className="flex justify-between items-center border rounded-xl p-3.5 bg-black/20 backdrop-blur-sm"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <div>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">MODULE</p>
                      <h4 className="text-white font-display font-black text-sm tracking-tight mt-1">{slide.title}</h4>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-gray-400">{slide.id}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Premium Statistics Block */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 my-8 border-y border-white/5 w-full">
        {[
          { value: 150, suffix: '+', label: 'PROJECTS DELIVERED' },
          { value: 98, suffix: '%', label: 'CLIENT SATISFACTION' },
          { value: 12, suffix: '+', label: 'COUNTRIES IN NETWORK' },
          { value: 5, suffix: '+', label: 'YEARS OF CRAFTSMANSHIP' }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-start text-left">
            <span className="font-display font-black text-3xl md:text-4xl text-white flex items-baseline">
              <Counter value={stat.value} />
              <span className="text-primary ml-0.5">{stat.suffix}</span>
            </span>
            <span className="font-mono text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest mt-2">
              {stat.label}
            </span>
          </div>
        ))}
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
