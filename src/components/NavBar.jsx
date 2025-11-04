import { NavLink, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import CartWidget from "./CartWidget.jsx"
import { getProducts } from "../data/products.js"

export default function NavBar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    let alive = true
    getProducts().then((ps) => {
      if (!alive) return
      const unique = Array.from(new Set(ps.map((p) => p.category)))
      setCats(unique)
    })
    return () => { alive = false }
  }, []) // <- no dependencias; se carga una vez

  return (
    <header className="navbar">
      <Link to="/" className="logo">MiTienda</Link>

      <nav className="menu">
        <NavLink to="/productos" className={({ isActive }) => isActive ? "active" : ""}>
          Todos
        </NavLink>
        {cats.map((c) => (
          <NavLink
            key={c}
            to={`/category/${encodeURIComponent(c)}`}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {c}
          </NavLink>
        ))}
      </nav>

      <CartWidget />
    </header>
  )
}
