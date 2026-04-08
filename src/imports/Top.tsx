import React, { useState, useEffect, useRef } from 'react';
import imgImg from "figma:asset/a80cf3ca569df1dd9241be42ddc23034d11a2d40.png";

function Line() {
  return (
    <div className="h-[18px] relative shrink-0 w-[11px]" data-name="line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
        <g id="line">
          <path d="M1 0V18H0V0H1Z" fill="var(--fill-0, #0D0D0D)" id="Vector 1 (Stroke)" />
          <path d="M6 0V18H5V0H6Z" fill="var(--fill-0, #0D0D0D)" id="Vector 2 (Stroke)" />
          <path d="M11 0V18H10V0H11Z" fill="var(--fill-0, #0D0D0D)" id="Vector 3 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="logo">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-nowrap whitespace-pre">J</p>
      <Line />
    </div>
  );
}

function Work() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="work">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap whitespace-pre">WORK</p>
    </div>
  );
}

function UiGallery() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="ui gallery">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] text-nowrap underline whitespace-pre">UI GALLERY</p>
    </div>
  );
}

function Btn() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="btn">
      <Work />
      <UiGallery />
    </div>
  );
}

function Gnb() {
  return (
    <div className="h-[109px] relative shrink-0 w-full" data-name="gnb">
      <div className="size-full">
        <div className="content-stretch flex gap-[60px] items-start p-[40px] relative size-full">
          <Logo />
          <Btn />
        </div>
      </div>
    </div>
  );
}

export function Title() {
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      // Get clean hash without '#' and query params
      const hash = window.location.hash.replace('#', '').split('?')[0];
      setCurrentPath(hash);
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNav = (path: string) => {
    window.location.hash = path;
  };

  const isUiGalleryActive = currentPath === 'ui-gallery';
  const isAiAssetActive = currentPath === 'ai-asset';

  return (
    <div className="relative shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center gap-[68px] pb-[24px] pl-0 pr-0 pt-[210px] relative w-full">
          {/* Menu 1: Design System Spotlight */}
          <button 
            onClick={() => handleNav('ui-gallery')}
            className={`font-['Inter:Bold',sans-serif] font-bold text-[36px] leading-[normal] relative shrink-0 text-[#0d0d0d] whitespace-pre transition-all duration-200 cursor-pointer
              ${isUiGalleryActive 
                ? 'opacity-100 underline decoration-2 underline-offset-4' 
                : 'opacity-50 hover:opacity-100 hover:underline hover:decoration-2 hover:underline-offset-4'
              }`}
          >
            Design System Spotlight
          </button>

          {/* Menu 2: AI Generated Asset */}
          <button 
            onClick={() => handleNav('ai-asset')}
            className={`font-['Inter:Bold',sans-serif] font-bold text-[36px] leading-[normal] relative shrink-0 text-[#0d0d0d] whitespace-pre transition-all duration-200 cursor-pointer
              ${isAiAssetActive 
                ? 'opacity-100 underline decoration-2 underline-offset-4' 
                : 'opacity-50 hover:opacity-100 hover:underline hover:decoration-2 hover:underline-offset-4'
              }`}
          >
            AI Generated Asset
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Menu Item Component
function MenuItem({ 
  label, 
  targetId, 
  isActive, 
  onClick,
  theme
}: { 
  label: string; 
  targetId: string; 
  isActive: boolean; 
  onClick: (id: string) => void;
  theme: 'dark' | 'light';
}) {
  const activeTextColor = theme === 'dark' ? 'text-white' : 'text-[#0d0d0d]';
  const inactiveTextColor = theme === 'dark' ? 'text-[rgba(255,255,255,0.8)] group-hover:text-white' : 'text-[rgba(13,13,13,0.6)] group-hover:text-[#0d0d0d]';
  const underlineColor = theme === 'dark' ? 'bg-white' : 'bg-[#0d0d0d]';

  return (
    <div 
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 cursor-pointer group"
      onClick={() => onClick(targetId)}
    >
      <div className="relative">
        <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[24px] text-nowrap text-right whitespace-pre transition-colors duration-200 ${isActive ? activeTextColor : inactiveTextColor}`}>
          {label}
        </p>
        <div 
          className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${underlineColor} ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
        />
      </div>
    </div>
  );
}

function RightMenu() {
  const [activeId, setActiveId] = useState<string>("");
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [fixedTop, setFixedTop] = useState<number>(528); // Default fallback estimate

  const menuItems = [
    { label: "Color System", id: "color-system" },
    { label: "Typography", id: "typography" },
    { label: "Spacing", id: "spacing" },
    { label: "Iconography", id: "iconography" },
    { label: "Grid System", id: "grid-system" },
    { label: "Elevation", id: "elevation" },
    { label: "Button", id: "button" },
    { label: "Input fields", id: "input-fields" },
  ];

  const handleScrollTo = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Calculate initial position
  useEffect(() => {
    const calculatePosition = () => {
      const imgEl = document.querySelector('[data-name="img"]');
      if (imgEl) {
        // Calculate the document offset top of the Img section
        const rect = imgEl.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const imgOffsetTop = rect.top + scrollTop;
        
        // Target fixed position on screen = (Img Document Top) + 40px
        // Wait, if it's fixed relative to viewport, and we want it to match the initial state:
        // At initial state (scrollY=0), Img is at Y=imgOffsetTop.
        // So Menu should be at Y=imgOffsetTop + 40.
        // This fixed value will stay constant on screen as user scrolls.
        setFixedTop(imgOffsetTop + 40);
      }
    };
    
    // Run on mount and resize
    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    // Also try slightly later in case layout shifts
    const timer = setTimeout(calculatePosition, 100);
    
    return () => {
      window.removeEventListener('resize', calculatePosition);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      // 1. Update Active Section
      let currentId = "";
      for (const item of menuItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            currentId = item.id;
            break;
          }
        }
      }
      if (currentId) {
        setActiveId(currentId);
      }

      // 2. Update Theme
      // Use the calculated fixedTop for probing, plus some offset to hit text
      // fixedTop is the top of the menu container.
      // Probe point: y = fixedTop + 20px
      const x = window.innerWidth - 60;
      const y = fixedTop + 20;

      const elements = document.elementsFromPoint(x, y);
      
      let foundColor = false;
      let detectedTheme: 'dark' | 'light' = 'light';

      for (const el of elements) {
        if (el.closest('[data-name="right_menu"]')) continue;

        // PRIORITY CHECK: "img" section (Dark Theme)
        if (el.getAttribute('data-name') === 'img' || el.closest('[data-name="img"]')) {
            detectedTheme = 'dark';
            foundColor = true;
            break; 
        }

        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;

        if (bgColor && bgColor !== 'transparent' && !bgColor.includes('rgba(0, 0, 0, 0)')) {
          const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            detectedTheme = brightness < 128 ? 'dark' : 'light';
            foundColor = true;
            break; 
          }
        }
      }

      if (foundColor) {
        setTheme(detectedTheme);
      }
    };

    const onScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [fixedTop]);

  return (
    <div 
      className="fixed right-[40px] z-50 flex flex-col items-end gap-[4px] transition-all duration-300" 
      style={{ top: `${fixedTop}px` }}
      data-name="right_menu"
    >
      {menuItems.map((item) => (
        <MenuItem 
          key={item.id}
          label={item.label}
          targetId={item.id}
          isActive={activeId === item.id}
          onClick={handleScrollTo}
          theme={theme}
        />
      ))}
    </div>
  );
}

function Img() {
  return (
    <div className="h-[560px] relative shrink-0 w-full" data-name="img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-30 size-full" src={imgImg} />
      </div>
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end p-[40px] relative size-full">
          <RightMenu />
        </div>
      </div>
    </div>
  );
}

export default function Top() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="top">
      <Title />
      <Img />
    </div>
  );
}
