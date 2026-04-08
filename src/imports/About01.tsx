function BodyText() {
  return (
    <div className="absolute bg-white h-[646px] left-1/2 overflow-clip rounded-[8px] top-0 translate-x-[-50%] w-[510px]" data-name="body_text">
      <div className="absolute font-['Pretendard:Regular',sans-serif] leading-[1.5] left-[calc(50%-210.5px)] not-italic text-[#0d0d0d] text-[16px] top-[334px] w-[420px]">
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

export default function About() {
  return (
    <div className="relative size-full" data-name="about01">
      <BodyText />
      <div className="absolute bg-[#c7c7c7] h-[12px] left-[41px] top-[54px] w-[140px]" />
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[normal] left-[46px] not-italic text-[#0d0d0d] text-[38px] text-nowrap top-[24px] tracking-[-1.14px] whitespace-pre">ABOUT</p>
    </div>
  );
}