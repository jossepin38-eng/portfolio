import React from 'react';
import { motion } from 'framer-motion';
import LightRays from './LightRays';

// 만약 HeroArea가 별도 파일에 있다면 import HeroArea from './HeroArea'; 로 변경하세요.
const HeroArea = () => (
  <div className="text-center">
    {/* 타이틀이 안 보였던 문제를 해결하기 위해 텍스트 색상과 폰트 크기 명시 */}
    <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
      타이틀
    </h1>
  </div>
);

export default function HomeSection({ style }: { style?: React.CSSProperties }) {
  return (
    <section 
      style={style} 
      className="bg-[#0d0d0d] relative w-full h-screen overflow-hidden"
    >
      {/* 1. 배경 레이어 (가장 뒤: z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays />
      </div>

      {/* 2. 그라데이션 오버레이 (중간: z-10) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10"
        animate={{ 
          background: [
            "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0) 100%)",
            "linear-gradient(180deg, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0) 100%)",
            "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0) 100%)"
          ]
        }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />

      {/* 3. 콘텐츠 레이어 (가장 앞: z-20) */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <HeroArea />
      </div>
    </section>
  );
}
