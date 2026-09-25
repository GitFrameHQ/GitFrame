import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProfileCardSocialsProps {
  twitterUsername?: string;
  linkedinUsername?: string;
}

export const ProfileCardSocials: React.FC<ProfileCardSocialsProps> = ({
  twitterUsername,
  linkedinUsername,
}) => {
  const hasTwitter = Boolean(twitterUsername?.trim());
  const hasLinkedin = Boolean(linkedinUsername?.trim());

  return (
    <div className="flex flex-col gap-3 h-full justify-between">
      {/* X / Twitter Card */}
      <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-[#1E293B]/80 via-[#0F172A]/90 to-[#0B1120] border border-slate-700/40 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-between flex-1 group hover:border-slate-500/50 transition-colors">
        <div className="flex items-center justify-between mb-2">
          {/* X icon */}
          <div className="w-6 h-6 flex items-center justify-center text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white tracking-tight">X (Twitter)</h3>
          <p className={`text-xs font-mono mt-0.5 ${hasTwitter ? 'text-slate-300' : 'text-slate-500 italic'}`}>
            {hasTwitter ? `@${twitterUsername}` : '[@username]'}
          </p>
        </div>
      </div>

      {/* LinkedIn Card */}
      <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-[#1E293B]/80 via-[#0F172A]/90 to-[#0B1120] border border-slate-700/40 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-between flex-1 group hover:border-slate-500/50 transition-colors">
        <div className="flex items-center justify-between mb-2">
          {/* LinkedIn icon */}
          <div className="w-6 h-6 rounded bg-[#0A66C2] flex items-center justify-center text-white">
            <span className="font-bold text-xs leading-none">in</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white tracking-tight">LinkedIn</h3>
          <p className={`text-xs font-mono mt-0.5 truncate ${hasLinkedin ? 'text-slate-300' : 'text-slate-500 italic'}`}>
            {hasLinkedin ? `@${linkedinUsername}` : '[@username]'}
          </p>
        </div>
      </div>
    </div>
  );
};
