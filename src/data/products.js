const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export const PRODUCTS = [
    {
        id: "1",
        title: "Heladera Inelro 380L",
        price: 980000,
        category: "heladeras",
        stock: 8,
        img: "https://placehold.co/600x400?text=Heladera",
        description: "Heladera exhibidora 380L, bajo consumo."
    },
    {
        id: "2",
        title: "Freezer Pozo 300L",
        price: 820000,
        category: "heladeras",
        stock: 5,
        img: "https://placehold.co/600x400?text=Freezer",
        description: "Freezer comercial 300L, tapa ciega."
    },
    {
        id: "3",
        title: "Aire Acondicionado BGH 3000w",
        price: 650000,
        category: "aires",
        stock: 10,
        img: "https://placehold.co/600x400?text=Aire",
        description: "Split frío/calor 3000w, eficiencia A."
    },
    {
        id: "4",
        title: "Carrier 4500w Inverter",
        price: 1190000,
        category: "aires",
        stock: 3,
        img: "https://placehold.co/600x400?text=Inverter",
        description: "Split inverter 4500w, súper silencioso."
    },
    {
        id: "5",
        title: "Cocina Morelli 55cm",
        price: 540000,
        category: "cocinas",
        stock: 12,
        img: "https://placehold.co/600x400?text=Cocina",
        description: "Cocina a gas 4 hornallas, encendido eléctrico."
    },
    {
        id: "6",
        title: "Horno pizzero 6 moldes",
        price: 780000,
        category: "cocinas",
        stock: 2,
        img: "https://placehold.co/600x400?text=Horno",
        description: "Horno pizzero gas, 6 moldes, cámara reforzada."
    }
]

export async function getProducts() {
    await delay(600)
    return PRODUCTS
}

export async function getProductsByCategory(categoryId) {
    await delay(600)
    return PRODUCTS.filter((p) => p.category === categoryId)
}

export async function getProductById(id) {
    await delay(600)
    return PRODUCTS.find((p) => p.id === id)
}
