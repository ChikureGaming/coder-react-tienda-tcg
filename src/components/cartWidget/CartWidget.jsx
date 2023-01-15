import { useContext } from "react"
import "./CartWidget.css"
import { TfiShoppingCartFull } from "react-icons/tfi"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {
  const { cart } = useContext(CartContext)
  return (
    <Link to="/cart" >
    <div className="container-cart">
    <TfiShoppingCartFull style={{
            fontSize: "2rem",
            color: "#7F669D",
          }}
        />
    <div className="bubble-counter">
    <span style={{color: "#5698ee"}}>{cart.length}</span>
        </div>
</div>
</Link>
  )
}

export default CartWidget