import React, { useState } from 'react';
import { PreviewToolbar } from './PreviewToolbar';
import { ProfilePreview } from './ProfilePreview';
import type { GitFrameProfile } from '../../types/builder';

interface PreviewCanvasProps {
  profile: GitFrameProfile;
}

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({ profile }) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 1.4));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.6));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#060709] relative">
      {/* Background Grid Texture Layer */}
      <div className="grid-bg opacity-70" aria-hidden="true" />

      {/* Top Toolbar */}
      <div className="p-4 sm:p-6 pb-2 relative z-20">
        <PreviewToolbar
          zoom={zoom}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetZoom={handleResetZoom}
        />
      </div>

      {/* Canvas Workspace */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center relative z-10">
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease-out',
          }}
          className="w-full max-w-[840px] pb-12"
        >
          <ProfilePreview profile={profile} />
        </div>
      </div>
    </div>
  );
};
