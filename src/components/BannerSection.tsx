import React from 'react';
import imgGeneratedImageApril0620261102Am1 from "figma:asset/f3782113931fc20ff58273c966b2933797313d9e.png";
import imgGeneratedImageDecember212025602Pm1 from "figma:asset/112477b8c6468c0279213cd7fae8d3aaadce3bbb.png";
import imgGeneratedImageDecember212025609Pm1 from "figma:asset/0717c1ab9e19ed19eb854b93c2ee52be8389dd43.png";
import imgGeneratedImageDecember232025434Pm from "figma:asset/c203e8c9f57f453bee55c15c15cf3c96a9963ddb.png";
import imgGeneratedImageDecember232025444Pm1 from "figma:asset/afc08b2acd5f4522ed3850ea87bff6f05f510452.png";
import imgImage24 from "figma:asset/3f91f8b4a21ce77c7ed7034fa503d67e5b2d2ad0.png";
import imgGeneratedImageDecember232025449Pm1 from "figma:asset/99990e9b4c62efa2087454b138e2bd74dccca552.png";

type BannerItemProps = {
  data: {
    id: string;
    title: string;
    period: string;
    bg?: string;
    image?: string;
    video?: string;
    imageStyle?: React.CSSProperties;
    imageClass?: string;
  };
};

function BannerItem({ data }: BannerItemProps) {
  const handleClick = () => {
    // Navigate to work page with hash specific to the project id
    // The WorkPage needs to handle these hashes to scroll to the correct section
    window.location.hash = `work?project=${data.id}`;
    
    // Dispatch a custom event to notify listeners about the project change if we are already on the page or just navigating
    // This helps if the hash change doesn't trigger a re-render or if we need specific handling
    window.dispatchEvent(new CustomEvent('project-navigation', { detail: { projectId: data.id } }));
  };

  return (
    <div 
      className="flex gap-[20px] items-start shrink-0 cursor-pointer group"
      onClick={handleClick}
    >
      {/* Visual Part */}
      <div 
        className="h-[106px] w-[190px] overflow-hidden relative shrink-0"
        style={{ backgroundColor: data.bg || 'transparent' }}
      >
        {data.video ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={data.video} />
          </video>
        ) : (
          <div className={`absolute ${data.imageClass}`} style={data.imageStyle}>
            <img 
              alt={data.title} 
              className="w-full h-full object-cover" 
              src={data.image} 
            />
          </div>
        )}
      </div>

      {/* Text Part */}
      <div className="flex flex-col items-start pt-[12px] w-[139px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-none tracking-[-0.48px] uppercase text-[#0d0d0d] group-hover:underline">
          {data.title}
        </p>
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] leading-[1.5] text-[#0d0d0d] mt-1 text-nowrap">
          {data.period}
        </p>
      </div>
    </div>
  );
}

const ITEMS = [
  {
    id: '00',
    title: 'onbid',
    period: '2024.11~2025.03',
    bg: '#eff3ff',
    image: imgGeneratedImageApril0620261102Am1,
    imageClass: "left-1/2 top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 w-[90px] h-[79px]"
  },
  {
    id: '01',
    title: 'SAMSUNG STOCK',
    period: '2023.11~2024.05',
    bg: '#dceeff',
    image: imgGeneratedImageDecember212025602Pm1,
    imageClass: "left-1/2 top-[calc(50%+4px)] -translate-x-1/2 -translate-y-1/2 w-[114px] h-[114px]"
  },
  {
    id: '02',
    title: 'KONAI MOBILITY',
    period: '2023.04~2023.08',
    video: 'https://cdn.jsdelivr.net/gh/jossepin38-eng/assets/car_Y.mp4'
  },
  {
    id: '03',
    title: 'WELSTORY MALL',
    period: '2021.12~2022.09',
    bg: '#ffede3',
    image: imgGeneratedImageDecember212025609Pm1,
    imageClass: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px]"
  },
  {
    id: '04',
    title: 'XEOGEN',
    period: '2021.06~2021.12',
    bg: '#ebfcdb',
    image: imgGeneratedImageDecember232025434Pm,
    imageClass: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[206px] h-[206px]"
  },
  {
    id: '05',
    title: 'MINISTRY OF PERSONNEL MANAGEMENT',
    period: '2020.08~2020.11',
    bg: '#dbf3f6',
    image: imgGeneratedImageDecember232025444Pm1,
    imageClass: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[168px] h-[168px]"
  },
  {
    id: '06',
    title: 'HYUNDAI KOMOCO',
    period: '2018.07~2019.05',
    bg: '#fafbfb',
    image: imgImage24,
    imageClass: "left-[-129px] top-[-65px] w-[400px] h-[180px]"
  },
  {
    id: '07',
    title: 'HANA MEMBERS',
    period: '2018.01~2018.04',
    bg: '#d1edff',
    image: imgGeneratedImageDecember232025449Pm1,
    imageClass: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[152px] h-[152px]"
  }
];

export default function BannerSection() {
  return (
    <div className="relative w-full py-[48px] overflow-hidden bg-white banner-section">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 80s linear infinite;
            width: max-content;
          }
          /* Pause animation when hovering the entire section (static container) */
          .banner-section:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
      
      {/* Dotted Line - Fixed within this section */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 border-[#0d0d0d] border-t border-dashed pointer-events-none z-10"
      />

      <div className="flex animate-marquee">
        {/* First Set */}
        <div className="flex gap-[120px] pr-[120px]">
          {ITEMS.map((item) => (
            <BannerItem key={`orig-${item.id}`} data={item} />
          ))}
        </div>
        
        {/* Duplicate Set for Loop */}
        <div className="flex gap-[120px] pr-[120px]">
          {ITEMS.map((item) => (
            <BannerItem key={`dup-${item.id}`} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
