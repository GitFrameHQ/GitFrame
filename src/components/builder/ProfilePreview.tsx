import React from 'react';
import { ProfileCardGreeting } from './ProfileCardGreeting';
import { ProfileCardImage } from './ProfileCardImage';
import { ProfileCardSocials } from './ProfileCardSocials';
import { ProfileCardActivity } from './ProfileCardActivity';
import { ProfileCardWebsite } from './ProfileCardWebsite';
import { ProfileCardUsername } from './ProfileCardUsername';
import { ProfileCardStats } from './ProfileCardStats';
import { ProfileCardContributionGraph } from './ProfileCardContributionGraph';
import type { GitFrameProfile } from '../../types/builder';

interface ProfilePreviewProps {
  profile: GitFrameProfile;
}

export const ProfilePreview: React.FC<ProfilePreviewProps> = ({ profile }) => {
  return (
    <div className="w-full max-w-[820px] mx-auto bg-[#060709] border border-white/10 rounded-3xl p-4 sm:p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] flex flex-col gap-3.5 sm:gap-4 select-none">
      
      {/* Row 1: Greeting + Photo + Socials (3 columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
        <div className="md:col-span-5">
          <ProfileCardGreeting fullName={profile.fullName} />
        </div>
        <div className="md:col-span-4">
          <ProfileCardImage imageUrl={profile.imageUrl} />
        </div>
        <div className="md:col-span-3">
          <ProfileCardSocials
            twitterUsername={profile.twitterUsername}
            linkedinUsername={profile.linkedinUsername}
          />
        </div>
      </div>

      {/* Row 2: Recent Activity (left) + Website (right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        <ProfileCardActivity levels={profile.githubMetrics?.recentActivityLevels} />
        <ProfileCardWebsite websiteUrl={profile.websiteUrl} />
      </div>

      {/* Row 3: GitHub Username Banner */}
      <ProfileCardUsername username={profile.githubUsername} />

      {/* Row 4: Stats Grid */}
      <ProfileCardStats metrics={profile.githubMetrics} />

      {/* Row 5: Contribution Graph */}
      <ProfileCardContributionGraph contributions={profile.githubMetrics?.contributions} />

    </div>
  );
};
