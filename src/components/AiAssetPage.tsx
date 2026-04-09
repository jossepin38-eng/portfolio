import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import AiAsset from '../imports/AiAsset';
import { Title } from '../imports/Top';
import Particles from './Particles';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// We will use itemVariants inside AiAsset.tsx, but we can also use it for Title
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AiAssetPage({ setGnbTheme }: { setGnbTheme: (theme: 'dark' | 'light') => void }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start (Top): White background (Title) -> Light Theme (Black Text)
      // Middle: Black background (Hero) -> Dark Theme (White Text)
      // End: White background (Content) -> Light Theme (Black Text)
      
      if (scrollY > 200 && scrollY < 800) {
        setGnbTheme('dark');
      } else {
        setGnbTheme('light');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setGnbTheme]);

  return (
    <div 
      className="bg-white min-h-screen relative w-full"
    >
      <div className="flex flex-col w-full">
        <motion.div 
           className="bg-white content-stretch flex flex-col items-start relative w-full overflow-hidden"
           initial="hidden"
           animate="visible"
           variants={titleVariants}
        >
           <div className="relative z-10 w-full">
              <Title />
           </div>
        </motion.div>

        {/* AiAsset component will handle its own internal staggering if we modify it. */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
        >
          <AiAsset />
        </motion.div>
      </div>
    </div>
  );
}
