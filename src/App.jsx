import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import NotFound from "./components/NotFound.jsx"
import { CartProvider } from "./context/CartContext.jsx"
import CartPage from "./components/CartPage.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <main className="container">
          <Routes>
            <Route index element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />
            <Route path="productos" element={<ItemListContainer greeting="Catálogo" />} />
            <Route path="category/:categoryId" element={<ItemListContainer greeting="Filtrados por categoría" />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  )
}
