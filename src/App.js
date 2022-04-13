import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';




const  App = () => {

  return (
    <div className="App">
      <header>
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
            <Route path='*' element={<ItemListContainer/>} />
          </Routes>
        </BrowserRouter>
      </header>
      
      {/*  <ItemListContainer greeting="hola juan carlos" /> */}
      {/*  <ItemCount stock={10} initial = {0} onAdd={addToCart}></ItemCount> */}
       {/* <ItemDetailContainer id={2}/> */}
    </div>
  );
}
 
export default App;
