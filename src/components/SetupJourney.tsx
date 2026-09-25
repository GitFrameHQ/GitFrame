import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Configure Profile',
    desc: 'Enter your display name, tagline, social links, and preference options in the Builder tool.',
  },
  {
    num: '02',
    title: 'Live Preview',
    desc: 'Inspect the generated vector layout in real-time before downloading the project archive.',
  },
  {
    num: '03',
    title: 'Download & Push',
    desc: 'Extract the generated ZIP files and push the repository structure directly to GitHub.',
  },
  {
    num: '04',
    title: 'Set Secret Token',
    desc: 'Add your GitHub Personal Access Token (BENTO_TOKEN) to repository secrets so Actions can authenticate API requests.',
  },
  {
    num: '05',
    title: 'Enable Daily Updates',
    desc: 'GitHub Actions takes over, updating your profile README SVG automatically on a daily schedule.',
  },
];

export const SetupJourney: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-wider uppercase text-[#CCFF00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span>Step-by-Step Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-[#EDEFF5]">
            From configuration to daily automation.
          </h2>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-5 max-w-[800px] mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4 sm:gap-6 items-center bg-[#0D0E12] border border-white/[0.06] rounded-2xl p-5 sm:px-6 sm:py-5 hover:border-[#CCFF00]/40 transition-colors duration-250 shadow-sm"
            >
              <div className="font-mono text-xl sm:text-2xl font-bold text-[#CCFF00] text-left sm:text-center">
                {item.num}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#EDEFF5] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
