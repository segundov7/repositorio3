import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
//import productos from './productos.json';

//db es referencia a toda la base de datos donde estan todas la colecciones
import { db } from "./firebase"
//collection es una funcion que nos da una referencia a una coleccion dentro de una base de datos
import { collection, getDoc, doc, getDocs, addDoc } from "firebase/firestore"


const ItemListContainer = () => {
   
        const [producto, setProducto] = useState([])
        const [cargando , setCargando] = useState(true)
        const {categoria} = useParams()

        useEffect(()=>{
            const productosCollection = collection(db, 'productos')
            const preguntaDb = getDocs(productosCollection)

            preguntaDb
        .then((resultado) =>{
            const productos = resultado.docs.map(doc =>{
                const idProducto = doc.data()
                idProducto.id = doc.id

                return idProducto
            })
            setProducto(productos)
            if(categoria){
                const miProducts = productos.filter((item) => item.categoria === categoria)
                setProducto(miProducts);
            }
                })
                .catch(() =>{
                    console.log("Salio todo mal")
                })
                .finally(()=>{
                    setCargando(false)
                })
            
            
        },[categoria])

    

        return(
            <>
                {cargando ? <p>Cargando...</p>:  <ItemList productos ={producto}/>}
            </>
        )

}


export default ItemListContainer
