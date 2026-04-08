import clsx from "clsx";
import { motion } from "motion/react";
import Particles from "../components/Particles";
import imgImg01 from "figma:asset/7e9624647799886f8d3eee7cc40b357361ed3d86.png";
import imgImg02 from "figma:asset/a52a59d8577f748ac9a64460cf9bd9ae041c0e25.png";
import imgImg03 from "figma:asset/d3a7409a38815420a8b59e440d243c335b9729d8.png";
import imgImg04 from "figma:asset/e4917ab215dc776c2b935155619cc698c8d02ae6.png";
import imgImg05 from "figma:asset/8f985cb1ec6005f0c9b762ee19c6b517eab576bd.png";
import imgImg06 from "figma:asset/56016a3e597a220cf7f90b5af5cd93128931e822.png";
import imgGeneratedImageDecember2320251241Pm1 from "figma:asset/e7a68aaf15cebc4ba16abab504a1e81d98349a90.png";
import imgCessie1 from "figma:asset/e35c513898aab5d23150c7bd7c76549ef6b28767.png";
import imgImg09 from "figma:asset/06cfce6c464da14b3870dbc73dddbb2dd0523cce.png";
import imgImg2 from "figma:asset/679d4f99f7308fd92d862d01555f33216f356bb5.png";
import imgImg3 from "figma:asset/d37bdaed5ecd7e07da5519e25c636b95125faa88.png";
import imgImg4 from "figma:asset/555b22c3d8e3bef2f29b8206bcd87ba40ad966b4.png";
import imgImg5 from "figma:asset/829960729cd19ed49fecd2d882a3d8336b915676.png";
import imgImg6 from "figma:asset/afc08b2acd5f4522ed3850ea87bff6f05f510452.png";
import imgImg7 from "figma:asset/04bb09a37ac75b9d37f910ff4742ccc4e27933c5.png";
import imgImg8 from "figma:asset/70d30374849fb46c533aaa3641f6ef6320694fa8.png";
import imgImg9 from "figma:asset/51063d5821d79d8a5de2251edd436c472c636f33.png";
import imgImg10 from "figma:asset/112477b8c6468c0279213cd7fae8d3aaadce3bbb.png";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-end size-full">
      <div className="content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[4px] items-start justify-end leading-[0] not-italic p-[24px] relative size-full text-[#0d0d0d] text-[16px] text-nowrap">{children}</div>
    </div>
  );
}

function Img({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fafafa] h-[280px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic p-[24px] relative text-[#0d0d0d] text-[16px] text-nowrap w-full">{children}</div>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
  text1: string;
  text2: string;
};

function Text2({ text, text1, text2 }: Text2Props) {
  return (
    <Wrapper>
      <Text3 text="툴 -" />
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text}</span>
        <span>{` 기본 프롬프트`}</span>
      </p>
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text1}</span>
        <span>{` 영문 자연어`}</span>
      </p>
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text2}</span>
        <span>{` PVC`}</span>
      </p>
    </Wrapper>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic p-[24px] relative text-[#0d0d0d] text-[16px] text-nowrap", additionalClassNames)}>
      <Text3 text="툴 -" />
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text}</span>
        <span>{` 기본 프롬프트`}</span>
      </p>
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text1}</span>
        <span>{` 영문 자연어`}</span>
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
  text1: string;
};

function Text1({ text, text1 }: Text1Props) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <Helper text={text} text1={text1} additionalClassNames="w-full" />
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <p className="leading-[1.5] relative shrink-0">
      <span className="text-[rgba(13,13,13,0.5)]">{text}</span>
      <span>{` GoogleAIStudio(나노바나나)`}</span>
    </p>
  );
}
type TextProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function Text({ text, text1, text2, text3 }: TextProps) {
  return (
    <Wrapper>
      <Text3 text={text} />
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text1}</span>
        <span>{` 기본 프롬프트`}</span>
      </p>
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text2}</span>
        <span>{` 영문 자연어`}</span>
      </p>
      <p className="leading-[1.5] relative shrink-0">
        <span className="text-[rgba(13,13,13,0.5)]">{text3}</span>
        <span>{` 있음`}</span>
      </p>
    </Wrapper>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AiAsset() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Ai_Asset">
      <motion.div variants={itemVariants} className="bg-[#0d0d0d] h-[560px] relative shrink-0 w-full overflow-hidden" data-name="img">
        
        {/* Content Container - z-10 to be above particles */}
        <div className="flex flex-col items-center justify-center size-full relative z-10">
          <div className="content-stretch flex flex-col items-center justify-center p-[40px] relative size-full overflow-hidden mask-image-[radial-gradient(white,black)]" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
            <div className="absolute inset-0 z-0 pointer-events-auto">
                <Particles 
                    className="w-full h-full"
                    particleColors={['#ffffff', '#0d0d0d']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    moveParticlesOnHover={true}
                    particleHoverFactor={1}
                    alphaParticles={false}
                    particleBaseSize={100}
                    sizeRandomness={1}
                    cameraDistance={20}
                    disableRotation={false}
                />
            </div>
            <div className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic relative shrink-0 text-[64px] text-center text-white w-full z-10 pointer-events-none">
              <p className="mb-0">{`AI-generated visuals, refined through clarity, `}</p>
              <p>structure, and design intent.</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-white content-stretch flex flex-col gap-[180px] items-center px-0 py-[180px] relative shrink-0 w-full" data-name="con">
        <motion.div variants={itemVariants} className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-center w-[1280px]">
          <p className="mb-0">
            The assets in this section are not applied to live products.
            <br aria-hidden="true" />
            {` They are concept-driven explorations created to demonstrate how AI can be guided, controlled,`}
          </p>
          <p>and evolved through design intent and structured prompts.</p>
        </motion.div>
        <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0 w-[1280px]" data-name="Ai_content">
          <motion.div variants={itemVariants} className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="chibi_text">
            <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0d0d0d] w-full" data-name="title">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[40px] text-nowrap tracking-[-1px]">Chibi-style 3D Character</p>
              <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] min-w-full relative shrink-0 text-[24px] w-[min-content]">
                <p className="mb-0">{`ChatGPT를 활용해 2D Chibi 스타일 캐릭터를 먼저 설계한 뒤, 해당 이미지를 기반으로 Nano Banana를 활용해 3D 캐릭터로 `}</p>
                <p className="mb-0">확장하였습니다.</p>
                <p className="mb-0">{`단발성 캐릭터 생성이 아닌, 캐릭터의 비율·표정·아이덴티티를 유지한 상태에서 다양한 활용이 가능하도록 일관성을 확보하는 `}</p>
                <p>과정에 초점을 두었습니다.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="img">
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="chibi01">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="img01">
                  <div className="content-stretch flex flex-col items-center overflow-clip pb-0 pt-[60px] px-0 relative rounded-[inherit] size-full">
                    <div className="relative shrink-0 size-[240px]" data-name="img01">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg01} />
                    </div>
                    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="text">
                      <Wrapper1>
                        <p className="leading-[1.5] relative shrink-0">
                          <span className="text-[rgba(13,13,13,0.5)]">툴 -</span>
                          <span>{` ChatGPT`}</span>
                        </p>
                        <p className="leading-[1.5] relative shrink-0">
                          <span className="text-[rgba(13,13,13,0.5)]">프롬프트 -</span>
                          <span>{` 기본 프롬프트`}</span>
                        </p>
                        <p className="leading-[1.5] relative shrink-0">
                          <span className="text-[rgba(13,13,13,0.5)]">프롬프트 타입 -</span>
                          <span>{` 영문 자연어`}</span>
                        </p>
                        <p className="leading-[1.5] relative shrink-0">
                          <span className="text-[rgba(13,13,13,0.5)]">캐릭터 유무 -</span>
                          <span>{` 없음`}</span>
                        </p>
                      </Wrapper1>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
                </div>
              </div>
              <Wrapper2 additionalClassNames="h-[550.667px]">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="img02">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg02} />
                </div>
                <Text text="툴 -" text1="프롬프트 -" text2="프롬프트 타입 -" text3="캐릭터 유무 -" />
              </Wrapper2>
              <Wrapper2 additionalClassNames="h-[550.667px]">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="img03">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg03} />
                </div>
                <Wrapper>
                  <Text3 text="툴 -" />
                  <p className="leading-[1.5] relative shrink-0">
                    <span className="text-[rgba(13,13,13,0.5)]">프롬프트 -</span>
                    <span>{` 기본 프롬프트`}</span>
                  </p>
                  <p className="leading-[1.5] relative shrink-0">
                    <span className="text-[rgba(13,13,13,0.5)]">프롬프트 타입 -</span>
                    <span>{` 영문+한글 자연어`}</span>
                  </p>
                  <p className="leading-[1.5] relative shrink-0">
                    <span className="text-[rgba(13,13,13,0.5)]">캐릭터 유무 -</span>
                    <span>{` 있음`}</span>
                  </p>
                </Wrapper>
              </Wrapper2>
            </div>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="chibi02">
              <Wrapper2 additionalClassNames="h-[550.67px]">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="img04">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[108.53%] left-[-0.02%] max-w-none top-0 w-[100.03%]" src={imgImg04} />
                  </div>
                </div>
                <Text text="툴 -" text1="프롬프트 -" text2="프롬프트 타입 -" text3="캐릭터 유무 -" />
              </Wrapper2>
              <Wrapper2 additionalClassNames="h-[550.67px]">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="img05">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg05} />
                </div>
                <div className="bg-white h-[156px] relative shrink-0 w-full" data-name="text">
                  <Wrapper1>
                    <Text3 text="툴 -" />
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 -</span>
                      <span>{` 기본 프롬프트`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 타입 -</span>
                      <span>{` 한글 자연어`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">캐릭터 유무 -</span>
                      <span>{` 있음`}</span>
                    </p>
                  </Wrapper1>
                </div>
              </Wrapper2>
              <Wrapper2 additionalClassNames="h-[550.67px]">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="img06">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[107.12%] left-0 max-w-none top-[0.08%] w-full" src={imgImg06} />
                  </div>
                </div>
                <Text text="툴 -" text1="프롬프트 -" text2="프롬프트 타입 -" text3="캐릭터 유무 -" />
              </Wrapper2>
            </div>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="chibi03">
              <Wrapper2 additionalClassNames="h-[550.667px]">
                <div className="aspect-[1201/1201] relative shrink-0 w-full" data-name="Generated Image December 23, 2025 - 12_41PM 1">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGeneratedImageDecember2320251241Pm1} />
                  </div>
                </div>
                <Text text="툴 -" text1="프롬프트 -" text2="프롬프트 타입 -" text3="캐릭터 유무 -" />
              </Wrapper2>
              <Wrapper2 additionalClassNames="h-[550.667px]">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="cessie 1">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[106.51%] left-0 max-w-none top-0 w-full" src={imgCessie1} />
                  </div>
                </div>
                <Text text="툴 -" text1="프롬프트 -" text2="프롬프트 타입 -" text3="캐릭터 유무 -" />
              </Wrapper2>
              <Wrapper2 additionalClassNames="h-[551.874px]">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="img09">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[0.04%] max-w-none top-0 w-[99.88%]" src={imgImg09} />
                  </div>
                </div>
                <Text text="툴 -" text1="프롬프트 -" text2="프롬프트 타입 -" text3="캐릭터 유무 -" />
              </Wrapper2>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="content-stretch flex flex-col gap-[120px] items-start pb-0 pt-[60px] px-0 relative shrink-0 w-full" data-name="bg_imges">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="bg_text">
              <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0d0d0d] text-nowrap w-full" data-name="title">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[40px] tracking-[-1px]">Background Images</p>
                <div className="font-['Pretendard:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[24px]">
                  <p className="mb-0">히어로 영역에 활용할 수 있는 배경 이미지를 목표로, 콘텐츠의 분위기와 메시지를 뒷받침하는 시멘틱한 배경을 설계하였습니다.</p>
                  <p className="mb-0">{`카메라 시점을 드론샷처럼 변화시키거나, 시간대(낮·밤)와 조명, 무드를 달리하며 하나의 콘셉트가 서로 다른 인상으로 `}</p>
                  <p>진화할 수 있도록 구성하였습니다.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="icon">
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="backbround01">
                <Wrapper3>
                  <div className="bg-[#fafafa] content-stretch flex h-[516px] items-center justify-center relative shrink-0 w-full" data-name="img01">
                    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="img01">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg2} />
                    </div>
                  </div>
                  <Text1 text="프롬프트 -" text1="프롬프트 타입 -" />
                </Wrapper3>
                <Wrapper3>
                  <div className="bg-[#fafafa] content-stretch flex h-[516px] items-center justify-center relative shrink-0 w-full" data-name="img02">
                    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="img02">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg3} />
                    </div>
                  </div>
                  <Wrapper>
                    <Text3 text="툴 -" />
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 -</span>
                      <span>{` 기본 프롬프트`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 타입 -</span>
                      <span>{` 한글 자연어`}</span>
                    </p>
                  </Wrapper>
                </Wrapper3>
              </div>
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="backbround0102">
                <div className="relative shrink-0 w-[328px]" data-name="bg03">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="bg-[#fafafa] content-stretch flex h-[516px] items-center justify-center relative shrink-0 w-full" data-name="img03">
                      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="img03">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg4} />
                      </div>
                    </div>
                    <Text1 text="프롬프트 -" text1="프롬프트 타입 -" />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
                </div>
                <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                  <Wrapper2 additionalClassNames="h-full">
                    <div className="bg-[#fafafa] content-stretch flex h-[516px] items-center justify-center relative shrink-0 w-full" data-name="movie">
                      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="movie">
                        <video autoPlay loop muted playsInline className="absolute max-w-none object-cover size-full" controlsList="nodownload">
                          <source src="https://cdn.jsdelivr.net/gh/jossepin38-eng/assets/car_Y.mp4" />
                        </video>
                      </div>
                    </div>
                    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="text">
                      <div className="size-full">
                        <Helper text="프롬프트 -" text1="프롬프트 타입 -" additionalClassNames="size-full" />
                      </div>
                    </div>
                  </Wrapper2>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="content-stretch flex flex-col gap-[120px] items-start pb-0 pt-[60px] px-0 relative shrink-0 w-full" data-name="icon">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="icon_text">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-nowrap w-full" data-name="title">
                <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] tracking-[-1px]">3D Icon Style</p>
                <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[24px]">
                  최근 UI 트렌드에 맞춰 3D 아이콘 스타일을 실험하며, AI를 활용하여 다양한 질감을 적용해 시각적 표현의 폭을 탐색했습니다.
                  <br aria-hidden="true" />
                  UI 환경에서 사용 가능한 명확한 형태와 일관된 스타일 유지에 중점을 두었습니다.
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="icon">
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="icon01">
                <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                  <Wrapper2 additionalClassNames="h-full">
                    <Img>
                      <div className="relative shrink-0 size-[180px]" data-name="img01">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg5} />
                      </div>
                    </Img>
                    <Text2 text="프롬프트 -" text1="프롬프트 타입 -" text2="질감 -" />
                  </Wrapper2>
                </div>
                <Wrapper3>
                  <Img>
                    <div className="relative shrink-0 size-[180px]" data-name="img02">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-[-35.33%] max-w-none size-[170.67%] top-[-37%]" src={imgImg6} />
                      </div>
                    </div>
                  </Img>
                  <Text2 text="프롬프트 -" text1="프롬프트 타입 -" text2="질감 -" />
                </Wrapper3>
                <Wrapper3>
                  <Img>
                    <div className="relative shrink-0 size-[180px]" data-name="img03">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg7} />
                    </div>
                  </Img>
                  <Text2 text="프롬프트 -" text1="프롬프트 타입 -" text2="질감 -" />
                </Wrapper3>
              </div>
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="icon02">
                <Wrapper3>
                  <Img>
                    <div className="relative shrink-0 size-[180px]" data-name="img04">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[176.86%] left-[-33.48%] max-w-none top-[-43.64%] w-[176.7%]" src={imgImg8} />
                      </div>
                    </div>
                  </Img>
                  <Wrapper>
                    <Text3 text="툴 -" />
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 -</span>
                      <span>{` 기본 프롬프트`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 타입 -</span>
                      <span>{` 영문 자연어`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">질감 -</span>
                      <span>{` 풍선질감(Text Ver)`}</span>
                    </p>
                  </Wrapper>
                </Wrapper3>
                <Wrapper3>
                  <Img>
                    <div className="relative shrink-0 size-[180px]" data-name="img05">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-[-10.38%] max-w-none size-[120.75%] top-[-10.38%]" src={imgImg9} />
                      </div>
                    </div>
                  </Img>
                  <Wrapper>
                    <Text3 text="툴 -" />
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 -</span>
                      <span>{` 기본 프롬프트`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 타입 -</span>
                      <span>{` 영문 자연어`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">질감 -</span>
                      <span>{` 유리질감`}</span>
                    </p>
                  </Wrapper>
                </Wrapper3>
                <Wrapper3>
                  <Img>
                    <div className="relative shrink-0 size-[180px]" data-name="img06">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-[-16.93%] max-w-none size-[132.3%] top-[-14.86%]" src={imgImg10} />
                      </div>
                    </div>
                  </Img>
                  <Wrapper>
                    <Text3 text="툴 -" />
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 -</span>
                      <span>{` 기본 프롬프트`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">프롬프트 타입 -</span>
                      <span>{` 영문 자연어`}</span>
                    </p>
                    <p className="leading-[1.5] relative shrink-0">
                      <span className="text-[rgba(13,13,13,0.5)]">질감 -</span>
                      <span>{` 유리 질감`}</span>
                    </p>
                  </Wrapper>
                </Wrapper3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
