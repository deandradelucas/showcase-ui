import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Bell, BellRing } from "lucide-react"

function InscreverSe() {
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
        <AnimatePresence mode="popLayout" initial={false}>
          {!isHovered ? (
            <motion.div
              key="icon1"
              initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 15, scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 600, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Bell className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              key="icon2"
              initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 15, scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 600, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <BellRing className="h-4 w-4 text-orange-400" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 600, damping: 15, delay: 0.1 }}
                className="absolute -top-0 -right-0 h-1.5 w-1.5 rounded-full bg-red-500"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span className="ml-2.5 text-[13px] font-medium tracking-tight">Subscribe</span>
    </motion.button>
  )
}

export { InscreverSe }
