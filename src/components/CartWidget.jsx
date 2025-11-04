import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext.jsx"

export default function CartWidget() {
  const { count } = useCart()
  return (
    <Link to="/cart" className="cart" aria-label="Abrir carrito de compras">
      <span role="img" aria-hidden>🛒</span>
      <span className="badge">{count}</span>
    </Link>
  );
}
