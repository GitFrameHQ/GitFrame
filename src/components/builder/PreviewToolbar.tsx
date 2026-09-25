import React from 'react';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

interface PreviewToolbarProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
}

export const PreviewToolbar: React.FC<PreviewToolbarProps> = ({
  zoom,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-[#0D0E12]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
      {/* Left status badge */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/25 text-[#CCFF00] font-mono text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <span>Live Preview</span>
        </div>
        <span className="hidden sm:inline text-xs text-[#8E95A5] font-medium">
          Browser Rendered (No Python)
        </span>
      </div>

      {/* Right Zoom / View Controls */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onZoomOut}
          aria-label="Zoom Out"
          className="p-1.5 rounded-lg text-[#8E95A5] hover:text-[#EDEFF5] hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] cursor-pointer"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <span className="font-mono text-xs text-[#EDEFF5] px-2 min-w-[45px] text-center select-none">
          {Math.round(zoom * 100)}%
        </span>

        <button
          onClick={onZoomIn}
          aria-label="Zoom In"
          className="p-1.5 rounded-lg text-[#8E95A5] hover:text-[#EDEFF5] hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] cursor-pointer"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-4 bg-white/10 mx-1" />

        <button
          onClick={onResetZoom}
          aria-label="Reset View"
          className="p-1.5 rounded-lg text-[#8E95A5] hover:text-[#EDEFF5] hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] cursor-pointer"
          title="Reset Zoom"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
