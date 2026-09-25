import React from 'react';
import type { BuilderStepId } from '../../types/builder';

interface BuilderProgressProps {
  currentStepIndex: number;
  totalSteps: number;
  stepTitles: { id: BuilderStepId; label: string }[];
  onSelectStep: (index: number) => void;
  savedValues: Record<string, string>;
}

export const BuilderProgress: React.FC<BuilderProgressProps> = ({
  currentStepIndex,
  totalSteps,
  stepTitles,
  onSelectStep,
  savedValues,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex items-center justify-between text-xs font-mono text-[#8E95A5] mb-1">
        <span>Step {Math.min(currentStepIndex + 1, totalSteps)} of {totalSteps}</span>
        <span className="text-[#CCFF00] font-semibold">
          {Math.round((Object.values(savedValues).filter((v) => Boolean(v?.trim())).length / totalSteps) * 100)}% Complete
        </span>
      </div>

      {/* Progress pill dots */}
      <div className="grid grid-cols-6 gap-1.5">
        {stepTitles.map((step, idx) => {
          const isCompleted = idx < currentStepIndex || Boolean(savedValues[step.id]?.trim());
          const isCurrent = idx === currentStepIndex;

          return (
            <button
              key={step.id}
              onClick={() => onSelectStep(idx)}
              title={step.label}
              className={`h-2 rounded-full transition-all duration-300 relative cursor-pointer ${
                isCurrent
                  ? 'bg-[#CCFF00] shadow-[0_0_8px_rgba(204,255,0,0.5)]'
                  : isCompleted
                  ? 'bg-[#CCFF00]/40 hover:bg-[#CCFF00]/70'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
