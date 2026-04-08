import React from 'react';

function AboutContent() {
  // Restoring the exact layout from the card snippet
  return (
    <div className="relative w-[510px] h-[646px] bg-white shadow-none rounded-none" data-name="about01">
      {/* Title "ABOUT" */}
      <div className="absolute left-[46px] top-[24px] z-10" data-name="about_title">
         <div className="absolute bg-[#c7c7c7] h-[12px] left-[-5px] top-[30px] w-[140px] -z-10" />
         <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic text-[#0d0d0d] text-[38px] text-nowrap tracking-[-1.14px] whitespace-pre">ABOUT</p>
      </div>

      {/* Body Text Block */}
      <div className="absolute font-['Pretendard:Regular',sans-serif] leading-[1.5] left-[calc(50%-210.5px)] not-italic text-[#0d0d0d] text-[16px] top-[334px] w-[420px]" data-name="text_block">
        <p className="mb-0">
          23년 동안 다양한 산업과 플랫폼에서 UI 디자인을 중심으로 사용자 경험을 구축해왔습니다.
          <br aria-hidden="true" />
          {`프로젝트마다 복잡한 정보 구조를 단순하게 정리하고, `}
        </p>
        <p className="mb-0">브랜드의 시각적 일관성을 설계하는데 집중했습니다.</p>
        <p className="mb-0">
          <br aria-hidden="true" />
          최근에는 AI와 데이터 기반 도구를 활용해 디자인 프로세스를 효율화하고, 더 나은 사용자 흐름과 인터페이스를 탐구하고 있습니다.
        </p>
        <p className="mb-0">
          <br aria-hidden="true" />
          {`빠르게 발전하는 기술 속에서도, 디자인의 본질은 `}
        </p>
        <p className="whitespace-pre-wrap">
          여전히 ‘사용자의 이해를 돕는 언어’라고 생각합니다.
          <br aria-hidden="true" />
          {`그래서 변화하는 도구를 두려워하기보다,  그 안에서 새로운 디자인 언어를 발견하려는 태도로 일하고 있습니다.`}
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  // Section wrapper: Full screen height, transparent background to show Home underneath/parallax if needed.
  // Centers the AboutContent card.
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center pointer-events-none" data-name="about">
       <div className="pointer-events-auto">
          <AboutContent />
       </div>
    </div>
  );
}
