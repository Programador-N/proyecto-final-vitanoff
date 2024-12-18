import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        const newItem = { ...item, cantidad };
        setCart([...cart, newItem]);
    };

    const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

    const clearCart = () => setCart([]);

    const totalItems = () => cart.reduce((acc, item) => acc + item.cantidad, 0);

    const totalPrice = () => cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
