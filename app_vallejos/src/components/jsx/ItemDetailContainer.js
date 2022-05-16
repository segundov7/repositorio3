import ItemDetail from './ItemDetail';
import productos from './productos.json';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true)
  const {id} = useParams()


  useEffect(() => {

    let promesa = new Promise(function (res) {
        setTimeout(() => {

          const miProducto = productos.filter((producto)=>{
            return producto.id == id
          })[0]
          
          res(miProducto)
          setCargando(false)

        }, 500);
      })
    promesa
      .then(detalle =>{
        setProducto(detalle);
      })
      .catch(err =>{
        console.log(err)
      })
      
  },);

  return(
    <>
      {cargando ? <p>Cargando...</p> : <ItemDetail detalle = {producto}/>}
    </>
  )

}

export default ItemDetailContainer;