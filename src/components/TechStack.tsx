'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Tv, 
  ShieldCheck, 
  Wind, 
  Server, 
  Activity, 
  Database, 
  FolderGit, 
  Cloud, 
  Boxes, 
  Sparkles, 
  Timer, 
  PenTool, 
  Cpu 
} from 'lucide-react';

const ORBITS = [
  {
    name: 'Inner Orbit',
    duration: '35s',
    direction: 'clockwise',
    radius: 120,
    techs: [
      { name: 'React', desc: 'Component UI library for interactive interfaces.', color: '#61dafb', icon: <Atom className="w-4 h-4" /> },
      { name: 'Next.js', desc: 'App router architecture and SSR engine.', color: '#ffffff', icon: <Tv className="w-4 h-4" /> },
      { name: 'TypeScript', desc: 'Strict type systems preventing database issues.', color: '#3178c6', icon: <ShieldCheck className="w-4 h-4" /> },
      { name: 'Tailwind CSS', desc: 'Utility-first layout and styling frameworks.', color: '#38bdf8', icon: <Wind className="w-4 h-4" /> },
    ]
  },
  {
    name: 'Middle Orbit',
    duration: '50s',
    direction: 'counter-clockwise',
    radius: 210,
    techs: [
      { name: 'Node.js', desc: 'Scalable backend server runtime environment.', color: '#68a063', icon: <Server className="w-4 h-4" /> },
      { name: 'Express', desc: 'Lightweight routing framework for typed APIs.', color: '#e5e7eb', icon: <Activity className="w-4 h-4" /> },
      { name: 'PostgreSQL', desc: 'Relational data structures with ACID safety.', color: '#336791', icon: <Database className="w-4 h-4" /> },
      { name: 'MongoDB', desc: 'Document model stores for flexible collections.', color: '#47a248', icon: <FolderGit className="w-4 h-4" /> },
    ]
  },
  {
    name: 'Outer Orbit',
    duration: '70s',
    direction: 'clockwise',
    radius: 300,
    techs: [
      { name: 'AWS', desc: 'Cloud infrastructure hosting and pipelines.', color: '#ff9900', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Docker', desc: 'Containerized deployment units for devops.', color: '#2496ed', icon: <Boxes className="w-4 h-4" /> },
      { name: 'Framer Motion', desc: 'Interactive keyframes and gesture handlers.', color: '#f012be', icon: <Sparkles className="w-4 h-4" /> },
      { name: 'GSAP', desc: 'Cinematic timeline-based scroll triggers.', color: '#88ce02', icon: <Timer className="w-4 h-4" /> },
      { name: 'Figma', desc: 'UX layouts and vector design systems.', color: '#f24e1e', icon: <PenTool className="w-4 h-4" /> },
      { name: 'Vercel', desc: 'Edge compilation and edge network deployments.', color: '#ffffff', icon: <Cpu className="w-4 h-4" /> },
    ]
  }
];

export default function TechStack() {
  const [radiusMultiplier, setRadiusMultiplier] = useState(1);
  const [hoveredOrbit, setHoveredOrbit] = useState<number | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadiusMultiplier(0.48);
      } else if (window.innerWidth < 1024) {
        setRadiusMultiplier(0.75);
      } else {
        setRadiusMultiplier(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden" id="tech">
      
      {/* Inline styles for rotating orbits with counter-rotation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotate-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .anim-cw {
          animation: rotate-cw var(--dur) linear infinite;
        }
        .anim-ccw {
          animation: rotate-ccw var(--dur) linear infinite;
        }
      `}} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Tech Description */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-left select-none z-10">
          <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase block">
            Infrastructure // Ecosystem
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Engineered with <br /> Modern Tech
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base mt-2">
            We build digital architecture on top of robust frameworks, ensuring high performance, sub-second latency, and scalable databases.
          </p>
        </div>

        {/* Right Column: Premium Orbit Ecosystem centerpiece */}
        <div className="lg:col-span-8 relative w-full h-[380px] sm:h-[620px] flex items-center justify-center select-none overflow-visible rounded-3xl border border-white/5 bg-card/10">
          
          {/* Central Glowing Core Panel */}
          <div className="absolute w-28 h-28 sm:w-44 sm:h-44 rounded-full border border-white/10 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-30 shadow-[0_0_50px_rgba(0,216,255,0.08)] text-center p-4">
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl pointer-events-none" />
            <span className="font-display font-black text-[9px] sm:text-xs text-white tracking-[0.25em] leading-tight">STACKLIN</span>
            <span className="font-mono text-[6px] sm:text-[8px] text-gray-500 tracking-[0.18em] uppercase mt-1">TECH SYSTEM</span>
          </div>

          {/* Render Orbit Rings */}
          {ORBITS.map((orbit, oIdx) => {
            const isPaused = hoveredOrbit === oIdx;
            const orbitRadius = orbit.radius * radiusMultiplier;
            const isCw = orbit.direction === 'clockwise';
            
            return (
              <div 
                key={orbit.name}
                className="absolute w-full h-full flex items-center justify-center pointer-events-none"
              >
                {/* Visual Ring guide */}
                <div 
                  className="absolute border border-dashed border-white/[0.03] rounded-full pointer-events-none z-0"
                  style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}
                />

                {/* Rotating Container */}
                <div 
                  className={`absolute flex items-center justify-center ${isCw ? 'anim-cw' : 'anim-ccw'}`}
                  style={{
                    width: orbitRadius * 2,
                    height: orbitRadius * 2,
                    animationPlayState: isPaused ? 'paused' : 'running',
                    '--dur': orbit.duration
                  } as React.CSSProperties}
                >
                  {orbit.techs.map((tech, tIdx) => {
                    const totalTechs = orbit.techs.length;
                    const angle = (2 * Math.PI * tIdx) / totalTechs;
                    const x = orbitRadius * Math.cos(angle);
                    const y = orbitRadius * Math.sin(angle);
                    const isHovered = activeTech === tech.name;

                    return (
                      <div
                        key={tech.name}
                        className="absolute pointer-events-auto"
                        style={{
                          left: `calc(50% + ${x}px - 64px)`, // Offset adjust
                          top: `calc(50% + ${y}px - 22px)`,
                          width: '128px',
                          height: '44px',
                        }}
                        onMouseEnter={() => {
                          setHoveredOrbit(oIdx);
                          setActiveTech(tech.name);
                        }}
                        onMouseLeave={() => {
                          setHoveredOrbit(null);
                          setActiveTech(null);
                        }}
                      >
                        {/* Dynamic connection line back to center */}
                        {isHovered && (
                          <svg className="absolute overflow-visible pointer-events-none z-[-1]" style={{ left: '50%', top: '50%' }}>
                            <motion.line
                              x1={0}
                              y1={0}
                              x2={-x}
                              y2={-y}
                              stroke={tech.color}
                              strokeWidth={1.2}
                              strokeDasharray="4 4"
                              initial={{ strokeDashoffset: 20, opacity: 0 }}
                              animate={{ strokeDashoffset: 0, opacity: 0.5 }}
                              transition={{ 
                                strokeDashoffset: { repeat: Infinity, duration: 1, ease: 'linear' }, 
                                opacity: { duration: 0.3 } 
                              }}
                            />
                          </svg>
                        )}

                        {/* Floating Tooltip details above the badge */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                              className="absolute bottom-[115%] left-1/2 -translate-x-1/2 w-48 p-4 rounded-2xl border border-white/10 bg-[#0E0E0E]/95 backdrop-blur-md shadow-2xl z-50 text-left pointer-events-none"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span style={{ color: tech.color }}>{tech.icon}</span>
                                <h4 className="font-display font-black text-[10px] text-white tracking-wider uppercase">{tech.name}</h4>
                              </div>
                              <p className="text-[9px] text-gray-400 leading-relaxed font-sans">{tech.desc}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Technology Capsule Badge (Counter-rotates to stay upright) */}
                        <div 
                          className={`w-full h-full flex items-center justify-center ${isCw ? 'anim-ccw' : 'anim-cw'}`}
                          style={{
                            animationPlayState: isPaused ? 'paused' : 'running',
                            '--dur': orbit.duration
                          } as React.CSSProperties}
                        >
                          <motion.div
                            whileHover={{ 
                              scale: 1.05, 
                              borderColor: tech.color, 
                              boxShadow: `0 0 20px ${tech.color}15` 
                            }}
                            className="w-full h-full rounded-full border border-white/5 bg-card/60 backdrop-blur-md flex items-center gap-2 px-3 py-2 cursor-pointer transition-all duration-300 relative overflow-hidden"
                          >
                            {/* Accent Glow Core on Hover */}
                            <div 
                              className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 blur-md pointer-events-none z-0"
                              style={{ backgroundColor: tech.color }}
                            />
                            
                            <span style={{ color: tech.color }} className="relative z-10 shrink-0">
                              {tech.icon}
                            </span>
                            <span className="font-display font-black text-[9px] text-white tracking-wider uppercase relative z-10 truncate text-left">
                              {tech.name}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
