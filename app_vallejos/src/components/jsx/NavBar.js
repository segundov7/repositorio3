import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"


const NavBar =({header})=>{
    if(header){
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><Link to="/bebidas/Cervezas" className="nav__link">Cervezas</Link></li>
                    <li><Link to="/bebidas/Vinos" className="nav__link">Vinos</Link></li>
                    <li><Link to="/bebidas/Whiskys" className="nav__link">Whiskys</Link></li>
                    <li><Link to="/bebidas/Aperitivos" className="nav__link">Aperitivos</Link> </li>
                    <li><Link to="/bebidas/Licores" className="nav__link">Licores</Link> </li>
                    <li><Link to="/bebidas/Sin Alcohol" className="nav__link">Sin Alcohol</Link> </li>
                    <Link to="/carrito"><CartWidget/></Link>
                </ul>         
            </nav>
    )
    }else{
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><Link to="/bebidas/Cervezas" className="nav__link">Cervezas</Link></li>
                    <li><Link to="/bebidas/Vinos" className="nav__link">Vinos</Link></li>
                    <li><Link to="/bebidas/Whiskys" className="nav__link">Whiskys</Link></li>
                    <li><Link to="/bebidas/Aperitivos" className="nav__link">Aperitivos</Link> </li>
                    <li><Link to="/bebidas/Licores" className="nav__link">Licores</Link> </li>
                    <li><Link to="/bebidas/Sin Alcohol " className="nav__link">Sin Alcohol</Link> </li>
                </ul>         
            </nav>
        )
    }
}
export default NavBar