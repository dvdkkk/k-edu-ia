import React, { useState } from 'react';
import { X, Calculator, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

interface StipendCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const StipendCalculatorModal: React.FC<StipendCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApply
}) => {
  const [employmentStatus, setEmploymentStatus] = useState<'unemployed' | 'student' | 'employed'>('unemployed');
  const [supportProgramType, setSupportProgramType] = useState<'type1' | 'type2' | 'none'>('type1');
  const [attendanceRate, setAttendanceRate] = useState<number>(100);

  if (!isOpen) return null;

  // Calculation Logic
  // Default KDT Allowance: approx 200,000 KRW/month for 80%+ attendance
  let kdtAllowance = attendanceRate >= 80 ? 200000 : 0;
  
  // National Employment Support Program
  let supportAllowance = 0;
  if (supportProgramType === 'type1') {
    supportAllowance = 500000;
  } else if (supportProgramType === 'type2') {
    supportAllowance = 284000;
  }

  const totalMonthlyStipend = kdtAllowance + supportAllowance;
  const totalSixMonthsStipend = totalMonthlyStipend * 6;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#12141a] border border-[#c5a47e]/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-lg bg-[#c5a47e]/10 text-[#c5a47e]">
            <Calculator className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-[#c5a47e] uppercase tracking-wider">
            STIPEND SIMULATOR
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
          나의 국비 훈련장려금 계산기
        </h3>
        <p className="text-xs text-gray-400 mb-6">
          KDT 훈련장려금과 국민취업지원제도를 연계했을 때 수령 가능한 월 최대 지원금을 시뮬레이션합니다.
        </p>

        <div className="space-y-4 mb-6">
          {/* Status */}
          <div>
            <label className="text-xs font-bold text-gray-300 block mb-1">현재 상태</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'unemployed', label: '구직자/취준생' },
                { id: 'student', label: '대학졸업예정자' },
                { id: 'employed', label: '이직준비자' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setEmploymentStatus(item.id as any)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                    employmentStatus === item.id
                      ? 'bg-[#c5a47e] text-black font-bold border border-[#c5a47e]'
                      : 'bg-[#181a22] text-gray-400 border border-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* National Employment Program */}
          <div>
            <label className="text-xs font-bold text-gray-300 block mb-1">국민취업지원제도 연계 여부</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'type1', label: '1유형 (월 50만원)' },
                { id: 'type2', label: '2유형 (월 28.4만원)' },
                { id: 'none', label: '미연계 (KDT만 수령)' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSupportProgramType(item.id as any)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                    supportProgramType === item.id
                      ? 'bg-[#c5a47e] text-black font-bold border border-[#c5a47e]'
                      : 'bg-[#181a22] text-gray-400 border border-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Attendance Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-300">예상 단위기간 출석률</label>
              <span className="text-xs font-black text-[#c5a47e]">{attendanceRate}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="100"
              step="5"
              value={attendanceRate}
              onChange={(e) => setAttendanceRate(Number(e.target.value))}
              className="w-full accent-[#c5a47e] bg-[#181a22] rounded-lg h-2"
            />
            <span className="text-[10px] text-gray-500 block mt-1">* 훈련장려금은 단위기간 출석률 80% 이상 시 지급됩니다.</span>
          </div>
        </div>

        {/* Total Calculation Output Card */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-[#181a22] via-[#12141a] to-[#0a0b0d] border border-[#c5a47e]/30 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-300">월 예상 수령 지원금</span>
            <span className="text-2xl font-black text-[#c5a47e]">
              월 {totalMonthlyStipend.toLocaleString()} 원
            </span>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs text-gray-400">
            <span>6개월 과정 총 누적 수령액 (예상)</span>
            <span className="text-base font-bold text-[#e2d1c3]">
              약 {totalSixMonthsStipend.toLocaleString()} 원
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c5a47e] via-[#e2d1c3] to-[#a37f55] hover:opacity-95 text-black font-black text-xs shadow-lg shadow-[#c5a47e]/20"
          >
            지원금 혜택 받고 교육문의하기
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/5 text-gray-400 text-xs hover:text-white"
          >
            창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
