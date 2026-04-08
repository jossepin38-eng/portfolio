import imgMain from "figma:asset/7ebf63d441c7320472fdbc3b4ca52469b0b45018.png";
import imgMoWel01 from "figma:asset/e1af68c77435dc3221b83e87a126366ba7774740.png";
import imgMoWel02 from "figma:asset/9c08d226e19855de21fa67615be7a952d1ef2f27.png";
import imgPc from "figma:asset/49fe34d5d089c9772aa04650b623d3a40613c245.png";
import imgBgImg03 from "figma:asset/759732b31f9a7d29bb12b96181e917120e62a87d.png";
import img1 from "figma:asset/b1b5eb6c024f4bea6e0efe245239e30df411bf83.png";
import img2 from "figma:asset/a09f2ad4d4f9ce22b8e25b5289b619cd782b66de.png";
import img3 from "figma:asset/3b596e859bfd3f9f3a738025aa7d2f4b04fb4ece.png";
import img4 from "figma:asset/41e4a020825322d71853e1996a81e5acd42c4366.png";
import img5 from "figma:asset/8031683abd5bf7bd88cccfdc90ae754a0dc707d1.png";
import img6 from "figma:asset/3549d68e1d9b3a5597ed39f1e648ec1dd7e532c1.png";

import Welstory02 from "./Welstory02/Welstory02";
import Welstory03 from "./Welstory03/Welstory03";

function WelPc() {
  return (
    <div className="h-[936px] relative shrink-0 w-[1438px]" data-name="wel_pc">
      <div className="absolute h-[966px] left-[-40px] top-[-40px] w-[1438px]" data-name="main">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMain} />
      </div>
      
    </div>
  );
}

function BgImg() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[210px] relative size-full" data-name="bg_img03">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] w-full h-[calc(100%-80px)] top-0 left-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 w-full h-[calc(100%-80px)] top-0 left-0" src={imgBgImg03} />
      </div>
      <WelPc />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[40px] py-0 relative shrink-0" data-name="text">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 적응형(Adaptive) UI 적용으로 다양한 디바이스 환경에서 최적의 사용자 경험 제공</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 동일하고 일관된 비주얼 시스템으로 브랜드 신뢰도 및 사용 편의성 향상</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 개인화 영역 강화를 통해 사용자 맞춤형 콘텐츠 제공 기능 확대</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 기존 대비 와이드한 레이아웃 설계로 상품 노출 범위를 확대하고 시각적 몰입도 개선</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">· 삼성 브랜드의 블루 계열에서 벗어나, 보다 유연하고 친근한 이미지로 컬러 개선</span>
        </li>
      </ul>
    </div>
  );
}

function Welstory() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start pb-[280px] pt-0 px-0 relative shrink-0 w-full" data-name="welstory_01">
      <BgImg />
      <Text />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="1">
      <div className="relative shrink-0 size-[90px]" data-name="icon01">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[13px] text-center text-white w-full">주문/결제</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="2">
      <div className="relative shrink-0 size-[90px]" data-name="icon02">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[13px] text-center text-white w-full">배송 관련</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="3">
      <div className="relative shrink-0 size-[90px]" data-name="icon03">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[13px] text-center text-white w-full">취소/교환/반품</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="4">
      <div className="relative shrink-0 size-[90px]" data-name="icon04">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[13px] text-center text-white w-full">적립금/쿠폰</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="icon01">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="5">
      <div className="relative shrink-0 size-[90px]" data-name="icon05">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[13px] text-center text-white w-full">회원/로그인</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="6">
      <div className="relative shrink-0 size-[90px]" data-name="icon06">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[13px] text-center text-white w-full">이벤트/기타</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="icon02">
      <Component4 />
      <Component5 />
    </div>
  );
}

function ColorChart() {
  return (
    <div className="relative shrink-0 w-full" data-name="color chart">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[80px] pt-[60px] px-[50px] relative w-full">
          <Icon1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="basis-0 bg-[#6C60FF] grow h-full min-h-px min-w-px relative shrink-0" data-name="icon">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-start pb-[210px] pt-[48px] px-[40px] relative size-full">
          <p className="font-['Inter:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[64px] text-nowrap text-white whitespace-pre font-bold">Icon</p>
          <ColorChart />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-0 pr-[40px] py-0 relative size-full">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[900px]">
            시각적 복잡도를 최소화하면서도 정보 전달력을 확보하기 위해 불필요한 면(fill)을 배제한 라인 스타일 아이콘을 사용하였습니다.
            <br aria-hidden="true" />
            라인 아이콘은 적응형 레이아웃 변화에도 유연하게 대응하며, 텍스트·카드·리스트 등 다양한 컴포넌트 안에서 가볍고 직관적인 시각적 언어를 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function Welstory1() {
  return (
    <div className="bg-white h-[1004px] relative shrink-0 w-full" data-name="welstory_02">
      <div className="size-full">
        <Welstory02 />
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="content-stretch flex items-start justify-center pl-0 pr-[24px] py-0 relative shrink-0" data-name="mobile">
      <div className="h-[870px] mr-[-24px] relative shrink-0 w-[480px]" data-name="mo_wel02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMoWel02} />
      </div>
    </div>
  );
}

function Welstory2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="welstory_03">
      <div className="flex flex-col items-center size-full">
        <Welstory03 />
      </div>
    </div>
  );
}

export function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents03">
      <Welstory />
      <Welstory1 />
      <Welstory2 />
    </div>
  );
}