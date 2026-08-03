import type { ButtonHTMLAttributes } from "react"
import "./botao-nuvem.css"

interface BotaoNuvemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children?: string
  className?: string
}

function BotaoNuvem({
  children = "HOVER",
  className = "",
  ...props
}: BotaoNuvemProps) {
  return (
    <button className={`btn-nuvem ${className}`} {...props}>
      <span>{children}</span>
    </button>
  )
}

export { BotaoNuvem }
