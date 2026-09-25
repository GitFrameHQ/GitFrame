import React from 'react';
import { Star, GitPullRequest, Users, Calendar, GitCommit, Trophy, Flame } from 'lucide-react';
import type { GitHubMetrics } from '../../types/github';

interface ProfileCardStatsProps {
  metrics?: GitHubMetrics | null;
}

export const ProfileCardStats: React.FC<ProfileCardStatsProps> = ({ metrics }) => {
  const hasData = Boolean(metrics);

  const formatNumber = (num?: number) => {
    if (num === undefined || num === null) return '—';
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  const stars = metrics?.totalStars ?? 0;
  const starCountDisplay = hasData ? stars.toString() : '—';
  const contributedTo = hasData ? metrics!.contributedTo.toString() : '—';
  const prs = hasData ? metrics!.mergedPRs.toString() : '—';
  const followers = hasData ? metrics!.followers.toString() : '—';
  const totalContributions = hasData ? formatNumber(metrics!.totalContributions) : '—';
  const commits = hasData ? formatNumber(metrics!.totalCommits) : '—';
  const longestStreak = hasData ? (metrics!.longestStreak > 0 ? `${metrics!.longestStreak}` : '0') : '—';
  const currentStreak = hasData ? (metrics!.currentStreak > 0 ? `${metrics!.currentStreak}` : '0') : '—';

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
      
      {/* 1. Total Stars (Tall Card on Left) */}
      <div className="md:col-span-3 rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#713F12]/40 via-[#361E06]/60 to-[#1C1917]/90 border border-amber-500/20 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-amber-400 mb-2">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="text-xs font-bold tracking-tight text-amber-200">Total Stars</span>
          </div>

          <div className="flex items-center gap-1 mb-3">
            <Star className={`w-3.5 h-3.5 ${stars > 0 ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
            <Star className={`w-3.5 h-3.5 ${stars >= 10 ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
            <Star className={`w-3.5 h-3.5 ${stars >= 50 ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
            <Star className={`w-3.5 h-3.5 ${stars >= 100 ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
            <Star className={`w-3.5 h-3.5 ${stars >= 500 ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
          </div>

          <div className={`text-3xl sm:text-4xl font-black tracking-tight ${hasData ? 'text-amber-400' : 'text-amber-400/50'}`}>
            {starCountDisplay}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 mt-4">
          <div className="flex items-center gap-1.5 text-sky-400 mb-1">
            <Users className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold text-sky-200">Contributed To</span>
          </div>
          <div className={`text-2xl font-black tracking-tight ${hasData ? 'text-sky-400' : 'text-sky-400/50'}`}>
            {contributedTo}
          </div>
          <div className="text-[11px] text-slate-400 font-mono">Repositories</div>
        </div>
      </div>

      {/* 2. Middle Block (PRs, Followers, Total Contributions, Commits, Longest Streak) */}
      <div className="md:col-span-6 flex flex-col gap-3 sm:gap-4">
        
        {/* Sub-row 1: PRs, Followers, Total Contributions */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 flex-1">
          {/* PRs */}
          <div className="rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#1E3A8A]/50 via-[#172554]/70 to-[#0F172A] border border-blue-500/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
            <div className="flex items-center gap-1 text-blue-400">
              <GitPullRequest className="w-3.5 h-3.5" />
              <span className="text-[10px] sm:text-xs font-bold text-blue-200">PRs</span>
            </div>
            <div className="my-1">
              <div className={`text-xl sm:text-2xl font-black tracking-tight ${hasData ? 'text-[#60A5FA]' : 'text-[#60A5FA]/50'}`}>
                {prs}
              </div>
              <div className="text-[10px] text-slate-400">Merged</div>
            </div>
          </div>

          {/* Followers */}
          <div className="rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#581C87]/50 via-[#3B0764]/70 to-[#1E1B4B] border border-purple-500/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
            <div className="flex items-center gap-1 text-purple-400">
              <Users className="w-3.5 h-3.5" />
              <span className="text-[10px] sm:text-xs font-bold text-purple-200">Followers</span>
            </div>
            <div className="my-1">
              <div className={`text-xl sm:text-2xl font-black tracking-tight ${hasData ? 'text-[#C084FC]' : 'text-[#C084FC]/50'}`}>
                {followers}
              </div>
              <div className="text-[10px] text-slate-400">People</div>
            </div>
          </div>

          {/* Total Contributions */}
          <div className="rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#713F12]/40 via-[#451A03]/60 to-[#1C1917] border border-amber-500/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
            <div className="flex items-center gap-1 text-amber-400">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-[10px] sm:text-xs font-bold text-amber-200 leading-none truncate">Total Contrib.</span>
            </div>
            <div className="my-1">
              <div className={`text-xl sm:text-2xl font-black tracking-tight ${hasData ? 'text-[#FACC15]' : 'text-[#FACC15]/50'}`}>
                {totalContributions}
              </div>
              <div className="text-[10px] text-slate-400">Last year</div>
            </div>
          </div>
        </div>

        {/* Sub-row 2: Commits & Longest Streak */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 flex-1">
          {/* Commits */}
          <div className="rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#064E3B]/50 via-[#063327]/70 to-[#021F18] border border-emerald-500/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center gap-1 text-emerald-400 mb-1">
                <GitCommit className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold text-emerald-200">Commits</span>
              </div>
              <div className={`text-xl sm:text-2xl font-black tracking-tight ${hasData ? 'text-[#34D399]' : 'text-[#34D399]/50'}`}>
                {commits}
              </div>
              <div className="text-[10px] text-slate-400">Total commits</div>
            </div>
            
            {/* Sparkline wave */}
            <div className="h-6 w-full mt-2">
              <svg className="w-full h-full" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M 0 20 Q 15 22 25 14 T 50 18 T 75 8 T 100 22"
                  fill="none"
                  stroke={hasData ? '#34D399' : 'rgba(52, 211, 153, 0.3)'}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#4C1D95]/50 via-[#2E1065]/70 to-[#180828] border border-purple-500/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
            <div className="flex items-center gap-1 text-purple-400">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-bold text-purple-200">Longest Streak</span>
            </div>
            <div className="my-auto pt-2">
              <div className={`text-xl sm:text-2xl font-black tracking-tight ${hasData ? 'text-[#FACC15]' : 'text-[#FACC15]/50'}`}>
                {longestStreak}
              </div>
              <div className="text-[10px] text-slate-400">Days</div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Current Streak (Tall Card on Right) */}
      <div className="md:col-span-3 rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#881337]/50 via-[#4C0519]/70 to-[#1C1917]/90 border border-rose-500/20 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col items-center justify-between text-center">
        <div className="w-full flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-400 mb-2 shadow-[0_0_12px_rgba(244,63,94,0.3)]">
            <Flame className="w-4 h-4 fill-rose-400 text-rose-400" />
          </div>
          
          <span className="text-xs font-bold text-rose-200 tracking-tight">Current Streak</span>

          <div className={`text-4xl sm:text-5xl font-black tracking-tight my-3 ${hasData ? 'text-white' : 'text-white/40'}`}>
            {currentStreak}
          </div>
          <span className="text-xs text-slate-400 font-mono">Days</span>
        </div>

        <div className="w-full pt-3 border-t border-white/10 mt-3">
          <span className="text-xs font-semibold text-rose-300">Keep going!</span>
        </div>
      </div>

    </div>
  );
};
