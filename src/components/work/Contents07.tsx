import React from 'react';
import imgBgImg from "figma:asset/4597996b2f26d74a9137e7b2df76fe42f6fc0567.png";
import imgMobileImg from "figma:asset/f2cc6c8f98b941bcaf707e627a5ea6575b9f89e5.png";
import img01 from "figma:asset/f601edd1e58b657489f6996d25e470ae6ceabee8.png";
import img02 from "figma:asset/6aebb134dd0a03c086ba012e3de25eacb2cc100d.png";
import img03 from "figma:asset/ea267ef6fc1bfc6edf9fe4236a1b70b91429a142.png";
import img04 from "figma:asset/939c24d5674d32045cb0ee1e3a4f7917a6089fb5.png";

function BgImg() {
  return (
    <div className="basis-0 grow h-[1060px] min-h-px min-w-px relative shrink-0" data-name="bg_img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgBgImg} />
      </div>
      <div className="size-full">
        <div className="h-[1060px] w-full" />
      </div>
    </div>
  );
}

function MoImg() {
  return (
    <div className="absolute h-[1181px] left-[-273px] top-[193px] w-[881px]" data-name="mo_img">
      <div className="absolute h-[1181px] left-0 top-0 w-[881px]" data-name="mobile_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMobileImg} />
      </div>
    </div>
  );
}

function BgImg1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="bg_img">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
          <MoImg />
        </div>
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <BgImg />
      <BgImg1 />
    </div>
  );
}

function Text() {
  return (
    <div className="relative size-full" data-name="text">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end pb-0 pt-[320px] px-[40px] relative size-full">
          <div className="font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
            <p className="leading-[1.5] mb-0 whitespace-pre">
              <span className="text-[#ff3131]">{` *`}</span>
              <span className="text-[#727272]"> </span>
              <span className="text-[#ff3131]">2018 i-AWARDS 스마트 앱 어워즈 서비스 이노베이션 대상 수상</span>
            </p>
            <p className="leading-[1.5] mb-0 whitespace-pre">&nbsp;</p>
            <ul className="list-none pl-0 ml-0">
              <li className="mb-0 ms-[30px] pl-0 ml-0">
                <span className="leading-[1.5] text-[#0d0d0d]">
                  · One Screen, One Task 설계를 통해 사용자가 한 화면에서 필요한 정보를 직관적으로 인지하고,
                  <br aria-hidden="true" />
                  · 빠르게 과업을 수행할 수 있도록 집중도와 효율성 강화
                </span>
              </li>
              <li className="mb-0 ms-[30px] pl-0 ml-0">
                <span className="leading-[1.5] text-[#0d0d0d]">· 핵심 기능 중심의 UI 설계로 불필요한 정보는 배제하고 명확한 정보 전달에 집중</span>
              </li>
              <li className="ms-[30px] pl-0 ml-0">
                <span className="leading-[1.5] text-[#0d0d0d]">· 마이크로 인터랙션을 활용하여 앱 사용 경험의 몰입도와 재미 요소를 더함</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


function HanaMain() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start pb-[280px] pt-0 px-0 relative shrink-0 w-full" data-name="hana_main">
      <Bg />
      <Text />
    </div>
  );
}

function MoSub() {
  return (
    <div className="bg-[#008288] content-stretch flex items-center justify-center pl-0 pr-[48px] py-[180px] relative shrink-0 w-full" data-name="mo_sub">
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img01} />
      </div>
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img02} />
      </div>
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="03">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img03} />
      </div>
      <div className="h-[593px] mr-[-48px] relative shrink-0 w-[360px]" data-name="04">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img04} />
      </div>
    </div>
  );
}

function Sub() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="sub">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[40px] relative w-full">
          <MoSub />
        </div>
      </div>
    </div>
  );
}

export default function Contents07() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents07">
      <HanaMain />
      <Sub />
    </div>
  );
}
