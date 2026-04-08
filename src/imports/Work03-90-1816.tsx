import svgPaths from "./svg-wxssn8w8dp";
import imgIPhone15 from "figma:asset/607ac6783f208ad36a16345a2914576441785785.png";
import imgIPhone182 from "figma:asset/1bc20b8780636f64a36138521bcfddf85b57b10e.png";
import imgIPhone17 from "figma:asset/c129df9961f6f42c21ae56a786e91af718bf6e7c.png";
import imgIPhone20 from "figma:asset/442e259efc90f82e2962fb91a3847a174fb764d2.png";
import imgAosCall12 from "figma:asset/99a53715ff62ffbff5205aebe683491223e54216.png";
import imgAosCall2 from "figma:asset/d5bc38d9b4ebfd90ac1df9f7eae62a4f54f270c6.png";
import imgAosCall3 from "figma:asset/417cf5d7ec7203e1465a0da80523269dd00de839.png";
import imgBgImg02 from "figma:asset/680599cd0ea1e064fae4de825f0fa4576b1f5d5c.png";
import img1 from "figma:asset/988a9dede952d0d4f063eaa152ba5fe2d9ae18d7.png";
import img2 from "figma:asset/f25c361cb6a892e5781d1898252b735c73b22fca.png";
import imgDriverAppOptions21 from "figma:asset/de8825ad01c41b84907c206a90d2c05b73258e8e.png";
import imgDriverAppOptions411 from "figma:asset/21192bcca109459f4822c6e8df6a46eeffee8393.png";
import { imgCar } from "./svg-7erma";

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
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">KONAI MOBILITY</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] w-full">코나아이 모빌리티 승객앱 동백택시 고도화 및 신규페이지 구축 / 디자인 PL(참여도 60%)</p>
    </div>
  );
}

function Component2023Hover() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="2023_hover">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Body />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[120px] text-nowrap tracking-[-6px] uppercase whitespace-pre">2023</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-end px-[40px] py-0 relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2025</p>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2024</p>
          <Component2023Hover />
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

function Year() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[120px] pt-0 px-0 relative shrink-0 w-full" data-name="year">
      <Frame13 />
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

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-40px] pl-0 pr-[48px] py-0 relative shrink-0" data-name="승객앱01">
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="iPhone 15">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone15} />
      </div>
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="iPhone 18 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone182} />
      </div>
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="iPhone 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone17} />
      </div>
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="iPhone 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone20} />
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center mr-[-40px] pb-0 pt-[24px] px-0 relative shrink-0" data-name="승객앱02">
      <div className="h-[553px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[300px]" data-name="AOS #CALL_결제_쿠폰-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAosCall12} />
      </div>
      <div className="h-[678px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[300px]" data-name="AOS #CALL_결제_쿠폰 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAosCall2} />
      </div>
      <div className="h-[706px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[300px]" data-name="AOS #CALL_결제_쿠폰 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAosCall3} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[48px] h-[1856px] items-center justify-center left-0 pl-[288px] pr-[328px] py-[210px] top-0 w-[1920px]" data-name="승객앱">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] mr-[-40px] not-italic relative shrink-0 text-[48px] text-white w-[1231px]">동백택시 - 승객앱</p>
      <Component9 />
      <Component10 />
    </div>
  );
}

function BgImg() {
  return (
    <div className="h-[1856px] relative shrink-0 w-full" data-name="bg_img02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgBgImg02} />
      </div>
      <Component />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[40px] py-0 relative shrink-0" data-name="text">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">친근하고 위트 있는 이미지 및 아이콘 활용으로 사용자 접근성과 시각적 즐거움을 높임</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">브랜드 컬러 변경을 통해 브랜드 아이덴티티를 강화하고 시각적 일관성 확보</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">가입 프로세스 간소화를 통해 초기 사용자뿐만 아니라 기존 사용자의 이용 흐름까지 개선</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">결제수단과 혜택을 한 화면에 통합하여 결제 단계를 단축하고 사용자 경험을 향상</span>
        </li>
      </ul>
    </div>
  );
}

export function Konai() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="konai_01">
      <BgImg />
      <Text />
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="arrow">
      <div className="absolute h-[73px] left-[663px] top-[12px] w-[48px]">
        <div className="absolute bottom-[-0.68%] left-[-7.67%] right-0 top-[-0.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 74">
            <path d={svgPaths.p3db89400} fill="var(--stroke-0, #0D0D0D)" id="Vector 1" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] left-[784px] not-italic text-[#0d0d0d] text-[20px] text-center text-nowrap top-[14px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.5] whitespace-pre">Primary Color</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-[#f6f2ff] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="100">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#F6F2FF</p>
      </div>
    </div>
  );
}

function ColorChip() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component16 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 100</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#eae0fe] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="150">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#EAE0FE</p>
      </div>
    </div>
  );
}

function ColorChip1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component17 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 150</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-[#c6acfd] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="200">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#C6ACFD</p>
      </div>
    </div>
  );
}

function ColorChip2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component18 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 200</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-[#a982fc] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="300">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#A982FC</p>
      </div>
    </div>
  );
}

function ColorChip3() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component19 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 300</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="bg-[#8d59fb] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="400">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#8D59FB</p>
      </div>
    </div>
  );
}

function ColorChip4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component20 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 400</p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-[#702ffa] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="500">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#702FFA</p>
      </div>
    </div>
  );
}

function ColorChip5() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component21 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 500</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-[#5a26c8] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="600">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#5A26C8</p>
      </div>
    </div>
  );
}

function ColorChip6() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component22 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 600</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="bg-[#431c96] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="700">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#431C96</p>
      </div>
    </div>
  );
}

function ColorChip7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component23 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 700</p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="bg-[#2d1364] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="800">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#2D1364</p>
      </div>
    </div>
  );
}

function ColorChip8() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component24 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 800</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-[#160932] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="900">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#160932</p>
      </div>
    </div>
  );
}

function ColorChip9() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component25 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 900</p>
      </div>
    </div>
  );
}

function Frame4() {
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

function Chips() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="chips">
      <Arrow />
      <Frame4 />
    </div>
  );
}

function Color() {
  return (
    <div className="content-stretch flex flex-col gap-[180px] items-center relative shrink-0 w-full" data-name="color">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[64px] w-[min-content]">Color</p>
      <Chips />
    </div>
  );
}

export function Konai1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="konai_02">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[210px] items-end px-[40px] py-[280px] relative w-full">
          <Color />
          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[843px]">
            {`코나아이의 브랜드를 구성하는 레드(도전·열정)와 블루(신뢰·안정)의 가치를 기반으로, `}
            <br aria-hidden="true" />두 색이 지닌 의미를 조화롭게 담아낼 수 있는 중립적 퍼플 컬러를 새로운 브랜드 방향성으로 제안하였습니다.
            <br aria-hidden="true" />
            퍼플은 지역성과 성별에 구애받지 않는 보편성을 지니며, 레드의 에너지와 블루의 신뢰감을 균형 있게 반영해 코나아이 모빌리티만의 차별화된 브랜드 아이덴티티를 강화하는 핵심 요소로 활용하였습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[44.362px]" data-name="최적경로">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 48">
        <g id="ìµì ê²½ë¡">
          <path d={svgPaths.pe02a180} fill="url(#paint0_linear_73_1968)" id="Rectangle 3256" />
          <path d={svgPaths.p2bdcdf00} fill="var(--fill-0, #0D0D0D)" id="Union" />
          <path d={svgPaths.p26eb3100} fill="url(#paint1_linear_73_1968)" id="Subtract" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_73_1968" x1="22.1812" x2="22.1812" y1="26.7616" y2="47.5762">
            <stop stopColor="#707594" />
            <stop offset="1" stopColor="#646984" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_73_1968" x1="22.1812" x2="22.1812" y1="0" y2="39.6473">
            <stop stopColor="#78DE95" />
            <stop offset="1" stopColor="#43B563" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#0d0d0d] h-[80px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[80px] items-center justify-center p-[16px] relative w-full">
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="최적경로">
      <Frame5 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white w-full">최적경로</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[42px]" data-name="안전한운행">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 48">
        <g id="ìì íì´í">
          <path d={svgPaths.p358ae600} fill="var(--fill-0, #B2D2FF)" id="Union" />
          <path d={svgPaths.p20c54f00} fill="var(--fill-0, #B2D2FF)" id="Rectangle 3198" />
          <path d={svgPaths.p239d3980} fill="var(--fill-0, #B2D2FF)" id="Rectangle 3201" />
          <path d={svgPaths.p3d359580} fill="var(--fill-0, #7256FF)" id="Rectangle 3203" />
          <path d={svgPaths.p28c38f00} fill="var(--fill-0, #0D0D0D)" id="Rectangle 3204" />
          <path d={svgPaths.p62d2880} fill="var(--fill-0, #568CDB)" id="Rectangle 3202" />
          <path d={svgPaths.p1bf51d00} fill="var(--fill-0, #B3D2FF)" id="Rectangle 3205" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#0d0d0d] h-[80px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[80px] items-center justify-center p-[16px] relative w-full">
          <Component3 />
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="안전한운행">
      <Frame6 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white w-full">안전한 운행</p>
    </div>
  );
}

function Car() {
  return (
    <div className="h-[48px] relative shrink-0 w-[49px]" data-name="car">
      <div className="absolute bottom-0 left-[-2.04%] right-[-6.12%] top-[-2.08%]">
        <img alt="" className="block max-w-none size-full" src={imgCar} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#0d0d0d] h-[80px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col h-[80px] items-center px-[15px] py-[16px] relative w-full">
          <Car />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="쾌적한내부">
      <Frame3 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white w-full">쾌적한 내부</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[43.03px] relative shrink-0 w-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 44">
        <g id="Group 8921">
          <g id="Group 8922">
            <path d={svgPaths.p3a1f7e80} fill="var(--fill-0, #8439BF)" id="Vector 1024" />
            <path d={svgPaths.p4a60800} fill="var(--fill-0, #C183F3)" id="Vector 1025" />
            <path clipRule="evenodd" d={svgPaths.p37f284c0} fill="var(--fill-0, #C183F3)" fillRule="evenodd" id="Vector 1026 (Stroke)" />
            <path d={svgPaths.p204f7980} fill="var(--fill-0, #C183F3)" id="Vector 1027 (Stroke)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start p-[16px] relative rounded-[30px] shrink-0 size-[80px]">
      <Group1 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="조용한운행">
      <Frame11 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">조용한 운행</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div className="absolute bottom-0 left-[-2.08%] right-0 top-[-2.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <g id="Group 8965">
            <path d={svgPaths.p3a053180} fill="url(#paint0_linear_73_2000)" id="Union" />
            <g filter="url(#filter0_d_73_2000)" id="Union_2">
              <path d={svgPaths.p225e9180} fill="var(--fill-0, #FFDA57)" />
            </g>
            <g filter="url(#filter1_d_73_2000)" id="Union_3">
              <path d={svgPaths.p3af80d00} fill="var(--fill-0, #FFD749)" />
            </g>
            <g filter="url(#filter2_d_73_2000)" id="Vector 1059 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p2c259400} fill="var(--fill-0, #FFD749)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.999" id="filter0_d_73_2000" width="18.957" x="0" y="0.249748">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_73_2000" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_73_2000" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.9941" id="filter1_d_73_2000" width="16.0548" x="15" y="6">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_73_2000" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_73_2000" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter2_d_73_2000" width="15.3166" x="33" y="4.10117e-10">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_73_2000" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_73_2000" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_73_2000" x1="25" x2="25" y1="38" y2="49">
              <stop stopColor="#6ABDEC" />
              <stop offset="1" stopColor="#2395D6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center p-[16px] relative rounded-[30px] shrink-0 size-[80px]">
      <Group4 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="즐거운운행">
      <Frame7 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">즐거운 운행</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[48.002px] relative shrink-0 w-[48.001px]" data-name="감동서비스">
      <div className="absolute bottom-[-8.33%] left-0 right-[-8.33%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <g id="ê°ëìë¹ì¤">
            <g id="ì¤ë§ì¼">
              <circle cx="22" cy="22" fill="url(#paint0_linear_73_1989)" id="Ellipse 2014" r="22" />
              <path d={svgPaths.p1b99ee00} id="Ellipse 2015" stroke="var(--stroke-0, #222233)" strokeLinecap="round" strokeWidth="3" />
              <circle cx="15.9506" cy="17.0502" fill="var(--fill-0, #222233)" id="Ellipse 2015_2" r="2.75" />
              <circle cx="28.0494" cy="17.0502" fill="var(--fill-0, #222233)" id="Ellipse 2016" r="2.75" />
            </g>
            <g filter="url(#filter0_d_73_1989)" id="Union">
              <path d={svgPaths.p124eecb0} fill="url(#paint1_linear_73_1989)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.0007" id="filter0_d_73_1989" width="32.001" x="20.0001" y="24.0018">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_73_1989" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_73_1989" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_73_1989" x1="22" x2="22" y1="29.7917" y2="44">
              <stop stopColor="#FFDC60" />
              <stop offset="1" stopColor="#F5C825" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_73_1989" x1="36.0004" x2="36.0004" y1="37" y2="48.0022">
              <stop stopColor="#F85353" />
              <stop offset="1" stopColor="#CF0101" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center p-[16px] relative rounded-[30px] shrink-0 size-[80px]">
      <Component8 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="감동서비스">
      <Frame10 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">감동 서비스</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-0 size-[80px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Group 8945">
          <path d={svgPaths.p2b329300} fill="var(--fill-0, #0D0D0D)" id="Rectangle 3252" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[40px] relative shrink-0 w-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 40">
        <g id="Group 8972">
          <path d={svgPaths.p13c3d1c0} fill="var(--fill-0, #FEB90E)" id="Union" />
          <path d={svgPaths.p5c00300} fill="url(#paint0_linear_73_1979)" id="Union_2" />
          <path d={svgPaths.p17137400} fill="var(--fill-0, white)" id="Ellipse 2059" />
          <path d={svgPaths.pb014380} fill="var(--fill-0, white)" id="Ellipse 2060" />
          <path d={svgPaths.p1cc9eb00} fill="var(--fill-0, white)" id="Ellipse 2015 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_73_1979" x1="20" x2="20" y1="0" y2="36">
            <stop stopColor="#8D8AF9" />
            <stop offset="1" stopColor="#6866E2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow h-[80px] min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] h-[80px] items-start p-[16px] relative w-full">
          <Group2 />
          <Group8 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="친절한기사님">
      <Frame12 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white w-full">친절한 기사님</p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group 8915">
          <g id="Rectangle 3281"></g>
          <g id="Group 8929">
            <path d={svgPaths.p32963130} fill="var(--fill-0, #FADFD1)" id="Union" />
            <rect fill="var(--fill-0, #AC67E3)" height="26.1778" id="Rectangle 3196" rx="3" width="12" x="3" y="21.8221" />
          </g>
          <g id="Group 8930">
            <mask height="38" id="mask0_73_2045" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="15" y="10">
              <path d={svgPaths.p32963130} fill="var(--fill-0, #FADFD1)" id="Union_2" />
            </mask>
            <g mask="url(#mask0_73_2045)">
              <path d={svgPaths.p20829a00} fill="var(--fill-0, #F8C5B2)" id="Rectangle 3197" />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p308af300} fill="var(--fill-0, #78DE95)" fillRule="evenodd" id="Vector 1003 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[grid-area:1_/_1] bg-[#0d0d0d] content-stretch flex items-center ml-0 mt-0 p-[16px] relative rounded-[30px] size-[80px]">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[80px]">
      <Group3 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">Like</p>
    </div>
  );
}

function Like() {
  return (
    <div className="content-stretch flex h-[134px] items-start justify-center relative shrink-0" data-name="like">
      <Frame2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] h-[41px] ml-0 mt-0 relative w-[44px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 41">
        <g id="Group 8967">
          <path d={svgPaths.p1d382b40} fill="var(--fill-0, #E24968)" id="Rectangle 3265" />
          <path d={svgPaths.p241c5b80} fill="var(--fill-0, white)" id="Rectangle 3270" />
          <path d="M20 9H36V15H20V9Z" fill="var(--fill-0, #FF9636)" id="Rectangle 3266" />
          <path d="M23 0H33V9H23V0Z" fill="var(--fill-0, #FFC956)" id="Rectangle 3267" />
          <path d={svgPaths.p231eeef0} fill="var(--fill-0, #FFC956)" id="Rectangle 3268 (Stroke)" />
          <path d={svgPaths.pd821100} fill="var(--fill-0, #FF9636)" id="Ellipse 2058" />
          <path d={svgPaths.p24f5d6f0} fill="var(--fill-0, #0D0D0D)" id="Ellipse 2057" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] h-[41px] ml-[1.93px] mt-0 relative w-[42.07px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 41">
        <g id="Mask group">
          <mask height="41" id="mask0_73_1964" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="43" x="0" y="0">
            <path d={svgPaths.p2f14ce80} fill="var(--fill-0, black)" id="Union" />
          </mask>
          <g mask="url(#mask0_73_1964)">
            <path d={svgPaths.p3f18da80} fill="var(--fill-0, black)" fillOpacity="0.2" id="Rectangle 3272" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[7px] place-items-start relative">
      <Group5 />
      <MaskGroup />
    </div>
  );
}

function Component13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="향기">
      <div className="[grid-area:1_/_1] ml-[35px] mt-0 relative size-[7px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <path clipRule="evenodd" d={svgPaths.p1e3c9400} fill="var(--fill-0, #78DE95)" fillRule="evenodd" id="Union" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[4px] mt-0 relative size-[7.486px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d={svgPaths.p3d68ce20} fill="var(--fill-0, #78DE95)" id="Union" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[42px] mt-[13px] relative size-[6px]" data-name="Ellipse 2054 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <path d={svgPaths.p30ab0600} fill="var(--fill-0, #78DE95)" id="Ellipse 2054 (Stroke)" />
        </svg>
      </div>
      <Group7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center p-[16px] relative rounded-[30px] shrink-0 size-[80px]">
      <Component13 />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="좋은향기">
      <Frame9 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">좋은 향기</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group 8970">
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.p2145b580} fill="url(#paint0_linear_73_1947)" id="Vector" />
              <path d={svgPaths.p13a2700} fill="var(--fill-0, #0D0D0D)" id="Vector (Stroke)" />
              <path d={svgPaths.p30c1f300} fill="var(--fill-0, #0D0D0D)" id="Vector (Stroke)_2" />
              <path d={svgPaths.p725b180} fill="var(--fill-0, #0D0D0D)" id="Vector (Stroke)_3" />
            </g>
            <path d={svgPaths.p3dd1e80} fill="var(--fill-0, #0D0D0D)" id="Vector (Stroke)_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p69d6300} fill="url(#paint1_linear_73_1947)" id="Vector_2" />
            <path d={svgPaths.p2429b480} fill="var(--fill-0, #0D0D0D)" id="Vector (Stroke)_5" />
            <path d={svgPaths.p31492b80} fill="var(--fill-0, #0D0D0D)" id="Vector (Stroke)_6" />
            <path d={svgPaths.p183cb100} fill="var(--fill-0, #0D0D0D)" id="Vector (Stroke)_7" />
          </g>
          <path d={svgPaths.pc8f3f00} fill="var(--fill-0, #FB7746)" id="Rectangle 3274" />
          <path d={svgPaths.p1ebc6800} fill="var(--fill-0, #FB7746)" id="Rectangle 3275" />
          <path d={svgPaths.p1fbd3900} fill="var(--fill-0, #FB7746)" id="Rectangle 3276" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_73_1947" x1="34" x2="34" y1="12.1725" y2="45.647">
            <stop stopColor="#FFE6D9" />
            <stop offset="1" stopColor="#FFD4BE" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_73_1947" x1="14" x2="14" y1="16.2301" y2="48">
            <stop stopColor="#F8C5B2" />
            <stop offset="1" stopColor="#FDB296" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center p-[16px] relative rounded-[30px] shrink-0 size-[80px]">
      <Group6 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[82px]" data-name="기사님">
      <Frame />
      <div className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">
        <p className="mb-0">{`또 만나고 싶은 `}</p>
        <p>기사님</p>
      </div>
    </div>
  );
}

function ColorChart() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="color chart">
      <div className="size-full">
        <div className="content-start flex flex-wrap gap-[80px] items-start pl-[50px] pr-[120px] py-[60px] relative w-full">
          <Component2 />
          <Component4 />
          <Component5 />
          <Component6 />
          <Component7 />
          <Component11 />
          <Component12 />
          <Like />
          <Component14 />
          <Component15 />
        </div>
      </div>
    </div>
  );
}

function Iocn() {
  return (
    <div className="basis-0 bg-[#702ffa] grow min-h-px min-w-px relative shrink-0" data-name="iocn">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start pb-[210px] pt-[48px] px-[40px] relative w-full">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[64px] text-nowrap text-white whitespace-pre">Icon</p>
          <ColorChart />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pb-[40px] pt-0 px-[40px] relative size-full">
          <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[840px]">
            <p className="mb-0">{`기사가 승객으로부터 받는 평가 요소를 배지 형태로 시각화하여 자신의 서비스 품질을 더 직관적으로 `}</p>
            <p className="mb-0">
              확인할 수 있도록 합니다.
              <br aria-hidden="true" />
              {`배지는 친근한 느낌의 아이콘과 간단한 텍스트를 조합하여 고령 사용자도 쉽게 구분할 수 있도록 `}
            </p>
            <p className="mb-0">{`구성하였고, 아직 획득하지 못한 배지는 블라인드 처리하여 자연스럽게 획득 동기를 유도하도록 `}</p>
            <p>설계하였습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Konai2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="konai_03">
      <div className="size-full">
        <div className="content-stretch flex gap-[40px] items-start px-[40px] py-0 relative w-full">
          <Iocn />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function AppImg() {
  return (
    <div className="content-stretch flex items-start justify-center pl-0 pr-[48px] py-0 relative shrink-0 w-full" data-name="app_img">
      <div className="h-[560px] mr-[-48px] relative shrink-0 w-[360px]" data-name="선호운행가이드 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="h-[560px] mr-[-48px] relative shrink-0 w-[360px]" data-name="새로운콜받기 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <div className="h-[1001px] mr-[-48px] relative shrink-0 w-[360px]" data-name="DRIVER_APP_OPTIONS_메뉴 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDriverAppOptions21} />
      </div>
      <div className="h-[696px] mr-[-48px] relative shrink-0 w-[360px]" data-name="DRIVER_APP_OPTIONS_화면 밝기 조절_4 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDriverAppOptions411} />
      </div>
    </div>
  );
}

function Taxi() {
  return (
    <div className="bg-[#f6f2ff] content-stretch flex flex-col gap-[48px] items-center px-0 py-[210px] relative shrink-0 w-full" data-name="taxi">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[48px] w-[1242px]">동백택시 - 기사앱</p>
      <AppImg />
    </div>
  );
}

export function Konai3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="konai_04">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[280px] pt-[40px] px-[40px] relative w-full">
          <Taxi />
          <ul className="block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-full">
            <li className="mb-0 ms-[30px]">
              <span className="leading-[1.5]">기사 앱 사용자의 특성을 고려해, 기존 승객용 UI와는 다른 접근이 필요</span>
            </li>
            <li className="mb-0 ms-[30px]">
              <span className="leading-[1.5]">대부분의 기사 사용자가 고령층이라는 점을 반영해 어두운 바탕, 큰 폰트, 명확한 대비의 버튼 색상으로 화면 가독성을 높이고 선택 실수를 최소화</span>
            </li>
            <li className="ms-[30px]">
              <span className="leading-[1.5]">텍스트 크기·색상·간격을 조정하여 정보 이해도를 높였으며, 주행 중에도 빠르게 인지할 수 있는 레이아웃으로 안전성과 사용성을 동시에 개선</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="contents02">
      <Konai />
      <Konai1 />
      <Konai2 />
      <Konai3 />
    </div>
  );
}

export default function Work1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="work03">
      <Top />
      <Contents />
    </div>
  );
}