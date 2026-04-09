import { useState, useEffect, useRef } from "react";
import imgTop from "figma:asset/0f64f1669a29e176119b8904c27533334cccff08.png";
import GradientText from "./GradientText";

function MenuBtn({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p 
        onClick={() => window.location.hash = ''}
        className={`cursor-pointer font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] ${isDark ? 'text-[#0d0d0d]' : 'text-[rgba(255,255,255,0.7)]'} text-nowrap whitespace-pre transition-colors duration-300`}
      >
        Home
      </p>
    </div>
  );
}

function Menu({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn isDark={isDark} />
    </div>
  );
}

function MenuBtn1({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className={`[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap ${isDark ? 'text-[#0d0d0d]' : 'text-white'} underline whitespace-pre transition-colors duration-300`}>About</p>
    </div>
  );
}

function Menu1({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn1 isDark={isDark} />
    </div>
  );
}

function MenuBtn2({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] ${isDark ? 'text-[#0d0d0d]' : 'text-[rgba(255,255,255,0.7)]'} text-nowrap whitespace-pre transition-colors duration-300`}>Work</p>
    </div>
  );
}

function Menu2({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn2 isDark={isDark} />
    </div>
  );
}

function MenuBtn3({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="menu-btn">
      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] ${isDark ? 'text-[#0d0d0d]' : 'text-[rgba(255,255,255,0.7)]'} text-nowrap whitespace-pre transition-colors duration-300`}>UI Gallery</p>
    </div>
  );
}

function Menu3({ isDark }: { isDark: boolean }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="menu">
      <MenuBtn3 isDark={isDark} />
    </div>
  );
}

function Gnb({ isDark }: { isDark: boolean }) {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 box-border content-stretch flex gap-[60px] items-start justify-center px-0 py-[48px] shrink-0 w-full transition-all duration-300`} data-name="gnb">
      <Menu isDark={isDark} />
      <Menu1 isDark={isDark} />
      <Menu2 isDark={isDark} />
      <Menu3 isDark={isDark} />
    </div>
  );
}

function AboutTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0" data-name="about_title">
      <GradientText 
        colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
        animationSpeed={3}
        showBorder={false}
        className="capitalize font-['Inter:Black',sans-serif] font-['Inter:Semi_Bold',sans-serif] font-black font-semibold leading-none not-italic relative shrink-0 tracking-[-1.28px] whitespace-pre"
      >
        <span className="text-[320px]">A</span>
        <span className="text-[180px]">bout</span>
      </GradientText>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative shrink-0" data-name="text">
      <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0 text-[20px]">
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
    <div className="content-stretch flex flex-col gap-[180px] items-start relative shrink-0 w-full pt-[170px]" data-name="Top">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 size-full" src={imgTop} />
      </div>
      <AboutArea />
    </div>
  );
}

function BodyTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="body_title">
      <div className="font-['Pretendard:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[72px] text-center text-nowrap whitespace-pre">
        <p className="leading-[1.5] mb-0 text-[72px]">
          <span>{`디자인의 `}</span>
          <span className="text-[rgb(13,13,13)]">본질</span>
          <span>{`을 지키면서, `}</span>
        </p>
        <p className="leading-[1.5]">
          <span>{`기술과 함께 `}</span>
          <span className="text-[rgb(13,13,13)]">진화</span>하는 UI/UX 디자이너
        </p>
      </div>
    </div>
  );
}

function Principles() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full pointer-events-none" data-name="Principles">
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
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 z-0" data-name="body">
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

function Con({ setWhiteSectionTop }: { setWhiteSectionTop: (top: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setWhiteSectionTop(ref.current.offsetTop);
    }
  }, [setWhiteSectionTop]);

  return (
    <div ref={ref} className="bg-white box-border content-stretch flex flex-col gap-[280px] items-center px-0 py-[280px] relative shrink-0 w-full" data-name="Con">
      <BodyTitle />
      
      {/* Sticky Principles Wrapper */}
      <div className="w-full flex justify-center items-center sticky top-1/2 -translate-y-1/2 h-0 z-10 pointer-events-none">
         <Principles />
      </div>

      {/* Add margin top to Body so it starts below the sticky text initially? 
          Or just let it flow. Since wrapper is h-0, Body starts immediately after BodyTitle + gap.
          The gap is 280px. The text is ~260px. 
          Body will flow up and under the sticky text.
      */}
      <Body />
      <Principles1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0d0d0d] box-border content-stretch flex flex-col gap-[10px] h-[97px] items-center px-0 py-[40px] relative shrink-0 w-full z-10" data-name="footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap whitespace-pre">© 2025 Designed with clarity by J</p>
    </div>
  );
}

export default function About() {
  const [isDark, setIsDark] = useState(false);
  const [whiteSectionTop, setWhiteSectionTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > whiteSectionTop - 100) { // -100 buffer for navbar height
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [whiteSectionTop]);

  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="About">
      <Gnb isDark={isDark} />
      <Top />
      <Con setWhiteSectionTop={setWhiteSectionTop} />
      <Footer />
    </div>
  );
}
