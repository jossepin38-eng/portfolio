import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import InteractiveYearNavigation from './work/InteractiveYearNavigation';
import InteractiveBottomNavigation from './work/InteractiveBottomNavigation';
import Contents00 from './work/Contents00';
import Contents01 from './work/Contents01';
import Contents02 from './work/Contents02';
import Contents03 from './work/Contents03';
import Contents04 from './work/Contents04';
import Contents05 from './work/Contents05';
import Contents06 from './work/Contents06';
import Contents07 from './work/Contents07';
import { projects } from './work/data';

export default function WorkPage({ setGnbTheme }: { setGnbTheme: (theme: 'dark' | 'light') => void }) {
  const [activeProjectId, setActiveProjectId] = useState<string>("work01");
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Derive active year from project ID
  const activeProject = projects.find(p => p.id === activeProjectId);
  const activeYear = activeProject ? activeProject.year : "2024";

  // List of project IDs that require dynamic theme detection
  const darkThemeProjectIds = [
    'work01',  // Contents00
    'work02', // Contents01 (Samsung)
    'work03', // Contents02 (Konai)
    'work04', // Contents03 (Welstory)
    'xeogen', // Contents04
    'personnel', // Contents05
    'hyundai', // Contents06
    'hana'    // Contents07
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setGnbTheme('light');
  }, [activeProjectId, setGnbTheme]);

  // Handle hash change for direct linking to projects
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#work")) {
        // Parse project ID from hash like #work?project=ID
        // Or if simple hash is used, we might need a mapping.
        // Assuming format: #work?project=ID
        
        // Manual parsing because URLSearchParams might not work well with hash only
        const parts = hash.split('?');
        if (parts.length > 1) {
            const params = new URLSearchParams(parts[1]);
            const projectId = params.get('project');
            if (projectId) {
                // Map the numeric ID from banner to actual project IDs
                // Banner IDs: 00, 01, 02, 03, 04, 05, 06, 07
                // Project IDs: onbid, work02, work03, work04, xeogen, personnel, hyundai, hana
                const idMap: Record<string, string> = {
                    '00': 'work01',
                    '01': 'work02',
                    '02': 'work03',
                    '03': 'work04',
                    '04': 'xeogen',
                    '05': 'personnel',
                    '06': 'hyundai',
                    '07': 'hana'
                };
                
                if (idMap[projectId]) {
                    setActiveProjectId(idMap[projectId]);
                } else if (Object.values(idMap).includes(projectId)) {
                    // Direct ID was passed
                    setActiveProjectId(projectId);
                }
            }
        }
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Also check on mount
    handleHashChange();

    // Listen for custom event from BannerSection
    const handleCustomNav = (e: CustomEvent) => {
        const projectId = e.detail?.projectId;
        if (projectId) {
             const idMap: Record<string, string> = {
                '00': 'work01',
                '01': 'work02',
                '02': 'work03',
                '03': 'work04',
                '04': 'xeogen',
                '05': 'personnel',
                '06': 'hyundai',
                '07': 'hana'
            };
            if (idMap[projectId]) {
                setActiveProjectId(idMap[projectId]);
                window.scrollTo(0, 0);
            }
        }
    };
    window.addEventListener('project-navigation', handleCustomNav as EventListener);

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
        window.removeEventListener('project-navigation', handleCustomNav as EventListener);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const checkTheme = () => {
      // If detection not needed for this project, always light
      if (!darkThemeProjectIds.includes(activeProjectId)) {
        setGnbTheme('light');
        return;
      }

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
              
              // Calculate brightness
              // < 128 is dark background -> Light text (Dark Theme)
              // >= 128 is light background -> Dark text (Light Theme)
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              detectedTheme = brightness < 128 ? 'dark' : 'light';
              foundColor = true;
              break; // Found the top-most background, stop searching
            }
          }
        }
      }

      // If we found a background color under the GNB, use detection.
      // If NOT found (e.g. we are in the gap above content), default to Light.
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
  }, [activeProjectId, setGnbTheme]);

  const handleYearClick = (year: string) => {
    const project = projects.find(p => p.year === year);
    if (project) {
      setActiveProjectId(project.id);
    }
  };

  const handleProjectClick = (id: string) => {
    setActiveProjectId(id);
  };

  const renderContent = () => {
    let Component;
    switch (activeProjectId) {
      case 'work01': Component = Contents00; break; // ONBID / 2025
      case 'work02': Component = Contents01; break; // Samsung / 2024
      case 'work03': Component = Contents02; break; // Konai / 2023
      case 'work04': Component = Contents03; break; // Welstory / 2022
      case 'xeogen': Component = Contents04; break;
      case 'personnel': Component = Contents05; break;
      case 'hyundai': Component = Contents06; break;
      case 'hana': Component = Contents07; break;
      default: Component = Contents01; break;
    }

    return (
      <motion.div
        key={activeProjectId}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" }
        }}
        className="w-full"
      >
        <Component />
      </motion.div>
    );
  };

  return (
    <div className="bg-white min-h-screen relative w-full">
      {/* 
        Layout Structure:
        - Wrapper with top padding to account for GNB + spacing
        - Year Navigation: Sticky positioning to allow contents to scroll over it. z-index 0.
        - Contents: Relative positioning with z-index 10 to cover Year Navigation.
      */}
      <div className="flex flex-col w-full pt-[220px]">
        
        {/* Sticky Year Navigation */}
        <div className="sticky top-[109px] z-0 w-full bg-white">
          <InteractiveYearNavigation activeYear={activeYear} onYearClick={handleYearClick} />
        </div>

        {/* Contents Area - Covers Year Navigation on Scroll */}
        <div 
          ref={contentRef}
          className="relative z-10 w-full bg-white"
        >
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>

      </div>

      <InteractiveBottomNavigation activeProjectId={activeProjectId} onProjectClick={handleProjectClick} />
    </div>
  );
}
