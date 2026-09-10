import React, { useState } from 'react';
import { ApplicationFormData } from '../types';
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, PhoneCall } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    phone: '',
    email: '',
    cardStatus: 'has_card',
    techBackground: 'non_major',
    questions: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('_form_id', '887d4778400a9cf1ee0703e672cbc1e9');
    payload.append('course', '생성형AI × Java 풀스택 개발 부트캠프');
    payload.append('name', formData.name);
    payload.append('phone', formData.phone);
    payload.append('email', formData.email || '-');
    payload.append('cardStatus', formData.cardStatus);
    payload.append('techBackground', formData.techBackground);
    payload.append('message', formData.questions || '문의 및 희망사항 없음');

    // Optimistic UI update
    setSubmitted(true);

    // Background submission
    fetch('https://inputhaven.com/api/v1/submit', {
      method: 'POST',
      body: payload,
      keepalive: true,
    }).catch((err) => {
      console.error('Modal form submission error:', err);
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12141a] border border-[#c5a47e]/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-[#c5a47e] bg-[#c5a47e]/10 border border-[#c5a47e]/20 px-2.5 py-0.5 rounded">
                선착순 모집
              </span>
              <span className="text-[11px] font-bold text-[#e2d1c3] bg-[#e2d1c3]/10 px-2.5 py-0.5 rounded">
                수강료 0원 가능
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              부트캠프 교육문의 & 방문상담
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              아래 정보를 입력해주시면 전문 교육상담사가 1시간 이내에 친절히 지원 자격 및 절차를 안내해드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">
                  이름 <span className="text-[#c5a47e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181a22] border border-[#c5a47e]/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">
                  연락처 <span className="text-[#c5a47e]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#181a22] border border-[#c5a47e]/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">이메일</label>
                <input
                  type="email"
                  placeholder="example@naver.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181a22] border border-[#c5a47e]/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">내일배움카드 상태</label>
                  <select
                    value={formData.cardStatus}
                    onChange={(e) => setFormData({ ...formData, cardStatus: e.target.value as any })}
                    className="w-full bg-[#181a22] border border-[#c5a47e]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
                  >
                    <option value="has_card">보유 중</option>
                    <option value="applying">발급 신청 중</option>
                    <option value="need_info">발급 방법 안내 필요</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">전공 구분</label>
                  <select
                    value={formData.techBackground}
                    onChange={(e) => setFormData({ ...formData, techBackground: e.target.value as any })}
                    className="w-full bg-[#181a22] border border-[#c5a47e]/20 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
                  >
                    <option value="non_major">비전공자</option>
                    <option value="major">전공자 (컴공/SW)</option>
                    <option value="self_taught">독학 / 기초경험 있음</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">문의 및 희망사항</label>
                <textarea
                  rows={2}
                  placeholder="궁금한 사항이 있다면 자유롭게 적어주세요."
                  value={formData.questions}
                  onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                  className="w-full bg-[#181a22] border border-[#c5a47e]/20 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c5a47e] via-[#e2d1c3] to-[#a37f55] hover:opacity-95 text-black font-black text-sm tracking-wide shadow-xl shadow-[#c5a47e]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>교육문의 및 1:1 상담 예약 완료</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a47e]" />
                <span>제공해주신 개인정보는 수강 상담 및 안내 용도로만 안전하게 보호됩니다.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#c5a47e]/20 border border-[#c5a47e]/40 text-[#c5a47e] flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              교육문의 접수 완료!
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed mb-6 max-w-sm mx-auto">
              <strong className="text-[#c5a47e]">{formData.name}</strong> 님, 한국정보교육원 생성형AI × Java 풀스택 부트캠프 교육문의가 정상적으로 접수되었습니다.
            </p>

            <div className="p-4 bg-[#181a22] rounded-xl text-left border border-white/10 mb-6 space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500">신청인:</span>
                <span className="font-bold text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">연락처:</span>
                <span className="font-bold text-white">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">교육 장소:</span>
                <span className="font-bold text-[#c5a47e]">한국정보교육원 (관악)</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3 rounded-xl bg-[#c5a47e] text-black font-bold text-xs hover:bg-[#b3936d]"
            >
              확인 및 메인 페이지로 돌아가기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
