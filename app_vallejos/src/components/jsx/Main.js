const Main = ({children}) => {

    return(
    <main>
        <p>Hola, bienvenido</p>
        {children}
        <div>
            <button onClick={()=>{alert("COMO ESTAS?")}}>click</button>
        </div>
        
        

    </main>
    )
}

export default Main