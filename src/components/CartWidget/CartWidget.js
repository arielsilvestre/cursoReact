import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { NavLink } from "react-router-dom";
const CartWidget = () => { 
  const {getQuantity} = useContext(CartContext)
  return(
    <>
    <NavLink to='/cart' >
       <img className="cartIcon" src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png" />
       <p className="cartCount">Cantidad: {getQuantity()}</p>
    </NavLink>
    </>
    )
}

export default CartWidget;