import { useEffect, useState } from "react";
import { products } from "../../storeproduct";
import ItemList from "../itemList/ItemList";
import ItemCounter from "../itemCounter/ItemCounter";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {

  const {categoryName} = useParams()
  
  console.log(categoryName)

  const [items, setItems] = useState([])


useEffect(() => {
  
  const productosFiltered = products.filter( productos => productos.category === categoryName )

  const inventario = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( categoryName ? productosFiltered : products  );
    }, 400);
  });
  
  inventario
  .then((conexion) => {
    setItems(conexion)
  })
  .catch((sinconexion) => {
    console.log("error de conexión")
  });
  console.log("se hizo la peticion")
}, [categoryName]);



    return (

    <div>
      <ItemCounter initial={1} stock={30}/>
      <ItemList items={items} />
    </div>

    )
  }

    export default ItemListContainer