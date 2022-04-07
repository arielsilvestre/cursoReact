import { useEffect,useState } from "react";
import { getProductosById } from "../recursos";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({id}) => {
    const [producto,setProducto] = useState([]);

    useEffect(() => {
        getProductosById(id).then(prod => {
            setProducto(prod)
            console.log(prod);
        })
    },[])

    return (
        <ItemDetail prod={producto}></ItemDetail>
    ) 
}



export default ItemDetailContainer;