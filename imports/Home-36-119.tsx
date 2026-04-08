import svgPaths from "./svg-wwb8mnqfnw";

function Line() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11px]" data-name="line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
        <g id="line">
          <path d="M1 0V18H0V0H1Z" fill="var(--fill-0, white)" id="Vector 1 (Stroke)" />
          <path d="M6 0V18H5V0H6Z" fill="var(--fill-0, white)" id="Vector 2 (Stroke)" />
          <path d="M11 0V18H10V0H11Z" fill="var(--fill-0, white)" id="Vector 3 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="logo">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">J</p>
      <Line />
    </div>
  );
}

function Work() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="work">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">WORK</p>
    </div>
  );
}

function UiGallery() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="ui gallery">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">UI GALLERY</p>
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
    <div className="relative shrink-0 w-full" data-name="gnb">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[60px] items-start p-[40px] relative w-full">
          <Logo />
          <Btn />
        </div>
      </div>
    </div>
  );
}

function Year() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="year">
      <p className="font-['Inter:Black',sans-serif] font-black leading-none not-italic relative shrink-0 text-[64px] text-center text-nowrap text-white tracking-[-0.64px] whitespace-pre">2018</p>
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[120px]" />
      <p className="font-['Inter:Black',sans-serif] font-black leading-none not-italic relative shrink-0 text-[64px] text-center text-nowrap text-white tracking-[-0.64px] whitespace-pre">2025</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="text">
      <div className="font-['Pretendard:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0">{`Hello! `}</p>
        <p className="mb-0">Let me introduce you</p>
        <p className="mb-0">{`to the digital experiences `}</p>
        <p>{`I've created.`}</p>
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="hero-text">
      <Year />
      <Text />
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12px]" data-name="arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
        <g id="arrow">
          <path d={svgPaths.p2b561e80} fill="var(--fill-0, white)" fillOpacity="0.7" id="Polygon 1 (Stroke)" />
          <path d={svgPaths.p2caa1400} fill="var(--fill-0, white)" fillOpacity="0.7" id="Polygon 1 (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function HeroArea() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[68px] items-center px-0 py-[180px] relative shrink-0 w-full" data-name="hero-area">
      <HeroText />
      <Arrow />
    </div>
  );
}

function BottomText() {
  return (
    <div className="relative shrink-0 w-full" data-name="bottom_text">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-end pb-[40px] pl-[40px] pr-0 pt-0 relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Protecting the essence of the design, UI/UX designers evolving with technology.</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center relative size-full" data-name="home">
      <Gnb />
      <HeroArea />
      <BottomText />
    </div>
  );
}