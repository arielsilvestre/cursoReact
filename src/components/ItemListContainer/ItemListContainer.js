import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../recursos';
import {useState,useEffect} from 'react';

const ItemListContainer = (props) => {
    const [productos,setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(prods => {
            setProductos(prods)
            /* console.log(prods); */
        })
    },[])
 
   return(
        <>
            <h1>{props.greeting}</h1>
            <ItemList produs={productos}></ItemList>
        </>
    )
}

export default ItemListContainer;