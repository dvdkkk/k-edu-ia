import React from 'react';
import { CAREER_STEPS } from '../data/bootcampData';
import { UserCheck, FileText, Send, ShieldCheck, Check, Sparkles, Award } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const CAREER_STEP_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "1:1 IT 진로 및 취업 상담 대시보드",
    tag: "1:1 멘토링"
  },
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    alt: "개발자 포트폴리오 및 소스코드",
    tag: "포트폴리오 첨삭"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    alt: "IT 기업 클라우드 및 네트워크 매칭",
    tag: "채용 매칭"
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    alt: "지속적인 IT 기술 역량 케어",
    tag: "사후 케어"
  }
];

export const CareerSupportSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserCheck className="w-5 h-5 text-[#c5a47e]" />;
      case 1:
        return <FileText className="w-5 h-5 text-[#e2d1c3]" />;
      case 2:
        return <Send className="w-5 h-5 text-[#c5a47e]" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-[#c5a47e]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#c5a47e]" />;
    }
  };

  return (
    <section id="careersupport" className="py-16 md:py-24 bg-[#0a0b0d] relative border-t border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/20 inline-flex items-center gap-1.5 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> ALL-IN-ONE CAREER CARE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              취업지원 - 수료 후까지 이어지는 <br />
              <span className="text-gradient-gold">밀착 취업지원 시스템</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              수강 전부터 수료 후까지 전담 IT 취업 컨설턴트가 1:1로 밀착 서포트합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid with IT Images */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" staggerDelay={0.12}>
          {CAREER_STEPS.map((step, idx) => {
            const imgData = CAREER_STEP_IMAGES[idx] || CAREER_STEP_IMAGES[0];
            return (
              <StaggerItem key={idx} direction="up">
                <div
                  className="bg-[#12141a] rounded-2xl border border-[#c5a47e]/20 hover:border-[#c5a47e]/50 transition-all duration-300 relative flex flex-col justify-between group h-full overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(197,164,126,0.15)]"
                >
                  {/* Top IT Image Container */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#181a24]">
                    <img
                      src={imgData.url}
                      alt={imgData.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/40 to-transparent"></div>

                    {/* Step Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-xs font-black px-2.5 py-1 rounded bg-[#0a0b0d]/80 text-[#c5a47e] border border-[#c5a47e]/30 backdrop-blur-md">
                        {step.step}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#c5a47e]/20 text-[#f7e7ce] border border-[#c5a47e]/40 backdrop-blur-md">
                        {imgData.tag}
                      </span>
                    </div>

                    {/* Floating Icon */}
                    <div className="absolute -bottom-3 right-4 p-2.5 rounded-xl bg-[#1a1d28] border border-[#c5a47e]/30 shadow-md group-hover:border-[#c5a47e]/60 transition-colors">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#c5a47e] transition-colors leading-snug">
                        {step.title}
                      </h3>

                      <ul className="space-y-2.5 mb-4">
                        {step.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-200 font-medium">
                            <Check className="w-3.5 h-3.5 text-[#c5a47e] mt-0.5 shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-gray-400">
                      <span className="text-gray-300 font-medium flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#c5a47e]" /> 전담 컨설턴트
                      </span>
                      <span className="text-[#c5a47e] font-bold">100% 보장</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
