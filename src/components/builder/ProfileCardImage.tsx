import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

interface ProfileCardImageProps {
  imageUrl?: string;
}

export const ProfileCardImage: React.FC<ProfileCardImageProps> = ({ imageUrl }) => {
  const hasImage = Boolean(imageUrl?.trim());

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] bg-[#0D0E12] aspect-square sm:aspect-auto h-full min-h-[200px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {hasImage ? (
          <motion.div
            key={imageUrl}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <img
              src={imageUrl}
              alt="Profile Avatar"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // If invalid image URL, hide broken image
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" 
              aria-hidden="true" 
            />
          </motion.div>
        ) : (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center p-6 w-full h-full border-2 border-dashed border-white/10 rounded-2xl m-2"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8E95A5] mb-2.5 shadow-inner">
              <ImageIcon className="w-6 h-6 stroke-[1.5]" />
            </div>
            <span className="text-xs font-mono text-[#8E95A5]">
              [Profile Image]
            </span>
            <span className="text-[10px] text-[#575E6E] mt-0.5">
              Add URL in Question 6
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
