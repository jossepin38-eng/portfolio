import React from 'react';
import imgKbPc from "figma:asset/9a8809bdfd860259ef1482e644f0427fdcb6a42d.png";
import imgKbMainBg from "figma:asset/ec664e27896887c7e016f0f0c8c3193f61241632.png";

function KbPc() {
  return (
    <div className="h-[640px] relative rounded-[40px] shrink-0 w-[1280px]" data-name="kb_pc">
      <div className="h-[640px] overflow-clip relative rounded-[inherit] w-[1280px]">
        <div className="absolute h-[640px] left-1/2 top-0 translate-x-[-50%] w-[1280px]" data-name="kb_pc">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgKbPc} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0d0d0d] border-[6px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[30px_30px_60px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

export default function KbMainBg() {
  return (
    <div className="content-stretch flex flex-col items-center px-0 py-[210px] relative size-full" data-name="kb_main_bg">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgKbMainBg} />
      </div>
      <KbPc />
    </div>
  );
}
