import React from 'react';
import { ALUMNI_EMPLOYMENT } from '../data/bootcampData';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

export const EmploymentShowcaseSection: React.FC = () => {
  const row1 = ALUMNI_EMPLOYMENT.slice(0, 20);
  const row2 = ALUMNI_EMPLOYMENT.slice(20, 40);

  // Duplicate arrays for seamless infinite looping
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="employment" className="py-16 md:py-24 bg-[#0a0b0d] relative border-t border-[#c5a47e]/15 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/20 inline-block mb-3">
              ALUMNI CAREER SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              수료 후, 이런 곳으로 취업합니다
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              한국정보교육원 수료생들이 입사하여 활약 중인 <br />실제 협력 기업 및 취업처 현황입니다.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Container with side fade gradients */}
      <div className="relative w-full overflow-hidden space-y-4">
        {/* Left & Right Gradient Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#0a0b0d] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#0a0b0d] to-transparent z-10" />

        {/* Row 1: Leftward Marquee */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-4 shrink-0 pr-4"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              duration: 52.5,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {marqueeRow1.map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                className="w-[280px] sm:w-[320px] shrink-0 bg-[#12141a] border border-white/10 rounded-2xl p-5 hover:border-[#c5a47e]/50 hover:bg-[#181a22] transition-all shadow-lg flex flex-col justify-center group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-[#c5a47e] transition-colors">
                  {item.companyName}
                </h3>
                <p className="text-xs text-gray-400 font-normal mt-2 line-clamp-1 truncate">
                  {item.courseName}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Leftward Marquee (Slightly different speed/offset) */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-4 shrink-0 pr-4"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              duration: 63,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {marqueeRow2.map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                className="w-[280px] sm:w-[320px] shrink-0 bg-[#12141a] border border-white/10 rounded-2xl p-5 hover:border-[#c5a47e]/50 hover:bg-[#181a22] transition-all shadow-lg flex flex-col justify-center group"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-[#c5a47e] transition-colors">
                  {item.companyName}
                </h3>
                <p className="text-xs text-gray-400 font-normal mt-2 line-clamp-1 truncate">
                  {item.courseName}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="text-xs text-gray-400 flex items-center justify-center">
          <span className="text-[11px] text-gray-500">* 개인정보 및 기업 보안 요청으로 일부 회사명은 마스킹 처리되었습니다.</span>
        </div>
      </div>
    </section>
  );
};
