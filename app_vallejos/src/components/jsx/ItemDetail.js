import React from 'react';
import ItemCount from './ItemCount';
import {useState} from 'react'

function ItemDetail({detalle}){


  const [cantidades, setCantidades] = useState(0)

  const agregarAlCarrito = (cantidad) =>{
    console.log(`Se agregaron ${cantidad} productos al carrito`)
    setCantidades(cantidad)
  }

  return (
    <div>
      <b>Detalle del producto:</b>
        <p key={detalle.id}>{detalle.detalle}</p>
        <ItemCount stock = {10} initial = {1} onAdd = {agregarAlCarrito}/>
    </div>
  )
}

export default ItemDetail