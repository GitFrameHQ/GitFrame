import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';

interface ProfileCardUsernameProps {
  username?: string;
}

export const ProfileCardUsername: React.FC<ProfileCardUsernameProps> = ({ username }) => {
  const [copied, setCopied] = useState(false);
  const hasUsername = Boolean(username?.trim());
  const displayUsername = hasUsername ? username! : '[github-username]';

  const handleCopy = () => {
    if (!hasUsername) return;
    navigator.clipboard.writeText(username!);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl px-5 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#2E1065]/80 via-[#1E1B4B]/70 to-[#0F172A]/80 border border-purple-500/20 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center justify-between">
      <div className="flex items-center gap-3.5">
        <div className="w-8 h-8 rounded-xl bg-purple-950/60 border border-purple-400/20 flex items-center justify-center text-purple-300">
          <Code2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[11px] font-medium text-purple-300/70">GitHub Username</div>
          <div className={`text-base sm:text-lg font-extrabold font-mono tracking-tight leading-tight ${hasUsername ? 'text-white' : 'text-purple-300/40 italic'}`}>
            {displayUsername}
          </div>
        </div>
      </div>

      <button
        onClick={handleCopy}
        disabled={!hasUsername}
        aria-label="Copy GitHub Username"
        className="p-2 rounded-xl text-purple-300/60 hover:text-white hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};
