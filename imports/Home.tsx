import imgHome from "figma:asset/679d4f99f7308fd92d862d01555f33216f356bb5.png";

function MenuBtn() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white underline whitespace-pre">Home</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn />
    </div>
  );
}

function MenuBtn1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn1 />
    </div>
  );
}

function MenuBtn2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Work</p>
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn2 />
    </div>
  );
}

function MenuBtn3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">UI Gallery</p>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn3 />
    </div>
  );
}

function Gnb() {
  return (
    <div className="box-border content-stretch flex gap-[60px] items-start justify-center px-0 py-[48px] relative shrink-0 w-full" data-name="gnb">
      <Menu />
      <Menu1 />
      <Menu2 />
      <Menu3 />
    </div>
  );
}

function Year() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="year">
      <p className="font-['Inter:Black',sans-serif] font-black leading-none not-italic relative shrink-0 text-[128px] text-center text-nowrap text-white tracking-[-1.28px] whitespace-pre">2018</p>
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[120px]" />
      <p className="font-['Inter:Black',sans-serif] font-black leading-none not-italic relative shrink-0 text-[128px] text-center text-nowrap text-white tracking-[-1.28px] whitespace-pre">2025</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="text">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[64px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0">{`Hello! `}</p>
        <p className="mb-0">{`Let me introduce you `}</p>
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

function WorkBtn() {
  return (
    <div className="bg-white box-border content-stretch flex h-[46px] items-center justify-center px-0 py-[12px] relative rounded-[99px] shrink-0 w-[180px]" data-name="work_btn">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Work
      </p>
    </div>
  );
}

function WorkBtn1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="work_btn">
      <WorkBtn />
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="btn">
      <WorkBtn1 />
    </div>
  );
}

function HeroArea() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-full" data-name="hero-area">
      <HeroText />
      <Btn />
    </div>
  );
}

function Footer() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[97px] items-center px-0 py-[40px] relative shrink-0 w-[1920px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">© 2025 Designed with clarity by J</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="content-stretch flex flex-col gap-[180px] items-center relative size-full" data-name="home">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 size-full" src={imgHome} />
      </div>
      <Gnb />
      <HeroArea />
      <Footer />
    </div>
  );
}