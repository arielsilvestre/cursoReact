import { useEffect,useState } from "react";
import { getProductosById } from "../recursos";
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";  // para traer solo un item de la colección

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([]);

    const {productId} = useParams()
    /* console.log(producto)
 */
    useEffect(() => {
        /* getProductosById(productId).then(prod => {
            setProducto(prod)
        }) */
        getDoc(doc(firestoreDb,'productos',productId)).then(response=>{
            console.log(response)
            const producto = {id: response.id , ...response.data()}
            setProducto(producto)
        })
    },[productId])

    return (
       
        <ItemDetail {...producto} ></ItemDetail>
    ) 
}



export default ItemDetailContainer;