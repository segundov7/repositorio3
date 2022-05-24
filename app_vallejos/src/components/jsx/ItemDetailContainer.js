import ItemDetail from './ItemDetail';
//import productos from './productos.json';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from "./firebase";
import {doc, getDoc } from "firebase/firestore";


function ItemDetailContainer() {

  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true)
  const {id} = useParams()


  useEffect(() => {
    const productosCollection = doc(db, 'productos',id)
    const preguntaDb = getDoc(productosCollection)

    preguntaDb
    .then((res)=>{
      const miProducto = {...res.data(),id: res.id}

        setProducto(miProducto)
      })
      .catch(()=>{
        console.log("salio todo mal")
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