import { useState } from "react"
import { motion } from "motion/react"

interface CardArc7Props {
  angle?: number
  gap?: number
  yOffset?: number
  duration?: number
  hoverIntensity?: number
  cardClassName?: string
  className?: string
}

function CardArc7({
  angle = 45,
  gap = 110,
  yOffset = 30,
  duration = 0.5,
  hoverIntensity = 1,
  cardClassName = "bg-neutral-800",
  className = "",
}: CardArc7Props) {
  const [isHovered, setIsHovered] = useState(false)
  const cards = [0, 1, 2, 3, 4, 5, 6]
  const center = 3

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex h-[11rem] w-[8rem] cursor-pointer items-center justify-center ${className}`}
    >
      {cards.map((i) => {
        const dist = i - center
        const targetRotate = isHovered ? dist * (angle / center) * hoverIntensity : 0
        const targetX = isHovered ? dist * (gap / center) * hoverIntensity : 0

        let targetY = 0
        if (isHovered) {
          if (Math.abs(dist) === 3) targetY = yOffset
          else if (Math.abs(dist) === 2) targetY = 0.33 * yOffset
          else if (Math.abs(dist) === 1) targetY = -0.17 * yOffset
          else targetY = -0.5 * yOffset
          targetY = targetY * hoverIntensity
        }

        return (
          <motion.div
            key={i}
            animate={{
              rotate: targetRotate,
              x: targetX,
              y: targetY,
              scale: isHovered ? (dist === 0 ? 1.05 : 1) : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              mass: 0.8,
              duration,
            }}
            style={{
              zIndex: 4 - Math.abs(dist),
              originX: 0.5,
              originY: 1,
            }}
            className={`absolute inset-0 rounded-2xl border border-white/5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.15)] ${cardClassName}`}
          />
        )
      })}
    </div>
  )
}

export { CardArc7 }
