import React from 'react';

interface FooterProps {
  onNavigateToBuilder?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToBuilder }) => {
  const handleBuilderClick = (e: React.MouseEvent) => {
    if (onNavigateToBuilder) {
      e.preventDefault();
      onNavigateToBuilder();
    }
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] text-sm text-[#8E95A5]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <a className="flex items-center gap-2" href="/">
              <img src="/gitframe.png" alt="GitFrame" className="w-6 h-6" />
              <strong className="text-[#EDEFF5] font-semibold">GitFrame</strong>
            </a>
            <span className="opacity-30">|</span>
            <span>Made with ♥ by Moin</span>
          </div>

          <ul className="flex items-center gap-6 list-none">
            <li>
              <a
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EDEFF5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-sm"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="/builder"
                onClick={handleBuilderClick}
                className="hover:text-[#EDEFF5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-sm cursor-pointer"
              >
                Builder
              </a>
            </li>
            <li>
              <a
                href="https://github.com/moin-dbud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EDEFF5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-sm"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
