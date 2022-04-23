import Header from "./components/jsx/Header"
import Footer from "./components/jsx/Footer"
import Main from "./components/jsx/Main"
import ItemListContainer from "./components/jsx/ItemListContainer"
import ItemCount from "./components/jsx/ItemCount"

const App =()=>{
    
    const onAdd =()=>{

    }
    
    return (
        <>
        <Header/>
        <ItemListContainer greeting = {<b> Hola como estas? Bienvenido</b>}/>
        <ItemCount stock = {10} initial = {1} onAdd={onAdd}/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App