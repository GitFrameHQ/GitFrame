import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfileCardGreetingProps {
  fullName: string;
}

export const ProfileCardGreeting: React.FC<ProfileCardGreetingProps> = ({ fullName }) => {
  return (
    <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#4338CA]/70 via-[#3730A3]/40 to-[#1E1B4B]/90 border border-indigo-500/20 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col justify-between overflow-hidden group">
      {/* Ambient background glow */}
      <div 
        className="absolute -top-10 -left-10 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10">
        <div className="text-2xl sm:text-3xl mb-1.5 select-none" aria-hidden="true">
          👋
        </div>
        <div className="text-xs sm:text-sm font-medium text-indigo-200/80 mb-1">
          Hey I&apos;m
        </div>
        
        {/* Dynamic Full Name */}
        <div className="min-h-[36px] sm:min-h-[44px] flex items-center">
          <AnimatePresence mode="wait">
            {fullName.trim() ? (
              <motion.h2
                key={fullName}
                initial={{ opacity: 0, y: 4, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight"
              >
                {fullName}
              </motion.h2>
            ) : (
              <motion.div
                key="empty-placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-9 px-3.5 bg-white/5 rounded-xl border border-dashed border-indigo-300/30 flex items-center"
              >
                <span className="text-xs text-indigo-200/50 font-mono tracking-wide">
                  [Your Name]
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-xs sm:text-sm text-indigo-100/70 leading-relaxed mt-2.5 max-w-[240px]">
          Building cool things, one commit at a time.
        </p>
      </div>

      {/* Badges / Pill Tags */}
      <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2 mt-5">
        <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#4F46E5]/40 text-indigo-100 border border-indigo-400/30 backdrop-blur-sm">
          Developer
        </span>
        <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#0284C7]/30 text-sky-200 border border-sky-400/30 backdrop-blur-sm">
          Problem Solver
        </span>
        <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-[#0D9488]/30 text-teal-200 border border-teal-400/30 backdrop-blur-sm">
          Lifelong Learner
        </span>
      </div>
    </div>
  );
};
