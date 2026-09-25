import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileCode, Terminal, Layers } from 'lucide-react';

export const ConfigSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-wider uppercase text-[#CCFF00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span>Simple Declarative Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-[#EDEFF5] mb-4">
            One config. Your identity.
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A5] max-w-[600px] leading-relaxed">
            Personalize your profile card without editing generator scripts.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Code Window */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#090A0E] border border-white/15 rounded-2xl overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
          >
            <div className="bg-[#0D0E12] px-4 py-3 flex items-center justify-between border-b border-white/[0.06]">
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-xs text-[#8E95A5]">config.json</span>
              <div className="w-10" />
            </div>

            <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-[#EDEFF5]">
              <pre>
                <code>
                  &#123;{'\n'}
                  {'  '}<span className="text-[#7DD3FC]">&quot;name&quot;</span>: <span className="text-[#CCFF00]">&quot;Moin Sheikh&quot;</span>,{'\n'}
                  {'  '}<span className="text-[#7DD3FC]">&quot;github_username&quot;</span>: <span className="text-[#CCFF00]">&quot;moin-dbud&quot;</span>,{'\n'}
                  {'  '}<span className="text-[#7DD3FC]">&quot;tagline&quot;</span>: <span className="text-[#CCFF00]">&quot;Building cool things, one commit at a time.&quot;</span>,{'\n'}
                  {'  '}<span className="text-[#7DD3FC]">&quot;website&quot;</span>: <span className="text-[#CCFF00]">&quot;https://github.com/moin-dbud&quot;</span>,{'\n'}
                  {'  '}<span className="text-[#7DD3FC]">&quot;social_links&quot;</span>: &#123;{'\n'}
                  {'    '}<span className="text-[#7DD3FC]">&quot;twitter&quot;</span>: <span className="text-[#CCFF00]">&quot;moin_dbud&quot;</span>{'\n'}
                  {'  '}&#125;{'\n'}
                  &#125;
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Right Column: Visual Bridge Flow */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0D0E12] border border-white/15 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4 py-4 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-[#13151C] border border-white/10 flex items-center justify-center text-[#CCFF00] shrink-0">
                <FileCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#EDEFF5] mb-1">
                  Declarative Inputs
                </h4>
                <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
                  JSON parameters define your identity, bio, tags, and social connections.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 py-4 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-[#13151C] border border-white/10 flex items-center justify-center text-[#10B981] shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#EDEFF5] mb-1">
                  Python Renderer
                </h4>
                <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
                  Scripts in your downloaded project read configuration and format clean vector graphics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4">
              <div className="w-10 h-10 rounded-xl bg-[#13151C] border border-white/10 flex items-center justify-center text-[#8B5CF6] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-[#EDEFF5] mb-1">
                  Vector Output
                </h4>
                <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
                  Crisp SVG vector layout ready for high-resolution GitHub README embedding.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
