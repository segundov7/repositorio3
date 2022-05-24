import { useContext , useState} from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"
import { db } from "./firebase"
import { collection , addDoc } from "firebase/firestore"

const Carrito = () => {

  const  {carrito, eliminarDelCarrito, totalPagar, vaciarCarrito}= useContext(contexto)
  const [idCompra, setIdCompra] = useState("")

  const guardarCompra = () => {
    const ordenesCollection = collection(db,"ordenes")

    const orden = {
      buyer : {
        nombre : "pedro",
        tel : "97346273",
        email : "test@test"
      },
    
      items : carrito,
      fecha : "",
      total : 10000
    }

    const consulta = addDoc(ordenesCollection,orden)

    consulta
    .then((resultado)=>{
      setIdCompra(resultado.id)
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  return (

    <div>
    {carrito.length > 0 ?
      <>
      {carrito.map((item) => 
      <div key={item.detalle.id}>
        <img className='imagenesItem' src= {item.imagen}></img>
        <h3>{item.nombre}</h3>
        <h3>Cantidad: {item.cantidad}</h3>
        <h3>Precio (unidad): $ {item.precio}</h3>
        <h3>Total: $ {(item.cantidad) * (item.precio)}</h3>
        <button onClick={ () => eliminarDelCarrito(item.id)}>Eliminar</button>
        <button onClick={guardarCompra}>Finalizar compra</button>
        {idCompra && <h3>Compra guardada con id: {idCompra}</h3>}

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