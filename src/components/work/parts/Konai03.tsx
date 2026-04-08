import React from 'react';
import imgIc01 from "figma:asset/18869ce771380e479cffeb76833d017417d2aed4.png";
import imgIc02 from "figma:asset/21076d91ec15574defdd79cf6b412b3a88a65731.png";
import imgIc03 from "figma:asset/da286d6ad459026232f8f1c591a0b664b735146d.png";
import imgIc04 from "figma:asset/83d10caae8fb4d1cedd73c95b1fb6310b6655232.png";
import imgIc05 from "figma:asset/604fd6bafae780c20d05dfb0bb4785db5d3868d1.png";
import imgIc06 from "figma:asset/a1bbc8063690e5c3e3bf3635f4225743097bb103.png";
import imgIc07 from "figma:asset/9ce3338d377bd2f07e1596ad4d4458b2578908e5.png";
import imgIc08 from "figma:asset/d1935d8c2f220098acf73b08b22fc0b8fb2e75bc.png";
import imgIc09 from "figma:asset/83b0bc0663d793753fa7fd8ad5f853764dcfa199.png";
import imgIc10 from "figma:asset/7b7143b3ac3ec748ea20620596c576226d23861b.png";

function Ic() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic01">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc01} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="최적경로">
      <Ic />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">최적경로</p>
    </div>
  );
}

function Ic1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic02">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc02} />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="안전한운행">
      <Ic1 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">안전한 운행</p>
    </div>
  );
}

function Ic2() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic03">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic03">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc03} />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="쾌적한내부">
      <Ic2 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">쾌적한 내부</p>
    </div>
  );
}

function Ic3() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic04">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic04">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc04} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="조용한운행">
      <Ic3 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">조용한 운행</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0" data-name="icon01">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Ic4() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic05">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic05">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc05} />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="즐거운운행">
      <Ic4 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">즐거운 운행</p>
    </div>
  );
}

function Ic5() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic06">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic06">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc06} />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="감동서비스">
      <Ic5 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">감동 서비스</p>
    </div>
  );
}

function Ic6() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic07">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic07">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc07} />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="친절한기사님">
      <Ic6 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">친절한 기사님</p>
    </div>
  );
}

function Ic7() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic08">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic08">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc08} />
      </div>
    </div>
  );
}

function Like() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0" data-name="like">
      <Ic7 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white w-[80px]">Like</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0" data-name="icon02">
      <Component4 />
      <Component5 />
      <Component6 />
      <Like />
    </div>
  );
}

function Ic8() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic09">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic09">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc09} />
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[80px]" data-name="좋은향기">
      <Ic8 />
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">좋은 향기</p>
    </div>
  );
}

function Ic9() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="ic10">
      <div className="absolute left-0 size-[80px] top-0" data-name="ic10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIc10} />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[134px] items-center relative shrink-0 w-[82px]" data-name="기사님">
      <Ic9 />
      <div className="font-['Pretendard:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-center text-white w-[min-content]">
        <p className="mb-0">{`또 만나고 싶은 `}</p>
        <p>기사님</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[242px]" data-name="icon03">
      <Component7 />
      <Component8 />
    </div>
  );
}

function KonaiIcon() {
  return (
    <div className="basis-0 bg-[#702ffa] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="konai_icon">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-start pb-[210px] pt-[48px] px-[40px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[64px] text-nowrap text-white whitespace-pre font-bold">Icon</p>
          <Icon />
          <Icon1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pb-[40px] pt-0 px-[40px] relative size-full">
          <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[840px]">
            <p className="mb-0">{`기사가 승객으로부터 받는 평가 요소를 배지 형태로 시각화하여 자신의 서비스 품질을 더 직관적으로 `}</p>
            <p className="mb-0">
              확인할 수 있도록 합니다.
              <br aria-hidden="true" />
              {`배지는 친근한 느낌의 아이콘과 간단한 텍스트를 조합하여 고령 사용자도 쉽게 구분할 수 있도록 `}
            </p>
            <p className="mb-0">{`구성하였고, 아직 획득하지 못한 배지는 블라인드 처리하여 자연스럽게 획득 동기를 유도하도록 `}</p>
            <p>설계하였습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Konai() {
  return (
    <div className="bg-white relative size-full" data-name="konai_03">
      <div className="size-full">
        <div className="content-stretch flex gap-[40px] items-start px-[40px] py-0 relative size-full">
          <KonaiIcon />
          <Text />
        </div>
      </div>
    </div>
  );
}
