import ItemDetail from './ItemDetail';
import productos from './productos.json';
import { useState, useEffect } from 'react';

function ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      let promesa = new Promise(function (res) {
              res(productos);
          })
      promesa
      .then(detalle => {
        setProducto(detalle);
      })
      .catch(err => {
        console.log(err);
      })
    }, 5000);
      
  }, []);


  return (
    <>
        {
            producto.length == 0 && <p>Cargando...</p>
        }
        {
            producto.map((detail,i)=>{
                return (
                  <ItemDetail detalle={detail} key={i} />
                )
            })
        }
    

    </>
  )
}

export default ItemDetailContainer;