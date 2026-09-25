export interface GitHubUserProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubContributionDay {
  date: string;
  count: number;
  level: number; // 0 to 4
}

export interface GitHubContributionData {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  weeks: number[][]; // 52 weeks x 7 days level (0-4)
}

export interface GitHubMetrics {
  username: string;
  name: string | null;
  avatarUrl: string | null;
  bio: string | null;
  followers: number;
  publicRepos: number;
  totalStars: number;
  mergedPRs: number;
  totalCommits: number;
  contributedTo: number;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  contributions: GitHubContributionData | null;
  recentActivityLevels: number[];
}

export type GitHubFetchStatus = 'idle' | 'loading' | 'success' | 'error';
