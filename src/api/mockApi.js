export const productos = [
id: 'p1',
nombre: 'Heladera Exhibidora Inelro 400L',
precio: 123456,
categoria: 'heladeras',
descripcion: 'Exhibidora vertical, ideal comercios. Bajo consumo.',
imagen: 'https://picsum.photos/seed/heladera/600/400'
},
{
id: 'p2',
nombre: 'Aire Acondicionado BGH 3000W',
precio: 234999,
categoria: 'aires',
descripcion: 'Frío/Calor, bajo consumo, silencioso.',
imagen: 'https://picsum.photos/seed/aire/600/400'
},
{
id: 'p3',
nombre: 'Cocina Morelli 4 hornallas',
precio: 199900,
categoria: 'cocinas',
descripcion: 'Horno autolimpiante, encendido eléctrico.',
imagen: 'https://picsum.photos/seed/cocina/600/400'
},
{
id: 'p4',
nombre: 'Heladera Familiar NoFrost 320L',
precio: 459999,
categoria: 'heladeras',
descripcion: 'NoFrost, estantes de vidrio templado.',
imagen: 'https://picsum.photos/seed/heladera2/600/400'
},
{
id: 'p5',
nombre: 'Aire Carrier 4500W Inverter',
precio: 399999,
categoria: 'aires',
descripcion: 'Inverter, súper eficiente, Wi‑Fi.',
imagen: 'https://picsum.photos/seed/aire2/600/400'
}
]


export function fetchProductos(categoryId) {
return new Promise((resolve) => {
setTimeout(() => {
if (categoryId) {
resolve(productos.filter(p => p.categoria === categoryId))
} else {
resolve(productos)
}
}, 700) // retardo simulado
})
}


export function fetchProductoById(id) {
return new Promise((resolve, reject) => {
setTimeout(() => {
const prod = productos.find(p => p.id === id)
prod ? resolve(prod) : reject(new Error('Producto no encontrado'))
}, 700)
})
}