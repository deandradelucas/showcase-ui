import { useId, type ReactNode } from "react"
import { Lightbulb } from "lucide-react"
import "./cartao-luminoso.css"

interface CartaoLuminosoProps {
  icon?: ReactNode
  title?: string
  description?: string
  toggleLabel?: string
  defaultChecked?: boolean
  className?: string
}

function CartaoLuminoso({
  icon = <Lightbulb className="h-10 w-10 text-white" strokeWidth={1.5} />,
  title = "Reading Lamp",
  description = "Ilumine o ambiente com um clique. Efeito de luz totalmente em CSS.",
  toggleLabel = "Light",
  defaultChecked = false,
  className = "",
}: CartaoLuminosoProps) {
  const id = useId()

  return (
    <div className={`luminous-card-container ${className}`}>
      <input
        id={id}
        className="luminous-toggle-input"
        type="checkbox"
        defaultChecked={defaultChecked}
      />
      <div className="luminous-card">
        <div className="luminous-light-layer">
          <div className="luminous-slit" />
          <div className="luminous-lumen">
            <div className="luminous-lumen-min" />
            <div className="luminous-lumen-mid" />
            <div className="luminous-lumen-hi" />
          </div>
          <div className="luminous-darken">
            <div className="luminous-darken-sl" />
            <div className="luminous-darken-ll" />
            <div className="luminous-darken-slt" />
            <div className="luminous-darken-srt" />
          </div>
        </div>
      </div>
      <div className="luminous-content">
        <div className="luminous-icon">{icon}</div>
        <div className="luminous-bottom">
          <h3 className="luminous-title">{title}</h3>
          <p className="luminous-description">{description}</p>
          <label className="luminous-toggle" htmlFor={id}>
            <span className="luminous-toggle-label">{toggleLabel}</span>
            <span className="luminous-handle" />
          </label>
        </div>
      </div>
    </div>
  )
}

export { CartaoLuminoso }
