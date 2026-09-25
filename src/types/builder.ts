import type { GitHubMetrics, GitHubFetchStatus } from './github';

export type BuilderStepId = 
  | 'fullName'
  | 'githubUsername'
  | 'twitterUsername'
  | 'linkedinUsername'
  | 'websiteUrl'
  | 'imageUrl'
  | 'complete';

export interface GitFrameProfile {
  fullName: string;
  githubUsername: string;
  twitterUsername: string;
  linkedinUsername: string;
  websiteUrl: string;
  imageUrl: string;
  githubMetrics: GitHubMetrics | null;
  githubFetchStatus: GitHubFetchStatus;
  githubFetchError: string | null;
}

export interface StepConfig {
  id: BuilderStepId;
  stepNumber: number;
  question: string;
  subtitle: string;
  placeholder: string;
  inputPrefix?: string;
  inputType?: 'text' | 'url';
  helpText?: string;
}
