import CartContext from '../../context/CartContext';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
import { addDoc,collection,Timestamp, updateDoc,doc, getDocs,query,documentId,where } from 'firebase/firestore'; //para agregar un documento a firestore
import { writeBatch } from 'firebase/firestore'; // para crear batchs pra los updates de firestore
import { firestoreDb } from '../../services/firebase';


const Cart = () => {
    console.log()
    const {addItem, isInCart,getQuantity, cart,removeItem,getTotal} = useContext(CartContext);
    const [form,setForm] = useState(false);
    const [userOrder,setUserOrder] = useState({})

    const objOrder = {
        items: cart,
        buyer: { 
            nombre: 'pepito',
            tel: '12345',
            email: 'pepito@gomez.com'
        },
        total: getTotal,
        date: new Date()
    }

    
    const addDocToCollection = () => {
        const collectionRef = collection(firestoreDb,'unaColecciónQueNoExiste')
        const objUser = {
            nombre: 'pepito',
            tel: '12345',
            email: 'pepito@gomez.com',
            date: Timestamp.fromDate(new Date())
        }
        
        addDoc(collectionRef,objUser).then(response=>{
            console.log(">>"+response.id)
        })
    }
    
    const updateDocFromCollection = () => {
        const id = 'mUAYr5vqfkxFjj2SgCrc'
        
        const docRef = doc(firestoreDb, 'unaColecciónQueNoExiste',id)
        
        const fieldToUpdate = {
            name: 'Brad Goodman',
            date: Timestamp.fromDate(new Date())
        }
        
        updateDoc(docRef,fieldToUpdate).then(response=>{
            console.log(response)
        })
    }
    
    const mostrarUsuario = () => {
       
        console.log(userOrder);
    }
    const mostrarForm = () => {
        setForm(true);
    }
    const handleNombreChanged = (event) => {
       
        userOrder.nombre = event.target.value
        console.log(userOrder)
      }
    const handleApellidoChanged = (event) => {
      
        userOrder.apellido = event.target.value
        console.log(userOrder)
      }
    const handleTelefonoChanged = (event) => {
       
        userOrder.telefono = event.target.value
        console.log(userOrder)
      }
    const handleEmailChanged = (event) => {
     
        userOrder.email = event.target.value
        console.log(userOrder)
      }

    

    const createOrder = (userOrder) => {
        const objUser = {
            Buyer : {
                nombre: userOrder.nombre,
                apellido: userOrder.apellido,
                tel: userOrder.telefono,
                email: userOrder.email
            },
            itemsUser : cart.map(prod => prod),
            date: Timestamp.fromDate(new Date()),
            total: getTotal()
        }
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb,'unaColecciónQueNoExiste')

        const outOfStock = []

        getDocs(query(collectionRef,where(documentId(),'in',ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod=>prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity){
                    batch.update(doc.ref,{stock:dataDoc.stock - prodQuantity})
                }
                else{
                    outOfStock.push({id:doc.id, ...dataDoc})
                }

            })
        }).then(()=> {
            if(outOfStock.length === 0) {
                const collectionRef = collection(firestoreDb,'compras')
               return addDoc(collectionRef,objUser) 
            } else{

            }
        })

       /*  localStorage.setItem(localStorage.length+1, objUser) */
    }

    return (
        
        <div>
        
            { !getQuantity() ? 
                <Link to='/'><h1>El carrito está vacio ir al inicio</h1></Link> : 
                
                cart.map(prod =>  <tr key={prod.id}>
                                    <td>{prod.color}</td>
                                    <td>{prod.marca}</td> 
                                    <td>{prod.quantity}</td> 
                                    <td>{prod.precio} </td>
                                    <td>{prod.precio*prod.quantity}</td>
                                    <td><button onClick={() => removeItem(prod.id)}> X </button></td>
                                </tr>
                                )
                            }
            <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>Total </td>            
                <td>${getTotal()}</td>
            </tr>
           {/*  <td><button onClick={() => updateDocFromCollection()}> Actualizar documento </button></td>
            <td><button onClick={() => addDocToCollection()}> addDocToCollection </button></td> */}
            {/* <td><button onClick={() => createOrder()}> generar orden </button></td> */}
            <td><button onClick={() => mostrarForm()}> Generar orden </button></td>
       

        <section>
            <div>
                {form && cart.length>0 ? 
                    <div>
                    <h2>Ingresa tus datos para finalizar</h2> 
                        <div>
                        <form>
                            
                            <label>Nombre: <br /> <input type="text" name="nombre" placeholder="Ingrese su nombre..." onChange={handleNombreChanged.bind(this)} /> </label> <br />
                            <label> Apellido  <br />
                            <input type="text" name="apellido" onChange={handleApellidoChanged.bind(this)}/> </label>  <br />
                            <label> Telefono: <br /> 
                            <input type="text" name="telefono" onChange={handleTelefonoChanged.bind(this)}/></label>  <br />
                            <label> email: <br />
                            <input type="text" name="email" onChange={handleEmailChanged.bind(this)} /></label>  <br />
                            <label> confirmar email:  <br />
                            <input type="text" name="emailValidator" onChange={event => event.target.value} /></label> <br />
                            
                            <button onClick={createOrder(userOrder)}>Comprar</button>
                        </form>
                        
                        </div>  
                    </div>
                : 
                ''}
            </div>
        </section>
    </div>
    )
}

export default Cart;