import ItemCount from "./ItemCount.jsx"
import { useCart } from "../context/CartContext.jsx"

export default function ItemDetail({ product }) {
    const { addToCart } = useCart()
    const { title, description, price, img, stock } = product

    const handleAdd = (qty) => {
        // Enviamos el objeto mínimo que necesitamos en el carrito
        addToCart(
            { id: product.id, title: product.title, price: product.price, img: product.img },
            qty
        )
    }

    return (
        <section className="detail">
            <img src={img} alt={title} className="detail-img" />
            <div className="detail-info">
                <h1>{title}</h1>
                <p className="muted">{description}</p>
                <p className="price">${price.toLocaleString("es-AR")}</p>
                <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
            </div>
        </section>
    )
}
