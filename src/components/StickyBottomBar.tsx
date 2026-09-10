import React from 'react';
import { Sparkles, ArrowRight, Zap, Calculator } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenApplication: () => void;
  onOpenCalculator: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenApplication,
  onOpenCalculator
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0b0d]/98 backdrop-blur-xl border-t border-[#c5a47e]/30 pt-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))] px-3 sm:px-4 shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Info & Seat Badge */}
        <div className="flex items-center gap-2 text-xs shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#1e1a12] via-[#2a2318] to-[#1e1a12] border border-[#c5a47e]/40 shadow-[0_0_12px_rgba(197,164,126,0.25)]">
            <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a47e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c5a47e]"></span>
            </span>
            <span className="text-[#c5a47e] text-[11px] sm:text-xs font-extrabold shrink-0 whitespace-nowrap">
              선착순 마감임박
            </span>
          </div>

          <span className="hidden md:inline-block text-gray-300 font-semibold">
            <strong className="inline-flex items-center gap-1.5 text-[#f7e7ce] font-extrabold bg-gradient-to-r from-[#ffe8c6] via-[#c5a47e] to-[#ffe8c6] bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(197,164,126,0.8)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-bounce shrink-0" />
              국취제 연계시 매월 최대 80만원씩 지원
            </strong>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={onOpenApplication}
            className="px-3.5 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-black font-black text-xs sm:text-sm tracking-tight shadow-lg shadow-yellow-500/40 flex items-center gap-1 sm:gap-1.5 active:scale-95 transition-all whitespace-nowrap animate-pulse hover:animate-none border border-yellow-300"
          >
            <span>지금 바로 교육문의</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
