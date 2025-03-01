import { For, HStack } from "@chakra-ui/react"
import { IoIosArrowForward } from "react-icons/io";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
    DialogTrigger,
} from "../components/ui/dialog"
import { useState } from "react";
import handleButtonClick from "../shared/Alert";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Modal2 = () => {
    const { id } = useParams();
    // Estado para el producto
    const [productos, setProductos] = useState({});
    // Estado para los adicionales
    const [additionals, setAdditionals] = useState([]);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [selectedDrink, setSelectedDrink] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://bigburgerbackend.onrender.com/api/products/${id}`);
                const data = await response.json();
                setProductos(data.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (id) fetchProduct();
    }, [id]);
    useEffect(() => {
        const fetchAdditional = async () => {
            try {
                const response = await fetch(`https://bigburgerbackend.onrender.com/api/additionals`);
                const data = await response.json();
                setAdditionals(data.data);
            } catch (error) {
                console.error("Error fetching additionals:", error);
            }
        };

        fetchAdditional();
    }, []);

    const { thumbnail: productThumbnail, title: productTitle, price: productPrice } = productos;

    // Encontrar el adicional seleccionado
    const selectedAdditional = additionals.find(additional => additional._id === selectedFeature);
    const selectedAddDrink = additionals.find(additional => additional._id === selectedDrink);

    // Calcular el total sumando el adicional seleccionado

    const [count, setCount] = useState(1);
    const handleSuma = () => {
        setCount(count + 1);
    }

    const handleResta = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const totalPrice = (productPrice * count) + (selectedAdditional ? selectedAdditional.price : 0) + (selectedAddDrink ? selectedAddDrink.price : 0);

    return (
        <HStack wrap="wrap" gap="4">
            <For each={["center"]}>
                {(placement) => (
                    <DialogRoot
                        key={placement}
                        placement={placement}
                        motionPreset="slide-in-bottom"
                    >
                        <DialogTrigger asChild>
                            <div className="w-full cursor-pointer flex items-center justify-between gap-[1.5rem] p-[.5rem]">
                                <div className="flex items-center justify-center gap-[1rem]">
                                    <div>
                                        <img className="w-[60px]" src={`https://bigburgerbackend.onrender.com${productThumbnail}`} alt={productTitle} />
                                    </div>
                                    <div>
                                        <h3>{productTitle} regular</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center text-[1.3rem]">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="lg:w-[80vw] lg:max-w-[1000px] lg:h-auto lg:max-h-[80vh] h-screen">
                            <DialogBody className="mt-[3rem]">

                                <div className="flex items-center justify-center gap-[3rem]">

                                    <div className="hidden lg:block">
                                        <img className="w-[50rem]" src={`https://bigburgerbackend.onrender.com${productThumbnail}`} alt={productTitle} />
                                    </div>

                                    <div className="overflow-auto max-h-[600px] scrollbar-hide">
                                        <div className="mx-[1rem]">
                                            <div className="flex flex-col gap-[1rem]">
                                                <h2 className="text-[20px] font-bold">{productTitle} regular </h2>
                                                <p className="text-[14px]">$ {productPrice}</p>
                                                <p className="text-[14px]">Medallón a base de plantas a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga. Acompañado con papas king, gaseosa king y juguete de la licencia que esté en stock o disponible, imagen de carácter ilustrativa.</p>
                                            </div>
                                            <div className="flex items-center justify-between py-[2rem]">
                                                <div className="flex items-center justify-center">
                                                    <p>Cantidad: {count}</p>
                                                </div>
                                                <div className="flex gap-[1rem] p-[1rem]">
                                                    <button className="border-2 rounded-[50%] w-[40px] h-[40px]" onClick={handleResta}>-</button>
                                                    <button className="border-2 rounded-[50%] w-[40px] h-[40px]" onClick={handleSuma}>+</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="font-bold">Adicionales</p>
                                                <small>(Seleccionar 1)</small>
                                            </div>
                                            <div className="flex flex-col my-[1rem] gap-[.3rem]">
                                                {additionals.map((additional) => {
                                                    if (additional.category === 'additional') {
                                                        return (
                                                            <div key={additional._id} className="flex items-center justify-between">
                                                                <div className="flex items-center justify-start gap-[1rem]">
                                                                    <input
                                                                        type="radio"
                                                                        id={`feature-${additional._id}`}
                                                                        name="features"
                                                                        checked={selectedFeature === additional._id}
                                                                        onChange={() => setSelectedFeature(additional._id)}
                                                                    />
                                                                    <label htmlFor={`feature-${additional._id}`}>
                                                                        <div>
                                                                            <p>{additional.title}</p>
                                                                            <small>+ $ {additional.price}</small>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <img className="w-[60px]" src={additional.thumbnail} alt={additional.title} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                })}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="font-bold">Bebida</p>
                                                <small>(Seleccionar 1)</small>
                                            </div>
                                            <div className="flex flex-col my-[1rem] gap-[.3rem]">
                                                {additionals.map((additional) => {
                                                    if (additional.category === 'drink') {
                                                        return (
                                                            <div key={additional._id} className="flex items-center justify-between">
                                                                <div className="flex items-center justify-start gap-[1rem]">
                                                                    <input
                                                                        type="radio"
                                                                        id={`drink-${additional._id}`}
                                                                        name="drink"
                                                                        checked={selectedDrink === additional._id}
                                                                        onChange={() => setSelectedDrink(additional._id)}
                                                                    />
                                                                    <label htmlFor={`drink-${additional._id}`}>
                                                                        <div>
                                                                            <p>{additional.title}</p>
                                                                            <small>+ $ {additional.price}</small>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <img className="w-[60px]" src={additional.thumbnail} alt={additional.title} />
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                })}
                                            </div>
                                        </div>

                                        <div className="sticky bottom-0 py-[12px] px-[24px] w-full rounded-[34px] bg-black text-white text-[20px]">

                                            <button className="flex items-center justify-between w-full"
                                                onClick={() => handleButtonClick({ totalPrice })}>
                                                <p>Agregar</p>
                                                <p>${totalPrice}</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogBody>
                            <DialogCloseTrigger />
                        </DialogContent>
                    </DialogRoot>
                )}
            </For>
        </HStack>
    )
}

export default Modal2