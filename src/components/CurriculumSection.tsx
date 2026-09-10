import React, { useState } from 'react';
import { CURRICULUM_STEPS } from '../data/bootcampData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const CurriculumSection: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(1); // Step 1 open by default
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleStep = (stepNumber: number) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber);
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'backend':
        return <span className="bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20 px-2.5 py-0.5 rounded text-[11px] font-semibold">Backend / Java</span>;
      case 'web':
        return <span className="bg-[#e2d1c3]/10 text-[#e2d1c3] border border-[#e2d1c3]/20 px-2.5 py-0.5 rounded text-[11px] font-semibold">Frontend / Web</span>;
      case 'cloud':
        return <span className="bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20 px-2.5 py-0.5 rounded text-[11px] font-semibold">Cloud / DevOps</span>;
      case 'ai':
        return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded text-[11px] font-semibold">AI / LLM</span>;
      case 'project':
        return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded text-[11px] font-bold">실무 프로젝트</span>;
      default:
        return <span className="bg-gray-500/10 text-gray-400 border border-gray-500/20 px-2.5 py-0.5 rounded text-[11px] font-semibold">공통</span>;
    }
  };

  const filteredSteps = CURRICULUM_STEPS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-[#0a0b0d] relative border-t border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/20 inline-block mb-3">
              ROADMAP TO SENIOR
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              커리큘럼 - 전문가로 성장하는 <br />실무완성 커리큘럼
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              기초 문법부터 Spring Boot, Docker, GCP 클라우드 배포, AI LLM API 이식, 그리고 3차 실무 프로젝트까지 체계적 완성.
            </p>
          </div>
        </ScrollReveal>


        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'all', label: '전체 (14단계)' },
            { id: 'backend', label: 'Java & 백엔드' },
            { id: 'web', label: '웹 프론트엔드' },
            { id: 'cloud', label: '클라우드 & CI/CD' },
            { id: 'ai', label: '생성형 AI & RAG' },
            { id: 'project', label: '실무 프로젝트' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#c5a47e] text-black font-bold shadow-lg shadow-[#c5a47e]/20'
                  : 'bg-[#12141a] text-gray-400 hover:text-white border border-[#c5a47e]/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Steps List (2-column grid like reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {filteredSteps.map((step) => {
            const isOpen = openStep === step.stepNumber;
            const detailItems = step.details
              ? step.details.split('/').map((s) => s.trim()).filter(Boolean)
              : [];

            return (
              <div
                key={step.stepNumber}
                onClick={() => toggleStep(step.stepNumber)}
                className={`rounded-2xl transition-all border p-6 flex flex-col justify-between cursor-pointer ${
                  isOpen
                    ? 'bg-[#22242b] border-white/15 shadow-xl shadow-black/40'
                    : 'bg-[#22242b]/90 border-white/10 hover:border-white/20 hover:bg-[#22242b]'
                }`}
              >
                <div>
                  {/* Top Header: STEP X + Chevron */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                        STEP {step.stepNumber}
                      </span>
                      {getCategoryBadge(step.category)}
                    </div>
                    <div className="text-gray-400 hover:text-white transition-colors">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {step.stepTitle}
                  </h3>
                </div>

                {/* Expanded Details List */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <ul className="space-y-2 text-sm text-gray-300 font-normal">
                      {detailItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-gray-400 text-xs mt-0.5">•</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
