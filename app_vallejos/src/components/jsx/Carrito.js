import { useContext } from "react"
import { contexto } from "./CartContext"

const Carrito = () => {

  const {precio_total} = useContext(contexto)

  return (
    <div>
      <h2>Carrito</h2>
      <h3>Precio total: ${precio_total}</h3>
    </div>
  )
}

export default Carrito