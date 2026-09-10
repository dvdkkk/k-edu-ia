import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12141a] border border-white/20 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white tracking-tight">개인정보 처리방침</h3>
              <p className="text-xs text-gray-400">한국직업능력교육원 개인정보 수집 및 이용 안내</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable Text */}
        <div className="overflow-y-auto pr-2 text-xs sm:text-sm text-gray-300 space-y-5 leading-relaxed bg-[#181a22] p-5 rounded-xl border border-white/5">
          <p className="text-gray-200 font-medium">
            한국직업능력교육원(이하 ‘교육원’이라 한다)은(는) 개인정보보호법에 따라 이용자의 개인정보를 보호하고 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보처리방침을 두고 있습니다.
          </p>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 개인정보의 수집 및 이용목적, 수집하는 개인정보의 항목 및 수집방법
            </h4>
            <p>
              교육원은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1 text-gray-300">
              <li>
                <strong>1. 홈페이지 회원 가입 및 관리:</strong> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리시 법정대리인의 동의여부 확인, 각종 고지․통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
              </li>
              <li>
                <strong>2. 마케팅 및 광고에 활용:</strong> 신규 서비스 개발 및 특화, 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
              </li>
              <li>
                <strong>3. 기타:</strong> 교육 서비스 제공, 가입 및 가입 횟수 제한, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록 보존, 상담문의 빈도파악
              </li>
            </ul>
            <p className="mt-2 font-semibold text-gray-200">교육원은 위에 명시한 목적을 위해 다음과 같은 개인정보를 수집하고 있습니다.</p>
            <ol className="list-decimal list-inside space-y-1 pl-1 text-gray-300">
              <li><strong>수집항목:</strong> 이름, 성별, 생년월일, 연락처</li>
              <li><strong>수집방법:</strong> 홈페이지</li>
              <li><strong>자동 생성 항목:</strong> 서비스 이용과정이나 사업 처리 과정에서 서비스 이용기록, 접속 로그, 쿠키, 접속 IP정보, 기기정보, 이용정지 기록과 같은 정보들이 생성되어 수집 가능</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 개인정보의 처리 및 보유기간
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                교육원은 법령에 따른 개인정보 보유․이용기간 또는 이용자로부터 개인정보를 수집 시에 동의받은 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
              </li>
              <li>
                교육원은 회원의 탈퇴에도 불구하고 관련 법령에서 의무보유기간에 대해 별도로 정한 경우에는 해당 기간 종료 시까지 개인정보를 보유합니다.
              </li>
              <li>
                각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:
                <div className="pl-4 mt-1 space-y-1.5">
                  <p><strong>1) 홈페이지 회원 가입 및 관리:</strong> 사업자·단체 홈페이지 탈퇴시까지 (단, 수사·조사 진행 시 종료 시까지, 채권·채무관계 잔존 시 정산 시까지)</p>
                  <p><strong>2) 교육신청 및 상담:</strong> 보존할 필요가 있다고 판단되는 경우 내부방침에 의하여 일정기간 보관 (보존기간 : 5년)</p>
                  <p><strong>3) 재화 또는 서비스 제공:</strong> 공급완료 및 요금결제·정산 완료시까지 (표시·광고 기록: 6개월, 계약/청약철회/대금결제/공급기록: 5년, 소비자 불만/분쟁처리 기록: 3년)</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 이용자의 권리․의무 및 행사방법
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-gray-300">
              <li>이용자는 교육원에 대해 언제든지 개인정보 열람요구, 오류 정정 요구, 삭제요구, 처리정지 요구 권리를 행사할 수 있습니다.</li>
              <li>서면, 전화, 전자우편 등을 통하여 하실 수 있으며 교육원은 이에 대해 지체없이 조치하겠습니다.</li>
              <li>정정 또는 삭제를 요구한 경우에는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</li>
              <li>법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.</li>
              <li>이용자는 개인정보보호법 등 관계법령을 위반하여 교육원이 처리하고 있는 이용자 본인이나 타인의 개인정보 및 사생활을 침해하여서는 안됩니다.</li>
            </ol>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 처리하는 개인정보 항목
            </h4>
            <p className="text-gray-300">교육원은 회원가입, 회원정보수정, 수강신청, 간편문의, 온라인상담, 국비지원 조회 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
            <ul className="space-y-1 pl-2 text-gray-300">
              <li><strong>1. 홈페이지 회원 가입 및 관리:</strong> [필수] 이름, 생년월일, 아이디, 비밀번호, 주소, 휴대폰번호, 성별, 이메일 / [선택] 전화번호</li>
              <li><strong>2. 수강신청:</strong> [필수] 교육과정, 이름, 생년월일, 성별, 휴대폰번호</li>
              <li><strong>3. 간편문의:</strong> [필수] 이름, 휴대폰번호</li>
              <li><strong>4. 온라인상담:</strong> [필수] 이름, 휴대폰번호</li>
              <li><strong>5. 국비지원 조회:</strong> [필수] 이름, 휴대폰번호 / [선택] 생년월일, 구직상태, 사업자등록증보유 여부</li>
              <li><strong>6. 자동 수집 항목:</strong> IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록 등</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 개인정보의 파기
            </h4>
            <p>1. 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
            <p>2. 파기절차: 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의 승인을 받아 파기합니다.</p>
            <p>3. 파기방법: 전자적 파일은 로우레벨포맷(Low Level Format) 등을 이용해 파기하며, 종이 문서는 분쇄기로 분쇄하거나 소각합니다.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 개인정보의 안전성 확보조치
            </h4>
            <p>1. 관리적 조치: 개인정보관련 접근 직원의 최소화, 정기적 직원 교육 등</p>
            <p>2. 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 고유식별정보 등의 암호화, 보안프로그램 설치</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항
            </h4>
            <p>1. 교육원은 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</p>
            <p>2. 쿠키 저장을 거부하고자 하는 경우 웹브라우저 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 개인정보 보호책임자
            </h4>
            <div className="bg-[#12141a] p-3 rounded-lg border border-white/10">
              <p>∙ <strong>이 름:</strong> 홍세민</p>
              <p>∙ <strong>소 속:</strong> 한국직업능력교육원</p>
              <p>∙ <strong>연락처:</strong> 070-4903-5732</p>
              <p>∙ <strong>E-mail:</strong> ktechedu@naver.com</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm sm:text-base border-b border-white/10 pb-1.5 text-blue-400">
              ■ 권익침해 구제방법
            </h4>
            <ul className="space-y-1 text-gray-300">
              <li>- 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</li>
              <li>- 개인정보분쟁조정위원회 (www.kopico.go.kr / 1833-6972)</li>
              <li>- 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)</li>
              <li>- 경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="font-bold text-white text-sm">■ 고지의 의무</h4>
            <p className="text-gray-300">
              현재 개인정보 취급 방침에서 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항의 시행일의 7일 전부터 "교육원" 사이트의 공지사항을 통하여 고지 할 것 입니다. 다만, 회원의 권리 또는 의무에 중요한 내용의 변경은 최소 30일전에 고지하겠습니다.
            </p>
            <p className="text-blue-300 font-bold mt-2">○ 본 방침은 2024년 8월 1일부터 시행됩니다.</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-2 border-t border-white/10 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-blue-600/30"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
