import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Loader2, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';
import type { BuilderStepId, StepConfig, GitFrameProfile } from '../../types/builder';

interface BuilderQuestionProps {
  step: StepConfig;
  profile: GitFrameProfile;
  onSaveStep: (stepId: BuilderStepId, value: string) => Promise<boolean | void> | boolean | void;
  onPrevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export const BuilderQuestion: React.FC<BuilderQuestionProps> = ({
  step,
  profile,
  onSaveStep,
  onPrevStep,
  isFirstStep,
}) => {
  const currentSavedValue = (profile as any)[step.id] || '';
  const [inputValue, setInputValue] = useState(currentSavedValue);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessBadge, setShowSuccessBadge] = useState(false);

  // Sync state when step changes
  useEffect(() => {
    const val = (profile as any)[step.id] || '';
    setInputValue(val);
    setErrorMessage(null);
  }, [step.id, profile]);

  const validate = (val: string): boolean => {
    const trimmed = val.trim();
    if (!trimmed) {
      setErrorMessage('This field cannot be blank.');
      return false;
    }

    if (step.id === 'websiteUrl') {
      try {
        const withProtocol = trimmed.startsWith('http://') || trimmed.startsWith('https://') 
          ? trimmed 
          : `https://${trimmed}`;
        new URL(withProtocol);
      } catch {
        setErrorMessage('Please enter a valid website URL (e.g. https://example.com)');
        return false;
      }
    }

    if (step.id === 'imageUrl') {
      try {
        const url = new URL(trimmed);
        if (!url.protocol.startsWith('http')) {
          setErrorMessage('Please enter a valid HTTP/HTTPS image URL.');
          return false;
        }
      } catch {
        setErrorMessage('Please enter a valid image URL.');
        return false;
      }
    }

    setErrorMessage(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(inputValue)) return;

    // Clean username formats
    let cleanVal = inputValue.trim();
    if (step.id === 'githubUsername' || step.id === 'twitterUsername') {
      cleanVal = cleanVal.replace(/^@+/, '').replace(/^https?:\/\/(x|twitter|github)\.com\//i, '');
    }
    if (step.id === 'linkedinUsername') {
      cleanVal = cleanVal.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, '').replace(/\/$/, '');
    }

    setIsSubmitting(true);
    try {
      const result = await onSaveStep(step.id, cleanVal);
      if (result !== false) {
        setShowSuccessBadge(true);
        setTimeout(() => setShowSuccessBadge(false), 2000);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Failed to save value.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isGitHubStep = step.id === 'githubUsername';
  const isGitHubLoading = isGitHubStep && profile.githubFetchStatus === 'loading';
  const isGitHubError = isGitHubStep && profile.githubFetchStatus === 'error';
  const isGitHubSuccess = isGitHubStep && profile.githubFetchStatus === 'success';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col justify-between flex-1"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Question Title & Subtitle */}
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#CCFF00] tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Question {step.stepNumber}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#EDEFF5] tracking-tight leading-tight mb-2">
              {step.question}
            </h2>
            
            <p className="text-sm text-[#8E95A5] leading-relaxed">
              {step.subtitle}
            </p>
          </div>

          {/* Single Focused Input Box */}
          <div className="flex flex-col gap-2">
            <div className="relative">
              {step.inputPrefix && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-[#8E95A5] select-none">
                  {step.inputPrefix}
                </span>
              )}
              
              <input
                type="text"
                autoFocus
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder={step.placeholder}
                className={`w-full bg-[#13151C] border rounded-2xl py-3.5 sm:py-4 text-base text-[#EDEFF5] placeholder:text-[#575E6E] font-medium transition-all focus:outline-none ${
                  step.inputPrefix ? 'pl-9 pr-4' : 'px-4'
                } ${
                  errorMessage
                    ? 'border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                    : 'border-white/10 focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]'
                }`}
              />

              {showSuccessBadge && !isGitHubLoading && (
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#CCFF00] flex items-center gap-1 font-mono text-xs font-bold bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-2 py-1 rounded-lg">
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </div>
              )}
            </div>

            {/* Error message */}
            {errorMessage && (
              <div className="flex items-center gap-1.5 text-xs text-rose-400 font-medium mt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* GitHub Fetch Status Indicator */}
            {isGitHubLoading && (
              <div className="flex items-center gap-2 text-xs font-mono text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-xl p-3 mt-1">
                <Loader2 className="w-4 h-4 animate-spin text-[#CCFF00]" />
                <span>Fetching GitHub profile, stars, and contribution metrics...</span>
              </div>
            )}

            {isGitHubSuccess && (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 mt-1">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>✓ GitHub profile loaded ({profile.githubMetrics?.publicRepos} repos, {profile.githubMetrics?.totalStars} stars)</span>
              </div>
            )}

            {isGitHubError && (
              <div className="flex flex-col gap-2 text-xs text-rose-300 bg-rose-950/40 border border-rose-500/30 rounded-xl p-3 mt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{profile.githubFetchError || "GitHub profile couldn't be loaded."}</span>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="self-start inline-flex items-center gap-1 text-[11px] font-mono text-[#CCFF00] hover:underline"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retry Fetching</span>
                </button>
              </div>
            )}

            {step.helpText && (
              <span className="text-[11px] text-[#8E95A5] leading-relaxed">
                {step.helpText}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            {!isFirstStep && (
              <button
                type="button"
                onClick={onPrevStep}
                className="px-4 py-3.5 rounded-xl border border-white/10 text-sm font-semibold text-[#8E95A5] hover:text-[#EDEFF5] hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isGitHubLoading}
              className="flex-1 py-3.5 px-6 rounded-xl bg-[#CCFF00] text-[#060709] font-bold text-sm shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:bg-[#d8ff33] hover:shadow-[0_0_28px_rgba(204,255,0,0.35)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              {isSubmitting || isGitHubLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <span>Save & Continue</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>
          </div>

        </form>
      </motion.div>
    </AnimatePresence>
  );
};
