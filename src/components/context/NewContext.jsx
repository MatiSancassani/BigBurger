import { createContext, useState, useEffect, useContext } from "react";

const NewContext = createContext();
export const useCart = () => useContext(NewContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);

    // Cargar usuario y carrito desde localStorage al iniciar
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }

        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    // Obtener el carrito cuando el usuario esté definido
    useEffect(() => {
        if (user && user.cart_id) {
            getCart(user.cart_id);
        }
    }, [user]); // Se ejecuta solo cuando `user` cambia

    // Obtener carrito desde la API
    const getCart = async (cart_id) => {
        if (!cart_id) return;

        try {
            const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/carts/${cart_id}`);
            const data = await response.json();

            if (data.data.products) {
                setCart(data.data.products);
                localStorage.setItem("cart", JSON.stringify(data.data.products));
            }
        } catch (error) {
            console.error("Error al obtener el carrito:", error);
        }
    };

    // Iniciar sesión y obtener carrito
    const login = async (email, password) => {
        try {
            const response = await fetch("https://bigburgerbackend-1.onrender.com/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (data.success) {
                setUser(data.data);
                localStorage.setItem("user", JSON.stringify(data.data));
                getCart(data.data.cart_id);
            } else {
                console.error("Error de login:", data.message);
            }
        } catch (error) {
            console.error("Error de autenticación:", error);
        }
    };

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("https://bigburgerbackend-1.onrender.com/api/products");
            const data = await response.json();
            setProducts(data.data);
        };

        getProduct();
    }, []);

    // Cerrar sesión
    const logout = () => {
        setUser(null);
        setCart([]);
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
    };

    return (
        <NewContext.Provider value={{ cart, setCart, getCart, login, logout, user, products }}>
            {children}
        </NewContext.Provider>
    );
};