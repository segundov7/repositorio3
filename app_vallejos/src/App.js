import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/items/ItemListContainer"
import ItemDetailContainer from "./components/items/ItemDetailContainer"
import Carrito from "./components/carrito/Carrito"
import MiCustomProvider from "./components/carrito/CartContext"



const App =()=>{
    
    return (
        <BrowserRouter>
            <MiCustomProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}></Route>
                    <Route path="/bebidas/:categoria" element={<ItemListContainer/>}></Route>
                    <Route path="/bebida/:id" element={<ItemDetailContainer/>}></Route>
                    <Route path="/carrito" element={<Carrito/>}></Route>
                </Routes>
            </MiCustomProvider>
                <Footer/>
        </BrowserRouter>   
    )
}

export default App

//        <ItemCount stock = {10} initial = {1} onAdd={onAdd}/>
//            <Main/>