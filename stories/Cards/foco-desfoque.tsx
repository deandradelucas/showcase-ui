import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

interface FocusBlurItem {
  label: string
  href?: string
}

function FocoDesfoque({
  items = [
    { label: "@Twitter", href: "#" },
    { label: "@Threads", href: "#" },
    { label: "@Instagram", href: "#" },
    { label: "@GitHub", href: "#" },
  ],
  blurAmount = 4,
  opacityAmount = 0.4,
  showBrackets = true,
  className = "",
}: {
  items?: FocusBlurItem[]
  blurAmount?: number
  opacityAmount?: number
  showBrackets?: boolean
  className?: string
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 px-10 py-6 cursor-default ${className}`}>
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index
        const isInactive = hoveredIndex !== null && !isHovered
        return (
          <a
            key={index}
            href={item.href || "#"}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative text-lg font-semibold no-underline outline-none transition-all duration-300 select-none sm:text-2xl ${isHovered ? "text-primary" : "text-foreground"}`}
            style={{
              filter: isInactive ? `blur(${blurAmount}px)` : "none",
              opacity: isInactive ? opacityAmount : 1,
            }}
          >
            <span className="relative z-10">{item.label}</span>
            {showBrackets && (
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.3 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0, scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="pointer-events-none absolute inset-0 z-0 rounded-lg border-2 border-dashed border-foreground/30"
                    style={{ margin: "-4px -8px" }}
                  />
                )}
              </AnimatePresence>
            )}
          </a>
        )
      })}
    </div>
  )
}

export { FocoDesfoque }
