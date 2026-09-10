import React from 'react';
import { COURSE_SUMMARY } from '../data/bootcampData';
import aiChipBg from '../assets/images/ai_chip_original_bg_1785136173674.jpg';
import { ScrollReveal } from './ScrollReveal';
import {
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Users,
  CreditCard,
  Gift,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Zap
} from 'lucide-react';

interface HeroSectionProps {
  onOpenApplication: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApplication, onOpenCalculator }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden w-full max-w-full">
      {/* AI Chip Tech Background Image & Edge Blending */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={aiChipBg}
          alt="AI Chip Background"
          className="w-full h-full object-cover object-center opacity-65 md:opacity-75 filter brightness-95 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay for text legibility while preserving background details */}
        <div className="absolute inset-0 bg-[#0a0b0d]/50"></div>
        {/* Smooth top/bottom edge fade gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0d] via-transparent to-[#0a0b0d] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d]/70 via-transparent to-[#0a0b0d]/70"></div>
      </div>

      {/* Glow Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[350px] bg-[#c5a47e]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[80vw] max-w-[400px] h-[300px] bg-[#8c6d48]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={25} delay={0.1}>
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/30 text-[#f7e7ce] text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-[#c5a47e]" />
              <span>{COURSE_SUMMARY.campus}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>국비지원과정</span>
            </div>
          </div>

          {/* Main Title Heading */}
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              <span className="text-gradient-gold block whitespace-pre-line">
                {COURSE_SUMMARY.title}
              </span>
            </h1>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#12141a]/90 border border-[#c5a47e]/20 mb-8 backdrop-blur-md glow-gold shadow-2xl">
              <p className="text-lg sm:text-xl font-bold text-gray-100 leading-snug">
                {COURSE_SUMMARY.courseTitle}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Content Grid: Info Card & Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Info Card (SECTION 1 Detail) */}
          <div className="lg:col-span-8 bg-dark-card rounded-2xl p-6 sm:p-8 border border-[#c5a47e]/20 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#c5a47e]/10 to-transparent rounded-bl-full pointer-events-none"></div>

            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#c5a47e] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>부트캠프 상세 모집 요강</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 모집인원 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181a22] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">모집인원</span>
                    <span className="text-sm font-bold text-white">{COURSE_SUMMARY.capacity}</span>
                    <span className="ml-2 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      선착순 마감예정
                    </span>
                  </div>
                </div>

                {/* 개강월 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181a22] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] mt-0.5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">개강일정</span>
                    <span className="text-sm font-bold text-white">{COURSE_SUMMARY.duration}</span>
                  </div>
                </div>

                {/* 교육시간 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181a22] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">교육시간</span>
                    <span className="text-sm font-bold text-white">{COURSE_SUMMARY.schedule}</span>
                  </div>
                </div>

                {/* 훈련장려금 */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#181a22] border border-[#c5a47e]/20">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 block">훈련장려금</span>
                    <span className="text-sm font-bold text-amber-300">{COURSE_SUMMARY.stipendNote}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#181a22] via-[#12141a] to-[#0a0b0d] border border-[#c5a47e]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-gray-400 block">수강료 (원수강료 → 자비부담금)</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-400 line-through">{COURSE_SUMMARY.originalPrice}</span>
                  <span className="text-2xl font-black text-[#c5a47e]">{COURSE_SUMMARY.discountedPrice}</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                    95% 이상 국비지원
                  </span>
                </div>
              </div>


            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenApplication}
                className="w-full sm:w-auto flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-[#c5a47e] via-[#e2d1c3] to-[#a37f55] text-black font-black text-base tracking-wide shadow-xl shadow-[#c5a47e]/20 hover:shadow-[#c5a47e]/40 transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>교육문의하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#curriculum"
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#181a22] hover:bg-[#20232e] text-gray-300 hover:text-white font-bold text-sm text-center border border-[#c5a47e]/20 transition-colors"
              >
                커리큘럼 미리보기
              </a>
            </div>
          </div>

          {/* Side Highlights Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#1a1c22] to-[#0a0b0d] rounded-2xl p-6 sm:p-8 border border-[#c5a47e]/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c5a47e]/10 border border-[#c5a47e]/30 flex items-center justify-center mb-5 text-[#c5a47e]">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                국비지원 & 한정 선발
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                고용노동부 국민내일배움카드 발급 시 수강료 부담 없이 6개월 동안 실무 프로젝트와 AI 풀스택 개발 역량을 집중 습득합니다.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  '소수 정예 25명 밀착 코칭',
                  '100% 오프라인 실무 집중 훈련',
                  '1:1 이력서 첨삭 및 기업 매칭',
                  '최대 월 80만원 훈련장려금 지급'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
