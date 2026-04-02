import { useState, useRef, useEffect, useCallback } from "react";
import imgHero from "figma:asset/2a9efb8498f4ba95b7819ea668b4ddbdb3642f2d.png";
import imgCulture01 from "figma:asset/02404777f8846f7857e899457dfc6d49f68f5b86.png";
import imgCulture02 from "figma:asset/9dc86e4f50f872cc23c446396b0dcb666b604c7f.png";
import imgCulture03 from "figma:asset/f152d96178ef048102782dbfcb6c19184c003a61.png";
import imgStory1 from "figma:asset/10df0520cdbf7346b4745d9c061c4564f587a4a7.png";
import imgStory2 from "figma:asset/9d5acf5b6256ccf512af25c48f5b96896d6ef89a.png";
import imgStory3 from "figma:asset/734cb6223a88ec94eb947d7d2e04cb57fbe1aec3.png";
import imgStory4 from "figma:asset/8290a3b18c99c25934c9472e8e498ff37b21b668.png";
import imgStory5 from "figma:asset/bfeb34f799ff69fc2186fe37ccc888b3f2fe1f84.png";
import imgStory6 from "figma:asset/201c426173d159fdf5250f1405d058133b8a2f1c.png";
import imgDown from "figma:asset/b854d8bb91a107b275cccb45b6b14cfdddc8fa17.png";
import imgSns01 from "figma:asset/e8b4bdd371b96e779d935676ce28facaec7fcaca.png";
import imgSns02 from "figma:asset/9eb47fbf0216eb808c1eb94058f78c13a62b86b9.png";
import imgSns03 from "figma:asset/a6257ef69f03f62e86c55d2c39afc57777e5bb93.png";
import imgSns04 from "figma:asset/b1bc0bb8a1284f956b051e0377eb579fe5f780d6.png";

/* ── SVG paths ── */
const MENU_DOTS_PATH =
  "M28 30C28 30.5304 28.2107 31.0391 28.5858 31.4142C28.9609 31.7893 29.4696 32 30 32C30.5304 32 31.0391 31.7893 31.4142 31.4142C31.7893 31.0391 32 30.5304 32 30C32 29.4696 31.7893 28.9609 31.4142 28.5858C31.0391 28.2107 30.5304 28 30 28C29.4696 28 28.9609 28.2107 28.5858 28.5858C28.2107 28.9609 28 29.4696 28 30ZM16 30C16 30.5304 16.2107 31.0391 16.5858 31.4142C16.9609 31.7893 17.4696 32 18 32C18.5304 32 19.0391 31.7893 19.4142 31.4142C19.7893 31.0391 20 30.5304 20 30C20 29.4696 19.7893 28.9609 19.4142 28.5858C19.0391 28.2107 18.5304 28 18 28C17.4696 28 16.9609 28.2107 16.5858 28.5858C16.2107 28.9609 16 29.4696 16 30ZM28 18C28 18.5304 28.2107 19.0391 28.5858 19.4142C28.9609 19.7893 29.4696 20 30 20C30.5304 20 31.0391 19.7893 31.4142 19.4142C31.7893 19.0391 32 18.5304 32 18C32 17.4696 31.7893 16.9609 31.4142 16.5858C31.0391 16.2107 30.5304 16 30 16C29.4696 16 28.9609 16.2107 28.5858 16.5858C28.2107 16.9609 28 17.4696 28 18ZM16 18C16 18.5304 16.2107 19.0391 16.5858 19.4142C16.9609 19.7893 17.4696 20 18 20C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18C20 17.4696 19.7893 16.9609 19.4142 16.5858C19.0391 16.2107 18.5304 16 18 16C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18Z";
const BAR_CHART_LG = "M32 40V26H40V40H32ZM20 40V8H28V40H20ZM8 40V18H16V40H8Z";

/* ── Data ── */
const HERO_SLIDES = [
  { title: "PEOPLE", subtitle: "사람중심 철학과" },
  { title: "CULTURE", subtitle: "함께 성장하는 문화" },
  { title: "SERVICE", subtitle: "최고의 서비스" },
  { title: "TALENT", subtitle: "인재 육성" },
];

const cultureCards = [
  {
    img: imgCulture01,
    title: "Work",
    subtitle: "일하는 방식",
    desc: "직원 경험을 기반으로 만들어가는 1등이 될 수 밖에 없었던 구성원들의 일하는 방식입니다.",
  },
  {
    img: imgCulture02,
    title: "Welfare",
    subtitle: "사내복지",
    desc: "건강, 휴가, 나아가 가족의 일까지 챙겨 마음 편히 행복하게 일할 수 있는 사람인입니다.",
  },
  {
    img: imgCulture03,
    title: "Education",
    subtitle: "인재육성",
    desc: "사람인은 직원들이 자신의 역량을 꾸준히 개발할 수 있도록 지원을 아끼지 않습니다.",
  },
];

const storyItems = [
  {
    id: 1,
    img: imgStory1,
    title: "사람인 창립 18주년 기념 이벤트, 가을 테라스 오픈!",
    desc: "선선한 날씨가 이어지며 가을이 깊어지고 있는데요. 사람인이 10월 12일 창립 18주년을 맞아 14층 테라스에서 가을 테라스BAR를 오픈했습니다.",
  },
  {
    id: 2,
    img: imgStory2,
    title: "사람인 더위사냥! 여름 이벤트 진행",
    desc: "올해 여름은 잦은 폭염으로 더위에 지친 분들 많으셨죠. 사람인에서는 7월~8월 HOT한 여름 맞이 COOL한 이벤트를 진행했습니다.",
  },
  {
    id: 3,
    img: imgStory3,
    title: "모든 일과 사람이 만나는 곳, 사람인 Workverse 대오픈!",
    desc: "사람인의 workverse를 담은 회사소개서가 탄생했습니다.",
  },
  {
    id: 4,
    img: imgStory4,
    title: "업무 효율 업! 사람인, 선택적 근로시간제 도입하다",
    desc: "사람인 구성원들이 자율적이고 주도적으로 근무할 수 있도록 '선택적 근로시간제'를 도입했습니다.",
  },
  {
    id: 5,
    img: imgStory5,
    title: "사람인, 취업 문화 개선에 앞장서요",
    desc: "사람인은 업계를 선도하는 HR기업으로서 올바른 취업문화를 이끌어 나가기 위해 앞장서고 있습니다.",
  },
  {
    id: 6,
    img: imgStory6,
    title: "집콕 생활에 힐링 한 스푼, 집콕 클래스!",
    desc: "월 별 기념일마다 클래스가 다르게 전합니다! '집콕 클래스'는 지금도 매회 '완판' 행진 중입니다.",
  },
];

const newsItems = [
  { id: 1, category: "취업뉴스", title: "사람인, '커리어 매칭 에이전트' 전격 출시… 취업 준비 방법 혁신", date: "2026-03-04" },
  { id: 2, category: "회사소식", title: "사람인, 'ChatGPT for kakao' 파트너사 합류, HR AI 에이전트 광폭 행보", date: "2026-03-25" },
  { id: 3, category: "취업뉴스", title: "'내 손안의 AI 취업 에이전트'... 사람인, 신입·인턴 전용 홈 전면 개편", date: "2026-03-04" },
  { id: 4, category: "회사소식", title: "사람인, 지난해 입사지원 5500만 돌파, 국민 커리어 플랫폼 인증", date: "2026-03-25" },
];

/* ══════════════════════════════════════════
   공통 컴포넌트
══════════════════════════════════════════ */

/** 비디오: ref로 muted + autoplay 처리 (React muted 버그 우회) */
function AutoVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {/* autoplay blocked */});
  }, []);
  return (
    <video
      ref={ref}
      autoPlay
      loop
      playsInline
      className={className}
    >
      <source src="/_videos/v1/357a309e9a853e1d181cc67ef5c8efe48f5589c1" type="video/mp4" />
    </video>
  );
}

/** 헤더 캐러셀 화살표 버튼 */
function ChevronBtn({ dir, onClick, light = false }: { dir: "prev" | "next"; onClick: () => void; light?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`text-[22px] leading-[20px] px-1 transition-opacity hover:opacity-70 ${light ? "text-[#d9d9d9]" : "text-[#d9d9d9]"}`}
      style={{ fontFamily: "'Pretendard', sans-serif" }}
    >
      {dir === "prev" ? "〈" : "〉"}
    </button>
  );
}

/* ══════════════════════════════════════════
   Header — 자동 슬라이드 캐러셀
══════════════════════════════════════════ */
function Header() {
  const [idx, setIdx] = useState(0);
  const total = HERO_SLIDES.length;

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  /* 4초마다 자동 전환 */
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const slide = HERO_SLIDES[idx];

  return (
    <header className="relative w-full h-[580px] md:h-[700px] lg:h-[900px] overflow-hidden shrink-0">
      {/* 배경 이미지 */}
      <img src={imgHero} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute inset-0 bg-[rgba(34,34,34,0.2)]" />

      {/* 네비게이션 */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-2 md:px-4 lg:px-8 py-2 z-10">
        <p className="text-[#f8fafb] text-[32px] md:text-[48px]" style={{ fontFamily: "'Jalnan 2', sans-serif" }}>
          saramin
        </p>
        <button className="w-12 h-12 flex-shrink-0 hover:opacity-70 transition-opacity">
          <svg fill="none" viewBox="0 0 48 48" className="w-full h-full">
            <path d={MENU_DOTS_PATH} stroke="#F8FAFB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* 슬라이드 텍스트 — key 변경으로 fade 애니메이션 */}
      <div
        key={idx}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#f8fafb] gap-5"
        style={{ animation: "fadeIn 0.6s ease" }}
      >
        <p
          className="text-[32px] md:text-[80px] lg:text-[100px]"
          style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}
        >
          {slide.title}
        </p>
        <p
          className="text-[14px] md:text-[18px] lg:text-[22px]"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          {slide.subtitle}
        </p>
      </div>

      {/* 슬라이드 인디케이터 + 화살표 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[#d9d9d9]">
        <ChevronBtn dir="prev" onClick={prev} />
        <span
          className="text-[14px] md:text-[18px] lg:text-[22px] tabular-nums"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          <strong>{String(idx + 1).padStart(2, "0")} / </strong>
          {String(total).padStart(2, "0")}
        </span>
        <ChevronBtn dir="next" onClick={next} />
      </div>

      {/* 하단 슬라이드 점 인디케이터 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"}`}
          />
        ))}
      </div>
    </header>
  );
}

/* ══════════════════════════════════════════
   Section 1 — 사람인은 어떤 서비스를 만들까?
══════════════════════════════════════════ */

/** 비디오 진행 바 */
function VideoProgressBar({ segments = 4, active = 0, height = "h-[6px]", width = "w-[120px]" }) {
  return (
    <div className="flex gap-[3px] items-end">
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={`${height} ${width} rounded-sm transition-opacity duration-300 bg-[#f8fafb] ${i === active ? "opacity-100" : "opacity-40"}`}
        />
      ))}
    </div>
  );
}

function Section1() {
  return (
    <section className="w-full">
      {/* 제목 */}
      <div className="px-4 md:px-10 lg:px-32 pt-10">
        <p className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>
          사람인은
        </p>
        <p className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>
          어떤 서비스를 만들까?
        </p>
      </div>

      {/* ─ 모바일: 비디오 + 텍스트 ─ */}
      <div className="md:hidden px-4 pt-8 pb-10 flex flex-col gap-8">
        <div className="relative w-full h-[228px] rounded-[16px] overflow-hidden">
          <AutoVideo className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-3 left-3">
            <VideoProgressBar segments={4} active={0} height="h-[4px]" width="w-[60px]" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#222] text-[24px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>사람인</p>
          <p className="text-[#222] text-[14px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            대한민국 국민이라면 누구에게나 친숙한 커리어 플랫폼. 구인, 구직을 넘어, 일하는 모든 날 모든 순간이 즐거울 수 있도록 노력하는 사람인의 주요 서비스들을 확인해보세요.
          </p>
          <button className="relative inline-flex items-center justify-center px-5 py-2 rounded-[28px] w-fit mt-2 group overflow-hidden border-[0.5px] border-[#222]">
            <span className="absolute inset-0 bg-[#222] translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[28px]" />
            <span className="text-[#222] group-hover:text-white text-[14px] leading-[20px] relative transition-colors duration-300" style={{ fontFamily: "'Pretendard', sans-serif" }}>
              자세히 보기
            </span>
          </button>
        </div>
      </div>

      {/* ─ 태블릿: 비디오 오버레이 ─ */}
      <div className="hidden md:block lg:hidden px-4 py-10">
        <div className="relative w-full max-w-[640px] mx-auto h-[350px] overflow-hidden">
          <AutoVideo className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end px-6 py-8 gap-5">
            <p className="text-[#f8fafb] text-[48px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>사람인</p>
            <p className="text-[#f8fafb] text-[20px] leading-[1.6]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}>
              대한민국 국민이라면 누구에게나 친숙한 커리어 플랫폼. 구인, 구직을 넘어, 일하는 모든 날 모든 순간이 즐거울 수 있도록 노력하는 사람인의 주요 서비스들을 확인해보세요.
            </p>
            <button className="relative inline-flex items-center px-5 py-2 rounded-[28px] w-fit group overflow-hidden border-[0.5px] border-[#f8fafb]">
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[28px]" />
              <span className="text-[#f8fafb] group-hover:text-[#222] text-[18px] leading-[20px] relative transition-colors duration-300" style={{ fontFamily: "'Pretendard', sans-serif" }}>자세히 보기</span>
            </button>
            <VideoProgressBar segments={4} active={0} height="h-[6px]" width="w-[150px]" />
          </div>
        </div>
      </div>

      {/* 데스크톱: 제목만 표시 (비디오는 섹션2에 있음) */}
      <div className="hidden lg:block pb-10" />
    </section>
  );
}

/* ══════════════════════════════════════════
   Section 2 — 구성원과 함께 성장하며
══════════════════════════════════════════ */

/** 모바일 문화 카드 캐러셀 */
function CultureCarouselMobile() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const CARD_W = 270;
  const GAP = 24;

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(cultureCards.length - 1, i));
    setCurrent(clamped);
    scrollRef.current?.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
  }, []);

  return (
    <div className="relative w-full">
      {/* 카드 트랙 */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pl-4 pb-2"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        {cultureCards.map((card, i) => (
          <div
            key={card.title}
            style={{ scrollSnapAlign: "start" }}
            className="bg-[#f8fafb] flex flex-col gap-4 items-center overflow-hidden px-4 py-8 rounded-[16px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] shrink-0 w-[270px]"
          >
            <div className="w-[100px] h-[100px] overflow-hidden bg-[#d9d9d9] shrink-0 rounded-sm">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 items-center text-center w-full">
              <p className="text-[#222] text-[24px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>{card.title}</p>
              <p className="text-[#222] text-[18px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}>{card.subtitle}</p>
              <p className="text-[#222] text-[14px] leading-[20px] mt-1" style={{ fontFamily: "'Pretendard', sans-serif" }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 이전 버튼 */}
      {current > 0 && (
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-[200px] flex items-center justify-center text-[#d9d9d9] text-[24px] bg-gradient-to-r from-white/80 to-transparent"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          〈
        </button>
      )}

      {/* 다음 버튼 */}
      {current < cultureCards.length - 1 && (
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-[200px] flex items-center justify-center text-[#d9d9d9] text-[24px] bg-gradient-to-l from-white/80 to-transparent"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          〉
        </button>
      )}

      {/* 점 인디케이터 */}
      <div className="flex justify-center gap-2 mt-4">
        {cultureCards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-2 bg-[#222]" : "w-2 h-2 bg-[#d9d9d9]"}`}
          />
        ))}
      </div>
    </div>
  );
}

/** 태블릿·데스크톱 문화 카드 (3열) */
function CultureCardsGrid() {
  return (
    <div className="flex gap-6 lg:gap-8 justify-center flex-wrap">
      {cultureCards.map((card) => (
        <div
          key={card.title}
          className="bg-[#f8fafb] flex flex-col gap-[60px] items-center overflow-hidden px-4 py-8 rounded-[16px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] shrink-0 md:w-[200px] lg:w-[324px] h-[500px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0px_8px_24px_4px_rgba(0,0,0,0.15)] cursor-pointer"
        >
          <div className="w-[150px] h-[150px] overflow-hidden bg-[#d9d9d9] shrink-0">
            <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center text-center w-full gap-4">
            <div>
              <p className="text-[#222] text-[32px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>{card.title}</p>
              <p className="text-[#222] text-[20px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}>{card.subtitle}</p>
            </div>
            <p className="text-[#222] text-[16px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Section2() {
  return (
    <section className="w-full">
      {/* ─ 데스크톱 전용 브랜드 비디오 ─ */}
      <div className="hidden lg:flex justify-center px-4 py-10">
        <div className="relative w-[1020px] h-[896px] overflow-hidden">
          <AutoVideo className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end px-10 pb-10 gap-7">
            <p className="text-[#f8fafb] text-[60px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>사람인</p>
            <p className="text-[#f8fafb] text-[28px] leading-[1.6] max-w-[700px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}>
              대한민국 국민이라면 누구에게나 친숙한 커리어 플랫폼. 구인, 구직을 넘어, 일하는 모든 날 모든 순간이 즐거울 수 있도록 노력하는 사람인의 주요 서비스들을 확인해보세요.
            </p>
            <button className="relative inline-flex items-center px-5 py-2 rounded-[28px] w-fit group overflow-hidden border-[0.5px] border-[#f8fafb]">
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[28px]" />
              <span className="text-[#f8fafb] group-hover:text-[#222] text-[22px] leading-[20px] relative transition-colors duration-300" style={{ fontFamily: "'Pretendard', sans-serif" }}>자세히 보기</span>
            </button>
            <VideoProgressBar segments={4} active={0} height="h-[8px]" width="w-[240px]" />
          </div>
        </div>
      </div>

      {/* ─ 문화 텍스트 + 카드 ─ */}
      <div className="w-full px-4 md:px-10 lg:px-32 py-10 flex flex-col gap-7 md:gap-[60px]">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>구성원과 함께 성장하며</p>
            <p className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>혁신을 이루어 내는 곳입니다.</p>
          </div>
          <button className="text-[#222] text-[14px] leading-[20px] underline decoration-solid text-left hover:text-[#00967b] transition-colors duration-200 w-fit" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            기업문화 보기
          </button>
        </div>

        {/* 모바일: 캐러셀 */}
        <div className="md:hidden">
          <CultureCarouselMobile />
        </div>

        {/* 태블릿·데스크톱: 3열 그리드 */}
        <div className="hidden md:block">
          <CultureCardsGrid />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Section 3 — INSIDE STORY + NEWS
══════════════════════════════════════════ */

/** Inside Story 카드 (호버 오버레이 포함) */
function StoryCard({ item }: { item: typeof storyItems[0] }) {
  return (
    <div className="flex flex-col gap-6 cursor-pointer group">
      {/* 이미지 + 호버 오버레이 */}
      <div className="relative w-full h-[228px] rounded-[16px] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* 다크 오버레이 — 호버 시 페이드인 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-[16px] flex items-center justify-center">
          <span className="text-white text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white rounded-full px-4 py-2" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            자세히 보기 →
          </span>
        </div>
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col gap-2">
        <p
          className="text-[#222] text-[18px] md:text-[20px] lg:text-[24px] overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-[#00967b] transition-colors duration-200"
          style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
        >
          {item.title}
        </p>
        <p
          className="text-[#555] text-[13px] md:text-[14px] leading-[20px] line-clamp-2"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/** 뉴스 캐러셀 (모바일·태블릿) */
function NewsCarousel() {
  const [start, setStart] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ITEM_W = 263 + 12;

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(newsItems.length - 1, i));
    setStart(clamped);
    scrollRef.current?.scrollTo({ left: clamped * ITEM_W, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {newsItems.map((item) => (
          <div
            key={item.id}
            style={{ scrollSnapAlign: "start" }}
            className="flex flex-col gap-7 shrink-0 w-[263px] cursor-pointer group"
          >
            <div className="px-2 py-1">
              <span
                className="text-[#222] text-[14px] leading-[20px] whitespace-nowrap group-hover:text-[#00967b] transition-colors duration-200"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                {item.category}
              </span>
            </div>
            <p
              className="text-[#222] text-[16px] leading-[normal] group-hover:text-[#00967b] transition-colors duration-200"
              style={{ fontFamily: "'Pretendard', sans-serif" }}
            >
              {item.title}
            </p>
            <div className="bg-[#222] h-[4px] w-full" />
            <p className="text-[#d9d9d9] text-[14px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
              {item.date}
            </p>
          </div>
        ))}
      </div>

      {/* 화살표 */}
      <div className="flex items-center justify-end gap-3 mt-4">
        <button
          onClick={() => goTo(start - 1)}
          disabled={start === 0}
          className="w-8 h-8 rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#d9d9d9] disabled:opacity-30 hover:border-[#222] hover:text-[#222] transition-colors duration-200"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >〈</button>
        <span className="text-[#d9d9d9] text-[12px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
          {start + 1} / {newsItems.length}
        </span>
        <button
          onClick={() => goTo(start + 1)}
          disabled={start >= newsItems.length - 1}
          className="w-8 h-8 rounded-full border border-[#d9d9d9] flex items-center justify-center text-[#d9d9d9] disabled:opacity-30 hover:border-[#222] hover:text-[#222] transition-colors duration-200"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >〉</button>
      </div>
    </div>
  );
}

/** 뉴스 아이템 (데스크톱 4열) */
function NewsItem({ item }: { item: typeof newsItems[0] }) {
  return (
    <div className="flex flex-col gap-7 cursor-pointer group">
      <div className="px-2 py-1">
        <span
          className="text-[#222] text-[14px] md:text-[18px] lg:text-[22px] leading-[20px] whitespace-nowrap group-hover:text-[#00967b] transition-colors duration-200"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          {item.category}
        </span>
      </div>
      <p
        className="text-[#222] text-[14px] md:text-[18px] lg:text-[20px] leading-[normal] group-hover:text-[#00967b] transition-colors duration-200"
        style={{ fontFamily: "'Pretendard', sans-serif" }}
      >
        {item.title}
      </p>
      <div className="bg-[#222] group-hover:bg-[#00967b] h-[4px] w-full transition-colors duration-200" />
      <p className="text-[#d9d9d9] text-[14px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
        {item.date}
      </p>
    </div>
  );
}

function Section3() {
  return (
    <section className="w-full bg-[#e6f9f5] px-4 md:px-10 lg:px-32 py-10 flex flex-col gap-10">

      {/* ── INSIDE STORY ── */}
      <div className="flex items-center justify-center py-6">
        <p
          className="text-[#222] text-[32px] md:text-[80px] lg:text-[100px] text-center w-full"
          style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}
        >
          INSIDE STORY
        </p>
      </div>

      {/* 그리드: 1열(모바일) / 2열(태블릿) / 3열(데스크톱) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {storyItems.map((item) => (
          <StoryCard key={item.id} item={item} />
        ))}
      </div>

      {/* ── NEWS ── */}
      <div className="flex items-center justify-center pt-4">
        <p
          className="text-[#222] text-[32px] md:text-[80px] lg:text-[100px] text-center w-full"
          style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}
        >
          NEWS
        </p>
      </div>

      {/* 모바일·태블릿: 캐러셀 */}
      <div className="lg:hidden">
        <NewsCarousel />
      </div>

      {/* 데스크톱: 4열 그리드 */}
      <div className="hidden lg:grid grid-cols-4 gap-8">
        {newsItems.map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Section 4 — 투자정보
══════════════════════════════════════════ */
function Section4() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-32 pt-10 pb-[120px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col gap-4">
          <svg className="w-6 h-6 md:w-12 md:h-12" fill="none" viewBox="0 0 48 48">
            <path d={BAR_CHART_LG} fill="#222" />
          </svg>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-[#222] text-[24px] md:text-[32px] lg:text-[48px]" style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}>투자정보</p>
            <p className="text-[#aaa] text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>사람인 143240</p>
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <img src={imgDown} alt="↓" className="w-[19px] h-[11px]" />
            <p className="text-[#222] text-[24px] md:text-[28px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>16,970</p>
            <p className="text-[#222] text-[12px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>won</p>
            <p className="text-[#222] text-[12px] leading-[20px] ml-1" style={{ fontFamily: "'Pretendard', sans-serif" }}>전일대비</p>
            <div className="flex items-center gap-1">
              <img src={imgDown} alt="↓" className="w-[11px] h-[6px]" />
              <p className="text-[#222] text-[12px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>-320</p>
              <p className="text-[#4876ef] text-[12px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>(-1.85%)</p>
            </div>
          </div>
          <p className="text-[#aaa] text-[14px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>2026-03-30 10:56:31</p>
        </div>

        <button className="relative inline-flex items-center justify-center px-5 py-2 rounded-[28px] w-fit self-start md:self-center group overflow-hidden border-[0.5px] border-[#d9d9d9]">
          <span className="absolute inset-0 bg-[#222] translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[28px]" />
          <span className="text-[#222] group-hover:text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px] relative whitespace-nowrap transition-colors duration-300" style={{ fontFamily: "'Pretendard', sans-serif" }}>
            투자정보 보기 〉
          </span>
        </button>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   Footer
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="w-full bg-[#00967b] relative mt-12">
      <div className="absolute -top-9 left-6 md:left-10 lg:left-36 bg-[#00c3a0] rounded-[50px] w-[100px] h-[100px] flex items-center justify-center overflow-hidden shadow-md">
        <p className="text-[#f8fafb] text-[22px] whitespace-nowrap" style={{ fontFamily: "'Jalnan 2', sans-serif" }}>saramin</p>
      </div>

      <div className="px-4 md:px-10 lg:px-36 pt-24 pb-8 flex flex-col gap-6 md:gap-10 lg:gap-[60px]">
        <div className="flex gap-5 flex-wrap">
          {["개인정보처리방침", "내부정보관리규정", "윤리경영"].map((t, i) => (
            <button key={t} className="text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px] hover:underline transition-all" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: i === 0 ? 700 : 400 }}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
          <p>Email　help@saramin.co.kr</p>
          <p>Tel　02. 6226. 5000</p>
          <p>Fax　02. 6937. 0039</p>
        </div>
        <div className="flex gap-6 items-center">
          {[imgSns01, imgSns02, imgSns03, imgSns04].map((src, i) => (
            <button key={i} className="hover:opacity-70 transition-opacity duration-200">
              <img src={src} alt={`sns${i + 1}`} className="w-[23px] h-[23px] object-contain" />
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
          <p>(주)사람인 대표이사 황현순</p>
          <p>(우) 07800 서울특별시 강서구 공항대로 165, 윈그로브 C동 11층</p>
        </div>
        <div className="flex flex-col text-[#d9d9d9] text-[10px] leading-[20px]" style={{ fontFamily: "'Pretendard', sans-serif" }}>
          <p>사업자등록번호 000-00-00000</p>
          <p>직업정보제공사업</p>
        </div>
        <p className="text-white text-[24px] md:text-[48px] lg:text-[60px]" style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}>
          사람과 일을 잇는 행복 Bridge
        </p>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   Global styles (fadeIn animation)
══════════════════════════════════════════ */
const globalStyle = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

/* ══════════════════════════════════════════
   App
══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{globalStyle}</style>
      <div className="bg-white flex flex-col items-stretch w-full min-h-screen">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </>
  );
}
