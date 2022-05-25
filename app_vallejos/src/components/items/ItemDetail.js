import React from 'react';
import ItemCount from './ItemCount';
import {useState, useContext} from 'react'
import {contexto} from '../carrito/CartContext'
import {Link} from "react-router-dom"
 
function ItemDetail({detalle}){


  const [cantidades, setCantidades] = useState(0)
  const [confirmado, setConfirmado] = useState(false)
  const {agregarEnCarrito} = useContext(contexto)

  const agregarAlCarrito = (cantidad) =>{
    console.log(`Se agregaron ${cantidad} productos al carrito`)
    setCantidades(cantidad)
    setConfirmado(true)
    agregarEnCarrito(detalle, cantidad)
  }
  const cancelarCompra = () =>{
    setConfirmado(false)
  }

  return (
    <div>
      <b>Detalle del producto:</b>
        <p key={detalle.id}>{detalle.detalle}</p>
        <img className='imagenesItem' src= {detalle.imagen}></img>
        <p>Precio ${detalle.precio}</p>
        {
          confirmado ? (
            <>
            <button onClick={cancelarCompra}>Editar compra</button>
            <Link to={'/carrito'}><button id="finally">Ir al carrito</button></Link>
            </>
          ):(
            <ItemCount stock = {10} initial = {1} onAdd = {agregarAlCarrito}/>
          )
        }
        
    </div>
  )
}

export default ItemDetail