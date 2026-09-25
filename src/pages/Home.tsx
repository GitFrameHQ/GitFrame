import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ConceptSection } from '../components/ConceptSection';
import { AutomationSection } from '../components/AutomationSection';
import { ConfigSection } from '../components/ConfigSection';
import { RepositorySection } from '../components/RepositorySection';
import { SetupJourney } from '../components/SetupJourney';
import { EditorialSection } from '../components/EditorialSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

interface HomeProps {
  onNavigateToBuilder?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToBuilder }) => {
  return (
    <div className="relative min-h-screen bg-[#060709] text-[#EDEFF5] selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">
      {/* Background Grid Pattern */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Floating Pill Navbar */}
      <Navbar onNavigateToBuilder={onNavigateToBuilder} />

      {/* Main Content Sections */}
      <main>
        <Hero onNavigateToBuilder={onNavigateToBuilder} />
        <ConceptSection />
        <AutomationSection />
        <ConfigSection />
        <RepositorySection />
        <SetupJourney />
        <EditorialSection />
        <FinalCTA onNavigateToBuilder={onNavigateToBuilder} />
      </main>

      {/* Footer */}
      <Footer onNavigateToBuilder={onNavigateToBuilder} />
    </div>
  );
};
