import {Link} from "react-router-dom"
import "./Item.css"

const Item = ({element}) => {

    return (
        <div className="card">
        <h1>{element.name}</h1>
        <img src={element.img} alt="Imagen Producto Marca" />
        <h3>${element.price}</h3>
        <h5>{element.description}</h5>
        <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
        </div>

    );
};

export default Item;