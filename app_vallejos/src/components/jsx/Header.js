import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
    return (

    <header>
        <Link to="/" className="titulo"><h1>Tienda de bebidas</h1> </Link>
        
        <NavBar
            nombre= "Segundo"
            header
        />
    </header>
    

    )
}

export default Header