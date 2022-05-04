import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"




const Item = ({producto})=>{


  const navigate = useNavigate()

  const handleClick = () =>{
      navigate(`/bebida/${producto.detalle}`)
  }




  return(
    <article className="articulo">
      <h3>{producto.nombre}</h3>
      <img className="imagenesItem" src={producto.imagen}></img>
      <p>Precio: {producto.precio}</p>
      <button onClick={handleClick}>Detalle</button>
    </article>

  )
  
}
export default Item