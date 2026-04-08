import svgPaths from "./svg-kekctnfoak";
import imgBgImg01 from "figma:asset/d27ba62c860310a45d6f6d3324f706c55b0c9c6a.png";
import img22 from "figma:asset/7e4b5cbd1a4634be37ec7430f5fc217ad710e2e4.png";
import img031 from "figma:asset/6c496ea1934a45fa45c85390097fd9a2d9770ab3.png";
import img041 from "figma:asset/8eaa2b371a298d1d2edff0b9b86a34cd1f436d06.png";
import imgMo01 from "figma:asset/ebef84975d86ccd7196ac2c1f35e83277b8d09d1.png";
import imgCalculator from "figma:asset/a4b3f5739f0306729cc3c4a52352ecc7706e9a21.png";
import imgMpopImg from "figma:asset/2c955d83cfa4868cfb6ef87baf216eb03b8cc403.png";
import imgMonimoImg from "figma:asset/9c4e29835a42e9b5b6b38ac622a78aca6be710cf.png";
import imgIsaImg from "figma:asset/3d53ddbdbd0caa7cd9d46eef715d901af67fa4a4.png";
import { img021 } from "./svg-bbjxn";

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

function Year() {
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

function Img() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="img02">
      <div className="[grid-area:1_/_1] h-[640px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56px_136px] mask-size-[248px_340px] ml-[-56px] mt-[-136px] relative w-[360px]" data-name="로보굴링_서비스소개 02 1" style={{ maskImage: `url('${img021}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img22} />
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="img03">
      <div className="[grid-area:1_/_1] h-[640px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[57px_136px] mask-size-[248px_340px] ml-[-57px] mt-[-136px] relative w-[360px]" data-name="로보굴링_서비스소개 03 1" style={{ maskImage: `url('${img021}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img031} />
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="img04">
      <div className="[grid-area:1_/_1] h-[642px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[57px_137px] mask-size-[248px_340px] ml-[-57px] mt-[-137px] relative w-[361px]" data-name="로보굴링_서비스소개 04 1" style={{ maskImage: `url('${img021}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img041} />
      </div>
    </div>
  );
}

function MoImg() {
  return (
    <div className="content-stretch flex gap-[24px] items-center leading-[0] relative shrink-0" data-name="mo_img">
      <Img />
      <Img1 />
      <Img2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-0 pt-[48px] px-[80px] relative shrink-0" data-name="text">
      <div className="h-0 relative shrink-0 w-[100px]">
        <div className="absolute bottom-[-2.67px] left-0 right-[-2.67%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 6">
            <path d={svgPaths.p14c26280} fill="var(--stroke-0, #0D0D0D)" id="Arrow 1" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">mPOP 로보굴링 연금서비스</p>
    </div>
  );
}

function Pension1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-124px] pb-0 pt-[64px] px-0 relative shrink-0" data-name="pension02">
      <MoImg />
      <Text />
    </div>
  );
}

function MpopImg() {
  return (
    <div className="content-stretch flex items-center justify-center pl-0 pr-[124px] py-0 relative shrink-0" data-name="mpop_img">
      <div className="h-[806px] mr-[-124px] relative shrink-0 w-[480px]" data-name="mo_01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMo01} />
      </div>
      <Pension1 />
    </div>
  );
}

function Pension() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start mb-[-400px] pb-[120px] pt-0 px-[360px] relative shrink-0 w-[1920px]" data-name="pension01">
      <MpopImg />
      <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
         <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5] text-[#0d0d0d]">간결한 텍스트와 직관적인 구성으로 정보 전달력 강화</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5] text-[#0d0d0d]">볼륨감 있는 일러스트와 이모지를 활용해 사용자 친화적인 분위기 형성</span>
        </li>
      </ul>
    </div>
  );
}

export function Mpop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[400px] pt-0 px-0 relative shrink-0 w-full" data-name="mpop01">
      <BgImg />
      <Pension />
    </div>
  );
}

function BgBlue() {
  return <div className="absolute bg-[#2288ee] h-[1150px] right-0 top-[194px] w-[960px]" data-name="bg_blue" />;
}

export function Mpop1() {
  return (
    <div className="bg-white h-[1580px] overflow-clip relative shrink-0 w-full" data-name="mpop02">
      <BgBlue />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic right-[460px] text-[160px] text-[rgba(0,0,0,0.2)] text-nowrap top-0 tracking-[-6.4px] translate-x-[100%] whitespace-pre">mPOP</p>
      <div className="absolute h-[797px] left-[422px] top-[414px] w-[880px]" data-name="calculator">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCalculator} />
      </div>
      <ul className="[white-space-collapse:collapse] absolute block font-['Pretendard:Regular',sans-serif] leading-[0] left-[968px] not-italic text-[#0d0d0d] text-[20px] text-nowrap top-[1384px]">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5] text-[#0d0d0d]">간단한 인터랙션을 통해 화면에 유연함과 시각적 다양성 제공</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5] text-[#0d0d0d]">친근하면서 신뢰감 있는 금융 서비스 이미지 구축</span>
        </li>
      </ul>
    </div>
  );
}

function Mobile() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex gap-[80px] items-center justify-center px-0 py-[180px] relative shrink-0 w-full" data-name="mobile">
      <div className="h-[750px] relative shrink-0 w-[360px]" data-name="mpop_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMpopImg} />
      </div>
      <div className="h-[750px] relative shrink-0 w-[360px]" data-name="monimo_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMonimoImg} />
      </div>
      <div className="h-[750px] relative shrink-0 w-[360px]" data-name="isa_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIsaImg} />
      </div>
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

function Bottom() {
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="contents01">
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