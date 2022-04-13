import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../recursos';
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {
    const [productos,setProductos] = useState([]);

    const {productId} = useParams()
    /* console.log(productId) */
    


    useEffect(() => {
        getProductos(productId).then(prods => {
            setProductos(prods)
            /* console.log(prods); */
        })
    },[productId])
 
   return(
        <>
            <h1>{props.greeting}</h1>
            <ItemList produs={productos}></ItemList>
        </>
    )
}

export default ItemListContainer;