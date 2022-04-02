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
    
    return (
        <>
            <div>
                <p>Contador</p>
                <p>{count}</p>
                <button onClick={() => addToCart(count)}> Agregar al Carrito </button>
            </div>
        </>
    )
}

export default ItemCount;


