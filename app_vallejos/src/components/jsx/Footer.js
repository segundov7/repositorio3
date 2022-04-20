import NavBar from "./NavBar"
const Footer =()=>{

    const links = ["Inicio","Productos","Nosotros","Contacto"]

    return (
    <footer className="footer">
    <NavBar
        
        link={links}
        
    />
        <p className="footer__p">&copy; Copyright - Todos los derechos reservados</p> 
    </footer>
    )
}

export default Footer