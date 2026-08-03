import { useState } from "react"
import { motion } from "motion/react"
import { Star } from "lucide-react"

function BrilhoGlare() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex h-[36px] cursor-pointer items-center justify-center overflow-hidden rounded-[40px] border border-foreground/10 bg-foreground/[0.04] px-6 text-foreground transition-colors duration-150 hover:bg-foreground/[0.08]"
    >
      <Star className="mr-2.5 h-4 w-4" />
      <span className="text-[13px] font-medium tracking-tight">Glare Shine</span>
      <motion.div
        animate={{ x: isHovered ? ["-150%", "150%"] : "-150%" }}
        transition={{ duration: 0.85, ease: "easeInOut", repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
        className="pointer-events-none absolute inset-y-0 z-10 w-[50px] skew-x-[-20deg]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)" }}
      />
    </motion.button>
  )
}

export { BrilhoGlare }
