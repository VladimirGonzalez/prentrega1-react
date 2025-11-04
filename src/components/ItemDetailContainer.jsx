import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../data/products.js"
import ItemDetail from "./ItemDetail.jsx"

export default function ItemDetailContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then(setProduct)
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p>Cargando…</p>
    if (!product) return <p>Producto no encontrado.</p>

    return <ItemDetail product={product} />
}
