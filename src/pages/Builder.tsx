import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BuilderShell } from '../components/builder/BuilderShell';
import { PreviewCanvas } from '../components/builder/PreviewCanvas';
import { GenerationSuccessModal } from '../components/builder/GenerationSuccessModal';
import { fetchGitHubMetrics } from '../services/github/githubService';
import type { BuilderStepId, StepConfig, GitFrameProfile } from '../types/builder';

interface BuilderPageProps {
  onNavigateHome: () => void;
}

const steps: StepConfig[] = [
  {
    id: 'fullName',
    stepNumber: 1,
    question: "What's your full name?",
    subtitle: 'This will be displayed as the main headline on your greeting card.',
    placeholder: 'Enter your full name (e.g. Moin Sheikh)',
  },
  {
    id: 'githubUsername',
    stepNumber: 2,
    question: "What's your GitHub username?",
    subtitle: "We'll automatically fetch your stars, repositories, commits, and contribution heatmap.",
    placeholder: 'Enter your GitHub handle (e.g. moin-dbud)',
    inputPrefix: '@',
    helpText: 'Metrics are safely retrieved using official public endpoints. No token required.',
  },
  {
    id: 'twitterUsername',
    stepNumber: 3,
    question: "What's your X username?",
    subtitle: 'Enter your handle/username on X (formerly Twitter).',
    placeholder: 'e.g. Moin_Sheikh09',
    inputPrefix: '@',
  },
  {
    id: 'linkedinUsername',
    stepNumber: 4,
    question: "What's your LinkedIn username?",
    subtitle: 'Enter your personal LinkedIn handle or slug.',
    placeholder: 'e.g. moin-sheikh',
    inputPrefix: 'in/',
  },
  {
    id: 'websiteUrl',
    stepNumber: 5,
    question: "What's your website?",
    subtitle: 'Enter your personal portfolio, blog, or project website URL.',
    placeholder: 'https://moinsheikh.in',
    inputType: 'url',
  },
  {
    id: 'imageUrl',
    stepNumber: 6,
    question: 'Add your profile image',
    subtitle: 'Provide a direct public image URL (JPEG/PNG/WebP) for your portrait photo card.',
    placeholder: 'https://example.com/avatar.jpg',
    inputType: 'url',
    helpText: 'Leave empty or paste an image link. Preview animates smoothly when loaded.',
  },
];

export const Builder: React.FC<BuilderPageProps> = ({ onNavigateHome }) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Initial state is blank as strictly required
  const [profile, setProfile] = useState<GitFrameProfile>({
    fullName: '',
    githubUsername: '',
    twitterUsername: '',
    linkedinUsername: '',
    websiteUrl: '',
    imageUrl: '',
    githubMetrics: null,
    githubFetchStatus: 'idle',
    githubFetchError: null,
  });

  const handleSaveStep = async (stepId: BuilderStepId, value: string) => {
    // 1. Update state field
    setProfile((prev) => ({
      ...prev,
      [stepId]: value,
    }));

    // 2. If saving GitHub username, trigger automatic GitHub public data fetch
    if (stepId === 'githubUsername') {
      const username = value.trim();
      setProfile((prev) => ({
        ...prev,
        githubUsername: username,
        githubFetchStatus: 'loading',
        githubFetchError: null,
      }));

      try {
        const metrics = await fetchGitHubMetrics(username);
        setProfile((prev) => ({
          ...prev,
          githubMetrics: metrics,
          githubFetchStatus: 'success',
          githubFetchError: null,
        }));
      } catch (err: any) {
        setProfile((prev) => ({
          ...prev,
          githubFetchStatus: 'error',
          githubFetchError: err?.message || 'Could not fetch GitHub profile data.',
        }));
        // We don't advance if GitHub fetch fails hard on invalid username
        throw err;
      }
    }

    // Advance to next question
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePrevStep = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSelectStepIndex = (index: number) => {
    setCurrentStepIndex(index);
  };

  const handleGenerateBento = () => {
    setIsSuccessModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row h-screen w-screen bg-[#060709] text-[#EDEFF5] overflow-hidden relative"
      >
        {/* Left Sequential Guided Configuration Sidebar */}
        <BuilderShell
          currentStepIndex={currentStepIndex}
          totalSteps={steps.length}
          steps={steps}
          profile={profile}
          onSaveStep={handleSaveStep}
          onSelectStepIndex={handleSelectStepIndex}
          onPrevStep={handlePrevStep}
          onNavigateHome={onNavigateHome}
          onGenerateBento={handleGenerateBento}
        />

        {/* Right Dynamic Live GitFrame Preview Canvas */}
        <PreviewCanvas profile={profile} />
      </motion.div>

      {/* Celebratory Success Modal */}
      <GenerationSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
