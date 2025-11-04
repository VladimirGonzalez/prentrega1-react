import { Link } from 'react-router-dom'


export default function TarjetaProducto({ producto }) {
  return (
    <article style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
      <div style={{ padding: 12 }}>
        <h3 style={{ margin: '0 0 8px 0' }}>{producto.nombre}</h3>
        <p style={{ margin: 0, opacity: 0.7 }}>${producto.precio.toLocaleString('es-AR')}</p>
        <p style={{ margin: '8px 0 12px 0', fontSize: 14, opacity: 0.8 }}>{producto.descripcion}</p>
        <Link to={`/item/${producto.id}`} style={{ fontWeight: 600 }}>Ver detalle →</Link>
      </div>
    </article>
  )
}