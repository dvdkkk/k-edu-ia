import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SealExcellence: React.FC<{ className?: string }> = ({ className = "w-40 h-40 sm:w-52 sm:h-52" }) => {
  return (
    <div className={`relative rounded-full overflow-hidden bg-white border-2 border-[#c5a47e] shadow-2xl flex items-center justify-center ${className}`}>
      <img
        src="https://postfiles.pstatic.net/MjAyNjA3MjhfMjUg/MDAxNzg1MjIwOTY5MDEz.HrA4iyomLC-17UOZZnE6Xzxwvme4Yit3gZyIfvBeqfog.8HwmyZDJDDsKOpmUJkvDhHtzI_7YgKXKhDUV-s6ZkrMg.PNG/ImageToStl.com_%EC%9A%B0%EC%88%98%ED%9B%88%EB%A0%A8%EA%B8%B0%EA%B4%80_23-27_200400659_%ED%95%9C%EA%B5%AD%EC%A0%95%EB%B3%B4%EA%B5%90%EC%9C%A1%EC%9B%90(%EA%B5%AC.%EA%B2%BD%EC%9B%90%EC%A7%81%EC%97%85%EC%A0%84%EB%AC%B8%ED%95%99%EA%B5%90).png?type=w966"
        alt="고용노동부 우수훈련기관 인증"
        className="w-full h-full object-cover scale-[1.35] transition-transform duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const SealBha: React.FC<{ className?: string }> = ({ className = "w-40 h-40 sm:w-52 sm:h-52" }) => {
  return (
    <div className={`relative rounded-full overflow-hidden bg-white border-2 border-blue-500 shadow-2xl flex items-center justify-center ${className}`}>
      <img
        src="https://postfiles.pstatic.net/MjAyNjA3MjhfMTIg/MDAxNzg1MjIwOTY5MDE0.Wc-caQQv0G0T54QP1aoXVNMp4k6Ubkbo9-Cqq5BfovAg.lNzztXjJBks5Xot4tFqQ4o6ZSATpKBGQIR5zI0kFpvsg.PNG/ImageToStl.com_200400659_%ED%95%9C%EA%B5%AD%EC%A0%95%EB%B3%B4%EA%B5%90%EC%9C%A1%EC%9B%90_23-27.png?type=w966"
        alt="BHA 베스트 직업훈련기관 인증"
        className="w-full h-full object-cover scale-[1.35] transition-transform duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const CertificationSealsSection: React.FC = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-[#12151e] via-[#1a1e2c] to-[#12151e] rounded-3xl p-6 sm:p-10 border border-[#c5a47e]/30 shadow-[0_0_40px_rgba(197,164,126,0.15)] relative overflow-hidden">
      {/* Background Decorative Blur Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a47e]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Side: 2 Large High-Visibility Official Certification Seals */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 shrink-0 w-full lg:w-auto">
          {/* SEAL 1 CARD */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <SealExcellence className="w-36 h-36 sm:w-48 sm:h-48 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="mt-3.5 px-3.5 py-1 rounded-full border border-[#c5a47e] text-[#f7e7ce] text-xs sm:text-sm font-black text-center">
              우수훈련기관 선정
            </p>
            <p className="text-[11px] text-gray-400 font-medium text-center">
              2023.01 ~ 2027.12 (5년)
            </p>
          </div>

          {/* SEAL 2 CARD */}
          <div className="flex flex-col items-center group">
            <div className="relative">
              <SealBha className="w-36 h-36 sm:w-48 sm:h-48 group-hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="mt-3.5 px-3.5 py-1 rounded-full border border-blue-400 text-blue-200 text-xs sm:text-sm font-black text-center">
              베스트직업훈련기관
            </p>
            <p className="text-[11px] text-gray-400 font-medium text-center">
              2023.01 ~ 2027.12 (5년)
            </p>
          </div>
        </div>

        {/* Right Side: Persuasive Trust Copy & Call to Enroll */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a47e]/15 border border-[#c5a47e]/40 text-[#f7e7ce] text-xs font-black tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#c5a47e]" />
            <span>고용노동부 인정 최고 등급 훈련기관 인증</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
            대한민국 훈련기관 중 <span className="text-gradient-gold">상위 최우수 등급</span><br className="hidden sm:block" />
            검증된 국비지원 IT 교육기관입니다
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
            한국정보교육원은 고용노동부 및 직업능력심사평가원이 엄격한 심사를 통해 선정한 <strong className="text-white font-bold">5년 인증 우수훈련기관</strong>이자 <strong className="text-white font-bold">BHA(Best HRD Academy) 베스트 직업훈련기관</strong>입니다.<br className="hidden sm:block" />
            수준 높은 교수진과 실무 위주 AI × Java 커리큘럼, 압도적인 취업률로 여러분의 개발자 커리어 준비를 함께합니다.
          </p>

          {/* Key Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">95%~100% 국비지원</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">매월 훈련장려금 지급 지원</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">1:1 맞춤 취업 컨설팅 & 이력서 첨삭</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#0a0b0d]/60 p-3 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#c5a47e] shrink-0" />
              <span className="text-xs text-gray-200 font-bold">협력 IT 기업 채용 연계 혜택</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

