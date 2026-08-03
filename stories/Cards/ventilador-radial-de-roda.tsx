import { useState } from 'react';
import { motion } from 'motion/react';

interface VentiladorRadialDeRodaProps {
  className?: string;
  cardClassName?: string;
}

function VentiladorRadialDeRoda({
  className = '',
  cardClassName = 'bg-neutral-800'
}: VentiladorRadialDeRodaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cards = [0, 1, 2, 3, 4];
  const center = 2;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-[8rem] h-[11rem] cursor-pointer flex items-center justify-center ${className}`}
    >
      {cards.map((i) => {
        const dist = i - center;
        const targetRotate = isHovered ? dist * 18 : 0;
        
        let targetY = 0;
        if (isHovered) {
          if (Math.abs(dist) === 2) targetY = -8;
          else if (Math.abs(dist) === 1) targetY = -22;
          else targetY = -28;
        }

        return (
          <motion.div
            key={i}
            animate={{
              rotate: targetRotate,
              y: targetY,
              scale: isHovered ? (dist === 0 ? 1.05 : 0.98) : 1
            }}
            transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.8 }}
            style={{
              zIndex: 5 - Math.abs(dist),
              originX: 0.5,
              originY: 1.1
            }}
            className={`absolute inset-0 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-white/5 ${cardClassName}`}
          />
        );
      })}
    </div>
  );
}

export { VentiladorRadialDeRoda };