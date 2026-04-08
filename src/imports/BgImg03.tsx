import imgMain from "figma:asset/283b1ac868eea044c4148c99673f82f021c533d8.png";
import imgMoWel01 from "figma:asset/e1af68c77435dc3221b83e87a126366ba7774740.png";
import imgBgImg03 from "figma:asset/759732b31f9a7d29bb12b96181e917120e62a87d.png";

function WelPc() {
  return (
    <div className="h-[936px] relative shrink-0 w-[1408px]" data-name="wel_pc">
      <div className="absolute h-[952px] left-[-40px] top-[-40px] w-[1400px]" data-name="main">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMain} />
      </div>
      <div className="absolute h-[750px] left-[1048px] shadow-[-10px_20px_60px_0px_rgba(0,0,0,0.25)] top-[156px] w-[360px]" data-name="mo_wel01">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMoWel01} />
      </div>
    </div>
  );
}

export default function BgImg() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[210px] relative size-full" data-name="bg_img03">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgBgImg03} />
      </div>
      <WelPc />
    </div>
  );
}