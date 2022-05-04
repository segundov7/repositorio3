import React from 'react';

function ItemDetail({detalle}){

  return (
    <>
        <p key={detalle.id}>{detalle.detalle}</p>
    </>
  )
}

export default ItemDetail