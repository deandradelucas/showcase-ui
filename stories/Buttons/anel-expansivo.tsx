import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Link } from "lucide-react"

function AnelExpansivo() {
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
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link className="h-4 w-4" />
        </motion.div>
      </div>
      <span className="ml-2.5 text-[13px] font-medium tracking-tight">Expand Ring</span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key="ring"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 rounded-[40px] border border-foreground/25"
          />
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export { AnelExpansivo }
