'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What is Stacklin's design philosophy?",
    answer: "We believe in digital craftsmanship. We design every project from scratch rather than relying on generic templates, matching editorial-style typography with custom layout systems and performance-optimized micro-interactions."
  },
  {
    question: "What technology stack do you specialize in?",
    answer: "We are experts in Next.js, React, TypeScript, and Tailwind CSS. For databases and APIs, we deploy Node.js, PostgreSQL, and headless CMS integrations. We also build custom animations with Framer Motion and GSAP."
  },
  {
    question: "How long does a typical project take to deliver?",
    answer: "A standard corporate website or design concept usually ranges from 4 to 8 weeks. Larger SaaS products, custom software integrations, and AI-powered systems can take between 2 to 4 months, depending on scope complexity."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, Stacklin is a remote-first digital studio. We work with ambitious brands, enterprises, and venture-backed startups across North America, Europe, Asia, and Australia."
  },
  {
    question: "How do you handle ongoing maintenance and hosting?",
    answer: "We offer comprehensive monthly retainer packages covering serverless hosting configuration (Vercel, AWS), security audits, layout shift checks, real-time log monitoring, database backups, and recurring feature adjustments."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 w-full max-w-4xl mx-auto px-6" id="faq">
      <div className="text-center mb-24 select-none">
        <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3 block">
          Inquiries // Help Desk
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/5 bg-card overflow-hidden transition-colors duration-300 hover:border-white/10 text-left"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-6 px-8 flex justify-between items-center text-left focus:outline-none interactive-hover"
              >
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-6 border-t border-white/[0.03] pt-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
