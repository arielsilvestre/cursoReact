import '../ItemList/ItemList.css';
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Item from "../Item/Item";
import { getProductos } from "../recursos";

const ItemList = ({produs}) => {
    return (
        <section className='card'>
            {produs.map(prod => <Item key={prod.id} {...prod}></Item>)}
        </section>
    )
}

export default ItemList;