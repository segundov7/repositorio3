/*
import {useEffect, useState} from "react"



const ItemCount = ({stock,initial,onAdd})=>{
    
    const[contador,setContador] = useState(initial)
    const[confirmado,setConfirmado]=useState(false)
   

    //ESTE EFECTO SE EJECUTA DESPUES DEL PRIMER RENDER Y CUANO CAMBIA EL VALOR DE LA VARIABLE CONFIRMADO
    useEffect(()=>{
      console.log("hubo un efecto")
    }
    ,[confirmado]);

    const aumentarContador =()=>{
        if(contador < stock){
      setContador(contador +1)
    }else{
        alert("Sin stock")
    }
    }
    const disminuirContador = ()=>{
      setContador(contador -1)
    }
    const carrito = ()=>{
      setConfirmado(true)
    }
    if(!confirmado){
       return(
      <div className="botones">
        <h2>Hola, bienvenido!</h2>
        <p>cantidad: {contador} unidad/es: </p>
        <button className="material-icons btn" onClick={disminuirContador}>remove</button>
        <button className="material-icons btn" onClick={carrito}> add_shopping_cart </button>
        <button className="material-icons btn" onClick={aumentarContador}>add</button>
      </div>
    )
    }else{
      return(
        <div className="botones">
          <h2>Hola, bienvenido!</h2>
          <p>cantidad: {contador} unidad/es: </p>
          <button className="material-icons btn" onClick={disminuirContador}>remove</button>
          <button className="material-icons btn" onClick={carrito}> add_shopping_cart </button>
          <button className="material-icons btn" onClick={aumentarContador}>add</button>
          <p className="modal">Se confirmaron {contador} productos.</p>
        </div>
      )

    }
   
}

export default ItemCount
*/