import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const AutomationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-28 border-t border-white/[0.06] bg-[radial-gradient(circle_at_70%_50%,rgba(204,255,0,0.03)_0%,transparent_60%)] relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Explanation */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-wider uppercase text-[#CCFF00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
              <span>Automated Workflow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-[#EDEFF5] mb-5">
              It updates while you work.
            </h2>

            <p className="text-base sm:text-lg text-[#8E95A5] leading-relaxed mb-6">
              No external application servers to maintain. The entire cycle runs natively inside GitHub&apos;s infrastructure using GitHub Actions workflows.
            </p>

            <p className="text-sm sm:text-base text-[#8E95A5] leading-relaxed">
              Once initialized, <code className="font-mono text-[#CCFF00] bg-[#13151C] px-2 py-0.5 rounded border border-white/5">update-readme.yml</code> executes on a daily schedule, querying your latest GitHub activity, rebuilding your SVG card, and committing updates back to your repository automatically.
            </p>
          </motion.div>

          {/* Right Circular Loop Visualization */}
          <motion.div
            className="lg:col-span-6 flex justify-center"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-square w-full max-w-[380px] sm:max-w-[420px] flex items-center justify-center p-8">
              
              {/* Ring SVG with Traveling Pulse */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200" aria-hidden="true">
                <circle
                  className="fill-none stroke-[#13151C] stroke-[6]"
                  cx="100"
                  cy="100"
                  r="80"
                />
                <circle
                  className="fill-none stroke-[#CCFF00] stroke-[6] [stroke-dasharray:80_300] animate-loop-rotate origin-center"
                  cx="100"
                  cy="100"
                  r="80"
                />
              </svg>

              {/* Center Schedule Badge */}
              <div className="absolute text-center bg-[#0D0E12] border border-white/15 p-6 rounded-full w-36 sm:w-40 h-36 sm:h-40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.8)] z-10">
                <span className="font-mono text-[11px] font-semibold text-[#CCFF00] uppercase tracking-widest">
                  SCHEDULE
                </span>
                <strong className="text-sm sm:text-base font-bold text-[#EDEFF5] mt-1 tracking-tight">
                  DAILY
                </strong>
                <span className="text-[10px] text-[#8E95A5] font-mono mt-0.5">AUTOMATION</span>
              </div>

              {/* Stage Markers around the Circle */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#13151C] border border-white/15 px-3 py-1.5 rounded-lg font-mono text-xs text-[#EDEFF5] shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20">
                1. Trigger
              </div>

              <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 bg-[#13151C] border border-white/15 px-3 py-1.5 rounded-lg font-mono text-xs text-[#EDEFF5] shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20">
                2. Fetch
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#13151C] border border-white/15 px-3 py-1.5 rounded-lg font-mono text-xs text-[#EDEFF5] shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20">
                3. Render
              </div>

              <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 bg-[#13151C] border border-white/15 px-3 py-1.5 rounded-lg font-mono text-xs text-[#EDEFF5] shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20">
                4. Commit
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
