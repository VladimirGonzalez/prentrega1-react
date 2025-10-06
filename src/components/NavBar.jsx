import CartWidget from "./CartWidget";

export default function NavBar({ activo = "inicio", onNavigate = () => {} }) {
  const isActive = (key) => (activo === key ? estilos.enlaceActivo : {});
  const click = (e, key) => {
    e.preventDefault();
    onNavigate(key);
  };

  return (
    <header style={estilos.encabezado}>
      <span style={estilos.logo}>Prentrega1</span>

      <nav aria-label="Navegación principal">
        <ul style={estilos.lista}>
          <li>
            <a href="#inicio" onClick={(e) => click(e, "inicio")} style={{ ...estilos.enlace, ...isActive("inicio") }}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#productos" onClick={(e) => click(e, "productos")} style={{ ...estilos.enlace, ...isActive("productos") }}>
              Productos
            </a>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
}

const estilos = {
  encabezado: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    background: "#fff",
    zIndex: 10,
  },
  logo: { fontWeight: 700, fontSize: "20px" },
  lista: { display: "flex", gap: "16px", listStyle: "none", margin: 0, padding: 0 },
  enlace: { textDecoration: "none", color: "#222", padding: "6px 8px", borderRadius: 8 },
  enlaceActivo: { background: "#000", color: "#fff" },
};
