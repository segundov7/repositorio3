import { Link } from "react-router-dom"
import NavBar from "../navbar/NavBar"

const Header = () => {
    return (

    <header>
        <Link to="/" className="titulo"><h1>Tienda de bebidas</h1> </Link>
        
        <NavBar
            
            header
        />
    </header>
    

    )
}

export default Header