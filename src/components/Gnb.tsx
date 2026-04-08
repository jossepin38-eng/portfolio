import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-wwb8mnqfnw";

function Line({ theme }: { theme: 'dark' | 'light' }) {
  const strokeColor = theme === 'light' ? '#0d0d0d' : 'white';
  return (
    <div className="h-[18px] relative shrink-0 w-[11px]" data-name="line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
        <g id="line">
          <path d="M1 0V18H0V0H1Z" fill={strokeColor} id="Vector 1 (Stroke)" />
          <path d="M6 0V18H5V0H6Z" fill={strokeColor} id="Vector 2 (Stroke)" />
          <path d="M11 0V18H10V0H11Z" fill={strokeColor} id="Vector 3 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Logo({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <a 
      href="#"
      className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer no-underline" 
      data-name="logo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap whitespace-pre transition-colors duration-300 ${theme === 'light' ? 'text-[#0d0d0d]' : 'text-white'}`}>J</p>
      <Line theme={theme} />
    </a>
  );
}

function Work({ theme, onClick }: { theme: 'dark' | 'light', onClick?: () => void }) {
  return (
    <a 
      href="#work" 
      className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 group cursor-pointer no-underline" 
      data-name="work"
      onClick={(e) => {
        if (onClick) onClick();
      }}
    >
      <p 
        className={`cursor-pointer font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre transition-colors duration-300
        ${theme === 'light' ? 'text-[#0d0d0d] group-hover:underline' : 'text-[rgba(255,255,255,0.7)] group-hover:text-white group-hover:underline'}
      `}>WORK</p>
    </a>
  );
}

function UiGallery({ theme }: { theme: 'dark' | 'light' }) {
  return (
    <a 
      href="#ui-gallery" 
      className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 group cursor-pointer no-underline" 
      data-name="ui gallery"
    >
      <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre transition-colors duration-300
        ${theme === 'light' ? 'text-[#0d0d0d] group-hover:underline' : 'text-[rgba(255,255,255,0.7)] group-hover:text-white group-hover:underline'}
      `}>UI GALLERY</p>
    </a>
  );
}

function Btn({ theme, onWorkClick }: { theme: 'dark' | 'light', onWorkClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name="btn">
      <Work theme={theme} onClick={onWorkClick} />
      <UiGallery theme={theme} />
    </div>
  );
}

export default function Gnb({ theme = 'dark', onWorkClick }: { theme?: 'dark' | 'light', onWorkClick?: () => void }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full" data-name="gnb">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[60px] items-start p-[40px] relative w-full">
          <Logo theme={theme} />
          <Btn theme={theme} onWorkClick={onWorkClick} />
        </div>
      </div>
    </div>
  );
}
