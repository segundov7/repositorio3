import {useState} from "react"

const ItemCount = ({stock,initial,onAdd})=>{
    
    const[contador,setContador] = useState(initial)
    
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
      onAdd(contador)
    }
    
    return(
      <div className="botones">
        <button className="material-icons btn" onClick={disminuirContador}>remove</button>
        <p>cantidad: {contador} unidad/es: </p>
        <button className="material-icons btn" onClick={aumentarContador}>add</button>
        <button className="material-icons btn" onClick={carrito}> add_shopping_cart </button>
      </div>
    )
}

export default ItemCount