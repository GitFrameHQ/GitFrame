import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Edit3, Sparkles } from 'lucide-react';
import type { GitFrameProfile } from '../../types/builder';

interface BuilderCompleteProps {
  profile: GitFrameProfile;
  onEditStep: (stepIndex: number) => void;
  onGenerateBento: () => void;
}

export const BuilderComplete: React.FC<BuilderCompleteProps> = ({
  profile,
  onEditStep,
  onGenerateBento,
}) => {
  const summaryItems = [
    { label: 'Full Name', value: profile.fullName || '(Blank)', stepIdx: 0 },
    { label: 'GitHub Username', value: profile.githubUsername ? `@${profile.githubUsername}` : '(Blank)', stepIdx: 1 },
    { label: 'X (Twitter)', value: profile.twitterUsername ? `@${profile.twitterUsername}` : '(Blank)', stepIdx: 2 },
    { label: 'LinkedIn', value: profile.linkedinUsername ? `@${profile.linkedinUsername}` : '(Blank)', stepIdx: 3 },
    { label: 'Website', value: profile.websiteUrl || '(Blank)', stepIdx: 4 },
    { label: 'Profile Image', value: profile.imageUrl ? 'Custom image loaded' : '(Blank)', stepIdx: 5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      {/* Success Badge Banner */}
      <div className="bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-2xl p-5 flex items-start gap-4 shadow-[0_0_20px_rgba(204,255,0,0.1)]">
        <div className="w-10 h-10 rounded-xl bg-[#CCFF00] text-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(204,255,0,0.35)]">
          <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#EDEFF5] tracking-tight">
            Profile Configured!
          </h3>
          <p className="text-xs text-[#8E95A5] leading-relaxed mt-0.5">
            Your GitFrame SVG card is dynamically rendered in the live preview canvas.
          </p>
        </div>
      </div>

      {/* Answers Summary */}
      <div className="bg-[#13151C] border border-white/10 rounded-2xl p-4 sm:p-5">
        <div className="text-xs font-mono text-[#8E95A5] uppercase tracking-wider mb-3">
          Configured Fields
        </div>

        <div className="flex flex-col gap-2.5">
          {summaryItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-0"
            >
              <div>
                <span className="text-[#8E95A5]">{item.label}: </span>
                <span className="text-[#EDEFF5] font-semibold font-mono">{item.value}</span>
              </div>
              <button
                onClick={() => onEditStep(item.stepIdx)}
                className="text-[#CCFF00] hover:underline flex items-center gap-1 font-mono text-[11px] cursor-pointer"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Single Prominent Action Button: Generate Bento */}
      <div className="pt-2">
        <button
          onClick={onGenerateBento}
          className="w-full py-4 px-6 rounded-2xl bg-[#CCFF00] text-[#060709] font-extrabold text-base shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:bg-[#d8ff33] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0E12] cursor-pointer"
        >
          <Sparkles className="w-5 h-5 fill-current stroke-[1.5]" />
          <span>Generate Bento</span>
        </button>
      </div>
    </motion.div>
  );
};
