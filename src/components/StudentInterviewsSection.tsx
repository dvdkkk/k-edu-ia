import React, { useState, useEffect } from 'react';
import { STUDENT_INTERVIEWS } from '../data/bootcampData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const StudentInterviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 10 items total
  const interviews = STUDENT_INTERVIEWS.slice(0, 10);

  // Detect responsive screen size (mobile < 768px vs PC >= 768px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, interviews.length - itemsPerPage);
  const intervalMs = isMobile ? 2000 : 3000;

  // Clamp index if viewport changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (isMobile) {
        return prev < maxIndex ? prev + 1 : 0;
      } else {
        // PC: Move 3 cards to the left every 3 seconds
        const next = prev + 3;
        return next <= maxIndex ? next : 0;
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (isMobile) {
        return prev > 0 ? prev - 1 : maxIndex;
      } else {
        // PC: Move back 3 cards
        const next = prev - 3;
        return next >= 0 ? next : maxIndex;
      }
    });
  };

  // Auto scroll timer
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isMobile, isHovered, maxIndex]);

  // Page dots
  const pageDots = isMobile
    ? Array.from({ length: interviews.length }, (_, i) => i)
    : [0, 3, 6];

  return (
    <section id="interviews" className="py-16 md:py-24 bg-[#0d0e12] relative border-t border-white/10 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] px-3.5 py-1 rounded-full bg-[#c5a47e]/10 border border-[#c5a47e]/20 inline-block mb-3">
              REAL STUDENT REVIEWS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              수강생 인터뷰<br /> 수강생이 먼저 경험한 취업 스토리
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              실제 과정을 수료하고 취업에 성공한 <br />수강생들의 생생한 후기입니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <div
          className="relative group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute -left-3 sm:-left-5 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="absolute -right-3 sm:-right-5 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-2xl py-2 px-1">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-5"
              style={{
                transform: isMobile
                  ? `translateX(calc(-${currentIndex} * (100% + 1.25rem)))`
                  : `translateX(calc(-${currentIndex} * (100% + 1.25rem) / 3))`,
              }}
            >
              {interviews.map((item) => (
                <div
                  key={item.id}
                  className="w-full md:w-[calc((100%-2.5rem)/3)] shrink-0 group"
                >
                  {/* Image & Banner Container */}
                  <div className="rounded-2xl overflow-hidden relative border border-white/10 bg-[#161822] flex h-48 sm:h-52 w-full transition-all group-hover:border-blue-500/50 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                    {/* Left Banner Section */}
                    <div className="w-[52%] bg-gradient-to-br from-[#2f6ce5] to-[#1a4fbf] p-4 sm:p-5 flex flex-col justify-between text-white relative z-10 shrink-0">
                      <div>
                        {/* Category Tag Badge */}
                        <span className="inline-block bg-[#1a1d24] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                          {item.categoryTag || '클라우드'}
                        </span>
                      </div>

                      <div>
                        <p className="text-[11px] sm:text-xs font-semibold text-blue-100/90 tracking-tight">
                          {item.campus || '서울캠퍼스'}
                        </p>
                        <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight mt-0.5 leading-tight">
                          {item.studentName.replace(/ (학생|수료생)|(학생|수료생)/, '')}{' '}
                          <span className="text-xs sm:text-base font-medium text-blue-100">
                            {item.studentName.includes('수료생') ? '수료생' : '학생'}
                          </span>
                        </h4>
                        <p className="text-[10px] sm:text-xs text-blue-100/80 mt-1 font-medium">
                          - 수료생 인터뷰
                        </p>
                      </div>
                    </div>

                    {/* Right Student Photo Section */}
                    <div className="w-[48%] relative overflow-hidden bg-gray-900">
                      <img
                        src={item.imageUrl}
                        alt={item.studentName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* 2 Lines of Text Below Image */}
                  <div className="mt-3.5 space-y-1 text-left px-1">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1">
                      {item.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 font-normal">
                      {item.courseName} | {item.studentName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {pageDots.map((dotIdx) => {
              const isActive = isMobile
                ? currentIndex === dotIdx
                : Math.abs(currentIndex - dotIdx) < 3;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    isActive
                      ? 'w-7 bg-blue-500'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
