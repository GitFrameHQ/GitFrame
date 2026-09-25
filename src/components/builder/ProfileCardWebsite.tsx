import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

interface ProfileCardWebsiteProps {
  websiteUrl?: string;
}

export const ProfileCardWebsite: React.FC<ProfileCardWebsiteProps> = ({ websiteUrl }) => {
  const hasWebsite = Boolean(websiteUrl?.trim());
  const displayUrl = hasWebsite 
    ? websiteUrl!.replace(/^https?:\/\//i, '').replace(/\/$/, '') 
    : '[yourwebsite.com]';

  return (
    <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#4A0E4E]/60 via-[#2E1065]/70 to-[#180828] border border-fuchsia-500/20 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-between group hover:border-fuchsia-400/40 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-fuchsia-300">
          <Globe className="w-4 h-4" />
          <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">Website</span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-fuchsia-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>
      <div>
        <p className={`text-base sm:text-lg font-bold tracking-tight font-mono ${hasWebsite ? 'text-white' : 'text-fuchsia-300/40 italic'}`}>
          {displayUrl}
        </p>
      </div>
    </div>
  );
};
