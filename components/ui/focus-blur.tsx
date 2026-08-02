"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

import { cn } from "@/lib/utils"

interface FocusBlurItem {
  label: string
  href?: string
}

interface FocusBlurProps {
  items?: FocusBlurItem[]
  blurAmount?: number
  opacityAmount?: number
  showBrackets?: boolean
  className?: string
}

export function FocusBlur({
  items = [
    { label: "@Twitter", href: "#" },
    { label: "@Threads", href: "#" },
    { label: "@Instagram", href: "#" },
    { label: "@GitHub", href: "#" },
  ],
  blurAmount = 4,
  opacityAmount = 0.4,
  showBrackets = true,
  className,
}: FocusBlurProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 px-10 py-6",
        className
      )}
    >
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index
        const isAnyHovered = hoveredIndex !== null
        const isInactive = isAnyHovered && !isHovered

        return (
          <a
            key={index}
            href={item.href || "#"}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative text-lg font-semibold no-underline outline-none transition-all duration-300 select-none sm:text-2xl"
            style={{
              filter: isInactive ? `blur(${blurAmount}px)` : "none",
              opacity: isInactive ? opacityAmount : 1,
              color: isHovered ? "#3b82f6" : "inherit",
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
                    className="border-neutral-700 pointer-events-none absolute inset-0 z-0 rounded-lg border-2 border-dashed"
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
