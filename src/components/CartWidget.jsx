export default function CartWidget() {
  return (
    <button className="cart" aria-label="Abrir carrito de compras">
      <span role="img" aria-hidden>🛒</span>
      <span className="badge">0</span>
    </button>
  );
}
