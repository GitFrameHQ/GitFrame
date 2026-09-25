import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onNavigateToBuilder?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigateToBuilder }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleStartBuilding = (e: React.MouseEvent) => {
    if (onNavigateToBuilder) {
      e.preventDefault();
      onNavigateToBuilder();
    }
  };

  return (
    <section className="pb-24 sm:pb-32 relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0D0E12] border border-white/15 rounded-3xl py-14 sm:py-16 px-6 sm:px-12 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        >
          {/* Top highlight bar */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#EDEFF5] mb-4">
            Make your README worth visiting.
          </h2>

          <p className="text-sm sm:text-base text-[#8E95A5] max-w-[540px] mx-auto mb-8 leading-relaxed">
            Configure your card, download the workflow, and let GitHub Actions keep your profile updated.
          </p>

          <a
            href="#builder"
            onClick={handleStartBuilding}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold rounded-full bg-[#CCFF00] text-[#060709] shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:bg-[#d8ff33] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709] cursor-pointer"
          >
            <span>Start Building Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
