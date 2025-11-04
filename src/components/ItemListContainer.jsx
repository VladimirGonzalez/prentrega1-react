import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import { getProducts, getProductsByCategory } from "../data/products.js"

export default function ItemListContainer({ greeting = "Catálogo" }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetcher = categoryId ? getProductsByCategory(categoryId) : getProducts()
    fetcher
      .then((data) => setItems(data))
      .finally(() => setLoading(false))
  }, [categoryId]) // <- importante: dependemos del parámetro de URL

  return (
    <section>
      <h1>{greeting}</h1>
      {categoryId && <p className="muted">Categoría: <strong>{categoryId}</strong></p>}

      {loading ? (
        <p>Cargando…</p>
      ) : items.length ? (
        <ItemList items={items} />
      ) : (
        <p>No hay productos para esta categoría.</p>
      )}
    </section>
  )
}
