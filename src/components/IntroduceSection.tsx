import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import imgImage01 from "figma:asset/b338e209565917eed8f48f9eb76df79bc3aab253.png";
import imgImage02 from "figma:asset/5c3eb8e137cec1d4ac7f3936d253b174f1cbf603.png";
import Footer from "./Footer";
import BannerSection from "./BannerSection";

function BodyTitle() {
  return (
    <div
      className="bg-white box-border content-stretch flex flex-col gap-[48px] 
      items-center px-0 pt-[360px] pb-[480px] relative shrink-0 w-full"
      data-name="body_title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-['Noto Sans KR:Bold',sans-serif] font-bold leading-[1.5] not-italic 
        relative shrink-0 text-[#0d0d0d] text-[72px] text-center whitespace-pre-line"
      >
        {"디자인의 본질을 지키면서,\n기술과 함께 진화하는 UI/UX 디자이너"}
      </motion.div>
    </div>
  );
}

function Principles() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Principles">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[260px] text-nowrap tracking-[-13px] whitespace-pre">Principles</p>
    </div>
  );
}

function Frame({ title, desc1, desc2 }: { title: string, desc1: string, desc2?: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px not-italic relative shrink-0 text-[#0d0d0d] text-nowrap">
      <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[20px] whitespace-pre">{title}</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] tracking-[-0.2px] whitespace-pre">
        <p className="mb-0 text-[16px]">{desc1}</p>
        {desc2 && <p className="text-[16px]">{desc2}</p>}
      </div>
    </div>
  );
}

function BodyText() {
  return (
    <div className="relative shrink-0 w-full" data-name="body-text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start px-[40px] py-0 relative w-full">
          <div className="content-stretch flex items-start relative shrink-0 w-full gap-[40px]">
            <Frame title="Clarity" desc1="Organize complex information into simple flows," desc2="and create experiences users can understand at a glance." />
            <Frame title="Structure" desc1="Organize information priorities and user journeys," desc2="and design the foundation of a consistent digital experience." />
            <Frame title="Systems" desc1="Build a design system of colors, typography, components, and" desc2="patterns to create a scalable and easy-to-maintain interface." />
          </div>
        </div>
      </div>
    </div>
  );
}

function Essence() {
  return (
    <div className="content-stretch flex flex-col gap-[260px] items-end justify-end relative shrink-0 w-full pt-[260px] pb-[40px]" data-name="essence">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[260px] text-nowrap tracking-[-13px] whitespace-pre">Essence</p>
      <div className="relative shrink-0 w-full" data-name="body">
        <div className="size-full">
           <div className="box-border content-stretch flex flex-col gap-[60px] px-[40px] py-0 relative w-full">
            <div className="flex flex-row justify-start gap-[70px] w-full">

                <div className="w-[540px]">
                <Frame
                  title="Empathy"
                  desc1="Understand the user's context and design"
                  desc2="an interface that harmonizes functionality and experience."
                />
              </div>

              <div className="w-[540px]">
                <Frame
                  title="Innovation"
                  desc1="The essence of the design is protected,"
                  desc2="Explore the evolving UI/UX with AI and data-driven technology."
                />
              </div>
          </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function IntroduceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const essenceRef = useRef<HTMLDivElement>(null); // To track the last section
  const [showFooter, setShowFooter] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Logic for scaling image: 1280 -> 426
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.33]);
  
  const { scrollY } = useScroll();
  
  // Logic to switch gnb theme based on introduce section position is handled in Home.tsx
  // We don't need footer toggle logic anymore as it will be static

  return (
    <div ref={containerRef} className="bg-white content-stretch flex flex-col items-start relative w-full" data-name="introduce">
      <BodyTitle />
      
      <div className="relative w-full" style={{ height: '250vh' }}>
        <div className="sticky top-1/2 -translate-y-1/2 pl-[40px] z-10 pointer-events-none">
           <Principles />
        </div>
        
        <div className="absolute top-0 w-full flex flex-col items-center pt-[80vh] z-0 gap-[100px]">
             <motion.div 
               style={{ scale: imageScale, transformOrigin: 'top center' }}
               className="h-[1004px] relative shrink-0 w-[1280px]"
             >
                <div className="relative size-full">
                    <img alt="" className="size-full object-cover" src={imgImage01} />
                    {/* Added overlay as requested for 50% opacity black */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>
             </motion.div>

             <div className="w-full flex justify-end pr-[210px]">
               <div className="h-[502px] relative shrink-0 w-[640px]">
                  <div className="relative size-full">
                      <img alt="" className="size-full object-cover" src={imgImage02} />
                      <div className="absolute inset-0 bg-black/50" />
                  </div>
               </div>
             </div>
        </div>
      </div>

      <div className="w-full bg-white z-20 relative pt-[200px] pb-[400px]">
          <BodyText />
          <div className="h-[200px]" /> {/* Spacing */}
          <div ref={essenceRef}>
             <Essence />
          </div>
      </div>
      
      <BannerSection />
      
      <Footer isFixed={false} />

    </div>
  );
}
