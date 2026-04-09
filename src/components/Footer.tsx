import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  visible?: boolean;
  isFixed?: boolean;
}

export default function Footer({ visible = true, isFixed = true }: FooterProps) {
  const containerClasses = isFixed 
    ? "fixed bottom-0 left-0 right-0 w-full h-[380px] bg-[#0d0d0d] z-50"
    : "relative w-full h-[380px] bg-[#0d0d0d] z-10 shrink-0";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={isFixed ? { opacity: 0, y: 24 } : undefined}
          animate={{ opacity: 1, y: 0 }}
          exit={isFixed ? { opacity: 0, y: 24 } : undefined}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={containerClasses}
          data-name="footer"
        >
          <div className="flex flex-col items-end justify-end size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-end justify-end pb-[40px] pt-[40px] px-[40px] relative w-full h-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">© 2025 Designed with clarity by J</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
