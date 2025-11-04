import ItemCard from "./ItemCard.jsx"

export default function ItemList({ items = [] }) {
    return (
        <div className="grid">
            {items.map((prod) => (
                <ItemCard key={prod.id} product={prod} />
            ))}
        </div>
    )
}
