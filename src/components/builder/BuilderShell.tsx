import React from 'react';
import { Layers, ArrowLeft } from 'lucide-react';
import { BuilderProgress } from './BuilderProgress';
import { BuilderQuestion } from './BuilderQuestion';
import { BuilderComplete } from './BuilderComplete';
import type { BuilderStepId, StepConfig, GitFrameProfile } from '../../types/builder';

interface BuilderShellProps {
  currentStepIndex: number;
  totalSteps: number;
  steps: StepConfig[];
  profile: GitFrameProfile;
  onSaveStep: (stepId: BuilderStepId, value: string) => Promise<boolean | void> | boolean | void;
  onSelectStepIndex: (index: number) => void;
  onPrevStep: () => void;
  onNavigateHome: () => void;
  onGenerateBento: () => void;
}

export const BuilderShell: React.FC<BuilderShellProps> = ({
  currentStepIndex,
  totalSteps,
  steps,
  profile,
  onSaveStep,
  onSelectStepIndex,
  onPrevStep,
  onNavigateHome,
  onGenerateBento,
}) => {
  const isComplete = currentStepIndex >= totalSteps;
  const currentStep = steps[currentStepIndex];

  const stepTitles = steps.map((s) => ({
    id: s.id,
    label: s.question,
  }));

  const savedValues: Record<string, string> = {
    fullName: profile.fullName,
    githubUsername: profile.githubUsername,
    twitterUsername: profile.twitterUsername,
    linkedinUsername: profile.linkedinUsername,
    websiteUrl: profile.websiteUrl,
    imageUrl: profile.imageUrl,
  };

  return (
    <aside className="w-full lg:w-[420px] xl:w-[460px] bg-[#0D0E12] border-r border-white/10 flex flex-col h-full z-20 shrink-0 shadow-2xl">
      
      {/* Top Header / Brand Bar */}
      <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#8E95A5] hover:text-[#EDEFF5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-lg px-2 py-1 -ml-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gradient-to-br from-[#CCFF00] to-[#10B981] rounded flex items-center justify-center text-black shadow-[0_0_10px_rgba(204,255,0,0.3)]">
            <Layers className="w-3 h-3 stroke-[2.5]" />
          </div>
          <span className="text-xs font-bold text-[#EDEFF5] font-sans tracking-tight">
            GitFrame Builder
          </span>
        </div>
      </div>

      {/* Main Form Body */}
      <div className="p-6 sm:p-8 flex-1 overflow-y-auto flex flex-col">
        
        {/* Step Progress Dots */}
        <BuilderProgress
          currentStepIndex={currentStepIndex}
          totalSteps={totalSteps}
          stepTitles={stepTitles}
          onSelectStep={onSelectStepIndex}
          savedValues={savedValues}
        />

        {/* Guided Step / Complete View */}
        {!isComplete && currentStep && (
          <BuilderQuestion
            step={currentStep}
            profile={profile}
            onSaveStep={onSaveStep}
            onPrevStep={onPrevStep}
            isFirstStep={currentStepIndex === 0}
            isLastStep={currentStepIndex === totalSteps - 1}
          />
        )}

        {isComplete && (
          <BuilderComplete
            profile={profile}
            onEditStep={onSelectStepIndex}
            onGenerateBento={onGenerateBento}
          />
        )}

      </div>

      {/* Bottom Footer Notice */}
      <div className="p-4 border-t border-white/5 bg-[#0A0B0E] text-[11px] text-[#575E6E] font-mono text-center">
        <span>GitFrame • Browser Rendered • Zero Server Storage</span>
      </div>

    </aside>
  );
};
