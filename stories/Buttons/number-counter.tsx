import { useState } from "react"
import "./number-counter.css"

function NumberCounter() {
  const [val, setVal] = useState(12)
  const [bump, setBump] = useState(false)

  const increment = () => {
    setVal((v) => v + 1)
    setBump(true)
    setTimeout(() => setBump(false), 400)
  }

  return (
    <span
      onClick={increment}
      className={`digit${bump ? " bump" : ""}`}
      style={{ cursor: "pointer", fontSize: "2rem", fontWeight: 700 }}
    >
      {val}
    </span>
  )
}

export { NumberCounter }
