'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative py-32 w-full max-w-7xl mx-auto px-6 md:px-12 overflow-hidden" id="contact">
      {/* Background kinetic moving text */}
      <div className="absolute inset-x-0 top-12 opacity-[0.02] pointer-events-none select-none z-0 hidden lg:block">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="font-display font-black text-[180px] tracking-tighter whitespace-nowrap text-white"
        >
          LET'S TALK // WORK TOGETHER // LET'S TALK // WORK TOGETHER // LET'S TALK
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Headline */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase block">
            Initiate Contact // Project Brief
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[72px] leading-[0.9] tracking-tight">
            Let's build <br />
            something <br />
            extraordinary.
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base mt-4 max-w-sm">
            Partner with Stacklin to design premium websites, SaaS products, custom software, and digital experiences.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-4 mt-6 text-xs font-mono text-gray-500 tracking-wider">
            <span className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <span>hello@stacklin.com</span>
            </span>
            <span className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              <span>Portland, OR // Remote Worldwide</span>
            </span>
          </div>
        </div>

        {/* Right Column: Sleek minimal glass query form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 p-10 rounded-3xl border border-white/5 bg-card/60 backdrop-blur-2xl relative overflow-hidden"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              <div>
                <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/[0.01] border-b border-white/10 focus:border-primary/60 transition-all duration-300 py-3 text-sm text-white focus:outline-none placeholder-gray-700"
                />
              </div>
              <div>
                <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.01] border-b border-white/10 focus:border-primary/60 transition-all duration-300 py-3 text-sm text-white focus:outline-none placeholder-gray-700"
                />
              </div>
            </div>

            <div className="text-left">
              <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-3">
                Project Narrative
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your brand goals, scope requirements, and target timeline..."
                className="w-full bg-white/[0.01] border-b border-white/10 focus:border-primary/60 transition-all duration-300 py-3 text-sm text-white focus:outline-none placeholder-gray-700 resize-none"
              />
            </div>

            <button
              type="submit"
              className="magnetic-target w-full py-5 rounded-full bg-[#5D5FEF] text-white font-display text-[10px] font-black tracking-widest uppercase hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-secondary/20 flex items-center justify-center gap-2 group interactive-hover"
            >
              <span>Submit Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
