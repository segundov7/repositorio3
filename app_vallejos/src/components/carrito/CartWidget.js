import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
import { useContext } from "react"
const CartWidget = () => {

  const {carritoIcono} = useContext(contexto)

  return(
    <>
    <li><Link to="/carrito"><span className="material-icons">shopping_cart</span></Link></li>
    {carritoIcono()}
    </>
    )  
}

export default CartWidget




