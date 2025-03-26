import { useState } from "react";
import { useCart } from "./CartContext";
import { IoMdClose } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";

function Cart() {
    const { cart, getCart } = useCart();
    const [toggleCart, setToggleCart] = useState(false);

    const handleClick = () => setToggleCart(!toggleCart);

    // 🔥 Calcular el total del carrito sumando productos y adicionales
    const totalCartPrice = cart.reduce((total, item) => {
        const additionalsTotal = item.additionals.reduce(
            (acc, additional) => acc + additional.price * additional.quantity,
            0
        );
        return total + item.id.price * item.quantity + additionalsTotal;
    }, 0);

    const userCartId = (localStorage.getItem('UserID')) || {}; // ✅ Si es null, usa un objeto vacío
    const cart_id = userCartId?.cart_id; // ✅ Usa optional chaining para evitar errores

    // Si no hay carrito, no renderizar el componente
    if (!cart_id) return null; // ✅ No muestra el carrito si no hay cart_id

    const deleteAllProducts = async () => {
        await fetch(`https://bigburgerbackend-1.onrender.com/api/carts/${cart_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        await getCart(); // Actualizar el carrito después de eliminar los productos
    };

    const deleteProduct = async (id) => {
        await fetch(`https://bigburgerbackend-1.onrender.com/api/carts/${cart_id}/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        await getCart(); // Actualizar el carrito después de eliminar el producto
    };


    const generateWhatsAppMessage = () => {
        let message = "_¡Hola! Te paso el resumen de mi pedido_\n\n";

        cart.forEach((item) => {
            let burgerTotal = item.id.price * item.quantity;
            let comboAdditionals = [];
            let otherAdditionals = {}; // Usamos un objeto para agrupar por categoría

            item.additionals.forEach((additional) => {
                if (additional.category === "Combo") {
                    burgerTotal += additional.price * additional.quantity;
                    comboAdditionals.push(additional);
                } else {
                    if (!otherAdditionals[additional.category]) {
                        otherAdditionals[additional.category] = [];
                    }
                    otherAdditionals[additional.category].push(additional);
                }
            });

            message += `*Burger*\n`;
            message += `x${item.quantity} ${item.id.title}`;

            if (comboAdditionals.length > 0) {
                message += ` (${comboAdditionals.map(a => a.title).join(", ")})`;
            }

            message += ` - $${burgerTotal}\n`;

            for (const category in otherAdditionals) {
                message += `*${category}*\n`;
                otherAdditionals[category].forEach((additional) => {
                    message += `• ${additional.title} - $${additional.price * additional.quantity}\n`;
                });
            }
            message += "\n"; // Salto de línea después de la sección de cada burger
        });

        message += `*Total del Carrito:* *$${totalCartPrice}*`;
        message += "\n\n_Espero tu respuesta para confirmar mi pedido_";

        return encodeURIComponent(message);
    };

    return cart.length > 0 ? (
        <div className="">
            {/* Botón para abrir el carrito */}
            <div className="fixed top-[38rem] right-0 lg:top-[42rem] lg:fixed">
                <button onClick={handleClick} className="inline-block relative cursor-pointer">
                    <small className="absolute font-bold bottom-[5px] left-[13px] text-black rounded-[30%] lg:bottom-[12px] lg:left-[21px] lg:text-[1.5rem] lg:rounded-[10%_/_50%]">
                        {cart.length}
                    </small>
                    <img className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem]" src="/img/cartBurger/orderBurger.png" alt="" />
                </button>
            </div>

            {/* Carrito desplegable */}
            <div className={`fixed top-0 lg:p-[1rem] h-full  z-[999] text-white bg-black w-screen lg:w-[35%] overflow-y-scroll scrollbar-hide transition-all duration-300 ${toggleCart ? "right-0" : "-left-full"}`}>
                <div className="flex items-center justify-center m-[1.5rem]">
                    <h2 className="text-center text-gray-300 font-bold text-2xl tracking-[2px] uppercase">My Order</h2>
                </div>

                <div>
                    <ul>
                        {cart.map((item, index) => {
                            // 🔥 Calcular total por cada item incluyendo sus adicionales
                            const additionalsTotal = item.additionals.reduce(
                                (acc, additional) => acc + additional.price * additional.quantity,
                                0
                            );
                            const itemTotal = item.id.price * item.quantity + additionalsTotal;

                            return (
                                <li className="m-[1rem]" key={`${item.id._id}-${index}`}>
                                    <div className="flex items-center justify-center gap-2 border-b-[1px] border-gray-400">
                                        <div className="flex items-center justify-center">
                                            <img className="w-[3rem]" src={item.id.thumbnail} alt={item.id.title} />
                                        </div>
                                        <div className="w-full">
                                            {/* Información del producto */}
                                            <div className="flex items-center justify-between">
                                                <p className="text-bold">Burger {item.id.title} x{item.quantity}</p>
                                                <p>$ {item.id.price * item.quantity}</p>
                                            </div>

                                            {/* Lista de adicionales */}
                                            {item.additionals.length > 0 && (
                                                <ul className="mt-1">
                                                    {item.additionals.map((additional, index) => (
                                                        <li key={`${additional.title}-${index}`}>
                                                            <div className="flex items-center justify-between">
                                                                <p className="text-neutral-600 text-[12px]">
                                                                    {additional.title} x{additional.quantity}
                                                                </p>
                                                                <p>$ {additional.price * additional.quantity}</p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* 🔥 Total de cada item con adicionales */}
                                            <div className="flex items-center mt-2 mb-4 font-bold gap-2">
                                                <p>Total:</p>
                                                <p>$ {itemTotal}</p>
                                                <HiOutlineTrash className="text-red-600 cursor-pointer"
                                                    onClick={() => deleteProduct(item.id._id)} />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex items-center justify-center">
                    <button onClick={deleteAllProducts} className="border-2 border-red-600 p-2 rounded">
                        Vaciar Carrito
                    </button>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button className="flex items-center gap-2 justify-center border-2 border-green-600 p-2 rounded">
                        <a href={`https://api.whatsapp.com/send?phone=5492645800162&text=${generateWhatsAppMessage()}`} target="_blank">
                            Enviar pedido por whatsapp
                        </a>
                        <p>$ {totalCartPrice}</p>
                    </button>
                </div>

                <button onClick={() => setToggleCart(false)}>
                    <IoMdClose className="absolute top-[1rem] right-[1rem] text-3xl text-white" />
                </button>
            </div>
        </div>
    ) : null;
}

export default Cart;