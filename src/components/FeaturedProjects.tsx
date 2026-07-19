'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'Horology Vault',
    narrative: 'A luxury WebGL exhibition showcasing high-end horological artifacts with real-time physics and custom shader refractions.',
    category: 'LUXURY E-COMMERCE & WEBGL PLATFORM',
    image: '/images/horology_vault.png',
    link: '#',
    year: '2025',
  },
  {
    id: '02',
    title: 'Nova Capital',
    narrative: 'An enterprise fintech platform mapping transactional logistics and user flows with sub-second speeds and advanced caching.',
    category: 'FINTECH SAAS PLATFORM & STRATEGY',
    image: '/images/nova_capital.png',
    link: '#',
    year: '2024',
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12" id="work">
      {/* Small top tagline */}
      <div className="mb-24 text-left select-none">
        <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-3 block">
          Selected Portfolio // Case Studies
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[76px] leading-[0.95] tracking-tight">
          Featured Projects
        </h2>
      </div>

      {/* Fullscreen Storytelling Modules */}
      <div className="space-y-40">
        {PROJECTS.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={project.title}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full"
            >
              {/* Image Column - Asymmetrical left/right layout */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full lg:w-7/12 relative aspect-[16/10] rounded-3xl overflow-hidden bg-card border border-white/5 group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Custom hover zooms */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={i === 0}
                  className="object-cover transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-[1.04] filter saturate-[1.02] brightness-95"
                />
                
                {/* Subtle vignette outline inside the card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating details badge */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-mono text-gray-300">
                  {project.year} // DEPLOYED
                </div>
              </motion.div>

              {/* Text narrative column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full lg:w-5/12 flex flex-col items-start text-left ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                {/* Big Outline Phase Number */}
                <span 
                  className="font-display font-black text-6xl lg:text-7xl text-transparent tracking-tighter block mb-4 select-none"
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)' }}
                >
                  {project.id}
                </span>

                <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block mb-3">
                  {project.category}
                </span>

                <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-6">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-md">
                  {project.narrative}
                </p>

                <a
                  href={project.link}
                  className="magnetic-target group flex items-center gap-3 py-3 px-6 rounded-full border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300 interactive-hover"
                >
                  <span className="font-display text-[9px] tracking-[0.2em] uppercase font-bold text-gray-300 group-hover:text-white">
                    View Live Case Study
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-primary group-hover:translate-x-1.5 transition-all duration-300" />
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
