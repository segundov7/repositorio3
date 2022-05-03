import ItemDetail from './ItemDetail';
import productos from './productos.json';
import { useState, useEffect } from 'react';

function ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  useEffect(() => {

    let promesa = new Promise(function(res) {
      setTimeout(()=>{

        const miProducto = productos.find (product =>product.id === "7")


        res(miProducto);

      },5000);
    })
    promesa
      .then(detalle =>{
        setProducto(detalle);
      })
      .catch(err =>{
        console.log(err)
      })
      
  }, []);


  return (
    <>
        {
            producto.length == 0 && <p>Cargando...</p>
        }
        {
           <ItemDetail detalle = {producto}/>
        }
    </>
  )
}

export default ItemDetailContainer;