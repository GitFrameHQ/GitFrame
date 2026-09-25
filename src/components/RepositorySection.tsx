import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { KeyRound, Folder, FileText, Lock } from 'lucide-react';

export const RepositorySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-28 border-t border-white/[0.06] bg-gradient-to-b from-[#060709] to-[#0D0E12] relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: File Tree Panel */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-wider uppercase text-[#CCFF00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
              <span>Complete Open Source Codebase</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-[#EDEFF5] mb-4">
              You get the whole project.
            </h2>
            
            <p className="text-base sm:text-lg text-[#8E95A5] mb-8 leading-relaxed">
              You&apos;re downloading a clean, modular repository—not subscribing to a middleman service.
            </p>

            {/* Tree Card */}
            <div className="bg-[#13151C] border border-white/15 rounded-2xl p-6 font-mono text-[13px] text-[#8E95A5] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 text-[#EDEFF5] font-semibold py-1">
                <Folder className="w-4 h-4 text-[#7DD3FC]" />
                <span>project/</span>
              </div>
              
              <div className="pl-5 flex items-center gap-2 py-1">
                <Folder className="w-4 h-4 text-[#7DD3FC]" />
                <span>.github/workflows/</span>
              </div>
              <div className="pl-10 flex items-center gap-2 py-1 bg-[#CCFF00]/[0.08] text-[#CCFF00] font-medium rounded px-2 -mx-2 my-0.5">
                <FileText className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>update-readme.yml</span>
              </div>

              <div className="pl-5 flex items-center gap-2 py-1">
                <Folder className="w-4 h-4 text-[#7DD3FC]" />
                <span>assets/</span>
              </div>

              <div className="pl-5 flex items-center gap-2 py-1">
                <Folder className="w-4 h-4 text-[#7DD3FC]" />
                <span>scripts/</span>
              </div>
              <div className="pl-10 flex items-center gap-2 py-1">
                <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>fetch_stats.py</span>
              </div>
              <div className="pl-10 flex items-center gap-2 py-1">
                <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>render_svg.py</span>
              </div>
              <div className="pl-10 flex items-center gap-2 py-1">
                <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>generate_bento.py</span>
              </div>
              <div className="pl-10 flex items-center gap-2 py-1">
                <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>requirements.txt</span>
              </div>

              <div className="pl-5 flex items-center gap-2 py-1">
                <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>config.json</span>
              </div>
              <div className="pl-5 flex items-center gap-2 py-1">
                <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>README.md</span>
              </div>
              <div className="pl-5 flex items-center gap-2 py-1">
                <FileText className="w-3.5 h-3.5 text-[#8E95A5]" />
                <span>SETUP.md</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: GitHub Token Auth Setup Flow */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0D0E12] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg font-mono text-xs text-[#A78BFA] mb-5">
              <Lock className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Requires GitHub Personal Access Token</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#EDEFF5] mb-2.5">
              Secure GitHub Authentication
            </h3>
            
            <p className="text-sm text-[#8E95A5] leading-relaxed mb-6">
              To fetch complete profile metrics and private contribution counts, the GitHub Actions workflow uses a personal token stored safely in your repository secrets.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3.5 text-sm text-[#8E95A5]">
                <span className="font-mono text-xs text-[#EDEFF5] bg-[#1A1D26] w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                  1
                </span>
                <span className="leading-relaxed">Generate a Personal Access Token in GitHub Developer Settings.</span>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-[#8E95A5]">
                <span className="font-mono text-xs text-[#EDEFF5] bg-[#1A1D26] w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                  2
                </span>
                <span className="leading-relaxed">
                  Navigate to <strong className="text-[#EDEFF5] font-semibold">Repository Settings &rarr; Secrets and variables &rarr; Actions</strong>.
                </span>
              </div>

              <div className="flex items-start gap-3.5 text-sm text-[#8E95A5]">
                <span className="font-mono text-xs text-[#EDEFF5] bg-[#1A1D26] w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                  3
                </span>
                <div className="flex-1">
                  <span className="leading-relaxed">Add token as a repository secret:</span>
                  
                  <div className="bg-black border border-dashed border-white/20 rounded-xl p-3 sm:p-3.5 font-mono text-xs sm:text-sm flex items-center justify-between mt-2.5">
                    <div className="flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-[#CCFF00]" />
                      <span className="text-[#EDEFF5] font-bold">BENTO_TOKEN</span>
                    </div>
                    <span className="text-[#CCFF00] tracking-[0.25em] select-none font-bold">
                      ••••••••••••••••
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
