import { createContext, useState, useEffect, useContext } from "react";

const NewContext = createContext();
export const useCart = () => useContext(NewContext);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);


    // Función para obtener el carrito desde la API
    const getCart = async (cart_id) => {
        if (!cart_id) return;

        setCart([]);

        try {
            const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/carts/${cart_id}`);
            const data = await response.json();
            setCart(data.data.products || []);
        } catch (error) {
            console.error("Error al obtener el carrito:", error);
        }
    };

    // Función para iniciar sesión y obtener carrito
    const login = async (email, password) => {
        try {
            const response = await fetch("https://bigburgerbackend-1.onrender.com/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (data.success) {
                setUser(data.data); // Guardamos el usuario
                setCart([]);
                getCart(data.data.cart_id); // Cargamos su carrito
            } else {
                console.error("Error de login:", data.message);
            }
        } catch (error) {
            console.error("Error de autenticación:", error);
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        setUser(null);
        setCart([]);
    };

    return (
        <NewContext.Provider value={{ cart, setCart, getCart, login, logout, user }}>
            {children}
        </NewContext.Provider>
    );
};

