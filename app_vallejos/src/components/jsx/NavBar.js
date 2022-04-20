import CartWidget from "./CartWidget"


const NavBar =(props)=>{

 
    if(props.header){
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><a href="#">{props.nombre}</a></li>
                    <li><a href="#">{props.link[0]}</a></li>
                    <li><a href="#">{props.link[1]}</a></li>
                    <li><a href="#">{props.link[2]}</a></li>
                    <li><a href="#">{props.link[3]}</a> </li>
                    <li><a href="#"><span className="material-icons">shopping_cart</span></a></li>
                </ul>         
            </nav>
        )
    }else{
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><a href="#">{props.link[0]}</a></li>
                    <li><a href="#">{props.link[1]}</a></li>
                    <li><a href="#">{props.link[2]}</a></li>
                    <li><a href="#">{props.link[3]}</a></li>
                    
                </ul>         
            </nav>
        )
    }
}
<CartWidget/>

export default NavBar