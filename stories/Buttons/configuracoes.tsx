import { useState } from "react"
import { motion } from "motion/react"
import { Settings } from "lucide-react"

function Configuracoes() {
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
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Settings className="h-4 w-4" />
        </motion.div>
      </div>
      <span className="ml-2.5 text-[13px] font-medium tracking-tight">Settings</span>
    </motion.button>
  )
}

export { Configuracoes }
