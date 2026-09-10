import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles, Send, X, MessageSquare, ChevronRight, User } from 'lucide-react';

export const AiCourseAssistant: React.FC<{ onOpenApplication: () => void }> = ({ onOpenApplication }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: '안녕하세요! 한국정보교육원 생성형AI × Java 풀스택 부트캠프 AI 상담원입니다. 과정 자격, 커리큘럼, 국비 지원금 등 무엇이든 물어보세요!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat when messages or loading state updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, isOpen]);

  const predefinedQuestions = [
    '비전공자도 정말 가능한가요?',
    '교육 기간과 시간은 어떻게 되나요?',
    '국비지원으로 얼마까지 수강료가 지원되나요?',
    '신청 절차가 궁금해요'
  ];

  const handleSend = async (questionText?: string) => {
    const query = questionText || input;
    if (!query.trim()) return;

    // Add user message
    const updatedMessages = [...messages, { sender: 'user' as const, text: query }];
    setMessages(updatedMessages);
    if (!questionText) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      console.error('Failed to fetch Gemini reply from backend proxy:', err);
      // Hard fallback reply when API endpoint is unreachable or fails
      let botReply = '';
      const lower = query.toLowerCase();

      if (lower.includes('비전공자') || lower.includes('전공') || lower.includes('초보')) {
        botReply = '네, 가능합니다! 수강생의 70% 이상이 비전공자입니다. 1단계 Java 기초 언어부터 차근차근 단계별 밀착 코칭이 진행되며, 1:1 취업 맞춤 컨설팅까지 밀착 제공되어 누구나 성공적으로 취업하고 있습니다.';
      } else if (lower.includes('기간') || lower.includes('시간') || lower.includes('일정')) {
        botReply = '교육기간은 총 6개월이며, 월요일부터 금요일까지 매일 09:00 ~ 17:50 (하루 8시간, 100% 오프라인)로 진행됩니다. 코호트 개강 일정은 [6기] 8/31, [7기] 10/19, [8기] 12/21 입니다.';
      } else if (lower.includes('지원금') || lower.includes('수강료') || lower.includes('비용') || lower.includes('0원')) {
        botReply = '원 수강료는 원래 9,493,000원이지만 국민내일배움카드 발급 시 자부담금 0원~400,000원 수준으로 수강 가능하여 전액 무료에 가깝습니다. 또한 국민취업지원제도 연계 시 월 최대 80만원의 훈련장려금을 받으실 수 있습니다!';
      } else if (lower.includes('신청') || lower.includes('절차') || lower.includes('상담')) {
        botReply = '선발 절차는 [온라인 교육문의] → [방문 대면상담] → [인터뷰] → [최종 합격 발표] → [고용24 내일배움카드 발급 신청] 순으로 진행됩니다. 우측 상단 교육문의 버튼이나 하단 상담 신청 폼을 통해 접수해 주시면 즉시 상담해 드립니다.';
      } else {
        botReply = `문의해주신 "${query}" 내용에 대해 한국정보교육원 전문 상담사가 1:1 상세 유선 안내를 도와드릴 수 있습니다. 상담 신청을 남겨주시면 빠르게 연락 드리겠습니다!`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 sm:bottom-24 sm:right-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#c5a47e] via-[#e2d1c3] to-[#a37f55] hover:opacity-95 text-black font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-[#c5a47e]/30 border border-[#c5a47e]/30 transition-all active:scale-95"
          aria-label="Open AI Course Assistant"
        >
          <Bot className="w-5 h-5 text-black" />
          <span className="hidden sm:inline text-xs font-extrabold">AI 과정 상담원</span>
        </button>
      ) : (
        <div className="bg-[#12141a] border border-[#c5a47e]/30 rounded-2xl w-[320px] sm:w-[380px] h-[480px] shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#181a22] to-[#0a0b0d] p-4 border-b border-[#c5a47e]/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#c5a47e]/20 flex items-center justify-center text-[#c5a47e] border border-[#c5a47e]/30">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">KIEI AI 과정 챗봇</h4>
                <span className="text-[10px] text-[#c5a47e] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a47e] animate-ping"></span>
                  실시간 질문 가능
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 overflow-y-auto flex-1 space-y-3 text-xs bg-[#0a0b0d]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#c5a47e]/20 text-[#c5a47e] flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-[#c5a47e]/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[80%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#c5a47e] text-black font-medium rounded-br-none'
                      : 'bg-[#181a22] text-gray-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-400 text-xs pl-8">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-[#c5a47e]" />
                <span>AI가 답변을 작성 중입니다...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Buttons */}
          <div className="p-2.5 bg-[#12141a] border-t border-white/10 flex items-center gap-1.5 overflow-x-auto">
            {predefinedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#181a22] hover:bg-[#202330] text-[10px] text-[#c5a47e] border border-[#c5a47e]/20 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#12141a] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="과정에 관해 질문하세요..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-[#181a22] border border-[#c5a47e]/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-[#c5a47e] text-black hover:bg-[#b3936d] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
