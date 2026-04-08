import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import svgPaths from "./svg-o3a7ky7gcw";
import imgRectangle from "figma:asset/35d36e855bf152a4781727d4c73bb98ff545cea1.png";
import imgImage from "figma:asset/d089f6cf0dae7ce333b34e82e29faa9f802751d0.png";
import imgImage1 from "figma:asset/80c646d37b788ae1676c6a7c9be0d6cd0269bb76.png";
import imgMMain from "figma:asset/2082e6b353a14140b6918a2d176c17d0c33300a8.png";
import imgSearch01 from "figma:asset/3b59bdcf9ffdeaac97eda054fa16e3c1002e6bb2.png";
import imgSearch02 from "figma:asset/af76ba5a341e71c562b7e43ecdfbcfc7dc56583e.png";
import imgMobile01 from "figma:asset/060d99b3ba3c75d913a51ea198011087cec345e1.png";
import imgMainLogout from "figma:asset/3a839542188986d9549c1ceb96f063f1b6fa32e9.png";
import imgMainLogin from "figma:asset/7a501f15f367a70f1df8c2ee860c4b5d0e6cc163.png";

function Pc() {
  return (
    <div className="-translate-x-1/2 absolute h-[832px] left-[calc(50%-89.5px)] top-[40px] w-[1280px]" data-name="pc">
      <img alt="onbid-main-pc" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[961px] left-0 top-0 w-[1459px]" data-name="main">
      <Pc />
      
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[961px] relative shrink-0 w-[1392px]">
      <Main />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[60px] items-start leading-[0] not-italic relative shrink-0 text-[#0d0d0d] whitespace-nowrap">
      <div className="relative shrink-0 text-[20px]">
        <p className="leading-[1.5] mb-0">기존 온비드는 물건 검색이 별도 메뉴에 위치하고, 메인 화면은 통합검색과 배너 중심으로 구성되어 경매 사이트의 핵심 목적이 직관적으로 드러나지 않는 구조였습니다.</p>
        <p className="leading-[1.5] mb-0">또한 경매 경험자를 기준으로 설계된 과도하게 상세한 검색 조건은 경매에 익숙하지 않은 사용자에게 물건 검색 자체를 부담스럽게 만드는 요인이었습니다.</p>
        <p className="mb-0">
          <span className="leading-[1.5]">이에 경매 서비스에서 가장 중요한 ‘</span>
          <span className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic">물건 검색</span>
          <span className="leading-[1.5]">’에 집중하여 불필요한 콘텐츠를 정리하고, 물건 검색을 메인 히어로 영역에 배치해 사용자의 첫 행동이 자연스럽게 검색으로 이어지도록 개선하였습니다.</span>
        </p>
        <p className="leading-[1.5]">
          상세 페이지에서는 기존의 이미지 중심 게시판형 물건 리스트를 가독성과 친숙함을 높인 쇼핑몰형 카드 UI로 재구성하였습니다.
          <br aria-hidden="true" />
          일반 사용자에게 익숙한 쇼핑몰 탐색 패턴을 적용함으로써 다양한 경매 물건을 보다 직관적으로 비교하고 탐색할 수 있도록 개선하였습니다.
          <br aria-hidden="true" />
          이를 통해 공공기관 서비스 특유의 딱딱한 인상을 완화하고, 사용자가 보다 편안한 방식으로 경매 물건을 탐색할 수 있도록 접근성을 개선하였습니다.
        </p>
      </div>
      <div className="relative shrink-0 text-[0px]">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.5] mb-0 whitespace-pre font-bold text-[36px]">UX 개선 포인트</p>
        <p className="leading-[1.5] mb-0 text-[24px] whitespace-pre">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]"><span className="font-['Pretendard:SemiBold',sans-serif] leading-[1.5] not-italic text-[24px]">· 핵심 목적에 집중한 메인 구조 재정의</span></li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Pretendard:SemiBold',sans-serif] leading-[1.5] not-italic text-[24px]">· 검색 진입 장벽을 낮춘 사용자 중심 설계</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Pretendard:SemiBold',sans-serif] leading-[1.5] not-italic text-[24px]">· 쇼핑몰에 익숙한 UI 패턴을 활용한 탐색 경험 개선</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Pretendard:SemiBold',sans-serif] leading-[1.5] not-italic text-[24px]">· 공공기관 서비스에 대한 심리적 거리감 완화</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center mb-[-700px] pb-[120px] px-[360px] relative shrink-0 w-[1920px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Onbid() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip pb-[700px] relative shrink-0 w-full" data-name="onbid_01">
      <div className="h-[960px] mb-[-700px] relative shrink-0 w-full" data-name="Rectangle">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full w-full object-cover object-center" src={imgRectangle} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0" />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function MobileImg() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/jossepin38-eng/assets/refs/heads/main/Showreel-Grid-Mobile-remix.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Error loading Lottie animation:", err));
  }, []);

  return (
    <div className="bg-[#0d0d0d] h-auto py-[80px] shrink-0 w-full flex items-center justify-center overflow-hidden relative" data-name="mobile_img">
      {animationData && (
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true} 
          className="w-[1600px] h-[1200px] max-w-full"
        />
      )}
    </div>
  );
}

function Onbid2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="onbid_03">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <MobileImg />
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="arrow">
      <div className="absolute h-[73px] left-[663px] top-[12px] w-[48px]">
        <div className="absolute inset-[-0.68%_0_-0.68%_-7.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.682 74">
            <path d={svgPaths.p18587a80} fill="var(--stroke-0, #0D0D0D)" id="Vector 1" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] left-[784px] not-italic text-[#0d0d0d] text-[20px] text-center top-[14px] whitespace-nowrap">
        <p className="leading-[1.5]">Primary Color</p>
      </div>
    </div>
  );
}

function Color1() {
  return (
    <div className="bg-[#eff3ff] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">#EFF3FF</p>
      </div>
    </div>
  );
}

function ColorChip() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color1 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 100</p>
      </div>
    </div>
  );
}

function Color2() {
  return (
    <div className="bg-[#cfd9ff] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">#CFD9FF</p>
      </div>
    </div>
  );
}

function ColorChip1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color2 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 150</p>
      </div>
    </div>
  );
}

function Color3() {
  return (
    <div className="bg-[#b0bbff] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">#B0BBFF</p>
      </div>
    </div>
  );
}

function ColorChip2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color3 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 200</p>
      </div>
    </div>
  );
}

function Color4() {
  return (
    <div className="bg-[#929dfc] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">#929DFC</p>
      </div>
    </div>
  );
}

function ColorChip3() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color4 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 300</p>
      </div>
    </div>
  );
}

function Color5() {
  return (
    <div className="bg-[#767ff1] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">#767FF1</p>
      </div>
    </div>
  );
}

function ColorChip4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color5 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 400</p>
      </div>
    </div>
  );
}

function Color6() {
  return (
    <div className="bg-[#5d5fe4] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">#5D5FE4</p>
      </div>
    </div>
  );
}

function ColorChip5() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color6 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 500</p>
      </div>
    </div>
  );
}

function Color7() {
  return (
    <div className="bg-[#484bb2] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">#484BB2</p>
      </div>
    </div>
  );
}

function ColorChip6() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color7 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 600</p>
      </div>
    </div>
  );
}

function Color8() {
  return (
    <div className="bg-[#353782] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">#353782</p>
      </div>
    </div>
  );
}

function ColorChip7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color8 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 700</p>
      </div>
    </div>
  );
}

function Color9() {
  return (
    <div className="bg-[#222455] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">#222455</p>
      </div>
    </div>
  );
}

function ColorChip8() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color9 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 800</p>
      </div>
    </div>
  );
}

function Color10() {
  return (
    <div className="bg-[#11132c] content-stretch flex items-center justify-center px-[20px] relative rounded-[8px] shrink-0 size-[120px]" data-name="color">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.5]">#11132C</p>
      </div>
    </div>
  );
}

function ColorChip9() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Color10 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Indigo Blue 900</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ColorChip />
      <ColorChip1 />
      <ColorChip2 />
      <ColorChip3 />
      <ColorChip4 />
      <ColorChip5 />
      <ColorChip6 />
      <ColorChip7 />
      <ColorChip8 />
      <ColorChip9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Arrow />
      <Frame />
    </div>
  );
}

function ColorChips() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="color chips">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[50px] py-[60px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Color() {
  return (
    <div className="content-stretch flex flex-col gap-[180px] items-center relative shrink-0 w-full" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[64px] w-full">Color</p>
      <ColorChips />
    </div>
  );
}

function Onbid1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="onbid_02">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[210px] items-end px-[40px] py-[210px] relative w-full">
          <Color />
          <div className="font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-full whitespace-pre-wrap">
            <p className="leading-[1.5] mb-0">기존 온비드 사이트 전반에는 서비스를 대표하는 명확한 Primary Color가 정의되어 있지 않아 화면 간 시각적 일관성과 서비스 아이덴티티 인지가 약한 구조였습니다.</p>
            <p className="leading-[1.5] mb-0">리디자인에서는 Indigo Blue를 Primary Color로 정의하고 주요 인터랙션 요소와 핵심 UI 영역에 일관되게 적용하여 서비스 전반에서 동일한 시각적 언어가 인지될 수 있도록 개선하였습니다.</p>
            <p className="leading-[1.5] mb-0">{`Indigo Blue는 공공기관 서비스에서 흔히 사용되는 무겁고 차가운 블루 계열에서 벗어나 신뢰감을 유지하면서도 보다 부드럽고 친근한 인상을 전달할 수 있도록 선택한 컬러로, 온비드 서비스의 이미지를 현대적으로 재해석하는 역할을 합니다.`}</p>
           <p className="leading-[1.5]">이를 통해 서비스 전반에서 일관된 브랜드 경험을 제공할 수 있도록 컬러 시스템을 정립하였습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OnbidSearch1() {
  return (
    <div className="relative content-stretch flex flex-col items-center w-[880px]" data-name="onbid-search">
      <div className="h-[719.583px] relative shrink-0 w-full" data-name="search01">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSearch01} />
      </div>
      <div className="h-[719.583px] relative shrink-0 w-full" data-name="search02">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSearch02} />
      </div>
    </div>
  );
}

function OnbidSearch() {
  return (
    <div className="flex-1 flex items-center justify-center h-[1439px] relative shrink-0" data-name="onbid-search">
      <OnbidSearch1 />
    </div>
  );
}

function Bg() {
  return (
    <div className="bg-[#5d5fe4] h-[1439px] overflow-clip relative flex-1 flex items-center justify-center" data-name="bg">
      <div className="relative h-[693px] w-[822px]" data-name="mobile01">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMobile01} />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic right-[40px] text-[160px] text-[rgba(255,255,255,0.3)] text-right top-[40px] tracking-[-6.4px] whitespace-nowrap">ONBID</p>
    </div>
  );
}

function Onbid3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="onbid_04">
      <OnbidSearch />
      <Bg />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#007a88] content-stretch flex flex-col gap-[80px] items-center justify-center py-[180px] relative shrink-0 w-full" data-name="사용기관">
      <div className="h-[875px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[1280px]" data-name="main-logout">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMainLogout} />
      </div>
      <div className="h-[929px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[1280px]" data-name="main-login">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMainLogin} />
      </div>
    </div>
  );
}

function Onbid4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="onbid_05">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents01">
      <Onbid />
      <Onbid2 />
      <Onbid1 />
      <Onbid3 />
      <Onbid4 />
    </div>
  );
}
