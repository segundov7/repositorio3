import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import productos from './productos.json';


const ItemListContainer = () => {
   
        const [producto, setProducto] = useState([])
        const [cargando , setCargando] = useState(true)
        const {categoria} = useParams()

        

        useEffect(()=>{
            console.log(`categorias`,categoria)
            const pedido = new Promise((res)=>{
                setTimeout(()=>{
                    res(productos);
                },500)
            })


            pedido
            .then(respuesta =>{
                if(categoria){
                    const miProducts = productos.filter((item)=> item.categoria === categoria)
                    setProducto(miProducts)
                    
                }else{
                    setProducto(respuesta)
                    setCargando(false)
                }
            })
            .catch(()=>{
            console.log("Salio todo mal")
        })

    },[categoria])

    if(cargando){
        return(
            <p>Cargando...</p>
        )
    }else{
        return (
            <ItemList productos ={producto}/>
        )
    }
}

export default ItemListContainer
