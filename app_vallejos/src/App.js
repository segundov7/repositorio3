import Header from "./components/jsx/Header"
import Footer from "./components/jsx/Footer"
import Main from "./components/jsx/Main"
import ItemListContainer from "./components/jsx/ItemListContainer"
import ItemCount from "./components/jsx/ItemCount"


const pedido = fetch('https://fakestoreapi.com/products/1')

pedido 
.then ((respuesta)=>{
    console.log(respuesta)
})
.catch ((err)=>{
    console.log(err)
})

const App =()=>{
    
    const onAdd =()=>{

    }
    
    return (
        <>
        <Header/>
        <ItemCount stock = {10} initial = {1} onAdd={onAdd}/>
        <ItemListContainer/>
        <Main/>
        <Footer/>
        </>
        
    )
}

export default App