import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/bootcampData';
import { KLogoIcon } from './KLogoIcon';
import { PrivacyModal } from './PrivacyModal';
import { TermsModal } from './TermsModal';

export const FooterSection: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-[#07080b] border-t border-[#c5a47e]/15 pt-12 pb-24 text-gray-400 text-xs relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Logo & Intro */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#c5a47e] to-[#e2d1c3] p-0.5">
                <div className="w-full h-full bg-[#0a0b0d] rounded-[10px] flex items-center justify-center p-0.5">
                  <KLogoIcon className="w-6 h-6" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {COMPANY_INFO.companyName}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              고용노동부 지정 우수직업훈련기관 한국정보교육원. 실무 프로젝트를 결합한 국내 최고 수준의 IT 커리어 과정을 제공합니다.
            </p>
          </div>

          {/* Company Details Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-400">
              <div>
                <h4 className="text-xs font-bold text-[#c5a47e] uppercase tracking-wider mb-3">사업자 정보</h4>
                <ul className="space-y-1.5 leading-relaxed">
                  <li><strong className="text-gray-300">기관명:</strong> {COMPANY_INFO.companyName}</li>
                  <li><strong className="text-gray-300">대표이사:</strong> {COMPANY_INFO.ceo}</li>
                  <li><strong className="text-gray-300">사업자등록번호:</strong> {COMPANY_INFO.businessRegNumber}</li>
                  <li><strong className="text-gray-300">직업정보제공신고:</strong> {COMPANY_INFO.licenseNumber}</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#c5a47e] uppercase tracking-wider mb-3">연락처 & 위치</h4>
                <ul className="space-y-1.5 leading-relaxed">
                  <li><strong className="text-gray-300">주소:</strong> {COMPANY_INFO.address}</li>
                  <li><strong className="text-gray-300">이메일:</strong> {COMPANY_INFO.email}</li>
                  <li><strong className="text-gray-300">개인정보책임자:</strong> {COMPANY_INFO.privacyOfficer}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Policy Buttons & Copyright side-by-side */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-gray-400">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors underline font-medium"
            >
              이용약관
            </button>
            <span className="text-gray-700">|</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors underline font-bold text-gray-300"
            >
              개인정보취급방침
            </button>
          </div>

          <p className="text-gray-500 text-xs text-center sm:text-right">{COMPANY_INFO.copyright}</p>
        </div>
      </div>

      {/* Policy Modals */}
      <PrivacyModal isOpen={modalType === 'privacy'} onClose={() => setModalType(null)} />
      <TermsModal isOpen={modalType === 'terms'} onClose={() => setModalType(null)} />
    </footer>
  );
};
