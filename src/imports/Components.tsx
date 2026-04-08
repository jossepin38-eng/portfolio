import imgButton from "figma:asset/1148d4bdca8bdb11d52d207ce128b87dc13a1030.png";
import imgInput from "figma:asset/b47760b7c65aa96f1a93f62fc0d4ebc24a864a4f.png";

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-nowrap whitespace-pre" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] tracking-[-1px]">Button</p>
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px]">
        {`버튼(Button)은 사용자의 동작을 트리거하는 핵심 UI 요소로, 대부분의 인터페이스에서 가장 자주 사용되는 컴포넌트입니다. `}
        <br aria-hidden="true" />
        {`화면 전반에 걸쳐 일관된 모양, 간격, 동작 패턴을 유지해야 하며, 다양한 목적, 다양한 화면 크기, 다양한 상호작용 상태에 맞게 조정될 수 있어야 합니다. `}
        <br aria-hidden="true" />
        또한 키보드 접근성, 스크린리더 호환성, 충분한 대비(contrast) 를 제공해야 합니다.
      </p>
    </div>
  );
}

function Num8() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text01">
      <Num8 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Default</span>
        <span>{` - 사용자가 클릭할 준비가 된 기본 상태`}</span>
      </p>
    </div>
  );
}

function Num9() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num9 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Hover</span>
        <span>{` - 마우스 오버 시 제공되는 시각적 피드백`}</span>
      </p>
    </div>
  );
}

function Num10() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text03">
      <Num10 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Active</span>
        <span>{` - 버튼이 눌린 상태(press 상태)`}</span>
      </p>
    </div>
  );
}

function Num2() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text04">
      <Num2 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Disabled</span>- 비활성화 상태로, 클릭 및 상호작용이 불가능함
      </p>
    </div>
  );
}

function SubText() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="sub-text">
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="button_text">
      <Title />
      <SubText />
    </div>
  );
}

function ButtonImg() {
  return (
    <div className="h-[568px] relative shrink-0 w-[1400px]" data-name="button_img">
      <div className="absolute h-[568px] left-0 top-0 w-[1400px]" data-name="button">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgButton} />
      </div>
    </div>
  );
}

function ButtonOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0" data-name="button_overview">
      <ButtonText />
      <ButtonImg />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-0 py-[180px] relative shrink-0 w-full" data-name="Button">
      <ButtonOverview />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-nowrap tracking-[-1px]" data-name="title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#0d0d0d] text-[40px] whitespace-pre">Input fields</p>
      <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black whitespace-pre">
        <p className="mb-0">{`입력 필드는 텍스트, 숫자, 비밀번호 등 다양한 정보를 입력하고 편집할 수 있도록 하는 핵심 인터랙티브 구성 요소입니다. `}</p>
        <p className="mb-0">{`양식, 검색, 설정 화면과 같은 데이터 기반 상호작용에서 필수적인 역할을 하며, 사용자의 의도를 드러내고 작업 흐름을 형성합니다. `}</p>
        <p>잘 설계된 입력 시스템은 명확성, 신뢰성, 접근성을 제공하여 모든 상호작용을 더 직관적이고 매끄럽게 만듭니다.</p>
      </div>
    </div>
  );
}

function Num() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num01">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text01">
      <Num />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Default</span>
        <span>{` - 아직 입력되지 않은 초기 상태`}</span>
      </p>
    </div>
  );
}

function Num1() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num02">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text02">
      <Num1 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Typing</span>
        <span>{` - 사용자가 입력 중일 때의 활성 상태`}</span>
      </p>
    </div>
  );
}

function Num3() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text03">
      <Num3 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">Filled</span>
        <span>{` - 값이 정상적으로 입력되어 필드가 채워진 상태`}</span>
      </p>
    </div>
  );
}

function Num4() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text04">
      <Num4 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Read Only `}</span>- 내용 확인만 가능하며 수정할 수 없는 상태
      </p>
    </div>
  );
}

function Num5() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">5</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text05">
      <Num5 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Disabled `}</span>- 상호작용, 포커스가 불가능한 비활성 상태
      </p>
    </div>
  );
}

function Num6() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">6</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text06">
      <Num6 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Error `}</span>- 입력값이 유효하지 않거나 검증에 실패한 상태
      </p>
    </div>
  );
}

function Num7() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name="num03">
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">7</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="text07">
      <Num7 />
      <p className="basis-0 font-['Pretendard:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-[20px]">
        <span className="font-['Pretendard:Bold',sans-serif]">{`Success `}</span>- 입력이 성공적으로 검증된 확인 상태
      </p>
    </div>
  );
}

function SubText1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="sub-text">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text8 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="button_text">
      <Title1 />
      <SubText1 />
    </div>
  );
}

function InputImg() {
  return (
    <div className="h-[455px] relative shrink-0 w-[1400px]" data-name="input img">
      <div className="absolute h-[455px] left-0 top-0 w-[1400px]" data-name="input">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInput} />
      </div>
    </div>
  );
}

function InputOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0" data-name="input_overview">
      <ButtonText1 />
      <InputImg />
    </div>
  );
}

function InputFields() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[180px] pt-0 px-0 relative shrink-0 w-full" data-name="Input fields">
      <InputOverview />
    </div>
  );
}

export default function Components() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Components">
      <div id="button" className="w-full"><Button /></div>
      <div id="input-fields" className="w-full"><InputFields /></div>
    </div>
  );
}