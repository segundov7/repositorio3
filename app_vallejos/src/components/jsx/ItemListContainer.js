import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import productos from './productos.json';


const ItemListContainer = () => {
   
        const [producto, setProducto] = useState([])
        const [cargando , setCargando] = useState(true)
        const {categorias} = useParams()

        

        useEffect(()=>{
            const pedido = new Promise((res)=>{
                setTimeout(()=>{
                    res(productos);
                },2000)
            })


            pedido
            .then(respuesta =>{
                if(categorias){
                    const categoria = productos.filter((item)=> item.categorias.toLowerCase() === categorias)
                    setProducto(categoria)
                    
                }else{
                    setProducto(productos)
                    setCargando(false)
                }
            })
            .catch(()=>{
            console.log("Salio todo mal")
        },[categorias])

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
