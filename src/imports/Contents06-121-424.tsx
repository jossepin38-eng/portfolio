import imgBgImg05 from "figma:asset/326575d16a1d91b9711c6740346eb7d470be1aa3.png";
import imgImage02 from "figma:asset/0692fb88d1e881a21f90db28ff3d7947936440dd.png";
import imgImage01 from "figma:asset/d63e853e2575cf4f58388ebd518f299a31c2bd56.png";
import imgPcU0101001 from "figma:asset/fd19a588ff98811e5e41dabbb61c61cf092741ab.png";
import imgClick01 from "figma:asset/f26eb591b8ee3348ff39d181808b1fef1df22b7a.png";
import imgClick02 from "figma:asset/56d67bc28e7a01fb3b44bc6dfbaf05d5a511fadb.png";
import imgClick03 from "figma:asset/7e701f0e7ea9b5530f0fd90116d7f0e109b12b13.png";

function BgImg() {
  return (
    <div className="h-[1060px] mb-[-630px] relative shrink-0 w-full" data-name="bg_img05">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgBgImg05} />
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute bg-neutral-100 h-[1739.5px] left-0 top-[1739.5px] w-[1473px]" data-name="img02">
      <div className="absolute h-[1739.5px] left-0 top-0 w-[1473px]" data-name="Image02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage02} />
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[1739.5px] left-0 top-0 w-[1473px]" data-name="img01">
      <div className="absolute h-[1739.5px] left-0 top-0 w-[1473px]" data-name="Image01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage01} />
      </div>
    </div>
  );
}

function MainImg() {
  return (
    <div className="h-[3479px] mb-[-630px] relative shrink-0 w-[1473px]" data-name="main_img">
      <Img1 />
      <Img />
      <ul className="[white-space-collapse:collapse] absolute block font-['Pretendard:Regular',sans-serif] leading-[0] left-[717.5px] not-italic text-[#0d0d0d] text-[20px] text-nowrap top-[3326px]">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">다양한 디바이스에 최적화된 UI를 제공하는 반응형 웹 디자인 구현</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">시승 신청부터 구매까지 직관적인 플로우로 사용자 편의성 강화</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">360도 이미지로 실제 차량을 보는 듯한 몰입감 제공</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">아이콘과 텍스트를 활용해 핵심정보를 직관적이고 명확하게 전달</span>
        </li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[4089px] items-center pb-[630px] pt-0 px-0 relative shrink-0 w-full" data-name="main">
      <BgImg />
      <MainImg />
    </div>
  );
}

function BgOrange() {
  return <div className="basis-0 bg-[#e63312] grow h-[1192px] min-h-px min-w-px shrink-0" data-name="bg_orange" />;
}

function BgWhite() {
  return <div className="basis-0 bg-white grow h-[1192px] min-h-px min-w-px shrink-0" data-name="bg_white" />;
}

function SubImg() {
  return (
    <div className="absolute h-[832px] left-[320px] rounded-[40px] top-[180px] w-[1280px]" data-name="sub_img">
      <div className="h-[832px] overflow-clip relative rounded-[inherit] w-[1280px]">
        <div className="absolute h-[2357px] left-1/2 top-0 translate-x-[-50%] w-[1280px]" data-name="pc_U01_01_001">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPcU0101001} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0d0d0d] border-[6px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function PcSub() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="pc_sub">
      <BgOrange />
      <BgWhite />
      <SubImg />
    </div>
  );
}

function MoClick() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center pl-0 pr-[48px] py-[180px] relative shrink-0 w-full" data-name="mo_click">
      <div className="h-[870px] mr-[-48px] relative shrink-0 w-[480px]" data-name="click01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClick01} />
      </div>
      <div className="h-[870px] mr-[-48px] relative shrink-0 w-[480px]" data-name="click02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClick02} />
      </div>
      <div className="h-[870px] mr-[-48px] relative shrink-0 w-[480px]" data-name="click03">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClick03} />
      </div>
    </div>
  );
}

function SubMobile() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="sub_mobile">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <MoClick />
        </div>
      </div>
    </div>
  );
}

export default function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents06">
      <Main />
      <PcSub />
      <SubMobile />
    </div>
  );
}