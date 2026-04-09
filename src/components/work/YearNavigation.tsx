import React from 'react';
import { allYears } from './data';

interface YearNavigationProps {
  onYearClick: (year: string) => void;
}

export default function YearNavigation({ onYearClick }: YearNavigationProps) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="year">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-end pb-[120px] pt-[60px] px-[40px] relative w-full">
          {allYears.map((year) => (
            <div key={year} className="relative group cursor-pointer" onClick={() => onYearClick(year)}>
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-[rgba(13,13,13,0.4)] text-nowrap tracking-[-1.2px] uppercase whitespace-pre hover:text-[#0d0d0d]">
                {year}
              </p>
              
              {/* Hover Layer Placeholder */}
              {/* 
                "Year Navigation 컴포넌트 내에, Year 숫자에 Hover 시 나타날 'YYYY_hover' 레이어 컴포넌트를 미리 생성해 주세요. 
                이 레이어의 콘텐츠는 **'Hover 정보 레이어'**라는 텍스트 플레이스홀더만 포함하도록 합니다. 
                스타일은 Year Navigation 아래에 위치하며, 배경색은 #ffffff로 설정해 주세요."
              */}
              <div className="hidden absolute top-0 right-[100px] w-[400px] bg-white p-4 shadow-sm border border-gray-100 z-10">
                <p className="text-black">Hover 정보 레이어</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
