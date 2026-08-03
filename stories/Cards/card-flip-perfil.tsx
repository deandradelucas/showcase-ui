import type { ReactNode } from "react"
import { Sparkles } from "lucide-react"
import "./card-flip-perfil.css"

interface CardFlipPerfilProps {
  image?: string
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  footer?: string
  backIcon?: ReactNode
  backLabel?: string
  className?: string
}

function CardFlipPerfil({
  image = "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=400&q=80",
  badge = "NEW",
  title = "Title",
  subtitle = "Subtitle",
  description = "Passe o mouse para virar o card e ver o verso.",
  footer = "example.com",
  backIcon = <Sparkles className="h-10 w-10 text-white" />,
  backLabel = "Hover to flip",
  className = "",
}: CardFlipPerfilProps) {
  return (
    <div className={`card-flip-perfil ${className}`}>
      <div className="card-flip-perfil__content">
        <div className="card-flip-perfil__back">
          <div className="card-flip-perfil__circle card-flip-perfil__circle--bottom" />
          <div className="card-flip-perfil__circle card-flip-perfil__circle--right" />
          <div className="card-flip-perfil__back-content">
            {backIcon}
            <strong>{backLabel}</strong>
          </div>
        </div>
        <div className="card-flip-perfil__front">
          <img src={image} alt={title} className="card-flip-perfil__img" />
          <div className="card-flip-perfil__front-content">
            <span className="card-flip-perfil__badge">{badge}</span>
            <div className="card-flip-perfil__description">
              <div className="card-flip-perfil__title">
                <p>{title}</p>
                <p>{subtitle}</p>
              </div>
              <p>{description}</p>
              <p className="card-flip-perfil__footer">{footer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CardFlipPerfil }
