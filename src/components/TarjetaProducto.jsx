export default function TarjetaProducto({ titulo, precio, imagen }) {
  return (
    <article className="card">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p className="precio">${precio.toLocaleString("es-AR")}</p>
      <button className="btn">Agregar al carrito</button>
    </article>
  );
}
