import React from 'react';

// Helper for Work02 (Samsung)
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

export function Hover2024() {
    return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] uppercase">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">Samsung stock</p>
        <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] w-full">삼성증권 운영(UI 신규 페이지 구축 및 고도화, 이벤트 및 monino 프로모션 기획·설계) / 디자인 PL</p>
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[120px] text-nowrap tracking-[-6px] uppercase whitespace-pre">2024</p>
    </div>
    );
}

export function Hover2023() {
    return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
       <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] uppercase" data-name="body">
         <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">KONAI MOBILITY</p>
         <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] w-full">코나아이 모빌리티 승객앱 동백택시 고도화 및 신규페이지 구축 / 디자인 PL(참여도 60%)</p>
       </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[120px] text-nowrap tracking-[-6px] uppercase whitespace-pre">2023</p>
    </div>
    );
}

export function Hover2022() {
    return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-end pb-[8px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
       <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] uppercase" data-name="body">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] w-full">WELSTory mall</p>
        <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`웰스토리몰 적응형 웹사이트 리뉴얼 구축  / 디자인 PL(참여도 50%)`}</p>
       </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[120px] text-nowrap tracking-[-6px] uppercase whitespace-pre">2022</p>
    </div>
    );
}
