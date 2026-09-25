import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ProfileCardActivityProps {
  levels?: number[];
}

export const ProfileCardActivity: React.FC<ProfileCardActivityProps> = ({ levels }) => {
  // Activity wave bar heights (fallback baseline if not fetched yet)
  const defaultBars = [
    2, 2, 2, 3, 2, 2, 3, 2, 3, 4, 3, 2, 3, 2, 3, 4, 3, 2, 3, 4, 5, 4, 3, 4, 5, 6, 5, 8, 12, 24
  ];

  const bars = levels && levels.length > 0 ? levels : defaultBars;
  const hasCustomData = Boolean(levels && levels.length > 0);

  return (
    <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#064E3B]/70 via-[#063327]/80 to-[#021F18] border border-emerald-500/20 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-between overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Recent Activity</span>
      </div>

      {/* Activity bars visualization */}
      <div className="flex items-end gap-[3px] sm:gap-1 h-8 pt-2">
        {bars.map((height, i) => (
          <div
            key={i}
            style={{ height: `${Math.max(2, height)}px` }}
            className={`flex-1 rounded-full transition-all duration-300 ${
              i === bars.length - 1
                ? 'bg-[#10B981] shadow-[0_0_8px_#10B981] min-w-[4px]'
                : i > bars.length - 6
                ? hasCustomData ? 'bg-emerald-400/90' : 'bg-emerald-400/60'
                : hasCustomData ? 'bg-emerald-500/50' : 'bg-emerald-500/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
