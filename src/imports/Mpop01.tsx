import svgPaths from "./svg-3vro77kr96";
import imgBgImg01 from "figma:asset/d27ba62c860310a45d6f6d3324f706c55b0c9c6a.png";
import img22 from "figma:asset/7e4b5cbd1a4634be37ec7430f5fc217ad710e2e4.png";
import img031 from "figma:asset/6c496ea1934a45fa45c85390097fd9a2d9770ab3.png";
import img041 from "figma:asset/8eaa2b371a298d1d2edff0b9b86a34cd1f436d06.png";
import imgMo01 from "figma:asset/ebef84975d86ccd7196ac2c1f35e83277b8d09d1.png";
import { img021 } from "./svg-wwuty";

function BgImg() {
  return (
    <div className="h-[860px] mb-[-400px] relative shrink-0 w-full" data-name="bg_img01">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-40 size-full" src={imgBgImg01} />
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="img02">
      <div className="[grid-area:1_/_1] h-[640px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[56px_136px] mask-size-[248px_340px] ml-[-56px] mt-[-136px] relative w-[360px]" data-name="로보굴링_서비스소개 02 1" style={{ maskImage: `url('${img021}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img22} />
      </div>
    </div>
  );
}

function Img1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="img03">
      <div className="[grid-area:1_/_1] h-[640px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[57px_136px] mask-size-[248px_340px] ml-[-57px] mt-[-136px] relative w-[360px]" data-name="로보굴링_서비스소개 03 1" style={{ maskImage: `url('${img021}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img031} />
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="img04">
      <div className="[grid-area:1_/_1] h-[642px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[57px_137px] mask-size-[248px_340px] ml-[-57px] mt-[-137px] relative w-[361px]" data-name="로보굴링_서비스소개 04 1" style={{ maskImage: `url('${img021}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img041} />
      </div>
    </div>
  );
}

function MoImg() {
  return (
    <div className="content-stretch flex gap-[24px] items-center leading-[0] relative shrink-0" data-name="mo_img">
      <Img />
      <Img1 />
      <Img2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-0 pt-[48px] px-[80px] relative shrink-0" data-name="text">
      <div className="h-0 relative shrink-0 w-[100px]">
        <div className="absolute bottom-[-2.67px] left-0 right-[-2.67%] top-[-2.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 6">
            <path d={svgPaths.p14c26280} fill="var(--stroke-0, #0D0D0D)" id="Arrow 1" />
          </svg>
        </div>
      </div>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">mPOP 로보굴링 연금서비스</p>
    </div>
  );
}

function Pension1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-124px] pb-0 pt-[64px] px-0 relative shrink-0" data-name="pension02">
      <MoImg />
      <Text />
    </div>
  );
}

function MpopImg() {
  return (
    <div className="content-stretch flex items-center justify-center pl-0 pr-[124px] py-0 relative shrink-0" data-name="mpop_img">
      <div className="h-[806px] mr-[-124px] relative shrink-0 w-[480px]" data-name="mo_01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMo01} />
      </div>
      <Pension1 />
    </div>
  );
}

function Pension() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start mb-[-400px] pb-[120px] pt-0 px-[360px] relative shrink-0 w-[1920px]" data-name="pension01">
      <MpopImg />
      <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">간결한 텍스트와 직관적인 구성으로 정보 전달력 강화</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">볼륨감 있는 일러스트와 이모지를 활용해 사용자 친화적인 분위기 형성</span>
        </li>
      </ul>
    </div>
  );
}

export default function Mpop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[400px] pt-0 px-0 relative size-full" data-name="mpop01">
      <BgImg />
      <Pension />
    </div>
  );
}