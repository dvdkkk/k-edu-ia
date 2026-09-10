import React, { useEffect, useState, useRef } from 'react';
import { BarChart3, BrainCircuit, CheckCircle2, XCircle, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

export const MarketInsightSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setVal1(Math.round(71 * easeProgress));
      setVal2(Math.round(29 * easeProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView]);

  return (
    <section id="insight" ref={sectionRef} className="py-16 md:py-24 bg-[#0a0b0d] relative border-b border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[500px] h-[500px] bg-[#c5a47e]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/20 inline-block mb-4">
              MARKET INSIGHT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              코딩, AI가 점점 더 잘하는 시대…<br />
              <span className="text-gradient-gold"> AI를 지휘하는 개발자가 생존합니다.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
              단순 구문 암기형 코더의 시대는 끝났습니다. 생성형 AI 어시스턴트를 효과적으로 활용해 비즈니스 문제를 해결하는 AI-Native 개발자가 채용 시장을 독식하고 있습니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Data Insight Card Container */}
        <div className="max-w-4xl mx-auto bg-dark-card rounded-2xl p-6 sm:p-10 border border-[#c5a47e]/20 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI역량 보유 인재채용 선호도조사</h3>
              </div>
            </div>
            <div className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              출처: Microsoft & LinkedIn 2024 Work Trend Index
            </div>
          </div>

          {/* Visual Stats Comparison */}
          <div className="space-y-6 mb-8">
            {/* 71% AI 역량 有 */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-sm font-bold text-gray-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a47e]" />
                  AI 역량을 갖춘 개발자 선호 (AI역량有)
                </span>
                <motion.div 
                  animate={isInView ? { scale: [1, 1.25, 1], filter: ['drop-shadow(0 0 0px #c5a47e)', 'drop-shadow(0 0 15px #c5a47e)', 'drop-shadow(0 0 5px #c5a47e)'] } : {}}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  <span className="text-2xl sm:text-3xl font-black text-[#c5a47e] tracking-tight">
                    {val1}%
                  </span>
                </motion.div>
              </div>

              <div className="w-full bg-[#181a22] rounded-full h-5 p-1 border border-[#c5a47e]/30 overflow-hidden relative shadow-inner">
                {/* Animated fill bar */}
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#8c6d48] via-[#c5a47e] to-[#f3e7d8] relative shadow-[0_0_15px_rgba(197,164,126,0.6)]"
                  initial={{ width: '0%' }}
                  animate={isInView ? { width: '71%' } : { width: '0%' }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Glowing shimmer bar sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 animate-[pulse_2s_infinite]" />
                </motion.div>
              </div>
            </div>

            {/* 29% AI 역량 無 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-gray-500" />
                  AI 역량 미보유 개발자 선호 (AI역량無)
                </span>
                <span className="text-lg font-bold text-gray-500">{val2}%</span>
              </div>
              <div className="w-full bg-[#181a22] rounded-full h-3 p-0.5 border border-white/5 overflow-hidden">
                <motion.div
                  className="bg-gray-600/80 h-full rounded-full"
                  initial={{ width: '0%' }}
                  animate={isInView ? { width: '29%' } : { width: '0%' }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#181a22] via-[#151722] to-[#0a0b0d] border border-[#c5a47e]/30 flex items-start gap-3.5 shadow-lg relative overflow-hidden">
            <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-extrabold text-[#c5a47e] tracking-wider block">
                기업이 찾는 AI-Native 자바풀스택개발자
              </span>
              <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                "AI툴을 실무에 적용한 개발자는 코드 작성속도와 문제해결 능력이 높습니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
