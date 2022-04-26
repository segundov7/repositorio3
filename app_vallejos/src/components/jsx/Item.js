import {useEffect, useState} from "react"

const Item = ()=>{
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
            
              setProductos(productosDeBaseDeDatos)
      
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
        <ul>
            {
                productos.map((producto)=>{
                   
                    return<li key={producto.id} className="productos_li">{producto.nombre}___${producto.precio}</li>
                
                })
            }


        </ul>

        
    
    </>
    )
}
export default Item