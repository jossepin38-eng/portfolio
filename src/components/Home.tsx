import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import IntroduceSection from "./IntroduceSection";
import BottomText from "./BottomText";

export default function Home({ setGnbTheme }: { setGnbTheme: (theme: 'dark' | 'light') => void }) {
  const [isHomeHidden, setIsHomeHidden] = useState(false);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(window.innerHeight);
    const handleResize = () => setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollY } = useScroll();

  // BottomText Sync Logic:
  // Trigger: About01 (centered in AboutSection) reaches middle of viewport.
  // AboutSection is after HomeSection (sticky 100vh).
  // AboutSection starts at doc pos 100vh.
  // AboutSection Middle (where card is) is at 100vh + 50vh = 150vh.
  // Viewport Middle is at scrollY + 50vh.
  // Trigger when 150vh = scrollY + 50vh => scrollY = 100vh.
  
  const bottomTextY = useTransform(scrollY, (latest) => {
      const trigger = vh * 1.0; 
      if (latest < trigger) return 0;
      return -(latest - trigger);
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentVh = vh || window.innerHeight;
    
    // Hide Home Logic
    if (latest > currentVh * 0.5) {
        setIsHomeHidden(true);
    } else {
        setIsHomeHidden(false);
    }
  });
  
  const introduceRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
      if (introduceRef.current) {
          const rect = introduceRef.current.getBoundingClientRect();
          if (rect.top <= 50) { 
              setGnbTheme('light');
          } else {
              setGnbTheme('dark');
          }
      }
  });

  // Home.tsx 수정 제안
return (
  <div className="bg-[#0d0d0d] relative min-h-screen">
    
    {/* Home Section - Sticky */}
    <div className="sticky top-0 h-screen z-0">
       <motion.div 
          animate={{ opacity: isHomeHidden ? 0 : 1 }} 
          transition={{ duration: 0.5 }}
          className="w-full h-full relative overflow-hidden" // overflow-hidden 복구 권장
       >
          {/* 1. Light Rays 배경 레이어 */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             {/* 만약 LightRays가 HomeSection 내부에 있다면 
                HomeSection 내부에서 이 처리를 해주어야 하고,
                여기서 직접 호출하신다면 아래처럼 배치하세요.
             */}
             <LightRays 
               intensity={2}
               glowColor="rgba(255, 255, 255, 0.2)"
               // ...기타 설정
             />
          </div>

          {/* 2. 콘텐츠 레이어 (HomeSection) */}
          <div className="relative z-10 w-full h-full">
             <HomeSection />
          </div>
       </motion.div>
    </div>

    {/* Scrolling Content Overlay */}
    <div className="relative z-10 flex flex-col">
      <AboutSection />
      <div ref={introduceRef} className="bg-white">
          <IntroduceSection />
      </div>
    </div>

    <BottomText y={bottomTextY} />
  </div>
);
