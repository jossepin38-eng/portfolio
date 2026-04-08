import imgMpopImg from "figma:asset/7725285d7bf22f5b3bf5fc667fd9e0da77d78b64.png";

export default function Pension() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[120px] pt-0 px-0 relative size-full" data-name="pension01">
      <div className="h-[870px] relative shrink-0 w-[1020px]" data-name="mpop_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMpopImg} />
      </div>
      <ul className="block font-['Pretendard:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] w-[1000px]">
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