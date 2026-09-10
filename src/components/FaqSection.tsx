import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/bootcampData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircleQuestion } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface FaqSectionProps {
  onOpenApplication: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenApplication }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(1); // FAQ 1 open by default

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0a0b0d] relative border-t border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/20 inline-block mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              자주 묻는 질문
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              수강 신청 전 가장 궁금해하시는<br />질문과 답변을 정리했습니다.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaq === item.id;
            return (
              <StaggerItem key={item.id} direction="up">
                <div
                  className={`rounded-2xl transition-all border ${
                    isOpen
                      ? 'bg-[#12141a] border-[#c5a47e]/50 shadow-xl shadow-[#c5a47e]/10'
                      : 'bg-[#12141a] border-[#c5a47e]/15 hover:border-[#c5a47e]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] font-black text-sm flex items-center justify-center shrink-0">
                        Q
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.question}
                      </h3>
                    </div>

                    <div className="p-2 rounded-lg bg-white/5 text-gray-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#c5a47e]" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                      <div className="flex items-start gap-3 bg-[#181a22] p-4 rounded-xl border border-white/5">
                        <span className="w-6 h-6 rounded bg-[#c5a47e]/20 text-[#c5a47e] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          A
                        </span>
                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
