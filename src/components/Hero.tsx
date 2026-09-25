import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { HeroPipeline } from './HeroPipeline';

interface HeroProps {
  onNavigateToBuilder?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToBuilder }) => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  const handleStartBuilding = (e: React.MouseEvent) => {
    if (onNavigateToBuilder) {
      e.preventDefault();
      onNavigateToBuilder();
    }
  };

  return (
    <section className="pt-36 sm:pt-40 pb-20 sm:pb-24 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headline & CTA */}
          <motion.div 
            className="flex flex-col items-start"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Status / Product Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#CCFF00]/[0.08] border border-[#CCFF00]/30 rounded-full font-mono text-xs text-[#CCFF00] mb-6">
              <Clock className="w-3.5 h-3.5" />
              <span>Automated via GitHub Actions</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-[-0.03em] leading-[1.08] mb-5 text-[#EDEFF5]">
              Your GitHub profile, <br />
              <span className="bg-gradient-to-br from-[#EDEFF5] via-[#EDEFF5] to-[#CCFF00] bg-clip-text text-transparent">
                alive every day.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg text-[#8E95A5] mb-9 max-w-[520px] leading-relaxed">
              Generate a personalized SVG profile card for your GitHub README and keep it updated automatically with your latest activity and statistics.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto">
              <a
                href="#builder"
                onClick={handleStartBuilding}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-full bg-[#CCFF00] text-[#060709] shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:bg-[#d8ff33] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709] cursor-pointer"
              >
                <span>Start Building</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="https://github.com/moin-dbud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-full bg-[#13151C] text-[#EDEFF5] border border-white/15 hover:bg-[#1A1D26] hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Layered Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroPipeline />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
