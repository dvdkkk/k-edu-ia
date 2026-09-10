import React from 'react';
import { TARGET_AUDIENCE } from '../data/bootcampData';
import { Compass, Cpu, Target, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, UserPlus, Gift } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const TargetAudienceSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#c5a47e]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#c5a47e]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#c5a47e]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#c5a47e]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#c5a47e]" />;
    }
  };

  const handleInquiryScroll = () => {
    const formElement = document.getElementById('fast-inquiry-form');
    const sectionElement = document.getElementById('fast-inquiry');

    if (window.innerWidth < 1024 && formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="audience" className="py-16 sm:py-24 bg-[#0a0b0d] relative border-t border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[400px] bg-[#c5a47e]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1.5 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/25 mb-4">
              <UserPlus className="w-3.5 h-3.5 text-[#c5a47e]" />
              TARGET STUDENTS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              이런 분들에게 <span className="text-gradient-gold">강력 추천</span>합니다
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              비전공자부터 실무 포트폴리오를 완성하고 싶은 분까지,<br className="hidden sm:inline" />
              생성형 AI × Java 풀스택 과정으로 확실한 IT 취업 로드맵을 선사합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 ENHANCED AUDIENCE CARDS WITH REAL IT/TECH IMAGES */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {TARGET_AUDIENCE.map((card) => (
            <StaggerItem key={card.id} direction="up">
              <div className="bg-[#12141a] rounded-2xl border border-[#c5a47e]/20 hover:border-[#c5a47e]/50 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(197,164,126,0.18)] flex flex-col justify-between group overflow-hidden h-full transform hover:-translate-y-1">
                
                {/* Top Image Banner Container */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-[#181a24]">
                  {card.imageUrl ? (
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1d28] to-[#0e0f14]" />
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/40 to-transparent"></div>

                  {/* Top Badge Tag */}
                  {card.badge && (
                    <div className="absolute top-3 left-3 bg-[#0a0b0d]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#c5a47e]/40 text-[#f7e7ce] text-[11px] font-black tracking-wide shadow-md">
                      {card.badge}
                    </div>
                  )}

                  {/* Floating Icon Pill */}
                  <div className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-[#0a0b0d]/90 border border-[#c5a47e]/35 text-[#c5a47e] shadow-lg group-hover:scale-110 transition-transform">
                    {getIcon(card.iconName)}
                  </div>

                  {/* Number Tag */}
                  <div className="absolute bottom-3 left-3 text-[10px] font-extrabold text-[#c5a47e]/90 tracking-widest uppercase">
                    RECOMMENDED 0{card.id}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white mb-2.5 group-hover:text-[#c5a47e] transition-colors leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs text-gray-300 leading-relaxed font-medium mb-4">
                      {card.description}
                    </p>
                  </div>

                  {/* Key Highlights Checklist */}
                  {card.highlights && card.highlights.length > 0 && (
                    <div className="pt-3 border-t border-white/10 space-y-2 mt-2">
                      {card.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a47e] shrink-0 mt-0.5" />
                          <span className="text-[11px] font-bold text-gray-200 leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* MOTIVATIONAL ENROLLMENT BANNER (PERSUASIVE CALL-TO-ACTION) */}
        <ScrollReveal direction="up" distance={30} delay={0.2}>
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#171a26] via-[#212638] to-[#171a26] rounded-3xl p-6 sm:p-8 border border-[#c5a47e]/40 shadow-[0_0_50px_rgba(197,164,126,0.2)] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#c5a47e]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a47e]/20 border border-[#c5a47e]/40 text-[#f7e7ce] text-xs font-black">
                  <Gift className="w-4 h-4 text-[#c5a47e]" />
                  <span>국비지원 95%~100% 혜택 대상 확인</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                  고민되시나요?<br />
                  <span className="text-gradient-gold">1분만에 수강 자격 및 지원금 계산</span>해보세요!
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                  비전공자/초보자 맞춤 사전상담으로 1:1 진로 로드맵 및 매월 훈련장려금 수령 가능 여부를 무료로 안내해 드립니다.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleInquiryScroll}
                className="shrink-0 px-7 py-4 rounded-xl bg-gradient-to-r from-[#c5a47e] via-[#e2d1c3] to-[#c5a47e] text-[#0a0b0d] font-black text-sm sm:text-base hover:shadow-[0_0_25px_rgba(197,164,126,0.6)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group shadow-xl"
              >
                <span>무료 수강상담 & 지원금 조회</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

