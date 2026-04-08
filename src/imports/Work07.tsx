import imgBgImg05 from "figma:asset/326575d16a1d91b9711c6740346eb7d470be1aa3.png";
import imgImage02 from "figma:asset/0692fb88d1e881a21f90db28ff3d7947936440dd.png";
import imgImage01 from "figma:asset/d63e853e2575cf4f58388ebd518f299a31c2bd56.png";
import imgPcU0101001 from "figma:asset/fd19a588ff98811e5e41dabbb61c61cf092741ab.png";
import imgClick01 from "figma:asset/f26eb591b8ee3348ff39d181808b1fef1df22b7a.png";
import imgClick02 from "figma:asset/56d67bc28e7a01fb3b44bc6dfbaf05d5a511fadb.png";
import imgClick03 from "figma:asset/7e701f0e7ea9b5530f0fd90116d7f0e109b12b13.png";

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

function Gnb() {
  return (
    <div className="h-[109px] relative shrink-0 w-full" data-name="gnb">
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
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">HYUNDAI KOMOCO</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] w-full">현대자동차 글로벌 온라인 판매시스템 구축(싱가폴, 호주, 인도) / 디자인 PL(참여도 50%)</p>
    </div>
  );
}

function Component2019Hover() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="2019_hover">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Body />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[120px] text-nowrap tracking-[-6px] uppercase whitespace-pre">2019</p>
    </div>
  );
}

function Year() {
  return (
    <div className="relative shrink-0 w-full" data-name="year">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-end pb-[120px] pt-0 px-[40px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2025</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2024</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2023</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2022</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2021</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2020</p>
          <Component2019Hover />
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
    <div className="h-[1060px] mb-[-630px] relative shrink-0 w-full" data-name="bg_img05">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgBgImg05} />
      </div>
    </div>
  );
}

function MainImg() {
  return (
    <div className="h-[3479px] mb-[-630px] relative shrink-0 w-[1473px]" data-name="main_img">
      <div className="absolute h-[1739.5px] left-0 top-[1739.5px] w-[1473px]" data-name="Image02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage02} />
      </div>
      <div className="absolute h-[1739.5px] left-0 top-0 w-[1473px]" data-name="Image01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage01} />
      </div>
      <ul className="[white-space-collapse:collapse] absolute block font-['Pretendard:Regular',sans-serif] leading-[0] left-[717.5px] not-italic text-[#0d0d0d] text-[20px] text-nowrap top-[3326px]">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">다양한 디바이스에 최적화된 UI를 제공하는 반응형 웹 디자인 구현</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">시승 신청부터 구매까지 직관적인 플로우로 사용자 편의성 강화</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">360도 이미지로 실제 차량을 보는 듯한 몰입감 제공</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">아이콘과 텍스트를 활용해 핵심정보를 직관적이고 명확하게 전달</span>
        </li>
      </ul>
    </div>
  );
}

export function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[4089px] items-center pb-[630px] pt-0 px-0 relative shrink-0 w-full" data-name="main">
      <BgImg />
      <MainImg />
    </div>
  );
}

function Bg() {
  return <div className="bg-[#e63312] h-[1117px] mr-[-620px] shrink-0 w-[900px]" data-name="bg" />;
}

function SubImg() {
  return (
    <div className="h-[832px] mr-[-620px] relative rounded-[40px] shrink-0 w-[1280px]" data-name="sub_img">
      <div className="h-[832px] overflow-clip relative rounded-[inherit] w-[1280px]">
        <div className="absolute h-[2357px] left-1/2 top-0 translate-x-[-50%] w-[1280px]" data-name="pc_U01_01_001">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPcU0101001} />
        </div>
        <div className="absolute bg-white h-[43px] left-[6px] top-[767px] w-[115px]" />
      </div>
      <div aria-hidden="true" className="absolute border-[#0d0d0d] border-[6px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function Img() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[620px] py-0 relative shrink-0 w-full" data-name="img">
      <Bg />
      <SubImg />
    </div>
  );
}

export function SubPc() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="sub_pc">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[40px] py-0 relative w-full">
          <Img />
        </div>
      </div>
    </div>
  );
}

function MoClick() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center pl-0 pr-[48px] py-[180px] relative shrink-0 w-full" data-name="mo_click">
      <div className="h-[870px] mr-[-48px] relative shrink-0 w-[480px]" data-name="click01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClick01} />
      </div>
      <div className="h-[870px] mr-[-48px] relative shrink-0 w-[480px]" data-name="click02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClick02} />
      </div>
      <div className="h-[870px] mr-[-48px] relative shrink-0 w-[480px]" data-name="click03">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClick03} />
      </div>
    </div>
  );
}

export function SubMobile() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="sub_mobile">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <MoClick />
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="contents06">
      <Main />
      <SubPc />
      <SubMobile />
    </div>
  );
}

export default function Work1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="work07">
      <Top />
      <Contents />
    </div>
  );
}