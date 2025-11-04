import { useState } from "react"

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const [qty, setQty] = useState(initial)
    const inc = () => setQty((q) => Math.min(stock, q + 1))
    const dec = () => setQty((q) => Math.max(1, q - 1))

    return (
        <div className="item-count">
            <div className="counter">
                <button onClick={dec} disabled={qty <= 1}>-</button>
                <span>{qty}</span>
                <button onClick={inc} disabled={qty >= stock}>+</button>
            </div>
            <button className="btn primary" disabled={stock === 0} onClick={() => onAdd?.(qty)}>
                Agregar al carrito
            </button>
            {stock === 0 && <p className="muted">Sin stock</p>}
        </div>
    )
}
