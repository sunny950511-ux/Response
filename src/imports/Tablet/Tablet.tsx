import svgPaths from "./svg-aa19o4lu2o";
import img from "./2a9efb8498f4ba95b7819ea668b4ddbdb3642f2d.png";
import imgImgi4Culture011 from "./02404777f8846f7857e899457dfc6d49f68f5b86.png";
import imgImgi5Culture021 from "./9dc86e4f50f872cc23c446396b0dcb666b604c7f.png";
import imgImgi6Culture031 from "./f152d96178ef048102782dbfcb6c19184c003a61.png";
import img1 from "./10df0520cdbf7346b4745d9c061c4564f587a4a7.png";
import img2 from "./9d5acf5b6256ccf512af25c48f5b96896d6ef89a.png";
import img3 from "./734cb6223a88ec94eb947d7d2e04cb57fbe1aec3.png";
import img4 from "./8290a3b18c99c25934c9472e8e498ff37b21b668.png";
import img5 from "./bfeb34f799ff69fc2186fe37ccc888b3f2fe1f84.png";
import img6 from "./201c426173d159fdf5250f1405d058133b8a2f1c.png";
import imgImgi13Down1 from "./b854d8bb91a107b275cccb45b6b14cfdddc8fa17.png";
import imgImgi17Sns011 from "./e8b4bdd371b96e779d935676ce28facaec7fcaca.png";
import imgImgi18Sns021 from "./9eb47fbf0216eb808c1eb94058f78c13a62b86b9.png";
import imgImgi19Sns031 from "./a6257ef69f03f62e86c55d2c39afc57777e5bb93.png";
import imgImgi20Sns041 from "./b1bc0bb8a1284f956b051e0377eb579fe5f780d6.png";

function Component() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[20px] h-[77px] items-center justify-center left-1/2 not-italic text-[#f8fafb] text-center top-[calc(50%-0.5px)]" data-name="헤더이미지텍스트">
      <p className="font-['SeoulAlrim:ExtraBold',sans-serif] leading-[normal] relative shrink-0 text-[80px] w-[400px]">PEOPLE</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[18px] whitespace-nowrap">사람중심 철학과</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center leading-[20px] relative shrink-0" data-name="페이지">
      <p className="font-['Pretendard:ExtraBold',sans-serif] relative shrink-0 text-[14px]">{`01 / `}</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[18px]">04</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[11px] content-stretch flex gap-[18px] items-end justify-center left-[calc(50%+1.5px)] not-italic text-[#d9d9d9] text-center whitespace-nowrap" data-name="메인이미지방향키">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[18px]">〈</p>
      <Component2 />
      <button className="block cursor-pointer font-['Pretendard:Regular',sans-serif] leading-[0] relative shrink-0 text-[18px]">
        <p className="leading-[20px]">〉</p>
      </button>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="더보기아이콘">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ëë³´ê¸°ìì´ì½">
          <path d={svgPaths.p328f3600} id="Vector" stroke="var(--stroke-0, #F8FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-0 px-[8px] top-0 w-[768px]" data-name="헤더메뉴">
      <p className="flex-[1_0_0] font-['Jalnan_2:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#f8fafb] text-[48px]">saramin</p>
      <Component4 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="h-[1130px] relative shrink-0 w-[768px]" data-name="헤더이미지">
        <div className="absolute inset-0 overflow-clip" data-name="헤더이미지기본">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={img} />
            <div className="absolute bg-[rgba(34,34,34,0.2)] inset-0" />
          </div>
          <Component />
          <Component1 />
        </div>
      </div>
      <Component3 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] items-start leading-[normal] not-italic relative shrink-0 text-[#222] text-[48px] w-full" data-name="섹션1/텍스트">
      <p className="relative shrink-0 w-full">사람인은</p>
      <p className="relative shrink-0 w-full">어떤 서비스를 만들까?</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="텍스트">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center leading-[normal] not-italic px-[24px] relative size-full text-[#f8fafb]">
          <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[48px] w-full">사람인</p>
          <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[24px] w-full">대한민국 국민이라면 누구에게나 친숙한 커리어 플랫폼. 구인, 구직을 넘어, 일하는 모든 날 모든 순간이 즐거울 수 있도록 노력하는 사람인의 주요 서비스들을 확인해보세요.</p>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[350px] items-start justify-end left-0 overflow-clip px-[24px] py-[33px] top-0 w-[640px]" data-name="오버레이">
      <Component8 />
      <div className="content-stretch flex items-end px-[20px] py-[8px] relative rounded-[28px] shrink-0" data-name="버튼">
        <div aria-hidden="true" className="absolute border-[#f8fafb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f8fafb] text-[18px] whitespace-nowrap">자세히 보기</p>
      </div>
      <div className="content-stretch flex gap-[2px] h-[8px] items-end relative shrink-0 w-[150px]" data-name="영상하단바:타임">
        <div className="bg-[#f8fafb] h-[6px] shrink-0 w-[150px]" data-name="영상하단바:호버" />
        <button className="bg-[#f8fafb] block cursor-pointer h-[6px] opacity-50 relative shrink-0 w-[150px]" data-name="영상하단바:호버" />
        <button className="bg-[#f8fafb] block cursor-pointer h-[6px] opacity-50 relative shrink-0 w-[150px]" data-name="영상하단바:호버" />
        <button className="bg-[#f8fafb] block cursor-pointer h-[6px] opacity-50 relative shrink-0 w-[150px]" data-name="영상하단바:호버" />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 w-full" data-name="섹션1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[16px] py-[40px] relative w-full">
          <Component6 />
          <div className="h-[350px] overflow-clip relative shrink-0 w-[640px]" data-name="서비스내용영상">
            <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
              <source src="/_videos/v1/357a309e9a853e1d181cc67ef5c8efe48f5589c1" />
            </video>
            <Component7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:SemiBold',sans-serif] items-start leading-[normal] relative shrink-0 text-[48px] w-full">
      <p className="relative shrink-0 w-full">구성원과 함께 성장하며</p>
      <p className="relative shrink-0 w-full">혁신을 이루어 내는 곳입니다.</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 w-full" data-name="섹션2/텍스트">
      <div className="content-stretch flex flex-col gap-[28px] items-start not-italic px-[40px] relative text-[#222] w-full">
        <Frame />
        <p className="decoration-solid font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] underline w-full">기업문화 보기</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#d9d9d9] overflow-clip relative shrink-0 size-[150px]" data-name="컨텐츠카드 이미지">
      <div className="absolute h-[151px] left-0 top-[-1px] w-[150px]" data-name="imgi_4_culture01 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi4Culture011} />
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-center w-[92px]" data-name="카드제목">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">Work</p>
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[20px] w-full">일하는 방식</p>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[76px] items-center not-italic relative shrink-0 text-[#222] w-full" data-name="카드내용">
      <Component14 />
      <p className="font-['Pretendard:Regular',sans-serif] h-[60px] leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">직원 경험을 기반으로 만들어가는 1등이 될 수 밖에 없었던 구성원들의 일하는 방식입니다.</p>
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-[#d9d9d9] overflow-clip relative shrink-0 size-[150px]" data-name="컨텐츠카드 이미지">
      <div className="absolute h-[150px] left-[-2px] top-0 w-[155px]" data-name="imgi_5_culture02 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi5Culture021} />
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-center w-[92px]" data-name="카드제목">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">Welfare</p>
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[20px] w-full">사내복지</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[76px] items-center not-italic relative shrink-0 text-[#222] w-full" data-name="카드내용">
      <Component17 />
      <p className="font-['Pretendard:Regular',sans-serif] h-[60px] leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">건강, 휴가, 나아가 가족의 일까지 챙겨 마음 편히 행복하게 일할 수 있는 사람인입니다.</p>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-[#d9d9d9] overflow-clip relative shrink-0 size-[150px]" data-name="컨텐츠카드 이미지">
      <div className="absolute h-[150px] left-[-22px] top-0 w-[195px]" data-name="imgi_6_culture03 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi6Culture031} />
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] relative shrink-0 text-center w-[92px]" data-name="카드제목">
      <p className="font-['Pretendard:SemiBold',sans-serif] relative shrink-0 text-[32px] w-full">Education</p>
      <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0 text-[20px] w-full">인재육성</p>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[76px] items-center not-italic relative shrink-0 text-[#222] w-full" data-name="카드내용">
      <Component20 />
      <p className="font-['Pretendard:Regular',sans-serif] h-[60px] leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">사람인은 직원들이 자신의 역량을 꾸준히 개발할 수 있도록 지원을 아끼지 않습니다.</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="섹션2-컨텐츠카드">
      <div className="bg-[#f8fafb] content-stretch flex flex-col gap-[60px] h-[500px] items-center overflow-clip px-[16px] py-[32px] relative rounded-[16px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] shrink-0 w-[200px]" data-name="컨텐츠카드:태블릿,데탑">
        <Component12 />
        <Component13 />
      </div>
      <div className="bg-[#f8fafb] content-stretch flex flex-col gap-[60px] h-[500px] items-center overflow-clip px-[16px] py-[32px] relative rounded-[16px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] shrink-0 w-[200px]" data-name="컨텐츠카드:태블릿,데탑">
        <Component15 />
        <Component16 />
      </div>
      <div className="bg-[#f8fafb] content-stretch flex flex-col gap-[60px] h-[500px] items-center overflow-clip px-[16px] py-[32px] relative rounded-[16px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.25)] shrink-0 w-[200px]" data-name="컨텐츠카드:태블릿,데탑">
        <Component18 />
        <Component19 />
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 w-full" data-name="섹션2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[16px] py-[40px] relative w-full">
          <Component10 />
          <Component11 />
        </div>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex items-center justify-center py-[32px] relative shrink-0 w-full" data-name="사내이벤트제목">
      <p className="flex-[1_0_0] font-['SeoulAlrim:ExtraBold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#222] text-[80px] text-center">INSIDE STORY</p>
    </div>
  );
}

function Component24() {
  return (
    <div className="h-[228px] relative rounded-[16px] shrink-0 w-[370px]" data-name="사내이벤트:이미지">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img1} />
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start not-italic overflow-clip relative shrink-0 text-[#222] w-full" data-name="사내이벤트:텍스트">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[24px] text-ellipsis w-[min-content] whitespace-nowrap">사람인 창립 18주년 기념 이벤트, 가을 테라스 오픈!</p>
      <p className="font-['Pretendard:Regular',sans-serif] h-[43px] leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[400px] whitespace-pre-wrap">{`선선한 날씨가 이어지며 가을이 깊어지고 있는데요.   사람인이 10월 12일 창립 18주년을 맞아 14층 테라스에서 가을 테라스BAR를 오픈했습니다. 분위기 좋고 웃음 가득한 현장으로 찾아가 봤습니다!`}</p>
    </div>
  );
}

function Component26() {
  return (
    <div className="h-[228px] relative rounded-[16px] shrink-0 w-[370px]" data-name="사내이벤트:이미지">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img2} />
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start not-italic overflow-clip relative shrink-0 text-[#222] w-full" data-name="사내이벤트:텍스트">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[24px] text-ellipsis w-[min-content] whitespace-nowrap">사람인 더위사냥! 여름 이벤트 진행</p>
      <p className="font-['Pretendard:Regular',sans-serif] h-[43px] leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[400px]">{`올해 여름은 잦은 폭염으로 더위에 지친 분들 많으셨죠. 사람인에서는 즐거운 여름나기를 위해 7월~8월 두 달에 걸쳐 HOT한 여름 맞이 COOL한 이벤트를 진행했습니다. 또, 7~8월은 사람인 쿨비즈룩 시행의 달이었는데요, 시원하게 입고 일의 능률을 높이기 위해 다양한 이벤트도 함께 진행했답니다. 함께 보실까요? `}</p>
    </div>
  );
}

function Component28() {
  return (
    <div className="h-[228px] relative rounded-[16px] shrink-0 w-[370px]" data-name="사내이벤트:이미지">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img3} />
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start not-italic overflow-clip relative shrink-0 text-[#222] w-full" data-name="사내이벤트:텍스트">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[24px] text-ellipsis w-[min-content] whitespace-nowrap">모든 일과 사람이 만나는 곳, 사람인 Workverse 대오픈!</p>
      <div className="font-['Pretendard:Regular',sans-serif] h-[43px] leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[400px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">사람인의 workverse를 담은 회사소개서가 탄생했습니다.</p>
        <p className="leading-[20px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="h-[228px] relative rounded-[16px] shrink-0 w-[370px]" data-name="사내이벤트:이미지">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img4} />
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start not-italic overflow-clip relative shrink-0 text-[#222] w-full" data-name="사내이벤트:텍스트">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[24px] text-ellipsis w-[min-content] whitespace-nowrap">업무 효율 업! 사람인, 선택적 근로시간제 도입하다</p>
      <p className="font-['Pretendard:Regular',sans-serif] h-[43px] leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[400px]">개인별 라이프사이클이 모두 다른 만큼 효율을 높여주는 업무 스케쥴도 모두 다른데요. 이른 아침부터 두뇌 회전이 빠르게 되는 직원도 있는 반면, 출근길 지옥철을 최대한 피해 여유로운 출근후 업무가 잘되는 직원들도 있죠. 정신없이 진행되는 업무에 집중하다 보면 이미 퇴근 시간을 훌쩍 넘겨 버릴 때도 있고, 조금은 쉬어 갈 수 있는 날도 있어요. 사람인 구성원들이 자율적이고 주도적으로 근무할 수 있도록 ‘선택적 근로시간제’를 도입했습니다.</p>
    </div>
  );
}

function Component32() {
  return (
    <div className="h-[228px] relative rounded-[16px] shrink-0 w-[370px]" data-name="사내이벤트:이미지">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img5} />
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start not-italic overflow-clip relative shrink-0 text-[#222] w-full" data-name="사내이벤트:텍스트">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[24px] text-ellipsis w-[min-content] whitespace-nowrap">사람인, 취업 문화 개선에 앞장서요</p>
      <p className="font-['Pretendard:Regular',sans-serif] h-[43px] leading-[20px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[400px] whitespace-pre-wrap">{`구직자에게 취업은 매우 간절한 목표이고, 기업 역시 인재를 채용하는 것이 기업의 미래를 좌우할 만큼 매우 중요한 요소인데요.  서로에게 중요한 만큼, 성공적인 취업과 채용을 위해 지켜야 할 매너들도 많죠. 사람인은 업계를 선도하는 HR기업으로서 올바른 취업문화를 이끌어 나가기 위해 앞장서고 있다는 사실! 이번 컨텐츠에서는 사람인이 진행하고 있는 취업문화 개선 활동을 모아 소개합니다!`}</p>
    </div>
  );
}

function Component34() {
  return (
    <div className="h-[228px] relative rounded-[16px] shrink-0 w-[370px]" data-name="사내이벤트:이미지">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={img6} />
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start not-italic overflow-clip relative shrink-0 text-[#222] w-full" data-name="사내이벤트:텍스트">
      <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[24px] text-ellipsis w-[min-content] whitespace-nowrap">집콕 생활에 힐링 한 스푼, 집콕 클래스!</p>
      <div className="font-['Pretendard:Regular',sans-serif] h-[43px] leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[400px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">월 별 기념일, 클래스가 다르게 전합니다! 코로나19로 인해 집에서라도 즐기자는 취지로 진행된 클래스지만, 직원들의 열화와 같은 호응으로 ‘집콕 클래스’는 지금도 매회 ‘완판’ 행진 중입니다. 특히 시즌 이슈를 챙기는 클래스라니 멋지지 않나요?</p>
        <p className="leading-[20px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="gap-x-[8px] gap-y-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-[760px]" data-name="사내이벤트">
      <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="사내이벤트1:호버">
        <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
          <div className="content-stretch flex flex-col gap-[31px] h-[351px] items-start overflow-clip relative shrink-0 w-[370px]" data-name="사내이벤트">
            <Component24 />
            <Component25 />
          </div>
        </div>
      </div>
      <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="사내이벤트2:호버">
        <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
          <div className="content-stretch flex flex-col gap-[31px] h-[351px] items-start overflow-clip relative shrink-0 w-[370px]" data-name="사내이벤트">
            <Component26 />
            <Component27 />
          </div>
        </div>
      </div>
      <div className="col-1 justify-self-stretch relative row-2 self-start shrink-0" data-name="사내이벤트3:호버">
        <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
          <div className="content-stretch flex flex-col gap-[31px] h-[351px] items-start overflow-clip relative shrink-0 w-[370px]" data-name="사내이벤트">
            <Component28 />
            <Component29 />
          </div>
        </div>
      </div>
      <div className="col-2 justify-self-stretch relative row-2 self-start shrink-0" data-name="사내이벤트4:호버">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
            <div className="content-stretch flex flex-col gap-[31px] h-[351px] items-start overflow-clip relative shrink-0 w-[370px]" data-name="사내이벤트">
              <Component30 />
              <Component31 />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="사내이벤트5:호버">
        <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
          <div className="content-stretch flex flex-col gap-[31px] h-[351px] items-start overflow-clip relative shrink-0 w-[370px]" data-name="사내이벤트">
            <Component32 />
            <Component33 />
          </div>
        </div>
      </div>
      <div className="col-2 justify-self-stretch relative row-3 self-start shrink-0" data-name="사내이벤트6:호버">
        <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
          <div className="content-stretch flex flex-col gap-[31px] h-[351px] items-start overflow-clip relative shrink-0 w-[370px]" data-name="사내이벤트">
            <Component34 />
            <Component35 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="섹션3-뉴스">
      <p className="font-['SeoulAlrim:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222] text-[80px] text-center w-full">NEWS</p>
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-[#e6f9f5] content-stretch flex flex-col gap-[40px] items-center px-[16px] py-[40px] relative shrink-0 w-[768px]" data-name="섹션3">
      <Component22 />
      <Component23 />
      <Component36 />
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[8px] relative shrink-0 w-[736px]" data-name="뉴스케러셀">
        <div className="h-[206px] relative shrink-0 w-[338px]" data-name="뉴스">
          <p className="absolute font-['Pretendard:Medium',sans-serif] inset-[26.21%_0_53.4%_0] leading-[normal] not-italic text-[#464646] text-[24px]">사람인, ‘커리어 매칭 에이전트’ 전격 출시…취업 준비 방법 혁신</p>
          <div className="absolute bg-[#464646] inset-[70.87%_0_27.18%_0]" />
          <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[90.29%_76.63%_0_0] leading-[20px] not-italic text-[#464646] text-[18px] whitespace-nowrap">2026-03-26</p>
          <div className="absolute content-stretch flex inset-[1.94%_83.14%_84.47%_-2.37%] items-center justify-center px-[8px] py-[4px]" data-name="뉴스종류">
            <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#464646] text-[18px] whitespace-nowrap">취업뉴스</p>
          </div>
        </div>
        <div className="h-[206px] relative shrink-0 w-[338px]" data-name="뉴스">
          <p className="absolute font-['Pretendard:Medium',sans-serif] inset-[26.21%_0_53.4%_0] leading-[normal] not-italic text-[#464646] text-[24px]">{`사람인, 'ChatGPT for kakao' 파트너사 합류, HR AI 에이전트 광폭 행보`}</p>
          <div className="absolute bg-[#464646] inset-[70.87%_0_27.18%_0]" />
          <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[90.29%_76.63%_0_0] leading-[20px] not-italic text-[#464646] text-[18px] whitespace-nowrap">2026-03-25</p>
          <div className="absolute content-stretch flex inset-[1.94%_83.14%_84.47%_-2.37%] items-center justify-center px-[8px] py-[4px]" data-name="뉴스종류">
            <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[18px] whitespace-nowrap">회사소식</p>
          </div>
        </div>
        <div className="h-[206px] relative shrink-0 w-[338px]" data-name="뉴스">
          <p className="absolute font-['Pretendard:Medium',sans-serif] inset-[26.21%_0_53.4%_0] leading-[normal] not-italic text-[#464646] text-[24px]">{`'내 손안의 AI 취업 에이전트'...사람인, 신입,인턴 전용 홈 전면 개편`}</p>
          <div className="absolute bg-[#464646] inset-[70.87%_0_27.18%_0]" />
          <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[90.29%_76.63%_0_0] leading-[20px] not-italic text-[#464646] text-[18px] whitespace-nowrap">2026-03-04</p>
          <div className="absolute content-stretch flex inset-[1.94%_83.14%_84.47%_-2.37%] items-center justify-center px-[8px] py-[4px]" data-name="뉴스종류">
            <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#464646] text-[18px] whitespace-nowrap">취업뉴스</p>
          </div>
        </div>
        <div className="h-[206px] relative shrink-0 w-[338px]" data-name="뉴스">
          <p className="absolute font-['Pretendard:Medium',sans-serif] inset-[26.21%_0_53.4%_0] leading-[normal] not-italic text-[#464646] text-[24px]">사람인, 지난해 입사지원 5500만 돌파, 국민 커리어 플랫폼 인증</p>
          <div className="absolute bg-[#464646] inset-[70.87%_0_27.18%_0]" />
          <p className="absolute font-['Pretendard:Regular',sans-serif] inset-[90.29%_76.63%_0_0] leading-[20px] not-italic text-[#464646] text-[18px] whitespace-nowrap">2026-01-20</p>
          <div className="absolute content-stretch flex inset-[1.94%_83.14%_84.47%_-2.37%] items-center justify-center px-[8px] py-[4px]" data-name="뉴스종류">
            <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[18px] whitespace-nowrap">회사소식</p>
          </div>
        </div>
        <button className="absolute content-stretch cursor-pointer flex flex-col h-[206px] items-end justify-center p-[8px] right-[17px] top-0 w-[33px]" data-name="이동버튼">
          <p className="font-['SeoulAlrim:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d9d9d9] text-[80px] text-left w-full">〉</p>
        </button>
      </div>
    </div>
  );
}

function MaterialSymbolsBarChart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:bar-chart">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:bar-chart">
          <path d={svgPaths.p1e914c00} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="투자정보">
      <p className="font-['SeoulAlrim:ExtraBold',sans-serif] leading-[normal] relative shrink-0 text-[#222] text-[24px]">투자정보</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#aaa] text-[18px]">사람인 143240</p>
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="투자정보상단">
      <MaterialSymbolsBarChart />
      <Component40 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="h-[6px] relative shrink-0 w-[11px]" data-name="imgi_13_down 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi13Down1} />
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[12px] whitespace-nowrap">-320</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4876ef] text-[12px] whitespace-nowrap">(-1.85%)</p>
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="투자정보2">
      <div className="h-[11px] relative shrink-0 w-[19px]" data-name="imgi_13_down 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi13Down1} />
      </div>
      <p className="font-['Pretendard:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222] text-[24px] whitespace-nowrap">16,970</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[12px] whitespace-nowrap">won</p>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[12px] whitespace-nowrap">전일대비</p>
      <Frame1 />
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="날짜">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#aaa] text-[18px] whitespace-nowrap">2026-03-30 10:56:31</p>
    </div>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="투자정보">
      <Component39 />
      <Component41 />
      <Component42 />
    </div>
  );
}

function Component37() {
  return (
    <div className="relative shrink-0 w-full" data-name="섹션4">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[80px] pt-[40px] px-[16px] relative w-full">
          <Component38 />
          <div className="content-stretch flex items-end px-[20px] py-[8px] relative rounded-[28px] shrink-0" data-name="버튼">
            <div aria-hidden="true" className="absolute border-[#aaa] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[28px]" />
            <p className="font-['Pretendard:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[18px] whitespace-nowrap">투자정보 보기 〉</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component45() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-full whitespace-nowrap" data-name="푸터1">
      <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0">개인정보처리방침</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">내부정보관리규정</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0">윤리경영</p>
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-full" data-name="푸터2">
      <p className="relative shrink-0 w-full">Email　help@saramin.co.kr</p>
      <p className="relative shrink-0 w-full">Tel　02. 6226. 5000</p>
      <p className="relative shrink-0 w-full">Fax　02. 6937. 0039</p>
    </div>
  );
}

function Component47() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="푸터3">
      <div className="relative shrink-0 size-[23px]" data-name="imgi_17_sns01 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi17Sns011} />
      </div>
      <div className="h-[23px] relative shrink-0 w-[22px]" data-name="imgi_18_sns02 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi18Sns021} />
      </div>
      <div className="h-[23px] relative shrink-0 w-[24px]" data-name="imgi_19_sns03 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi19Sns031} />
      </div>
      <div className="h-[23px] relative shrink-0 w-[24px]" data-name="imgi_20_sns04 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgi20Sns041} />
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-full" data-name="푸터4">
      <p className="relative shrink-0 w-full">(주)사람인 대표이사 황현순</p>
      <p className="relative shrink-0 w-full">(우) 07800 서울특별시 강서구 공항대로 165, 윈그로브 C동 11층</p>
    </div>
  );
}

function Component49() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] items-start leading-[20px] not-italic relative shrink-0 text-[#d9d9d9] text-[10px] w-full" data-name="푸터5">
      <p className="relative shrink-0 w-full">사업자등록번호 000-00-00000</p>
      <p className="relative shrink-0 w-full">직업정보제공사업</p>
    </div>
  );
}

function Component44() {
  return (
    <div className="relative shrink-0 w-full" data-name="푸터텍스트">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[20px] pl-[16px] pt-[100px] relative w-full">
        <Component45 />
        <Component46 />
        <Component47 />
        <Component48 />
        <Component49 />
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[48px] text-white w-full">사람과 일을 잇는 행복 Bridge</p>
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="bg-[#00967b] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="푸터">
      <Component44 />
      <div className="absolute bg-[#00c3a0] left-[23px] overflow-clip rounded-[50px] size-[100px] top-[-36px]" data-name="로고">
        <p className="absolute font-['Jalnan_2:Regular',sans-serif] leading-[normal] left-[calc(50%-48px)] not-italic text-[#f8fafb] text-[22px] top-[calc(50%-13px)] whitespace-nowrap">saramin</p>
      </div>
    </div>
  );
}

export default function Tablet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="tablet">
      <Header />
      <Component5 />
      <Component9 />
      <Component21 />
      <Component37 />
      <Component43 />
    </div>
  );
}