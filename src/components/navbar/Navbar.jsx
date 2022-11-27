import "./Navbar.css"
import { GiCardRandom } from "react-icons/gi"
import CartWidget from "../cartWidget/CartWidget";


const Navbar = ()=> {

    return (
        <div className="navbar-container">

            <div className="container-logo"> 
                <img className="logo-navbar" src="https://res.cloudinary.com/dytvjynt7/image/upload/v1669520147/react-coder-ecommerce/2095_seikvm.jpg" alt="imagen pinguino" />
            </div>
                <ul className="navbar">
                    <li className="navbar-item">Nuevos Lanzamientos</li>
                    <li className="navbar-item">Sets Modernos</li>
                    <h1>Pinguin TCG</h1>
                    <li className="navbar-item">Sets Vintage</li>
                    <li className="navbar-item">Ofertas</li>
                </ul>
            <CartWidget />
        </div>

    )
}

export default Navbar;