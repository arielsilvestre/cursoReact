import { createContext,useState } from "react";
import { getCategories } from "../components/recursos";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])
   /*  console.log(cart) */

    const addItem = (productToAdd) => {
        setCart([...cart,productToAdd])
    }

    const getQuantity = () => {
       let count = 0
       cart.forEach(prod => {
           count = count + prod.quantity
       });
       return count
    }

    const removeItem = (id) => {
        const productos = cart.filter(prod=> prod.id !== id)
        setCart(productos)
    }

    const clearCart = () => {
        setCart([]);
    } 

    const isInCart = (id) => { 
        return cart.some(prod => prod.id === id)
    }

    const getCart = () => {
        return cart;
    }

    const getTotal = () =>{
        let total = 0
        cart.forEach(prod => {
            total += prod.precio * prod.quantity
        });
        return total
    }

    return (
        <>
            <CartContext.Provider value = {{
                cart, 
                addItem,
                getQuantity,
                removeItem,
                isInCart,
                getTotal
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}


export default CartContext