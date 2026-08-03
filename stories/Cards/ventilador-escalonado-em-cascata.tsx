import { useState } from 'react';
import { motion } from 'motion/react';

interface VentiladorEscalonadoEmCascataProps {
  className?: string;
  cardClassName?: string;
}

function VentiladorEscalonadoEmCascata({
  className = '',
  cardClassName = 'bg-neutral-800'
}: VentiladorEscalonadoEmCascataProps) {
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
        const targetY = isHovered ? dist * -28 - 14 : dist * 2;
        const targetX = isHovered ? dist * 14 : 0;
        const targetRotate = isHovered ? dist * 6 : 0;

        return (
          <motion.div
            key={i}
            animate={{
              y: targetY,
              x: targetX,
              rotate: targetRotate,
              scale: isHovered ? (dist === 0 ? 1.05 : 0.98) : 1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 22, mass: 0.9 }}
            style={{ zIndex: 5 - Math.abs(dist) }}
            className={`absolute inset-0 rounded-2xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.15)] border border-white/5 ${cardClassName}`}
          />
        );
      })}
    </div>
  );
}

export { VentiladorEscalonadoEmCascata };