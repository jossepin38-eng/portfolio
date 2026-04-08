export default function Text() {
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
            <ul className="list-disc">
              <li className="mb-0 ms-[30px]">
                <span className="leading-[1.5] text-[#0d0d0d]">
                  One Screen, One Task 설계를 통해 사용자가 한 화면에서 필요한 정보를 직관적으로 인지하고,
                  <br aria-hidden="true" />
                  빠르게 과업을 수행할 수 있도록 집중도와 효율성 강화
                </span>
              </li>
              <li className="mb-0 ms-[30px]">
                <span className="leading-[1.5] text-[#0d0d0d]">핵심 기능 중심의 UI 설계로 불필요한 정보는 배제하고 명확한 정보 전달에 집중</span>
              </li>
              <li className="ms-[30px]">
                <span className="leading-[1.5] text-[#0d0d0d]">마이크로 인터랙션을 활용하여 앱 사용 경험의 몰입도와 재미 요소를 더함</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}