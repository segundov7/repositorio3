import Header from "./components/jsx/Header"
import Footer from "./components/jsx/Footer"
import Main from "./components/jsx/Main"
import ItemListContainer from "./components/jsx/ItemListContainer"
import ItemCount from "./components/jsx/ItemCount"
import ItemDetailContainer from "./components/jsx/ItemDetailContainer"



const App =()=>{
    
    return (
        <>
        <Header/>
        <ItemListContainer/>
        <ItemDetailContainer/>

        <Main/>
        <Footer/>
        </>
        
    )
}

export default App

//        <ItemCount stock = {10} initial = {1} onAdd={onAdd}/>
//        <ItemListContainer/>