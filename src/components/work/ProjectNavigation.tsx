import React from 'react';

interface ProjectNavigationProps {
  onProjectClick: (projectId: string) => void;
}

export default function ProjectNavigation({ onProjectClick }: ProjectNavigationProps) {
  const projects = [
    { label: "ONBID", id: "onbid" },
    { label: "Samsung stock", id: "work02" },
    { label: "KONAI MOBILITY", id: "work03" },
    { label: "WELSTory mall", id: "work04" },
    { label: "XEOGEN", id: "xeogen" },
    { label: "ministry of personnel management", id: "personnel" },
    { label: "HYUNDAI KOMOCO", id: "hyundai" },
    { label: "hANA MEMBERS", id: "hana" }
  ];

  return (
    <div className="bg-white relative shrink-0 w-full" data-name="bottom">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-start pb-[48px] pt-[180px] px-[40px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[128px] text-nowrap tracking-[-5.12px] whitespace-pre">
            2018-2025
          </p>
          <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[#0d0d0d] text-[28px] text-nowrap tracking-[-0.56px] uppercase whitespace-pre" data-name="text btn">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="relative shrink-0 cursor-pointer hover:underline"
                onClick={() => onProjectClick(project.id)}
              >
                {project.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
