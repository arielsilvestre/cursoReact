import './NavBar.css';
import {Link, NavLink} from 'react-router-dom'

const NavBar = (props) => {
 /*    console.log(props.name); */
    return(
    <div className='navBar'>
            <Link to='/'>
                <h2>Nombre De empresa</h2>
            </Link>
{/*             <button>{props.name}</button> */}
{/*             <Link to='/list'><button>Lista</button></Link> */}
{/*             <Link to='/detail'><button>detalle</button></Link> */}
            <NavLink to='/list' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lista</NavLink>
            {/* <NavLink to='/detail' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> detalle </NavLink> */}
            {props.children}
          
    </div>
    )
}

export default NavBar
 