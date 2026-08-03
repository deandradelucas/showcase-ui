import { Wifi } from "lucide-react"
import "./card-flip-credito.css"

interface CardFlipCreditoProps {
  brandLabel?: string
  number?: string
  name?: string
  expiry?: string
  cvv?: string
  className?: string
}

function CardFlipCredito({
  brandLabel = "BANK",
  number = "1234 5678 9012 3456",
  name = "Card Holder",
  expiry = "12/28",
  cvv = "123",
  className = "",
}: CardFlipCreditoProps) {
  return (
    <div className={`card-flip-credito ${className}`}>
      <div className="card-flip-credito__inner">
        <div className="card-flip-credito__front">
          <span className="card-flip-credito__heading">{brandLabel}</span>
          <div className="card-flip-credito__chip">
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
              <rect width="30" height="24" rx="4" fill="url(#chipGradient)" />
              <rect x="4" y="4" width="22" height="16" rx="2" stroke="#00000040" strokeWidth="1" fill="none" />
              <line x1="10" y1="4" x2="10" y2="20" stroke="#00000030" strokeWidth="1" />
              <line x1="20" y1="4" x2="20" y2="20" stroke="#00000030" strokeWidth="1" />
              <line x1="4" y1="12" x2="26" y2="12" stroke="#00000030" strokeWidth="1" />
              <defs>
                <linearGradient id="chipGradient" x1="0" y1="0" x2="30" y2="24">
                  <stop stopColor="#e8d38a" />
                  <stop offset="1" stopColor="#bfa14a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Wifi className="card-flip-credito__contactless h-4 w-4 -rotate-90 text-white/80" />
          <span className="card-flip-credito__number">{number}</span>
          <span className="card-flip-credito__date">{expiry}</span>
          <span className="card-flip-credito__name">{name}</span>
          <div className="card-flip-credito__logo">
            <svg width="36" height="24" viewBox="0 0 36 24">
              <circle cx="14" cy="12" r="11" fill="#e8b93080" />
              <circle cx="22" cy="12" r="11" fill="#f5f5f580" />
            </svg>
          </div>
        </div>
        <div className="card-flip-credito__back">
          <div className="card-flip-credito__strip" />
          <div className="card-flip-credito__mstrip" />
          <div className="card-flip-credito__sstrip">
            <span className="card-flip-credito__code">{cvv}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CardFlipCredito }
