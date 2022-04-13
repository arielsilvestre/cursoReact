import { useEffect,useState } from "react";
import { getProductosById } from "../recursos";
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([]);

    const {productId} = useParams()
    console.log(productId)

    useEffect(() => {
        getProductosById(productId).then(prod => {
            setProducto(prod)
            console.log(prod);
        })
    },[])

    return (
       
        <ItemDetail prod={producto}></ItemDetail>
    ) 
}



export default ItemDetailContainer;