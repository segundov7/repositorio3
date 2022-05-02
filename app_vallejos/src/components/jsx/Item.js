const Item = ({producto})=>{
  return(
    <article className="articulo">
      <h3>{producto.nombre}</h3>
      <img className="imagenesItem" src={producto.imagen}></img>
      <p>Precio: {producto.precio}</p>
      <button>Detalles</button>
    </article>

  )
  
}
export default Item