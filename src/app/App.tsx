import imgHero from "../assets/2a9efb8498f4ba95b7819ea668b4ddbdb3642f2d.png";
import imgCulture01 from "../assets/02404777f8846f7857e899457dfc6d49f68f5b86.png";
import imgCulture02 from "../assets/9dc86e4f50f872cc23c446396b0dcb666b604c7f.png";
import imgCulture03 from "../assets/f152d96178ef048102782dbfcb6c19184c003a61.png";
import imgStory1 from "../assets/10df0520cdbf7346b4745d9c061c4564f587a4a7.png";
import imgStory2 from "../assets/9d5acf5b6256ccf512af25c48f5b96896d6ef89a.png";
import imgStory3 from "../assets/734cb6223a88ec94eb947d7d2e04cb57fbe1aec3.png";
import imgStory4 from "../assets/8290a3b18c99c25934c9472e8e498ff37b21b668.png";
import imgStory5 from "../assets/bfeb34f799ff69fc2186fe37ccc888b3f2fe1f84.png";
import imgStory6 from "../assets/201c426173d159fdf5250f1405d058133b8a2f1c.png";
import imgDown from "../assets/b854d8bb91a107b275cccb45b6b14cfdddc8fa17.png";
import imgSns01 from "../assets/e8b4bdd371b96e779d935676ce28facaec7fcaca.png";
import imgSns02 from "../assets/9eb47fbf0216eb808c1eb94058f78c13a62b86b9.png";
import imgSns03 from "../assets/a6257ef69f03f62e86c55d2c39afc57777e5bb93.png";
import imgSns04 from "../assets/b1bc0bb8a1284f956b051e0377eb579fe5f780d6.png";

const MENU_DOTS_PATH =
  "M28 30C28 30.5304 28.2107 31.0391 28.5858 31.4142C28.9609 31.7893 29.4696 32 30 32C30.5304 32 31.0391 31.7893 31.4142 31.4142C31.7893 31.0391 32 30.5304 32 30C32 29.4696 31.7893 28.9609 31.4142 28.5858C31.0391 28.2107 30.5304 28 30 28C29.4696 28 28.9609 28.2107 28.5858 28.5858C28.2107 28.9609 28 29.4696 28 30ZM16 30C16 30.5304 16.2107 31.0391 16.5858 31.4142C16.9609 31.7893 17.4696 32 18 32C18.5304 32 19.0391 31.7893 19.4142 31.4142C19.7893 31.0391 20 30.5304 20 30C20 29.4696 19.7893 28.9609 19.4142 28.5858C19.0391 28.2107 18.5304 28 18 28C17.4696 28 16.9609 28.2107 16.5858 28.5858C16.2107 28.9609 16 29.4696 16 30ZM28 18C28 18.5304 28.2107 19.0391 28.5858 19.4142C28.9609 19.7893 29.4696 20 30 20C30.5304 20 31.0391 19.7893 31.4142 19.4142C31.7893 19.0391 32 18.5304 32 18C32 17.4696 31.7893 16.9609 31.4142 16.5858C31.0391 16.2107 30.5304 16 30 16C29.4696 16 28.9609 16.2107 28.5858 16.5858C28.2107 16.9609 28 17.4696 28 18ZM16 18C16 18.5304 16.2107 19.0391 16.5858 19.4142C16.9609 19.7893 17.4696 20 18 20C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18C20 17.4696 19.7893 16.9609 19.4142 16.5858C19.0391 16.2107 18.5304 16 18 16C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18Z";

const BAR_CHART_SM = "M16 20V13H20V20H16ZM10 20V4H14V20H10ZM4 20V9H8V20H4Z";
const BAR_CHART_LG = "M32 40V26H40V40H32ZM20 40V8H28V40H20ZM8 40V18H16V40H8Z";

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
    desc: "올해 여름은 잦은 폭염으로 더위에 지친 분들 많으셨죠. 사람인에서는 즐거운 여름나기를 위해 7월~8월 두 달에 걸쳐 HOT한 여름 맞이 COOL한 이벤트를 진행했습니다.",
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
    desc: "개인별 라이프사이클이 모두 다른 만큼 효율을 높여주는 업무 스케쥴도 모두 달라요. 사람인 구성원들이 자율적이고 주도적으로 근무할 수 있도록 '선택적 근로시간제'를 도입했습니다.",
  },
  {
    id: 5,
    img: imgStory5,
    title: "사람인, 취업 문화 개선에 앞장서요",
    desc: "구직자에게 취업은 매우 간절한 목표이고, 기업 역시 인재를 채용하는 것이 기업의 미래를 좌우할 만큼 매우 중요한 요소인데요.",
  },
  {
    id: 6,
    img: imgStory6,
    title: "집콕 생활에 힐링 한 스푼, 집콕 클래스!",
    desc: "월 별 기념일, 클래스가 다르게 전합니다! 코로나19로 인해 집에서라도 즐기자는 취지로 진행된 클래스지만, 직원들의 열화와 같은 호응으로 '집콕 클래스'는 지금도 매회 '완판' 행진 중입니다.",
  },
];

const newsItems = [
  {
    id: 1,
    category: "취업뉴스",
    title: "사람인, '커리어 매칭 에이전트' 전격 출시… 취업 준비 방법 혁신",
    date: "2026-03-04",
  },
  {
    id: 2,
    category: "회사소식",
    title: "사람인, 'ChatGPT for kakao' 파트너사 합류, HR AI 에이전트 광폭 행보",
    date: "2026-03-25",
  },
  {
    id: 3,
    category: "취업뉴스",
    title: "'내 손안의 AI 취업 에이전트'... 사람인, 신입·인턴 전용 홈 전면 개편",
    date: "2026-03-04",
  },
  {
    id: 4,
    category: "회사소식",
    title: "사람인, 지난해 입사지원 5500만 돌파, 국민 커리어 플랫폼 인증",
    date: "2026-03-25",
  },
];

/* ───────────── Header ───────────── */
function Header() {
  return (
    <header className="relative w-full h-[580px] md:h-[700px] lg:h-[900px] shrink-0">
      {/* Background */}
      <img
        src={imgHero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-[rgba(34,34,34,0.2)]" />

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-2 md:px-4 lg:px-8 py-2 z-10">
        <p
          className="text-[#f8fafb] text-[32px] md:text-[48px]"
          style={{ fontFamily: "'Jalnan 2', sans-serif" }}
        >
          saramin
        </p>
        <button className="w-12 h-12 flex-shrink-0">
          <svg fill="none" viewBox="0 0 48 48" className="w-full h-full">
            <path
              d={MENU_DOTS_PATH}
              stroke="#F8FAFB"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#f8fafb] gap-5">
        <p
          className="text-[32px] md:text-[80px] lg:text-[100px]"
          style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}
        >
          PEOPLE
        </p>
        <p
          className="text-[14px] md:text-[18px] lg:text-[22px]"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          사람중심 철학과
        </p>
      </div>

      {/* Page indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-end gap-4 text-[#d9d9d9] text-[14px] md:text-[18px] lg:text-[22px]">
        <span style={{ fontFamily: "'Pretendard', sans-serif" }}>〈</span>
        <span style={{ fontFamily: "'Pretendard', sans-serif" }}>
          <strong>01 / </strong>04
        </span>
        <button style={{ fontFamily: "'Pretendard', sans-serif" }}>〉</button>
      </div>
    </header>
  );
}

/* ───────────── Section 1 – 사람인은 어떤 서비스를 만들까? ───────────── */
function Section1() {
  return (
    <section className="w-full">
      {/* Title */}
      <div className="px-4 md:px-10 lg:px-32 pt-10">
        <p
          className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]"
          style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
        >
          사람인은
        </p>
        <p
          className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]"
          style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
        >
          어떤 서비스를 만들까?
        </p>
      </div>

      {/* Mobile: video + text below */}
      <div className="md:hidden px-4 pt-8 pb-10 flex flex-col gap-8">
        <div className="relative w-full h-[228px] rounded-[16px] overflow-hidden">
          <video
            autoPlay
            loop
            playsInline
            muted
            controlsList="nodownload"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/_videos/v1/357a309e9a853e1d181cc67ef5c8efe48f5589c1" />
          </video>
          {/* Progress bar overlay */}
          <div className="absolute bottom-3 left-3 flex gap-[2px] items-end">
            <div className="bg-[#f8fafb] h-[4px] w-[85px]" />
            <div className="bg-[#f8fafb] h-[4px] w-[85px] opacity-50" />
            <div className="bg-[#f8fafb] h-[4px] w-[85px] opacity-50" />
            <div className="bg-[#f8fafb] h-[4px] w-[85px] opacity-50" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p
            className="text-[#222] text-[24px]"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
          >
            사람인
          </p>
          <p
            className="text-[#222] text-[14px] leading-[20px]"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            대한민국 국민이라면 누구에게나 친숙한 커리어 플랫폼. 구인, 구직을 넘어, 일하는 모든 날 모든 순간이 즐거울 수 있도록 노력하는 사람인의 주요 서비스들을 확인해보세요.
          </p>
          <div className="relative inline-flex items-center justify-center px-5 py-2 rounded-[28px] w-fit mt-2">
            <div className="absolute inset-0 border-[#222] border-[0.5px] rounded-[28px]" />
            <p
              className="text-[#222] text-[14px] leading-[20px] relative"
              style={{ fontFamily: "'Pretendard', sans-serif" }}
            >
              자세히 보기
            </p>
          </div>
        </div>
      </div>

      {/* Tablet: video with overlay, NO desktop */}
      <div className="hidden md:block lg:hidden px-4 py-10">
        <div className="relative w-full max-w-[640px] mx-auto h-[350px] overflow-hidden rounded-none">
          <video
            autoPlay
            loop
            playsInline
            muted
            controlsList="nodownload"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/_videos/v1/357a309e9a853e1d181cc67ef5c8efe48f5589c1" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 py-8 gap-7">
            <div className="flex flex-col gap-7">
              <p
                className="text-[#f8fafb] text-[48px]"
                style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
              >
                사람인
              </p>
              <p
                className="text-[#f8fafb] text-[24px] leading-[normal]"
                style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
              >
                대한민국 국민이라면 누구에게나 친숙한 커리어 플랫폼. 구인, 구직을 넘어, 일하는 모든 날 모든 순간이 즐거울 수 있도록 노력하는 사람인의 주요 서비스들을 확인해보세요.
              </p>
            </div>
            <div className="relative inline-flex items-center px-5 py-2 rounded-[28px] w-fit">
              <div className="absolute inset-0 border-[#f8fafb] border-[0.5px] rounded-[28px]" />
              <p
                className="text-[#f8fafb] text-[18px] leading-[20px] relative"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                자세히 보기
              </p>
            </div>
            {/* Progress bar */}
            <div className="flex gap-[2px] items-end">
              <div className="bg-[#f8fafb] h-[6px] w-[150px]" />
              <div className="bg-[#f8fafb] h-[6px] w-[150px] opacity-50" />
              <div className="bg-[#f8fafb] h-[6px] w-[150px] opacity-50" />
              <div className="bg-[#f8fafb] h-[6px] w-[150px] opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: just title (no video here) - already shown above */}
      <div className="hidden lg:block pb-10" />
    </section>
  );
}

/* ───────────── Section 2 – 구성원과 함께 성장하며 ───────────── */
function CultureCards() {
  const cards = [
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

  return (
    <>
      {/* Mobile: horizontal scroll carousel */}
      <div className="md:hidden overflow-x-auto flex gap-8 px-2 pb-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#f8fafb] flex flex-col gap-4 items-center overflow-hidden px-4 py-8 rounded-[16px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] shrink-0 w-[270px] h-[297px]"
          >
            <div className="w-[100px] h-[100px] overflow-hidden bg-[#d9d9d9] shrink-0">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 items-center text-center w-full">
              <p
                className="text-[#222] text-[24px]"
                style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
              >
                {card.title}
              </p>
              <p
                className="text-[#222] text-[18px]"
                style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
              >
                {card.subtitle}
              </p>
              <p
                className="text-[#222] text-[14px] leading-[20px] mt-1"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet & Desktop: 3 columns */}
      <div className="hidden md:flex gap-8 justify-center flex-wrap">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#f8fafb] flex flex-col gap-[60px] items-center overflow-hidden px-4 py-8 rounded-[16px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] shrink-0 md:w-[200px] lg:w-[324px] h-[500px]"
          >
            <div className="w-[150px] h-[150px] overflow-hidden bg-[#d9d9d9] shrink-0">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center text-center w-full gap-4">
              <div>
                <p
                  className="text-[#222] text-[32px]"
                  style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
                >
                  {card.title}
                </p>
                <p
                  className="text-[#222] text-[20px]"
                  style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
                >
                  {card.subtitle}
                </p>
              </div>
              <p
                className="text-[#222] text-[16px] leading-[20px]"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Section2() {
  return (
    <section className="w-full">
      {/* Desktop only: large brand video with overlay */}
      <div className="hidden lg:flex justify-center px-4 py-10">
        <div className="relative w-[1020px] h-[896px] overflow-hidden">
          <video
            autoPlay
            loop
            playsInline
            muted
            controlsList="nodownload"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/_videos/v1/357a309e9a853e1d181cc67ef5c8efe48f5589c1" />
          </video>
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 gap-7">
            <p
              className="text-[#f8fafb] text-[60px]"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
            >
              사람인
            </p>
            <p
              className="text-[#f8fafb] text-[28px] leading-[normal] max-w-[900px]"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 500 }}
            >
              대한민국 국민이라면 누구에게나 친숙한 커리어 플랫폼. 구인, 구직을 넘어, 일하는 모든 날 모든 순간이 즐거울 수 있도록 노력하는 사람인의 주요 서비스들을 확인해보세요.
            </p>
            <div className="relative inline-flex items-center px-5 py-2 rounded-[28px] w-fit">
              <div className="absolute inset-0 border-[#f8fafb] border-[0.5px] rounded-[28px]" />
              <p
                className="text-[#f8fafb] text-[22px] leading-[20px] relative"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                자세히 보기
              </p>
            </div>
            {/* Progress bar */}
            <div className="flex gap-[2px] items-end">
              <div className="bg-[#f8fafb] h-[8px] w-[240px]" />
              <div className="bg-[#f8fafb] h-[8px] w-[240px] opacity-50" />
              <div className="bg-[#f8fafb] h-[8px] w-[240px] opacity-50" />
              <div className="bg-[#f8fafb] h-[8px] w-[240px] opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Culture text + cards */}
      <div className="w-full px-4 md:px-10 lg:px-32 py-10 flex flex-col gap-7 md:gap-[60px]">
        <div className="flex flex-col gap-7">
          <div>
            <p
              className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
            >
              구성원과 함께 성장하며
            </p>
            <p
              className="text-[#222] text-[24px] md:text-[48px] lg:text-[60px]"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
            >
              혁신을 이루어 내는 곳입니다.
            </p>
          </div>
          <p
            className="text-[#222] text-[14px] leading-[20px] underline decoration-solid"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            기업문화 보기
          </p>
        </div>

        <CultureCards />
      </div>
    </section>
  );
}

/* ───────────── Section 3 – INSIDE STORY + NEWS ───────────── */
function Section3() {
  return (
    <section className="w-full bg-[#e6f9f5] px-4 md:px-10 lg:px-32 py-10 flex flex-col gap-10">
      {/* INSIDE STORY Title */}
      <div className="flex items-center justify-center py-8">
        <p
          className="text-[#222] text-[32px] md:text-[80px] lg:text-[100px] text-center w-full"
          style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}
        >
          INSIDE STORY
        </p>
      </div>

      {/* Story grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5">
        {storyItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-8 cursor-pointer group">
            <div className="relative w-full h-[228px] rounded-[16px] overflow-hidden shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover rounded-[16px] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col gap-2 overflow-hidden">
              <p
                className="text-[#222] text-[24px] overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
              >
                {item.title}
              </p>
              <p
                className="text-[#222] text-[14px] leading-[20px] line-clamp-2"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* NEWS Title */}
      <div className="flex items-center justify-center pt-4">
        <p
          className="text-[#222] text-[32px] md:text-[80px] lg:text-[100px] text-center w-full"
          style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}
        >
          NEWS
        </p>
      </div>

      {/* News items */}
      {/* Mobile: scrollable, Tablet: 2 visible, Desktop: 4 in a row */}
      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 min-w-max md:min-w-0">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-9 w-[263px] md:w-auto shrink-0 md:shrink"
            >
              <div className="flex items-center justify-start px-2 py-1">
                <p
                  className="text-[#222] text-[14px] md:text-[18px] lg:text-[22px] leading-[20px] whitespace-nowrap"
                  style={{ fontFamily: "'Pretendard', sans-serif" }}
                >
                  {item.category}
                </p>
              </div>
              <p
                className="text-[#222] text-[14px] md:text-[18px] lg:text-[20px] leading-[normal]"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                {item.title}
              </p>
              <div className="bg-[#222] h-[4px] w-full" />
              <p
                className="text-[#d9d9d9] text-[14px] leading-[20px]"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Section 4 – 투자정보 ───────────── */
function Section4() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-32 pt-10 pb-[120px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex flex-col gap-4">
          {/* Bar chart icon */}
          <svg
            className="w-6 h-6 md:w-12 md:h-12"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path d={BAR_CHART_LG} fill="#222" />
          </svg>

          {/* 투자정보 title */}
          <div className="flex items-center gap-2">
            <p
              className="text-[#222] text-[24px] md:text-[32px] lg:text-[48px]"
              style={{ fontFamily: "'SeoulAlrim', sans-serif", fontWeight: 800 }}
            >
              투자정보
            </p>
            <p
              className="text-[#aaa] text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]"
              style={{ fontFamily: "'Pretendard', sans-serif" }}
            >
              사람인 143240
            </p>
          </div>

          {/* Price info */}
          <div className="flex items-center gap-1 flex-wrap">
            <img src={imgDown} alt="down" className="w-[19px] h-[11px]" />
            <p
              className="text-[#222] text-[24px] md:text-[28px]"
              style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
            >
              16,970
            </p>
            <p
              className="text-[#222] text-[12px] leading-[20px]"
              style={{ fontFamily: "'Pretendard', sans-serif" }}
            >
              won
            </p>
            <p
              className="text-[#222] text-[12px] leading-[20px] ml-1"
              style={{ fontFamily: "'Pretendard', sans-serif" }}
            >
              전일대비
            </p>
            <div className="flex items-center gap-1">
              <img src={imgDown} alt="down" className="w-[11px] h-[6px]" />
              <p
                className="text-[#222] text-[12px] leading-[20px]"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                -320
              </p>
              <p
                className="text-[#4876ef] text-[12px] leading-[20px]"
                style={{ fontFamily: "'Pretendard', sans-serif" }}
              >
                (-1.85%)
              </p>
            </div>
          </div>

          <p
            className="text-[#aaa] text-[14px] leading-[20px]"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            2026-03-30 10:56:31
          </p>
        </div>

        {/* 투자정보 보기 button */}
        <div className="relative inline-flex items-center justify-center px-5 py-2 rounded-[28px] w-fit self-start md:self-center">
          <div className="absolute inset-0 border-[#d9d9d9] border-[0.5px] rounded-[28px]" />
          <p
            className="text-[#222] text-[14px] md:text-[18px] lg:text-[22px] leading-[20px] relative whitespace-nowrap"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            투자정보 보기 〉
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Footer ───────────── */
function Footer() {
  return (
    <footer className="w-full bg-[#00967b] relative mt-12">
      {/* Saramin logo badge */}
      <div className="absolute -top-9 left-6 md:left-10 lg:left-36 bg-[#00c3a0] rounded-[50px] w-[100px] h-[100px] flex items-center justify-center overflow-hidden">
        <p
          className="text-[#f8fafb] text-[22px] whitespace-nowrap"
          style={{ fontFamily: "'Jalnan 2', sans-serif" }}
        >
          saramin
        </p>
      </div>

      <div className="px-4 md:px-10 lg:px-36 pt-24 pb-5 flex flex-col gap-6 md:gap-10 lg:gap-[60px]">
        {/* Footer links */}
        <div className="flex gap-5 flex-wrap">
          <p
            className="text-white text-[14px] md:text-[18px] lg:text-[20px] leading-[20px]"
            style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 700 }}
          >
            개인정보처리방침
          </p>
          <p
            className="text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            내부정보관리규정
          </p>
          <p
            className="text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]"
            style={{ fontFamily: "'Pretendard', sans-serif" }}
          >
            윤리경영
          </p>
        </div>

        {/* Contact info */}
        <div
          className="flex flex-col gap-2 text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          <p>Email　help@saramin.co.kr</p>
          <p>Tel　02. 6226. 5000</p>
          <p>Fax　02. 6937. 0039</p>
        </div>

        {/* SNS icons */}
        <div className="flex gap-6 items-center">
          <img src={imgSns01} alt="sns" className="w-[23px] h-[23px] object-contain" />
          <img src={imgSns02} alt="sns" className="w-[22px] h-[23px] object-contain" />
          <img src={imgSns03} alt="sns" className="w-[24px] h-[23px] object-contain" />
          <img src={imgSns04} alt="sns" className="w-[24px] h-[23px] object-contain" />
        </div>

        {/* Company info */}
        <div
          className="flex flex-col gap-2 text-white text-[14px] md:text-[18px] lg:text-[22px] leading-[20px]"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          <p>(주)사람인 대표이사 황현순</p>
          <p>(우) 07800 서울특별시 강서구 공항대로 165, 윈그로브 C동 11층</p>
        </div>

        {/* Business registration */}
        <div
          className="flex flex-col text-[#d9d9d9] text-[10px] leading-[20px]"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          <p>사업자등록번호 000-00-00000</p>
          <p>직업정보제공사업</p>
        </div>

        {/* Tagline */}
        <p
          className="text-white text-[24px] md:text-[48px] lg:text-[60px]"
          style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600 }}
        >
          사람과 일을 잇는 행복 Bridge
        </p>
      </div>
    </footer>
  );
}

/* ───────────── App ───────────── */
export default function App() {
  return (
    <div className="bg-white flex flex-col items-stretch w-full min-h-screen">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
