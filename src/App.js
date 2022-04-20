import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList';
import CartContext from './context/CartContext';
import { CartContextProvider } from './context/CartContext';
import {createContext, useState} from 'react'


export const Context = createContext();

const  App = () => {
/*   const [cart,setCart] = useState([])
  console.log(cart);
 */

  return (
    <div className="App">
      <header>
       {/*  <Context.Provider value={{cart,setCart}}> */}
       <CartContextProvider>
          <BrowserRouter>
            <NavBar name={"hola"}>
                <CartWidget />
            </NavBar>
          {/*  <div>
              <Link to='/list'><button>Lista</button></Link>
              <Link to='/detail'><button>Detalle</button></Link>
            </div> */}
            <Routes> /** Todo lo que se muestra condicionalmente */
              <Route path='/list' element={<ItemListContainer greeting={"Mensaje de bienvenida"}/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
              <Route path='category/:productId' element={<ItemListContainer />} />
              <Route path='*' element={<ItemListContainer/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
       {/*  </Context.Provider> */}
      </header>
      
      {/*  <ItemListContainer greeting="hola juan carlos" /> */}
      {/*  <ItemCount stock={10} initial = {0} onAdd={addToCart}></ItemCount> */}
       {/* <ItemDetailContainer id={2}/> */}
    </div>
  );
}
 
export default App;
