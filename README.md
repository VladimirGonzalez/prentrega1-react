# Prentrega 1 – Crea tu landing (React + Vite)

Landing base para el e‑commerce del curso. Hecha con **React + Vite**. Preentrega 1 Coderhouse React

Incluye:
- `NavBar` con logo, enlaces y `CartWidget`.
- `ItemListContainer` que recibe un mensaje por **props**.
- (Opcional) una grilla con 2–3 productos de ejemplo para visualizar el catálogo.

## Estructura
```
src/
  App.jsx
  main.jsx
  index.css
  components/
    NavBar.jsx
    CartWidget.jsx
    ItemListContainer.jsx
    ListaProductos.jsx      # opcional
    TarjetaProducto.jsx     # opcional
```

## Cómo correr
```bash
npm install
npm run dev
```

## Lo que pide la consigna (check rápido)
- `NavBar`, `CartWidget`, `ItemListContainer` dentro de `src/components/`.
- `App.jsx` renderiza `NavBar` e `ItemListContainer`.
- `NavBar` renderiza `CartWidget`.
- `ItemListContainer` recibe un **string** por props (mensaje de bienvenida).

Ejemplo:
```jsx
<ItemListContainer greeting="¡Bienvenido a mi tienda!" />
```

## Notas
- En “Inicio” muestro solo el mensaje. En “Productos” muestro el catálogo demo.
- Estilos simples en `index.css`.
- Imágenes de ejemplo de Wikimedia Commons.

