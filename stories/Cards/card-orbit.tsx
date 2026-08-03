import type { CSSProperties } from "react"
import "./card-orbit.css"

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe8f?w=300&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&q=80",
]

interface CardOrbitProps {
  images?: string[]
  /** Cor em formato "r,g,b" usada na borda e no tint do gradiente. */
  colorCard?: string
  className?: string
}

function CardOrbit({
  images = DEFAULT_IMAGES,
  colorCard = "99,102,241",
  className = "",
}: CardOrbitProps) {
  return (
    <div
      className={`card-orbit ${className}`}
      style={{ "--color-card": colorCard } as CSSProperties}
    >
      <div
        className="card-orbit__inner"
        style={{ "--quantity": images.length } as CSSProperties}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="card-orbit__card"
            style={{ "--index": index } as CSSProperties}
          >
            <div
              className="card-orbit__img"
              style={{ "--img": `url(${img})` } as CSSProperties}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { CardOrbit }
