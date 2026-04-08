import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import imgBgImg01 from "figma:asset/d27ba62c860310a45d6f6d3324f706c55b0c9c6a.png";
import imgMpopImg from "figma:asset/7725285d7bf22f5b3bf5fc667fd9e0da77d78b64.png";
import imgCalculator from "figma:asset/a4b3f5739f0306729cc3c4a52352ecc7706e9a21.png";
import imgMpopImg1 from "figma:asset/2c955d83cfa4868cfb6ef87baf216eb03b8cc403.png";
import imgMonimoImg from "figma:asset/9c4e29835a42e9b5b6b38ac622a78aca6be710cf.png";
import imgIsaImg from "figma:asset/3d53ddbdbd0caa7cd9d46eef715d901af67fa4a4.png";

function Line() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11px]" data-name="line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
        <g id="line">
          <path d="M1 0V18H0V0H1Z" fill="var(--fill-0, #0D0D0D)" id="Vector 1 (Stroke)" />
          <path d="M6 0V18H5V0H6Z" fill="var(--fill-0, #0D0D0D)" id="Vector 2 (Stroke)" />
          <path d="M11 0V18H10V0H11Z" fill="var(--fill-0, #0D0D0D)" id="Vector 3 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="logo">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-nowrap whitespace-pre">J</p>
      <Line />
    </div>
  );
}

function Work() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="work">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap underline whitespace-pre">WORK</p>
    </div>
  );
}

function UiGallery() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="ui gallery">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">UI GALLERY</p>
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="btn">
      <Work />
      <UiGallery />
    </div>
  );
}

export function Gnb() {
  return (
    <div className="bg-white h-[109px] relative shrink-0 w-full" data-name="gnb">
      <div className="size-full">
        <div className="content-stretch flex gap-[60px] h-[109px] items-start p-[40px] relative w-full">
          <Logo />
          <Btn />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] uppercase" data-name="body">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">Samsung stock</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] w-full">삼성증권 운영(UI 신규 페이지 구축 및 고도화, 이벤트 및 monino 프로모션 기획·설계) / 디자인 PL</p>
    </div>
  );
}

function Component2024Hover() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="2024_hover">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Body />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[120px] text-nowrap tracking-[-6px] uppercase whitespace-pre">2024</p>
    </div>
  );
}

export function Year() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="year">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-end pb-[120px] pt-0 px-[40px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2025</p>
          <Component2024Hover />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2023</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2022</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2021</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2020</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2019</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2018</p>
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[120px] items-start relative shrink-0 w-full" data-name="top">
      <Gnb />
      <Year />
    </div>
  );
}

function BgImg() {
  return (
    <div className="h-[860px] mb-[-400px] relative shrink-0 w-full" data-name="bg_img01">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-40 size-full" src={imgBgImg01} />
      </div>
    </div>
  );
}

function Pension() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[120px] pt-0 px-0 relative size-full" data-name="pension01">
      <div className="h-[870px] relative shrink-0 w-[1020px]" data-name="mpop_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMpopImg} />
      </div>
      <ul className="block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[1000px]">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 간결한 텍스트와 직관적인 구성으로 정보 전달력 강화</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">· 볼륨감 있는 일러스트와 이모지를 활용해 사용자 친화적인 분위기 형성</span>
        </li>
      </ul>
    </div>
  );
}

export function Mpop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-0 pt-0 relative shrink-0 w-full p-[0px]" data-name="mpop01">
      <BgImg />
      <Pension />
    </div>
  );
}

function BgWhite() {
  return <div className="basis-0 bg-white grow h-full min-h-px min-w-px shrink-0" data-name="bg_white" />;
}

function BgBlue() {
  return <div className="bg-[#2288ee] h-[1150px] shrink-0 w-full" data-name="bg_blue" />;
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <BgBlue />
      <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">간단한 인터랙션을 통해 화면에 유연함과 시각적 다양성 제공</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">친근하면서 신뢰감 있는 금융 서비스 이미지 구축</span>
        </li>
      </ul>
    </div>
  );
}

function BgArea() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[160px] w-[1920px]" data-name="bg_area">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <BgWhite />
      </div>
      <Frame />
    </div>
  );
}

export function Mpop1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="mpop02">
      <BgArea />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-none left-[1920px] not-italic text-[160px] text-[rgba(0,0,0,0.2)] text-right top-0 tracking-[-6.4px] translate-x-[-100%] w-[960px]">mPOP</p>
      <div className="absolute h-[797px] left-[525px] top-[371px] w-[880px]" data-name="calculator">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCalculator} />
      </div>
    </div>
  );
}

function Mobile() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/jossepin38-eng/assets/refs/heads/main/Scene.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Error loading Lottie animation:", err));
  }, []);

  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center px-0 py-[180px] relative shrink-0 w-full" data-name="mobile">
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "100%", height: "1200px", margin: "0 auto", display: "flex", justifyContent: "center" }}
        />
      )}
    </div>
  );
}

export function Mpop2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="mpop03">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <Mobile />
        </div>
      </div>
    </div>
  );
}

function TextBtn() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[28px] text-nowrap tracking-[-0.56px] uppercase whitespace-pre" data-name="text btn">
      <p className="relative shrink-0">onbid</p>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0 underline">Samsung stock</p>
      <p className="relative shrink-0">KONAI MOBILITY</p>
      <p className="relative shrink-0">WELSTory mall</p>
      <p className="relative shrink-0">XEOGEN</p>
      <p className="relative shrink-0">ministry of personnel management</p>
      <p className="relative shrink-0">HYUNDAI KOMOCO</p>
      <p className="relative shrink-0">hANA MEMBERS</p>
    </div>
  );
}

export function Bottom() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="bottom">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-start pb-[48px] pt-[180px] px-[40px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[128px] text-nowrap tracking-[-5.12px] whitespace-pre">2018-2025</p>
          <TextBtn />
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col h-[5143px] items-start relative shrink-0 w-full" data-name="contents01">
      <Mpop />
      <Mpop1 />
      <Mpop2 />
      <Bottom />
    </div>
  );
}

export default function Work1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="work02">
      <Top />
      <Contents />
    </div>
  );
}
