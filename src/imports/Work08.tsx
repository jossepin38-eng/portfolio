import imgBgImg06 from "figma:asset/4597996b2f26d74a9137e7b2df76fe42f6fc0567.png";
import imgMobileImg from "figma:asset/f2cc6c8f98b941bcaf707e627a5ea6575b9f89e5.png";
import img01 from "figma:asset/f601edd1e58b657489f6996d25e470ae6ceabee8.png";
import img02 from "figma:asset/6aebb134dd0a03c086ba012e3de25eacb2cc100d.png";
import img03 from "figma:asset/ea267ef6fc1bfc6edf9fe4236a1b70b91429a142.png";
import img04 from "figma:asset/939c24d5674d32045cb0ee1e3a4f7917a6089fb5.png";

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
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">hANA MEMBERS</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] w-full">하나멤버스 하이브리드 모바일앱 구축 / 디자인 PL(참여도 50%)</p>
    </div>
  );
}

function Component2018Hover() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="2018_hover">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Body />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[120px] text-nowrap tracking-[-6px] uppercase whitespace-pre">2018</p>
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
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre">2018</p>
          <Component2018Hover />
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
    <div className="h-[1060px] mb-[-180px] relative shrink-0 w-[900px]" data-name="bg_img06">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgBgImg06} />
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[798px] mb-[-180px] relative shrink-0 w-full" data-name="img">
      <div className="absolute h-[1181px] left-[652px] top-[-680px] w-[881px]" data-name="mobile_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMobileImg} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="mb-[-180px] relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end px-[40px] py-0 relative w-full">
          <div className="font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[800px]">
            <p className="leading-[1.5] mb-0">
              <span className="text-[#ff3131]">{` *`}</span>
              <span className="text-[#727272]"> </span>
              <span className="text-[#ff3131]">2018 i-AWARDS 스마트 앱 어워즈 서비스 이노베이션 대상 수상</span>
            </p>
            <p className="leading-[1.5] mb-0">&nbsp;</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[30px]">
                <span className="leading-[1.5] text-[#0d0d0d]">One Screen, One Task 설계를 통해 사용자가 한 화면에서 필요한 정보를 직관적으로 인지하고, 빠르게 과업을 수행할 수 있도록 집중도와 효율성 강화</span>
              </li>
              <li className="mb-0 ms-[30px]">
                <span className="leading-[1.5] text-[#0d0d0d]">핵심 기능 중심의 UI 설계로 불필요한 정보는 배제하고 명확한 정보 전달에 집중</span>
              </li>
              <li className="ms-[30px]">
                <span className="leading-[1.5] text-[#0d0d0d]">마이크로 인터랙션을 활용하여 앱 사용 경험의 몰입도와 재미 요소를 더함</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[180px] pt-0 px-0 relative shrink-0 w-full" data-name="main">
      <BgImg />
      <Img />
      <Text />
    </div>
  );
}

export function HanaMain() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[280px] pt-0 px-0 relative shrink-0 w-full" data-name="hana_main">
      <Main />
    </div>
  );
}

function MoSub() {
  return (
    <div className="bg-[#008288] content-stretch flex items-center justify-center pl-0 pr-[48px] py-[180px] relative shrink-0 w-full" data-name="mo_sub">
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img01} />
      </div>
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img02} />
      </div>
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="03">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img03} />
      </div>
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="04">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img04} />
      </div>
    </div>
  );
}

export function Sub() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="sub">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <MoSub />
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="contents07">
      <HanaMain />
      <Sub />
    </div>
  );
}

export default function Work1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="work08">
      <Top />
      <Contents />
    </div>
  );
}