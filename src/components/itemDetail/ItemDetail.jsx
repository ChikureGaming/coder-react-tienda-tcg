import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import swal from "sweetalert2"
import styles from "./ItemDetail.module.css"
import ItemCounter from "../itemCounter/ItemCounter"

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityBiId } = useContext(CartContext)

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })

    swal({
      title: "Operacion Exitosa!",
      text: "Agregaste un producto al carrito!",
      icon: "success",
      button: "Ok",
    })
  }

  const quantity = getQuantityBiId(product.id)

  return (
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={product.img} alt="" />
      </div>

      <div className={styles.containerDetail}>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Nombre:</span> {product.name}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
          {product.description}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Precio:</span> ${product.price}.-
        </h2>

        <ItemCounter onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>
  )
}

export default ItemDetail
