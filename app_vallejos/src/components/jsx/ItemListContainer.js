import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productos from './productos.json';
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
   
        const [producto, setProducto] = useState([])
        const [cargando , setCargando] = useState(true)

        const resultado = useParams()
        console.log(resultado)

        useEffect(()=>{
        const pedido = new Promise((res)=>{
            setTimeout(()=>{
                res(productos);
            },2000)
        })
        pedido
        .then(()=>{
            setCargando(false)
            setProducto(productos)
        })
        .catch(()=>{
            console.log("Salio todo mal")
        })

    })

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
