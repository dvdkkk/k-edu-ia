import React, { useEffect, useState, useRef } from 'react';
import { Users, Star, Award, ShieldCheck, UserCheck, FileText, Building2, BarChart3, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CertificationSealsSection } from './CertificationSeals';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const numericMatch = value.match(/[\d,.]+/);
  const numericString = numericMatch ? numericMatch[0].replace(/,/g, '') : null;
  const targetNumber = numericString ? parseFloat(numericString) : null;
  const isFloat = numericString ? numericString.includes('.') : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || targetNumber === null) {
      if (!isVisible) setDisplayValue(value.replace(/[\d,.]+/, '0'));
      return;
    }

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNumber * easeProgress;

      let formattedVal = '';
      if (isFloat) {
        formattedVal = currentVal.toFixed(1);
      } else {
        formattedVal = Math.floor(currentVal).toLocaleString();
      }

      setDisplayValue(value.replace(/[\d,.]+/, formattedVal));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, targetNumber, value, duration, isFloat]);

  return <span ref={elementRef}>{displayValue}</span>;
};

export const TrustMetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="py-16 sm:py-20 relative bg-[#0a0b0d] border-b border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] h-[500px] bg-[#c5a47e]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#c5a47e] px-3.5 py-1.5 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/25 mb-4">
              <BarChart3 className="w-3.5 h-3.5 text-[#c5a47e]" />
              숫자로 증명하는 압도적 성과
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              한정교는 <span className="text-gradient-gold">결과</span>로 증명합니다
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              고용노동부 공식 평가 취업률부터 수강생 만족도까지 한눈에 확인하세요.
            </p>
          </div>
        </ScrollReveal>

        {/* FEATURED HERO CARD: 2025 KDT 취업률 85% & 3단계 취업케어 */}
        <ScrollReveal direction="up" distance={30} delay={0.1}>
          <div className="mb-10 relative rounded-3xl p-[1.5px] bg-gradient-to-r from-[#c5a47e] via-[#f7e7ce] to-[#c5a47e] shadow-[0_0_50px_rgba(197,164,126,0.25)]">
            <div className="bg-gradient-to-br from-[#14161f] via-[#1a1d28] to-[#0e0f14] rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a47e]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column: Big 85% KDT Stat Display */}
                <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center p-6 sm:p-8 rounded-2xl bg-[#0a0b0d]/85 border border-[#c5a47e]/35 backdrop-blur-md relative overflow-hidden shadow-2xl h-full">
                  <div className="absolute top-0 right-0 bg-[#c5a47e]/20 px-3 py-1 rounded-bl-xl border-l border-b border-[#c5a47e]/30 text-[10px] font-black text-[#c5a47e] uppercase tracking-wider">
                    OFFICIAL METRIC
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a47e]/15 border border-[#c5a47e]/40 text-[#f7e7ce] text-xs font-black tracking-wide mb-3">
                    <Sparkles className="w-4 h-4 text-[#c5a47e]" />
                    <span>2025 고용노동부 KDT 성과 평가</span>
                  </div>

                  <div className="flex items-baseline justify-center lg:justify-start gap-1 my-1">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-gradient-gold drop-shadow-2xl leading-none">
                      <AnimatedCounter value="85%" />
                    </span>
                  </div>

                  <div className="mt-2 text-lg sm:text-2xl font-black text-white flex items-center justify-center lg:justify-start gap-2">
                    <Trophy className="w-6 h-6 text-[#c5a47e]" />
                    <span>2025 KDT 취업률</span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-gray-300 font-medium text-center lg:text-left leading-relaxed">
                    KDT 수료생 10명 중 <strong className="text-[#c5a47e] font-black">8.5명 취업 성공!</strong><br />
                    전국 평균을 넘어서는 공식 인증 취업률입니다.
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1 font-semibold text-[#c5a47e]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 검증된 교육 품질
                    </span>
                    <span className="font-bold text-gray-300">한정교 2025 공식</span>
                  </div>
                </div>

                {/* Right Column: 3 Key Support Drivers */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5 h-full">
                  <div>
                    <span className="text-xs font-bold text-[#c5a47e] tracking-widest uppercase block mb-1">
                      ALL-IN-ONE CAREER SUPPORT
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      취업률 85%를 완성하는 <span className="text-gradient-gold">3단계 밀착 케어</span>
                    </h3>
                  </div>

                  {/* 3 Streamlined Pillar Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* CARD 1 */}
                    <div className="bg-[#181a24] p-4.5 rounded-xl border border-white/10 hover:border-[#c5a47e]/40 transition-all flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-[#c5a47e]/15 text-[#c5a47e]">
                          <UserCheck className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-gray-400">Step 01</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-300 mb-0.5">1:1 전담 취업상담</p>
                        <p className="text-lg font-black text-white text-gradient-gold mb-1">평균 8회</p>
                        <p className="text-[11px] text-gray-400 leading-snug">
                          수료 전후 전담 컨설턴트 밀착 코칭
                        </p>
                      </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-[#181a24] p-4.5 rounded-xl border border-white/10 hover:border-[#c5a47e]/40 transition-all flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-[#c5a47e]/15 text-[#c5a47e]">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-gray-400">Step 02</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-300 mb-0.5">이력서·포트폴리오</p>
                        <p className="text-lg font-black text-white text-gradient-gold mb-1">평균 4회</p>
                        <p className="text-[11px] text-gray-400 leading-snug">
                          현업 수준 맞춤 첨삭 & 모의면접
                        </p>
                      </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-[#181a24] p-4.5 rounded-xl border border-white/10 hover:border-[#c5a47e]/40 transition-all flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-[#c5a47e]/15 text-[#c5a47e]">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-gray-400">Step 03</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-300 mb-0.5">기업 채용 매칭</p>
                        <p className="text-lg font-black text-white text-gradient-gold mb-1">주 50회+</p>
                        <p className="text-[11px] text-gray-400 leading-snug">
                          협력 IT 기업 우선 채용 기회 제공
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Trust Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                      ✓ 비전공자/초보자 맞춤 과정
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                      ✓ 1:1 이력서·자기소개서 첨삭
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#c5a47e]/15 border border-[#c5a47e]/40 text-xs font-extrabold text-[#c5a47e]">
                      ✓ 수료 후 6개월 지속 사후 관리
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 CORE METRICS GRID */}
        <ScrollReveal direction="up" distance={30} delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* CARD 1: 누적 수료생 */}
            <div className="bg-[#12141a] rounded-2xl p-6 border border-[#c5a47e]/20 hover:border-[#c5a47e]/40 transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a47e]/60 group-hover:bg-[#c5a47e] transition-colors"></div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-gray-400">누적 수료생</span>
                  <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 text-gradient-gold">
                  <AnimatedCounter value="3,245명" />
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-gray-400 font-medium leading-relaxed">
                2015년 - 2025년<br />
                <span className="text-[#c5a47e]">6개월이상 장기과정</span>
              </div>
            </div>

            {/* CARD 2: 훈련생 만족도 */}
            <div className="bg-[#12141a] rounded-2xl p-6 border border-[#c5a47e]/20 hover:border-[#c5a47e]/40 transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a47e]/60 group-hover:bg-[#c5a47e] transition-colors"></div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-gray-400">훈련생 만족도</span>
                  <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20">
                    <Star className="w-5 h-5 fill-[#c5a47e]" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 text-gradient-gold">
                  <AnimatedCounter value="4.5점" />
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-gray-400 font-medium leading-relaxed">
                수강생 만족도 설문 평균
              </div>
            </div>

            {/* CARD 3: 훈련 이수자 평가 */}
            <div className="bg-[#12141a] rounded-2xl p-6 border border-[#c5a47e]/20 hover:border-[#c5a47e]/40 transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a47e]/60 group-hover:bg-[#c5a47e] transition-colors"></div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-gray-400">훈련 이수자 평가</span>
                  <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 text-gradient-gold">
                  A등급
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-gray-400 font-medium leading-relaxed">
                2025 고용노동부 평가 결과
              </div>
            </div>

            {/* CARD 4: 우수훈련기관 */}
            <div className="bg-[#12141a] rounded-2xl p-6 border border-[#c5a47e]/20 hover:border-[#c5a47e]/40 transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a47e]/60 group-hover:bg-[#c5a47e] transition-colors"></div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-gray-400">우수훈련기관</span>
                  <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 text-gradient-gold">
                  <AnimatedCounter value="5년인증" />
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-gray-400 font-medium leading-relaxed">
                2023년 - 2027년 인증
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* OFFICIAL CERTIFICATION SEALS SHOWCASE */}
        <ScrollReveal direction="up" distance={30} delay={0.3}>
          <CertificationSealsSection />
        </ScrollReveal>

      </div>
    </section>
  );
};
