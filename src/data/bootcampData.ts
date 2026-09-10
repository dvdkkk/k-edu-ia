import {
  CourseSummary,
  MetricCard,
  KeyPoint,
  TargetAudienceCard,
  AlumniEmployment,
  CareerStep,
  CurriculumStepItem,
  StudentInterview,
  FaqItem,
  CompanyInfo
} from '../types';

export const COURSE_SUMMARY: CourseSummary = {
  badge: "2025 KDT 취업률 85%",
  campus: "2025 KDT 취업률 85%",
  title: "생성형AI × Java\n풀스택 개발 부트캠프",
  courseTitle: "현업에서 바로 통하는 자바 풀스택 & 생성형AI 서비스개발 실무 프로젝트 완성",
  capacity: "25명",
  duration: "[6기]8/31, [7기]10/19, [8기]12/21",
  schedule: "09:00~17:50 (월-금) ㅣ 6개월과정",
  originalPrice: "9,493,000원",
  discountedPrice: "0 ~ 40만원",
  stipendNote: "국취제 연계시 최대 80만원 지원"
};

export const METRIC_CARDS: MetricCard[] = [
  {
    value: "807,197명",
    label: "누적방문자수",
    description: "공식 홈페이지 누적 수강/상담 방문 기록",
    iconName: "Users"
  },
  {
    value: "85%",
    label: "2025년도 KDT 취업률",
    description: "K-Digital Training 과정 수료생 실제 취업 성과",
    iconName: "TrendingUp"
  },
  {
    value: "2022년도",
    label: "우수직업훈련기관",
    description: "고용노동부 지정 우수 훈련기관 선정",
    iconName: "Award"
  }
];

export const KEY_POINTS: KeyPoint[] = [
  {
    id: "point-1",
    shortTag: "POINT 1",
    title: "흔들리지 않는 IT 표준 '자바(Java)'",
    content: "국내 대기업, 공공, 금융 시스템의 절대 다수는 Java 기반입니다. AI 시대가 도래해도 기업이 가장 많이 찾고, 가장 먼저 뽑는 핵심 포지션은 탄탄한 기본기를 갖춘 Java 개발자입니다.",
    iconName: "Code2"
  },
  {
    id: "point-2",
    shortTag: "POINT 2",
    title: "단순 코딩을 넘어 'AI를 지휘하는 생산성'",
    content: "AI 어시스턴트(ChatGPT, Gemini, Copilot 등)를 도구로 활용해 개발 속도를 2배 이상 끌어올리고, 신입의 한계를 뛰어넘는 업무 수행 능력을 증명해야 합니다.",
    iconName: "Bot"
  },
  {
    id: "point-3",
    shortTag: "POINT 3",
    title: "학습용 프로젝트가 아닌 '진짜 서비스 배포'",
    content: "기획부터 설계, 협업, 그리고 실제 클라우드 환경에 서비스를 배포하고 트래픽을 개선해 본 실무 중심의 완성도 높은 포트폴리오를 준비해야 합니다.",
    iconName: "CloudUpload"
  },
  {
    id: "point-4",
    shortTag: "POINT 4",
    title: "합격으로 연결하는 '밀착 커리어 매칭'",
    content: "아무리 좋은 역량을 쌓아도 기업에 제대로 보여주지 못하면 소용없습니다. 내 포트폴리오의 강점을 극대화하는 이력서 리프레이밍과 협력 기업 네트워크를 통한 맞춤형 채용 연계로 취업의 문을 엽니다.",
    iconName: "BriefcaseCheck"
  }
];

export const TARGET_AUDIENCE: TargetAudienceCard[] = [
  {
    id: 1,
    title: "명확한 학습 기준이 필요한 분",
    description: "무엇부터 배워야 할지 막막한 비전공자 및 초보자를 위해 기초부터 단계별로 차근차근 이끌어드립니다.",
    iconName: "Compass",
    badge: "비전공자 · 입문자 맞춤",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    highlights: ["기초 Java/DB 단계별 빌드업", "1:1 데일리 학습 질의응답", "비전공자 맞춤 속도 가이드"]
  },
  {
    id: 2,
    title: "AI 시대의 핵심 역량을 갖추고 싶은 분",
    description: "단순 코딩을 넘어 LLM API, RAG, AI 어시스턴트 등 최신 생성형 AI 기술을 서비스에 직접 이식하는 실무 개발자",
    iconName: "Cpu",
    badge: "생성형 AI × 트렌드",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    highlights: ["LLM API & Prompt Engineering", "RAG 기반 AI 서비스 연동", "Gemini / AI 어시스턴트 활용"]
  },
  {
    id: 3,
    title: "막연한 취업 준비를 확실하게 끝내고 싶은 분",
    description: "이력서·포트폴리오 첨삭부터 실전 모의면접, 협력 IT 기업 우선 채용 연결까지 원스톱 케어를 원하시는 분",
    iconName: "Target",
    badge: "2025 KDT 취업률 85%",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    highlights: ["1:1 전담 취업 컨설팅 8회+", "협력 IT 기업 채용 우선 추천", "수료 후 6개월 사후 관리"]
  },
  {
    id: 4,
    title: "실무형 풀스택 배포 경험을 원하는 분",
    description: "실제 현업과 동일한 AWS/Cloud, Docker, CI/CD 배포 및 Java Spring + React 기반 포트폴리오를 완성하고 싶은 분",
    iconName: "Sparkles",
    badge: "풀스택 & 클라우드 배포",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    highlights: ["Spring Boot + React 풀스택", "Docker & CI/CD 파이프라인", "실제 라이브 클라우드 배포"]
  }
];

export const ALUMNI_EMPLOYMENT: AlumniEmployment[] = [
  { id: 1, cohort: "6기", companyName: "****스", courseName: "[6기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 2, cohort: "8기", companyName: "인*닉", courseName: "[8기] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 3, cohort: "4기", companyName: "에******트", courseName: "[4기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 4, cohort: "5기", companyName: "쿼***너", courseName: "[5기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 5, cohort: "3기", companyName: "대****술", courseName: "[3기] HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니어 양성..." },
  { id: 6, cohort: "10기", companyName: "대****술", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 7, cohort: "10기", companyName: "아*****티", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 8, cohort: "5기", companyName: "메*****어", courseName: "[5기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 9, cohort: "SQF기반", companyName: "비*", courseName: "[SQF기반] 자바 스프링으로 완성하는 공공데이터 활용 백엔드 개발자 양성..." },
  { id: 10, cohort: "4기", companyName: "엔*", courseName: "[4기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 11, cohort: "8기", companyName: "에**씨", courseName: "[8기] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택..." },
  { id: 12, cohort: "5기", companyName: "피******지", courseName: "[5기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 13, cohort: "10기", companyName: "굿*스", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 14, cohort: "SQF기반", companyName: "엘***어", courseName: "[SQF기반] 자바 스프링으로 완성하는 공공데이터 활용 백엔드 개발자 양성..." },
  { id: 15, cohort: "5기", companyName: "대****술", courseName: "[5기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 16, cohort: "4기", companyName: "모**랩", courseName: "[4기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 17, cohort: "11기", companyName: "이****티", courseName: "[11기] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 18, cohort: "삼육대", companyName: "와****스", courseName: "[삼육대] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 19, cohort: "11기", companyName: "파**엠", courseName: "[11기] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 20, cohort: "2기", companyName: "에******술", courseName: "[2기] HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니어 양성..." },
  { id: 21, cohort: "10기", companyName: "한*****프", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 22, cohort: "디지털컨버젼스", companyName: "두***템", courseName: "[디지털컨버젼스] 자바 스프링으로 완성하는 공공데이터 활용 백엔드 개발 A..." },
  { id: 23, cohort: "5기", companyName: "와*텍", courseName: "[5기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 24, cohort: "충북대", companyName: "아***션", courseName: "[충북대] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 25, cohort: "10기", companyName: "소***사", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 26, cohort: "2기", companyName: "대***술", courseName: "[2기] HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니어 양성..." },
  { id: 27, cohort: "삼육대", companyName: "아***잇", courseName: "[삼육대] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 28, cohort: "10기", companyName: "아***지", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 29, cohort: "10기", companyName: "메****트", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 30, cohort: "10기", companyName: "아***지", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 31, cohort: "11기", companyName: "제*스", courseName: "[11기] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 32, cohort: "10기", companyName: "웰*****템", courseName: "[10기] 클라우드 컴퓨팅과 보안솔루션을 활용한 DC 엔지니어 양성..." },
  { id: 33, cohort: "삼육대", companyName: "아***잇", courseName: "[삼육대] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 34, cohort: "4기", companyName: "테*비", courseName: "[4기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 35, cohort: "1기", companyName: "테*비", courseName: "[1기] HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니..." },
  { id: 36, cohort: "4기", companyName: "소***사", courseName: "[4기] KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어 양성..." },
  { id: 37, cohort: "2기", companyName: "이*****스", courseName: "[2기] HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니어 양성..." },
  { id: 38, cohort: "11기", companyName: "이***넷", courseName: "[11기] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
  { id: 39, cohort: "2기", companyName: "뉴*지", courseName: "[2기] HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니어 양성..." },
  { id: 40, cohort: "11기", companyName: "스**비", courseName: "[11기] 자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발..." },
];

export const CAREER_STEPS: CareerStep[] = [
  {
    step: "STEP 1",
    title: "1:1 상담으로 취업전략 설계",
    items: ["취업역량 진단", "취업 니즈 분석", "맞춤형 채용정보 제공"]
  },
  {
    step: "STEP 2",
    title: "실전 취업 준비",
    items: ["취업역량 강화 교육", "이력서·자기소개서 1:1 첨삭", "면접특강&모의면접"]
  },
  {
    step: "STEP 3",
    title: "취업활동 지원",
    items: ["동행면접", "채용행사&현장면접", "대외 취업정보 제공"]
  },
  {
    step: "STEP 4",
    title: "6개월 사후관리",
    items: ["취업 후 적응 상담", "경력 개발 코칭", "6개월 지속 모니터링"]
  }
];

export const CURRICULUM_STEPS: CurriculumStepItem[] = [
  {
    stepNumber: 1,
    stepTitle: "Java Language",
    details: "프로그래밍 언어 개념 및 문법 적용 / 개발 환경 설정 / 라이브러리 활용",
    category: "backend",
    skills: ["Java", "OOP", "JVM", "Collections", "Exception Handling"]
  },
  {
    stepNumber: 2,
    stepTitle: "HTML5 & CSS3",
    details: "HTML5 / CSS3",
    category: "web",
    skills: ["HTML5", "CSS3", "Semantic Web", "Responsive Design"]
  },
  {
    stepNumber: 3,
    stepTitle: "JavaScript & jQuery",
    details: "JavaScript / jQuery",
    category: "web",
    skills: ["JavaScript (ES6)", "jQuery", "DOM Manipulation", "Async/Await"]
  },
  {
    stepNumber: 4,
    stepTitle: "Git & GitHub",
    details: "기본 명령어 / 버전 관리, .gitignore 관리 / 협업 워크플로우",
    category: "core",
    skills: ["Git", "GitHub", "Branching", "PR Review", "Conflict Resolution"]
  },
  {
    stepNumber: 5,
    stepTitle: "Database & Oracle",
    details: "RDBMS 개념 / SQL DDL/DML/DCL/UNION",
    category: "backend",
    skills: ["Oracle RDBMS", "SQL", "DDL", "DML", "Subqueries", "Indexing"]
  },
  {
    stepNumber: 6,
    stepTitle: "Bootstrap5",
    details: "Flexbox, Grid를 활용한 UI 레이아웃",
    category: "web",
    skills: ["Bootstrap 5", "Flexbox", "CSS Grid", "UI Components"]
  },
  {
    stepNumber: 7,
    stepTitle: "React",
    details: "ECMAScript6 문법 / 컴포넌트, Props/State / Hooks 기본 및 활용",
    category: "web",
    skills: ["React.js", "JSX", "Hooks", "Context API", "SPA Architecture"]
  },
  {
    stepNumber: 8,
    stepTitle: "SpringBoot Framework",
    details: "Request/Response 웹 기초 / Servlet / JSP / EL&JSTL / Spring MVC / DI / AOP",
    category: "backend",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "JPA/Hibernate", "RESTful API"]
  },
  {
    stepNumber: 9,
    stepTitle: "Docker & Cloud",
    details: "Docker 기본 명령어 / 클라우드 서버구축과 도커 컨테이너 / Google Cloud Storage(GCS) 활용",
    category: "cloud",
    skills: ["Docker", "Google Cloud Platform (GCP)", "GCS", "Containerization"]
  },
  {
    stepNumber: 10,
    stepTitle: "GitHub Actions & Jenkins CI/CD",
    details: "파이프라인 구성 / 배포 / 테스트 자동화",
    category: "cloud",
    skills: ["GitHub Actions", "Jenkins", "CI/CD Pipeline", "Automated Testing"]
  },
  {
    stepNumber: 11,
    stepTitle: "AI (LLM API & RAG) 시스템 구축",
    details: "LLM API 활용 및 연동실습 / REST API 서버 연동 / AI 챗봇 구현",
    category: "ai",
    skills: ["LLM Integration", "Gemini API", "OpenAI API", "RAG Pipeline", "Vector DB"]
  },
  {
    stepNumber: 12,
    stepTitle: "1차 프로젝트",
    details: "Spring Legacy 기반 MPA 웹 서비스 개발",
    category: "project",
    skills: ["Spring Legacy", "MPA", "Oracle SQL", "Project Management", "Agile"]
  },
  {
    stepNumber: 13,
    stepTitle: "2차 프로젝트",
    details: "Framework 및 Public Cloud 기반 AI 융합 지능형 웹 서비스 구축",
    category: "project",
    skills: ["Spring Boot", "React", "Cloud Architecture", "AI Integration", "GCP Deployment"]
  },
  {
    stepNumber: 14,
    stepTitle: "3차 프로젝트",
    details: "래거시 프로젝트 리팩토링 및 고도화 실습 / 1차 프로젝트 SPA 전환 및 고도화 / 2차 프로젝트 성능 최적화 및 고도화",
    category: "project",
    skills: ["Code Refactoring", "SPA Conversion", "Performance Optimization", "CI/CD Deployment", "Portfolio Finalization"]
  }
];

export const STUDENT_INTERVIEWS: StudentInterview[] = [
  {
    id: 1,
    headline: "IT 솔루션 개발 취업!",
    courseName: "자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발",
    studentName: "홍혜린 수료생",
    categoryTag: "SW개발",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfMTU2/MDAxNzg1MTQyNDkxNDU3.G9LxIvd02-Yu5rkbyKoecN-m9LGdttPPzG51Z9uSjsUg.5E4FMrPUCf7SO7x-7NRL2iq-yprY36P4LgoferDdOvwg.PNG/20260727_174308_1.png?type=w966",
    quote: "비전공자였지만 스스로 문제 원인을 파악하고 보안 정책을 수립하는 자기주도적 습관을 길렀습니다.",
    storyDetails: "실제 블록체인 기반 모니터링 구축과 방화벽 정책 연동 실습으로 주도적인 실습 능력을 키우고 원하는 기업에 합격했습니다."
  },
  {
    id: 2,
    headline: "풀스택 개발자 취업!",
    courseName: "자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발",
    studentName: "강윤아 수료생",
    categoryTag: "SW개발",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfMjc3/MDAxNzg1MTQyNDkxNDUx.rryWIGcxzJMuFj4-mgy5V0H0A3jVvQcS20WdGlBvIu0g.eZ3MD2Q8O-zSUO7CkIaRBv8UvTMaEQXYF8aM5lBM69Mg.PNG/20260727_174308_2.png?type=w966",
    quote: "AWS 아키텍처 설계와 데이터센터 인프라 관리를 체계적으로 배워 취업에 성공했습니다.",
    storyDetails: "6개월 간 일대일 밀착 코칭과 실무 프로젝트를 통해 가상화 및 클라우드 핵심 역량을 다졌습니다."
  },
  {
    id: 3,
    headline: "보안 솔루션 개발자 취업!",
    courseName: "자바 스프링 리액트로 완성하는 클라우드 활용 풀스택 개발",
    studentName: "서성우 수료생",
    categoryTag: "SW개발",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfNSAg/MDAxNzg1MTQyNDkxNDU4.cnKnZ-y8MRQll6IKBktRnyH8CsZzaFLZ_d7yH_IIdBQg.Gm5n_1fQeHarda9X87gwFd3YbuaSGTiH8tO76KGuZR4g.PNG/20260727_174308_3.png?type=w966",
    quote: "국내 최신 기술 트렌드와 현업 장비 실습으로 경쟁력 있는 클라우드 엔지니어로 거듭났습니다.",
    storyDetails: "실제 기업에서 사용하는 CI/CD 파이프라인과 모니터링 환경 구축을 다루며 글로벌 기업 면접도 자신있게 치렀습니다."
  },
  {
    id: 4,
    headline: "Data Center Operation 취업!",
    courseName: "HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니어",
    studentName: "유태빈 수료생",
    categoryTag: "클라우드",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfNzUg/MDAxNzg1MTQyNDkxNDY3.BS6py04el-6fW2HG559AmZDNqJc_yK5gUqlgzaRZBb4g.z_ah-kEG0_Wl0aso3FVJwJfhWnyN5dsc9spL4OJs-rsg.PNG/20260727_174308_4.png?type=w966",
    quote: "Spring Boot와 React의 기본기부터 탄탄히 쌓아 실무 개발자로 도약했습니다.",
    storyDetails: "비전공자임에도 하루 8시간 집중 몰입 과정을 거쳐 완성도 높은 포트폴리오를 제작할 수 있었습니다."
  },
  {
    id: 5,
    headline: "인프라 엔지니어 취업!",
    courseName: "클라우드 컴퓨팅과 보안 솔루션을 활용한 DC 엔지니어 양성",
    studentName: "허준 수료생",
    categoryTag: "클라우드",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfMTMz/MDAxNzg1MTQyNDkxNDYx.UpZDzO1FAP72Jxjr5ABzFq35aNDNhco3nxjr4xOid6Ig.unkh0u0MEtUXOrAWvpz3wO9jJV2AnUe3H6E8MpjEmlog.PNG/20260727_174308_5.png?type=w966",
    quote: "LLM API 파이프라인 구축 경험이 면접에서 압도적인 차별점이 되었습니다.",
    storyDetails: "RAG 기반 맞춤형 추천 서비스 3차 실무 프로젝트를 완수하며 백엔드 & AI 융합 개발 능력을 인정받았습니다."
  },
  {
    id: 6,
    headline: "시스템 엔지니어 취업!",
    courseName: "KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어",
    studentName: "김현수 수료생",
    categoryTag: "클라우드",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfMTE4/MDAxNzg1MTQyNDkxNDY3.CTOC0-2CyIwEiwQjuSdg0DCSNmcw257P2Ug4qlH0bLMg.LVsCrNAYkjQ-dpA2MzbGDCMS0hgh06IvrgDlzyOe4bIg.PNG/20260727_174308_6.png?type=w966",
    quote: "Kubernetes 및 Docker 클러스터링 실습이 취업 성공의 확실한 무기가 되었습니다.",
    storyDetails: "어렵게 느껴졌던 DevOps 영역도 step-by-step 실습 과정 덕분에 체계적으로 익힐 수 있었습니다."
  },
  {
    id: 7,
    headline: "백엔드 개발자 취업!",
    courseName: "[SQF기반] 자바 스프링으로 완성하는 공공데이터 활용 백엔드 개발자 양성",
    studentName: "문성현 학생",
    categoryTag: "SW개발",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfMjAw/MDAxNzg1MTQzMjU5NTEy.AkqeMIPXehFujZmIicrHTHAhz6P0QKOWwedK9PnL0-Ig.0Q2dhV3QNvfBuPx8KdL4ixyQtRBxJtdYSBuPGmF_FJIg.PNG/20260727_180626.png?type=w966",
    quote: "고민하는 시간에 하루라도 일찍 시작하는 것이 합격의 열쇠입니다.",
    storyDetails: "강사진의 밀착 지도와 1:1 이력서 첨삭 덕분에 목표했던 기업에 1차로 합격했습니다."
  },
  {
    id: 8,
    headline: "솔루션 환경 구축 및 관리자로!",
    courseName: "KT클라우드와 NHN Cloud로 완성하는 클라우드 엔지니어",
    studentName: "임준호 수료생",
    categoryTag: "클라우드",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfNjUg/MDAxNzg1MTQyNDkxNjc4.7jLKSvaV9CfNIjxnXMs3YNnpsh3Nd1Tu17FZQYf1_RAg.JCdDlCCZkD8Hq-Iw1RTGlP1b7KU65S9eYYBDKs1NjcIg.PNG/20260727_174308_8.png?type=w966",
    quote: "비전공자도 할 수 있다는 자신감을 심어준 전담 멘토진의 관리가 기억에 남습니다.",
    storyDetails: "초기 적응이 어려웠을 때 멘토링 프로그램과 동료 스터디로 한 단계를 뛰어넘었습니다."
  },
  {
    id: 9,
    headline: "FE(Field Engineer)로 취업!",
    courseName: "클라우드 컴퓨팅과 보안 솔루션을 활용한 DC 엔지니어 양성",
    studentName: "최병찬 수료생",
    categoryTag: "정보보안",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfNDMg/MDAxNzg1MTQyNDkxNzE4.Ox5Q_dXb41TkcdN4_gNY6q4CIg8VpaehIkhbdBWMT-og.7XH0KlssL0z-pXi0j_-OgYLGFH9vVHUt4DOiBKML3-sg.PNG/20260727_174308_9.png?type=w966",
    quote: "실무형 데이터센터 장비 실습으로 신입임에도 전문 답변을 할 수 있었습니다.",
    storyDetails: "전공자였지만 실제 실무 환경에서의 클라우드 및 보안 연동 경험을 확실히 채웠습니다."
  },
  {
    id: 10,
    headline: "정보보안 엔지니어로 취업!",
    courseName: "HIWARE로 완성하는 클라우드 IT 인프라 보안 엔지니어",
    studentName: "조영운 수료생",
    categoryTag: "클라우드",
    campus: "서울캠퍼스",
    imageUrl: "https://postfiles.pstatic.net/MjAyNjA3MjdfMTMz/MDAxNzg1MTQyNDkxNjQ4.clHfBBHWcVeZDNCqihTEvXyLu9mp3C1uW1umZKGNIkUg.fc7NfLcJWYds16A8_cF2Wd-0HDxvnCwC_T2VluYmkaQg.PNG/20260727_174308_7.png?type=w966",
    quote: "시스템 다운타임을 최소화하는 장애 대응 실습이 실무에서 큰 평가를 받았습니다.",
    storyDetails: "실제 부하 테스트와 자동 복구 파이프라인 구축을 포트폴리오에 녹여내어 높은 평가를 받았습니다."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "지원 자격이 있나요?",
    answer: "국민내일배움카드를 보유하고 있거나 발급 가능한 분들이 과정참여 가능합니다. 국민내일배움카드 발급에 1주 이상 소요되므로 발급 신청을 먼저 해주시기 바랍니다. (*고용24에서 카드 발급 자격 확인 및 신청 가능합니다.)"
  },
  {
    id: 2,
    question: "비전공자도 지원 가능한가요?",
    answer: "네. 지원 가능합니다. 전공과 무관하게 강한 의지와 계획이 있으시면 됩니다. 다만, 합격 후 6개월 동안 정말 몰입해서 학습을 이어가셔야 합니다. 꾸준한 의지와 학습 습관으로 목표하시는 변화를 만들어내시기 바랍니다."
  },
  {
    id: 3,
    question: "선발 절차는 어떻게 되나요?",
    answer: "방문 상담을 통해 과정 적합 여부를 먼저 확인한 뒤, 대면 상담 → 서류 작성 → 인터뷰 → 최종 합격자 발표 → 고용24 수강신청 순으로 진행됩니다. (*합격 결과 발표는 SNS로 안내드릴 예정입니다.)"
  },
  {
    id: 4,
    question: "교육은 어디방식으로 진행되나요?",
    answer: "교육은 100% 오프라인으로 진행하고 있습니다."
  }
];

export const COMPANY_INFO: CompanyInfo = {
  companyName: "한국정보교육원",
  ceo: "김선경",
  businessRegNumber: "156-81-01617",
  licenseNumber: "서울관악 제2013-02호",
  email: "dvdkjc@naver.com",
  privacyOfficer: "김진철 (dvdkjc@naver.com)",
  operationsManager: "신용빈",
  address: "서울시 관악구 봉천로 227 보라매샤르망",
  phone: "",
  copyright: "Copyright © 2020 한국정보교육원 All Rights Reserved."
};
