import { useState } from "react"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

function RevelarTexto() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex h-[36px] cursor-pointer items-center justify-center rounded-[40px] border border-foreground/10 bg-foreground/[0.04] px-6 text-foreground transition-colors duration-150 hover:bg-foreground/[0.08]"
    >
      <motion.div
        animate={{ rotate: isHovered ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="mr-2.5 flex h-4 w-4 items-center justify-center"
      >
        <ArrowRight className="h-4 w-4" />
      </motion.div>
      <div className="relative h-[18px] overflow-hidden">
        <motion.div
          animate={{ y: isHovered ? -18 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex flex-col"
        >
          <span className="block h-[18px] text-[13px] font-medium leading-[18px] tracking-tight whitespace-nowrap">
            Text Reveal
          </span>
          <span className="block h-[18px] text-[13px] font-medium leading-[18px] tracking-tight whitespace-nowrap">
            Text Reveal
          </span>
        </motion.div>
      </div>
    </motion.button>
  )
}

export { RevelarTexto }
