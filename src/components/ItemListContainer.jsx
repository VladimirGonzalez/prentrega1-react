import ListaProductos from "./ListaProductos";

export default function ItemListContainer({ greeting, productos = [] }) {
  const hayProductos = productos.length > 0;

  return (
    <main className="contenedor">
      <div className="panel">
        <h1 className="titulo">{greeting}</h1>

        {/* Solo renderiza la lista si hay productos */}
        {hayProductos && (
          <div id="catalogo">
            <ListaProductos productos={productos} />
          </div>
        )}
      </div>
    </main>
  );
}
