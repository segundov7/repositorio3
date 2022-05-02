import Item from "./Item"
const ItemDetail = ({productos}) => {
  return (
    <section className="itemDetail">
        {
            productos.map(producto =>{
                return(
                    <Item key={producto.id} producto = {producto}/>
                )
            })
        }


    </section>
)

}

export default ItemDetail