import TarjetaProducto from "./TarjetaProducto";

export default function ListaProductos({ productos = [] }) {
  if (!productos.length) return null; // <-- ya no mostramos el mensaje

  return (
    <section className="grid">
      {productos.map((p) => (
        <TarjetaProducto
          key={p.id}
          titulo={p.titulo}
          precio={p.precio}
          imagen={p.imagen}
        />
      ))}
    </section>
  );
}
