import { Link } from "react-router-dom"

export default function ItemCard({ product }) {
    const { id, title, price, img } = product
    return (
        <article className="card">
            <img src={img} alt={title} loading="lazy" className="card-img" />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="price">${price.toLocaleString("es-AR")}</p>
                <Link className="btn" to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </article>
    )
}
