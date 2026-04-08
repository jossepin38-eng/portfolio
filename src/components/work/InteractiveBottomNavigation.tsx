import React from 'react';
import { bottomNavItems } from './data';

interface InteractiveBottomNavigationProps {
  activeProjectId: string;
  onProjectClick: (id: string) => void;
}

export default function InteractiveBottomNavigation({ activeProjectId, onProjectClick }: InteractiveBottomNavigationProps) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="bottom">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-start pb-[48px] pt-[180px] px-[40px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[128px] text-nowrap tracking-[-5.12px] whitespace-pre">2018-2025</p>
          <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[28px] text-nowrap tracking-[-0.56px] uppercase whitespace-pre" data-name="text btn">
            {bottomNavItems.map((item) => {
              const isActive = activeProjectId === item.id;
              
              return (
                <p
                  key={item.id}
                  onClick={() => onProjectClick(item.id)}
                  className={`
                    relative shrink-0 cursor-pointer transition-all duration-200
                    ${isActive ? "text-[#0d0d0d]" : "text-[#0d0d0d] hover:text-[#0d0d0d]"}
                  `}
                >
                  <span className={`
                    relative
                    ${isActive ? "after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:w-full after:h-[2px] after:bg-[#0d0d0d]" : ""}
                    hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-[#0d0d0d]
                  `}>
                    {item.id === "work01" ? "ONBID" : item.label}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
