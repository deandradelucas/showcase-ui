import { useState } from "react"
import { motion } from "motion/react"
import { Heart } from "lucide-react"

function Patrocinador() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex h-[36px] cursor-pointer items-center justify-center rounded-[40px] border border-foreground/10 bg-foreground/[0.04] px-6 text-foreground transition-colors duration-150 hover:bg-foreground/[0.08]"
    >
      <div className="relative flex h-[16px] w-[16px] shrink-0 items-center justify-center">
        <motion.div
          animate={{ scale: isHovered ? [1, 1.25, 1] : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Heart
            className={`h-4 w-4 transition-colors duration-300 ${isHovered ? "fill-current text-pink-500" : ""}`}
          />
        </motion.div>
      </div>
      <span className="ml-2.5 text-[13px] font-medium tracking-tight">Sponsor</span>
    </motion.button>
  )
}

export { Patrocinador }
