import svgPaths from "./svg-cql9fonv3n";
import imgImg01 from "figma:asset/607ac6783f208ad36a16345a2914576441785785.png";
import imgImg02 from "figma:asset/1bc20b8780636f64a36138521bcfddf85b57b10e.png";
import imgImg03 from "figma:asset/c129df9961f6f42c21ae56a786e91af718bf6e7c.png";
import imgImg04 from "figma:asset/442e259efc90f82e2962fb91a3847a174fb764d2.png";
import imgImg05 from "figma:asset/99a53715ff62ffbff5205aebe683491223e54216.png";
import imgImg06 from "figma:asset/d5bc38d9b4ebfd90ac1df9f7eae62a4f54f270c6.png";
import imgImg07 from "figma:asset/417cf5d7ec7203e1465a0da80523269dd00de839.png";
import imgBgImg02 from "figma:asset/680599cd0ea1e064fae4de825f0fa4576b1f5d5c.png";
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
import img1 from "figma:asset/988a9dede952d0d4f063eaa152ba5fe2d9ae18d7.png";
import img12 from "figma:asset/f25c361cb6a892e5781d1898252b735c73b22fca.png";
import imgDriverAppOptions21 from "figma:asset/de8825ad01c41b84907c206a90d2c05b73258e8e.png";
import imgDriverAppOptions411 from "figma:asset/21192bcca109459f4822c6e8df6a46eeffee8393.png";

function UserApp() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[40px] pl-0 pr-[48px] pt-[80px] relative shrink-0 w-[1296px]" data-name="user_app01">
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="img01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg01} />
      </div>
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="img02">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg02} />
      </div>
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="img03">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg03} />
      </div>
      <div className="h-[553px] mr-[-48px] relative shrink-0 w-[360px]" data-name="img04">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg04} />
      </div>
    </div>
  );
}

function UserApp1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0" data-name="user_app02">
      <div className="h-[553px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[300px]" data-name="img05">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg05} />
      </div>
      <div className="h-[678px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[300px]" data-name="img06">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg06} />
      </div>
      <div className="h-[706px] relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[300px]" data-name="img07">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg07} />
      </div>
    </div>
  );
}

function BgImg() {
  return (
 <div className="relative w-full overflow-hidden bg-black py-[120px]">
      <style>
        {`
          @keyframes fade-loop {
            0% { opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
          .video-fade-loop {
            animation: fade-loop 8s ease-in-out infinite;
          }
        `}
      </style>

  {/* 영상 전용 레이어 */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <video
      src="https://cdn.jsdelivr.net/gh/jossepin38-eng/assets/car_Y.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="
        w-full h-full object-cover
        blur-[2px] brightness-75 scale-105
        video-fade-loop
      "
    />
  </div>

  {/* 어두운 오버레이 */}
  <div
    className="
      absolute inset-0 z-10
      bg-gradient-to-b
      from-black/85
      via-black/70
      to-black/90
    "
  />

  {/* 텍스트 / 콘텐츠 (절대 영향 안 받음) */}
  <div className="relative z-20 flex flex-col items-center">
    <p className="font-['Noto Sans KR:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffffff] text-[48px] w-[1242px] font-bold">동백택시 - 승객앱</p>
   

    <div className="mt-10 flex flex-col items-center gap-8 w-full">
      <UserApp />
      <UserApp1 />
    </div>
  </div>

</div>

  );
}





function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[40px] py-0 relative shrink-0" data-name="text">
      <ul className="[white-space-collapse:collapse] block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-nowrap">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 친근하고 위트 있는 이미지 및 아이콘 활용으로 사용자 접근성과 시각적 즐거움을 높임</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 브랜드 컬러 변경을 통해 브랜드 아이덴티티를 강화하고 시각적 일관성 확보</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.5]">· 가입 프로세스 간소화를 통해 초기 사용자뿐만 아니라 기존 사용자의 이용 흐름까지 개선</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.5]">· 결제수단과 혜택을 한 화면에 통합하여 결제 단계를 단축하고 사용자 경험을 향상</span>
        </li>
      </ul>
    </div>
  );
}

export function Konai() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="konai_01">
      <BgImg />
      <Text />
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[85px] relative shrink-0 w-full" data-name="arrow">
      <div className="absolute h-[73px] left-[663px] top-[12px] w-[48px]">
        <div className="absolute bottom-[-0.68%] left-[-7.67%] right-0 top-[-0.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 74">
            <path d={svgPaths.p3db89400} fill="var(--stroke-0, #0D0D0D)" id="Vector 1" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] left-[784px] not-italic text-[#0d0d0d] text-[20px] text-center text-nowrap top-[14px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.5] whitespace-pre">Primary Color</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-[#f6f2ff] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="100">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#F6F2FF</p>
      </div>
    </div>
  );
}

function ColorChip() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component9 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 100</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-[#eae0fe] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="150">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#EAE0FE</p>
      </div>
    </div>
  );
}

function ColorChip1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component10 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 150</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[#c6acfd] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="200">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#C6ACFD</p>
      </div>
    </div>
  );
}

function ColorChip2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component11 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 200</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#a982fc] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="300">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">#A982FC</p>
      </div>
    </div>
  );
}

function ColorChip3() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component12 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 300</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="bg-[#8d59fb] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="400">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#8D59FB</p>
      </div>
    </div>
  );
}

function ColorChip4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component13 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 400</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#702ffa] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="500">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#702FFA</p>
      </div>
    </div>
  );
}

function ColorChip5() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component14 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 500</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="bg-[#5a26c8] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="600">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#5A26C8</p>
      </div>
    </div>
  );
}

function ColorChip6() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component15 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 600</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-[#431c96] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="700">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#431C96</p>
      </div>
    </div>
  );
}

function ColorChip7() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component16 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 700</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#2d1364] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="800">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#2D1364</p>
      </div>
    </div>
  );
}

function ColorChip8() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component17 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 800</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-[#160932] content-stretch flex items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 size-[120px]" data-name="900">
      <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">#160932</p>
      </div>
    </div>
  );
}

function ColorChip9() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0" data-name="color chip">
      <Component18 />
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5]">Blue violet 900</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ColorChip />
      <ColorChip1 />
      <ColorChip2 />
      <ColorChip3 />
      <ColorChip4 />
      <ColorChip5 />
      <ColorChip6 />
      <ColorChip7 />
      <ColorChip8 />
      <ColorChip9 />
    </div>
  );
}

function Chips() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="chips">
      <Arrow />
      <Frame />
    </div>
  );
}

function Color() {
  return (
    <div className="content-stretch flex flex-col gap-[180px] items-center relative shrink-0 w-full" data-name="color">
      <p className="font-['Inter:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[64px] w-[min-content] font-bold">Color</p>
      <Chips />
    </div>
  );
}

export function Konai1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="konai_02">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[210px] items-end px-[40px] py-[280px] relative w-full">
          <Color />
          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[843px]">
            {`코나아이의 브랜드를 구성하는 레드(도전·열정)와 블루(신뢰·안정)의 가치를 기반으로, `}
            <br aria-hidden="true" />두 색이 지닌 의미를 조화롭게 담아낼 수 있는 중립적 퍼플 컬러를 새로운 브랜드 방향성으로 제안하였습니다.
            <br aria-hidden="true" />
            퍼플은 지역성과 성별에 구애받지 않는 보편성을 지니며, 레드의 에너지와 블루의 신뢰감을 균형 있게 반영해 코나아이 모빌리티만의 차별화된 브랜드 아이덴티티를 강화하는 핵심 요소로 활용하였습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

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

function Iocn() {
  return (
    <div className="bg-[#702ffa] relative size-full" data-name="konai_icon">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-start pb-[210px] pt-[48px] px-[40px] relative size-full">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[64px] text-nowrap text-white whitespace-pre">Icon</p>
          <Icon />
          <Icon1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
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

function Konai2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="konai_03">
      <div className="size-full">
        <div className="content-stretch flex gap-[40px] items-start px-[40px] py-0 relative w-full">
          <Iocn />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function AppImg() {
  return (
    <div className="content-stretch flex items-start justify-center pl-0 pr-[48px] py-0 relative shrink-0 w-full" data-name="app_img">
      <div className="h-[560px] mr-[-48px] relative shrink-0 w-[360px]" data-name="선호운행가이드 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="h-[560px] mr-[-48px] relative shrink-0 w-[360px]" data-name="새로운콜받기 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img12} />
      </div>
      <div className="h-[1001px] mr-[-48px] relative shrink-0 w-[360px]" data-name="DRIVER_APP_OPTIONS_메뉴 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDriverAppOptions21} />
      </div>
      <div className="h-[696px] mr-[-48px] relative shrink-0 w-[360px]" data-name="DRIVER_APP_OPTIONS_화면 밝기 조절_4 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDriverAppOptions411} />
      </div>
    </div>
  );
}

function Taxi() {
  return (
    <div className="bg-[#f6f2ff] content-stretch flex flex-col gap-[48px] items-center px-0 py-[210px] relative shrink-0 w-full" data-name="taxi">
      <p className="font-['Noto Sans KR:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[48px] w-[1242px] font-bold">동백택시 - 기사앱</p>
      <AppImg />
    </div>
  );
}

export function Konai3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="konai_04">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[280px] pt-[40px] px-[40px] relative w-full">
          <Taxi />
          <ul className="block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-full">
            <li className="mb-0 ms-[30px]">
              <span className="leading-[1.5]">· 기사 앱 사용자의 특성을 고려해, 기존 승객용 UI와는 다른 접근이 필요</span>
            </li>
            <li className="mb-0 ms-[30px]">
              <span className="leading-[1.5]">· 대부분의 기사 사용자가 고령층이라는 점을 반영해 어두운 바탕, 큰 폰트, 명확한 대비의 버튼 색상으로 화면 가독성을 높이고 선택 실수를 최소화</span>
            </li>
            <li className="ms-[30px]">
              <span className="leading-[1.5]">· 텍스트 크기·색상·간격을 조정하여 정보 이해도를 높였으며, 주행 중에도 빠르게 인지할 수 있는 레이아웃으로 안전성과 사용성을 동시에 개선</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Contents() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents02">
      <Konai />
      <Konai1 />
      <Konai2 />
      <Konai3 />
    </div>
  );
}