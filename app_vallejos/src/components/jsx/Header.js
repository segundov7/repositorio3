import NavBar from "./NavBar"

const links = ["Inicio","Productos","Nosotros","Contacto"];



const Header = () => {
    return (

    <header>
        <h1>Tienda de bebidas</h1> 
        <NavBar
            nombre= "Segundo"
            link={links}
            header
            
            
        />
    </header>
    

    )
}

export default Header