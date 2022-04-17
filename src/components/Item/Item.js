import '../Item/Item.css'
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'

const Item = ({nombre,modelo,precio,imagen, id}) => {
    const addToCart = (quantity) => {
        quantity++;
        console.log(`Se agregaron ${quantity} productos`);
      }

 
    return (
        <div className='tarjeta'>
            <img src={imagen}></img>
            <h4>{nombre}</h4>
            <h6>{modelo}</h6>
            <h6>{precio}</h6>
            {/* <ItemCount stock={10} initial = {0} onAdd={addToCart}></ItemCount>  */}
            <Link to={`/detail/${id}` } className='boton'>Ver detalle</Link>
         
        </div>
    )
} 

export default Item;