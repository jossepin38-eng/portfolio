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

 // ... 상단 import 생략 (isHomeHidden, bottomTextY, introduceRef 등이 정의되어 있어야 함)

export default function Home() {
  // ... 로직 코드 생략

  return (
    <div className="bg-[#0d0d0d] relative min-h-screen">
      
      {/* Home Section - Sticky */}
      <div className="sticky top-0 h-screen z-0">
         <motion.div 
            animate={{ opacity: isHomeHidden ? 0 : 1 }} 
            transition={{ duration: 0.5 }}
            className="w-full h-full relative overflow-hidden"
         >
            {/* LightRays가 HomeSection 외부에 위치할 경우 여기에 배치 */}
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
                <LightRays />
            </div> */}

            <HomeSection />
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
  ); // return 닫음
} // function Home 닫음 (이 괄호가 빠졌을 확률이 높습니다)
