import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    let userCartId;
    try {
        userCartId = JSON.parse(localStorage.getItem("UserID")) || {};
    } catch (error) {
        console.error("Error al parsear localStorage:", error);
        userCartId = {}; // Valor por defecto
    }
    const cart_id = userCartId?.cart_id;

    const getCart = async () => {
        if (!cart_id) return; // ✅ Si `cart_id` es undefined, NO ejecuta la petición

        try {
            const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/carts/${cart_id}`);
            const data = await response.json();
            setCart(data.data?.products || []);
        } catch (error) {
            console.error("Error en getCart:", error);
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart, getCart }}>
            {children}
        </CartContext.Provider>
    );
};