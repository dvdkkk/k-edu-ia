import React from 'react';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12141a] border border-white/20 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#c5a47e]/20 border border-[#c5a47e]/30 flex items-center justify-center text-[#c5a47e]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white tracking-tight">이용약관</h3>
              <p className="text-xs text-gray-400">한국직업능력교육원 홈페이지 이용 약관</p>
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

        {/* Modal Body - Scrollable Terms Text */}
        <div className="overflow-y-auto pr-2 text-xs sm:text-sm text-gray-300 space-y-5 leading-relaxed bg-[#181a22] p-5 rounded-xl border border-white/5">
          <div className="border-b border-white/10 pb-3">
            <h4 className="text-base font-extrabold text-white">(한국직업능력교육원 이용약관)</h4>
          </div>

          {/* CHAPTER 1 */}
          <div className="space-y-3">
            <h5 className="font-bold text-base text-[#c5a47e] border-b border-white/10 pb-1">
              [제1장 홈페이지 이용 총칙]
            </h5>
            <div>
              <p className="font-bold text-white mb-1">제1조 목 적</p>
              <p className="text-gray-300">
                한국직업능력교육원 패밀리 사이트 (이하 직업학교)가 제공하는 서비스는 이 약관에 동의한 이용자들에게 무료로 제공되는 서비스이며 그 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">제2조 (약관 외 준칙)</p>
              <p className="text-gray-300">
                본 약관에 명시되지 않은 사항이 관계법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
              </p>
            </div>
          </div>

          {/* CHAPTER 2 */}
          <div className="space-y-3">
            <h5 className="font-bold text-base text-[#c5a47e] border-b border-white/10 pb-1">
              [제2장 사이트 서비스 이용]
            </h5>
            <div>
              <p className="font-bold text-white mb-1">제1조 (이용계약의 성립)</p>
              <p className="text-gray-300 mb-2">
                서비스 이용계약은 이용자의 신청과 그에 대한 직업학교의 응낙, 그리고 이용자의 약관 내용에 대한 동의로 성립됩니다.
                회원으로 가입하여 서비스를 이용하고자 하는 희망자는 직업학교에서 요청하는 필수입력사항을 입력하여야 합니다.
              </p>
              <p className="text-gray-300 mb-2">
                직업학교 회원으로써의 이용 신청을 응낙하게 되면 다음 각 항의 사항을 이용자에게 통지합니다.
              </p>
              <ul className="list-none pl-2 space-y-1 text-gray-300 mb-3">
                <li>① 이용자 ID</li>
                <li>② 기타 직업학교가 필요하다고 인정하는 사항</li>
              </ul>
              <p className="text-gray-300 mb-2">
                직업학교는 다음 각 항에 해당하는 이용계약 신청에 대하여는 이를 응낙하지 아니합니다.
              </p>
              <ul className="list-none pl-2 space-y-1 text-gray-300">
                <li>① 다른 사람의 명의를 사용하여 신청하였을 때</li>
                <li>② 회원가입 신청서의 내용을 허위로 기재하였거나 허위서류를 첨부하여 신청하였을 때</li>
                <li>③ 사회의 일반적 질서 또는 건전한 미풍양속을 저해할 목적으로 신청하였을 때</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white mb-1">제2조 (서비스 이용)</p>
              <p className="text-gray-300 mb-2">
                사이트 서비스는 업무상, 기술상의 특별한 장애요인이 없는 한 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
              </p>
              <p className="text-gray-300 mb-2">
                위 사항의 서비스 이용시간 조건은 정기점검 등의 필요로 인하여 직업학교가 정한 일자 또는 시간에는 해당되지 않습니다.
              </p>
              <p className="text-gray-300 mb-2">
                직업학교는 다음 사항에 해당하는 경우 서비스 제공을 중지할 수 있습니다.
              </p>
              <ul className="list-none pl-2 space-y-1 text-gray-300 mb-3">
                <li>① 서비스 설비의 증설, 보수 등 공사로 인한 경우</li>
                <li>② 전기통신사업법에 규정된 기간통신사업자가 전기 통신 서비스를 중지했을 경우</li>
                <li>③ 천재지변이나 정전 등 예측하지 못한 일로 서비스 장애가 발생하여 서비스 중단을 초래할 경우 이에 대한 손해에 대해서는 직업학교가 책임을 지지 않습니다.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                회원 가입 이후라 할지라도 일부 서비스 이용 시 직업학교사정에 따라 서비스 이용이 제한 될 수 있습니다.<br />
                직업학교는 이용자ID에 근거하여 고객계좌입금 등 이용자의 제반 관리업무를 수행하므로, 이용자가 이용자ID를 변경하고자 하는 경우 명백한 사유가 없는 한 그 변경을 제한합니다.<br />
                사이트의 이용은 정상적인 예약, 구매 또는 정보 취득 등의 적법한 경우에만 이루어져야 하며, 부정한 목적의 예약(거짓예약, 공급 부족 시를 대비한 가계약)은 사용을 금합니다.<br />
                사이트의 콘텐츠는 비상업적인 개인적 목적의 용도를 제외한 복사, 재편집 등을 금합니다.
              </p>
            </div>
          </div>

          {/* CHAPTER 3 */}
          <div className="space-y-3">
            <h5 className="font-bold text-base text-[#c5a47e] border-b border-white/10 pb-1">
              [제3장 의무와 책임]
            </h5>
            <div>
              <p className="font-bold text-white mb-1">제1조 (직업학교의 의무)</p>
              <p className="text-gray-300 leading-relaxed">
                직업학교는 특별한 사정이 없는 한 이용자가 회원가입 후 바로 서비스를 이용할 수 있도록 합니다.<br />
                직업학교는 이 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를 제공할 의무가 있습니다.<br />
                직업학교는 이용자의 개인신상정보를 본인의 승낙 없이 타인에게 누설, 배포하여서는 아니 됩니다. 다만, 전기통신관련법령 등 관계법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 아니합니다.<br />
                직업학교는 이용자가 직업학교의 사이트를 통하여 이용을 받던 중 발생할 수 있는 이용자의 컴퓨터 시설물의 손상에 대한 아무런 책임이 없습니다.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">제2조 (이용자의 의무)</p>
              <p className="text-gray-300 leading-relaxed">
                이용자ID와 비밀번호는 이용자 본인이 직접 사용하여야 하며, 본인이 아닌 타인이 이용하여서는 아니 됩니다.<br />
                이용자의 ID가 부정하게 사용된 경우 이용자는 반드시 직업학교에 그 사실을 통보하여야 하며, 타인이 ID를 사용하게 되어 일어날 수 있는 각종 손해에 대한 책임은 이용자 본인에게 귀속됩니다.<br />
                이용자의 신용정보를 변경하여야 하는 경우에는 반드시 회원변경란에 본인이 직접 수정하여 등록하여야 합니다.<br />
                이용자는 이 약관 및 관계법령에서 규정한 사항을 준수하여야 합니다.
              </p>
            </div>
          </div>

          {/* CHAPTER 4 */}
          <div className="space-y-3">
            <h5 className="font-bold text-base text-[#c5a47e] border-b border-white/10 pb-1">
              [제4장 계약해지 및 서비스 이용제한]
            </h5>
            <div>
              <p className="font-bold text-white mb-1">제1조 (계약해지 및 이용제한)</p>
              <p className="text-gray-300 mb-2">
                직업학교는 이용자가 다음 사항에 해당하는 행위를 하였을 경우 사전 통지 없이 이용계약을 해지하거나 또는 기간을 정하여 서비스 이용을 중지할 수 있습니다.
              </p>
              <ul className="list-none pl-2 space-y-1 text-gray-300">
                <li>① 공공질서 및 미풍양속에 반하는 경우</li>
                <li>② 범죄적 행위에 관련되는 경우</li>
                <li>③ 이용자가 국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행할 경우</li>
                <li>④ 타인의 서비스 ID 및 비밀번호를 도용한 경우</li>
                <li>⑤ 타인의 명예를 손상시키거나 불이익을 주는 경우</li>
                <li>⑥ 한 사람의 이용자가 다른 ID로 이중등록을 한 경우</li>
                <li>⑦ 서비스에 위해를 가하는 등 서비스의 건전한 이용을 저해하는 경우</li>
                <li>⑧ 기타 관계법령이나 직업학교가 정한 이용조건에 위배되는 경우</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white mb-1">제2조 (이용의 제한 및 해제 절차)</p>
              <p className="text-gray-300 leading-relaxed">
                직업학교는 4장 1조의 규정에 의하여 이용제한을 하고자 하는 경우에는 그 사유, 일시 및 기간을 정하여 서면 또는 전화 등의 방법을 통하여 해당 이용자 또는 대리인에게 그 사실을 통지합니다.<br />
                다만, 직업학교가 긴급하게 이용을 정지할 필요가 있다고 인정하는 경우에는 그러하지 아니합니다.<br />
                위 항의 규정에 의하여 이용정지의 통지를 받은 이용자 또는 그 대리인은 그 이용정지에 대하여 이의가 있을 경우 이의신청을 할 수 있습니다.<br />
                직업학교는 이의신청과 관련하여 그 확인을 위한 기간까지 이용정지를 일시 연기할 수 있으며, 그 결과를 이용자 또는 그 대리인에게 통지합니다.
              </p>
            </div>

            <div>
              <p className="font-bold text-white mb-1">제3조 (이용자의 게시물)</p>
              <p className="text-gray-300 mb-2">
                직업학교는 이용자가 사이트상에 게시하거나 등록하는 내용물이 다음 각 사항에 해당된다고 판단되는 경우 사전 통지 없이 삭제할 수 있습니다.
              </p>
              <ul className="list-none pl-2 space-y-1 text-gray-300">
                <li>① 다른 이용자 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우</li>
                <li>② 공공질서 및 미풍양속에 위반되는 내용인 경우</li>
                <li>③ 범죄적 행위에 결부된다고 인정되는 내용일 경우</li>
                <li>④ 제3자의 저작권 등 기타권리를 침해하는 내용인 경우</li>
                <li>⑤ 기타 관계법령이나 직업학교에서 정한 규정에 위배되는 경우</li>
              </ul>
            </div>
          </div>

          {/* CHAPTER 5 */}
          <div className="space-y-3">
            <h5 className="font-bold text-base text-[#c5a47e] border-b border-white/10 pb-1">
              [제5장 약관의 수정]
            </h5>
            <p className="text-gray-300">
              직업학교는 언제라도 약관에 언급된 사항을 수정할 수 있으며, 이용자의 서비스는 변경된 약관에 의하여 제공됩니다.
            </p>
          </div>

          {/* ADDENDUM */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h5 className="font-bold text-white border-b border-white/10 pb-1">[부 칙]</h5>
            <p className="text-gray-300">
              <strong>시행일</strong><br />
              이 약관은 2008년 02월 11일부터 시행됩니다.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 mt-2 border-t border-white/10 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#c5a47e] hover:bg-[#b3936d] text-black font-extrabold text-xs sm:text-sm transition-colors shadow-lg shadow-[#c5a47e]/20"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
