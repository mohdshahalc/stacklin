'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Layers, Users, Palette, Zap, Cpu, CircleDot } from 'lucide-react';

const VALUES = [
  {
    id: '01',
    title: 'Premium UI/UX Design',
    tagline: 'ART DIRECTION & STYLE',
    desc: 'We design custom digital interfaces from scratch, discarding generic templates. We focus on brand authority, bespoke typography hierarchy, and luxury layouts that captivate and convert.',
    benefit: '100% Unique Design Systems',
    glow: 'rgba(0, 216, 255, 0.08)',
    visual: (
      <div className="relative w-48 h-32 bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }} />
        {/* Swatches */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-3 right-3 p-1.5 rounded-lg border border-white/10 bg-black/80 flex gap-1 shadow-md z-10"
        >
          <div className="w-2.5 h-2.5 rounded bg-[#00D8FF]" />
          <div className="w-2.5 h-2.5 rounded bg-white" />
        </motion.div>
        {/* Aa Block */}
        <div className="w-12 h-12 rounded-lg border border-white/10 bg-[#101010]/80 flex items-center justify-center shadow-lg">
          <span className="font-display font-black text-lg text-white">Aa</span>
        </div>
        {/* Wireframe Mockup */}
        <div className="flex gap-2">
          <div className="w-16 h-3 rounded bg-white/5 border border-white/10" />
          <div className="w-8 h-3 rounded bg-[#00D8FF]/20 border border-[#00D8FF]/30" />
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'High Performance',
    tagline: 'SUB-SECOND OPTIMIZATION',
    desc: 'Lightning-fast client systems built on Next.js serverless rendering. We optimize code bundles, implement edge-native CDN delivery caching, and query layouts for instant transitions.',
    benefit: '100/100 Lighthouse Speed Core',
    glow: 'rgba(0, 229, 163, 0.08)',
    visual: (
      <div className="relative w-48 h-32 flex flex-col justify-center items-center overflow-hidden">
        {/* Light streaks */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 opacity-20">
          <motion.div animate={{ x: [-200, 200] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#00E5A3] to-transparent" />
          <motion.div animate={{ x: [-200, 200] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }} className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#00E5A3] to-transparent" />
        </div>
        {/* Radial Speed Gauge */}
        <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center relative bg-black/30">
          <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.03)" strokeWidth="4" fill="transparent" />
            <motion.circle 
              cx="50" cy="50" r="38" stroke="#00E5A3" strokeWidth="4" fill="transparent" 
              strokeDasharray="238"
              animate={{ strokeDashoffset: [238, 30, 238] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
          <Zap className="w-6 h-6 text-[#00E5A3] animate-pulse" />
        </div>
      </div>
    )
  },
  {
    id: '03',
    title: 'Reliable Security',
    tagline: 'ENTERPRISE ARCHITECTURE',
    desc: 'We secure application endpoints with tokenized authentication protocols, configure database access controls, and perform network audits so client assets remain bulletproof.',
    benefit: 'Automated Encryption Standards',
    glow: 'rgba(168, 85, 247, 0.08)',
    visual: (
      <div className="relative w-48 h-32 flex items-center justify-center">
        {/* Security Hex Grid Grid */}
        <div className="absolute inset-0 opacity-[0.03] flex flex-wrap gap-1.5 p-2 justify-center items-center">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-4 h-4 rounded bg-white/20 border border-white/10" />
          ))}
        </div>
        {/* Shield Icon container */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 rounded-2xl border border-[#A855F7]/30 bg-black/60 backdrop-blur-md shadow-2xl flex items-center justify-center relative z-10"
        >
          <div className="absolute inset-0 rounded-2xl bg-[#A855F7]/5 filter blur-md pointer-events-none" />
          <Shield className="w-7 h-7 text-[#A855F7]" />
        </motion.div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Scalable Architecture',
    tagline: 'PRODUCTION-GRADE BACKENDS',
    desc: 'Modular database architectures and strict API type safety. We structure codebase frameworks with clean boundaries, preparing client backends for continuous feature scaling.',
    benefit: 'Zero Post-Launch Technical Debt',
    glow: 'rgba(93, 124, 255, 0.08)',
    visual: (
      <div className="relative w-48 h-32 flex items-center justify-center gap-3">
        {/* Connected Boxes */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 rounded-xl border border-white/10 bg-black/60 flex items-center justify-center z-10 shadow-lg"
        >
          <Layers className="w-5 h-5 text-[#5D7CFF]" />
        </motion.div>
        {/* Dotted connector */}
        <div className="w-8 border-t border-dashed border-white/20 relative">
          <motion.div 
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#5D7CFF]"
          />
        </div>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="w-12 h-12 rounded-xl border border-white/10 bg-black/60 flex items-center justify-center z-10 shadow-lg"
        >
          <div className="w-5 h-5 rounded border border-[#5D7CFF] bg-[#5D7CFF]/10 flex items-center justify-center" />
        </motion.div>
      </div>
    )
  },
  {
    id: '05',
    title: 'Creative Innovation',
    tagline: 'NEXT-GENERATION CAPABILITIES',
    desc: 'We integrate complex features like vector intelligence databases, custom shaders, and interactive scroll viewport bounds. We turn ordinary SaaS platforms into engaging experiences.',
    benefit: 'WebGL & Vector Database Systems',
    glow: 'rgba(234, 179, 8, 0.06)',
    visual: (
      <div className="relative w-48 h-32 flex items-center justify-center">
        {/* Morphing SVG Shape */}
        <motion.div 
          animate={{ 
            borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '70% 30% 52% 48% / 60% 40% 60% 40%', '40% 60% 70% 30% / 40% 50% 60% 50%'],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border border-[#EAB308]/40 bg-gradient-to-tr from-[#EAB308]/5 to-[#EAB308]/20 flex items-center justify-center"
        >
          <Cpu className="w-6 h-6 text-[#EAB308]" />
        </motion.div>
      </div>
    )
  },
  {
    id: '06',
    title: 'Long-Term Partnership',
    tagline: 'DEDICATED DEVELOPMENT SQUAD',
    desc: 'We provide technical direction, monitor real-time server diagnostics, update core dependencies, and plan periodic roadmap releases targeting measurable brand metrics.',
    benefit: 'Direct Tech Leadership Access',
    glow: 'rgba(236, 72, 153, 0.08)',
    visual: (
      <div className="relative w-48 h-32 flex flex-col justify-center items-center p-4">
        {/* Ascending Trend Line */}
        <svg className="w-32 h-16 text-[#EC4899]" viewBox="0 0 100 50" fill="none">
          <motion.path 
            d="M 5 45 L 30 35 L 60 20 L 95 5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <motion.circle cx="30" cy="35" r="3" fill="#EC4899" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="95" cy="5" r="3.5" fill="#EC4899" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        </svg>
        <span className="font-mono text-[7px] text-gray-500 tracking-wider mt-2">ROADMAP // CONTINUOUS INDEX</span>
      </div>
    )
  }
];

export default function WhyStacklin() {
  return (
    <section 
      id="why-us"
      className="relative py-32 flex flex-col justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background visual light */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#00D8FF]/3 filter blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Editorial Title Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 text-left mb-28 select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-[#00D8FF] uppercase mb-3 block">
            Philosophy // Core Principles
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[76px] leading-[0.95] tracking-tight uppercase">
            Why Partner <br />With Us
          </h2>
        </motion.div>
      </div>

      {/* Alternating Narrative Blocks */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col gap-24 lg:gap-36 relative">
        {VALUES.map((val, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={val.id}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full"
            >
              {/* Visual Card Column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full lg:w-6/12 aspect-[16/10] rounded-3xl bg-[#0E0E0E]/40 border border-white/5 flex items-center justify-center p-8 relative group shadow-2xl overflow-hidden hover:border-white/10 transition-all duration-500 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Visual Ambient glow color */}
                <div 
                  className="absolute inset-0 filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: val.glow }}
                />
                
                {/* Custom Vector React Illustration */}
                <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-105">
                  {val.visual}
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full lg:w-5/12 flex flex-col text-left ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-mono text-[9px] text-[#00D8FF] tracking-wider font-bold">CHAPTER // {val.id}</span>
                  <span className="font-mono text-[8px] text-gray-500 tracking-[0.2em] uppercase">{val.tagline}</span>
                </div>

                <h3 className="font-display font-black text-2xl lg:text-3xl text-white mb-5">
                  {val.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                  {val.desc}
                </p>

                <div className="border-t border-white/5 pt-4 flex justify-between items-center w-full">
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">METRIC // BENEFIT</span>
                  <span className="text-[10px] font-bold text-white tracking-wide" style={{ color: '#00D8FF' }}>
                    {val.benefit}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}

        {/* BOTTOM CTA: Immersive Full-width Conversion Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-24 py-20 rounded-3xl border border-white/5 bg-gradient-to-b from-[#0A0A0A]/40 to-[#070707]/80 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center text-center p-8 sm:p-12 shadow-3xl z-10"
        >
          {/* Volumetric glow background */}
          <div className="absolute -bottom-24 w-80 h-80 rounded-full bg-[#00D8FF]/5 filter blur-3xl pointer-events-none" />

          <span className="font-mono text-[9px] tracking-[0.3em] text-[#00D8FF] uppercase mb-4 block">
            Ready to build something extraordinary?
          </span>
          <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-white tracking-tight max-w-2xl uppercase">
            Let's create your next digital product.
          </h3>
          
          <a
            href="#contact"
            className="magnetic-target group mt-8 inline-flex items-center gap-3 py-3.5 px-7 rounded-full border border-white/10 bg-white text-black hover:bg-transparent hover:text-white hover:border-[#00D8FF] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.03)]"
          >
            <span className="font-display text-[9px] font-black tracking-widest uppercase">Start Project</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:text-primary transition-colors duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
