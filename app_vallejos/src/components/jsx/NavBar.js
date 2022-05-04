import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"


const NavBar =({nombre,header})=>{
    if(header){
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><Link to="/" className="nav__link">{nombre}</Link></li>
                    <li><Link to="/bebidas/cervezas" className="nav__link">Cervezas</Link></li>
                    <li><Link to="/bebidas/vinos" className="nav__link">Vinos</Link></li>
                    <li><Link to="/bebidas/whiskys" className="nav__link">Whiskys</Link></li>
                    <li><Link to="/bebidas/aperitivos" className="nav__link">Aperitivos</Link> </li>
                    <li><Link to="/bebidas/licores" className="nav__link">Licores</Link> </li>
                    <li><Link to="/bebidas/sinalcohol" className="nav__link">Sin Alcohol</Link> </li>
                    <Link to="/carrito"><CartWidget/></Link>
                </ul>         
            </nav>
    )
    }else{
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><Link to="/" className="nav__link">{nombre}</Link></li>
                    <li><Link to="/bebidas/cervezas" className="nav__link">Cervezas</Link></li>
                    <li><Link to="/bebidas/vinos" className="nav__link">Vinos</Link></li>
                    <li><Link to="/bebidas/whiskys" className="nav__link">Whiskys</Link></li>
                    <li><Link to="/bebidas/aperitivos" className="nav__link">Aperitivos</Link> </li>
                    <li><Link to="/bebidas/licores" className="nav__link">Licores</Link> </li>
                    <li><Link to="/bebidas/sinalcohol " className="nav__link">Sin Alcohol</Link> </li>
                </ul>         
            </nav>
        )
    }
}
export default NavBar