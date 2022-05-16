import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto

const MiCustomProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])

    const agregarEnCarrito = (producto, cantidad) =>{
        //si esta en carritohago un map y cuando el producto.id coincida con el item.id voy a reemplazar el item por el producto y la cantidad
        if(enCarrito(producto.id)){
            const nuevoCarrito = carrito.map(item =>(
                item.id === producto.id ? {...producto, cantidad}: item)
            );
            setCarrito(nuevoCarrito)
        }else{
            //si no esta dentro de carrito solo lo agrego
           setCarrito([...carrito, {...producto, cantidad}])
        }
    }
    const enCarrito = (producto) => {
        //return carrito.find(a => a.id === producto)
        return carrito.some(a => a.id === producto)
    }
    const carritoIcono = () => {
        return carrito.reduce((acum, value) => acum + value.quantity, 0);
    }
    const totalPagar = () =>{
        return carrito.reduce((acum, value) => (acum + (value.quantity * value.producto.price)),0)
    }
    const eliminarDelCarrito = (id) =>{
        const nuevoCarrito = carrito.filter(elemento => elemento.id !== id);
        setCarrito(nuevoCarrito);
    }
    const vaciarCarrito = () =>{
        setCarrito([])
    }
    return(
        <Provider value = {{agregarEnCarrito, vaciarCarrito, eliminarDelCarrito, totalPagar, carritoIcono}}>
            {children}
        </Provider>
    )
}

export default MiCustomProvider