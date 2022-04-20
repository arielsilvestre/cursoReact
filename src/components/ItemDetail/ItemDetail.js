import ItemCount from '../ItemCount/ItemCount'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const ItemDetail = ({id,marca,imagen, precio, modelo,stock}) => {
    const [quantity,setQuantity] = useState(0)
    const {addItem, isInCart} = useContext(CartContext);


    const agregar = (count) => {
        /* setQuantity(count) */
        
         const productObj = {
            id, marca,modelo,precio, quantity: count
        } 

        addItem(productObj)
    }

    console.log()

    return ( 
        <>
            <div>
                <img src={imagen} />
            </div>
            <div>
                <h3>Detalles del producto</h3>
                <h4>{marca}</h4>
                <h6>Modelo: {modelo}</h6>
                
                <h6>Precio: {precio}</h6>
                 {isInCart(id) > 0 ? 
                    <Link to='/cart'> Ir al carrito </Link> : 
                    <ItemCount stock={stock}  initial = {0} onAdd={agregar}> 
                        Agregar al carrito 
                    </ItemCount>
                 } 
                

            </div>
        </> 
    )
}

export default ItemDetail;