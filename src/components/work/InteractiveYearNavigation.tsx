import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from './data';

interface InteractiveYearNavigationProps {
  activeYear: string;
  onYearClick: (year: string) => void;
}

export default function InteractiveYearNavigation({ activeYear, onYearClick }: InteractiveYearNavigationProps) {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  // The design has 2025, 2024 ... 2018.
  const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="year">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-end pb-[120px] pt-0 px-[40px] relative w-full">
          {years.map((year) => {
            const isActive = year === activeYear;
            const isHovered = year === hoveredYear;
            const project = projects.find((p) => p.year === year);
            const isExpanded = (isActive || isHovered) && !!project;

            return (
              <div
                key={year}
                className="relative w-full"
                style={{
                  minHeight: '24px' 
                }}
              >
                {/* Info Layer Border (Full Width) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                      className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* 
                  Layout Container: Flex Row
                  justify-between: Pushes Info to Left, Year to Right.
                  pointer-events-none: Ensure the gap is not interactive.
                */}
                <div className="flex items-center justify-between w-full pointer-events-none relative z-10">
                  
                  {/* Left Side: Info Text Content */}
                  {/* 
                      Goal: Left aligned to the container edge.
                      It expands vertically, pushing the row height.
                      pointer-events-auto: Optional, but keeps text selectable if needed.
                  */}
                  <div className="flex-1 text-left pointer-events-auto mr-10">
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="flex flex-col gap-[10px] items-start justify-center"
                        >
                          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] tracking-[-0.64px] whitespace-nowrap text-[#0d0d0d] uppercase">
                            {project?.title}
                          </p>
                          <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[16px] whitespace-nowrap text-[#0d0d0d]">
                            {project?.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Side: Year Text (The Trigger) */}
                  {/* 
                      Goal: Hover trigger ONLY here.
                      pointer-events-auto: Re-enable interaction for this element.
                  */}
                  <div
                    onMouseEnter={() => setHoveredYear(year)}
                    onMouseLeave={() => setHoveredYear(null)}
                    onClick={() => {
                      if (project) onYearClick(year);
                    }}
                    className="relative shrink-0 cursor-pointer pointer-events-auto"
                  >
                    <p 
                      className={`
                        font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 uppercase whitespace-pre
                        transition-all duration-300 ease-out text-right
                        ${isExpanded 
                          ? "text-[#0d0d0d] text-[120px] tracking-[-6px]" 
                          : `text-[24px] tracking-[-1.2px] ${isActive ? "text-[#0d0d0d]" : "text-[rgba(13,13,13,0.4)]"}`
                        }
                      `}
                    >
                      <span className={`
                        relative
                        ${(!isExpanded && (isActive || isHovered)) ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#0d0d0d]" : ""}
                      `}>
                        {year}
                      </span>
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
