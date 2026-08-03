import { useState } from "react"
import { motion } from "motion/react"

interface CardCornerFanProps {
  angle?: number
  duration?: number
  hoverIntensity?: number
  cardClassName?: string
  className?: string
}

function CardCornerFan({
  angle = 40,
  duration = 0.5,
  hoverIntensity = 1,
  cardClassName = "bg-neutral-800",
  className = "",
}: CardCornerFanProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cards = [0, 1, 2, 3, 4]
  const total = cards.length

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex h-[11rem] w-[8rem] cursor-pointer items-center justify-center ${className}`}
    >
      {cards.map((i) => {
        const offsetRatio = i / (total - 1)
        const startAngle = -10
        const targetRotate = isHovered
          ? (startAngle + offsetRatio * angle) * hoverIntensity
          : 0

        return (
          <motion.div
            key={i}
            animate={{
              rotate: targetRotate,
              scale: isHovered && i === 2 ? 1.03 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              mass: 0.8,
              duration,
            }}
            style={{
              zIndex: 5 - i,
              originX: 0,
              originY: 1,
            }}
            className={`absolute inset-0 rounded-2xl border border-white/5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.15)] ${cardClassName}`}
          />
        )
      })}
    </div>
  )
}

export { CardCornerFan }
