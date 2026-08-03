import type { InputHTMLAttributes } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import "./input-glow.css"

interface InputGlowProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  className?: string
}

function InputGlow({
  placeholder = "Search across posts, chats & users",
  className = "",
  ...props
}: InputGlowProps) {
  return (
    <div className={`input-glow ${className}`}>
      <div className="input-glow__grid" />
      <div className="input-glow__glow" />
      <div className="input-glow__dark-border-bg" />
      <div className="input-glow__white" />
      <div className="input-glow__border" />
      <div className="input-glow__main">
        <input
          className="input-glow__input"
          type="text"
          placeholder={placeholder}
          {...props}
        />
        <div className="input-glow__input-mask" />
        <div className="input-glow__pink-mask" />
        <div className="input-glow__filter-border" />
        <div className="input-glow__filter-icon">
          <SlidersHorizontal className="h-4 w-4 text-white/70" />
        </div>
        <div className="input-glow__search-icon">
          <Search className="h-4 w-4 text-white/70" />
        </div>
      </div>
    </div>
  )
}

export { InputGlow }
