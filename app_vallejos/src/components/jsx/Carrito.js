import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"

const Carrito = () => {

  const  {carrito, eliminarDelCarrito, totalPagar, vaciarCarrito}= useContext(contexto)

  return (

    <div>
    {carrito.length > 0 ?
      <>
      {carrito.map((item) => 
      <div key={item.producto.id}>
        <img className='imagenesItem' src= {item.producto.imagen}></img>
        <h3>{item.producto.nombre}</h3>
        <h3>Cantidad: {item.cantidad}</h3>
        <h3>Precio (unidad): $ {item.producto.precio}</h3>
        <h3>Total: $ {(item.cantidad) * (item.producto.precio)}</h3>
        <button onClick={ () => eliminarDelCarrito(item.producto.id)}>Eliminar</button>

      </div> 
      )}
      <div> 
      <h3>Total a pagar: $ {totalPagar()}</h3> 
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <button>Pagar</button>
      </div>
      </>
    : <div>
        <h1>No hay nada en tu carrito... </h1>
          <Link to={"/"}>
            <button>Volver a la tienda</button>
          </Link>
      </div>} 
  </div>
  
    
  )
}

export default Carrito