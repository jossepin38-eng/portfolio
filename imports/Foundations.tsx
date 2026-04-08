import imgColorChips from "figma:asset/a1ad6d1aa873c2e4ef85e333a18301bc1321bad3.png";
import imgFont from "figma:asset/72ec1c06c3f4f6a27b0d12c197fdc2fb5d31898d.png";
import imgIconGrid from "figma:asset/dd5a9e7f7f2653cd364b66fde837bc05980e2096.png";
import imgTablet from "figma:asset/55fcf7000ab5f973255cbf7d9c8137828323eff7.png";
import imgMobile from "figma:asset/4deb882e83b860666885eb124dad58d0d01638b8.png";
import imgDesktop from "figma:asset/aec466397844080e9d7d5e5f916ef7a333738dc5.png";
import imgElevation from "figma:asset/8fbd1dbbccc2df11543dc9cda16bce0ba473687b.png";
import { motion } from "motion/react";

function AnimatedTitle() {
  const text = "Why Design Systems Matter";
  const chars = text.split("");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 2 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.p 
      className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[72px] w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {chars.map((char, index) => {
        if (char === " ") {
          return <span key={index}> </span>;
        }
        return (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.p>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-center w-full pt-[60px] pr-[0px] pb-[0px] pl-[0px]" data-name="text01">
      <AnimatedTitle />
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px] w-full">
        “디자인 시스템은 재사용 가능한 구성 요소와 명확한 규칙을 통해 일관되고 확장 가능한 인터페이스를 만드는 아키텍처입니다.
        <br aria-hidden="true" />
        {` 단순한 UI 요소를 넘어, 디자인 속도를 높이고 제품 전반의 경험을 통일하는 기반이 됩니다.”`}
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] w-full" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] text-nowrap tracking-[-1px] whitespace-pre">Color System</p>
      <p className="font-['Pretendard:Regular',sans-serif] min-w-full relative shrink-0 text-[24px] w-[min-content]">색상은 단순한 시각적 선택이 아니라, 제품의 분위기·커뮤니케이션·사용자 행동을 정의하는 핵심 디자인 토큰입니다.</p>
    </div>
  );
}

function Num8() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[1104px]" data-name="text01">
      <Num8 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap whitespace-pre">
        <span className="font-['Pretendard:Bold',sans-serif]">Primitive Colors</span>
        <span>{` - 가장 기본이 되는 원시 팔레트로, 브랜드 및 UI 색상의 기반이 됩니다.`}</span>
      </p>
    </div>
  );
}

function Num9() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num9 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap whitespace-pre">
        <span className="font-['Pretendard:Bold',sans-serif]">Semantic Colors</span>
        <span>{` - 의미와 역할에 따라 매핑된 색상입니다. (예: Primary / Success / Warning / Error / Background / Surface / Border)`}</span>
      </p>
    </div>
  );
}

function Num10() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="text03">
      <Num10 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap whitespace-pre">
        <span className="font-['Pretendard:Bold',sans-serif]">Usage Rules</span>
        <span>{` - 각 색상을 언제, 어디서, 어떤 목적으로 사용할지 명확하게 정의합니다. (예: 버튼 상태, 알림 유형, 텍스트 계층 등)`}</span>
      </p>
    </div>
  );
}

function Num11() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num04">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="text04">
      <Num11 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap whitespace-pre">
        <span className="font-['Pretendard:Bold',sans-serif]">Accessibility Checks</span>
        <span>{` - 모든 사용자가 정보를 읽을 수 있도록 대비 기준(예: WCAG 2.1)을 준수합니다.`}</span>
      </p>
    </div>
  );
}

function SubText() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0" data-name="sub-text">
      <Text />
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function ColorText() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="color_text">
      <Title />
      <SubText />
    </div>
  );
}

function ColorChips() {
  return (
    <div className="h-[900px] relative shrink-0 w-[1160px]" data-name="color chips">
      <div className="absolute h-[900px] left-0 top-0 w-[1160px]" data-name="color chips">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgColorChips} />
      </div>
    </div>
  );
}

function ColorOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0" data-name="color_overview">
      <ColorText />
      <ColorChips />
    </div>
  );
}

function ColorSystem() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[180px] items-center px-0 pt-[80px] pb-[180px] relative shrink-0 w-full" data-name="color system">
      <Text8 />
      <ColorOverview />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-nowrap whitespace-pre" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] tracking-[-1px]">Typography</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px]">
        타이포그래피는 텍스트를 배열하는 방식 그 이상으로, 제품에서 단어가 어떻게 보이고, 읽히고, 흐르는지를 결정하는 핵심 시스템입니다.
        <br aria-hidden="true" />
        콘텐츠의 구조를 안내하고, 리듬을 만들며, 가독성과 사용성을 향상시켜 인터페이스를 더 신뢰감 있고 직관적으로 경험하도록 돕습니다.
      </p>
    </div>
  );
}

function Num() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text01">
      <Num />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Font</span>
        <span>{` - 선택한 글꼴 패밀리 (예: Pretendard)`}</span>
      </p>
    </div>
  );
}

function Num1() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num1 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Hierarchy</span>
        <span>{` - 제목·본문·캡션 등 텍스트 레벨의 구조`}</span>
      </p>
    </div>
  );
}

function Num2() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text03">
      <Num2 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Scale</span>
        <span>{` - 다양한 문맥에서 활용되는 크기 체계`}</span>
      </p>
    </div>
  );
}

function Num3() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num04">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text04">
      <Num3 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Line-height & Spacing`}</span>
        <span>{` - 읽기 쉬운 비율과 균형을 만드는 요소`}</span>
      </p>
    </div>
  );
}

function Num4() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num04">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">5</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text05">
      <Num4 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Usage Rules</span>
        <span>{` - 각 스타일을 언제·어디에 적용해야 하는지에 대한 기준`}</span>
      </p>
    </div>
  );
}

function SubText1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="sub-text">
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text12 />
    </div>
  );
}

function TypoOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="typo_overview">
      <Title1 />
      <SubText1 />
    </div>
  );
}

function FontImg() {
  return (
    <div className="h-[892px] relative shrink-0 w-[1250px]" data-name="font img">
      <div className="absolute h-[892px] left-0 top-0 w-[1250px]" data-name="font">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFont} />
      </div>
    </div>
  );
}

function TypoOverview1() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0" data-name="typo_overview">
      <TypoOverview />
      <FontImg />
    </div>
  );
}

function Typography() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center px-0 py-[180px] relative shrink-0 w-full" data-name="Typography">
      <TypoOverview1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-nowrap whitespace-pre" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] tracking-[-1px]">Spacing</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px]">
        간격은 디자인을 보이지 않는 구조로 묶어 주는 핵심 요소입니다.
        <br aria-hidden="true" />
        텍스트, 버튼, 카드, 섹션 등 요소 사이의 여백을 정의해 인터페이스가 균형 잡히고 읽기 쉬우며, 의도된 흐름을 갖도록 만듭니다.
        <br aria-hidden="true" />
        적절한 간격은 리듬과 명확성을 만들어 사용자가 콘텐츠를 자연스럽게 스캔하고 중요한 정보에 집중할 수 있도록 돕습니다.
      </p>
    </div>
  );
}

function Num5() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text01">
      <Num5 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Base Unit</span>
        <span>{` - 최소 간격 값 (예: 4px 또는 8px)`}</span>
      </p>
    </div>
  );
}

function Num6() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num6 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Scale</span>
        <span>{` - 레이아웃 전반에 일관되게 적용되는 간격 배수 (예: 4, 8, 16, 24, 32…)`}</span>
      </p>
    </div>
  );
}

function Num7() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text03">
      <Num7 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Usage Rules</span>
        <span>{` - 컴포넌트 내부 패딩, 섹션 간 여백 등 간격을 적용하는 기준`}</span>
      </p>
    </div>
  );
}

function SubText2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="sub-text">
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function SpacingText() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Spacing_text">
      <Title2 />
      <SubText2 />
    </div>
  );
}

function SpacingOverview() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Spacing_overview">
      <SpacingText />
    </div>
  );
}

function Spacing() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-0 py-[180px] relative shrink-0 w-full" data-name="Spacing">
      <SpacingOverview />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-nowrap whitespace-pre" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] tracking-[-1px]">Iconography</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px]">
        아이콘은 복잡한 정보를 빠르게 이해하도록 돕는 시각적 언어입니다.
        <br aria-hidden="true" />
        텍스트를 보조하고, 기능을 명확히 안내하며, 인터페이스의 일관성과 사용성을 강화합니다.
        <br aria-hidden="true" />
        일관된 스타일과 의미 구조를 갖춘 아이콘 시스템은 제품 전체의 리듬과 가독성을 높이는 핵심 요소입니다.
      </p>
    </div>
  );
}

function Num12() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text01">
      <Num12 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Style</span>
        <span>{` - 브랜드 톤에 맞춘 선 굵기, 모서리 처리, 형태 규칙`}</span>
      </p>
    </div>
  );
}

function Num13() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num13 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Grid & Proportion`}</span>
        <span>{` - 균형 잡힌 아이콘 제작을 위한 기준 그리드`}</span>
      </p>
    </div>
  );
}

function Num14() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text03">
      <Num14 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Semantic Mapping</span>
        <span>{` - 기능과 의미에 따라 일관되게 사용되는 아이콘 매핑`}</span>
      </p>
    </div>
  );
}

function Num15() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text04">
      <Num15 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Stroke & Corner Rules`}</span>
        <span>{` - 선 두께, 라운드 값 등 시각적 일관성을 지키는 규칙`}</span>
      </p>
    </div>
  );
}

function Num16() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">5</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text05">
      <Num16 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Usage Rules</span>
        <span>{` - 아이콘을 적용해야 하는 맥락, 크기 기준, 텍스트와의 관계`}</span>
      </p>
    </div>
  );
}

function SubText3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="sub-text">
      <Text13 />
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
    </div>
  );
}

function IconGrid() {
  return (
    <div className="h-[1099px] relative shrink-0 w-[1171px]" data-name="icon grid">
      <div className="absolute h-[1099px] left-0 top-0 w-[1171px]" data-name="icon grid">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconGrid} />
      </div>
    </div>
  );
}

function IconOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-name="Icon_overview">
      <Title3 />
      <SubText3 />
      <IconGrid />
    </div>
  );
}

function Iconography() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[180px] pt-0 px-0 relative shrink-0 w-full" data-name="Iconography">
      <IconOverview />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-nowrap whitespace-pre" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] tracking-[-1px]">Grid System</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px]">
        그리드 시스템은 화면의 콘텐츠를 정렬하고 구조화하는 보이지 않는 프레임워크입니다.
        <br aria-hidden="true" />
        열과 행의 규칙을 통해 요소들이 배치되어야 할 위치를 안내하며, 인터페이스가 일관되고 안정적으로 느껴지도록 시각적 질서를 제공합니다.
        <br aria-hidden="true" />
        또한 반응형 디자인의 기반이 되어 다양한 기기와 화면 크기에서도 레이아웃을 자연스럽게 조정할 수 있게 합니다.
      </p>
    </div>
  );
}

function Num17() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text01">
      <Num17 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Alignment</span>
        <span>{` - 텍스트, 이미지, 컴포넌트의 정렬 기준`}</span>
      </p>
    </div>
  );
}

function Num18() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num18 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Rhythm & Structure`}</span>
        <span>{` - 레이아웃의 흐름과 시각적 리듬 형성`}</span>
      </p>
    </div>
  );
}

function Num19() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text03">
      <Num19 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Responsive Layout</span>
        <span>{` - 기기 전반에서 유연하게 확장·수축되는 구조`}</span>
      </p>
    </div>
  );
}

function SubText4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="sub-text">
      <Text18 />
      <Text19 />
      <Text20 />
    </div>
  );
}

function GridText() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-name="Grid_text">
      <Title4 />
      <SubText4 />
    </div>
  );
}

function Img() {
  return (
    <div className="content-stretch flex gap-[58px] items-start relative shrink-0 w-full" data-name="img">
      <div className="h-[967px] relative shrink-0 w-[837px]" data-name="tablet">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTablet} />
      </div>
      <div className="h-[762px] relative shrink-0 w-[402px]" data-name="mobile">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMobile} />
      </div>
    </div>
  );
}

function Dvice() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-[1298px]" data-name="dvice">
      <div className="h-[984px] relative shrink-0 w-[1280px]" data-name="Desktop">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesktop} />
      </div>
      <Img />
    </div>
  );
}

function Grid() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[80px] items-center px-0 py-[180px] relative shrink-0 w-full" data-name="Grid">
      <GridText />
      <Dvice />
    </div>
  );
}

function GridSystem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Grid System">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[40px] pt-0 px-[40px] relative w-full">
          <Grid />
        </div>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-nowrap whitespace-pre" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] tracking-[-1px]">Elevation</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px]">
        Elevation은 요소의 깊이와 계층 구조를 정의하여, 어떤 UI가 위로 떠 있거나 상호작용 가능한지 명확하게 보여주는 시스템입니다.
        <br aria-hidden="true" />
        그림자와 z-index 토큰을 사용해 화면 위의 레이어를 일관되게 설계하며, 사용자에게 시각적 우선순위와 집중해야 할 위치를 자연스럽게 안내합니다.
      </p>
    </div>
  );
}

function Num20() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text01">
      <Num20 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">시각적 계층 구조 형성</span>
        <span>{` - 무엇이 위에 있고, 중요한지 명확히 전달`}</span>
      </p>
    </div>
  );
}

function Num21() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num21 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">깊이와 현실감 부여</span>
        <span>{` - 평면 UI에 자연스러운 공간감 제공`}</span>
      </p>
    </div>
  );
}

function Num22() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text03">
      <Num22 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">사용자 집중 유도</span>
        <span>{` - 모달, 툴팁 등 주요 요소를 두드러지게`}</span>
      </p>
    </div>
  );
}

function Num23() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text04">
      <Num23 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`상호작용성 신호 제공 `}</span>- 클릭 가능 요소를 직관적으로 인식
      </p>
    </div>
  );
}

function SubText5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="sub-text">
      <Text21 />
      <Text22 />
      <Text23 />
      <Text24 />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="button_text">
      <Title5 />
      <SubText5 />
    </div>
  );
}

function Elevation() {
  return (
    <div className="h-[458px] relative shrink-0 w-[1372px]" data-name="elevation">
      <div className="absolute h-[458px] left-0 top-0 w-[1372px]" data-name="elevation">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgElevation} />
      </div>
    </div>
  );
}

function ElevationOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0" data-name="Elevation_overview">
      <ButtonText />
      <Elevation />
    </div>
  );
}

function Elevation1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-0 pt-[180px] px-0 relative shrink-0 w-full" data-name="Elevation">
      <ElevationOverview />
    </div>
  );
}

export default function Foundations() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Foundations">
      <div id="color-system" className="w-full"><ColorSystem /></div>
      <div id="typography" className="w-full"><Typography /></div>
      <div id="spacing" className="w-full"><Spacing /></div>
      <div id="iconography" className="w-full"><Iconography /></div>
      <div id="grid-system" className="w-full"><GridSystem /></div>
      <div id="elevation" className="w-full"><Elevation1 /></div>
    </div>
  );
}