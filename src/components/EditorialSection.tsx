import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const EditorialSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 border-t border-white/[0.06] text-center bg-[radial-gradient(circle_at_50%_50%,rgba(204,255,0,0.04)_0%,transparent_70%)] relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-wider uppercase text-[#CCFF00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span>Open Source Philosophy</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 text-[#EDEFF5]">
            Built to be yours.<br />
            <span className="text-[#8E95A5] font-normal">Self-hosted forever.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8E95A5] leading-relaxed mb-8 max-w-[620px]">
            100% open source. Inspect the Python scripts, customize the SVG rendering template, or contribute features directly on GitHub.
          </p>

          <a
            href="https://github.com/moin-dbud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-full bg-[#13151C] text-[#EDEFF5] border border-white/15 hover:bg-[#1A1D26] hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Explore Source Repository</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
