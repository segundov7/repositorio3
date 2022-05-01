import Item from "./Item"

const ItemList = ({productos})=>{
    return<>
<ul>
        {
            productos.map((producto)=>{
               
                return<li key={producto.id} className="productos_li">{producto.nombre}___${producto.precio}</li>
            
            })
        }


      </ul>
    <Item/>
    </>
}

export default ItemList


