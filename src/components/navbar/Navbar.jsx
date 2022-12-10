import "./Navbar.css"
import {Link} from "react-router-dom"
import CartWidget from "../cartWidget/CartWidget";


const Navbar = ()=> {

    return (
        <div className="navbar-container">

            <div className="container-logo"> 
                <img className="logo-navbar" src="https://res.cloudinary.com/dytvjynt7/image/upload/v1669520147/react-coder-ecommerce/2095_seikvm.jpg" alt="imagen pinguino" />
            </div>
                <ul className="navbar">
                    <Link className="navbar-item" to= "/"> Nuevos Lanzamientos</Link>
                    <Link className="navbar-item" to="/category/moderno" >Sets Modernos</Link>
                    <h1>Pinguin TCG</h1>
                    <Link className="navbar-item" to="/category/clasico" >Sets Clásicos</Link>
                    <Link className="navbar-item" to="/category/Ofertas" >Ofertas</Link>
                </ul>
            <CartWidget />
        </div>

    )
}

export default Navbar;