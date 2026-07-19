'use client';

import { motion } from 'framer-motion';
import { CheckSquare, Columns, Flower, Infinity as InfinityIcon, Layers, Bookmark } from 'lucide-react';

const BRANDS = [
  { name: 'taskly', icon: <CheckSquare className="w-4 h-4" /> },
  { name: 'kanba', icon: <Columns className="w-4 h-4" /> },
  { name: 'Cactus', icon: <Flower className="w-4 h-4" /> },
  { name: 'amara', icon: <InfinityIcon className="w-4 h-4" /> },
  { name: 'Layers', icon: <Layers className="w-4 h-4" /> },
  { name: 'Sitemark', icon: <Bookmark className="w-4 h-4" /> },
];

export default function TrustedBy() {
  // Duplicate array to make seamless loop
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="relative py-12 border-y border-white/[0.04] w-full bg-black/40 backdrop-blur-sm overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <span className="font-mono text-[8px] tracking-[0.25em] text-gray-500 uppercase shrink-0">
          TRUSTED BY INNOVATIVE BRANDS //
        </span>
        
        {/* Infinite Scroll Marquee track */}
        <div className="relative w-full overflow-hidden mask-fade-edges">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex items-center gap-16 w-max"
            animate={{ x: [0, -400] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 16,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center gap-2.5 opacity-35 hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-default shrink-0 text-white"
              >
                <span className="text-primary">{brand.icon}</span>
                <span className="font-display font-black text-xs tracking-wider uppercase">
                  {brand.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
