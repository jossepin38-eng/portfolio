import React from 'react';
import imgCalculator from "figma:asset/a4b3f5739f0306729cc3c4a52352ecc7706e9a21.png";

function MpopText() {
  return (
    <div className="relative shrink-0 w-full mx-auto" data-name="mpop_text">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end pl-0 pr-[40px] py-0 relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-none not-italic relative shrink-0 text-[160px] text-[rgba(13,13,13,0.2)] text-right tracking-[-6.4px] w-[960px]">mPOP</p>
        </div>
      </div>
    </div>
  );
}

function BgWhite() {
  return <div className="basis-0 bg-white grow h-full min-h-px min-w-px shrink-0" data-name="bg_white" />;
}

function BgBlue() {
  return <div className="basis-0 bg-[#2288ee] grow h-full min-h-px min-w-px shrink-0" data-name="bg_blue" />;
}

function BgArea() {
  return (
    <div className="content-stretch relative flex h-[1037px] items-center w-full">
      <BgWhite />
      <BgBlue />
    </div>
  );
}

function Bg() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="bg">
      <BgArea />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full max-w-[1920px] mx-auto" data-name="text">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-0 pl-[50%] pr-0 pt-[40px] relative w-full">
          <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
            <li className="mb-0 ms-[30px]">
              <span className="leading-[1.5]">· 간단한 인터랙션을 통해 화면에 유연함과 시각적 다양성 제공</span>
            </li>
            <li className="ms-[30px]">
              <span className="leading-[1.5]">· 친근하면서 신뢰감 있는 금융 서비스 이미지 구축</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Calculator() {
  return (
    <div className="absolute h-[797px] left-1/2 top-[520px] translate-x-[-50%] w-[880px]" data-name="calculator">
      <div className="absolute h-[797px] left-0 top-0 w-[880px]" data-name="calculator">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCalculator} />
      </div>
    </div>
  );
}

export default function Mpop02() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-0 py-[180px] relative w-full overflow-hidden" data-name="mpop02">
      <MpopText />
      <Bg />
      <Text />
      <Calculator />
    </div>
  );
}
