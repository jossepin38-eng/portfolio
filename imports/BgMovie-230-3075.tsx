import imgImg01 from "figma:asset/607ac6783f208ad36a16345a2914576441785785.png";
import imgImg02 from "figma:asset/1bc20b8780636f64a36138521bcfddf85b57b10e.png";
import imgImg03 from "figma:asset/c129df9961f6f42c21ae56a786e91af718bf6e7c.png";
import imgImg04 from "figma:asset/442e259efc90f82e2962fb91a3847a174fb764d2.png";
import imgImg05 from "figma:asset/99a53715ff62ffbff5205aebe683491223e54216.png";
import imgImg06 from "figma:asset/d5bc38d9b4ebfd90ac1df9f7eae62a4f54f270c6.png";
import imgImg07 from "figma:asset/417cf5d7ec7203e1465a0da80523269dd00de839.png";

export default function BgMovie() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[120px] relative size-full" data-name="bg_movie">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/a9ffc55f8c31353c175d6e9315bcc2d141c1a4ab" />
      </video>
      <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[48px] text-white w-[1296px]">동백택시 - 승객앱</p>
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
    </div>
  );
}