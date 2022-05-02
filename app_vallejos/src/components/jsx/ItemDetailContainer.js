import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const productosIniciales = [
    {
      id:1,
      nombre:"Cerveza",
      precio:400,
      imagen:"https://jumboargentina.vteximg.com.br/arquivos/ids/339532-512-512/Cerveza-Retornable-Heineken-1-L-3-236821.jpg?v=636396268411500000"
    },
    {
      id:2,
      nombre:"Vino",
      precio:500,
      imagen:"https://www.barrelvinos.com.ar/wp-content/uploads/productos/7-798143-820243-400x400.jpg"
    },
    {
      id:3,
      nombre:"Fernet",
      precio:900,
      imagen:"https://labebidadetusfiestas.com.ar/37266-large_default/fernet-branca-1lt.jpg"
    },
    {
      id:4,
      nombre:"Coca-cola",
      precio:250,
      imagen:"https://m.media-amazon.com/images/I/5156FefjlqL._SX466_.jpg"
    },
    {
        id:5,
        nombre:"Whisky",
        precio:1500,
        imagen:"https://vinotecamasis.com.ar/wp-content/uploads/2021/01/JWalker-Red-Label-750ml-ML.png"
    },
    {
        id:6,
        nombre:"Sprite",
        precio:250,
        imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/682853/Gaseosa-Sprite-Lima-lim-n-1-5-L-2-248096.jpg?v=637764969686070000"
    },
    {
        id:7,
        nombre:"Red Bull",
        precio:200,
        imagen:"https://m.media-amazon.com/images/I/61E28l8RSsL._SL1500_.jpg"
    },
    {
        id:8,
        nombre:"Vodka",
        precio:1000,
        imagen:"https://d2r9epyceweg5n.cloudfront.net/stores/001/212/084/products/absolut-vodka-4347781-7f56e800776a7328bc15913893120686-1024-1024.jpg"
    }
    
  ];

const ItemDetailContainer = () => {
   
        const [productos, setProductos] = useState([])
        const [cargando , setCargando] = useState(true)

        useEffect(()=>{
        const pedido = new Promise((res)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })
        pedido
        .then(()=>{
            setCargando(false)
            setProductos(productosIniciales)
        })
        .catch(()=>{
            console.log("Salio todo mal")
        })

    })

    if(cargando){
        return(
            <p>Cargando...</p>
        )
    }else{
        return (
            <ItemDetail productos ={productos}/>
        )
    }
}

export default ItemDetailContainer