import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigateToBuilder?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToBuilder }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 80 && currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBuilderClick = (e: React.MouseEvent) => {
    if (onNavigateToBuilder) {
      e.preventDefault();
      onNavigateToBuilder();
    }
  };

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[130%] opacity-0'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto bg-[#0D0E12]/80 backdrop-blur-xl border border-white/10 rounded-full py-2 pl-5 pr-3 flex items-center justify-between w-full max-w-[640px] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]"
      >
        <a
          href="/"
          className="flex items-center gap-2.5 font-bold text-sm tracking-tight text-[#EDEFF5] hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-full"
          aria-label="GitFrame Home"
        >
           <img src="/gitframe.png" alt="GitFrame" className="w-6 h-6" />
          <span className="font-sans">GitFrame</span>
        </a>

        <ul className="flex items-center gap-2 list-none">
          <li>
            <a
              href="/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-[#8E95A5] hover:text-[#EDEFF5] hover:bg-white/5 py-1.5 px-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="/builder"
              onClick={handleBuilderClick}
              className="bg-[#CCFF00] text-black text-xs sm:text-sm font-semibold py-1.5 px-3.5 sm:px-4 rounded-full shadow-[0_0_10px_rgba(204,255,0,0.25)] hover:bg-[#d8ff33] hover:shadow-[0_0_16px_rgba(204,255,0,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709] cursor-pointer"
            >
              Builder
            </a>
          </li>
          <li>
            <a
              href="https://github.com/moin-dbud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-[#8E95A5] hover:text-[#EDEFF5] hover:bg-white/5 py-1.5 px-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00]"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
