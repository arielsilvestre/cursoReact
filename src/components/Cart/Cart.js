import CartContext from '../../context/CartContext';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
    console.log()
    const {addItem, isInCart,getQuantity,cart,removeItem,getTotal} = useContext(CartContext);

    return (
        
        <div>
        
            { !getQuantity() ? 
                <Link to='/'><h1>El carrito está vacio ir al inicio</h1></Link> : 
                
                cart.map(prod =>  <tr key={prod.id}>
                                    <td>{prod.color}</td>
                                    <td>{prod.marca}</td> 
                                    <td>{prod.quantity}</td> 
                                    <td>{prod.precio} </td>
                                    <td>{prod.precio*prod.quantity}</td>
                                    <td><button onClick={() => removeItem(prod.id)}> X </button></td>
                                </tr>
                                )
                            }
            <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>Total </td>            
                <td>${getTotal()}</td>
            </tr>

        </div>
    )
}

export default Cart;