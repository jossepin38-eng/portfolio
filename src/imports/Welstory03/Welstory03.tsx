import imgPc from "figma:asset/c06adceb24a50c8e71ceec5a050990791622b3dd.png";
import imgMoBuy1 from "figma:asset/a785015b363d18dc774ed04efaf77320a88260c8.png";
import imgImg7066 from "figma:asset/5c725543a2d0846e5ec1f29a67c77e9be559e6b4.png";
import imgImage from "figma:asset/491951d2f4d6938e1854e610d62f713912a40c5d.png";
import imgMo02 from "figma:asset/350dd47871eb306c5f26a9a085c38a4084276af1.png";
import imgImg53222 from "figma:asset/cb2d1874bb225c35b88cbebe98e7a38171d09cd9.png";
import imgMoBuy2 from "figma:asset/0348defb694ab99b3aae13328026b40cd3a96262.png";

function MoBuy() {
  return (
    <div className="h-[1909px] overflow-clip relative shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)] shrink-0 w-[360px]" data-name="mo_buy2">
      <div className="relative h-[1909px] left-0 top-0 w-[360px]">
        <img alt="가운데 모바일 상세" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMoBuy2} />
      </div>
    </div>
  );
}

function Mo() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0" data-name="mo">
      <div className="h-[850px] relative shrink-0 w-[480px]" data-name="mo_buy1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMoBuy1} />
      </div>
      <MoBuy />
    </div>
  );
}

function Mypage() {
  return (
    <div className="h-[870px] relative shrink-0 w-[480px]" data-name="mypage">
      <div className="absolute h-[870px] left-0 top-0 w-[480px]" data-name="mo_02">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMo02} />
      </div>
      <div className="absolute h-[62px] left-[49px] top-[687px] w-[321px]" data-name="IMG_5322 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1221.67%] left-[-4.36%] max-w-none top-[-1041.94%] w-[109.03%]" src={imgImg53222} />
        </div>
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0" data-name="mobile_상세">
      <Mo />
      <Mypage />
    </div>
  );
}

export default function Welstory03() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[210px] items-center px-[40px] py-[280px] relative size-full" data-name="welstory_03">
      <div className="h-[957px] relative shrink-0 w-[1400px]" data-name="pc_상세">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPc} />
      </div>
      <Mobile />
    </div>
  );
}