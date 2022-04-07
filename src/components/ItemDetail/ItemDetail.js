
const ItemDetail = ({prod}) => {
    return (
        <>
            <img src={prod.imagen} />
            <h3>Detalles del producto {prod.nombre}</h3>
            <h4>{prod.marca}</h4>
            <h6>Modelo: {prod.modelo}</h6>
            
            <h6>Precio: ${prod.precio}</h6>
        </>

    )
}

export default ItemDetail;