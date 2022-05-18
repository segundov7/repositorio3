import ItemDetail from './ItemDetail';
//import productos from './productos.json';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


function ItemDetailContainer() {

  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true)
  const {id} = useParams()


  useEffect(() => {
    const productosCollection = collection(db, 'productos')
    const preguntaDb = getDocs(productosCollection)

    preguntaDb
    .then((res)=>{
      const productosDb = res.docs.map(doc=>{
        const idProducto = doc.data()
        idProducto.id = doc.id
        return idProducto
      })
      if(id){
        const filtrar = productosDb.filter((item) => item.id === id)
        setProducto(filtrar)
      } else {
        setProducto(res)
        
      }
    })
    .catch(() =>{
      console.log("Salio todo mal")
    })
    .finally(()=>{
      setCargando(false)
    })
  },[id])
     

  return(
    <>
      {cargando ? <p>Cargando...</p> : <ItemDetail detalle = {producto}/>}
    </>
  )

}

export default ItemDetailContainer;