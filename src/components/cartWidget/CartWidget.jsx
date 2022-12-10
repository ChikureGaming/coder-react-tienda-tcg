import "./CartWidget.css"
import { TfiShoppingCartFull } from "react-icons/tfi"
import { Link } from "react-router-dom"

export const CartWidget = () => {
  return (
    <Link to="/cart" >
    <div className="container-cart">
    <TfiShoppingCartFull size={45} color={"white"} />

</div>
</Link>
  )
}

export default CartWidget