import './NavBar.css';
const NavBar = (props) => {
 /*    console.log(props.name); */
    return(
    <div className='navBar'>
            <h2>Nombre De empresa</h2>
            <button>{props.name}</button>
            <button>boton_2</button>
            <button>boton_3</button>
            {props.children}
          
    </div>
    )
}

export default NavBar
 