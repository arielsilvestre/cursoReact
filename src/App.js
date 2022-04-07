import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';




const  App = () => {
  const addToCart = (quantity) => {
    quantity++;
    console.log(`Se agregaron ${quantity} productos`);
  }
  return (
    <div className="App">
      <header>
       <NavBar name={"hola"}>
          <CartWidget />
       </NavBar>
      </header>
       <ItemListContainer greeting="hola juan carlos" />
      {/*  <ItemCount stock={10} initial = {0} onAdd={addToCart}></ItemCount> */}
       <ItemDetailContainer id={2}/>
    </div>
  );
}
 
export default App;
