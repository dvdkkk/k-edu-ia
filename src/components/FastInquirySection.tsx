import React, { useState } from 'react';
import { MapPin, Send, Check } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';
import { ScrollReveal } from './ScrollReveal';

interface FastInquirySectionProps {
  onOpenApplication?: () => void;
}

export const FastInquirySection: React.FC<FastInquirySectionProps> = () => {
  const [formData, setFormData] = useState({
    courseName: '(한정교)자바 풀스택 & 생성형AI 서비스개발 기업 프로젝트 완성',
    name: '',
    age: '',
    phone: '',
    message: '',
    agree: true,
  });

  const [showTerms, setShowTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('이름을 입력해 주세요.');
      return;
    }
    if (!formData.age.trim()) {
      alert('나이를 입력해 주세요.');
      return;
    }
    if (!formData.phone.trim()) {
      alert('연락처를 입력해 주세요.');
      return;
    }
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    // Prepare FormData payload for InputHaven API
    const payload = new FormData();
    payload.append('_form_id', '887d4778400a9cf1ee0703e672cbc1e9');
    payload.append('course', formData.courseName);
    payload.append('name', formData.name);
    payload.append('age', formData.age);
    payload.append('phone', formData.phone);
    payload.append('message', formData.message || '문의내용 없음');

    // 1. Optimistic UI: Immediately update UI to show success state
    setSubmitted(true);

    // 2. Background submission with keepalive: true to prevent request cancellation
    fetch('https://inputhaven.com/api/v1/submit', {
      method: 'POST',
      body: payload,
      keepalive: true,
    }).catch((err) => {
      console.error('Background form submission error:', err);
    });
  };

  return (
    <section id="fast-inquiry" className="bg-[#ffcc00] text-black py-16 md:py-24 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Catchy Banner Text & Contact Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.25] tracking-tight mb-6">
              망설이지 마세요.<br />
              국비교육 전문가가<br />
              친절하게 안내해드립니다.
            </h2>

            <p className="text-base sm:text-lg font-bold text-black/90 leading-relaxed mb-10">
              국비지원 자격 여부부터 취업 및 교육과정까지<br />
              <span className="underline decoration-2 underline-offset-4 decoration-black">
                무료로 상담해드립니다.
              </span>
            </p>

            {/* Info Contact List */}
            <div className="space-y-6 mb-8">
              {/* Way / Campus Block */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black text-[#ffcc00] flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-black/70 block">교육방식</span>
                  <p className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
                    100% 오프라인 (서울)
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base font-extrabold text-black/80 mt-2">
              여러분의 꿈을 응원합니다!
            </p>
          </div>

          {/* RIGHT COLUMN: Fast Counseling Form Card */}
          <div className="lg:col-span-6">
            <div id="fast-inquiry-form" className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 max-w-xl mx-auto scroll-mt-20">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                빠른 교육상담 신청
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              </h3>

              {submitted ? (
                <div className="py-12 text-center bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center mb-4 shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-2">상담 신청 완료!</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    전문 상담사가 확인 후 빠르게 연락드리겠습니다.<br />
                    감사합니다.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-gray-900 text-white font-bold text-xs rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    다시 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Course Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      과정명 <span className="text-rose-500 font-normal">(필수)</span>
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.courseName}
                      className="w-full bg-gray-100/90 text-gray-900 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none cursor-default"
                    />
                  </div>

                  {/* Name & Age Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        이름 <span className="text-rose-500 font-normal">(필수)</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="홍길동"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white text-gray-900 font-medium text-xs sm:text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        나이 <span className="text-rose-500 font-normal">(필수)</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="예: 30"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full bg-white text-gray-900 font-medium text-xs sm:text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      연락처 <span className="text-rose-500 font-normal">(필수)</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white text-gray-900 font-medium text-xs sm:text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Inquiry Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      문의내용 <span className="text-gray-400 font-normal">(선택)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="궁금하신 점을 자유롭게 적어주세요."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white text-gray-900 font-medium text-xs sm:text-sm p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-gray-700">
                      <label className="flex items-center gap-2 cursor-pointer font-bold select-none">
                        <input
                          type="checkbox"
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                          className="w-4 h-4 text-rose-500 rounded border-gray-300 focus:ring-rose-500 cursor-pointer"
                        />
                        <span>개인정보 수집 및 이용에 동의합니다.</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => setShowTerms(true)}
                        className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-lg text-[11px] border border-gray-200 transition-colors hover:bg-gray-200"
                      >
                        자세히 보기
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-black hover:bg-gray-800 text-white font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl active:scale-[0.99] mt-2"
                  >
                    <span>무료상담 신청하기</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-gray-400 mt-2 font-medium">
                    개인정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
        </ScrollReveal>
      </div>

      {/* Privacy Policy Modal Window */}
      <PrivacyModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </section>
  );
};
