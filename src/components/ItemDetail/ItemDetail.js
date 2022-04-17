import ItemCount from '../ItemCount/ItemCount'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';


const ItemDetail = ({prod, id, nombre, precio, modelo,stock}) => {
    const [quantity,setQuantity] = useState(0)
    const {cart, setCart} = useContext(Context)

    const agregar = (count) => {
        setQuantity(count)
        console.log("hola "+count)
        
        /* const productObj = {
            id, nombre, precio
        }  */
    }

    console.log()

    return ( 
        <>
            <div>
                <img src={prod.imagen} />
            </div>
            <div>
                <h3>Detalles del producto {prod.nombre}</h3>
                <h4>{prod.marca}</h4>
                <h6>Modelo: {prod.modelo}</h6>
                
                <h6>Precio: {prod.precio}</h6>
                 {quantity > 0 ? 
                    <Link to='/cart'> Ir al carrito </Link> : 
                    <ItemCount stock={prod.stock}  initial = {0} onAdd={agregar}> 
                        Agregar al carrito 
                    </ItemCount>
                 } 
                

            </div>
        </> 
    )
}

export default ItemDetail;