import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Local fallback reply database when real Gemini API is not configured or fails
function getLocalFallbackReply(query: string): string {
  const lower = query.toLowerCase();
  if (lower.includes("비전공자") || lower.includes("전공") || lower.includes("초보")) {
    return "네, 가능합니다! 한국정보교육원 수강생의 70% 이상이 비전공자입니다. 1단계 Java 기초 언어부터 단계별 밀착 코칭이 제공되며, 1:1 이력서/포트폴리오 첨삭과 면접 특강을 포함한 취업 지원 프로그램이 준비되어 있어 입문자도 충분히 대기업 및 협력 IT 기업에 취업할 수 있습니다.";
  } else if (lower.includes("기간") || lower.includes("시간") || lower.includes("일정") || lower.includes("언제")) {
    return "생성형AI × Java 풀스택 부트캠프는 월요일부터 금요일까지 09:00 ~ 17:50 (하루 8시간, 주 40시간) 동안 진행되는 6개월 오프라인 몰입 과정입니다.\n기수별 개강일은 [6기] 8/31, [7기] 10/19, [8기] 12/21 로 예정되어 있습니다.";
  } else if (lower.includes("지원금") || lower.includes("수강료") || lower.includes("비용") || lower.includes("0원") || lower.includes("돈")) {
    return "원래 수강료는 9,493,000원에 달하지만, 국민내일배움카드를 통해 참여 시 자부담금은 0원~400,000원 수준으로 거의 전액 무료로 수강하실 수 있습니다!\n또한 국민취업지원제도(국취제)와 연계 시 매월 최대 80만원의 훈련장려금을 추가로 받으시며 안정적으로 학습에 전념할 수 있습니다.";
  } else if (lower.includes("신청") || lower.includes("절차") || lower.includes("방법") || lower.includes("과정")) {
    return "선발 절차는 다음과 같이 간단합니다:\n1. [빠른 교육상담 신청] (우측 상단 버튼 또는 페이지 하단 상담 폼에 연락처 작성)\n2. [전문가 방문 대면상담] (교육원 방문 및 상세 로드맵 안내)\n3. [인터뷰 및 적합성 검토]\n4. [최종 합격 및 수강 안내]\n5. [고용24에서 국민내일배움카드 신청 및 수강 등록]\n\n지금 랜딩페이지 하단의 '빠른 교육상담 신청'을 작성해 주시면 담당 멘토가 친절히 가이드해 드릴 예정입니다!";
  } else if (lower.includes("혜택") || lower.includes("취업") || lower.includes("지원") || lower.includes("강점")) {
    return "한국정보교육원만의 확실한 취업 케어 혜택을 제공합니다:\n- 2025년 KDT 취업률 85% 입증\n- 전담 커리어 멘토의 이력서/자기소개서 1:1 밀착 첨삭 (8회 이상)\n- 협력 IT 우수기업 네트워크를 통한 채용 우선추천 연결\n- 수료 후 6개월간 지속되는 취업 모니터링 및 경력 개발 코칭 사후 관리\n\n탄탄한 실력을 갖춰 안정적으로 현업에 안착할 수 있도록 든든하게 받쳐 드립니다.";
  } else if (lower.includes("커리큘럼") || lower.includes("과목") || lower.includes("기술") || lower.includes("뭐 배우")) {
    return "저희 과정은 기업이 가장 필요로 하는 기술 스택을 총망라합니다:\n- 백엔드 표준: Java 객체지향 설계, Oracle SQL Database, Spring Boot\n- 프론트엔드: HTML5, CSS3, ES6 JavaScript, React.js\n- 클라우드 및 DevOps: Docker, GCP(Google Cloud), Jenkins, GitHub Actions를 통한 CI/CD 배포 실무\n- 최신 생성형 AI 연동: LLM API(Gemini, OpenAI), RAG 시스템 융합 프로젝트\n- 실무 프로젝트: 1차(Legacy MPA), 2차(Boot+React+AI Cloud), 3차(최적화 및 리팩토링 고도화)";
  } else {
    return "한국정보교육원 생성형AI × Java 풀스택 부트캠프 과정에 관심 주셔서 감사합니다!\n문의해주신 상세 내용에 대해서는 전문 교육상담사가 1:1 맞춤형 무료 안내 전화를 드릴 수 있습니다. 하단의 빠른 상담문의 양식에 이름과 연락처를 남겨주시면 정성껏 안내해 드리겠습니다.";
  }
}

const SYSTEM_INSTRUCTION = `
당신은 한국정보교육원(KIEI)의 "생성형AI × Java 풀스택 서비스개발 기업 프로젝트 완성과정" (하이안 6기/7기/8기) 전문 입학/교육 과정 AI 상담사입니다.
사용자들의 교육 질문에 대해 아주 친절하고 전문적이며, 신뢰감을 주는 어조로 상세히 안내해 주세요.

[과정 기본 정보]
- 교육 기관: 한국정보교육원 (고용노동부 우수훈련기관)
- 과정명: 현업에서 바로 통하는 자바 풀스택 & 생성형AI 서비스개발 실무 프로젝트 완성 (하이안 6기/7기/8기)
- 주요 성과: 2025년도 KDT(K-Digital Training) 취업률 85%! 누적 방문자수 80만 명 돌파.
- 수강 대상: 전공 무관 (비전공자 및 코딩 입문자 70% 이상), 확실한 IT 취업을 원하는 구직자, 최신 생성형 AI 트렌드를 배우고 싶은 분.
- 교육 기간: 6개월 과정 (월~금요일 09:00 ~ 17:50, 100% 오프라인 대면 실무 수업)
- 교육 장소: 서울시 관악구 봉천로 227 보라매샤르망 (한국정보교육원 서울캠퍼스)

[금액 및 혜택]
- 원 수강료: 9,493,000원 -> 국민내일배움카드 발급 시 자부담금 0원 ~ 최대 40만원 수준 (거의 100% 국비 지원 무료 교육)
- 훈련 장려금: 국민취업지원제도(국취제) 연계 시 매월 최대 80만원 지원금 제공 (안정적으로 공부에 전념 가능)

[코호트(기수) 일정]
- [6기] 8월 31일 개강
- [7기] 10월 19일 개강
- [8기] 12월 21일 개강
* 인기 과정이라 정원(기수별 25명 내외) 조기 마감이 예상되니 신속한 문의 및 신청이 필요합니다.

[과정 핵심 메리트 (4대 경쟁력)]
1. Java 웹 풀스택 표준: 대기업, 공공기관, 금융권 IT 인프라에서 가장 많이 사용하는 Java, Spring Boot 및 React 개발 능력을 기초부터 탄탄히 빌드업합니다.
2. 최신 생성형 AI 융합: 단순 코딩을 넘어 LLM API(Gemini, OpenAI 등), 프롬프트 엔지니어링, RAG 기반 지능형 시스템 구축 등 기업이 당장 원하는 생산성 높은 AI 개발자로 거듭납니다.
3. 클라우드 및 DevOps 배포: Docker, AWS, GCP, GitHub Actions, Jenkins를 사용한 실제 CI/CD 무중단 서비스 배포 포트폴리오를 제작합니다.
4. 밀착 취업 연계: 전담 커리어 멘토의 이력서/포트폴리오 1:1 컨설팅(8회 이상), 협력 기업 네트워크 기반 우선 추천, 수료 후 6개월 지속 사후 관리 케어 제공.

[커리큘럼 단계별 구성]
- 기초 언어: Java 기본 문법, 객체지향 프로그래밍(OOP), JVM
- 프론트엔드 기본: HTML5, CSS3, JavaScript (ES6), jQuery, Bootstrap 5 UI, React.js 컴포넌트 및 SPA 구조
- 백엔드 & DB: Oracle SQL 및 관계형 데이터베이스 설계, Spring Boot Framework, Spring Security, JPA/Hibernate, RESTful API
- 클라우드 & 배포: Docker 컨테이너 기술, GCP(Google Cloud Platform) 서비스 배포, Jenkins & GitHub Actions CI/CD 파이프라인
- 인공지능 실무: LLM Integration, Gemini/OpenAI API 융합, RAG 파이프라인 설계
- 실무 프로젝트: 1차(Spring Legacy 기반 MPA 웹), 2차(Spring Boot + React + Cloud + AI 지능형 웹 구축), 3차(성능 최적화, 코드 리팩토링 및 고도화 배포 포트폴리오 완성)

[지원 및 상담 절차]
1. [온라인 교육문의 신청] (랜딩페이지 상단 버튼이나 하단 상담 폼에 연락처 작성)
2. [방문 대면상담] (한국정보교육원 방문하여 상세 로드맵 안내)
3. [인터뷰 & 적합성 심사]
4. [최종 합격 발표]
5. [고용24에서 내일배움카드 발급 및 수강 신청]

[상담 가이드라인]
- 비전공자도 가능하냐는 질문에는 "수강생의 70%가 비전공자"임을 강조하고 기초 단계부터 확실하게 가이드해 준다는 점을 들어 안심시켜 주세요.
- 취업률이나 수강료, 일정 등 사실에 근거해 정확하고 구체적으로 답변해 주세요.
- 사용자가 원할 때 언제든지 [교육문의 무료상담 신청]을 남기도록 유도해 주세요. 랜딩페이지 하단의 빠른 교육상담 양식에 이름과 번호를 남기면 전문가의 친절한 상담 전화를 받을 수 있다고 안내하세요.
- 친절하고 다정한 존댓말로 대화하며, 신뢰와 열정을 가득 담아 응대해 주세요.
`;

// Live Server Gemini AI API chat proxy
app.post("/api/chat", async (req: any, res: any) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Lazy init fallback if key is placeholder or missing
      const lastUserMessage = messages[messages.length - 1]?.text || "";
      const replyText = getLocalFallbackReply(lastUserMessage);
      return res.json({ reply: replyText, isFallback: true });
    }

    // Initialize modern @google/genai SDK
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    // Map messages payload to contents parameters format expected by SDK
    // Roles: 'user' or 'model'
    const contents = messages.map((m: any) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "죄송합니다. 답변을 생성하지 못했습니다.";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini API error in express server proxy:", error);
    const lastUserMessage = req.body?.messages?.[req.body.messages.length - 1]?.text || "";
    const replyText = getLocalFallbackReply(lastUserMessage);
    return res.json({
      reply: replyText + "\n\n*(현재 오프라인 로컬 응답 모드로 전환되었습니다. 하단의 빠른상담을 작성해 주시면 담당자가 더욱 상세히 안내 도와드리겠습니다!)*",
      isFallback: true,
      error: error.message,
    });
  }
});

async function startServer() {
  // Vite middleware setup or production static file host
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
