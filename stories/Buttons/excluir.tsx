import { useState } from "react"
import { motion } from "motion/react"
import { Trash2 } from "lucide-react"

function Excluir() {
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
          animate={{
            y: isHovered ? [0, -2, 0, -2, 0] : 0,
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <Trash2 className={`h-4 w-4 transition-colors duration-300 ${isHovered ? "text-red-400" : ""}`} />
        </motion.div>
      </div>
      <span
        className={`ml-2.5 text-[13px] font-medium tracking-tight transition-colors duration-300 ${isHovered ? "text-red-400" : ""}`}
      >
        Delete
      </span>
    </motion.button>
  )
}

export { Excluir }
