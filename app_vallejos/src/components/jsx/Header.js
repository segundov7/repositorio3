import NavBar from "./NavBar"

const links = ["Inicio","Productos","Nosotros","Contacto"];

const nombre = prompt("¿Cual es tu nombre?")

const Header = () => {
    return (

    <header>
        <h1>Tienda de Bebidas</h1> 
        <NavBar
            nombre={nombre}
            link={links}
            header
            
        />
    </header>
    

    )
}

export default Header