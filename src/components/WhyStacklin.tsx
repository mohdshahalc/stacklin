'use client';

import { motion } from 'framer-motion';

const BUBBLES = [
  { id: 'b1', title: 'Visual Couture', desc: 'Bespoke design, zero template layout', size: 'w-44 h-44 sm:w-48 sm:h-48', delay: 0.1, x: '12%', y: '15%', color: 'rgba(0, 216, 255, 0.4)', border: 'hover:border-[#00D8FF]/40 hover:shadow-[0_0_40px_rgba(0,216,255,0.2)]' },
  { id: 'b2', title: 'Performance', desc: 'Sub-second rendering & instant loading', size: 'w-48 h-48 sm:w-52 sm:h-52', delay: 0.3, x: '50%', y: '8%', color: 'rgba(93, 124, 255, 0.4)', border: 'hover:border-[#5D7CFF]/40 hover:shadow-[0_0_40px_rgba(93,124,255,0.2)]' },
  { id: 'b3', title: 'Intelligence', desc: 'Custom LLM agents & semantic workflows', size: 'w-44 h-44 sm:w-48 sm:h-48', delay: 0.5, x: '82%', y: '20%', color: 'rgba(0, 229, 163, 0.4)', border: 'hover:border-[#00E5A3]/40 hover:shadow-[0_0_40px_rgba(0,229,163,0.2)]' },
  { id: 'b4', title: 'Zero Debt', desc: 'Fully typed scalable Next.js backend', size: 'w-44 h-44 sm:w-48 sm:h-48', delay: 0.2, x: '8%', y: '55%', color: 'rgba(93, 124, 255, 0.4)', border: 'hover:border-[#5D7CFF]/40 hover:shadow-[0_0_40px_rgba(93,124,255,0.2)]' },
  { id: 'b5', title: 'Conversions', desc: 'Strategic funnels to maximize client sales', size: 'w-48 h-48 sm:w-52 sm:h-52', delay: 0.4, x: '46%', y: '60%', color: 'rgba(0, 216, 255, 0.4)', border: 'hover:border-[#00D8FF]/40 hover:shadow-[0_0_40px_rgba(0,216,255,0.2)]' },
  { id: 'b6', title: 'Token Systems', desc: 'Modular values & design token assets', size: 'w-44 h-44 sm:w-48 sm:h-48', delay: 0.6, x: '80%', y: '62%', color: 'rgba(0, 229, 163, 0.4)', border: 'hover:border-[#00E5A3]/40 hover:shadow-[0_0_40px_rgba(0,229,163,0.2)]' },
];

export default function WhyStacklin() {
  return (
    <section 
      id="why-us"
      className="relative min-h-screen py-24 sm:py-32 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full z-10 text-center mb-16 select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Philosophy // Strategy
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[76px] leading-[0.95] tracking-tight uppercase">
            WHY PARTNER WITH US
          </h2>
        </motion.div>
      </div>

      {/* Bubble Container Area */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[600px] lg:min-h-[700px] px-6 sm:px-12 z-20">
        
        {/* Animated Connecting Lines (Only visible on large screens where bubbles are absolute-positioned) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-[1]">
          <svg className="w-full h-full stroke-white/10 fill-none" xmlns="http://www.w3.org/2000/svg">
            {/* Draw connecting lines between bubbles */}
            <motion.path 
              d="M 20% 27% L 54% 20% L 85% 30% L 82% 70% L 48% 70% L 16% 65% Z"
              strokeDasharray="8 8"
              initial={{ strokeDashoffset: 100, opacity: 0 }}
              whileInView={{ strokeDashoffset: 0, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            />
            <motion.path 
              d="M 20% 27% L 48% 70% L 85% 30%"
              strokeDasharray="12 12"
              initial={{ strokeDashoffset: -100, opacity: 0 }}
              whileInView={{ strokeDashoffset: 0, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            />
          </svg>
        </div>

        {/* ORGANIC ABSOLUTE LAYOUT (Large Desktop) */}
        <div className="hidden lg:block absolute inset-0">
          {BUBBLES.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute group"
              style={{ top: bubble.y, left: bubble.x }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: 'spring', 
                stiffness: 60, 
                damping: 15, 
                delay: bubble.delay 
              }}
            >
              <motion.div
                className={`${bubble.size} rounded-full backdrop-blur-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-6 text-center select-none cursor-pointer ${bubble.border}`}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4.5 + bubble.delay * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: bubble.delay
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, 2, -2, 0],
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Micro-glow core background */}
                <div 
                  className="absolute w-20 h-20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]"
                  style={{ backgroundColor: bubble.color }}
                />
                
                <h3 className="font-display font-black text-white text-sm sm:text-base tracking-wide uppercase leading-tight">
                  {bubble.title}
                </h3>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-2 max-w-[130px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {bubble.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* RESPONSIVE LAYOUT (Mobile / Tablet) */}
        <div className="lg:hidden flex flex-wrap justify-center gap-6 py-6">
          {BUBBLES.map((bubble, idx) => (
            <motion.div
              key={bubble.id}
              className={`${bubble.size} rounded-full backdrop-blur-md bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-6 text-center select-none`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <h3 className="font-display font-black text-white text-xs sm:text-sm tracking-wide uppercase">
                {bubble.title}
              </h3>
              <p className="text-gray-400 text-[9px] sm:text-xs mt-1.5 max-w-[110px]">
                {bubble.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
