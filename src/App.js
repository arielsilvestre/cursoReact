import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header>
       <NavBar name={"hola"}>
          <CartWidget />
       </NavBar>
      </header>
       <ItemListContainer greeting="hola juan carlos" />
    </div>
  );
}
 
export default App;
