import {useState} from 'react';

const ItemCount = ({stock,initial,onAdd}) => {
    const [count, setCount] = useState(initial);

    const addToCart = (count) => {
        if(count < stock){
            setCount(count = count+1)
            console.log(count);
        }
        else
        {
            alert("no hay stock disponible");
        }
      }
    const removeToCart = (count) => {
        if(count > 0){
            setCount(count = count-1)
            console.log(count);
        }
        else
        {
            alert("no hay más articulos de este tipo en tu carrito");
        }
      }
    
    return (
        <>
            <div>
                <p>Contador</p>
                <p>{count}</p>
                <button onClick={() => removeToCart(count)}> - </button>
                {/* <button onClick={() => addToCart(count)}> Ver detalle </button> */}
                <button onClick={() => addToCart(count)}> + </button>
            </div>
        </>
    )
}

export default ItemCount;


