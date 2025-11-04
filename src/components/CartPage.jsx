import { useCart } from "../context/CartContext.jsx"

export default function CartPage() {
    const { items, count, removeFromCart, clearCart } = useCart()
    const total = items.reduce((acc, it) => acc + (Number(it.price) || 0) * (Number(it.qty) || 0), 0)

    if (!items.length) {
        return <section className="empty"><h2>Tu carrito está vacío</h2></section>
    }

    return (
        <section>
            <h1>Carrito ({count})</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th style={{ width: 80 }}>Cant.</th>
                        <th style={{ width: 140 }}>Precio</th>
                        <th style={{ width: 160 }}>Subtotal</th>
                        <th style={{ width: 80 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(it => (
                        <tr key={it.id}>
                            <td style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <img src={it.img} alt={it.title} style={{ width: 56, height: 40, objectFit: "cover", borderRadius: 6 }} />
                                <span>{it.title}</span>
                            </td>
                            <td>{it.qty}</td>
                            <td>${Number(it.price).toLocaleString("es-AR")}</td>
                            <td>${(Number(it.price) * Number(it.qty)).toLocaleString("es-AR")}</td>
                            <td><button className="btn" onClick={() => removeFromCart(it.id)}>Quitar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                <button className="btn" onClick={clearCart}>Vaciar carrito</button>
                <h2>Total: ${total.toLocaleString("es-AR")}</h2>
            </div>
        </section>
    )
}
