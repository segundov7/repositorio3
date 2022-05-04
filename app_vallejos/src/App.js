import Header from "./components/jsx/Header"
import Footer from "./components/jsx/Footer"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/jsx/ItemListContainer"
import ItemDetailContainer from "./components/jsx/ItemDetailContainer"
import Carrito from "./components/jsx/Carrito"



const App =()=>{
    
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/bebidas/:categoria" element={<ItemListContainer/>}></Route>
                <Route path="/bebida/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    )
}

export default App

//        <ItemCount stock = {10} initial = {1} onAdd={onAdd}/>
//            <Main/>