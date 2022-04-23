import './NavBar.css';
import {Link, NavLink} from 'react-router-dom'
import CartContext from '../../context/CartContext';
import { useState,useEffect,useContext } from 'react';
import { getCategories } from '../recursos';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = (props) => {
 /*    console.log(props.name); */
 const [categorias,setCategorias] = useState([]);
 const {getQuantity} = useContext(CartContext);

    useEffect (() => {
        getCategories().then(categorias => {
            setCategorias(categorias)
            /* console.log(categorias) */
        })
        }
    )
    return(
    <div className='navBar'>
            <Link to='/'>
                <h2>Nombre De empresa</h2>
            </Link>
{/*             <button>{props.name}</button> */}
{/*             <Link to='/list'><button>Lista</button></Link> */}
{/*             <Link to='/detail'><button>detalle</button></Link> */}
            {categorias.map(cat => <NavLink key={cat.id} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to={`/category/${cat.id}` }>{cat.description}</NavLink>)}
            <NavLink to='/list' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lista</NavLink>
            {/* <NavLink to='/detail' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> detalle </NavLink> */}
           {/*  {props.children} */}
           {getQuantity() ?  <CartWidget /> : ''}
          
    </div>
    )
}

export default NavBar
 