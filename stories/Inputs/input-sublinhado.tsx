import type { InputHTMLAttributes } from "react"
import "./input-sublinhado.css"

interface InputSublinhadoProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  variant?: "default" | "alt"
  className?: string
}

function InputSublinhado({
  variant = "default",
  placeholder = "Digite aqui...",
  className = "",
  ...props
}: InputSublinhadoProps) {
  return (
    <div
      className={`input-sublinhado ${variant === "alt" ? "input-sublinhado--alt" : ""} ${className}`}
    >
      <input
        className="input-sublinhado__field"
        type="text"
        placeholder={placeholder}
        {...props}
      />
      <span className="input-sublinhado__border" />
    </div>
  )
}

export { InputSublinhado }
