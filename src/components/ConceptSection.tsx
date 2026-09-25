import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const timelineSteps = [
  {
    step: '01',
    title: 'GitHub Activity',
    description: 'Fetches stars, contributions, commit streaks, pull requests, and followers through official endpoints.',
  },
  {
    step: '02',
    title: 'Generated SVG',
    description: 'Python script compiles config and stats into a vector graphic with custom themes and layout grids.',
  },
  {
    step: '03',
    title: 'GitHub README',
    description: 'The output SVG is committed straight to your profile repository, keeping assets local and fast.',
  },
  {
    step: '04',
    title: 'Daily Update',
    description: 'GitHub Actions runs the workflow on a daily schedule to re-fetch, re-render, and commit changes.',
  },
];

export const ConceptSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-wider uppercase text-[#CCFF00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span>Architecture Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-[#EDEFF5] mb-4">
            Your README shouldn&apos;t stay static.
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A5] max-w-[620px] font-normal leading-relaxed">
            A continuous pipeline that transforms GitHub activity data into a clean vector graphic directly inside your repository.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line across cards for desktop */}
          <div
            className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-white/5 via-[#CCFF00]/50 to-white/5 z-0 pointer-events-none"
            aria-hidden="true"
          />

          {timelineSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#0D0E12] border border-white/[0.06] rounded-2xl p-6 sm:p-7 relative z-10 flex flex-col transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-lg font-bold text-[#CCFF00] bg-[#13151C] w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#EDEFF5] mb-2">{item.title}</h3>
              <p className="text-sm text-[#8E95A5] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
