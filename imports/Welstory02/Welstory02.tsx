import img1 from "figma:asset/b1b5eb6c024f4bea6e0efe245239e30df411bf83.png";
import img2 from "figma:asset/a09f2ad4d4f9ce22b8e25b5289b619cd782b66de.png";
import img3 from "figma:asset/3b596e859bfd3f9f3a738025aa7d2f4b04fb4ece.png";
import img4 from "figma:asset/41e4a020825322d71853e1996a81e5acd42c4366.png";
import img5 from "figma:asset/8031683abd5bf7bd88cccfdc90ae754a0dc707d1.png";
import img6 from "figma:asset/3549d68e1d9b3a5597ed39f1e648ec1dd7e532c1.png";
import img7 from "figma:asset/c713dfc44828b6fbab7e183eb0909852c111d330.png";
import img8 from "figma:asset/06acd54aea590ee10e12bad688f39b0e669e5351.png";
import img9 from "figma:asset/7b4ba616d5479bdcd052689de7491b6f40744f5c.png";
import img10 from "figma:asset/ca4180755f848af6d4bb0fcd0862c2f790ed7d55.png";
import img11 from "figma:asset/9196366f2550f3316e2026e590267be1ed4d5ea7.png";

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="1">
      <div className="relative shrink-0 size-[90px]" data-name="1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">주문/결제</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="2">
      <div className="relative shrink-0 size-[90px]" data-name="2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">배송 관련</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="3">
      <div className="relative shrink-0 size-[90px]" data-name="3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">취소/교환/반품</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="4">
      <div className="relative shrink-0 size-[90px]" data-name="4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">적립금/쿠폰</p>
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
      <div className="relative shrink-0 size-[90px]" data-name="5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">회원/로그인</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="6">
      <div className="relative shrink-0 size-[90px]" data-name="6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">이벤트/기타</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="7">
      <div className="relative shrink-0 size-[90px]" data-name="7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
      </div>
      <div className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white w-[79px]">
        <p className="leading-[1.2] mb-0">세금계산서/</p>
        <p className="leading-[1.2]">증빙서류</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="8">
      <div className="relative shrink-0 size-[90px]" data-name="8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">상품 문의</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="icon02">
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="9">
      <div className="relative shrink-0 size-[90px]" data-name="9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">사이트 이용</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="10">
      <div className="relative shrink-0 size-[90px]" data-name="10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img10} />
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[13px] text-center text-white w-[min-content]">모바일</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[90px]" data-name="11">
      <div className="relative shrink-0 size-[90px]" data-name="11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11} />
      </div>
      <div className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white w-[79px]">
        <p className="leading-[1.2] mb-0">멤버십</p>
        <p className="leading-[1.2]">(회원등급제)</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="icon03">
      <Component8 />
      <Component9 />
      <Component10 />
    </div>
  );
}

function ColorChart() {
  return (
    <div className="relative shrink-0 w-full" data-name="color chart">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[80px] pt-[60px] px-[50px] relative w-full">
        <Icon1 />
        <Icon2 />
        <Icon3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#6c60ff] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="icon">
      <div className="content-stretch flex flex-col gap-[60px] items-start pb-[210px] pt-[48px] px-[40px] relative size-full">
        <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[64px] text-white whitespace-nowrap">Icon</p>
        <ColorChart />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pr-[40px] relative size-full">
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

export default function Welstory() {
  return (
    <div className="bg-white content-stretch flex gap-[40px] items-start px-[40px] relative size-full" data-name="welstory_02">
      <Icon />
      <Text />
    </div>
  );
}