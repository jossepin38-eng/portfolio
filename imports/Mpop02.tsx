import imgCalculator from "figma:asset/a4b3f5739f0306729cc3c4a52352ecc7706e9a21.png";

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

export default function Mpop() {
  return (
    <div className="bg-white relative size-full" data-name="mpop02">
      <BgArea />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-none left-[1920px] not-italic text-[160px] text-[rgba(0,0,0,0.2)] text-right top-0 tracking-[-6.4px] translate-x-[-100%] w-[960px]">mPOP</p>
      <div className="absolute h-[797px] left-[525px] top-[371px] w-[880px]" data-name="calculator">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCalculator} />
      </div>
    </div>
  );
}