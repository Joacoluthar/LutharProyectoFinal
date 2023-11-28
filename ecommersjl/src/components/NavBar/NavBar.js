import { NavLink,Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
    return(
      <nav class="navbar justify-content-center">
           <Link className="titulo" to='/'><h3>
                PlanetaNBA
            </h3></Link> 
            <div className="container-fluid justify-content-center">
            <NavLink to={`/category/Camisetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'btn btn-outline-success me-2" type="button'}>Camisetas</NavLink>
            <NavLink to={`/category/Pelotas`} className={({isActive}) => isActive ? 'ActiveOption' : 'btn btn-outline-success me-2" type="button'}>Pelotas</NavLink>
            <NavLink to={`/category/FunkoPops`} className={({isActive}) => isActive ? 'ActiveOption' : 'btn btn-outline-success me-2" type="button'}>FunkoPops</NavLink>
            </div>
           <CartWidget />
        </nav>
       
        
    )
}


export default NavBar