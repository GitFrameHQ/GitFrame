import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Check, Download, Loader2, Sparkles, FolderArchive } from 'lucide-react';
import { CelebrationAnimation } from './CelebrationAnimation';
import { generateGitFrameZip } from '../../utils/generateGitFrameZip';

interface GenerationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GenerationSuccessModal: React.FC<GenerationSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await generateGitFrameZip();
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to generate ZIP archive:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop Blur & Dim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Celebration Particle Poppers */}
          <CelebrationAnimation />

          {/* Modal Container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.95,
              y: shouldReduceMotion ? 0 : 16,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.95,
              y: shouldReduceMotion ? 0 : 16,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-[540px] bg-[#0D0E12] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_35px_rgba(204,255,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] z-[105] overflow-hidden"
          >
            {/* Top ambient highlight bar */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8E95A5] hover:text-[#EDEFF5] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Celebratory Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-[#CCFF00]/15 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00] mb-5 shadow-[0_0_20px_rgba(204,255,0,0.25)]">
              <Sparkles className="w-6 h-6 stroke-[2.2]" />
            </div>

            {/* Exact Required Title */}
            <h2
              id="success-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-[#EDEFF5] tracking-tight leading-snug mb-5"
            >
              Your profile has been successfully created
            </h2>

            {/* 3 Concise Information Points */}
            <div className="flex flex-col gap-3 mb-8 bg-[#13151C] border border-white/5 rounded-2xl p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm text-[#EDEFF5] leading-relaxed">
                  Your GitFrame profile configuration has been created.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm text-[#EDEFF5] leading-relaxed">
                  Your project files are ready to download.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm text-[#EDEFF5] leading-relaxed">
                  Download the ZIP and add it to your GitHub repository to continue setup.
                </p>
              </div>
            </div>

            {/* Primary Action Button: Download ZIP */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full py-4 px-6 rounded-2xl bg-[#CCFF00] text-[#060709] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:bg-[#d8ff33] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0E12] disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Preparing ZIP...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <Check className="w-5 h-5 stroke-[2.5]" />
                    <span>Downloaded ✓</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>Download ZIP</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#8E95A5] text-center pt-1">
                <FolderArchive className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>Archive contains README.md • Client-side ZIP</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
