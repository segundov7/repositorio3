import CartWidget from "./CartWidget"


const NavBar =(props)=>{

 
    if(props.header){
        return (
            <nav className ="nav"> 
                <ul className="menu">
                    <li><a href="#">{props.nombre}</a></li>
                    {
                        props.link.map((item, index) =>(
                            <li key={index}><a href="#">{item}</a></li>
                        ))
                       
                    }
                    {props.header && <CartWidget/>}
                </ul>         
            </nav>
        )
    }else{
        return (
            <nav className ="nav"> 
                <ul className="menu">
                {
                    props.link.map((item, index) =>(
                        <li key={index}><a href="#">{item}</a></li>
                    ))
                   
                }   
                </ul>         
            </nav>
        )
    }
}


export default NavBar