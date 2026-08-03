import { Fragment, useId, type CSSProperties } from "react"
import "./menu-deslizante.css"

interface MenuDeslizanteProps {
  items?: string[]
  defaultIndex?: number
  color?: string
  className?: string
}

function MenuDeslizante({
  items = ["Home", "About", "Contact"],
  defaultIndex = 0,
  color = "#f7e479",
  className = "",
}: MenuDeslizanteProps) {
  const name = useId()

  const style = {
    "--total-radio": items.length,
    "--main-color": color,
  } as CSSProperties

  return (
    <div className={`menu-deslizante ${className}`} style={style}>
      {items.map((item, index) => {
        const id = `${name}-${index}`
        return (
          <Fragment key={id}>
            <input
              type="radio"
              name={name}
              id={id}
              defaultChecked={index === defaultIndex}
            />
            <label htmlFor={id}>{item}</label>
          </Fragment>
        )
      })}
      <div className="menu-deslizante__glider-container">
        <div className="menu-deslizante__glider" />
      </div>
    </div>
  )
}

export { MenuDeslizante }
