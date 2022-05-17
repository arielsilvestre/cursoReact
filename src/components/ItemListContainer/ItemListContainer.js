import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
/* import { getProductos } from '../recursos'; */
import {getDocs,collection,query,where} from 'firebase/firestore'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { firestoreDb } from '../../services/firebase';

const ItemListContainer = (props) => {
    const [productos,setProductos] = useState([]);

    const {productId} = useParams()
    /* console.log(productId) */
    


    useEffect(() => {
        /* getProductos(productId).then(prods => {
            setProductos(prods)
        }) */

        const coleccionRef = productId 
        ? query( collection(firestoreDb,'productos'), where('categoria', '==',productId))
        : collection(firestoreDb,'productos') 

        getDocs(coleccionRef).then(response=> {
            /* console.log(response); */
            const productos = response.docs.map(doc=>{
                return {id:doc.id, ...doc.data()}
            });
            setProductos(productos)
        })

    },[productId])

    if (productos.length === 0 ){
        return <h1>NO HAY PRODUCTOS</h1>
    }
 
   return(
        <>
            <h1>{props.greeting}</h1>
            <ItemList produs={productos}></ItemList>
        </>
    )
}

export default ItemListContainer;