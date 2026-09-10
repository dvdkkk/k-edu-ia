import React from 'react';
import { KEY_POINTS } from '../data/bootcampData';
import { Code2, Bot, CloudUpload, Briefcase } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const KeyPointsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#c5a47e]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#e2d1c3]" />;
      case 'CloudUpload':
        return <CloudUpload className="w-6 h-6 text-[#c5a47e]" />;
      case 'BriefcaseCheck':
        return <Briefcase className="w-6 h-6 text-[#c5a47e]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#c5a47e]" />;
    }
  };

  return (
    <section id="keypoints" className="py-16 md:py-24 bg-[#0a0b0d] relative border-t border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/20 inline-block mb-3">
              CORE ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              기업이 찾는 AI-Native<br />
              자바 풀스택 개발자<br />
              <span className="text-gradient-gold"> 핵심 POINT</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              AI 시대의 개발자 취업 어떻게 준비해야 할까요? <br />국내 대기업·공공·금융 시스템의 절대다수 Java 기반 위에 생산성을 극대화하는 AI 활용 능력을 갖추어야 합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Card Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
          {KEY_POINTS.map((point) => (
            <StaggerItem key={point.id} direction="up">
              <div
                className="bg-dark-card rounded-2xl p-6 sm:p-8 border border-[#c5a47e]/15 bg-dark-card-hover relative flex flex-col justify-between group overflow-hidden h-full"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#c5a47e] to-[#8c6d48] rounded-l-2xl"></div>

                <div>
                  <div className="flex items-center justify-between mb-5 pl-2">
                    <span className="text-xs font-extrabold text-[#c5a47e] tracking-widest uppercase bg-[#c5a47e]/10 border border-[#c5a47e]/20 px-3 py-1 rounded-md">
                      {point.shortTag}
                    </span>
                    <div className="p-3 rounded-xl bg-[#c5a47e]/10 border border-[#c5a47e]/20">
                      {getIcon(point.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 pl-2 group-hover:text-[#c5a47e] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-2">
                    {point.content}
                  </p>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
