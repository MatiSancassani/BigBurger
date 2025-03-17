import { For, HStack } from "@chakra-ui/react"
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
    DialogTrigger,
} from "../components/ui/dialog"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import handleButtonClick from "../shared/Alert";

const BurgersModal = () => {
    const ayuda = JSON.parse(localStorage.getItem('Product'));

    const { thumbnail, title, description, price } = ayuda

    const [selected, setSelected] = useState(null);
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
                const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/products/${id}`);
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
                const response = await fetch(`https://bigburgerbackend-1.onrender.com/api/additionals`);
                const data = await response.json();
                setAdditionals(data.data);
            } catch (error) {
                console.error("Error fetching additionals:", error);
            }
        };

        fetchAdditional();
    }, []);

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

    const totalPrice = (price * count) + (selectedAdditional ? selectedAdditional.price : 0) + (selectedAddDrink ? selectedAddDrink.price : 0);

    const burgers = [
        { id: 1, src: "/img/burgertype/BurgerSimple.png", alt: "Burger Simple", title2: "Simple" },
        { id: 2, src: "/img/burgertype/BurgerDoble.png", alt: "Burger Doble", title2: "Doble" },
        { id: 3, src: "/img/burgertype/BurgerTriple.png", alt: "Burger Triple", title2: "Triple" },
    ];
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
                            <div className='w-[3.5rem] h-[3.5rem] flex justify-center gap-4'>
                                {burgers.map((burger) => (
                                    <img
                                        key={burger.id}
                                        src={burger.src}
                                        alt={burger.alt}
                                        onClick={() => setSelected(burger.id)}
                                        className={`cursor-pointer hover:brightness-150 transition-all duration-100 
            ${selected === burger.id ? "brightness-150" : ""}`}
                                    />
                                ))}
                            </div>
                        </DialogTrigger>
                        <DialogContent className="lg:w-[80vw] lg:max-w-[1000px] lg:h-auto lg:max-h-[80vh] h-screen bg-black opacity-95">
                            <DialogBody className="mt-[3rem]">

                                <div className="flex items-center justify-center gap-[3rem]">

                                    <div className="hidden lg:block">
                                        <img className="w-[30rem]" src={`https://bigburgerbackend-1.onrender.com${thumbnail}`} alt={title} />
                                    </div>

                                    <div className="overflow-auto max-h-[600px] scrollbar-hide">
                                        <div className="mx-[1rem]">
                                            <div className="flex flex-col items-center gap-[1rem]">
                                                <h2 className="text-[20px] font-bold">{title} </h2>
                                                <img className="lg:hidden w-[10rem]" src={`https://bigburgerbackend-1.onrender.com${thumbnail}`} alt={title} />
                                                <p className="text-[14px]">$ {price}</p>
                                                <p className="text-[14px]">{description}</p>

                                            </div>
                                            <div className="flex items-center justify-between py-[2rem]">
                                                <div className="flex items-center justify-center">
                                                    <p>Cantidad: {count}</p>
                                                </div>
                                                <div className="flex gap-[1rem] p-[1rem]">
                                                    <button className="bg-zinc-900 rounded-[10%_/_50%] w-[40px] h-[40px]" onClick={handleResta}>-</button>
                                                    <button className="bg-zinc-900 rounded-[10%_/_50%] w-[40px] h-[40px]" onClick={handleSuma}>+</button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="font-bold">Adicionales</p>
                                                <small>(Seleccionar 1)</small>
                                            </div>
                                            <div className="flex flex-col my-[1rem] gap-[1rem] p-[.5rem]">
                                                {additionals.map((a) => {
                                                    if (a.category === 'agregados') {
                                                        return (
                                                            <div key={a._id} className="flex items-center justify-between">
                                                                <div className="flex items-center justify-start gap-[1rem]">
                                                                    <input
                                                                        type="radio"
                                                                        id={`feature-${a._id}`}
                                                                        name="features"
                                                                        checked={selectedFeature === a._id}
                                                                        onChange={() => setSelectedFeature(a._id)}
                                                                    />
                                                                    <label htmlFor={`feature-${additionals._id}`}>
                                                                        <div>
                                                                            <p className="">{a.title}</p>
                                                                            <small>+ $ {a.price}</small>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <img className="w-[60px] lg:ml-[1rem]" src={`https://bigburgerbackend-1.onrender.com${a.thumbnail}`} alt={a.title} />
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
                                            <div className="flex flex-col my-[1rem] gap-[1rem] p-[.5rem]">
                                                {additionals.map((additional) => {
                                                    if (additional.category === 'bebidas') {
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
                                                                    <img className="w-[60px] lg:ml-[1rem]" src={`https://bigburgerbackend-1.onrender.com${additional.thumbnail}`} alt={additional.title} />
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

export default BurgersModal