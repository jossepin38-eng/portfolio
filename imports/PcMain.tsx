import imgBgImg04 from "figma:asset/80cb37ba7efc42fcb3955ce2cf2f4721b2e30d20.png";
import imgImage02 from "figma:asset/93237779d72cae68a6cafef319cbe6eff86b3a91.png";
import imgImage01 from "figma:asset/80d915a7ab6f1aa7c56b06a2b391ea8a717e60f3.png";
import imgMoImg02 from "figma:asset/bd679539e0234dc65f1250fb61da7f8daa66e803.png";
import imgMoImg01 from "figma:asset/6bc762ae2e85bc3487283b78d0a573bfb6535e9e.png";

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

function Img1() {
  return (
    <div className="absolute h-[1195.5px] left-0 top-[1195.5px] w-[1400px]" data-name="img02">
      <div className="absolute h-[1195.5px] left-0 top-0 w-[1400px]" data-name="Image02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage02} />
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[1195.5px] left-0 top-0 w-[1400px]" data-name="img01">
      <div className="absolute h-[1195.5px] left-0 top-0 w-[1400px]" data-name="Image01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage01} />
      </div>
    </div>
  );
}

function PcMainImg() {
  return (
    <div className="absolute h-[2391px] left-0 top-0 w-[1400px]" data-name="pc_main_img">
      <Img1 />
      <Img />
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
          <span className="leading-[1.5]">반응형 웹 설계를 통해 다양한 디바이스에서 최적화된 학습 환경 제공</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">공공기관의 틀을 벗어난 트렌디하고 현대적인 UI 구현</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">학습자 선호 분석을 기반으로 한 맞춤형 교육 콘텐츠 제공</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">다이어그램을 활용해 학습 시간량을 직관적으로 시각화</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">학습 시간에 따라 포인트를 제공하여 참여 동기 유도</span>
        </li>
      </ul>
    </div>
  );
}

export default function PcMain() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[860px] pt-0 px-0 relative size-full" data-name="pc_main">
      <BgImg />
      <Pc />
    </div>
  );
}