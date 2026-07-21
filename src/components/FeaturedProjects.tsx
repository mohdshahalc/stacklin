'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'NovaBank',
    narrative: 'Designed and developed a modern digital banking platform focused on seamless money transfers, expense tracking, investment insights, and premium user experience.',
    category: 'FINTECH PLATFORM',
    image: '/images/novabank.png',
    link: '#',
    year: '2025',
    glow: 'rgba(93, 124, 255, 0.15)', // Blue
    techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Framer Motion']
  },
  {
    id: '02',
    title: 'CursorCo',
    narrative: 'A premium agency website built for a web development company specializing in high-performance websites, AI-powered business solutions, and modern digital experiences.',
    category: 'SOFTWARE AGENCY WEBSITE',
    image: '/images/cursorco.png',
    link: '#',
    year: '2024',
    glow: 'rgba(168, 85, 247, 0.15)', // Purple
    techs: ['React', 'Next.js', 'GSAP', 'Three.js', 'Tailwind CSS']
  },
  {
    id: '03',
    title: 'MedFlow',
    narrative: 'A hospital management system enabling appointment booking, patient records, doctor scheduling, analytics dashboards, and secure medical workflows.',
    category: 'HEALTHCARE SAAS',
    image: '/images/medflow.png',
    link: '#',
    year: '2025',
    glow: 'rgba(0, 216, 255, 0.15)', // Cyan
    techs: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS']
  },
  {
    id: '04',
    title: 'EstateOne',
    narrative: 'An immersive real estate platform showcasing premium villas, apartments, interactive property tours, and advanced search experiences.',
    category: 'LUXURY REAL ESTATE',
    image: '/images/estateone.png',
    link: '#',
    year: '2024',
    glow: 'rgba(234, 179, 8, 0.12)', // Gold
    techs: ['Next.js', 'Three.js', 'Mapbox', 'Framer Motion']
  },
  {
    id: '05',
    title: 'ShopVerse',
    narrative: 'A scalable online shopping platform with personalized recommendations, secure checkout, inventory management, and modern shopping experience.',
    category: 'FASHION E-COMMERCE',
    image: '/images/shopverse.png',
    link: '#',
    year: '2025',
    glow: 'rgba(0, 229, 163, 0.15)', // Emerald
    techs: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis']
  },
  {
    id: '06',
    title: 'TravelX',
    narrative: 'A complete travel platform for discovering destinations, booking hotels, planning trips, and managing itineraries.',
    category: 'TRAVEL BOOKING PLATFORM',
    image: '/images/travelx.png',
    link: '#',
    year: '2024',
    glow: 'rgba(249, 115, 22, 0.12)', // Orange
    techs: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API']
  },
  {
    id: '07',
    title: 'LearnSphere',
    narrative: 'An interactive learning platform featuring video courses, quizzes, progress tracking, certifications, and live sessions.',
    category: 'EDTECH PLATFORM',
    image: '/images/learnsphere.png',
    link: '#',
    year: '2025',
    glow: 'rgba(99, 102, 241, 0.15)', // Indigo
    techs: ['Next.js', 'React', 'Node.js', 'Firebase']
  },
  {
    id: '08',
    title: 'FleetOS',
    narrative: 'A fleet management system for real-time vehicle tracking, delivery optimization, route planning, and operational analytics.',
    category: 'LOGISTICS MANAGEMENT',
    image: '/images/fleetos.png',
    link: '#',
    year: '2025',
    glow: 'rgba(239, 68, 68, 0.15)', // Red
    techs: ['React', 'Express', 'MongoDB', 'WebSockets']
  }
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden bg-[#050505]" id="work">
      
      {/* Ambient Project background glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] filter blur-[150px] rounded-full opacity-25 transition-all duration-1000 pointer-events-none z-0" 
        style={{ backgroundColor: PROJECTS[activeProject - 1].glow }}
      />

      <div className="w-full flex flex-col justify-between relative z-10">
        
        {/* Header row */}
        <div className="text-left select-none shrink-0 mb-12">
          <span className="font-mono text-[9px] tracking-[0.3em] text-secondary uppercase mb-2 block">
            Selected Portfolio // Case Studies
          </span>
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* DESKTOP CAROUSEL VIEW (No vertical pinning/trapping) */}
        <div className="hidden md:block overflow-visible select-none my-8">
          <motion.div 
            animate={{ x: `-${(activeProject - 1) * 78}vw` }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            className="flex gap-12 items-center w-max pr-[20vw]"
          >
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                className="w-[72vw] lg:w-[74vw] max-w-[1100px] h-[48vh] lg:h-[52vh] flex flex-row rounded-3xl border border-white/5 bg-[#0A0A0A]/60 backdrop-blur-md overflow-hidden shrink-0 group relative hover:border-white/10 transition-all duration-500 shadow-2xl"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />
                </div>

                {/* Text Column (40%) */}
                <div className="w-[40%] h-full p-8 lg:p-10 flex flex-col justify-between text-left relative z-10 border-l border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-gray-500 tracking-widest">{project.year} // COMPLETED</span>
                    <span className="font-mono text-[9px] text-primary tracking-wider font-bold">CASE_0{project.id}</span>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] tracking-[0.2em] text-[#5D7CFF] uppercase block mb-2">{project.category}</span>
                    <h3 className="font-display font-black text-2xl lg:text-3xl text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">
                      {project.narrative}
                    </p>

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

        {/* MOBILE & TABLET VERTICAL STACK FALLBACK (No horizontal scroll, normal page flow) */}
        <div className="md:hidden flex flex-col gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="w-full rounded-3xl border border-white/5 bg-[#0E0E0E]/60 backdrop-blur-md overflow-hidden flex flex-col shadow-2xl"
            >
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

        {/* Footer controls (Only on Desktop Carousel) */}
        <div className="hidden md:flex justify-between items-center border-t border-white/5 pt-8 mt-8 select-none">
          <div className="font-mono text-[8px] text-gray-500 tracking-[0.25em] uppercase flex items-center gap-6">
            <span>PROJECT // 0{activeProject} OF 08</span>
            <div className="w-32 h-[1px] bg-white/10 relative rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-[#00D8FF] transition-all duration-300"
                style={{ width: `${(activeProject / 8) * 100}%` }}
              />
            </div>
          </div>
          
          {/* Previous / Next buttons that control slide offset */}
          <div className="flex gap-3">
            <button 
              onClick={() => setActiveProject(prev => Math.max(1, prev - 1))}
              disabled={activeProject === 1}
              className="magnetic-target flex items-center justify-center rounded-full w-10 h-10 border border-white/10 bg-transparent hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-all duration-150 cursor-pointer"
            >
              <ChevronLeft className="text-white" size={16} />
            </button>
            <button 
              onClick={() => setActiveProject(prev => Math.min(8, prev + 1))}
              disabled={activeProject === 8}
              className="magnetic-target flex items-center justify-center rounded-full w-10 h-10 border border-white/10 bg-transparent hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-all duration-150 cursor-pointer"
            >
              <ChevronRight className="text-white" size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
