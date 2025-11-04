import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "mf:cart:v1";

const initial = { items: [], count: 0 };

function calcCount(items) { return items.reduce((acc, i) => acc + (Number(i.qty) || 0), 0); }

function reducer(state, action) {
    switch (action.type) {
        case "ADD": {
            const { item, qty = 1 } = action.payload;
            const q = Number(qty) || 1;
            const idx = state.items.findIndex(i => String(i.id) === String(item.id));
            let items;
            if (idx >= 0) {
                items = state.items.map((it, k) => k === idx ? { ...it, qty: (Number(it.qty) || 0) + q } : it);
            } else {
                items = [...state.items, { ...item, qty: q }];
            }
            return { items, count: calcCount(items) };
        }
        case "REMOVE": {
            const items = state.items.filter(i => String(i.id) !== String(action.id));
            return { items, count: calcCount(items) };
        }
        case "CLEAR": return initial;
        case "HYDRATE": return action.state;
        default: return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initial);

    // hidratar
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed.items)) {
                    const items = parsed.items;
                    return dispatch({ type: "HYDRATE", state: { items, count: calcCount(items) } });
                }
            }
        } catch { }
    }, []);

    // persistir
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    const addToCart = (item, qty = 1) => dispatch({ type: "ADD", payload: { item, qty } });
    const removeFromCart = (id) => dispatch({ type: "REMOVE", id });
    const clearCart = () => dispatch({ type: "CLEAR" });

    const value = { items: state.items, count: state.count, addToCart, removeFromCart, clearCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
    return ctx;
};
