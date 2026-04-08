import React from 'react';
import KbMainBg from '../../imports/KbMainBg';
import img1 from "figma:asset/720a01dc15a3b5ede741ec9e2b40f8e4542f8b94.png";
import img2 from "figma:asset/436bbd096c8e1a54d4c88be08b48d99dbcd5297d.png";
import img3 from "figma:asset/5e9f70f8af675fcd6dc5558bb938122e8c6ff497.png";
import img4 from "figma:asset/049a9204d34f9720f4bc42e20022af683b319303.png";
import img5 from "figma:asset/d771aa7a213a758795ef88da6a3de050840d4753.png";
import imgSubPc from "figma:asset/e69ed77098e258d712301fa292058ad4d76883e7.png";
import imgMoImg from "figma:asset/b8b40fa77ff38a7c190a68fdc6745b6c82e1e0b2.png";
import imgEsgMo01 from "figma:asset/70f1e60a894861d9652d79a844ba7d6030c8a3f4.png";
import imgEsgMo02 from "figma:asset/349969a678a92d4399e1e08e914e15da7e5ba29f.png";

function KbText() {
  return (
    <div className="content-stretch flex items-center justify-center px-[40px] py-0 relative shrink-0" data-name="text">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· KB그룹의 주요 경영 지표를 한눈에 파악할 수 있도록 정보 구조를 재정리하고 시각화 중심으로 재구성</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">· 사용자가 KB그룹의 연도별 변화를 직관적으로 비교할 수 있도록 그래프 + 숫자 + 의미를 부여하는 아이콘을 조합하여 스토리 기반의 데이터 경험을 설계</span>
        </li>
      </ul>
    </div>
  );
}

function Xeogen() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start pb-[280px] pt-0 px-0 relative shrink-0 w-full" data-name="xeogen_01">
      <KbMainBg />
      <KbText />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="icon01">
      <div className="h-[75px] relative shrink-0 w-[132px]" data-name="계열사수 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">계열사 수</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="icon02">
      <div className="h-[74px] relative shrink-0 w-[132px]" data-name="글로벌네트워크 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">글로벌 네크워크 수</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="icon03">
      <div className="h-[76px] relative shrink-0 w-[144px]" data-name="당기순이익 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">당기순이익</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="icon04">
      <div className="h-[75px] relative shrink-0 w-[132px]" data-name="본점 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">본점 및 지점수</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="icon05">
      <div className="h-[75px] relative shrink-0 w-[132px]" data-name="임직원수 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img5} />
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">임직원수</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f9f9f9] relative shrink-0 w-full" data-name="icon">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[180px] py-[120px] relative w-full">
          <Icon1 />
          <Icon2 />
          <Icon3 />
          <Icon4 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function IconImg() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end justify-center relative shrink-0 w-full" data-name="icon_img">
      <Icon />
      <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[900px]">
        <p className="mb-0">
          데이터 항목별 의미를 더욱 직관적으로 전달하기 위해 각 지표를 미니멀한 라인 스타일 아이콘으로 표현하였습니다.
          <br aria-hidden="true" />
          {`여기에 KB금융의 브랜드 컬러인 Yellow를 아이콘의 포인트 요소로 제한적으로 적용하여, 브랜드 아이덴티티의 `}
        </p>
        <p>일관성을 유지하면서도 데이터 포인트의 시각적 강조와 탐색 흐름을 자연스럽게 유도하도록 설계하였습니다.</p>
      </div>
    </div>
  );
}

function Xeogen1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="xeogen_02">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[40px] py-[210px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[64px] text-nowrap whitespace-pre font-bold">Icon</p>
          <IconImg />
        </div>
      </div>
    </div>
  );
}

function PcSub() {
  return (
    <div className="h-[1087px] relative shrink-0 w-[1408px]" data-name="pc_sub">
      <div className="absolute h-[952px] left-[-30px] top-0 w-[1400px]" data-name="sub_pc">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubPc} />
      </div>
      <div className="absolute h-[870px] left-[969px] top-[136px] w-[480px]" data-name="mo_img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMoImg} />
        </div>
      </div>
      <div className="absolute font-['Pretendard:Regular',sans-serif] leading-[0] left-0 not-italic text-[#0d0d0d] text-[20px] text-nowrap top-[958px]">
        <ul className="list-none m-0 p-0">
          <li className="relative pl-5">
            <span className="leading-[1.5]">· 현대트랜시스의 ESG 핵심 영역을 이미지·텍스트·그래프·아이콘을 조합하여 명확하고 미니멀한 구조로 시각화</span>
          </li>
          <li className="relative pl-5">
            <span class="leading-[1.5]">·</span> 각 지표는 차갑지 않은 톤으로 정리해 접근성을 높였으며, 강조가 필요한 섹션에는 현대트랜시스 CI 블루의 다크·라이트 조합을 적용해 
            브랜드 일관성과 정보의 우선순위를 동시에 확보
          </li>
        </ul>
        </div>
    </div>
  );
}

function Xeogen2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="xeogen_03">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center px-[40px] py-[280px] relative w-full">
          <p className="font-['Noto Sans KR:Bold',sans-serif] h-[48px] leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[48px] w-[1344px] font-bold">현대트랜시스 - ESG</p>
          <PcSub />
        </div>
      </div>
    </div>
  );
}

function MobileImg() {
  return (
    <div className="basis-0 bg-[#0d0d0d] grow min-h-px min-w-px relative shrink-0" data-name="mobile_img">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[48px] items-start justify-center p-[40px] relative w-full">
          <div className="h-[2286px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[360px]" data-name="esg_mo_01">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[116.89%] left-0 max-w-none top-0 w-full" src={imgEsgMo01} />
            </div>
          </div>
          <div className="h-[1886px] relative shrink-0 w-[360px]" data-name="esg_mo_02">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[132.4%] left-0 max-w-none top-0 w-full" src={imgEsgMo02} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="box">
      <div className="flex flex-row items-end size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Xeogen3() {
  return (
    <div className="bg-white content-stretch flex gap-[40px] items-start pb-[40px] pt-0 px-[40px] relative shrink-0 w-[1920px]" data-name="xeogen_04">
      <MobileImg />
      <Box />
    </div>
  );
}

export default function Contents04() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents04">
      <Xeogen />
      <Xeogen1 />
      <Xeogen2 />
      <Xeogen3 />
    </div>
  );
}
