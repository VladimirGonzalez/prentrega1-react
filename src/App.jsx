import { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  const [seccion, setSeccion] = useState("inicio");

  // 👉 tus productos (dejá 2 o 3 si querés)
  const productos = [
    { id: 1, titulo: "Combo de Mate", precio: 15999, imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Mates_de_madera_con_bombilla_incorporada.JPG" },
    { id: 2, titulo: "Yerba Premium 1kg", precio: 8999, imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Yerba_Mate_on_Market_Shelf.jpg" },
    { id: 3, titulo: "Termo Acero 1L", precio: 21999, imagen: "https://upload.wikimedia.org/wikipedia/commons/6/68/Bouteille_thermos.jpg" },
    { id: 4, titulo: "Bombilla Stanley", precio: 21999, imagen: "https://upload.wikimedia.org/wikipedia/commons/7/73/Tipos_de_bombillas_para_mate.jpg" },
  ];

  const handleNavigate = (destino) => {
    setSeccion(destino);
    // si va a Productos, scrollea al catálogo
    if (destino === "productos") {
      setTimeout(() => {
        document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const mostrarProductos = seccion === "productos";
  const titulo = mostrarProductos ? "Catálogo" : "¡Bienvenido a mi tienda!";

  return (
    <>
      <NavBar activo={seccion} onNavigate={handleNavigate} />
      <ItemListContainer greeting={titulo} productos={mostrarProductos ? productos : []} />
    </>
  );
}
