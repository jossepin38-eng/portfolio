import React from 'react';
import MomImg from '../../imports/MomImg02';
import imgBgImg04 from "figma:asset/80cb37ba7efc42fcb3955ce2cf2f4721b2e30d20.png";
import imgImage01 from "figma:asset/80d915a7ab6f1aa7c56b06a2b391ea8a717e60f3.png";
import imgMoImg02 from "figma:asset/bd679539e0234dc65f1250fb61da7f8daa66e803.png";
import imgMoImg01 from "figma:asset/6bc762ae2e85bc3487283b78d0a573bfb6535e9e.png";
import imgSubMain from "figma:asset/8419f2ab5fd78d078115468c3b8595c6c69e0e03.png";
import imgMoSub from "figma:asset/08689621b8f0e50045c9a39098e665c2428e71d8.png";

function BgImg() {
  return (
    <div className="h-[1060px] mb-[-580px] relative shrink-0 w-full" data-name="bg_img04">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgBgImg04} />
      </div>
    </div>
  );
}

function PcMainImg() {
  return (
    <div className="absolute h-[2391px] left-0 top-0 w-[1400px]" data-name="pc_main_img">
      <div className="absolute h-[1195.5px] left-0 top-[1195.5px] w-[1400px]" data-name="Image02">
        <MomImg />
      </div>
      <div className="absolute h-[1195.5px] left-0 top-0 w-[1400px]" data-name="Image01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage01} />
      </div>
    </div>
  );
}

function MoMainImg() {
  return (
    <div className="absolute h-[2552px] left-[1036px] top-[211px] w-[480px]" data-name="mo_main_img">
      <div className="absolute h-[1276px] left-0 top-[1276px] w-[480px]" data-name="mo_img02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMoImg02} />
      </div>
      <div className="absolute h-[1276px] left-0 top-0 w-[480px]" data-name="mo_img01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMoImg01} />
      </div>
    </div>
  );
}

function Pc() {
  return (
    <div className="h-[2763px] mb-[-580px] relative shrink-0 w-[1468px]" data-name="pc_상세">
      <PcMainImg />
      <MoMainImg />
      <ul className="[white-space-collapse:collapse] absolute block font-['Pretendard:Regular',sans-serif] leading-[0] left-0 not-italic text-[#0d0d0d] text-[20px] text-nowrap top-[2482px]">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 반응형 웹 설계를 통해 다양한 디바이스에서 최적화된 학습 환경 제공</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 공공기관의 틀을 벗어난 트렌디하고 현대적인 UI 구현</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 학습자 선호 분석을 기반으로 한 맞춤형 교육 콘텐츠 제공</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 다이어그램을 활용해 학습 시간량을 직관적으로 시각화</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">· 학습 시간에 따라 포인트를 제공하여 참여 동기 유도</span>
        </li>
      </ul>
    </div>
  );
}

function PcMain() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[860px] pt-0 px-0 relative size-full" data-name="pc_main">
      <BgImg />
      <Pc />
    </div>
  );
}

function SubPage() {
  return (
    <div className="h-[936px] relative shrink-0 w-[1408px]" data-name="sub-page">
      <div className="absolute h-[952px] left-[-40px] top-[-10px] w-[1400px]" data-name="sub_main">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubMain} />
      </div>
      <div className="absolute h-[870px] left-[1048px] top-[156px] w-[480px]" data-name="mo_sub">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMoSub} />
      </div>
    </div>
  );
}

function Xeogen() {
  return (
    <div className="bg-[#0d0d0d] relative shrink-0 w-full" data-name="xeogen_03">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[40px] py-[180px] relative w-full">
          <SubPage />
        </div>
      </div>
    </div>
  );
}

function PcSub() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="pc_sub">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[40px] pt-0 px-[40px] relative w-full">
          <Xeogen />
        </div>
      </div>
    </div>
  );
}

export default function Contents05() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents05">
      <PcMain />
      <PcSub />
    </div>
  );
}
