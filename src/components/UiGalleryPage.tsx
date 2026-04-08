import React, { useEffect, useRef } from 'react';
import Top from '../imports/Top';
import Foundations from '../imports/Foundations';
import Components from '../imports/Components';

export default function UiGalleryPage({ setGnbTheme }: { setGnbTheme: (theme: 'dark' | 'light') => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const checkTheme = () => {
      const container = contentRef.current;
      if (!container) return;

      // Target point: Center of screen width, vertical center of GNB (approx 55px)
      const x = window.innerWidth / 2;
      const y = 55;

      // 1. Get all elements within the content container
      // Using getElementsByTagName('*') is faster than querySelectorAll
      const elements = container.getElementsByTagName('*');
      
      let foundColor = false;
      let detectedTheme: 'dark' | 'light' = 'light';

      // 2. Iterate BACKWARDS (DOM order ~ z-order for static/relative elements)
      // We want the top-most visible element at that point.
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i] as HTMLElement;
        const rect = el.getBoundingClientRect();

        // 3. Check intersection with the target point
        if (y >= rect.top && y <= rect.bottom && x >= rect.left && x <= rect.right) {
          
          // 4. Check background color
          const style = window.getComputedStyle(el);
          const bgColor = style.backgroundColor;

          // Check if color is visible (not transparent)
          // rgba(0, 0, 0, 0) or transparent
          if (bgColor && bgColor !== 'transparent' && !bgColor.includes('rgba(0, 0, 0, 0)')) {
            const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              detectedTheme = brightness < 128 ? 'dark' : 'light';
              foundColor = true;
              break; // Found the top-most background, stop searching
            }
          }
        }
      }

      if (foundColor) {
        setGnbTheme(detectedTheme);
      } else {
        setGnbTheme('light');
      }
    };

    const handleScroll = () => {
      // Throttle via rAF
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(checkTheme);
    };

    // Initial check
    checkTheme();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [setGnbTheme]);

  return (
    <div className="bg-white min-h-screen relative w-full">
      {/* Content Area */}
      <div 
        ref={contentRef}
        className="flex flex-col w-full"
      >
        <Top />
        <Foundations />
        <Components />
      </div>
    </div>
  );
}
