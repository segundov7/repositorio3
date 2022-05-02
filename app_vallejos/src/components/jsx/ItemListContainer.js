/*
import ItemList from "./ItemList"

import {useEffect, useState} from "react" 

const ItemListContainer = () => {

  const productosDeBaseDeDatos = [
    {
      id:1,
      nombre:"Cerveza",
      precio:400,
    },
    {
      id:2,
      nombre:"Vino",
      precio:500,
    },
    {
      id:3,
      nombre:"Fernet",
      precio:900,
    },
    {
      id:4,
      nombre:"Coca-cola",
      precio:250,
    },
    
  ];
    const[productos, setProductos] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res)=>{
            res(productosDeBaseDeDatos)
        })

        .then((contenido)=>{ 
            
            setTimeout(()=>{
          //console.log("recibo producto")
          //console.log(productosDeBaseDeDatos)
        
          setProductos(contenido)
  
        },2000)
            console.log("Salio todo bien")
        })

        .catch(()=>{
            console.log("Salio todo mal")
        })

        //console.log("pido un producto")
  
       
        
  
      },[])
  return(
    <>
      <ItemList productos={productos}/>
    </>
  )

}

export default ItemListContainer

*/