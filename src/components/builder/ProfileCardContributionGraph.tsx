import React, { useMemo } from 'react';
import { Calendar } from 'lucide-react';
import type { GitHubContributionData } from '../../types/github';

interface ProfileCardContributionGraphProps {
  contributions?: GitHubContributionData | null;
}

export const ProfileCardContributionGraph: React.FC<ProfileCardContributionGraphProps> = ({
  contributions,
}) => {
  const levels = [
    'bg-[#161B22]', // 0: empty
    'bg-[#0E4429]', // 1: low
    'bg-[#006D32]', // 2: medium-low
    'bg-[#26A641]', // 3: medium-high
    'bg-[#39D353]', // 4: high
  ];

  // If real contribution data is provided, use it. Otherwise use clean placeholder weeks.
  const weeks = useMemo(() => {
    if (contributions?.weeks && contributions.weeks.length > 0) {
      return contributions.weeks;
    }

    // Placeholder baseline empty weeks (52 weeks x 7 days)
    const placeholderWeeks: number[][] = [];
    for (let w = 0; w < 48; w++) {
      const days = [0, 0, 0, 0, 0, 0, 0];
      placeholderWeeks.push(days);
    }
    return placeholderWeeks;
  }, [contributions]);

  const hasRealData = Boolean(contributions?.weeks && contributions.weeks.length > 0);

  return (
    <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#0B132B]/90 via-[#0A1128]/95 to-[#060A17] border border-blue-500/20 shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden">
      
      {/* Header with Title & Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-sky-400" />
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-none">
              Contribution Graph
            </h3>
            <span className="text-[11px] text-[#8E95A5] font-mono mt-0.5 inline-block">
              {hasRealData ? 'Last 12 months' : '[GitHub Activity Matrix]'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-[#8E95A5] font-mono">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161B22]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0E4429]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006D32]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26A641]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39D353]" />
          <span>More</span>
        </div>
      </div>

      {/* Grid container */}
      <div className="flex items-start gap-2 overflow-x-auto pb-1">
        {/* Day labels */}
        <div className="flex flex-col justify-between h-[84px] text-[9px] font-mono text-[#575E6E] pt-0.5 select-none shrink-0">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>

        {/* Heatmap Columns */}
        <div className="flex gap-[3px] sm:gap-1 flex-1 min-w-[580px]">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[3px] sm:gap-1 flex-1">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  className={`w-full aspect-square rounded-[2px] sm:rounded-[3px] transition-colors ${levels[level] || levels[0]} ${
                    level >= 3 ? 'shadow-[0_0_4px_rgba(57,211,83,0.3)]' : ''
                  }`}
                  title={hasRealData ? `Contribution level ${level}` : 'Empty'}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
