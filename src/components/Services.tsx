'use client';

import { useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layers, Cpu, Compass, LayoutGrid, Terminal, Zap } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'Visual Storytelling',
    description: 'Immersive layouts with premium art direction, bespoke typography, and high-end WebGL rendering that capture instant attention.',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    id: '02',
    title: 'Creative Engineering',
    description: 'High-performance frontends built with Next.js and robust server systems engineered for maximum stability and speed.',
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: '03',
    title: 'SaaS Architecture',
    description: 'Scalable cloud database designs, fully typed APIs, secure authentication configurations, and visual dashboards.',
    icon: <Layers className="w-5 h-5" />,
  },
  {
    id: '04',
    title: 'Artificial Intelligence',
    description: 'Vector embedding search, customized LLM agent pipelines, semantic caches, and neural algorithms integrated into your UI.',
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    id: '05',
    title: 'Brand Systems',
    description: 'Comprehensive digital visual guides, logo signatures, curated typography systems, and modular design tokens.',
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    id: '06',
    title: 'UI/UX Prototypes',
    description: 'Interactive high-fidelity prototypes, user journey flows, and mockups validating product usability and conversions.',
    icon: <Compass className="w-5 h-5" />,
  },
  {
    id: '07',
    title: 'Custom Integrations',
    description: 'Headless CMS implementations, payment processors, and custom analytics logs to control your operations.',
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    id: '08',
    title: 'Performance Audits',
    description: 'Improving bundle optimization, asset caching, and database queries to target sub-second page loads.',
    icon: <Zap className="w-5 h-5" />,
  },
];

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
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12" id="services">
      {/* Editorial layout split header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-start select-none">
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {SERVICES.map((service, index) => {
          // Asymmetric column widths to break the grid predictability
          const colSpan = (index % 4 === 0 || index % 4 === 3) ? 'md:col-span-7' : 'md:col-span-5';
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`bento-card ${colSpan} p-10 flex flex-col justify-between min-h-[300px] cursor-default transition-all duration-300 border border-white/5 hover:border-primary/20 group relative overflow-hidden`}
            >
              {/* Highlight Glow behind card */}
              <div className="absolute inset-0 bg-radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(0, 216, 255, 0.04), transparent 50%) pointer-events-none" />

              {/* Top Row: Service Number and Icon */}
              <div className="flex justify-between items-start tilt-content relative z-10">
                <span 
                  className="font-display font-black text-4xl text-transparent tracking-tighter"
                  style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.06)' }}
                >
                  {service.id}
                </span>
                <span className="text-gray-500 group-hover:text-primary transition-colors duration-300 bg-white/2 p-3.5 rounded-xl border border-white/5 flex items-center justify-center">
                  {service.icon}
                </span>
              </div>

              {/* Bottom Row: Title & Text */}
              <div className="tilt-content mt-12 relative z-10 text-left">
                <h3 className="font-display font-black text-xl text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
