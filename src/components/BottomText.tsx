import React from 'react';
import { motion } from 'motion/react';

export default function BottomText({ y }: { y: any }) {
  return (
    <motion.div 
      style={{ y }}
      className="fixed bottom-0 left-0 right-0 z-[40] w-full pointer-events-none" 
      data-name="bottom_text"
    >
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-end pb-[40px] pl-[40px] pr-0 pt-0 relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre mix-blend-difference">Protecting the essence of the design, UI/UX designers evolving with technology.</p>
        </div>
      </div>
    </motion.div>
  );
}
