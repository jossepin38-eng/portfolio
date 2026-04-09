import React, { useRef } from 'react';
import svgPaths from "../imports/svg-wwb8mnqfnw";
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import LightRays from './LightRays';

function Year() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values (0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Spring config for smooth tilt
  const springConfig = { damping: 20, stiffness: 200 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);
  
  // Parallax Tilt: rotateX/Y ±1deg, translateY ±2px
  // rotateX is inverted (mouse down -> tilt down = positive rotation around X axis if we want it to look at mouse? 
  // actually usually top follows mouse -> mouse up (y=0) -> rotateX positive? 
  // Let's standard tilt: mouse top (0) -> tilt up (rotateX > 0). Mouse bottom (1) -> tilt down (rotateX < 0).
  // Wait, css rotateX(positive) tips top backwards. rotateX(negative) tips top forwards (towards screen).
  // Let's stick to the requested "±1°".
  const rotateX = useTransform(mouseY, [0, 1], [1, -1]);
  const rotateY = useTransform(mouseX, [0, 1], [-1, 1]);
  const translateY = useTransform(mouseY, [0, 1], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div 
      className="perspective-[1000px] cursor-default relative z-10" 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-name="year"
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 1.1, 
        ease: [0.65, 0, 0.35, 1] 
      }}
    >
      <motion.div 
        className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" 
        style={{ 
          rotateX, 
          rotateY, 
          y: translateY,
          transformStyle: "preserve-3d" 
        }}
      >
        <p className="font-['Inter:Black',sans-serif] font-black leading-none not-italic relative shrink-0 text-[64px] text-center text-nowrap text-white tracking-[-0.64px] whitespace-pre">2018</p>
        <div className="bg-[#d9d9d9] h-px shrink-0 w-[120px]" />
        <p className="font-['Inter:Black',sans-serif] font-black leading-none not-italic relative shrink-0 text-[64px] text-center text-nowrap text-white tracking-[-0.64px] whitespace-pre">2025</p>
      </motion.div>
    </motion.div>
  );
}

function Text() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const lines = [
    "Hello!",
    "Let me introduce you",
    "to the digital experiences",
    "I've created."
  ];

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full z-10" data-name="text">
      <motion.div 
        className="font-['Pretendard:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white whitespace-pre"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, i) => (
          <p key={i} className="mb-0">
            {line.split(" ").map((word, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <motion.span
                  variants={wordVariants}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
                {/* Add space after word unless it's the last word in the line */}
                {j < line.split(" ").length - 1 && <span> </span>}
              </React.Fragment>
            ))}
          </p>
        ))}
      </motion.div>
    </div>
  );
}

function HeroText() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="hero-text">
      <Year />
      <Text />
    </div>
  );
}

function Arrow() {
  return (
    <motion.div 
      className="h-[14px] relative shrink-0 w-[12px] z-10" 
      data-name="arrow"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 1 }}
    >
      <motion.svg 
        className="block size-full" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 12 14"
        animate={{ y: [0, 6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 1.6 // Start bouncing after it appears
        }}
      >
        <g id="arrow">
          <path d={svgPaths?.p2b561e80 || ""} fill="var(--fill-0, white)" fillOpacity="0.7" id="Polygon 1 (Stroke)" />
          <path d={svgPaths?.p2caa1400 || ""} fill="var(--fill-0, white)" fillOpacity="0.7" id="Polygon 1 (Stroke)_2" />
        </g>
      </motion.svg>
    </motion.div>
  );
}

function HeroArea() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[68px] items-center px-0 py-[180px] relative shrink-0 w-full" data-name="hero-area">
      <HeroText />
      <Arrow />
    </div>
  );
}

// ... (상단 import 생략)

export default function HomeSection({ style }: { style?: React.CSSProperties }) {
  return (
   // HomeSection.tsx 하단부 수정
<div className="bg-[#0d0d0d] flex flex-col items-center relative w-full h-screen justify-center overflow-hidden">

  {/* 1. LightRays 전용 컨테이너: h-full w-full을 명시하여 부모를 벗어나지 않게 함 */}
  <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
    <LightRays />
  </div>
  
  {/* ... 생략 ... */}
</div>
      
      {/* 2. Background Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10"
        animate={{ 
          background: [
            "linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,0) 100%)",
            "linear-gradient(180deg, rgba(30,30,30,0.4) 0%, rgba(20,20,20,0) 100%)",
            "linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,0) 100%)"
          ]
        }}
        transition={{ 
          duration: 8, 
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* 3. 실제 콘텐츠: 정중앙 정렬 유지 */}
      <div className="relative z-20 w-full flex justify-center items-center">
        <HeroArea />
      </div>

    </div>
  );
}
