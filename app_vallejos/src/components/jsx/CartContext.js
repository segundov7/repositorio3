import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto

const MiCustomProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const agregarEnCarrito = (producto, cantidad) =>{
        if(enCarrito(producto.id)){
            const nuevoCarrito = [carrito];
            for(const elemento of nuevoCarrito){
                if(elemento.producto.id == producto.id){
                    producto.cantidad = producto.cantidad + cantidad;
                }
            }
            setCarrito(nuevoCarrito)
        }else{
            setCarrito([carrito,{
                producto: producto,
                cantidad: cantidad,
            }])
        }

    }
    
    const enCarrito = (producto) => {
        return carrito.find(a => a.id === producto)


    }

    const eliminarDelCarrito = (id) =>{
        const nuevoCarrito = [carrito].map(elemento => elemento.id !== id);
        setCarrito(nuevoCarrito);


    }



    const vaciarCarrito = () =>{
        setCarrito([])


    }
    
    return(
        <Provider value = {{agregarEnCarrito, vaciarCarrito, eliminarDelCarrito,}}>
            {children}
        </Provider>
    )
}

export default MiCustomProvider