import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import IntroduceSection from './IntroduceSection';
import BottomText from './BottomText';

export default function Home() {
  const introduceRef = useRef<HTMLDivElement>(null);
  
  // 스크롤에 따른 HomeSection 숨김 처리 로직 (기존 로직 유지)
  const { scrollYProgress } = useScroll();
  const isHomeHidden = useTransform(scrollYProgress, [0, 0.2], [false, true]);
  const bottomTextY = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  return (
    /* 1. 최상단 div에 overflow-x-hidden을 주어 
         가로 스크롤 및 하단 유령 영역 발생을 원천 차단합니다. 
    */
    <div className="bg-[#0d0d0d] relative w-full min-h-screen overflow-x-hidden">
      
      {/* Home Section - Sticky */}
      <div className="sticky top-0 h-screen z-0 overflow-hidden">
         <motion.div 
            style={{ opacity: isHomeHidden ? 0 : 1 }} 
            className="size-full"
         >
             <HomeSection />
         </motion.div>
      </div>

      {/* Scrolling Content Overlay */}
      <div className="relative z-10 flex flex-col">
        {/* AboutSection이 시작되는 지점 */}
        <AboutSection />
        
        <div ref={introduceRef} className="bg-white">
            <IntroduceSection />
        </div>
      </div>

      <BottomText y={bottomTextY} />
    </div>
  );
} // <--- 이 부분의 닫는 중괄호가 빠졌을 가능성이 큽니다.
