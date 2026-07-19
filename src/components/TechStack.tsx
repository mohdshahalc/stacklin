'use client';

import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  { name: 'React', desc: 'UI Library', x: -110, y: -50, color: '#61dafb' },
  { name: 'Next.js', desc: 'App Router', x: 120, y: -70, color: '#ffffff' },
  { name: 'Node.js', desc: 'Backend', x: -80, y: 110, color: '#68a063' },
  { name: 'TypeScript', desc: 'Type Safety', x: 100, y: 80, color: '#3178c6' },
  { name: 'PostgreSQL', desc: 'Database', x: -140, y: 30, color: '#336791' },
  { name: 'AWS', desc: 'Infrastructure', x: 150, y: 20, color: '#ff9900' },
  { name: 'Framer Motion', desc: 'Animations', x: -30, y: -120, color: '#f012be' },
  { name: 'GSAP', desc: 'Scroll Timelines', x: 30, y: 130, color: '#88ce02' },
];

export default function TechStack() {
  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12" id="tech">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Tech Description */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left select-none">
          <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase block">
            Infrastructure // Toolkit
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Our Technology Stack
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base mt-2">
            We use a curated selection of modern technologies to build highly scalable, fast, and secure digital architectures.
          </p>
        </div>

        {/* Right Column: Interactive Floating Orbit Visualizer */}
        <div className="lg:col-span-7 relative w-full h-[500px] flex items-center justify-center z-0 select-none overflow-hidden rounded-3xl border border-white/5 bg-card/10">
          {/* Central Glowing Stacklin Core */}
          <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 filter blur-[40px] z-0 animate-pulse pointer-events-none" />
          <div className="absolute w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center z-10 shadow-2xl">
            <svg className="w-5 h-5 text-white" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140 60C140 45 125 30 100 30C75 30 60 45 60 60C60 75 80 85 105 95C135 107 145 120 145 140C145 165 125 180 100 180C70 180 55 160 55 140" stroke="currentColor" strokeWidth="18" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Rotating Orbit Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[250px] h-[250px] border border-dashed border-white/[0.03] rounded-full pointer-events-none z-0" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[350px] h-[350px] border border-dashed border-white/[0.02] rounded-full pointer-events-none z-0" 
          />

          {/* Floating Technology Node Badges */}
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.05 }}
              className="absolute z-20 cursor-default"
              style={{
                left: `calc(50% + ${tech.x}px - 64px)`, // Center offset adjust
                top: `calc(50% + ${tech.y}px - 28px)`,
              }}
            >
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  x: [-4, 4, -4],
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, borderColor: tech.color, boxShadow: `0 0 20px ${tech.color}15` }}
                  transition={{ duration: 0.3 }}
                  className="py-2.5 px-4.5 rounded-full border border-white/5 bg-card/60 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all duration-300 w-32"
                >
                  <span className="font-display font-black text-[9px] text-white tracking-wider uppercase">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[7px] text-gray-500 tracking-wide mt-0.5">
                    {tech.desc}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
