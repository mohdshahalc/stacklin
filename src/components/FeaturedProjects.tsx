'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'Horology Vault',
    narrative: 'A luxury WebGL exhibition showcasing high-end horological artifacts with real-time physics and custom shader refractions.',
    category: 'LUXURY E-COMMERCE & WEBGL PLATFORM',
    image: '/images/horology_vault.png',
    link: '#',
    year: '2025',
    glow: 'rgba(93, 124, 255, 0.15)', // Blue
    techs: ['Next.js', 'WebGL', 'Three.js', 'GLSL']
  },
  {
    id: '02',
    title: 'Nova Capital',
    narrative: 'An enterprise fintech platform mapping transactional logistics and user flows with sub-second speeds and advanced caching.',
    category: 'FINTECH SAAS PLATFORM & STRATEGY',
    image: '/images/nova_capital.png',
    link: '#',
    year: '2024',
    glow: 'rgba(168, 85, 247, 0.15)', // Purple
    techs: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: '03',
    title: 'Synapse AI',
    narrative: 'An AI engine processing neural embeddings and semantic classifications mapped onto custom high-performance dashboard interfaces.',
    category: 'VECTOR INTELLIGENCE & LLM PIPELINE',
    image: '/images/horology_vault.png', // Fallback to existing asset for safety
    link: '#',
    year: '2025',
    glow: 'rgba(0, 216, 255, 0.15)', // Cyan
    techs: ['Python', 'Next.js', 'Pinecone', 'OpenAI API']
  },
  {
    id: '04',
    title: 'Aura Studio',
    narrative: 'A design exhibition utilizing dynamic scrolling viewport bounds, fluid micro-interactions, and premium letterform layouts.',
    category: 'CREATIVE BRANDING & MOTION PLATFORM',
    image: '/images/nova_capital.png', // Fallback to existing asset for safety
    link: '#',
    year: '2024',
    glow: 'rgba(234, 179, 8, 0.12)', // Gold
    techs: ['Vite', 'GSAP', 'Framer Motion', 'Tailwind CSS']
  },
  {
    id: '05',
    title: 'Emerald Carbon',
    narrative: 'A decentralized registry certifying climate contributions and carbon tracking indices on ledger architectures.',
    category: 'GREEN ENERGY CLIMATE REGISTRY',
    image: '/images/horology_vault.png', // Fallback to existing asset for safety
    link: '#',
    year: '2025',
    glow: 'rgba(0, 229, 163, 0.15)', // Emerald
    techs: ['React', 'GraphQL', 'Rust', 'Solana Ledger']
  }
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travelDistance, setTravelDistance] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const updateDimensions = () => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const distance = Math.max(0, trackWidth - viewportWidth);
      setTravelDistance(distance);
      setWindowHeight(viewportHeight);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    const timer = setTimeout(updateDimensions, 600);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  // Map vertical scroll progress to exact pixel horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -travelDistance]);
  
  // Track active project index (1 to 5) for progress bar
  const progressIndex = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const [activeProject, setActiveProject] = useState(1);

  useEffect(() => {
    const unsubscribe = progressIndex.on('change', (latest) => {
      setActiveProject(Math.min(Math.max(Math.round(latest), 1), 5));
    });
    return () => unsubscribe();
  }, [progressIndex]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full" 
      id="work"
      style={{
        height: travelDistance ? `${travelDistance + windowHeight}px` : '400vh'
      }}
    >
      
      {/* DESKTOP STICKY SCROLL EXPERIENCE */}
      <div className="hidden md:block sticky top-0 h-screen w-full overflow-hidden bg-[#050505] z-10">
        
        {/* Ambient Project background glow */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] filter blur-[150px] rounded-full opacity-30 transition-all duration-1000 pointer-events-none z-0" 
          style={{ backgroundColor: PROJECTS[activeProject - 1].glow }}
        />

        <div className="h-full flex flex-col justify-between py-12 relative z-10 max-w-7xl mx-auto px-12">
          
          {/* Header row */}
          <div className="text-left select-none shrink-0">
            <span className="font-mono text-[9px] tracking-[0.3em] text-secondary uppercase mb-2 block">
              Selected Portfolio // Case Studies
            </span>
            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Horizontal projects track */}
          <div className="flex-grow flex items-center overflow-visible select-none">
            <motion.div 
              ref={trackRef}
              style={{ x }} 
              className="flex gap-16 items-center w-max pr-[20vw]"
            >
              {PROJECTS.map((project, i) => (
                <div
                  key={project.title}
                  className="w-[70vw] lg:w-[75vw] max-w-[1100px] h-[48vh] lg:h-[52vh] flex flex-row rounded-3xl border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-md overflow-hidden shrink-0 group relative hover:border-white/10 transition-all duration-500 shadow-2xl"
                  style={{
                    borderColor: activeProject === i + 1 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)'
                  }}
                >
                  {/* Image Column (60%) */}
                  <div className="w-[60%] h-full relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-[1.03] filter brightness-[0.85] group-hover:brightness-95 saturate-[1.02]"
                    />
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />
                  </div>

                  {/* Text Column (40%) */}
                  <div className="w-[40%] h-full p-8 lg:p-10 flex flex-col justify-between text-left relative z-10 border-l border-white/5">
                    {/* Top Row: Year */}
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[9px] text-gray-500 tracking-widest">{project.year} // COMPLETED</span>
                      <span className="font-mono text-[9px] text-[#00D8FF] tracking-wider font-bold">CASE_0{project.id}</span>
                    </div>

                    {/* Middle Content */}
                    <div>
                      <span className="font-mono text-[8px] tracking-[0.2em] text-[#5D7CFF] uppercase block mb-2">{project.category}</span>
                      <h3 className="font-display font-black text-2xl lg:text-3xl text-white mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                        {project.narrative}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.techs.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-0.5 rounded border border-white/5 bg-white/2 font-mono text-[7px] text-gray-400 uppercase tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: CTA Button */}
                    <a
                      href={project.link}
                      className="group flex items-center justify-between py-3.5 px-5 rounded-full border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300 shrink-0 w-full"
                    >
                      <span className="font-display text-[8px] tracking-[0.2em] uppercase font-bold text-gray-300 group-hover:text-white">
                        Explore Case Study
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Footer Controls: Progress indicator */}
          <div className="flex justify-between items-center border-t border-white/5 pt-8 shrink-0">
            <div className="font-mono text-[8px] text-gray-500 tracking-[0.25em] uppercase flex items-center gap-6">
              <span>PROJECT // 0{activeProject} OF 05</span>
              {/* Simple progress line */}
              <div className="w-32 h-[1px] bg-white/10 relative rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-[#00D8FF] transition-all duration-300"
                  style={{ width: `${(activeProject / 5) * 100}%` }}
                />
              </div>
            </div>
            <div className="font-mono text-[8px] text-gray-500 tracking-[0.2em] uppercase">
              SCROLL DOWN TO NAVIGATE &rarr;
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE VERTICAL FALLBACK (No horizontal scroll, clean stack) */}
      <div className="md:hidden py-24 px-6 flex flex-col gap-12 w-full select-none bg-[#050505]">
        
        {/* Header mobile */}
        <div className="text-left select-none mb-4">
          <span className="font-mono text-[8px] tracking-[0.3em] text-secondary uppercase mb-2 block">
            Selected Portfolio // Case Studies
          </span>
          <h2 className="font-display font-black text-3xl leading-tight tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Stacked Cards */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="w-full rounded-3xl border border-white/5 bg-[#0E0E0E]/60 backdrop-blur-md overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Top Image (60vh or aspect) */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover filter brightness-[0.9]"
                />
                <div className="absolute top-4 right-4 bg-black/60 border border-white/10 px-3 py-1 rounded-full text-[8px] font-mono text-gray-300">
                  {project.year}
                </div>
              </div>

              {/* Bottom text */}
              <div className="p-6 flex flex-col gap-4 text-left">
                <div>
                  <span className="font-mono text-[7px] tracking-[0.2em] text-[#5D7CFF] uppercase block mb-1">{project.category}</span>
                  <h3 className="font-display font-black text-xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2.5 font-sans">
                    {project.narrative}
                  </p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.techs.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 rounded border border-white/5 bg-white/2 font-mono text-[6px] text-gray-400 uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button mobile */}
                <a
                  href={project.link}
                  className="flex items-center justify-between py-3 px-4 rounded-full border border-white/5 bg-white/2 text-[8px] font-display font-black tracking-widest uppercase text-white mt-4"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
