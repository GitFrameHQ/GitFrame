import React from 'react';
import { Activity, Code, FileText } from 'lucide-react';

export const HeroPipeline: React.FC = () => {
  return (
    <div className="relative h-[420px] sm:h-[480px] w-full flex items-center justify-center [perspective:1000px]">
      {/* Ambient Lighting Behind Visual */}
      <div 
        className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.22)_0%,rgba(139,92,246,0.15)_50%,transparent_70%)] blur-[50px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative w-full h-full z-10 [transform-style:preserve-3d]">
        {/* Connective Flow SVG Paths */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 400 480"
          aria-hidden="true"
        >
          <path
            d="M 120 100 Q 200 180 260 220"
            fill="none"
            className="stroke-white/15 animate-dash-flow stroke-[1.5]"
          />
          <path
            d="M 260 260 Q 200 320 140 380"
            fill="none"
            className="stroke-white/15 animate-dash-flow stroke-[1.5]"
          />
          <circle
            className="fill-[#CCFF00] drop-shadow-[0_0_6px_#CCFF00]"
            cx="190"
            cy="170"
            r="4"
          />
          <circle
            className="fill-[#CCFF00] drop-shadow-[0_0_6px_#CCFF00]"
            cx="200"
            cy="320"
            r="4"
          />
        </svg>

        {/* Layer 1: Data Ingestion */}
        <div className="absolute w-[290px] sm:w-[340px] top-[8%] left-[2%] sm:left-[4%] bg-[#0D0E12]/85 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] animate-float-1 will-change-transform z-10">
          <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-white/5">
            <span className="font-mono text-xs font-semibold text-[#8E95A5] tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#8E95A5]" />
              01. STATS_FETCH
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
          </div>
          <div className="font-mono text-xs text-[#8E95A5] flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span>Commits</span>
              <span className="text-[#CCFF00] font-medium">1,284</span>
            </div>
            <div className="flex justify-between items-center">
              <span>PRs / Stars</span>
              <span className="text-[#EDEFF5] font-medium">42 / 189</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Streak</span>
              <span className="text-[#10B981] font-medium">14 Days</span>
            </div>
          </div>
        </div>

        {/* Layer 2: SVG Render Engine */}
        <div className="absolute w-[290px] sm:w-[340px] top-[34%] right-[2%] sm:right-[4%] bg-[#0D0E12]/90 backdrop-blur-md border border-[#CCFF00]/40 rounded-2xl p-4 sm:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(204,255,0,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] animate-float-2 will-change-transform z-20">
          <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-white/5">
            <span className="font-mono text-xs font-semibold text-[#CCFF00] tracking-wider flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-[#CCFF00]" />
              02. SVG_RENDERER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
          </div>
          <div className="bg-black/50 border border-white/5 rounded-lg p-2.5 font-mono text-[11px] leading-relaxed text-[#7DD3FC] overflow-hidden">
            <div>&lt;svg width=&quot;480&quot; height=&quot;220&quot;&gt;</div>
            <div className="pl-3 text-[#A78BFA]">&lt;rect class=&quot;bento-card&quot; ... /&gt;</div>
            <div className="pl-3 text-[#CCFF00]">&lt;g class=&quot;activity-graph&quot;&gt;...&lt;/g&gt;</div>
            <div>&lt;/svg&gt;</div>
          </div>
        </div>

        {/* Layer 3: README Integration */}
        <div className="absolute w-[290px] sm:w-[340px] bottom-[6%] left-[8%] sm:left-[14%] bg-[#0D0E12]/85 backdrop-blur-md border border-[#8B5CF6]/30 rounded-2xl p-4 sm:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] animate-float-3 will-change-transform z-10">
          <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-white/5">
            <span className="font-mono text-xs font-semibold text-[#8E95A5] tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
              03. README.MD
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
          </div>
          <div className="font-mono text-xs text-[#8E95A5] bg-black/40 border border-white/5 rounded-lg p-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-[#CCFF00]">![Bento Profile]</span>
            <span className="text-[#EDEFF5]">(./assets/profile-bento.svg)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
