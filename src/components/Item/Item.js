import '../Item/Item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({nombre,modelo,precio}) => {
    const addToCart = (quantity) => {
        quantity++;
        console.log(`Se agregaron ${quantity} productos`);
      }
    return (
        <div className='tarjeta'>
            <h4>{nombre}</h4>
            <h6>{modelo}</h6>
            <h6>{precio}</h6>
            <ItemCount stock={10} initial = {0} onAdd={addToCart}></ItemCount>
        </div>
    )
} 

export default Item;