import imgTop from "figma:asset/0f64f1669a29e176119b8904c27533334cccff08.png";

function MenuBtn() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Home</p>
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
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white underline whitespace-pre">About</p>
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

function AboutTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="about_title">
      <p className="capitalize font-['Inter:Black',sans-serif] font-['Inter:Semi_Bold',sans-serif] font-black font-semibold leading-none not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[-1.28px] whitespace-pre">
        <span className="text-[320px]">A</span>
        <span className="text-[180px]">bout</span>
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative shrink-0" data-name="text">
      <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0">
          23년 동안 다양한 산업과 플랫폼에서 UI 디자인을 중심으로 사용자 경험을 구축해왔습니다.
          <br aria-hidden="true" />
          프로젝트마다 복잡한 정보 구조를 단순하게 정리하고, 브랜드의 시각적 일관성을 설계하는데 집중했습니다.
        </p>
        <p className="mb-0">
          <br aria-hidden="true" />
          최근에는 AI와 데이터 기반 도구를 활용해 디자인 프로세스를 효율화하고, 더 나은 사용자 흐름과 인터페이스를 탐구하고 있습니다.
        </p>
        <p>
          <br aria-hidden="true" />
          빠르게 발전하는 기술 속에서도, 디자인의 본질은 여전히 ‘사용자의 이해를 돕는 언어’라고 생각합니다.
          <br aria-hidden="true" />
          {`그래서 변화하는 도구를 두려워하기보다,  그 안에서 새로운 디자인 언어를 발견하려는 태도로 일하고 있습니다.`}
        </p>
      </div>
    </div>
  );
}

function AboutArea() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[120px] items-center pb-[180px] pt-0 px-0 relative shrink-0 w-full" data-name="about-area">
      <AboutTitle />
      <Text />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[180px] items-start relative shrink-0 w-full" data-name="Top">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 size-full" src={imgTop} />
      </div>
      <Gnb />
      <AboutArea />
    </div>
  );
}

function BodyTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="body_title">
      <div className="font-['Pretendard:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[72px] text-center text-nowrap whitespace-pre">
        <p className="leading-[1.5] mb-0">
          <span>{`디자인의 `}</span>
          <span className="text-[#ff2c2c]">본질</span>
          <span>{`을 지키면서, `}</span>
        </p>
        <p className="leading-[1.5]">
          <span>{`기술과 함께 `}</span>
          <span className="text-[#ff2c2c]">진화</span>하는 UI/UX 디자이너
        </p>
      </div>
    </div>
  );
}

function Principles() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Principles">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[260px] text-nowrap tracking-[-7.8px] whitespace-pre">Principles</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[120px] text-[rgba(13,13,13,0.3)] text-nowrap tracking-[-3.6px] whitespace-pre">Clarity</p>
      <div className="capitalize font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">복잡한 정보를 단순한 흐름으로 정리해,</p>
        <p>사용자가 한눈에 이해할 수 있는 경험을 만듭니다.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[120px] text-[rgba(13,13,13,0.3)] text-nowrap tracking-[-3.6px] whitespace-pre">Structure</p>
      <div className="capitalize font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">정보의 우선순위와 사용자 여정을 체계적으로 구성해</p>
        <p>일관된 디지털 경험의 기반을 설계합니다.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[120px] text-[rgba(13,13,13,0.3)] text-nowrap tracking-[-3.6px] whitespace-pre">Systems</p>
      <div className="capitalize font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">색, 타이포, 컴포넌트, 패턴 등 디자인 시스템을 구축해</p>
        <p>확장 가능하고 유지 관리가 쉬운 인터페이스를 만듭니다.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[120px] text-[rgba(13,13,13,0.3)] text-nowrap tracking-[-3.6px] whitespace-pre">Empathy</p>
      <p className="capitalize font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">
        사용자의 맥락을 이해하며,
        <br aria-hidden="true" />
        기능성과 경험이 조화롭게 어우러지는 인터페이스를 설계합니다.
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="capitalize font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[120px] text-[rgba(13,13,13,0.3)] text-nowrap tracking-[-3.6px] whitespace-pre">Innovation</p>
      <div className="capitalize font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">디자인의 본질은 지키되,</p>
        <p>AI·데이터 기반 기술과 함께 진화하는 UI/UX를 탐구합니다.</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0" data-name="body">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Principles1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end relative shrink-0 w-full" data-name="Principles">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[260px] text-nowrap tracking-[-7.8px] whitespace-pre">Essence</p>
    </div>
  );
}

function Con() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[280px] items-center px-0 py-[280px] relative shrink-0 w-full" data-name="Con">
      <BodyTitle />
      <Principles />
      <Body />
      <Principles1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0d0d0d] box-border content-stretch flex flex-col gap-[10px] h-[97px] items-center px-0 py-[40px] relative shrink-0 w-[1920px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">© 2025 Designed with clarity by J</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="About">
      <Top />
      <Con />
      <Footer />
    </div>
  );
}