import { motion } from "motion/react";

const Car = ({ 
  x, 
  delay, 
  duration, 
  direction,
  color = "#eab308" // default yellow
}: { 
  x: string; 
  delay: number; 
  duration: number; 
  direction: 'up' | 'down';
  color?: string;
}) => {
  const isDown = direction === 'down';
  
  return (
    <motion.div
      initial={{ y: isDown ? "-120%" : "120%", opacity: 0 }}
      animate={{ 
        y: isDown ? "120%" : "-120%",
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        delay: delay,
        repeatDelay: Math.random() * 2
      }}
      style={{
        position: 'absolute',
        left: x,
        top: 0, // Start from top (relative container needs to cover full height)
        bottom: 0,
        width: '16px', // Slightly narrower to fit lanes better
        height: '32px',
        backgroundColor: color,
        borderRadius: '4px',
        boxShadow: `0 0 10px ${color}80`, // Semi-transparent glow
        zIndex: 10
      }}
      className="absolute" // ensure absolute positioning
    >
      {/* Lights */}
      {isDown ? (
        <>
           {/* Taillights (Red) at bottom */}
           <div className="absolute bottom-0 left-0.5 w-1 h-1 bg-red-500 shadow-[0_0_4px_red]" />
           <div className="absolute bottom-0 right-0.5 w-1 h-1 bg-red-500 shadow-[0_0_4px_red]" />
           {/* Headlights (White/Yellow) at top - actually if it's going down, front is bottom? No.
               If car is going down (South), the front faces down.
               So Headlights are at bottom. Taillights at top.
           */}
           <div className="absolute bottom-0 left-0.5 w-1 h-1 bg-white/90 shadow-[0_0_8px_white]" style={{ bottom: 0, top: 'auto' }} /> 
           <div className="absolute bottom-0 right-0.5 w-1 h-1 bg-white/90 shadow-[0_0_8px_white]" style={{ bottom: 0, top: 'auto' }} />
           
           <div className="absolute top-0 left-0.5 w-1 h-1 bg-red-500 shadow-[0_0_4px_red]" /> 
           <div className="absolute top-0 right-0.5 w-1 h-1 bg-red-500 shadow-[0_0_4px_red]" />
        </>
      ) : (
        <>
           {/* Going Up (North) */}
           {/* Front is Top. Headlights at Top. */}
           <div className="absolute top-0 left-0.5 w-1 h-1 bg-white/90 shadow-[0_0_8px_white]" />
           <div className="absolute top-0 right-0.5 w-1 h-1 bg-white/90 shadow-[0_0_8px_white]" />
           
           {/* Taillights at Bottom */}
           <div className="absolute bottom-0 left-0.5 w-1 h-1 bg-red-500 shadow-[0_0_4px_red]" />
           <div className="absolute bottom-0 right-0.5 w-1 h-1 bg-red-500 shadow-[0_0_4px_red]" />
        </>
      )}
    </motion.div>
  );
};

export function TrafficLayer() {
  // Adjusting positions to align with visual "lanes" in a typical street
  // Assuming the street is roughly central.
  // Let's stagger them a bit more natural.
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="absolute inset-0 w-full h-full opacity-70">
        {/* Left side lanes (Going Down) */}
        <Car x="35%" direction="down" duration={5} delay={0} color="#facc15" /> {/* Yellow Taxi */}
        <Car x="35%" direction="down" duration={5.5} delay={3} color="#3b82f6" /> {/* Blue Car */}
        <Car x="38%" direction="down" duration={4.5} delay={1.5} color="#ffffff" /> {/* White Car */}
        <Car x="38%" direction="down" duration={5} delay={4} color="#10b981" /> {/* Green Car */}
        
        {/* Right side lanes (Going Up) */}
        <Car x="60%" direction="up" duration={4.8} delay={0.5} color="#ef4444" /> {/* Red Car */}
        <Car x="60%" direction="up" duration={5.2} delay={4} color="#facc15" /> {/* Yellow Taxi */}
        <Car x="63%" direction="up" duration={5} delay={2} color="#ffffff" /> {/* White Car */}
        <Car x="63%" direction="up" duration={6} delay={1} color="#a855f7" /> {/* Purple Car */}
      </div>
    </div>
  );
}
