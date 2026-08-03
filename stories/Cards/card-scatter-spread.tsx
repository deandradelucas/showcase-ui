import { useState } from 'react';
import { motion } from 'motion/react';

interface CardScatterSpreadProps {
  className?: string;
  cardClassName?: string;
}

function CardScatterSpread({
  className = '',
  cardClassName = 'bg-neutral-800'
}: CardScatterSpreadProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cards = [0, 1, 2, 3, 4];

  const offsets = [
    { x: -75, y: 15, rotate: -14 },
    { x: -35, y: -15, rotate: -6 },
    { x: 0, y: -30, rotate: 2 },
    { x: 35, y: -10, rotate: 8 },
    { x: 75, y: 20, rotate: 15 }
  ];

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-[8rem] h-[11rem] cursor-pointer flex items-center justify-center ${className}`}
    >
      {cards.map((i) => {
        const targetX = isHovered ? offsets[i].x : 0;
        const targetY = isHovered ? offsets[i].y : 0;
        const targetRotate = isHovered ? offsets[i].rotate : 0;

        return (
          <motion.div
            key={i}
            animate={{
              x: targetX,
              y: targetY,
              rotate: targetRotate,
              scale: isHovered ? (i === 2 ? 1.05 : 0.98) : 1
            }}
            transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.8 }}
            style={{ zIndex: 5 - Math.abs(i - 2) }}
            className={`absolute inset-0 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-white/5 ${cardClassName}`}
          />
        );
      })}
    </div>
  );
}

export { CardScatterSpread }
