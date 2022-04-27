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

    const createOrder = () => {
        const objUser = {
            nombre: 'pepito',
            tel: '12345',
            email: 'pepito@gomez.com',
            date: Timestamp.fromDate(new Date())
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
        }).then(()=>{

        })



        /* getDocs() */
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
            <td><button onClick={() => updateDocFromCollection()}> Actualizar documento </button></td>
            <td><button onClick={() => addDocToCollection()}> addDocToCollection </button></td>
            <td><button onClick={() => createOrder()}> generar orden </button></td>
        </div>
    )
}

export default Cart;