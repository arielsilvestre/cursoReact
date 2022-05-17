import {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({stock,initial,onAdd}) => {
    const [count, setCount] = useState(initial);

    const addToCart = (count) => {
        if(count < stock){
            setCount(count = count+1)
        }
        else
        {
            alert("no hay stock disponible");
        }
      }
    const removeToCart = (count) => {
        if(count > 0){
            setCount(count = count-1)
        }
        else
        { 
            alert("no hay más articulos de este tipo en tu carrito");
        }
      }

      

        <button className='addToCart' onClick={()=> comprar(count)}>Agregar al carrito</button>
      const comprar = (count) =>{
          alert("comprado"+count)
      }
    
    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={() => removeToCart(count)}> - </button>
                <button onClick={() => addToCart(count)}> + </button><br />
                {
                count>0 ? <button className='addToCart' onClick={() => onAdd(count)}>Agregar al carrito</button> : 
                <button className='addToCart' disabled={true} onClick={() => onAdd(count)}>Agregar al carrito</button>
                }
            </div>
        </>
    )
}

export default ItemCount;


