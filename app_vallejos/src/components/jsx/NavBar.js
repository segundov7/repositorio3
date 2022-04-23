import CartWidget from "./CartWidget"


const NavBar =(props)=>{

 
    if(props.header){
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><a href="#">{props.nombre}</a></li>
                    {
                        props.link.map(item =>(
                            <li><a href="#">{item}</a></li>
                        ))
                    }
                    <CartWidget/>
                </ul>         
            </nav>
        )
    }else{
        return (
            <nav className ="nav"> 
                <ul className="menu">
                {
                    props.link.map(item =>(
                            <li><a href="#">{item}</a></li>
                        ))
                }
                </ul>         
            </nav>
        )
    }
}


export default NavBar